<script>
  import { Title } from "$lib";
  import AsteriskIcon from "$lib/assets/svg/AsteriskIcon.svelte";

  let { level = "h2" } = $props();
</script>

<a class="href-link" href="tel+112">
  <section class="emergency-container">
    <div class="emergency-container-content-wrapper">
      <Title headingText="Emergency services" className="emergency-container-title" {level} />
      <p class="emergency-container-paragraph">112</p>
    </div>

    <div class="emergency-right-panel">
      <AsteriskIcon class="emergency-right-icon" />
    </div>
  </section>
</a>

<style>
  .href-link {
    text-decoration: none;
    background: linear-gradient(90deg, hsl(7deg 76% 61%), hsl(7deg 47% 46%));
    border-radius: var(--radius-md);
    box-shadow: var(--box-shadow-webkit);
    padding: var(--spacing-md);
  }

  @media (width >= 769px) {
    .href-link {
      grid-column: span 2;
    }
  }

  .emergency-container {
    display: flex;
    flex-direction: row;
    gap: var(--spacing-md);
    justify-content: space-between;
  }

  .emergency-container-content-wrapper {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xs);
  }

  .emergency-container-paragraph {
    color: var(--secondary-text-color);
    font-size: clamp(25px, 1.5vw, 28px);
  }

  .emergency-right-panel {
    border-radius: var(--radius-md);
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ffffff29;
    backdrop-filter: blur(8px);
    align-self: center;
    padding: var(--spacing-xxs);
  }

  /* 
.href-link {
  padding: 1rem;
}


  .emergency-container {
    padding: var(--spacing-sm);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--spacing-lg);
    background: linear-gradient(90deg, hsl(7deg 76% 61%), hsl(7deg 47% 46%));
    color: var(--secondary-text-color);
    border-radius: var(--radius-md);
    min-height: 12rem;
  }

  .emergency-container-content-wrapper {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xs);
    flex: 1 1 20rem;
    min-width: 0;
  }

  .button-wrapper {
    margin-top: var(--spacing-sm);
  }

  .emergency-container-right {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
  }

  .emergency-right-panel {
    display: grid;
    place-items: center;
    width: 5rem;
    height: 5rem;
    border-radius: 1.25rem;
    background: #ffffff29;
    border: 1px solid #ffffff2e;
    backdrop-filter: blur(8px);
  }

  .emergency-right-panel :global(svg) {
    width: 3.2rem;
    height: 3.2rem;
    color: #fff;
  }

  .emergency-container-paragraph {
    color: #ffffffbf;
    max-width: 34rem;
    margin: 0;
  }

  @media (width <= 768px) {
    .emergency-container {
      align-items: stretch;
      padding: var(--spacing-3xl) var(--spacing-xl);
    }

    .emergency-container-right {
      justify-content: flex-start;
      margin-top: var(--spacing-lg);
    }

    .emergency-right-panel {
      width: 5.5rem;
      height: 5.5rem;
    }
  }
 */
</style>
