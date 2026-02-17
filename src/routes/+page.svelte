<script>
  import quizData from "$lib/data/quizData.js";
  import HomeQuizSection from "$lib/components/organisms/HomeQuizSection.svelte";
</script>

<main>
  <section class="quiz">
    <HomeQuizSection />
  </section>
</main>

<style>
  main {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-areas: "quiz side";
    gap: 2rem;
    padding: 3rem;
    min-height: 100vh;
  }
  section {
    padding: 2rem;
  }
  .quiz {
    grid-area: quiz;
  }

  @media (max-width: 899px) {
    main {
      display: flex;
      flex-direction: column;
      padding: 1rem;
    }
  }
</style>
