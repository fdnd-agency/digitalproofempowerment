<script>
    import {
        Button,
        PlayIcon,
        Title,
        FolderIcon,
        PhoneIcon,
        InformationCard,
        CardIconAudio,
        CardIconChat,
        CardIconImg,
        CardIconVideo,
        CardIconNotes,
        CardIconLocation,
        Header,
        Profile,
        QuotesIcon,
        EyeIcon,
        EmergencySection,
        Link,
        Text,
        ContactForm
    } from "$lib";

    let {} = $props();
</script>

        <div class="location-container-content-wrapper">
            <Title
                headingText="Headoffice location"
                class="location-container-title"
            />

            <address class="office-address">
                <strong>Office:</strong>
                <div class="address">
                    <span>Amstelcampus</span>
                    <span>1091 GH Amsterdam</span>
                    <span>Netherlands</span>
                </div>

                <Link
                    href="mailto:info@blablabla.com"
                    text="info@blablabla.com"
                    className="email-link"
                />

                <Link
                    href="tel:+31201234567"
                    text="+31 20 123 4567"
                    className="cellphone-link"
                />
            </address>

            <p class="location-container-paragraph">
                <strong class="warning-highlight">Please note</strong>: This
                location is not open for public visits and is accessible only by
                appointment for partners and official business.
            </p>
        </div>

        <article>
            <iframe
                class="map-iframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.6186428938627!2d4.9096987!3d52.359201600000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6099a4b62ff9f%3A0xaaf1a4822a7d03c9!2sHogeschool%20van%20Amsterdam%20-%20HvA%20Wibauthuis%20(WBH)!5e0!3m2!1snl!2snl!4v1771445757900!5m2!1snl!2snl"
                allowfullscreen
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
        </article>

<style>
 
    /* maps */

    .location-container-content-wrapper {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-lg);
    }

    .location-container-paragraph {
        max-width: 30rem;
        text-wrap: pretty;
        font-style: italic;
        font-size: clamp(12px, 3vw, 16px);
        margin-top: auto;
    }

    strong {
        font-weight: bolder;
        color: var(--main-text-color);
        text-decoration: underline;
        text-underline-offset: 5px;
        text-decoration-thickness: 1px;
        text-decoration-color: var(--accent-neutral);
    }

    .office-address {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-xs);
    }

    .address {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-xxxs);
    }

    :global(.email-link, .cellphone-link) {
        color: var(--primary-dark);
        font-weight: 600;
        text-decoration: none;
        align-self: flex-start;
    }

    .map-iframe {
        width: 100%;
        height: 30rem;
        border: var(--border);
        border-radius: var(--radius-lg);
        -webkit-box-shadow: var(--box-shadow-webkit);
        box-shadow: var(--box-shadow);
    }
</style>
