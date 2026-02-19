<script>
    let { proffesion, name, profilePicture, profilePictureAlt   } = $props();
</script>

<div>
    <figure>
        <img alt="Profile picture of {name}" src="{profilePicture}" />
    </figure>

    <div class="content-wrapper">
        <p class="name">{name}</p>
        <p class="proffesion">{proffesion}</p>
    </div>
</div>

<style>
    div {
        display: flex;
        flex-direction: row;
        gap: var(--spacing-sm);
    }

    figure {
        height: 4rem;
        width: 4rem;
        border-radius: 100%;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 100%;
    }

    .name {
        font-size: clamp(12px, 3vw, 14px);
    }

    .proffesion {
        font-size: clamp(9px, 3vw, 11px);
        font-style: italic;
    }

    .content-wrapper {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-xxxs);
        justify-content: center;
    }
</style>
