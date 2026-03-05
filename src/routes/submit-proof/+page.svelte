<script>
    import LabeledInput from "$lib/components/molecules/LabeledInput.svelte";
</script>

<main>
    <LabeledInput type="email"
    text= "Enter your email"
    name="email"
    inputId="email"
    value="test@example.com"
    autocomplete="off"
    classNameLabel="label"
    classNameInput="input"
    form="contact-form"/>
</main>