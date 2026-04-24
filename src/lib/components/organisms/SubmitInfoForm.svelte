<script>
  let currentDate = new Date(2026, 3, 20);
  let selectedDate = null;

  $: daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  $: firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  $: adjustedFirstDay = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;
  $: monthDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  $: emptyDays = Array(adjustedFirstDay).fill(null);
  $: monthName = currentDate.toLocaleString("en-US", { month: "long", year: "numeric" });

  function previousMonth() {
    currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1);
  }

  function nextMonth() {
    currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1);
  }

  function selectDay(day) {
    selectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
  }

  let locatieInput = "";

  async function zoekLocatie() {
    if (!locatieInput.trim()) {
      alert("Voer een locatie in");
      return;
    }

    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(locatieInput)}&format=json&limit=1`
      );
      const data = await response.json();

      if (data.length === 0) {
        alert("Locatie niet gevonden");
        return;
      }

      const lat = parseFloat(data[0].lat);
      const lon = parseFloat(data[0].lon);

      const offset = 0.05;
      const bbox = `${lon - offset},${lat - offset},${lon + offset},${lat + offset}`;

      const mapElement = document.getElementById("map");
      if (mapElement) {
        mapElement.src = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lon}`;
      }
    } catch (error) {
      console.error("Fout bij zoeken:", error);
      alert("Fout bij het zoeken naar de locatie");
    }
  }
</script>

<div class="page-layout">
  <section class="hero-panel">
    <h1 class="back-link">Log your hours</h1>
    <div class="hero-card">
      <iframe
        id="map"
        title="Workplace location map"
        src="https://www.openstreetmap.org/export/embed.html?bbox=4.8,52.3,5.0,52.4&layer=mapnik"
      ></iframe>
      <div class="hero-copy">
        <p>
          A practical guide to securely recording and saving your working hours on your mobile
          phone. Learn simple and reliable ways to document your time, keep clear records, and
          ensure your information is safely stored. These instructions are easy to follow and
          suitable for everyone, even with limited technical experience.
        </p>
      </div>
      <label for="locatieInput">WorkPlace:</label>
      <input
        id="locatieInput"
        on:change={zoekLocatie}
        type="text"
        placeholder="type the workplace name or location here"
        bind:value={locatieInput}
      />
    </div>
  </section>

  <section class="calendar-panel">
    <div class="calendar-header">
      <button type="button" aria-label="Previous month" on:click={previousMonth}>←</button>
      <span>{monthName.toLowerCase()}</span>
      <button type="button" aria-label="Next month" on:click={nextMonth}>→</button>
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
          on:click={() => selectDay(day)}
          class:selected={selectedDate?.getDate() === day &&
            selectedDate?.getMonth() === currentDate.getMonth()}
        >
          {day}
        </button>
      {/each}
    </div>
  </section>
</div>

<style>
  .page-layout {
    display: grid;
    grid-template-columns: 1fr 1.6fr;
    align-items: start;
    border-radius: var(--radius-xl);
  }

  .hero-panel {
    border-right: 1px solid rgba(13, 22, 49, 0.16);
    padding-right: 1.75rem;
  }

  .hero-panel,
  .calendar-panel {
    background: rgb(225 228 237);
    padding: 1.5rem;
    height: 100%;
  }

  .calendar-panel {
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

  .hero-card {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  iframe {
    min-height: 230px;
    width: 100%;
    border-radius: var(--radius-md);
    background: linear-gradient(180deg, #95c7f4 0%, #dae7ff 100%);
    box-shadow: inset 0 0 0 1px rgba(13, 22, 49, 0.05);
  }

  .hero-copy p {
    color: var(--primary-dark);
    line-height: 1.7;
  }

  #locatieInput {
    width: 100%;
    border: var(--border);
    border-radius: var(--radius-md);
    padding: 0.75rem;
    font-size: 1rem;
    outline: none;
    transition: border-color 0.2s ease;
  }

  #locatieInput:focus {
    border-color: var(--primary-dark);
  }

  label {
    font-weight: 600;
    color: var(--primary-dark);
    display: block;
    margin-bottom: 0.5rem;
  }

  .calendar-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 1.25rem;
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

  .weekday-row {
    display: grid;
    grid-template-columns: repeat(7, minmax(0, 1fr));
    text-align: center;
    gap: 0.5rem;
    margin-bottom: 1rem;
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

  @media (max-width: 960px) {
    .page-layout {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 560px) {
    .calendar-header {
      flex-direction: column;
      align-items: flex-start;
    }
  }
</style>
