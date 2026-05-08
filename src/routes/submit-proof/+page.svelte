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
      <div class="card-header">
        <h2>Save your work location</h2>
      </div>
      <div class="card-content">
        <LocationLog bind:locatieInput />
      </div>
    </section>

    <section class="card datetime-card">
      <div class="card-header">
        <h2>Save your date and time</h2>
      </div>
      <div class="card-content">
        <DateTimeLog bind:selectedDate bind:dateRange />
      </div>
    </section>
  </div>
</main>

<style>
  main {
    padding: 10% 2rem;
    min-height: 100vh;
    background: var(--secondary-lightest);
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
    gap: 1rem;
    padding: 1.5rem;
    border-bottom: 1px solid rgba(13, 22, 49, 0.1);
  }

  .card-header h2 {
    margin: 0;
    font-size: clamp(1.2rem, 2vw, 1.5rem);
    color: var(--primary-dark);
  }

  .card-content {
    padding: 2rem;
  }

  @media (max-width: 768px) {
    .container {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .location-card {
      border-right: none;
    }

    .card {
      border-radius: var(--radius-xl);
    }

    .card-content {
      padding: 1.5rem;
    }

    .card-header {
      padding: 1.25rem;
    }

    .card-header h2 {
      font-size: 1.25rem;
    }
  }

  @media (max-width: 480px) {
    .container {
      gap: 1rem;
    }

    .card {
      border-radius: var(--radius-lg);
    }

    .card-content {
      padding: 1.25rem;
    }

    .card-header {
      padding: 1rem;
      gap: 0.75rem;
    }

    .card-header h2 {
      font-size: 1.1rem;
    }
  }
</style>
