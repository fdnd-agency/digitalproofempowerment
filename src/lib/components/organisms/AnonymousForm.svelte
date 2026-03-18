<script>
  import Text from "../atoms/Text.svelte";
  import Button from "../atoms/Button.svelte";
  import FileInput from "../atoms/FileInput.svelte";
  import LabeledInput from "../molecules/LabeledInput.svelte";
  import ChatLogUpload from "$lib/assets/svg/ChatLogUpload.svelte";
  import AudioUpload from "$lib/assets/svg/AudioUpload.svelte";
  import NotesUpload from "$lib/assets/svg/NotesUpload.svelte";
  import LocationUpload from "$lib/assets/svg/LocationUpload.svelte";
  import PhotoUpload from "$lib/assets/svg/PhotoUpload.svelte";
  import { superForm } from "sveltekit-superforms/client";
  import { zodClient } from "sveltekit-superforms/adapters";
  import { proofSchemaAnon } from "$lib/formValidation";
  import SuperDebug from "sveltekit-superforms/SuperDebug.svelte";
  import { Form } from "$lib";

  let { data, onBack } = $props();
  let resetKey = $state(0);

  const { form, message, errors, enhance } = superForm(data, {
    validators: zodClient(proofSchemaAnon),
    dataType: "form",
    resetForm: true,
    onUpdated: ({ form }) => {
      if (form.message) {
        resetKey++;
      }
    },
  });

  let photoFiles = $state(null);
  let audioFiles = $state(null);
  let locationFiles = $state(null);
  let notesFiles = $state(null);
  let chatFiles = $state(null);

  $effect(() => {
    if (photoFiles) $form.photos = Array.from(photoFiles);
  });
  $effect(() => {
    if (audioFiles) $form.audio = Array.from(audioFiles);
  });
  $effect(() => {
    if (locationFiles) $form.location = Array.from(locationFiles);
  });
  $effect(() => {
    if (notesFiles) $form.note = Array.from(notesFiles);
  });
  $effect(() => {
    if (chatFiles) $form.chat = Array.from(chatFiles);
  });
</script>

<div class="debug">
  <SuperDebug data={$form} />
</div>

<form
  id="anon-form"
  method="POST"
  action="?/anon"
  enctype="multipart/form-data"
  use:enhance
>
  <Text text="Anonymous submission" className="form-anon-text" />
  <Button onclick={onBack} buttonText="&#8617;" className="form-back-button" />

  <Text text="What type of proof are you submitting?" className="proof-type" />

  {#key resetKey}
    <FileInput
      inputFieldText="Photos and video (camera)"
      Icon={PhotoUpload}
      inputId="photos"
      dataType="image/*,video/*"
      name="photos"
      form="anon-form"
      bind:files={photoFiles}
      errors={$errors.photos?.[0]}
    />
    <FileInput
      inputFieldText="Audio (Voice Memos)"
      Icon={AudioUpload}
      inputId="audio"
      dataType="audio/*"
      name="audio"
      form="anon-form"
      bind:files={audioFiles}
      errors={$errors.audio?.[0]}
    />
    <FileInput
      inputFieldText="Location & routes (Google maps timeline)"
      Icon={LocationUpload}
      inputId="location"
      dataType=".json,.kml,.gpx"
      name="location"
      form="anon-form"
      bind:files={locationFiles}
      errors={$errors.location?.[0]}
    />
    <FileInput
      inputFieldText="Notes & diary (Notes/Keep)"
      Icon={NotesUpload}
      inputId="notes"
      dataType=".txt,.md,.pdf,.html"
      name="notes"
      form="anon-form"
      bind:files={notesFiles}
      errors={$errors.note?.[0]}
    />
    <FileInput
      inputFieldText="WhatsApp or Telegram"
      Icon={ChatLogUpload}
      inputId="chatlogs"
      dataType=".txt,.json,.zip"
      name="chat"
      form="anon-form"
      bind:files={chatFiles}
      errors={$errors.chat?.[0]}
    />

    <LabeledInput
      type="textarea"
      inputId="optional-text"
      text="Any thing you would like to add? (Optional)"
      placeHolder="This is optional..."
      classNameInput="optional-text"
      classNameLabel="optional-text-label"
      bind:value={$form.textArea}
      name="textArea"
      form="anon-form"
    />
  {/key}

  <Button buttonText="Submit" className="submit-button" />
</form>

{#if $message}
<div class="feedback">
  <Text text={$message} className="feedback" />
  {#if $message}
    <Button
      buttonText='&#x58;'
      onclick={() => {
        $message = null;
      }}
      className="feedback-button"
    />
  {/if}
</div>
{/if}

<style>
  form {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    padding: var(--spacing-xl);
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
  }
  .feedback{
    display: flex;
    border: solid 1px white;
    background-color: green;
    border-radius: 16px;
    margin-top: var(--spacing-lg);
  }

</style>
