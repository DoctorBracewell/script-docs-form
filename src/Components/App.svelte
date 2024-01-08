<script lang="ts">
  import { parameters } from "../utils";
  import { fade } from "svelte/transition";

  import { FunctionDocument, generateFromFormBody } from "../generateObject";
  import Parameters from "./Parameters.svelte";
  import TextInput from "./TextInput.svelte";
  import TypeInput from "./TypeInput.svelte";

  let output: FunctionDocument;
  let prettyOutput = "";
  let reset = false;
  let copied = false;

  const handleSubmit = (event) => {
    output = generateFromFormBody(event.target);
    prettyOutput = JSON.stringify(output, null, "\t") + ",\n";

    navigator.clipboard.writeText(prettyOutput);

    copied = true;
    setTimeout(() => (copied = false), 1500);
  };

  const resetForm = () => {
    output = undefined;
    reset = !reset;
    parameters.set(0);
  };
</script>

{#if copied}
  <div transition:fade class="absolute w-full flex text-neutral-200 h-14">
    <span class="m-auto text-lg">Copied to Clipboard!</span>
  </div>
{/if}

<main class="bg-neutral-800 w-full min-h-screen flex p-14 text-neutral-200">
  <form class="mr-20 flex-1" on:submit|preventDefault={handleSubmit}>
    <div class="w-full flex">
      <button
        type="button"
        on:click={resetForm}
        class="mx-auto w-3/12 bg-red-600 py-5 rounded-md hover:bg-red-700 transition-colors text-xl mb-3"
        >Reset</button
      >
    </div>

    {#key reset}
      <TextInput name="name" />
      <TextInput name="shortcut" />
      <Parameters />
      <TypeInput name="return_type" />
      <TextInput name="description" textarea />
      <TextInput name="code_example" textarea />
    {/key}

    <div class="w-full flex">
      <button
        type="submit"
        class="mx-auto w-6/12 bg-green-600 py-5 rounded-md hover:bg-green-700 transition-colors text-3xl mt-14"
        >Submit</button
      >
    </div>
  </form>
  <div
    class="output flex-1 bg-neutral-900 rounded-lg w-100 p-5 font-mono overflow-auto"
  >
    <pre>{prettyOutput}</pre>
  </div>
</main>
