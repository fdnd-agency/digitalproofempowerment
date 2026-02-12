<script>
    import {
        Button,
        PlayIcon,
        Title,
        FolderIcon,
        PhoneIcon,
        InformationCard,
        VideoIconCard,
        LocationIconCard,
        NotesIconCard,
        AudioIconCard,
        ChatLogIconCard,
        Link,
    } from "$lib";

    import { onMount } from "svelte";
    import { browser } from "$app/environment";

    onMount(() => {
        function checkForWindowResize() {
            if (window.innerWidth > 600) {
                document.getElementById("nav-toggle").checked = false;
            }
        }
        window.addEventListener("resize", checkForWindowResize);
    });
</script>

<nav class="nav-container">
    <input type="checkbox" class="visually-hidden" id="nav-toggle" aria-label="toggle dropdown menu"/>
    <label class="nav-button" for="nav-toggle">
        <span></span>
        <span></span>
        <span></span>
    </label>

    <ul class="nav-list-container">
        <li class="nav-item logo"><a>Logo</a></li>
        <li class="nav-item"><Link href="/about-us" text="About us" ariaLabel="Lean more about Digital Proof Empowerment" rel="canonical" className="footer-link"/></li>
        <li class="nav-item"><Link href="/contact" text="Contact" ariaLabel="contact information" rel="help" className="footer-link"/></li>
        <li class="nav-item"><Link href="/proof-tips" text="Proof Tips" ariaLabel="Learn more about what is a strong Proof" rel="canonical" className="footer-link"/></li>
        <li class="nav-item"><Link href="/help-others" text="Help Others" ariaLabel="Help someone submit proof" rel="help" className="footer-link"/></li>
        <li class="nav-item"><Link href="/submit-proof" text="Submit Proof" ariaLabel="Submit documents form" rel="canonical" className="footer-link"/></li>
        <li class="nav-item"><Button Icon={PhoneIcon} buttonType="btn-red" buttonText="Call 112"/></li>
    </ul>
</nav>

<style>
    .nav-list-container {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-xl);
        margin-top: var(--spacing-md);
        padding: var(--spacing-md);
        background-color: var(--primary-darkest);
        color: var(--secondary-text-color);
    }

    .nav-item {
        font-size: clamp(10px, 3vw, 14px);
        padding: var(--spacing-xs);
        cursor: pointer;
    }

    .nav-button {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        cursor: pointer;
        width: fit-content;
    }

    .nav-button span {
        width: 1.7rem;
        height: 0.15rem;
        background-color: var(--main-background-color);
        transition: 0.6s;
    }

    .nav-list-container {
        transform: translateY(-110%);
        transition:
            transform 0.3s ease,
            opacity 0.3s ease;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1;
    }

    /* To make label accessable with keyboard */
    #nav-toggle:focus + .nav-button {
        outline: 1px solid var(--accent-neutral);
        outline-offset: var(--spacing-xs);
        border-radius: var(--radius-xs);
    }

    #nav-toggle:checked + .nav-button + .nav-list-container {
        transform: translateY(2.2rem);
        opacity: 1;

    }

    #nav-toggle:checked + .nav-button span:nth-child(1) {
        transform: rotate(45deg) translate(0.4rem, 0.44rem);
    }

    #nav-toggle:checked + .nav-button span:nth-child(2) {
        opacity: 0;
    }

    #nav-toggle:checked + .nav-button span:nth-child(3) {
        transform: rotate(-45deg) translate(0.45rem, -0.5rem);
    }

    .visually-hidden {
        clip: rect(0 0 0 0);
        clip-path: inset(50%);
        height: 1px;
        overflow: hidden;
        position: absolute;
        white-space: nowrap;
        width: 1px;
    }

    nav {
        background-color: var(--primary-darkest);
        padding: var(--spacing-md);
    }

    ul li {
        list-style-type: none;
    }

    /* --------------------------------- */

    /* navbar big screens */
    @media (min-width: 900px) {
        #nav-toggle:checked + .nav-button + .nav-list-container {
            transform: translateY(0rem);
        }

        .nav-container {
            padding: 0;
        }

        .nav-button {
            display: none;
        }

        .nav-list-container {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: var(--spacing-md);
            position: static;
            transform: translateY(0);
            transition: unset;
            margin: 0;
            padding: var(--spacing-xs);
            z-index: auto;
            width: 100%;
            margin-top: 0;
            gap: 0;
            background-color: var(--primary-darkest);
            color: var(--secondary-text-color);
        }

        .logo {
            margin-right: auto;
        }

        .nav-item.logo {
            margin-right: auto;
        }

        .nav-item:last-child {
            margin-left: auto;
        }
    }

    
</style>
