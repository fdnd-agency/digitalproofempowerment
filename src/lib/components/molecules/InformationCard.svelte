<script>
  let { cardSubText, Icon, cardTitle, labels, className } = $props();
</script>

<article class={className || "information-card"}>
  {#if Icon}
    <Icon class="icon" />
  {/if}
  <h2 class="card-paragraph">{cardTitle}</h2>
  <p class="card-sub-paragraph">{cardSubText}</p>
  {#if labels}
    <div class="label-wrapper">
      {#each labels as label}
        <span class="label">{label}</span>
      {/each}
    </div>
  {/if}
</article>

<style>
  article {
    border: var(--border);
    padding: var(--spacing-md);
    border-radius: var(--radius-md);

    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
    justify-content: center;
    height: fit-content;

    box-shadow: var(--box-shadow);
    -webkit-box-shadow: var(--box-shadow-webkit);
  }

  .card-paragraph {
    font-size: clamp(20px, 3vw, 20px);
    color: var(--main-text-color);
    font-weight: bold;
  }

  .card-sub-paragraph {
    font-size: clamp(11px, 3vw, 13px);
    color: var(--main-text-color);
    text-wrap: wrap;
  }

  .information-card:hover {
    color: var(--primary-neutral);
    transform: scale(1.05) rotate(1deg);
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
  .title-icon {
    font-weight: bolder;
    width: 100%;
    text-align: center;
    border-radius: var(--radius-sm);
    display: flex;
    flex-direction: row;
    gap: var(--spacing-md);
    align-items: center;
    text-align: left;
  }

  .custom-card {
    padding: var(--spacing-md);
    border: var(--border);
    border-radius: var(--radius-md);
    margin: var(--spacing-md);
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
    background-color: rgba(12, 4, 43, 0.2);
    text-align: left;
    font-size: clamp(14px, 3vw, 16px);
    box-shadow: var(--box-shadow);
    -webkit-box-shadow: var(--box-shadow-webkit);
    transition: transform 0.3s ease-in-out;
  }

  .custom-card:nth-child(even) {
    background-color: rgba(214, 116, 35, 0.4);
  }

  .custom-card > h2 {
    font-size: clamp(14px, 3vw, 16px);
  }
  .custom-card:hover {
    transform: scale(1.1) rotate(-2deg);
    background-color: rgba(4, 1, 15, 0.4);
  }
  .custom-card:nth-child(even):hover {
    background-color: rgba(197, 91, 5, 0.7);
    transform: scale(1.1) rotate(2deg);
  }

  @media (max-width: 899px) {
    .custom-card:hover,
    .custom-card:nth-child(even):hover {
      transform: none;
    }
  }
</style>
