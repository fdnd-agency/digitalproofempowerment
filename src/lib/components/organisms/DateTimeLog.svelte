<script>
  let { selectedDate = $bindable(null) } = $props();

  let clockMode = $state("clockIn");
  let clockChecker = $state({ clockIn: "", clockOut: "" });

  function formatDate(value) {
    if (!value) return "";
    return new Date(value).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  }
</script>

<div class="datetime-log">
  <div class="mode-row">
    <button
      type="button"
      class:active={clockMode === "clockIn"}
      onclick={() => (clockMode = "clockIn")}>Inklokken</button
    >
    <button
      type="button"
      class:active={clockMode === "clockOut"}
      onclick={() => (clockMode = "clockOut")}>Uitklokken</button
    >
  </div>

  <div class="datetime-field">
    <label for="dateInput">What date?</label>
    <input id="dateInput" type="date" bind:value={selectedDate} />
  </div>

  {#if clockMode === "clockIn"}
    <div class="datetime-field">
      <label for="clockInInput">Clock in</label>
      <input id="clockInInput" type="time" bind:value={clockChecker.clockIn} />
    </div>
  {:else if clockMode === "clockOut"}
    <div class="datetime-field">
      <label for="clockOutInput">Clock out</label>
      <input id="clockOutInput" type="time" bind:value={clockChecker.clockOut} />
    </div>
  {:else}
    <div class="datetime-field">
      <label for="clockInInput">Clock in</label>
      <input id="clockInInput" type="time" bind:value={clockChecker.clockIn} />
    </div>
    <div class="datetime-field">
      <label for="clockOutInput">Clock out</label>
      <input id="clockOutInput" type="time" bind:value={clockChecker.clockOut} />
    </div>
  {/if}

  <div class="datetime-summary">
    <span>{selectedDate ? formatDate(selectedDate) : "Choose a date"}</span>
    <span>
      {clockMode === "clockIn" && clockChecker.clockIn
        ? clockChecker.clockIn
        : clockMode === "clockOut" && clockChecker.clockOut
          ? clockChecker.clockOut
          : "--:--"}
    </span>
  </div>
</div>

<style>
  .datetime-log {
    display: grid;
    gap: var(--spacing-md);
  }

  .mode-row {
    display: flex;
    gap: var(--spacing-sm);
    flex-wrap: wrap;
  }

  .mode-row button {
    flex: 1;
    min-width: 120px;
    padding: var(--spacing-sm) var(--spacing-md);
    border: 1px solid rgb(13 22 49 / 16%);
    border-radius: var(--radius-md);
    background: white;
    color: var(--primary-dark);
    cursor: pointer;
    transition: border-color 0.2s ease;
  }

  .mode-row button.active {
    background: var(--accent-dark);
    border-color: var(--accent-dark);
    color: white;
  }

  .datetime-field {
    display: grid;
    gap: var(--spacing-xxs);
  }

  .datetime-field label {
    font-weight: 700;
    color: var(--primary-dark);
    text-transform: capitalize;
  }

  .datetime-field input {
    width: 100%;
    border: var(--border);
    border-radius: var(--radius-md);
    padding: var(--spacing-sm) var(--spacing-sm);
    font-size: 1rem;
    background: white;
    color: var(--primary-dark);
    outline: none;
    transition:
      border-color 0.2s ease,
      box-shadow 0.2s ease;
  }

  .datetime-field input:focus {
    border-color: var(--primary-dark);
    box-shadow: 0 0 0 4px rgb(61 114 205 / 8%);
  }

  .datetime-summary {
    display: flex;
    justify-content: space-between;
    gap: var(--spacing-md);
    padding: var(--spacing-md);
    border-radius: var(--radius-md);
    background: var(--secondary-light);
    color: var(--primary-dark);
    font-weight: 600;
  }

  .datetime-summary span {
    flex: 1;
    min-width: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (max-width <= 768px) {
    .datetime-summary {
      flex-direction: column;
      gap: var(--spacing-xs);
    }
  }
</style>
