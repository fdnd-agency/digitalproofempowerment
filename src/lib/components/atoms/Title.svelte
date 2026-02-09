<script>
    import { CheckedIcon } from "$lib";

    let { headingText } = $props();
</script>


<div class="heading">
    <CheckedIcon/>
    <h2 class="h2">{headingText}</h2>
</div>

<style>
    .heading {
        display: flex;
        flex-direction: row;
        gap: var(--spacing-sm);
        align-items: center;
        padding-left: var(--spacing-xl);
        padding: var(--spacing-md) var(--spacing-xl) var(--spacing-xs);
    }
</style>
