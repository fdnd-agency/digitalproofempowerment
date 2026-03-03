<script>
  import Link from "../atoms/Link.svelte";
  import Text from "../atoms/Text.svelte";
  import Title from "../atoms/Title.svelte";
</script>

<Title
  headingText="Why Collecting Proof is Very Important"
  className="proof-intro"
  level="h1"
/>
<div class="info-container">
  <img
    alt="Proof collection illustration"
    src="https://placehold.co/600x400"
    class="illustration"
  />

  <div class="list-section">
    <ul>
      <li>Provides solid evidence of unfair treatment.</li>
      <li>Strengthens your case with HR or legal authorities.</li>
      <li>Holds employers accountable for their actions.</li>
      <li>Prevents your experience from being dismissed.</li>
      <li>Keeps a clear record for future protection.</li>
    </ul>

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
</div>

<style>
  .illustration {
    padding: var(--spacing-md);
  }
  .info-container {
    display: flex;
    justify-content: space-evenly;
    align-content: center;
    gap: var(--spacing-md);
  }
  .list-section {
    display: flex;
    flex-direction: column;
  }
  ul {
    padding: var(--spacing-lg);
  }
  li {
    margin-top: var(--spacing-md);
    margin-bottom: var(--spacing-lg);
    color: var(--primary-darkest);
  }
  .links-section {
    display: flex;
    justify-content: space-evenly;
    align-items: center;

  }

  @media (max-width: 800px) {
    .info-container {
      flex-direction: column;
    }
    .links-section {
      display: flex;
    }
  }

  @media (max-width: 400px) {
    .info-container {
      flex-direction: column;
    }
    .links-section {
      flex-direction: column;
    }
  }
</style>
