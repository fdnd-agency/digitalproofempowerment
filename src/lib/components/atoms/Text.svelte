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
</style>
