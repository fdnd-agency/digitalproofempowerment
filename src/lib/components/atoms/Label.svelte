<script>
  let { inputId, formId, className,text} = $props();
</script>

<label for={inputId} form={formId} class={className}> 
    {text}
    <slot/>
</label>

<style>
</style>
