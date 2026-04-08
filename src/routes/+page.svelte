<script>
  import quizData from "$lib/data/quizData.js";
  import HomeQuizSection from "$lib/components/organisms/HomeQuizSection.svelte";
  import InfoCardsSection from "$lib/components/organisms/InfoCardsSection.svelte";
  import SubmittingProofInfo from "$lib/components/organisms/SubmittingProofInfo.svelte";
</script>

<main>
  <section class="quiz">
    <HomeQuizSection />
  </section>
  <section class="cards">
    <InfoCardsSection />
  </section>
  <section class="proof">
    <SubmittingProofInfo />
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
    margin: var(--spacing-2xl) 0;
  }

  .proof {
    background-color: var(--secondary-lightest);
    width: 100%;
    min-height: inherit;
    padding: 2rem;
  }

  @media (width <= 899px) {
    .cards {
      height: fit-content;
    }

    .quiz {
      min-height: inherit;
    }
  }

  @media (width <= 400px) {
    .quiz {
      min-height: inherit;
    }
  }
</style>
