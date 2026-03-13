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
        ContactForm,
        LocationSection,
    } from "$lib";

    let { data } = $props();


</script>

<Header
    pageLabel="Contact"
    HeroHeading="We’re here to help"
    HeroParagraph="Have questions or need support? Reach out to us and we’ll respond as quickly as possible. Your privacy and safety are our top priority."
    buttonTextOne="Submit proof"
    buttoneTextOneHref="/submit-proof"
    buttonTextTwo="Learn more"
    buttoneTextTwoHref="/proof-tips"
/>

<main>
    <section class="contact-form-container">
        <div class="contact-form-container-content-wrapper">
            <Title
                headingText="Get in touch"
                class="contact-form-container-title"
            />
            <Text className="contact-form-container-paragraph" text="Have questions or need support? Fill out the form below and
                we'll get back to you as soon as possible." />
        </div>

        <ContactForm {data} />
    </section>

    <EmergencySection />

    <section class="location-container">
        <LocationSection/>
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
</style>
