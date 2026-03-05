<script>
  let { inputId, formId, className } = $props();
</script>

<label for={inputId} form={formId} class={className}> 
    <slot/>
</label>

<style>
</style>
