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
    text-align: center;
  }

  .form-anon-text {
    margin: var(--spacing-xs);
    align-self: center;
  }

  .proof-type {
    margin-top: var(--spacing-lg);
  }

  .error {
    border-radius: 16px;
    padding: var(--spacing-xxs);
    margin: var(--spacing-md);
    background-color: var(--main-background-color);
    color: var(--accent-dark);
    border: 5px solid var(--accent-dark);
    transition: all 0.3s ease-in-out;
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
