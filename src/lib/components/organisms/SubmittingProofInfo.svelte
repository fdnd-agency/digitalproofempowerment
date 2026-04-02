<script>
  import Link from "../atoms/Link.svelte";
  import Text from "../atoms/Text.svelte";
  import Title from "../atoms/Title.svelte";
  import { Infographic } from "$lib";
</script>

<Title headingText="Why Collecting Proof is Very Important" className="proof-intro" level="h1" />
<div class="info-container">
  <img alt="Proof collection illustration" src={Infographic} class="illustration" />

  <div class="links-section">
    <Link
      href="/submit-proof"
      className="proof-submit-intro"
      ariaLabel="Submit your proof"
      text="Submit proof "
    />
    <Link
      href="/proof-tips"
      className="proof-tip-intro"
      ariaLabel="View proof collection tips"
      text="Learn more"
    />
  </div>
</div>

<style>
  .illustration {
    max-width: 500px;
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  .info-container {
    display: flex;
    flex-flow: column wrap;
    place-content: center space-evenly;
    gap: var(--spacing-md);
  }

  .links-section {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  @media (width <= 800px) {
    .info-container {
      flex-direction: column;
    }

    .links-section {
      display: flex;
    }
  }

  @media (width <= 400px) {
    .info-container {
      flex-direction: column;
    }

    .links-section {
      flex-direction: column;
    }
  }
</style>
