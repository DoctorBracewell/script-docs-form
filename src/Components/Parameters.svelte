<script lang="ts">
  import { capitaliseFirstCharacters, parameters } from "../utils";
  import TextInput from "./TextInput.svelte";

  let params;

  parameters.subscribe((n) => (params = n));

  const addParameter = () => {
    parameters.update((n) => n + 1);
  };

  const removeParameter = () => {
    parameters.update((n) => n - 1);
  };
</script>

<div id="parameters" class="w-full flex flex-col">
  <div class="w-full flex flex-row justify-center">
    <button
      type="button"
      class="w-3/12 bg-neutral-200 py-3 text-black rounded-md hover:bg-neutral-400 transition-colors text-xl my-5 mr-3"
      on:click={addParameter}>Add Parameter</button
    >
    <button
      type="button"
      class="w-3/12 bg-neutral-200 py-3 text-black rounded-md hover:bg-neutral-400 transition-colors text-xl my-5 ml-3"
      on:click={removeParameter}>Remove Parameter</button
    >
  </div>

  {#each Array(params) as _, index}
    <fieldset class="border-2 border-neutral-400 px-3 rounded-md mb-5">
      <legend>{capitaliseFirstCharacters(`parameter_${index}`)}</legend>
      <TextInput name={`parameter_${index}_name`} display="name" />
      <TextInput name={`parameter_${index}_type`} display="type" />
    </fieldset>
  {/each}
</div>
