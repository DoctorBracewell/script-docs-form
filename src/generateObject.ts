import { chunks } from "./utils";
import md from "markdown-ast";
import type {
  Text as MarkdownText,
  Bold,
  Strike,
  CodeSpan,
  Italic,
} from "markdown-ast";

export function generateFromFormBody(
  target: HTMLFormElement
): FunctionDocument {
  const formData = new FormData(target);

  // map formData to object
  const object = Object.fromEntries(formData.entries()) as FormValues;
  const { name, shortcut, return_type, description, code_example } = object;

  const parameters = createParameterArray(object);
  const descr = parseText(description);

  return {
    name,
    shortcut,
    return_type,
    parameters,
    description: descr,
    code_example: code_example.split("\n"),
  };
}

function createParameterArray(formValues: FormValues): Parameter[] {
  // Filter form values into parameter ones, then map into just the values
  const parameterValues = Object.entries(formValues)
    .filter(([key, _]) => key.startsWith("parameter"))
    .map(([_, value]) => value);

  // Chunk the array by 2 - (name, type), then map into the Parameter interface
  return [...chunks(parameterValues, 2)].map(([name, type]) => ({
    name,
    type,
  }));
}

function parseText(text: string): Line[] {
  const trimmedLines = text.split("\n").map((line) => line.trim());

  const listLines = trimmedLines.map((line) => ({
    list_item: line.startsWith("- "),
    text: line.startsWith("- ") ? line.slice(2) : line,
  }));

  const parsedLines = listLines.map((line) => {
    const nodes = md(line.text);

    const filtered: unknown = [...nodes].filter(function f(obj: any) {
      if (!["text", "bold", "codeSpan", "italic", "strike"].includes(obj.type))
        return false;

      if (obj?.block) return (obj.block = obj.block.filter(f)).length;

      return true;
    });

    const parsedText = loopOverArray(filtered as FilteredNode[], []);

    // I don't actually know how to fix this bug so here is a jank fix because no one really cares
    const finalText = parsedText.map(({ text, formatting }) => ({
      text,
      formatting:
        formatting.length === new Set(formatting).size ? formatting : [],
    }));

    return line.list_item
      ? [{ text: "- ", formatting: [] }, ...finalText]
      : finalText;
  });

  return parsedLines;
}

function loopOverArray(arr: FilteredNode[], stylesToAdd: Formatting[]): Text[] {
  const styleMap = {
    strike: "strikethrough",
  };

  return arr.reduce((acc, node) => {
    if (node.type === "text")
      return [
        ...acc,
        {
          text: node.text,
          formatting: stylesToAdd,
        },
      ];

    if (node.type === "codeSpan")
      return [
        ...acc,
        {
          text: node.code,
          formatting: ["code"],
        },
      ];

    return [
      ...acc,
      ...loopOverArray(node.block as unknown as FilteredNode[], [
        ...stylesToAdd,
        styleMap[node.type] ?? node.type,
      ]),
    ];
  }, []);
}

export interface FunctionDocument {
  name: string;
  shortcut: string;
  return_type: string;
  parameters: Parameter[];
  description: Line[];
  code_example: string[];
}

interface FormValues extends Record<string, string> {
  name: string;
  shortcut: string;
  return_type: string;
  description: string;
  code_example: string;
}

interface Parameter {
  name: string;
  type: string;
}

interface Text {
  text: string;
  formatting: Formatting[];
}

type Line = Text[];
type Formatting = "bold" | "italic" | "strikethrough" | "code";
type FilteredNode = MarkdownText | Bold | Strike | CodeSpan | Italic;
