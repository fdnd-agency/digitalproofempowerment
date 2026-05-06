<script>
  let { selectedDate = $bindable(null), dateRange = $bindable({ start: null, end: null }) } = $props();

  let currentDate = $state(new Date(2026, 3, 20));
  let pickerMode = $state("start");

  let daysInMonth = $derived(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate());
  let firstDayOfMonth = $derived(new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay());
  let adjustedFirstDay = $derived(firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1);
  let monthDays = $derived(Array.from({ length: daysInMonth }, (_, i) => i + 1));
  let emptyDays = $derived(Array(adjustedFirstDay).fill(null));
  let monthName = $derived(currentDate.toLocaleString("en-US", { month: "long", year: "numeric" }));

  function previousMonth() {
    currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1);
  }

  function nextMonth() {
    currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1);
  }

  function isInRange(day) {
    if (!dateRange.start || !dateRange.end) return false;
    const checkDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    return checkDate >= dateRange.start && checkDate <= dateRange.end;
  }

  function isStartOrEnd(day) {
    if (!dateRange.start && !dateRange.end) return false;
    const checkDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    const startMatch = dateRange.start && checkDate.getTime() === dateRange.start.getTime();
    const endMatch = dateRange.end && checkDate.getTime() === dateRange.end.getTime();
    return startMatch || endMatch;
  }

  function selectDay(day) {
    const selected = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    
    if (pickerMode === "start") {
      dateRange = { start: selected, end: null };
      pickerMode = "end";
    } else {
      if (dateRange.start && selected < dateRange.start) {
        dateRange = { end: dateRange.start, start: selected };
      } else {
        dateRange = { ...dateRange, end: selected };
      }
      pickerMode = "start";
    }
    selectedDate = selected;
  }

  function formatDate(date) {
    if (!date) return "";
    return date.toLocaleDateString("en-GB", { day: "2-digit", month: "2-digit", year: "numeric" });
  }
</script>

<div class="datetime-log">
  <div class="calendar-header">
    <button type="button" aria-label="Previous month" onclick={previousMonth}>←</button>
    <span>{monthName.toLowerCase()}</span>
    <button type="button" aria-label="Next month" onclick={nextMonth}>→</button>
  </div>
  <div class="date-range-display">
    <span>Start: {formatDate(dateRange.start) || "-"}</span>
    <span>End: {formatDate(dateRange.end) || "-"}</span>
  </div>
  <div class="weekday-row">
    <span>mon</span>
    <span>tue</span>
    <span>wed</span>
    <span>thu</span>
    <span>fri</span>
    <span>sat</span>
    <span>sun</span>
  </div>
  <div class="date-grid">
    {#each emptyDays as _}
      <div></div>
    {/each}
    {#each monthDays as day}
      <button
        type="button"
        onclick={() => selectDay(day)}
        class:in-range={isInRange(day)}
        class:start-end={isStartOrEnd(day)}
        class:selected={selectedDate?.getDate() === day &&
          selectedDate?.getMonth() === currentDate.getMonth()}
      >
        {day}
      </button>
    {/each}
  </div>
</div>

<style>
  .datetime-log {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .calendar-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding-bottom: 0.75rem;
    border-bottom: var(--border);
  }

  .calendar-header button {
    width: 2.5rem;
    height: 2.5rem;
    border: none;
    border-radius: 50%;
    background: var(--primary-dark);
    color: white;
    cursor: pointer;
    font-size: 1rem;
  }

  .calendar-header span {
    font-size: clamp(1.25rem, 2vw, 1.6rem);
    font-weight: 700;
    text-transform: capitalize;
  }

  .date-range-display {
    display: flex;
    justify-content: space-between;
    padding: 0.75rem;
    background: white;
    border-radius: var(--radius-md);
    font-size: 0.9rem;
    color: var(--primary-dark);
  }

  .weekday-row {
    display: grid;
    grid-template-columns: repeat(7, minmax(0, 1fr));
    text-align: center;
    gap: 0.5rem;
    font-size: 0.9rem;
    color: var(--primary-dark);
    text-transform: uppercase;
    letter-spacing: 0.1rem;
  }

  .date-grid {
    display: grid;
    grid-template-columns: repeat(7, minmax(0, 1fr));
    gap: 0.85rem;
  }

  .date-grid > div {
    aspect-ratio: 1;
  }

  .date-grid button {
    aspect-ratio: 1;
    border: 1px solid rgba(13, 22, 49, 0.12);
    border-radius: 50%;
    background: white;
    color: var(--primary-dark);
    font-size: 1rem;
    cursor: pointer;
    transition:
      transform 0.2s ease,
      background 0.2s ease;
  }

  .date-grid button:hover {
    transform: translateY(-2px);
    background: var(--secondary-light);
  }

  .date-grid button.selected {
    border-color: var(--accent-dark);
    background: var(--accent-dark);
    color: white;
  }

  .date-grid button.in-range {
    background: var(--accent-light);
    border-color: var(--accent-light);
    color: var(--primary-dark);
  }

  .date-grid button.start-end {
    background: var(--accent-dark);
    border-color: var(--accent-dark);
    color: white;
  }
</style>