<script>
  import InfoCardsSection from "$lib/components/organisms/InfoCardsSection.svelte";
  import HomeClock from "$lib/components/organisms/HomeClock.svelte";
  let { data } = $props();
</script>

<main>
  <section class="cards">
    <InfoCardsSection {data} />
  </section>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    min-height: 100vh;
    background-color: hsl(213deg 80% 94%);
  }

  .cards {
    margin: var(--spacing-2xl) 0;
  }

  @media (width <= 899px) {
    .cards {
      height: fit-content;
    }
  }
</style>
