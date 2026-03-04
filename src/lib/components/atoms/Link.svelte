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
    color: inherit;
    text-decoration: none;
    letter-spacing: 0.05rem;
    border: none;
    text-wrap: wrap;
    border-bottom: 1px solid transparent;
  }

  .footer-link:visited {
    color: var(--secondary-text-color);
  }

  .proof-tip-intro {
    margin: var(--spacing-lg);
    color: var(--accent-dark);
    padding: var(--spacing-sm);
    text-decoration: none;
    border-bottom: solid 2px var(--primary-darkest);
    transition: 0.5s ease-in-out;
    font-size: clamp(16px, 2vw, 18px);
    text-align: center;
  }
  .proof-submit-intro {
    margin: var(--spacing-2xl);
    text-decoration: none;
    background-color: var(--accent-dark);
    color: var(--secondary-text-color);
    border: solid 1px;
    border-radius: var(--spacing-lg);
    padding: var(--spacing-sm);
    transition: 0.5s ease-in-out;
    font-size: clamp(16px, 2vw, 18px);
    text-align: center;
  }

  .proof-tip-intro:hover {
    border-bottom: solid 2px var(--primary-darkest);
    margin: var(--spacing-lg);
    background-color: var(--primary-darkest);
    border-radius: var(--spacing-lg);
    padding: var(--spacing-sm);
  }

  .proof-submit-intro:hover {
    color: var(--primary-darkest);
    background-color: white;
    margin: var(--spacing-2xl);
    padding: var(--spacing-sm);
  }

  @media (max-width: 500px) {
    .footer-link {
      text-wrap: nowrap;
    }
  }
</style>
