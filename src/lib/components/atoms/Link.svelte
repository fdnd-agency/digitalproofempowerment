<script>
  let { Icon, href = "#", target = "_self", rel, text, className } = $props();
</script>

<!-- When using this component enter class name as className. -->

<a {href} {target} {rel} class="link {className}">
  {#if Icon}
    <Icon class="icon" />
  {/if}
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

  .nav-link {
    color: var(--secondary-text-color);
    text-decoration: none;
    padding: 0.5rem;

    &:hover {
      background-color: var(--accent-neutral);
      border-radius: var(--radius-sm);
    }
  }



   .emergency-link {
    text-decoration: none;
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
    justify-self: flex-start;
    background-color: var(--emergency-color);
    color: var(--secondary-text-color);
    padding: var(--spacing-xs);

    &:hover {
      background-color: var(--main-background-color);
      color: var(--main-text-color);
    }
  }

  .white-button-link {
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
    background-color: var(--main-background-color);
    color: var(--main-text-color);
    border: var(--border);
    text-decoration: none;
    justify-self: flex-start;


    &:hover {
      background-color: var(--accent-neutral);
      color: var(--secondary-text-color);
    }
  }

  .black-button-link {
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
    justify-self: flex-start;

    background-color: var(--secondary-background-color);
    color: var(--secondary-text-color);
    border: none;
    padding: var(--spacing-xs);
    text-decoration: none;

    &:hover {
      background-color: var(--accent-neutral);
    }
  }




</style>
