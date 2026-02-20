<script>
  let {
    href = "#",
    target = "_self",
    rel,
    text,
    className,
    ariaLabel,
  } = $props();
</script>

<!-- When using this component enter class name as className. -->

<a {href} {target} {rel} class="link {className}" aria-label={ariaLabel}>
  {text}
</a>

<style>
  .link:focus {
    outline: 1px solid var(--accent-neutral);
  }
  .footer-link {
    color: white;
    font-weight: 300;
    text-decoration: none;
    margin-right: var(--spacing-xs);
    padding: var(--spacing-xs);
    padding-left: 0;
    letter-spacing: 0.05rem;
    border: none;
    text-wrap: wrap;
    border-bottom: 1px solid transparent;
    transition: border-bottom 0.3s ease-in-out;
  }

  .footer-link:visited {
    color: var(--secondary-text-color);
  }
  .footer-link:hover {
    border-bottom: solid 1px white;
  }

  @media (max-width: 500px) {
    .footer-link {
      text-wrap: nowrap;
    }
  }
</style>
