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
    } from "$lib";

    let { cardText } = $props();
</script>


<nav class="nav-container">

    <input type="checkbox" class="visually-hidden" id="nav-toggle" />
    <label class="nav-button" for="nav-toggle">
        <span></span>
        <span></span>
        <span></span>
    </label>

    <ul class="nav-list-container">
        <li class="nav-item logo"><a>Logo</a></li>
        <li class="nav-item"><a>Home</a></li>
        <li class="nav-item"><a>About us</a></li>
        <li class="nav-item"><a>Help</a></li>
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

    .nav-item:not(:last-child):hover {
        background-color: var(--accent-neutral);
        border-radius: var(--radius-xs);
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

    #nav-toggle:checked + .nav-button + .nav-list-container {
        transform: translateY(2.2rem);
        opacity: 1;
    }

    #nav-toggle:checked + .nav-button span:nth-child(1) {
        transform: rotate(45deg) translate(0.4rem, 0.44rem);
        background-color: var(--emergency-color);
    }

    #nav-toggle:checked + .nav-button span:nth-child(2) {
        opacity: 0;
    }

    #nav-toggle:checked + .nav-button span:nth-child(3) {
        transform: rotate(-45deg) translate(0.45rem, -0.5rem);
        background-color: var(--emergency-color);
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
    @media (min-width: 768px) {
        .nav-button {
            display: none;
        }

        .nav-list-container {
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: var(--spacing-md);
            position: static;
            transform: translateY(0);
            margin: 0;
            padding: 0;
            z-index: auto;
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
