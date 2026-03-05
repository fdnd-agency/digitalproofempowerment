<script>
  import Input from "../atoms/Input.svelte";
  import Label from "../atoms/Label.svelte";

  let {
    type,
    autocomplete,
    name,
    value,
    classNameLabel,
    classNameInput,
    inputId,
    form,
    text
  } = $props();
</script>

<div>
  <Label className={classNameLabel} {inputId} formId={form} {text}>
    <Input
      {type}
      {autocomplete}
      name={inputId}
      {value}
      className={classNameInput}
      id={inputId}
    />
  </Label>
</div>

<style>
</style>
