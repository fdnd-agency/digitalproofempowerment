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
        Profile,
        QuotesIcon,
        EyeIcon,
        Header,
        EmergencySection,
        ReviewCard,
        HeaderBG,
    } from "$lib";

    let {} = $props();
</script>

<Header
    pageLabel="About us"
    HeroHeading="Empowering you to take control safely"
    HeroParagraph="A safe place to organize your notes and experiences at work."
/>

<main>
    <section class="evidence-container">
        <div class="evidence-container-content-wrapper">
            <Title
                headingText="What we provide..."
                className="evidence-container-title"
            />
            <p class="evidence-container-paragraph">
                Our platform provides a safe and secure way to collect and store
                your evidence, keeping you in control and protected at all
                times.
            </p>

            <div class="button-wrapper">
                <Button
                    Icon={FolderIcon}
                    className="btn-white"
                    buttonText="Start gathering evidence "
                />
            </div>
        </div>

        <div class="evidence-card-container">
            <InformationCard
                Icon={CardIconImg}
                labels={["Jpeg", "Webp"]}
                cardTitle="Images"
                cardSubText="Save videos in MP4 format or capture them instantly using your device’s camera. Easily add recordings from your gallery or shoot new ones on the spot to document events clearly and efficiently."
            />
            <InformationCard
                Icon={CardIconVideo}
                labels={["MP4", "MP3"]}
                cardTitle="Video"
                cardSubText="Save videos in MP4 format or capture them instantly using your device’s camera. Easily add recordings from your gallery or shoot new ones on the spot to document events clearly and efficiently."
            />
            <InformationCard
                Icon={CardIconAudio}
                labels={["Phone", "MP3"]}
                cardTitle="Audio recordings"
                cardSubText="Save videos in MP4 format or capture them instantly using your device’s camera. Easily add recordings from your gallery or shoot new ones on the spot to document events clearly and efficiently."
            />
            <InformationCard
                Icon={CardIconNotes}
                labels={["Pdf", "Notesapp"]}
                cardTitle="Notes"
                cardSubText="Save videos in MP4 format or capture them instantly using your device’s camera. Easily add recordings from your gallery or shoot new ones on the spot to document events clearly and efficiently."
            />
            <InformationCard
                Icon={CardIconLocation}
                labels={["Google Maps", "GPS"]}
                cardTitle="Location"
                cardSubText="Save videos in MP4 format or capture them instantly using your device’s camera. Easily add recordings from your gallery or shoot new ones on the spot to document events clearly and efficiently."
            />
            <InformationCard
                Icon={CardIconChat}
                labels={["Telegram", "Whatsapp"]}
                cardTitle="Chat logs"
                cardSubText="Save videos in MP4 format orera. Easily add  or shoot new ones on the spot to document events clearly and efficiently."
            />
        </div>
    </section>

    <EmergencySection />

    <section class="reviews-container">
        <div class="reviews-container-content-wrapper">
            <Title
                headingText="Real people. Real results"
                className="review-container-title"
            />
            <p class="reviews-container-paragraph">
                Honest stories from real people who have experienced unfavorable
                working conditions in their own jobs—now receiving compensation
                because they were able to gather all the evidence against their
                former employer.
            </p>
        </div>

        <div class="reviews-card-container">
            <ReviewCard
                reviewerName="John D."
                profileImage="https://i.pravatar.cc/150"
                reviewerProffesion="Janitor"
                dateTimeFormat="2026-02-15"
                reviewDate="15 Feb 2026"
                reviewText="Being assaulted on the job was terrifying, and I didn’t know
                    where to turn. This platform allowed me to collect evidence
                    safely and take action."
            />
            <ReviewCard
                reviewerName="Gabby C."
                profileImage="https://i.pravatar.cc/150"
                reviewerProffesion="Mechanic"
                dateTimeFormat="2026-02-15"
                reviewDate="15 Feb 2026"
                reviewText="Honest stories from real people who have experienced unfavorable
                working conditions in their own jobs—now receiving compensation
                because they were able to gather all the evidence against their
                former employer."
            />
            <ReviewCard
                reviewerName="Carlo J."
                profileImage="https://i.pravatar.cc/150"
                reviewerProffesion="Manager"
                dateTimeFormat="2026-02-15"
                reviewDate="15 Feb 2026"
                reviewText="I experienced physical abuse at work and felt powerless.
                    Thanks to this platform, I was able to document everything
                    and finally protect my rights."
            />
        </div>
    </section>
</main>

<style>
    /* evidence container */

    .evidence-container {
        padding: var(--spacing-3xl) var(--spacing-xl) var(--spacing-3xl);
        display: flex;
        flex-direction: column;
        gap: var(--spacing-lg);
        /* background-color: var(--accent-light); */
        color: var(--main-text-color);

        @media (min-width: 800px) {
            padding: var(--spacing-3xl) var(--spacing-3xl) var(--spacing-3xl)
                var(--spacing-3xl);
            display: flex;
            flex-direction: column;
            gap: var(--spacing-lg);
        }
    }

    .evidence-container-content-wrapper {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-lg);

        @media (min-width: 800px) {
            text-align: center;
            display: flex;
            flex-direction: column;
            gap: var(--spacing-lg);
        }
    }

    .evidence-container-title {
    }

    .evidence-container-paragraph {
        margin: 0 auto;
        max-width: 60rem;
        text-wrap: pretty;
    }

    .button-wrapper {
        @media (min-width: 800px) {
            display: flex;
            justify-content: center;
            margin-top: var(--spacing-md);
        }
    }

    .evidence-card-container {
        padding-top: var(--spacing-xl);
        display: grid;
        justify-content: center;
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        gap: var(--spacing-xl);
    }

     @media (min-width: 760px) {
            .evidence-card-container {
                grid-template-columns: 1fr 1fr;
            }
        }

        @media (min-width: 1100px) {
            .evidence-card-container {
                grid-template-columns: 1fr 1fr 1fr;
            }
        }

    /* ------------ reviews container */

    .reviews-container {
        padding: var(--spacing-3xl) var(--spacing-xl) var(--spacing-3xl);
        display: flex;
        flex-direction: column;
        gap: var(--spacing-lg);
        color: var(--main-text-color);

        @media (min-width: 800px) {
            padding: var(--spacing-3xl) var(--spacing-3xl) var(--spacing-3xl)
                var(--spacing-3xl);
            display: flex;
            flex-direction: column;
            gap: var(--spacing-lg);
        }
    }

    .reviews-container-content-wrapper {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-lg);

        @media (min-width: 800px) {
            text-align: center;
            display: flex;
            flex-direction: column;
            gap: var(--spacing-lg);
        }
    }

    .reviews-card-container {
        padding-top: var(--spacing-xl);
        display: grid;
        justify-content: center;
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        gap: var(--spacing-xl);
    }

    @media (min-width: 760px) {
            .reviews-card-container {
                grid-template-columns: 1fr 1fr;
            }
        }

        @media (min-width: 1100px) {
            .reviews-card-container  {
                grid-template-columns: 1fr 1fr 1fr;
            }
        }

    .reviews-container-paragraph {
        margin: 0 auto;
        max-width: 60rem;
        text-wrap: pretty;
    }
</style>
