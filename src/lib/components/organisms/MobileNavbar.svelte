<script>
  import LinkGroup from "../molecules/LinkGroup.svelte";
  import LogIcon from "$lib/assets/svg/LogIcon.svelte";
  import VaultIcon from "$lib/assets/svg/VaultIcon.svelte";
  import EvidenceIcon from "$lib/assets/svg/EvidenceIcon.svelte";
  import ProfileIcon from "$lib/assets/svg/ProfileIcon.svelte";

  const links = [
    { className: "mobile-link", text: "Log", icon: LogIcon, href: "/log" },
    { className: "mobile-link", text: "vault", icon: VaultIcon, href: "/vault" },
    { className: "mobile-link", text: "Evidence", icon: EvidenceIcon, href: "/evidence" },
    { className: "mobile-link", text: "Profile", icon: ProfileIcon, href: "/profile" },
  ];
</script>

<nav class="mobile-navbar">
  <LinkGroup {links} className="mobile-nav-links" />
</nav>

<style>
  .mobile-navbar {
    display: none;
  }
  @media only screen and (max-width: 768px) {
    .mobile-navbar {
      width: 100%;
      height: 10%;
      display: block;
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1000;
      background-color: rgb(206, 208, 236);
      padding-bottom: env(safe-area-inset-bottom);
    }
  }
</style>
