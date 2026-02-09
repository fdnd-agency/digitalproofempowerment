<script>
  let {
    href = "#",
    target = "_self ",
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
    font-size: clamp(14px, 2.5vw, 18px)
  }
  .footer-link {
    /* background-color:var(--primary-darkest) ; */
    color: black;
    font-weight: 500;
    text-decoration: none;
    margin: 2rem;
    padding: 0.5rem;
    letter-spacing: 0.03rem;
    border: none;
  }

  .footer-link:visited {
    color: black;
  }
  .footer-link:hover {
    font-size: larger;
  }
</style>
