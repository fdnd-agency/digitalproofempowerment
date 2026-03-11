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
  <textarea {name} placeholder={placeholder} class={className} {...rest}>{value}</textarea>
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
</style>
