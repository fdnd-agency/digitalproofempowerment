<script>
  import {
    LocationUpload,
    FormValidationMessages,
    ErrorMessageIcon,
    LocationIcon,
    TimeIcon,
  } from "$lib";
  import { superForm } from "sveltekit-superforms";

  let { data } = $props();

  const { form, errors, enhance, message } = superForm({
    resetForm: true,
  });

  function getLocation() {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => ($form.location = `${coords.latitude}, ${coords.longitude}`)
    );
  }
</script>

<form class="form-container" method="POST" use:enhance>
  <section class="date-container">
    <div class="icon-container">
      <LocationUpload />
    </div>

    <h2>Select date</h2>
    <p>Select the date to link your hours to the correct working day.</p>

    <fieldset>
      <legend class="visually-hidden">Date</legend>
      <label class="visually-hidden" for="date-input">Date</label>
      <input id="date-input" name="date" type="date" bind:value={$form.date} />

      {#if $errors.date}
        <FormValidationMessages
          ErrorText={$errors.date}
          Icon={ErrorMessageIcon}
          className="error-message"
        />
      {/if}
    </fieldset>
  </section>

  <section class="time-container">
    <div class="icon-container">
      <TimeIcon />
    </div>

    <h2>Select Time</h2>
    <p>Log your start time to keep an accurate record of your working hours.</p>

    <fieldset>
      <legend class="visually-hidden">Time</legend>

      <label class="visually-hidden" for="time-input">Time</label>
      <input name="time" id="time-input" type="time" bind:value={$form.time} />

      {#if $errors.time}
        <FormValidationMessages
          ErrorText={$errors.time}
          Icon={ErrorMessageIcon}
          className="error-message"
        />
      {/if}
    </fieldset>
  </section>

  <section class="location-container">
    <div class="icon-container">
      <LocationIcon />
    </div>

    <h2>Location</h2>
    <p>
      Your current location is automatically detected. Press the button to verify you are working
      onsite.
    </p>

    <fieldset>
      <legend class="visually-hidden">Location</legend>

      <label class="visually-hidden" for="location-input">Time</label>
      <input
        class="location-input"
        id="location-input"
        type="text"
        placeholder="Click to submit geo location"
        onclick={getLocation}
        readonly
        name="location"
        bind:value={$form.location}
      />

      {#if $errors.location}
        <FormValidationMessages
          ErrorText={$errors.location}
          Icon={ErrorMessageIcon}
          className="error-message"
        />
      {/if}

      <div class="adress-container">
        <p>
          If you know the address, adding it provides extra verification of your on-site location.
        </p>

        <label for="street-input">
          Street
          <input
            id="street-input"
            type="text"
            autocomplete="address-line1"
            placeholder="Street and number"
            bind:value={$form.street}
          />
        </label>

        <label for="postal-code-input">
          Postal code
          <input
            id="postal-code-input"
            type="text"
            autocomplete="postal-code"
            placeholder="Postal code"
            bind:value={$form.postal}
          />
        </label>

        <label for="city-input">
          City
          <input
            id="city-input"
            type="text"
            autocomplete="address-level2"
            placeholder="City"
            bind:value={$form.city}
          />
        </label>

        <label for="country-input">
          Country
          <input
            id="country-input"
            type="text"
            autocomplete="country-name"
            placeholder="Country"
            bind:value={$form.country}
          />
        </label>
      </div>
    </fieldset>
  </section>

  <div class="global-form-message-container">
    {#if $message === "Message send successfull"}
      <FormValidationMessages
        ErrorText={$message}
        Icon={ErrorMessageIcon}
        className="success-message"
      />
    {:else if $message === "Something went wrong"}
      <FormValidationMessages
        ErrorText={$message}
        Icon={ErrorMessageIcon}
        className="error-message"
      />
    {/if}
  </div>

  <button class="submit-button" type="submit">Submit</button>
</form>

<style>
  .global-form-message-container {
    padding: 1rem;
  }

  .form-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    gap: 0.5rem;

    @media (min-width: 720px) {
      grid-template-rows: auto auto;
      grid-template-columns: 1fr 1fr;
    }
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

  fieldset {
    border: none;
  }

  h2 {
    padding-top: 1rem;
    color: #091244;
  }

  p {
    padding-bottom: 1rem;
    color: rgb(118, 118, 118);
  }

  .icon-container {
    background-color: rgba(170, 176, 176, 0.252);
    padding: 0.5rem;
    width: fit-content;
    border-radius: 0.5rem;
  }

  .date-container,
  .time-container,
  .location-container {
    background-color: #ffffff;
    padding: 1rem;
    margin: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);

    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  input {
    width: 100%;
    padding: 0.6rem 0.7rem;
    border-radius: 0.4rem;
    background-color: #88c5f1;
    color: #ffffff;
    font-family: Poppins;
    border: none;
    outline: none;
    font-size: 0.6rem;
  }

  .location-input {
    width: 100%;
    padding: 0.6rem 0.7rem;
    border-radius: 0.4rem;
    background-color: #ea661a;
    color: #ffffff;
    font-family: Poppins;
    border: none;
    outline: none;
    font-size: 0.6rem;
    margin-top: 1rem;
    cursor: pointer;

    &:hover {
      background-color: #61afe7;
    }
  }

  ::placeholder {
    color: #ffffff;
  }

  .adress-container {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }

  label {
    font-size: clamp(12px, 3vw, 20px);
  }

  .submit-button {
    margin: 1rem;
    padding: 0.6rem 0.7rem;
    border-radius: 0.4rem;
    background-color: #091244;
    color: #ffffff;
    border: none;
    cursor: pointer;
  }
</style>
