<script>
  import Title from "../atoms/Title.svelte";
  import Text from "../atoms/Text.svelte";

  let {
    headingText,
    text,
    titleIcon = null,
    textIcon = null,
    titleClass = "",
    textClass = "",
    level = "h1",
    className,
  } = $props();
</script>

<div class={className}>
  <Title {level} className={titleClass} {headingText} Icon={titleIcon} />
  <Text className={textClass} {text} Icon={textIcon} />
</div>

<style>
  .text-block {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: solid 1px black;
  }

  .footer-block {
    padding: var(--spacing-md);
    width: 40%;
  }

  @media (max-width: 900px) {
    .footer-block {
      width: 90%;
    }
  }
</style>
