<script>
	import Logo from "/web-app-manifest-512x512.png";
	import "../lib/css/global-stylesheet.css";

	import { Nav, Footer } from "$lib";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={Logo} />
</svelte:head>

<Nav />

{@render children()}

<Footer />
