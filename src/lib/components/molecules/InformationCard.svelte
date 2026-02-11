<script>

    let { cardSubText, Icon, cardTitle } = $props();
</script>

<div class="information-card">
    {#if Icon}
        <Icon class="icon"/>
    {/if}
    <p class="card-paragraph">{cardTitle}</p>
    <p class="card-sub-paragraph">{cardSubText}</p>
</div>

<style>
    div {
        border: var(--border);
        padding: var(--spacing-md);
        border-radius: var(--radius-md);

        display: flex;
        flex-direction: column;
        gap: var(--spacing-md);
        justify-content: center;
        align-items: center;
        text-align: center;
        height: fit-content;

        box-shadow: var(--box-shadow);
        -webkit-box-shadow: var(--box-shadow-webkit);
    }

    .card-paragraph {
        font-weight: bolder;
        background-color: var(--secondary-lightest);
        width: 14rem;
        border-radius: var(--radius-sm);
    }


    
</style>
