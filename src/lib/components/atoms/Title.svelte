<script>

  let { headingText, Icon, className, level = "h1" } = $props();

  const levels = ["h1", "h2", "h3", "h4", "h5", "h6"];
  const CurrentLevel = $derived(level);

  const validateLevel = (level) => {
    return levels.includes(level) ? level : "h1";
  };
</script>

<svelte:element this={validateLevel(level)} class={className}>
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
