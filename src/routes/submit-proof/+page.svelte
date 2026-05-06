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
  <section class="log-hours">
    <div class="page-layout">
      <section class="hero-panel">
        <h1 class="back-link">Log your hours</h1>
        <LocationLog bind:locatieInput />
      </section>
      <section class="calendar-panel">
        <DateTimeLog bind:selectedDate bind:dateRange />
      </section>
    </div>
  </section>
</main>

<style>
  main {
    padding: 10% 2rem;
    display: grid;
    place-items: center;
    min-height: 100vh;
  }

  .log-hours {
    padding: 2rem;
    background: var(--secondary-lightest);
  }

  .page-layout {
    display: grid;
    grid-template-columns: 1fr 1.6fr;
    align-items: start;
    border-radius: var(--radius-xl);
    background: rgb(225 228 237);
    overflow: hidden;
  }

  .hero-panel {
    border-right: 1px solid rgba(13, 22, 49, 0.16);
    padding: 1.5rem;
    padding-right: 1.75rem;
  }

  .calendar-panel {
    padding: 1.5rem;
    padding-left: 1.75rem;
  }

  .back-link {
    display: inline-flex;
    align-items: center;
    color: var(--primary-dark);
    text-decoration: none;
    font-weight: 600;
    margin-bottom: 1rem;
  }
</style>
