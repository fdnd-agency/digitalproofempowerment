<script>
    import { Title, Button, PlayIcon, FolderIcon, HeaderBG } from "$lib";

    let { pageLabel, HeroHeading, HeroParagraph, level = "h1" } = $props();
</script>

<header class="hero-container" aria-label={pageLabel}>
    <img src={HeaderBG} alt="" class="hero-background-image" aria-hidden="true" />

    <section class="hero-content">
        <p class="hero-page-label" aria-current="page">{pageLabel}</p>
        <Title headingText={HeroHeading} className="heading hero-heading" />
        <p class="hero-paragraph">{HeroParagraph}</p>

        <div class="hero-buttons-wrapper">
            <Button
                buttonHref="/login"
                Icon={PlayIcon}
                buttonType="btn-black"
                buttonText="Get started"
            />
            <Button
                buttonHref="/about"
                Icon={FolderIcon}
                buttonType="btn-white"
                buttonText="Learn more"
            />
        </div>
    </section>
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

    .hero-content {
        position: relative;
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: var(--spacing-lg);
        color: var(--secondary-lightest);
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
