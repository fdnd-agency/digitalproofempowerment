<script>
  import Title from "../atoms/Title.svelte";
  import Button from "../atoms/Button.svelte";
  import quizData from "$lib/data/quizData.js";

  let currentIndex = $state("start");

  let currentQuestion = $derived(
    quizData.find((q) => q.index === currentIndex),
  );

  const handleAnswer = (next) => {
    currentIndex = next;
  };
</script>

<div class="quiz-container">
  {#if currentQuestion}
    <Title
      level="h3"
      headingText={currentQuestion.question}
      className="question-title"
    />

    <div class="option-wrapper">
      {#each currentQuestion.options as option}
        <Button
          buttonText={option.label}
          onclick={() => handleAnswer(option.next)}
          className="quiz-button"
          buttonType={currentQuestion.multiple ? "checkbox" : "radio"}
        />
      {/each}
    </div>
  {:else}
    <p>Error in flow!</p>
  {/if}
</div>

<style>
  .quiz-container {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(33px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    width: 80%;
    padding: var(--spacing-md);
  }

  .option-wrapper {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: var(--spacing-xs);
  }

  @media (max-width: 768px) {
    .quiz-container {
      width: 100%;
    }
    .option-wrapper {
      padding: var(--spacing-xs);
    }
  }
</style>
