<script>
    import { CheckedIcon } from "$lib";

    let { headingText, Icon } = $props();
</script>


<div class="heading">
    {#if Icon}
        <Icon class="icon"/>
    {/if}
    <h2 class="h1">{headingText}</h2>
</div>

<style>
    .heading {
        display: flex;
        flex-direction: row;
        gap: var(--spacing-sm);
        align-items: center;
        padding: var(--spacing-md) var(--spacing-xs) var(--spacing-xl) 0rem;
    }
</style>
