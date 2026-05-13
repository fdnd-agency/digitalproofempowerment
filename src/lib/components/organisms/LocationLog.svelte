<script>
  import Input from "$lib/components/atoms/Input.svelte";
  import Label from "$lib/components/atoms/Label.svelte";

  let {
    locatieInput = $bindable(""),
    errors = {},
    mapUrl = "https://www.openstreetmap.org/export/embed.html?bbox=4.8,52.3,5.0,52.4&layer=mapnik",
    ...rest
  } = $props();
  let postcode = $state("");
  let housenumber = $state("");

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
      const address = data[0].address || {};

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

<section class="location-log">
  <iframe id="map" title="Workplace location map" src={mapUrl}></iframe>
  <div class="location-inputs">
    <Label className="log-label" inputId="locatie-input" text="Your location" />
    <Input
      id="locatie-input"
      onchange={zoekLocatie}
      type="text"
      placeholder="Type the workplace name or location here"
      bind:value={locatieInput}
      className="log-input"
      name="location"
      error={errors?.location}
    />
  </div>
  <div class="geolocation-controls">
    <Label className="log-label" inputId="geo-button" text="Want us to find you?" />
    <button id="geo-button" onclick={locatieViaGeolocatie} type="button" class="geo-button"
      >Click here!
    </button>
  </div>

  <div class="address-details">
    <div>
      <Label className="log-label" inputId="postcode-input" text="Postcode" />
      <Input
        id="postcode-input"
        type="text"
        placeholder="1234 AB"
        bind:value={postcode}
        className="log-input"
        name="postalCode"
      />
    </div>
    <div>
      <Label className="log-label" inputId="housenumber-input" text="Huisnummer" />
      <Input
        id="housenumber-input"
        type="text"
        placeholder="12"
        bind:value={housenumber}
        className="log-input"
        name="houseNumber"
      />
    </div>
  </div>
</section>

<style>
  .location-log {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }

  iframe {
    min-height: 230px;
    width: 100%;
    border-radius: var(--radius-md);
    background: linear-gradient(180deg, #95c7f4 0%, #dae7ff 100%);
    box-shadow: inset 0 0 0 1px rgb(13 22 49 / 5%);
  }

  .geolocation-controls {
    display: flex;
    gap: var(--spacing-sm);
    flex-wrap: wrap;
    align-items: center;
  }

  .geolocation-controls button {
    flex: 1;
    min-width: 140px;
    border: none;
    border-radius: var(--radius-md);
    padding: var(--spacing-sm) var(--spacing-md);
    font-weight: 700;
    color: white;
    background: var(--primary-dark);
    cursor: pointer;
    transition: transform 0.2s ease;
  }

  .geolocation-controls button:hover {
    background: #1e3f72;
    transform: translateY(-1px);
  }

  .geo-button {
    background: var(--accent-dark);
  }

  .geo-button:hover {
    background: #2f6cbb;
  }

  .location-inputs {
    display: grid;
    gap: var(--spacing-xs);
  }

  .address-details {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: var(--spacing-md);
  }

  @media (width <= 768px) {
    iframe {
      min-height: 180px;
    }

    .geolocation-controls {
      gap: var(--spacing-xs);
    }

    .geolocation-controls button {
      min-width: unset;
      padding: var(--spacing-xs) var(--spacing-md);
    }
  }

  @media (width <= 480px) {
    .location-log {
      gap: var(--spacing-sm);
    }

    iframe {
      min-height: 150px;
    }

    .geolocation-controls button {
      padding: calc(var(--spacing-xs) - 0.05rem) var(--spacing-xs);
      font-size: 0.9rem;
    }
  }
</style>
