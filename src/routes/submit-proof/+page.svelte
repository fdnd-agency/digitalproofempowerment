<script>
  import SubmitForm from "$lib/components/organisms/SubmitForm.svelte";
</script>

<main>
  <SubmitForm />
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
</style>
