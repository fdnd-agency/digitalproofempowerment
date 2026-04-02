<script>
  import Button from "../atoms/Button.svelte";
  import LabeledInput from "../molecules/LabeledInput.svelte";
  import FileInput from "../atoms/FileInput.svelte";
  import Title from "../atoms/Title.svelte";
  import Label from "../atoms/Label.svelte";
  import Text from "../atoms/Text.svelte";
  import ChatLogUpload from "$lib/assets/svg/ChatLogUpload.svelte";
  import AudioUpload from "$lib/assets/svg/AudioUpload.svelte";
  import VideoUpload from "$lib/assets/svg/VideoUpload.svelte";
  import NotesUpload from "$lib/assets/svg/NotesUpload.svelte";
  import LocationUpload from "$lib/assets/svg/LocationUpload.svelte";
  import PhotoUpload from "$lib/assets/svg/PhotoUpload.svelte";

  let mode = $state(null); // "identified" | "anonymous"

  let email = $state("");
  let emailVerification = $state("");
  let emailError = $state(null);
  let optionalText = $state("");

  function validateEmail() {
    if (!email && !emailVerification) {
      emailError = null;
      return false;
    }

    if (email !== emailVerification) {
      emailError = "Emails do not match";
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      emailError = "Invalid email format";
      return false;
    }

    emailError = "";
    return true;
  }

  function handleSubmit(event) {
    if (mode === "identified") {
      if (!validateEmail()) return;
    }

    const formData = new FormData(event.target);

    // Log formData for now
    console.log("Submitting as:", mode);
    for (const [key, value] of formData.entries()) {
      console.log(key, value);
    }

    // TODO: add  API call
  }
</script>

<form
  id="proof-form"
  onsubmit={(e) => {
    e.preventDefault();
    handleSubmit(e);
  }}
>
  <Title headingText="Submit Proof" level="h2" className="form-title" />

  {#if mode === null}
    <Text text="How would you like to Submit your proof ?" className="form-text" />
    <div class="selection">
      <Button onclick={() => (mode = "anonymous")} buttonText="Anonymous" className="form-button" />
      <Button
        onclick={() => (mode = "identified")}
        buttonText="Using Email"
        className="form-button"
      />
    </div>
  {:else if mode === "identified"}
    <Button
      onclick={() => {
        mode = null;
      }}
      buttonText="&#8617;"
      className="form-back-button"
    />

    <LabeledInput
      type="email"
      autocomplete="off"
      name="email"
      bind:value={email}
      placeHolder="email@example.com"
      classNameLabel="email-label"
      classNameInput="email-input"
      inputId="email"
      form="proof-form"
      text="Email address"
      required
    />

    <LabeledInput
      type="email"
      autocomplete="off"
      name="email_verification"
      bind:value={emailVerification}
      placeHolder="email@example.com"
      classNameLabel="email-label-verification"
      classNameInput="email-input-verification"
      inputId="email-verification"
      form="proof-form"
      text="Confirm email address"
      onblur={validateEmail}
      required
    />

    {#if emailError}
      <Text text={emailError} className="error" />
    {/if}
    <Text text="What type of proof are you submitting?" className="proof-type" />

    <FileInput
      inputFieldText="Photos and video (camera)"
      Icon={PhotoUpload}
      inputId="photos"
      dataType="image/*,video/*"
      name="Photo and/or video"
      form="proof-form"
    />

    <FileInput
      inputFieldText="Audio (Voice Memos)"
      Icon={AudioUpload}
      inputId="audio"
      dataType="audio/*"
      name="audio"
      form="proof-form"
    />

    <FileInput
      inputFieldText="Location & routes (Google maps timeline)"
      Icon={LocationUpload}
      inputId="location"
      dataType=".json,.kml,.gpx"
      name="location"
      form="proof-form"
    />

    <FileInput
      inputFieldText="Notes & diary (Notes/Keep)"
      Icon={NotesUpload}
      inputId="notes"
      dataType=".txt,.md,.pdf,.html"
      name="notes"
      form="proof-form"
    />

    <FileInput
      inputFieldText="WhatsApp or Telegram"
      Icon={ChatLogUpload}
      inputId="chatlogs"
      dataType=".txt,.json,.zip"
      name="whatsapp or telegram"
      form="proof-form"
    />

    <LabeledInput
      type="textarea"
      inputId="optional-text"
      text=" Any thing you would like to add ? (Optional)"
      placeHolder="This is optional you can add context to the uploaded file or anything else you would like to say."
      classNameInput="optional-text"
      classNameLabel="optional-text-label"
      bind:value={optionalText}
      name="textArea"
      form="proof-form"
    />

    <Button buttonText="Submit" className="submit-button" />
  {:else if mode === "anonymous"}
    <Text text="Anonymous submission" className="form-anon-text" />
    <Button
      onclick={() => {
        mode = null;
      }}
      buttonText="&#8617;"
      className="form-back-button"
    />

    <Text text="What type of proof are you submitting?" />

    <FileInput
      inputFieldText="Photos and video (camera)"
      Icon={PhotoUpload}
      inputId="photos"
      dataType="image/*,video/*"
      form="proof-form"
    />

    <FileInput
      inputFieldText="Audio (Voice Memos)"
      Icon={AudioUpload}
      inputId="audio"
      dataType="audio/*"
      form="proof-form"
    />

    <FileInput
      inputFieldText="Location & routes (Google maps timeline)"
      Icon={LocationUpload}
      inputId="location"
      dataType=".json,.kml,.gpx"
      form="proof-form"
    />

    <FileInput
      inputFieldText="Notes & diary (Notes/Keep)"
      Icon={NotesUpload}
      inputId="notes"
      dataType=".txt,.md,.pdf,.html"
      form="proof-form"
    />

    <FileInput
      inputFieldText="WhatsApp or Telegram"
      Icon={ChatLogUpload}
      inputId="chatlogs"
      dataType=".txt,.json,.zip"
      form="proof-form"
    />

    <LabeledInput
      type="textarea"
      inputId="optional-text"
      text=" Any thing you would like to add ? (Optional)"
      placeHolder="This is optional you can add context to the uploaded file or anything else you would like to say."
      classNameInput="optional-text"
      classNameLabel="optional-text-label"
      form="proof-form"
    />

    <Button buttonText="Submit" className="submit-button" />
  {/if}
</form>

<style>
  form {
    background: rgb(255 255 255 / 20%);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgb(0 0 0 / 10%);
    backdrop-filter: blur(5px);
    border: 1px solid rgb(255 255 255 / 30%);
    padding: var(--spacing-xl);
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
  }

  .selection {
    display: flex;
    gap: var(--spacing-lg);
    justify-content: center;
    align-self: center;
  }

  @media (width <= 500px) {
    form {
      margin: 25% 5% 0;
    }
  }
</style>
