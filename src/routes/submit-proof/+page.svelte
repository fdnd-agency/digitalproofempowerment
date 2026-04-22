<script>
  import SubmitForm from "$lib/components/organisms/SubmitForm.svelte";

  let { data } = $props();

  import { onMount, onDestroy } from "svelte";
  import { browser } from "$app/environment";

  let map;
  let mapContainer;

  onMount(async () => {
    if (browser) {
      const L = (await import("leaflet")).default;
      await import("leaflet/dist/leaflet.css");

      map = L.map(mapContainer).setView([51.505, -0.09], 13);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {}).addTo(map);

      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          const { latitude, longitude } = coords;

          map.setView([latitude, longitude], 15);

          L.marker([latitude, longitude]).addTo(map).bindPopup("Your location").openPopup();
        },
        (error) => {
          console.error("Locatie ophalen mislukt:", error);
        }
      );
    }
  });

  onDestroy(() => {
    map?.remove();
  });
</script>

<header class="header-container">
  <h1>Save Work location</h1>
  <p>
    Clock in your exact work location and time to create verified proof of your presence on-site.
    Every entry is encrypted and time-stamped for legal admissibility.
  </p>
</header>

<main>
  <div id="map" bind:this={mapContainer}></div>

  <SubmitForm {data} />
</main>

<style>
  #map {
    height: 20rem;
    margin: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
  }

  .header-container {
    padding: 1rem;
    padding-top: 7rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  h1 {
    color: #091244;
  }

  p {
    padding-bottom: 1rem;
    color: rgb(118, 118, 118);
  }

  ::placeholder {
    color: #ffffff;
  }
</style>
