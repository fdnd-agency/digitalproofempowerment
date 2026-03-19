<script>
    import {
        Button,
        PhoneIcon,
        Link,
        Logo,
        Favicon
    } from "$lib";

    let menuIsOpen = false;

    function toggleMenu() {
        menuIsOpen = !menuIsOpen;

        if (menuIsOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }
</script>

<nav class="nav-container">
    <div class="nav-bar-container">
        <a href="/"><img class="logo" src="{Favicon}" alt="Digital proof empowerment logo" height="40" width="40"></a>
        <button class="nav-button" name="navigation toggle button" on:click={toggleMenu} aria-label="navigation toggle">
            <span class:open={menuIsOpen}></span>
            <span class:open={menuIsOpen}></span>
            <span class:open={menuIsOpen}></span>
        </button>
    </div>

    <ul class="nav-list-container" class:active={menuIsOpen}>
        <li class="nav-item"><Link href="/about-us" text="About us" className="nav-link"/></li>
        <li class="nav-item"><Link href="/contact" text="Contact" className="nav-link"/></li>
        <li class="nav-item"><Link href="/proof-tips" text="Proof Tips" className="nav-link"/></li>
        <li class="nav-item"><Link href="/help-others" text="Help Others" className="nav-link"/></li>
        <li class="nav-item"><Link href="/submit-proof" text="Submit Proof" className="nav-link"/></li>
        <li class="nav-item"><Link href="tel:+112" Icon={PhoneIcon} target="_self" rel="" className="emergency-link" text="Call 112"/></li>
    </ul>
</nav>



<style>
    nav {
        position: relative;
    }

    .nav-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        transition: transform 0.3s ease;
        z-index: 1000;
    }

    .nav-container {
        background: rgba(0, 0, 0, 0.187);
    }

    .nav-container.hidden {
        transform: translateY(-100%);
    }

    ul li {
        list-style-type: none;
    }

    .nav-bar-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        background-color: var(--primary-darkest);
        padding: var(--spacing-lg);
        background: transparent;

        position: sticky;
        top: 0;
        z-index: 100000;
    }

    .nav-list-container {
        position: fixed;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: var(--spacing-xl);

        transform: translateY(-100%);
        transition: transform 1s ease-in-out;
        opacity: 0;
        z-index: 9999;

        width: 100%;
        top: 0;
        right: 0;
        height: 100%;
    }

    .nav-item {
        padding: var(--spacing-xs);
    }

    .nav-list-container.active {
        padding: var(--spacing-lg);
        background-color: var(--primary-darkest);
        color: var(--secondary-text-color);

        transform: translateY(0%);
        transition: transform 1s ease;
        opacity: 1;
        overflow: hidden;
    }

    .nav-button {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-xs);
        cursor: pointer;
        width: fit-content;
        background-color: transparent;
        border: none;
    }

    .nav-button span {
        width: 1.7rem;
        height: 0.15rem;
        background-color: var(--nav-icon-color);
        transition: 0.6s;
        cursor: pointer;
    }

    .nav-button span.open:nth-child(1) {
        background-color: var(--emergency-color);
        width: 1.2rem;
    }

    .nav-button span.open:nth-child(2) {
        width: 0.8rem;
        background-color: var(--emergency-color);
    }

    .nav-button span.open:nth-child(3) {
        background-color: var(--emergency-color);

        width: 0.6rem;
    }
</style>
