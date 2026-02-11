<script>
  import { CheckedIcon } from "$lib";

  let { headingText, Icon, className, level = "h1" } = $props();
</script>

<svelte:element this={level} class={className}>
  {#if Icon}
    <Icon class="icon" />
  {/if}
  {headingText}
</svelte:element>

<style>
  .heading {
    display: flex;
    flex-direction: row;
    gap: var(--spacing-sm);
    align-items: center;
    padding: var(--spacing-md) var(--spacing-xs) var(--spacing-xl) 0rem;
  }
</style>
