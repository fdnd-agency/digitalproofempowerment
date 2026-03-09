<script>
    let { inputFieldText, Icon, inputId, dataType, files = null } = $props();
</script>

<!-- Icons for input file: AudioUpload, ChatLogUpload, VideoUpload, NotesUpload, LocationUpload, PhotoUpload -->

<div class="upload-field">
    <label for={inputId}>
        {#if Icon}
            <Icon class="icon" />
        {/if}
        <p>{inputFieldText}</p>
    </label>

    <input
        id={inputId}
        bind:files
        type="file"
        class="share-button hide-inserted-file-text"
        accept={dataType}
        multiple
    />

    {#if files?.length}
        <p class="selected-files file-inserted">{files.length}</p>
    {:else}
        <p class="selected-files">0</p>
    {/if}
</div>

<style>
    .upload-field {
        position: relative;

        display: flex;
        align-items: center;
        border-radius: var(--radius-xl);
        border: var(--border);
        font-weight: 400;
        padding: var(--spacing-xs);
        background-color: var(--main-background-color);
        width: fit-content;
        cursor: pointer;
        box-shadow: var(--box-shadow);
        -webkit-box-shadow: var(--box-shadow-webkit);

        label {
            display: flex;
            align-items: center;
            gap: var(--spacing-xs);
            cursor: pointer;
        }

        &:hover {
            background-color: var(--primary-neutral);
            color: var(--secondary-text-color);
        }
    }

    label p {
        font-size: clamp(5px, 3vw, 12px);
    }

    .share-button {
        all: unset;
    }

    .share-button::-webkit-file-upload-button {
        visibility: hidden;
    }

    .hide-inserted-file-text {
        display: none;
    }

    .selected-files {
        font-size: small;
        position: absolute;
        background-color: var(--secondary-neutral);
        top: -0.65rem;
        right: -0.8rem;
        border-radius: var(--radius-full);
        width: 1.5rem;
        height: 1.5rem;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        color: var(--secondary-text-color);
    }

    .file-inserted {
        background-color: var(--accent-neutral);
    }
</style>
