<script>
    let { buttonText, Icon, buttonType } = $props();
</script>


<button class="basic-button {buttonType}">
    {#if Icon}
        <Icon class="icon"/>
    {/if}
    {buttonText}
</button>


<style>
     .basic-button {
        display: flex;
        align-items: center;
        gap: var(--spacing-xs);
        border-radius: var(--radius-xs);
        font-size: clamp(10px, 3vw, 14px);
        font-weight: 550;
        padding: var(--spacing-xs);
        -webkit-box-shadow: var(--box-shadow-webkit);
        box-shadow: var(--box-shadow);
        letter-spacing: 0.03rem;
        cursor: pointer;
    }

    .btn-white {
        background-color: var(--main-background-color);
        color: var(--main-text-color);
        border: var(--border);
    }

    .btn-red {
        background-color: var(--emergency-color);
        color: var(--secondary-text-color);
        border: none;
        padding: var(--spacing-xs);
    }

    .btn-black {
        background-color: var(--secondary-background-color);
        color: var(--secondary-text-color);
        border: none;
        padding: var(--spacing-xs);
    }

</style>