<script>
  import { Nav, MobileNavbar, Footer } from "$lib";

  import favicon from "$lib/assets/favicon.svg";
  import "../lib/css/global-stylesheet.css";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<Nav />

{@render children()}

<MobileNavbar />

<Footer />
