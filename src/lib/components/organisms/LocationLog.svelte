<script>
  let {
    locatieInput = $bindable(""),
    mapUrl = "https://www.openstreetmap.org/export/embed.html?bbox=4.8,52.3,5.0,52.4&layer=mapnik",
  } = $props();

  let postcode = "";
  let housenumber = "";

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
      mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lon}`;
    } catch (error) {
      console.error("Fout bij zoeken:", error);
      alert("Fout bij het zoeken naar de locatie");
    }
  }

  function locatieViaGeolocatie() {
    if (!navigator.geolocation) {
      alert("Geolocatie wordt niet ondersteund in deze browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude: lat, longitude: lon } = position.coords;
        const offset = 0.05;
        const bbox = `${lon - offset},${lat - offset},${lon + offset},${lat + offset}`;
        mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lon}`;
        locatieInput = `${lat.toFixed(5)}, ${lon.toFixed(5)}`;
      },
      (error) => {
        console.error("Geolocatie fout:", error);
        alert("Kan je locatie niet ophalen. Geef toestemming of probeer het opnieuw.");
      }
    );
  }
</script>

<div class="location-log">
  <iframe id="map" title="Workplace location map" src={mapUrl}></iframe>
  <div class="column-inputs">
    <label for="locatieInput">Your location</label>
    <input
      id="locatieInput"
      onchange={zoekLocatie}
      type="text"
      placeholder="Type the workplace name or location here"
      bind:value={locatieInput}
    />
  </div>
  <div class="button-row">
    <label for="geo-button">Want us to find you?</label>
    <button id="geo-button" onclick={locatieViaGeolocatie} type="button" class="geo-button"
      >Click here!</button
    >
  </div>

  <div class="two-column-inputs">
    <div>
      <label for="postcodeInput">Postcode</label>
      <input id="postcodeInput" type="text" placeholder="1234 AB" bind:value={postcode} />
    </div>
    <div>
      <label for="housenumberInput">Huisnummer</label>
      <input id="housenumberInput" type="text" placeholder="12" bind:value={housenumber} />
    </div>
  </div>
</div>

<style>
  .location-log {
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

  .location-log input {
    width: 100%;
    border: var(--border);
    border-radius: var(--radius-md);
    padding: 0.75rem;
    font-size: 1rem;
    outline: none;
    transition:
      border-color 0.2s ease,
      box-shadow 0.2s ease;
    background-color: white;
  }

  .location-log input:focus {
    border-color: var(--primary-dark);
    box-shadow: 0 0 0 4px rgba(61, 114, 205, 0.08);
  }

  .button-row {
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;
    align-items: center;
  }

  .button-row button {
    flex: 1;
    min-width: 140px;
    border: none;
    border-radius: var(--radius-md);
    padding: 0.9rem 1rem;
    font-weight: 700;
    color: white;
    background: var(--primary-dark);
    cursor: pointer;
    transition:
      transform 0.2s ease;
  }

  .button-row button:hover {
    background: #1e3f72;
    transform: translateY(-1px);
  }

  .geo-button {
    background: var(--accent-dark);
  }

  .geo-button:hover {
    background: #2f6cbb;
  }

  .column-inputs {
    display: flex;
    flex-direction: column;
  }

  .two-column-inputs {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
  }

  .two-column-inputs label {
    margin-bottom: 0.5rem;
  }

  label {
    font-weight: 600;
    color: var(--primary-dark);
    display: block;
    margin-bottom: 0.5rem;
  }

  @media (max-width: 768px) {

    iframe {
      min-height: 180px;
    }

    .location-log input {
      padding: 0.6rem;
      font-size: 0.9rem;
    }

    .button-row {
      gap: 0.5rem;
    }

    .button-row button {
      min-width: unset;
      padding: 0.8rem 1rem;
    }
  }

  @media (max-width: 480px) {
    .location-log {
      gap: 0.75rem;
    }

    iframe {
      min-height: 150px;
    }

    .location-log input {
      padding: 0.5rem;
      font-size: 0.85rem;
    }

    .button-row button {
      padding: 0.7rem 0.8rem;
      font-size: 0.9rem;
    }

    label {
      font-size: 0.9rem;
      margin-bottom: 0.25rem;
    }
  }
</style>