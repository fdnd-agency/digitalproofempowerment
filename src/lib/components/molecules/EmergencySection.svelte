<script>
  import { Title, Link, PhoneIcon } from "$lib";
  import AsteriskIcon from "$lib/assets/svg/AsteriskIcon.svelte";

  let { pageLabel, level = "h2" } = $props();
</script>

<section class="emergency-container">
  <div class="emergency-container-content-wrapper">
    <p class="emergency-container-paragraph">Emergency services</p>
    <Title headingText="112" class="emergency-container-title" {level} />
    <div class="button-wrapper">
      <Link
        href="tel:+112"
        Icon={PhoneIcon}
        className="emergency-link"
        text="Call 112"
        target="_self"
      />
    </div>
  </div>

  <div class="emergency-container-right">
    <div class="emergency-right-panel">
      <AsteriskIcon class="emergency-right-icon" />
    </div>
  </div>
</section>

<style>
  .emergency-container {
    padding: var(--spacing-xl);
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
    width: 6rem;
    height: 6rem;
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
</style>
