<script>
  let { inputId, className,text,...rest} = $props();
</script>

<label for={inputId} class={className} {...rest}> 
    {text}
    <slot/>
</label>


<style>
  .optional-text-label {
    display: flex;
    flex-direction: column;
    margin: var(--spacing-sm);
    color: var(--secondary-text-color);
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
</style>
