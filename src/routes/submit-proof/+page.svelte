<script>
  import Text from "$lib/components/atoms/Text.svelte";
  import Button from "$lib/components/atoms/Button.svelte";
  import IdentifiedForm from "$lib/components/organisms/IdentifiedForm.svelte";
  import AnonymousForm from "$lib/components/organisms/AnonymousForm.svelte";

  let { data } = $props();
  let mode = $state(null); // "identified" | "anonymous"
</script>

<main>
  {#if mode === null}
    <div class="container">
      <Text
        text="How would you like to Submit your proof ?"
        className="form-text"
      />
      <div class="selection">
        <Button
          onclick={() => {
            console.log("Anonymous mode selected");
            mode = "anonymous";
          }}
          buttonText="Anonymous"
          className="form-button"
        />
        <Button
          onclick={() => (mode = "identified")}
          buttonText="Using Email"
          className="form-button"
        />
      </div>
    </div>
  {:else if mode === "identified"}
    <IdentifiedForm data={data.identifiedForm} onBack={() => (mode = null)} />
  {:else if mode === "anonymous"}
    <AnonymousForm data={data.anonForm} onBack={() => (mode = null)} />
  {/if}
</main>

<style>
  main {
    padding: 10% 0;
    display: grid;
    place-items: center;
    background-image: url("$lib/assets/img/HeaderBg.webp");
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    min-height: 100vh;
    }
  .container{
    background: rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    padding: var(--spacing-xl);
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    color:var(--secondary-text-color)
  }
  .selection {
    display: flex;
    gap: var(--spacing-lg);
    justify-content: center;
    align-self: center;
    margin-top: var(--spacing-lg);
  }
   @media (max-width: 500px) {
    .container {
      margin: 25% 5% 0 5%;
    }
  }
</style>
