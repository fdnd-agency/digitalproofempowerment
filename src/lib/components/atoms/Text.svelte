<script>
  let { text, Icon, className } = $props();
</script>

<p class={className}>
  {#if Icon}
    <Icon class="icon" />
  {/if}
  {text}
</p>

<style>
  .footer-text {
    display: flex;
    text-wrap: wrap;
    width: 100%;
    font-size: clamp(14px, 3vw, 15px);
    padding: var(--spacing-sm);
    padding-top: 0;
  }

  .quiz-intro-text {
    color: var(--secondary-text-color);
    padding: var(--spacing-xs);
  }

  .form-text {
    margin: var(--spacing-sm);
    color: var(--secondary-text-color);
    text-align: center;
  }

  .form-anon-text {
    margin: var(--spacing-xs);
    color: var(--secondary-text-color);
    align-self: center;
  }

  .proof-type {
    margin-top: var(--spacing-lg);
    color: var(--secondary-text-color);
  }

  .error {
    font-size: clamp(11px, 3vw, 12px);
    background-color: var(--emergency-color);
    width: fit-content;
    padding: var(--spacing-xxs);
    border-radius: var(--radius-sm);
    color: var(--secondary-text-color);
    font-style: italic;
    padding-left: var(--spacing-xs);
    padding-right: var(--spacing-xs);
    margin-top: var(--radius-xs);

    display: flex;
    flex-direction: row;
    gap: var(--spacing-xxs);
    justify-content: center;
    align-items: center;
  }
  .feedback {
    color: var(--secondary-text-color);
    padding: var(--spacing-xs);
    font-size: clamp(16px, 3vw, 18px);

  }

  @media (width <= 500px) {
    .quiz-intro-text {
      font-size: clamp(14px, 3vw, 18px);
    }
  }

  .contact-form-container-paragraph {
    max-width: 30rem;
    text-wrap: pretty;
    font-style: italic;
    font-size: clamp(12px, 3vw, 16px);
  }
</style>
