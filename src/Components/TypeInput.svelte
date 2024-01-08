<script lang="ts">
  import { capitaliseFirstCharacters } from "../utils";

  export let name: string;
  export let textarea: boolean = false;
  export let display: string = "";

  let value = "";

  const styles =
    "transition-all flex-1 my-0.5 block rounded-md bg-neutral-600 border-transparent hover:bg-neutral-700 focus:bg-neutral-700 focus:border-neutral-500 outline-none focus:ring-0 caret-white";
</script>

<div class="flex my-4">
  <label for={name} class="m-auto mr-5 underline"
    >{capitaliseFirstCharacters(display || name)}</label
  >
  {#if textarea}
    <textarea class={styles + " h-24"} {name} id={name} />
  {:else}
    <input type="text" class={styles} {name} id={name} bind:value />
  {/if}
  <div class="flex m-auto mx-4">
    {#each ["bool", "integer", "decimal", "string", "void"] as type}
      <button
        class="p-1 bg-neutral-200 py-3 text-black rounded-md hover:bg-neutral-400 transition-colors text-xl my-5 mr-3"
        on:click={() => (value = type)}>{type.toLocaleUpperCase()}</button
      >
    {/each}
  </div>
</div>
