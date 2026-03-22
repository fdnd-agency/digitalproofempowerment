<script>
  let {
    type,
    name,
    value = "",
    placeholder,
    className,
    id,
    ...rest
  } = $props();
</script>

{#if type === "textarea"}
  <textarea {id} {name} placeholder={placeholder} class={className} {...rest}>{value}</textarea>
{:else}
  <input {id} {type} {name} placeholder={placeholder} value={value} class={className} {...rest} />
{/if}

<style>
  .optional-text {
    min-height: 100px;
    border-radius: 16px;
    border: 1px solid #ccc;
    font-size: 14px;
    padding: var(--spacing-xs);
    box-sizing: border-box;
    width: 100%;
    resize: vertical;
    line-height: 1.5;
    overflow-y: auto;
    white-space: pre-wrap;
    overflow-wrap: break-word;
    word-break: break-word;
    font-family: inherit;
    margin-top: var(--spacing-xs);
  }

  .optional-text::placeholder {
    color: #999;
    opacity: 1;
  }

  .email-input {
    border-radius: 16px;
    padding: var(--spacing-xs);
    margin: var(--spacing-xs);
  }
  .email-input-verification {
    border-radius: 16px;
    padding: var(--spacing-xs);
    margin: var(--spacing-xs);
  }


  .contact-form-input {
  padding: var(--spacing-sm);
        border: var(--border);
        border-radius: var(--radius-md);
        font-family: var(--main-font);
        font-size: clamp(0.95rem, 2vw, 1rem);
        outline: none;
        transition:
            border-color 0.2s ease,
            box-shadow 0.2s ease;
            background-color: var(--main-background-color);
}

.contact-form-input:focus {
   border-color: var(--accent-dark);
        box-shadow: 0 0 10px rgba(237, 130, 72, 0.2);
}




</style>
