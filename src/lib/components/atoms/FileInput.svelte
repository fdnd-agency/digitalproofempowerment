<script>
    import { PhotoUpload } from "$lib";

    let { inputField, files = null } = $props();
</script>


<div class="upload-field">
    <label for="file">
        <PhotoUpload/>
        <span>{inputField}</span>
    </label>
    <input id="file" bind:files type="file" class="share-button visually-hidden" accept="image/*,video/*" multiple capture/>
</div>


{#if files?.length}
    <p>{files.length} chosen</p>
{:else}
    <p>niks</p>
{/if}

<style>
    .upload-field {
        display: flex;
        align-items: center;
        border-radius: var(--radius-xl);
        border: 1px solid rgba(0, 0, 0, 0.146);
        font-weight: 400;
        padding: 0.6rem;
        background-color: #ffffffff;
        width: fit-content;
        font-size: clamp(5px, 3vw, 15px);
        cursor: pointer;

        label {
            display: flex;
            align-items: center;
            gap: var(--spacing-xs);
            cursor: pointer;
        }
    }

    .share-button {
        all: unset;
    }

    .share-button::-webkit-file-upload-button {
        visibility: hidden;
    }

    .visually-hidden {
        clip: rect(0 0 0 0);
        clip-path: inset(50%);
        height: 1px;
        overflow: hidden;
        position: absolute;
        white-space: nowrap;
        width: 1px;
    }
</style>
