<script>
  let { ErrorText, Icon, className } = $props();
</script>

<span class={className}>
  {#if Icon}
    <Icon class="icon" />
  {/if}
  {ErrorText}
</span>

<style>
  .error-message {
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

  .success-message {
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

  @keyframes fade-out {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
    }
  }
</style>
