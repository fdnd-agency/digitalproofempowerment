<script>
  // Components
  import InformationCard from "$lib/components/molecules/InformationCard.svelte";
  import FileInput from "$lib/components/atoms/FileInput.svelte";
  import Button from "$lib/components/atoms/Button.svelte";
  import SelectButton from "$lib/components/atoms/SelectButton.svelte";
  import Title from "$lib/components/atoms/Title.svelte";
  import Link from "$lib/components/atoms/Link.svelte";
  import Footer from "$lib/components/organisms/Footer.svelte";
  import Text from "$lib/components/atoms/Text.svelte";

  // Icons
  import {
    CheckedIcon,
    LanguageIcon,
    EyeIcon,
    CloseIcon,
    UploadIcon,
    PhotoUpload,
  } from "$lib";
</script>

<h1>Digital Proof Empowerment</h1>
<p>From Underutilized to Empowered</p>

<p>
  This project focuses on addressing labor exploitation and digital illiteracy.
  Using digital technology, we help vulnerable groups become more resilient. We
  use a multidisciplinary approach combining ethics, technology, and education.
  In participatory workshops and co-creation sessions with diverse stakeholders
  — including workers and advocates — we gained valuable insights for impactful
  solutions. We developed a prototype for a data app that enables workers to
  record and visualize their working conditions to collect evidence providing
  proof of labor exploitation and modern slavery.
</p>

<p>
  The findings of the project so far, demonstrate that digital tools and data
  literacy are essential for improving working conditions and combating
  exploitation. Inclusive and empathetic approaches are needed to bridge the
  digital divide.
</p>

<Title className='heading' level='h4' headingText="This is an heading text" />

<Text
  text="The findings of the project so far, demonstrate that digital tools and data
  literacy are essential for improving working conditions and combating
  exploitation."
  className="footer-text"
/>

<section class="card-container">
  <InformationCard
    cardText="Always keep ORIGINAL files (no edits/filters). Keep location and date/time on."
  />
  <InformationCard
    cardText="Always keep ORIGINAL files (no edits/filters). Keep location and date/time on."
  />
  <InformationCard
    Icon={PhotoUpload}
    cardTitle="Always keep ORIGINAL files (no edits/filters). Keep location and date/time on."
    cardSubText="lorem10"
  />

  <InformationCard
    cardText="Always keep ORIGINAL files (no edits/filters). Keep location and date/time on."
  />
  <InformationCard
    cardText="Always keep ORIGINAL files (no edits/filters). Keep location and date/time on."
  />
  <InformationCard
    cardText="Always keep ORIGINAL files (no edits/filters). Keep location and date/time on."
  />
</section>

<SelectButton />

<Button buttonText="Discreet mode" buttonType="btn-white" />
<Button buttonText="Discreet mode" />

<FileInput inputField="Photo or video (Camera)" />

<Link text="I'm a link" className="footer-link" />

<Footer />

<style>
  .card-container {
    padding: var(--spacing-xl);

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    gap: var(--spacing-sm);

    @media (min-width: 360px) {
      grid-template-columns: 1fr;
    }

    @media (min-width: 760px) {
      grid-template-columns: 1fr 1fr;
    }

    @media (min-width: 960px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
</style>
