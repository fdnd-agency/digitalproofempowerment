<script>
  let { locatieInput = $bindable(""), mapUrl = "https://www.openstreetmap.org/export/embed.html?bbox=4.8,52.3,5.0,52.4&layer=mapnik" } = $props();

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
</script>

<div class="location-log">
  <iframe
    id="map"
    title="Workplace location map"
    src={mapUrl}
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
    onchange={zoekLocatie}
    type="text"
    placeholder="type the workplace name or location here"
    bind:value={locatieInput}
  />
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
</style>