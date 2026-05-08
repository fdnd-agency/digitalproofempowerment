<script>
  import Input from "$lib/components/atoms/Input.svelte";
  import Label from "$lib/components/atoms/Label.svelte";

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

<form class="datetime-log">
  <nav class="clock-mode-nav">
    <button
      type="button"
      class:active={clockMode === "clockIn"}
      onclick={() => (clockMode = "clockIn")}>Clock in</button
    >
    <button
      type="button"
      class:active={clockMode === "clockOut"}
      onclick={() => (clockMode = "clockOut")}>Clock out</button
    >
  </nav>

  <div class="date-selection">
    <Label className="log-label" inputId="dateInput" text="What date?" />
    <Input id="dateInput" type="date" className="log-input" bind:value={selectedDate} />
  </div>

  {#if clockMode === "clockIn"}
    <div class="time-selection">
      <Label className="log-label" inputId="clockInInput" text="Clock in" />
      <Input
        id="clockInInput"
        type="time"
        className="log-input"
        bind:value={clockChecker.clockIn}
      />
    </div>
  {:else if clockMode === "clockOut"}
    <div class="time-selection">
      <Label className="log-label" inputId="clockOutInput" text="Clock out" />
      <Input
        id="clockOutInput"
        type="time"
        className="log-input"
        bind:value={clockChecker.clockOut}
      />
    </div>
  {:else}
    <div class="time-selection">
      <Label className="log-label" inputId="clockInInput" text="Clock in" />
      <Input
        id="clockInInput"
        type="time"
        className="log-input"
        bind:value={clockChecker.clockIn}
      />
    </div>
    <div class="time-selection">
      <Label className="log-label" inputId="clockOutInput" text="Clock out" />
      <Input
        id="clockOutInput"
        type="time"
        className="log-input"
        bind:value={clockChecker.clockOut}
      />
    </div>
  {/if}

  <aside class="datetime-summary">
    <span>{selectedDate ? formatDate(selectedDate) : "Choose a date"}</span>
    <span>
      {clockMode === "clockIn" && clockChecker.clockIn
        ? clockChecker.clockIn
        : clockMode === "clockOut" && clockChecker.clockOut
          ? clockChecker.clockOut
          : "--:--"}
    </span>
  </aside>
</form>

<style>
  .datetime-log {
    display: grid;
    gap: var(--spacing-md);
  }

  .clock-mode-nav {
    display: flex;
    gap: var(--spacing-sm);
    flex-wrap: wrap;
  }

  .clock-mode-nav button {
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

  .clock-mode-nav button.active {
    background: var(--accent-dark);
    border-color: var(--accent-dark);
    color: white;
  }

  .date-selection,
  .time-selection {
    display: grid;
    gap: var(--spacing-xxs);
  }

  .datetime-summary span {
    flex: 1;
    min-width: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: var(--primary-dark);
  }

  @media (width <= 768px) {
    .datetime-summary {
      flex-direction: column;
      gap: var(--spacing-xs);
    }
  }
</style>
