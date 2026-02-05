<script>
    import InformationCard from "$lib/components/molecules/InformationCard.svelte";
	import { onMount } from 'svelte';

    import {
        CheckedIcon,
        LanguageIcon,
        EyeIcon,
        CloseIcon,
        UploadIcon,
        PhotoUpload
    } from "$lib";

    // onMount(() =>  {
    //     let test = document.getElementById('file');
    //     let down = document.getElementById('down');


    //     files() {
    //         if (test.files.length === 0) {
    //         down.innerHTML = "No files selected"; 
    //         } else {
    //         down.innerHTML = "file selected";

    //         }
	// });

    let files = null;


    // function empty() {
    //     if (message === 0) {
    //     return value = "no value" 
    //     } else {
    //     return value = "value fkjsf"

    // } 

    // }

    


</script>

<p id="down"></p>


<h1>Digital Proof Empowerment</h1>
<p>From Underutilized to Empowered</p>

<p>
    This project focuses on addressing labor exploitation and digital
    illiteracy. Using digital technology, we help vulnerable groups become more
    resilient. We use a multidisciplinary approach combining ethics, technology,
    and education. In participatory workshops and co-creation sessions with
    diverse stakeholders — including workers and advocates — we gained valuable
    insights for impactful solutions. We developed a prototype for a data app
    that enables workers to record and visualize their working conditions to
    collect evidence providing proof of labor exploitation and modern slavery.
</p>

<p>
    The findings of the project so far, demonstrate that digital tools and data
    literacy are essential for improving working conditions and combating
    exploitation. Inclusive and empathetic approaches are needed to bridge the
    digital divide.
</p>

<div class="heading">
    <CheckedIcon />
    <h2 class="h2">How to collect usable evidence</h2>
</div>

<section class="card-container">
    <InformationCard
        cardText="Always keep ORIGINAL files (no edits/filters). Keep location and date/time on."
    />
    <InformationCard
        cardText="Always keep ORIGINAL files (no edits/filters). Keep location and date/time on."
    />
    <InformationCard
        cardText="Always keep ORIGINAL files (no edits/filters). Keep location and date/time on."
    />
</section>

<div class="select-button-container">
    <label for="language"><LanguageIcon /></label>

    <select id="language" name="" class="language-select">
        <option value="english">English</option>
        <option value="dutch">Dutch</option>
        <option value="german">German</option>
        <option value="italian">Italian</option>
    </select>
</div>

<button class="basic-button btn-white">
    <EyeIcon/>
    Discreet mode
</button>

<button class="basic-button btn-red">
    <CloseIcon/>
    Quick Exit
</button>

<button class="basic-button btn-black">
    <UploadIcon/>
    Secure upload to Fairwork
</button>


<div class="upload-field">
    <label for="file">
        <PhotoUpload/>
        <span>Photos & Video (Camera)</span>
    </label>
    <input id="file" bind:files type="file" class="share-button visually-hidden"/>
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

    /* .share-button::before {
        content:  url(../lib/assets/svg/UploadIcon.svelte);

        content: "Photos & video (camera)";
        display: inline-block;
        background-color: #ffffffff;
        padding: 0.6rem;
        border-radius: var(--radius-xl);
        border: 1px solid rgba(0, 0, 0, 0.146);
        font-weight: 400;
        outline: none;
        white-space: nowrap;
        -webkit-user-select: none;
        cursor: pointer;
    } */

 

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

    .heading {
        display: flex;
        flex-direction: row;
        gap: var(--spacing-sm);
        align-items: center;
        padding-left: var(--spacing-xl);
        padding: var(--spacing-md) var(--spacing-xl) var(--spacing-xs);
    }

    .card-container {
        padding: var(--spacing-xl);

        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        gap: var(--spacing-sm);

        @media (min-width: 360px) {
            grid-template-columns: 1fr;
        }

        @media (min-width: 760px) {
            grid-template-columns: 1fr 1fr;
        }

        @media (min-width: 960px) {
            grid-template-columns: 1fr 1fr 1fr;
        }
    }
</style>
