<script>
  import Title from "../atoms/Title.svelte";
  import Text from "../atoms/text.svelte";

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
  <Title {level} className={textClass} {headingText} Icon={titleIcon} />
  <Text className={textClass} {text} Icon={textIcon} />
</div>

<style>
  .text-block {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: solid 1px black;
  }
</style>
