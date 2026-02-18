<script>
  import InformationCard from "./InformationCard.svelte";
  import KeyIcon from "$lib/assets/svg/KeyIcon.svelte";
  import CheckedIcon from "$lib/assets/svg/CheckedIcon.svelte";
  import EyeIcon from "$lib/assets/svg/EyeIcon.svelte";
</script>

<InformationCard
  Icon={KeyIcon}
  className="custom-card"
  cardTitle="Labor Exploitation of Migrant Workers"
  cardSubText="In the Netherlands, many migrant workers especially from Eastern Europe face underpayment, excessive working hours, unsafe conditions, and dependency on employers for housing. Labor exploitation often occurs in agriculture, construction, logistics, and food processing sectors."
/>
<InformationCard
  Icon={EyeIcon}
  className="custom-card"
  cardTitle="Human Trafficking & Forced Labor"
  cardSubText="Labor exploitation is recognized as a form of human trafficking under Dutch law. According to the Dutch National Rapporteur on Trafficking in Human Beings, hundreds of potential victims are identified each year, but many cases remain hidden due to fear, debt, or lack of awareness of rights."
/>
<InformationCard
  Icon={CheckedIcon}
  className="custom-card"
  cardTitle="Enforcement & Protection Measures"
  cardSubText="The Netherlands Labour Authority monitors workplaces, investigates abuses, and can fine employers who violate labor laws. Victims of exploitation may receive legal protection, temporary residence permits, and support services through Dutch authorities and NGOs."
/>
