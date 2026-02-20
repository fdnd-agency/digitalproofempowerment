<script>
  import QuizBox from "../molecules/QuizBox.svelte";
  import quizData from "$lib/data/quizData.js";
  import TextBlock from "../molecules/TextBlock.svelte";
</script>

<div class="container">
  <TextBlock
    headingText="Not sure where to begin? We've got you."
    text=" Take a moment to answer a few quick questions and get directed to the page that's perfect for you, so we can help you in the best way possible."
    titleClass="quiz-intro-title"
    textClass="quiz-intro-text"
    className="quiz-block"
  />

  <QuizBox />
</div>

<style>
  .container {
    background-image: url(src/lib/assets/Images/sebastian-svenson-d2w-_1LJioQ-unsplash.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-color: var(--primary-darkest);
    width: 100%;
    min-height: 70%;
    padding: var(--spacing-2xl);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media (max-width: 400px) {
    .container {
      padding: var(--spacing-md);
    }
  }
</style>
