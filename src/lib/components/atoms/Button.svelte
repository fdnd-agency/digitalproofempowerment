<script>
  let { className, buttonText, Icon, buttonType, ...rest } = $props();
</script>

<button class={className || "basic-button"} type={buttonType} {...rest}>
  {#if Icon}
    <Icon class="icon" />
  {/if}
  {buttonText}
</button>

<style>
  .basic-button {
    display: flex;
    align-items: center;
    gap: var(--spacing-xs);
    border-radius: var(--radius-xs);
    font-size: clamp(10px, 3vw, 14px);
    font-weight: 550;
    padding: var(--spacing-xs);
    -webkit-box-shadow: var(--box-shadow-webkit);
    box-shadow: var(--box-shadow);
    letter-spacing: 0.03rem;
    cursor: pointer;
  }

  :global(.btn-white) {
    background-color: var(--main-background-color);
    color: var(--main-text-color);
    border: var(--border);
  }

  :global(.btn-red) {
    background-color: var(--emergency-color);
    color: var(--secondary-text-color);
    border: none;
    padding: var(--spacing-xs);
  }

  :global(.btn-black) {
    background-color: var(--secondary-background-color);
    color: var(--secondary-text-color);
    border: none;
    padding: var(--spacing-xs);
  }

  .quiz-button {
    grid-row: 2;
    font-size: clamp(16px, 2.5vw, 20px);
    background: rgba(255, 255, 255, 0.2);
    border-radius: var(--spacing-md);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(20.6px);
    -webkit-backdrop-filter: blur(10.6px);
    border: 1px solid var(--accent-lightest);
    padding: var(--spacing-xl);
    padding-top: var(--spacing-xs);
    padding-bottom: var(--spacing-xs);
    margin: var(--spacing-xs);
    color: var(--secondary-text-color);
  }

  .quiz-button:hover {
    background-color: var(--accent-dark);
    border: 1px solid whitesmoke;
  }

  .quiz-button:focus {
    outline: 1px solid var(--accent-neutral);
  }
</style>
