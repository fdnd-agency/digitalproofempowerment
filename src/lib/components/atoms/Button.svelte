<script>
    let { buttonText, Icon, buttonType,  } = $props();
</script>

<button class="basic-button {buttonType}">
    {#if Icon}
        <Icon class="icon" />
    {/if}
    {buttonText}
</button>

<style>
    a {
        text-decoration: none;
    }

    .basic-button {
        display: flex;
        align-items: center;
        gap: var(--spacing-xs);
        border-radius: var(--radius-sm);
        font-size: clamp(10px, 3vw, 14px);
        font-weight: 550;
        -webkit-box-shadow: var(--box-shadow-webkit);
        box-shadow: var(--box-shadow);
        letter-spacing: 0.03rem;
        cursor: pointer;
        align-self: flex-start;


    }

    .btn-white {
        background-color: var(--main-background-color);
        color: var(--main-text-color);
        /* border: var(--border); */
        padding: var(--spacing-sm);
        border: none;

        &:hover {
            background-color: var(--accent-neutral);
            color: var(--main-background-color);
        }
    }

    .btn-red {
        background-color: var(--emergency-color);
        color: var(--secondary-text-color);
        border: none;
        padding: var(--spacing-sm);

        &:hover {
            background-color: var(--secondary-text-color);
            color: var(--emergency-color);
        }
    }

    .btn-black {
        background-color: var(--secondary-background-color);
        color: var(--secondary-text-color);
        border: none;
        padding: var(--spacing-sm);

        &:hover {
            background-color: var(--accent-neutral);
            color: var(--secondary-text-color);
        }
    }
</style>
