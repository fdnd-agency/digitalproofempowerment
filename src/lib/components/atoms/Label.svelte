<script>
  let { inputId, className, text, children, ...rest } = $props();
</script>

<label for={inputId} class={className} {...rest}>
  {text}
  {@render children?.()}
</label>

<style>
  .optional-text-label {
    display: flex;
    flex-direction: column;
    margin: var(--spacing-sm);
  }

  .email-label {
    color: var(--secondary-text-color);
    margin: var(--spacing-md) 0;
  }

  .email-label-verification {
    color: var(--secondary-text-color);
    margin: var(--spacing-md) 0;
  }

  .contact-form-label {
    font-weight: 500;
    font-size: clamp(0.9rem, 2vw, 1rem);
  }

  .log-label {
    font-weight: 600;
    color: var(--primary-dark);
    display: block;
    margin-bottom: var(--spacing-xs);
    font-family: var(--body-font);
  }

  @media (width <= 480px) {
    .log-label {
      font-size: 0.9rem;
      margin-bottom: var(--spacing-xxs);
    }
  }
</style>
