<script>
  // import SubmitForm from "$lib/components/organisms/SubmitForm.svelte";
  import LocationLog from "$lib/components/organisms/LocationLog.svelte";
  import DateTimeLog from "$lib/components/organisms/DateTimeLog.svelte";

  let locatieInput = $state("");
  let selectedDate = $state(null);
  let dateRange = $state({ start: null, end: null });
</script>

<main>
  <!-- <SubmitForm /> -->
  <div class="container">
    <section class="card location-card">
      <header class="card-header">
        <h2>Save your work location</h2>
      </header>
      <article class="card-content">
        <LocationLog bind:locatieInput />
      </article>
    </section>

    <section class="card datetime-card">
      <header class="card-header">
        <h2>Save your date and time</h2>
      </header>
      <article class="card-content">
        <DateTimeLog bind:selectedDate bind:dateRange />
      </article>
    </section>
  </div>
</main>

<style>
  main {
    padding: 10% var(--spacing-lg);
    min-height: 100vh;
    background: var(--background-color-primary);
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .location-card {
    border-radius: 1.5rem 0 0 1.5rem;
    border-right: var(--border);
  }

  .datetime-card {
    border-radius: 0 1.5rem 1.5rem 0;
  }

  .card {
    background: white;
    box-shadow: var(--box-shadow);
    overflow: hidden;
    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease;
  }

  .card-header {
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
    padding: var(--spacing-lg);
    border-bottom: 1px solid rgb(13 22 49 / 10%);
  }

  .card-header h2 {
    margin: 0;
    font-size: clamp(1.2rem, 2vw, 1.5rem);
    color: var(--primary-dark);
  }

  .card-content {
    padding: var(--spacing-xl);
  }

  @media (width <= 768px) {
    .container {
      grid-template-columns: 1fr;
      gap: var(--spacing-lg);
    }

    .location-card {
      border-right: none;
    }

    .card {
      border-radius: var(--radius-xl);
    }

    .card-content {
      padding: var(--spacing-lg);
    }

    .card-header {
      padding: 1.25rem;
    }

    .card-header h2 {
      font-size: 1.25rem;
    }
  }

  @media (width <= 480px) {
    .container {
      gap: var(--spacing-md);
    }

    .card {
      border-radius: var(--radius-lg);
    }

    .card-content {
      padding: calc(var(--spacing-lg) - var(--spacing-xs));
    }

    .card-header {
      padding: var(--spacing-md);
      gap: var(--spacing-sm);
    }

    .card-header h2 {
      font-size: 1.1rem;
    }
  }
</style>
