<script>
  import {} from "$lib";
</script>

<div class="loader-container">
  <span class="circle-one"></span>
  <span class="circle-two"></span>
  <span class="circle-three"></span>
</div>

<style>
  .loader-container {
    display: flex;
    align-items: center;
    width: fit-content;
    gap: var(--spacing-xs);

    span {
      height: 0.7rem;
      width: 0.7rem;
      border-radius: var(--radius-lg);
      background-color: var(--accent-neutral);
      animation: loading 1s ease infinite;
    }

    .circle-one {
      animation-delay: 0s;
    }

    .circle-two {
      animation-delay: 0.2s;
    }

    .circle-three {
      animation-delay: 0.3s;
    }
  }

  @keyframes loading {
    0% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(-1rem);
    }

    100% {
      transform: translateY(0);
    }
  }
</style>
