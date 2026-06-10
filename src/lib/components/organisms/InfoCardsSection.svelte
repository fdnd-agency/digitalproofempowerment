<script>
  import InformationCard from "../molecules/InformationCard.svelte";
  import ClipBoardIcon from "$lib/assets/svg/ClipBoardIcon.svelte";
  import EmergencySection from "../molecules/EmergencySection.svelte";
  import CameraIcon from "$lib/assets/svg/CameraIcon.svelte";
  import HomeClock from "./HomeClock.svelte";

  let { data } = $props();
</script>

<div class="cards-section">
  <h3>Immediate action</h3>

  <div class="cards-section-grid">
    <EmergencySection />

    <InformationCard
      backgroundColor="#212859"
      backgroundColorDark="#212859"
      cardTitle="New report"
      cardSubText="Securely document an incident in real-time."
      ctaText="start now"
      ctaLink="evidence"
      Icon={CameraIcon}
    />

    <!-- TODO: add fast clockin/out buttons -->
    <!-- <InformationCard
      className="wide-card"
      backgroundColor="#6D73A9"
      backgroundColorDark="#6D73A9"
      cardTitle="Quickly log your hours"
      cardSubText="Securely document an incident in real-time"
      ctaText="Clock in"
      ctaLink="submit-proof"
      Icon={ClipBoardIcon}
    /> -->

    <HomeClock {data} Icon={ClipBoardIcon} />
  </div>
</div>

<!-- <div class="resources-section">
  <h3>Resources</h3>
  <div class="cards-section-grid">
    <InformationCard
      backgroundColor="#212859"
      backgroundColorDark="#212859"
      cardTitle="Track your case"
      cardSubText="Stay informed with real-time updates on your case status."
      ctaText="track now"
      ctaLink="track-case"
      Icon={CheckedIcon}
    />
  </div>
</div> -->

<style>
  .cards-section {
    font-family: var(--body-font);
    padding: var(--spacing-3xl) 10% 0;
    justify-content: center;
  }

  /* .resources-section {
    font-family: var(--body-font);
    padding: var(--spacing-3xl) 10% 0;
    justify-content: center;
  } */

  @media (width <= 899px) {
    .cards-section {
      padding: var(--spacing-3xl) var(--spacing-lg);
    }
  }

  @media (width <= 500px) {
    .cards-section {
      padding: var(--spacing-3xl) var(--spacing-md);
    }
  }

  .cards-section-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--spacing-md);
    margin-top: var(--spacing-md);
  }

  @media (width >= 769px) {
    .cards-section-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>
