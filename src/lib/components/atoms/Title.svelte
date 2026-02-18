<script>
  let { headingText, Icon, className, level = "h1" } = $props();

  const levels = ["h1", "h2", "h3", "h4", "h5", "h6"];

  const validateLevel = (level) => {
    return levels.includes(level) ? level : "h1";
  };

  const validatedLevel = $derived(validateLevel(level));
</script>

<svelte:element this={validatedLevel} class={className}>
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

  .footer-heading {
    color: var(--secondary-text-color);
  }

  .question-title {
    justify-self: center;
    margin: var(--spacing-xs);
    padding: var(--spacing-xs);
    font-size: larger;
    color: var(--secondary-text-color);
  }

  .quiz-intro-title {
    color: var(--secondary-text-color);
  }

  .proof-intro {
    color: var(--accent-neutral);
    padding: var(--spacing-2xl);
    font-weight: 400 !important;
  }

  @media (max-width: 400px) {
    .quiz-intro-title {
      font-size: clamp(20px, 4.5vw, 36px);
    }
  }
</style>
