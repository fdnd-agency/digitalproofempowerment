<script>
    import { Title, Button, PhoneIcon } from "$lib";

    let { pageLabel, level = "h2" } = $props();
</script>

<section class="emergency-container">
    <div class="emergency-container-content-wrapper">
        <Title
            headingText="Emergency? Get Help Now"
            class="emergency-container-title"
        />
        <p class="emergency-container-paragraph">
            Your safety is the top priority . If you find yourself in a
            situation where you are being
            <strong class="emergency-highlight">threatened</strong>,
            <strong class="emergency-highlight">abused</strong>, or
            <strong class="emergency-highlight">at risk of serious harm</strong
            >, do not wait— call your local emergency services right away. This
            platform is designed to help you document and protect your rights,
            but in life-threatening situations, contacting trained professionals
            is essential. Always put yourself first and seek help immediately.
        </p>
    </div>

    <div class="button-wrapper">
        <Button
            Icon={PhoneIcon}
            buttonHref="/"
            buttonType="btn-red"
            buttonText="Call 112"
        />
    </div>
</section>

<style>
    .emergency-container {
        padding: var(--spacing-3xl) var(--spacing-xl) var(--spacing-3xl);
        display: flex;
        flex-direction: column;
        gap: var(--spacing-lg);
        background-color: var(--primary-neutral);
        color: var(--secondary-text-color);

        @media (min-width: 800px) {
            padding: var(--spacing-3xl) var(--spacing-3xl) var(--spacing-3xl) var(--spacing-3xl);
            text-align: center;
            display: flex;
            flex-direction: column;
            gap: var(--spacing-lg);
        }
    }

    .emergency-container-content-wrapper {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-lg);
    }

    .emergency-container-paragraph {
        margin: 0 auto;
        max-width: 60rem;
        text-wrap: pretty;
    }

    .emergency-highlight {
        font-weight: 700;
        color: var(--secondary-text-color);
        background-color: var(--accent-neutral);
        padding: 0.01rem 0.1rem;
        transition:
            background-color 0.3s ease,
            color 0.3s ease;
        animation: highlightPulse 5s ease-in-out infinite;
    }

    .emergency-highlight:hover {
        background-color: rgba(237, 130, 72, 0.25);
        color: var(--secondary-text-color);
    }

    @keyframes highlightPulse {
        0% {
            background-color: var(--accent-neutral);
        }
        50% {
            background-color: rgba(237, 130, 72, 0.15);
        }
        100% {
            background-color: var(--accent-neutral);
        }
    }

    .button-wrapper {
        @media (min-width: 800px) {
            display: flex;
            justify-content: center;
            margin-top: var(--spacing-md);
        }
    }
</style>
