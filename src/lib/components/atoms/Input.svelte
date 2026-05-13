<script>
  let {
    type,
    name,
    error,
    value = $bindable(""),
    placeholder,
    className,
    id,
    hidden,
    testing = "",
    ...rest
  } = $props();
</script>

{#if type === "textarea"}
  <textarea {id} {name} {placeholder} class={className} {...rest}>{value}</textarea>
{:else}
  <input
    class="{className} {error ? 'input-error' : ''}"
    {id}
    {type}
    {name}
    {placeholder}
    bind:value
    {...rest}
  />{/if}

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
    box-shadow: 0 0 10px rgb(237 130 72 / 20%);
  }

  .log-input {
    color-scheme: light;
    max-width: 100%;
    border: 3px solid var(--primary-dark);
    border-radius: var(--radius-md);
    padding: var(--spacing-sm);
    font-size: 1rem;
    outline: none;
    background-color: var(--background-color-secondary);
    color: var(--primary-text-color);
  }

  .log-input:focus {
    border-color: var(--primary-dark);
  }

  .input-error {
    border-color: var(--emergency);
    font-family: var(--body-font);
  }

  .success {
    font-size: clamp(11px, 3vw, 12px);
    background-color: green;
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
    animation: fade-out 1s ease forwards;
    animation-delay: 5s;
    opacity: 1;
  }
</style>
