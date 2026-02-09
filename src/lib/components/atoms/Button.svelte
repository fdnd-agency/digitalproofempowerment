<script>
    import { EyeIcon } from "$lib";

    let { buttonText } = $props();
</script>




<button class="basic-button btn-white">
    <EyeIcon/>
    {buttonText}
</button>

<style>

     .basic-button {
        display: flex;
        align-items: center;
        gap: var(--spacing-xs);
        padding: 0.6rem;
        border-radius: var(--radius-xs);
        font-weight: 550;
        padding: var(--spacing-xs);
        -webkit-box-shadow: 0px 0px 20px -10px #000000;
        box-shadow: 0px 0px 20px -10px #00000071;
        letter-spacing: 0.03rem;
        cursor: pointer;
    }

    .btn-white {
        background-color: #ffffffff;
        color: #000000;
        border: 1px solid rgba(0, 0, 0, 0.146);
        padding: 0.6rem;
    }

    .btn-red {
        background-color: #ff0200;
        color: #ffffffff;
        border: none;
        padding: 0.6rem;
    }

    .btn-black {
        background-color: #000000;
        color: #ffffffff;
        border: none;
        padding: 0.6rem;
    }




</style>