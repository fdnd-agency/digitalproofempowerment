<script>
  let { show = $bindable(false), type = "success", message = "Success!" } = $props();

  import { SuccessMessageIcon, ErrorMessageIcon } from "$lib";

  $effect(() => {
    if (show) setTimeout(() => (show = false), 2500);
  });
</script>

{#if show}
  <dialog open>
    <div class="content-container {type}">
      <div class="icon">
        {#if type === "success"}
          <SuccessMessageIcon />
        {:else}
          <ErrorMessageIcon />
        {/if}
      </div>
      <p>{message}</p>
    </div>
  </dialog>
{/if}

<style>
  dialog {
    position: fixed;
    inset: 0;
    background: var(--primary-darkest);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
    border: none;
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
    margin: 0;
    padding: 0;
    animation: fade-in-out 2.5s ease forwards;
  }

  .content-container {
    background: var(--background-color-secondary);
    border-radius: var(--radius-lg);
    padding: var(--spacing-2xl);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-md);
  }

  .icon {
    font-size: 3rem;
    animation: pop 0.4s ease;
  }

  p {
    font-family: var(--body-font);
    color: var(--primary-dark);
    font-size: 1.2rem;
  }

  @keyframes pop {
    0% {
      transform: scale(0);
    }

    70% {
      transform: scale(1.2);
    }

    100% {
      transform: scale(1);
    }
  }

  @keyframes fade-in-out {
    0% {
      opacity: 0;
    }

    20% {
      opacity: 1;
    }

    80% {
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  }
</style>
