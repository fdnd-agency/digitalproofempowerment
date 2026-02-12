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
    gap: 0.5rem;
  }
</style>
