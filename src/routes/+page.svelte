<script>
  import quizData from "$lib/data/quizData.js";
  import HomeQuizSection from "$lib/components/organisms/HomeQuizSection.svelte";
  import SideBar from "$lib/components/organisms/SideBar.svelte";
  import SubmittingProofInfo from "$lib/components/organisms/SubmittingProofInfo.svelte";
</script>

<main>
  <section class="quiz">
    <HomeQuizSection />
  </section>
  <section class="cards">
    <SideBar />
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
    min-height: 50vh;
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
