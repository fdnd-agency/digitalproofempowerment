<script>
    import { EyeIcon } from "$lib";

    let { buttonText } = $props();
</script>




<div class="select-button-container">
    <label for="language"><LanguageIcon /></label>

    <select id="language" name="" class="language-select">
        <option value="english">English</option>
        <option value="dutch">Dutch</option>
        <option value="german">German</option>
        <option value="italian">Italian</option>
    </select>
</div>

<style>

    .select-button-container {
        display: flex;
        align-items: center;
        gap: var(--spacing-sm);
        padding: var(--spacing-xl);
    }

    .language-select {
        border: 1px solid rgba(0, 0, 0, 0.146);
        border-radius: var(--radius-xs);
        font: var(--main-font);
        font-size: clamp(5px, 3vw, 15px);
        padding: 0.3rem;
        padding-right: 1rem;
        background-color: #ffffffff;
    }



</style>