<script>
  import InfoCardsSection from "$lib/components/organisms/InfoCardsSection.svelte";
</script>

<main>
  <section class="cards">
    <InfoCardsSection />
  </section>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    min-height: 100vh;
    background-color: hsl(213deg, 80%, 94%);
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
