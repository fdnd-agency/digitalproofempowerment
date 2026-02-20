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
  .footer-links > ul {
    border-left: solid 1px white;
  }

  .footer-links > ul > li {
    list-style: none;
    /* margin:.5rem 1rem .5rem 0; */
    padding: 0.5rem;
    gap: var(--spacing-xs);
    font-size: clamp(12px, 3vw, 14px);
  }

  .footer-links > h4 {
    margin: 0.5rem;
  }
</style>
