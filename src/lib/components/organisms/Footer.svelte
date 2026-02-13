<script>
  import Link from "$lib/components/atoms/Link.svelte";
  import { text } from "@sveltejs/kit";
  import LinkGroup from "../molecules/LinkGroup.svelte";
  import TextBlock from "../molecules/TextBlock.svelte";

  const footerLinksGroups = [
    {
      groupName: "About",
      className: "footer-links",
      links: [
        {
          text: "About Us",
          href: "/about-us",
          rel: "canonical",
          ariaLabel: "Lean more about Digital Proof Empowerment",
          className: "footer-link",
        },
        {
          text: "Contact",
          href: "/contact",
          rel: "help",
          ariaLabel: "Contact information",
          className: "footer-link",
        },
      ],
    },
    {
      groupName: "Resources",
      className: "footer-links",
      links: [
        {
          text: "Proof Tips",
          href: "/proof-info",
          rel: "canonical",
          ariaLabel: "Learn more about what is a strong Proof",
          className: "footer-link",
        },
        {
          text: "Help Others",
          href: "/help-others",
          rel: "help",
          ariaLabel: "Help someone submit proof",
          className: "footer-link",
        },
      ],
    },
    {
      groupName: "Quick Links",
      className: "footer-links",
      links: [
        {
          text: "Submit Proof",
          href: "/submit",
          rel: "canonical",
          ariaLabel: "Submit documents form",
          className: "footer-link",
        },
        {
          text: "Worker Rights",
          href: "/Work-information",
          rel: "help",
          ariaLabel: "Learn about worker rights in the Netherlands",
          className: "footer-link",
        },
      ],
    },
  ];
</script>

<footer class="footer">
  <div class="footer-top-section">
    <TextBlock
      className="footer-block"
      headingText="Digital proof Empowerment"
      text="  Empowering workers with digital tools to document conditions and combat
        labor exploitation."
      textClass="footer-text"
      titleClass="footer-heading"
      level="h3"
    />

    <div class="links-section">
      {#each footerLinksGroups as group (group.groupName)}
        <LinkGroup
          className={group.className}
          groupName={group.groupName}
          links={group.links}
        />
      {/each}
    </div>
  </div>

  <p class="copy-right">© 2026 Digital Proof Empowerment</p>
</footer>

<style>
  .footer {
    background-color: var(--primary-darkest);
    color: white;
    display: flex;
    flex-direction: column;
    padding: var(--spacing-md);
    width: 100%;
  }
  .footer-top-section {
    order: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .links-section {
    display: flex;
  }
  .copy-right {
    order: 2;
    align-self: center;
    margin: var(--spacing-lg);
  }

  @media (max-width: 900px) {
    .footer-top-section {
      flex-direction: column;
    }
    .links-section {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
      place-items: center;
      text-align: center;
    }

    .copy-right {
      font-size: clamp(12px, 3vw, 14px);
    }
  }
</style>
