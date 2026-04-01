<script>
  import Link from "../atoms/Link.svelte";
  let { groupName, className, links = [] } = $props();
</script>

<div class={className}>
  <h4>{groupName}</h4>
  <ul>
    {#each links as link (link.href)}
      <li>
        <Link
          className={link.className}
          href={link.href}
          rel={link.rel}
          ariaLabel={link.ariaLabel}
          text={link.text}
        />
      </li>
    {/each}
  </ul>
</div>

<style>
  .footer-links > ul > li {
    list-style: none;
    font-size: clamp(12px, 3vw, 14px);
    padding: var(--spacing-xs);
    padding-left: 0;
  }

  .footer-links > h4 {
    margin-bottom: 1rem;
    padding: 0;
  }
  .footer-links {
    padding: var(--spacing-md);
    margin-top: var(--spacing-xs);
  }
</style>
