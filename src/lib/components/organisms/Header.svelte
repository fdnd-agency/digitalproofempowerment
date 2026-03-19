<script>
    import { Title, Link, Button, PlayIcon, FolderIcon, HeaderBG } from "$lib";

    let {
        pageLabel,
        HeroHeading,
        HeroParagraph,
        buttonTextOne,
        buttonTextTwo,
        buttonTextOneHref,
        buttonTextTwoHref,
        level = "h1",
    } = $props();
</script>

<header class="hero-container">
    <img src={HeaderBG} alt="" class="hero-background-image" fetchpriority="high" />

    <div class="hero-content">
        <p class="hero-page-label">{pageLabel}</p>
        <Title headingText={HeroHeading} className="heading hero-heading" level="h1" />
        <p class="hero-paragraph">{HeroParagraph}</p>

        <div class="hero-buttons-wrapper">
            <Link
                Icon={PlayIcon}
                className="black-button-link"
                text="{buttonTextOne}"
                href="{buttonTextOneHref}"
            />
            <Link
                Icon={FolderIcon}
                className="white-button-link"
                text="{buttonTextTwo}"
                href="{buttonTextTwoHref}"
            />
        </div>
    </div>
</header>

<style>
    .hero-container {
        position: relative;
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        padding: var(--spacing-xl);
        z-index: 0;
    }

    .hero-background-image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: -1;
        filter: brightness(0.7);
    }

    @media (prefers-color-scheme: dark) {
        .hero-background-image {
            filter: brightness(0.3);
            /* filter: grayscale(4); */
        }
    }

    .hero-content {
        position: relative;
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: var(--spacing-lg);
        color: var(--secondary-text-color);
    }

    .hero-page-label {
        font-size: 0.75rem;
        letter-spacing: 0.14em;
        text-transform: uppercase;
        opacity: 0.8;
        font-weight: 600;

        text-decoration: underline;
        text-underline-offset: 8px;
        text-decoration-thickness: 1px;
        text-decoration-color: var(--accent-neutral);
    }

    .hero-paragraph {
        max-width: 41ch;
        margin: 0 auto;
        opacity: 0.9;
        text-wrap: pretty;
    }

    .hero-buttons-wrapper {
        display: flex;
        gap: var(--spacing-lg);
        justify-content: center;
        flex-wrap: wrap;
    }
</style>
