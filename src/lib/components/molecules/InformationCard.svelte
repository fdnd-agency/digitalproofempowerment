<script>
  let { cardSubText, Icon, cardTitle, className } = $props();
</script>

<div class={className || "information-card"}>
  <div class="title-icon">
    {#if Icon}
      <Icon class="icon" />
    {/if}
    <p class="card-paragraph">{cardTitle}</p>
  </div>

  <p class="card-sub-paragraph">{cardSubText}</p>
</div>

<style>
  .information-card {
    border: var(--border);
    padding: var(--spacing-md);
    border-radius: var(--radius-md);
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
    justify-content: center;
    align-items: center;
    text-align: center;
    box-shadow: var(--box-shadow);
    -webkit-box-shadow: var(--box-shadow-webkit);
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

  .custom-card > p {
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
