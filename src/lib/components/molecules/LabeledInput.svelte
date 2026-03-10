<script>
  import Input from "../atoms/Input.svelte";
  import Label from "../atoms/Label.svelte";

  let {
    type,
    autocomplete,
    name,
    value = $bindable(),
    classNameLabel,
    classNameInput,
    inputId,
    form,
    text,
    placeHolder,
    ...rest
  } = $props();
</script>

<div>
  <Label className={classNameLabel} {inputId} formId={form} {text}>
    <br />
    <Input
      {type}
      {autocomplete}
      name={inputId}
      bind:value
      className={classNameInput}
      id={inputId}
      {placeHolder}
      {...rest}
    />
  </Label>
</div>

<style>
</style>
