<script>
    import { KeyIcon } from "$lib";

    let { cardText } = $props();
</script>

<div class="information-card">
    <KeyIcon />
    <p class="paragraph card-paragraph">{cardText}</p>
</div>

<style>
    div {
        border: 1px solid rgba(0, 0, 0, 0.146);
        padding: var(--spacing-sm);
        border-radius: var(--radius-md);

        display: flex;
        flex-direction: row;
        gap: var(--spacing-xs);
        width: fit-content;

        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;

        -webkit-box-shadow: 0px 0px 20px -10px #000000;
        box-shadow: 0px 0px 20px -10px #000000;
    }
</style>
