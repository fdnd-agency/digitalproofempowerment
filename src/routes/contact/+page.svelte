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
        Link
    } from "$lib";

    let {} = $props();
</script>

<Header
    pageLabel="Contact"
    HeroHeading="We’re here to help"
    HeroParagraph="Have questions or need support? Reach out to us and we’ll respond as quickly as possible. Your privacy and safety are our top priority."
/>

<main>
    <section class="contact-form-container">
        <div class="contact-form-container-content-wrapper">
            <Title
                headingText="Get in touch"
                class="contact-form-container-title"
            />
            <p class="contact-form-container-paragraph">
                Have questions or need support? Fill out the form below and
                we'll get back to you as soon as possible.
            </p>
        </div>

        <form class="contact-form">
            <div class="input-group">
                <label for="name">Name</label>
                <input
                    id="name"
                    type="text"
                    placeholder="Your full name"
                    required
                />
            </div>

            <div class="input-group">
                <label for="email">Email</label>
                <input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                />
            </div>

            <div class="input-group">
                <label for="message">Message</label>
                <textarea
                    id="message"
                    rows="5"
                    placeholder="Your message..."
                    required
                ></textarea>
            </div>

            <div class="button-wrapper">
                <Button
                    Icon={EyeIcon}
                    buttonType="submit"
                    className="btn-black"
                    buttonText="Send"
                />
            </div>    
</form>
    </section>

    <EmergencySection />

    <section class="location-container">
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
                    ariaLabel="Send us an email"
                    className="email-link"
                />

                <Link
                    href="tel:+31201234567"
                    text="+31 20 123 4567"
                    ariaLabel="Call us"
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
    </section>
</main>

<style>
    .contact-form-container {
       padding: var(--spacing-3xl) var(--spacing-xl) var(--spacing-3xl);
        display: flex;
        flex-direction: column;
        gap: var(--spacing-lg);
        color: var(--main-text-color);

        @media (min-width: 800px) {
            padding: var(--spacing-3xl) var(--spacing-3xl) var(--spacing-3xl)
                var(--spacing-3xl);
            gap: var(--spacing-lg);
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto;
        }
    }

    .contact-form-container-content-wrapper {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-lg);
    }

    .contact-form-container-paragraph {
         max-width: 30rem;
        text-wrap: pretty;
        font-style: italic;
        font-size: clamp(12px, 3vw, 16px);
    }

    .contact-form {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-md);
    }

    .input-group {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-xxs);
        text-align: left;
    }

    .input-group label {
        font-weight: 500;
        font-size: clamp(0.9rem, 2vw, 1rem);
    }

    .input-group input,
    .input-group textarea {
        padding: var(--spacing-sm);
        border: var(--border);
        border-radius: var(--radius-md);
        font-family: var(--main-font);
        font-size: clamp(0.95rem, 2vw, 1rem);
        outline: none;
        transition:
            border-color 0.2s ease,
            box-shadow 0.2s ease;
    }

    .input-group input:focus,
    .input-group textarea:focus {
        border-color: var(--accent-dark);
        box-shadow: 0 0 10px rgba(237, 130, 72, 0.2);
    }

    button.btn-accent {
        padding: var(--spacing-md);
        background-color: var(--accent-dark);
        color: var(--secondary-text-color);
        font-weight: 600;
        border: none;
        border-radius: var(--radius-md);
        cursor: pointer;
        transition:
            background-color 0.3s ease,
            transform 0.2s ease;
    }

    button.btn-accent:hover {
        background-color: var(--accent-neutral);
        transform: translateY(-2px);
    }

    @media (min-width: 800px) {
        .contact-form-wrapper {
            text-align: left;
        }

        .contact-form-heading,
        .contact-form-subtext {
            text-align: left;
        }
    }

    /* maps */

    .location-container {
        padding: var(--spacing-3xl) var(--spacing-xl) var(--spacing-3xl);
        display: flex;
        flex-direction: column;
        gap: var(--spacing-lg);
        color: var(--main-text-color);

        @media (min-width: 800px) {
            padding: var(--spacing-3xl) var(--spacing-3xl) var(--spacing-3xl)
                var(--spacing-3xl);
            gap: var(--spacing-lg);
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto;
        }
    }

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
