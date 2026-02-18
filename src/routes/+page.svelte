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
  <section class="side">
    <SideBar />
  </section>
  <section class="proof">
    <SubmittingProofInfo />
  </section>
</main>

<style>
  main {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas:
      "quiz"
      "side"
      "proof ";
    gap: 2rem;
    padding: 3rem;
    min-height: 100vh;
  }
  .quiz {
    grid-area: quiz;
    height: inherit;
    margin: 10% 0;
  }
  .side {
    grid-area: side;
    overflow-y: auto;
    margin-bottom: 10%;
  }
  .proof {
    grid-area: proof;
    background-color: var(--secondary-lightest);
    width: 100%;
    height: fit-content;
    margin-bottom: 10%;
    padding: 2rem;
  }

  @media (max-width: 899px) {
    .side {
      height: auto;
      max-height: 50vh;
    }
  }

  @media (max-width: 899px) {
    main {
      display: flex;
      flex-direction: column;
      padding: 1rem;
    }
  }
</style>
