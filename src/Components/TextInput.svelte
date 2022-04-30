<script lang="ts">
  import { capitaliseFirstCharacters } from "../utils";

  export let name: string;
  export let textarea: boolean = false;
  export let display: string = "";

  const styles =
    "transition-all flex-1 my-0.5 block rounded-md bg-neutral-600 border-transparent hover:bg-neutral-700 focus:bg-neutral-700 focus:border-neutral-500 outline-none focus:ring-0 caret-white";
</script>

<div class="flex my-4">
  <label for={name} class="m-auto mr-5 underline"
    >{capitaliseFirstCharacters(display || name)}</label
  >
  {#if textarea}
    <textarea type="text" class={styles + " h-24"} {name} id={name} />
  {:else}
    <input type="text" class={styles} {name} id={name} />
  {/if}
</div>
