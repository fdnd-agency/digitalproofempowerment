<script>
  import Link from "../atoms/Link.svelte";
  let { cardSubText, Icon, cardTitle, labels, className, backgroundColor, backgroundColorDark, ctaText, ctaLink,
  } = $props();
</script>

<article
  class={className || "information-card"}
  style={`--card-bg: ${backgroundColor || "transparent"}; --card-bg-dark: ${backgroundColorDark || "transparent"}`}
>
  <h2 class="card-paragraph">{cardTitle}</h2>
  <p class="card-sub-paragraph">{cardSubText}</p>

  {#if labels}
    <div class="label-wrapper">
      {#each labels as label (label)}
        <span class="label">{label}</span>
      {/each}
    </div>
  {/if}

  {#if ctaText}
    <Link href="/{ctaLink}" className="emergency-link" text={ctaText} />
  {/if}

  {#if Icon}
    <div class="emergency-container-right">
      <div class="emergency-right-panel">
        <Icon />
      </div>
    </div>
  {/if}
</article>

<style>
  article {
    border: var(--border);
    padding: var(--spacing-lg);
    border-radius: var(--radius-md);
    box-shadow: var(--box-shadow-webkit);
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
    color: white;
    transition: transform 0.3s ease-in-out;
    background-color: var(--card-bg);
    position: relative;
  }

  .card-paragraph {
    font-size: clamp(20px, 3vw, 20px);
    color: var(--main-text-color);
    font-weight: bold;
  }

  .card-sub-paragraph {
    font-size: clamp(11px, 3vw, 13px);
    color: hsla(0, 0%, 100%, 0.5);
    text-wrap: wrap;
  }

  .information-card:hover {
    color: var(--primary-neutral);
    transform: scale(1.02);
  }

  @media (prefers-color-scheme: dark) {
    article {
      background-color: var(--card-bg-dark);
    }
  }

  .label-wrapper {
    display: flex;
    flex-direction: row;
    gap: var(--spacing-xxs);
    margin-top: auto;
  }

  .label {
    background-color: var(--primary-neutral);
    font-size: clamp(10px, 3vw, 11px);
    color: var(--secondary-text-color);
    padding: var(--spacing-xxxs) var(--spacing-xxs);
    border-radius: var(--radius-xs);
    align-self: flex-start;
  }

  .wide-card {
    grid-column: span 2;
  }

  .emergency-container-right {
    position: absolute;
    right: -1rem;
    bottom: -1.5rem;
    opacity: 0.16;
    width: 9rem;
    height: 9rem;
  }

  .emergency-right-panel :global(svg) {
    width: 100%;
    height: 100%;
    color: white;
  }

  .title-icon {
    font-weight: bolder;
    width: 100%;
    border-radius: var(--radius-sm);
    display: flex;
    flex-direction: row;
    gap: var(--spacing-md);
    align-items: center;
    text-align: left;
  }
</style>
