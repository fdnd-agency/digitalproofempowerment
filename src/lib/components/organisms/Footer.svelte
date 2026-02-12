<script>
  import Link from "$lib/components/atoms/Link.svelte";
  import { text } from "@sveltejs/kit";
  import LinkGroup from "../molecules/LinkGroup.svelte";

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
    <div class="description">
      <h3>Digital proof Empowerment</h3>
      <p>
        Empowering workers with digital tools to document conditions and combat
        labor exploitation.
      </p>
    </div>

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

  .description {
    padding: var(--spacing-md);
    width: 40%;
  }
  .description > p {
    text-wrap: wrap;
    width: 100%;
    font-size: clamp(14px, 3vw, 15px);
  }
  .links-section {
    display: flex;
    justify-content: center;
  }
  .copy-right {
    order: 2;
    align-self: center;
    margin: var(--spacing-lg);
  }

  @media (max-width: 900px) {
    .description {
      width: 90%;
    }
    .footer-top-section {
      flex-direction: column;
    }
    .links-section {
      width: 90vw;
    }
  }
</style>
