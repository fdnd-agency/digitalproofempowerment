<script>
  import quizData from "$lib/data/quizData.js";
  import HomeQuizSection from "$lib/components/organisms/HomeQuizSection.svelte";
  import InfoCardsSection from "$lib/components/organisms/InfoCardsSection.svelte";
</script>

<main>
  <section class="quiz">
    <HomeQuizSection />
  </section>
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
  }
  .quiz {
    height: 100vh;
    margin: 0;
  }
  .cards {
    min-height: 100%;
    margin: 10% 0;
  }

  @media (max-width: 899px) {
    .cards {
      height: auto;
      max-height: 100%;
    }
    .quiz {
      min-height: 100%;
    }
  }
  @media (max-width: 400px) {
    .quiz {
      min-height: 50%;
    }
  }
</style>
