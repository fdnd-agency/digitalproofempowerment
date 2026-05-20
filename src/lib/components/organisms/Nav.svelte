<script>
  import { page } from "$app/stores";
  import { Link, Favicon } from "$lib";
  import LogIcon from "$lib/assets/svg/LogIcon.svelte";
  import VaultIcon from "$lib/assets/svg/VaultIcon.svelte";
  import EvidenceIcon from "$lib/assets/svg/DocumentIcon.svelte";
  import ProfileIcon from "$lib/assets/svg/ProfileIcon.svelte";
</script>

<nav class="nav-container">
  <div class="nav-bar-container">
    <a href="/">
      <img class="logo" src={Favicon} alt="Digital proof empowerment logo" height="40" width="40" />
    </a>

    <ul class="nav-list-container">
      <li class="nav-item">
        <Link Icon={LogIcon} href="/" text="Logs" className="nav-link" isActive={$page.url.pathname === "/"}/>
      </li>
      <li class="nav-item">
        <Link Icon={VaultIcon} href="/vault" text="Vault" className="nav-link" isActive={$page.url.pathname === "/vault"}/>
      </li>
      <li class="nav-item">
        <Link Icon={EvidenceIcon} href="/evidence" text="Evidence" className="nav-link" isActive={$page.url.pathname === "/evidence"}/>
      </li>
      <li class="nav-item">
        <Link Icon={ProfileIcon} href="/profile" text="Profile" className="nav-link" isActive={$page.url.pathname === "/profile"}/>
      </li>
    </ul>
  </div>
</nav>

<style>
  nav {
    position: relative;
    font-family: var(--body-font);
  }

  .nav-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    transition: transform 0.3s ease;
    z-index: 1000;
    background: hsl(206, 45%, 9%);
  }

  ul li {
    list-style-type: none;
  }

  .nav-bar-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: var(--spacing-md) var(--spacing-xl);
    background: transparent;
    position: sticky;
    top: 0;
    z-index: 100000;
  }

  .nav-list-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: var(--spacing-xl);
    transition: transform 1s ease-in-out;
    width: 100%;
  }

  .nav-item {
    padding: var(--spacing-xs);
  }
</style>
