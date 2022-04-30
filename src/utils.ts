import { writable } from "svelte/store";

export const capitaliseFirstCharacters = (str: string) =>
  str
    .split("_")
    .map((s) => s.charAt(0).toLocaleUpperCase() + s.slice(1))
    .join(" ");

export function* chunks(arr: any[], n: number) {
  for (let i = 0; i < arr.length; i += n) {
    yield arr.slice(i, i + n);
  }
}

export const parameters = writable(0);
