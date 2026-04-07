<script>
    import {
        Title,
        PhoneIcon,
        InformationCard,
        QuotesIcon,
        EyeIcon,
        Header,
        EmergencySection,
    } from "$lib";
</script>

<Header
    pageLabel="Help others"
    HeroHeading="How you can help others"
    HeroParagraph="Help someone document what happened and find the right support."
    buttonTextOne="Help gather evidence"
    buttonTextOneHref="/submit-proof"
    buttonTextTwo="Proof tips"
    buttonTextTwoHref="/proof-tips"
/>

<main>
    <section class="section-block">
        <Title headingText="What counts as poor conditions?" level="h2" />
        <div class="section-text">
            <p>
                Poor working conditions include situations where someone is
                regularly unsafe, stressed or discriminated against. This can
                include:
            </p>
            <ul>
                <li>Frequent verbal or physical violence at work.</li>
                <li>Unwanted intimacy or inappropriate behaviour.</li>
                <li>Systematic exclusion, bullying or humiliation.</li>
                <li>
                    Unrealistic workloads, threats or intimidation from
                    managers.
                </li>
                <li>Punishment for reporting problems or asking for help.</li>
            </ul>
        </div>
    </section>

    <section class="section-block alternate-bg">
        <Title headingText="What can you do?" level="h2" />
        <div class="section-grid">
            <InformationCard
                Icon={PhoneIcon}
                cardTitle="Listen and acknowledge"
                cardSubText="Give the person room to share their story without judgment.
                    Acknowledge that it is serious."
            />
            <InformationCard
                Icon={EyeIcon}
                cardTitle="Document together"
                cardSubText="Discuss which events to collect: dates, times, messages,
                    photos or witnesses."
            />
            <InformationCard
                Icon={QuotesIcon}
                cardTitle="Be a reliable support"
                cardSubText="Help organize evidence and look for information about the
                    next steps together."
            />
        </div>
    </section>

    <section class="section-block">
        <Title headingText="Employee rights" level="h2" />
        <div class="rights-list">
            <InformationCard
                Icon={PhoneIcon}
                cardTitle="Workplace safety"
                cardSubText="Every employee has the right to a safe and respectful work
                    environment."
            />
            <InformationCard
                Icon={EyeIcon}
                cardTitle="No discrimination"
                cardSubText="Discrimination, bullying and harassment should not happen at
                    work."
            />
            <InformationCard
                Icon={QuotesIcon}
                cardTitle="Report a complaint"
                cardSubText="Employees may report issues without fear of retaliation."
            />
            <InformationCard
                Icon={QuotesIcon}
                cardTitle="Seek help"
                cardSubText="Anyone may ask for advice from a confidant, union or
                    external organization."
            />
        </div>
    </section>

    <section class="section-block alternate-bg">
        <Title headingText="Support organizations and agencies" level="h2" />
        <div class="cards-grid">
            <InformationCard
                Icon={PhoneIcon}
                cardTitle="Confidant"
                cardSubText="The first step inside an organization. They can talk with you and advise on what to do."
            />
            <InformationCard
                Icon={EyeIcon}
                cardTitle="Union"
                cardSubText="A union offers legal advice, support in meetings and can defend your rights."
            />
            <InformationCard
                Icon={QuotesIcon}
                cardTitle="External agencies"
                cardSubText="For serious complaints, agencies like Veilig Thuis, labor inspection or anti-discrimination bureaus can help further."
            />
        </div>
    </section>

    <section class="section-block">
        <Title headingText="Frequently asked questions" level="h2" />
        <div class="faq-list">
            <InformationCard
                Icon={PhoneIcon}
                cardTitle="What should I do if someone does not want to gather
                evidence?"
                cardSubText="Always respect their boundaries. Offer emotional support and
                let them know you are there if they want to start later."
            />
            <InformationCard
                Icon={EyeIcon}
                cardTitle="Can I help anonymously?"
                cardSubText="Yes. You can share tips, look for information and point
                someone to available help without giving your name."
            />
            <InformationCard
                Icon={QuotesIcon}
                cardTitle="What if there is no direct evidence?"
                cardSubText="Write down as many details as possible: dates, times, people
                and observations. Handwritten notes and witness accounts can
                also help later."
            />
        </div>
    </section>

    <EmergencySection />
</main>

<style>
    .section-block {
        padding: var(--spacing-3xl) var(--spacing-xl);
        max-width: 90rem;
        margin: 0 auto;
    }

    .alternate-bg {
        background: #E4EFFC;
        margin: 0 4rem;
        border-radius: var(--radius-lg);
    }

    .section-text,  
    .rights-list,
    .faq-list {
        margin-top: var(--spacing-lg);
        display: grid;
        gap: var(--spacing-lg);
    }

    .section-text ul {
        padding-left: 0;
        margin: 0;
        display: grid;
        gap: var(--spacing-sm);
    }

    .section-text li {
        position: relative;
        padding: var(--spacing-sm) var(--spacing-md) var(--spacing-sm)
            calc(var(--spacing-xl) + 0.25rem);
        border-radius: var(--radius-lg);
        background: rgba(84, 105, 212, 0.08);
        border: 1px solid rgba(84, 105, 212, 0.18);
        line-height: 1.8;
        color: var(--main-text-color);
        list-style: none;
    }

    .section-text li::before {
        content: "";
        position: absolute;
        left: var(--spacing-md);
        top: 50%;
        transform: translateY(-50%);
        width: 0.75rem;
        height: 0.75rem;
        border-radius: 50%;
        background: var(--primary);
    }

    .section-grid {
        display: grid;
        gap: var(--spacing-lg);
        grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
        margin-top: var(--spacing-lg);
    }

    .rights-list {
        grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
    }

    .cards-grid {
        margin-top: var(--spacing-lg);
        display: grid;
        gap: var(--spacing-lg);
        grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
    }

    .faq-list {
        margin-top: var(--spacing-lg);
    }

    @media (min-width: 800px) {
        .section-block {
            padding: var(--spacing-3xl) var(--spacing-3xl);
        }
    }
</style>
