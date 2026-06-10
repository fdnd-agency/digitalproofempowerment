<script>
  import { superForm } from "sveltekit-superforms";
  import FormValidationMessages from "../atoms/FormValidationMessages.svelte";

  let { data, Icon } = $props();

  /* eslint-disable-next-line svelte/valid-compile */
  const { form, errors, enhance, message, submitting } = superForm(data.form, {
    resetForm: false,
  });
</script>

<article class="clock-container">
  <h2 class="clock-container-title">Quickly log your hours</h2>
  <p class="card-sub-paragraph">Securely document an incident in real-time.</p>

  <form method="POST" use:enhance>
    <fieldset>
      <legend class="visually-hidden">Clock in and out</legend>

      <label>
        Enter your code
        <input
          type="text"
          name="submission_id"
          bind:value={$form.submission_id}
          placeholder="Insert personal code"
        />
      </label>

      <input type="hidden" name="action" value={$form.action} />

      <div class="button-wrapper">
        <button type="submit" disabled={$submitting} onclick={() => ($form.action = "in")}>
          Clock in
        </button>

        <button type="submit" disabled={$submitting} onclick={() => ($form.action = "out")}>
          Clock out
        </button>
      </div>

      {#if $errors.submission_id}
        <p class="invalid-uuid-error">{$errors.submission_id}</p>
      {/if}
    </fieldset>
  </form>

  <div class="emergency-container-right">
    <div class="emergency-right-panel">
      <Icon />
    </div>
  </div>
</article>

<FormValidationMessages
  show={$message === "Clocked in"}
  type="success"
  message="Clocked in successfull"
/>

<FormValidationMessages
  show={$message === "Clocked out"}
  type="success"
  message="Clocked out successfull"
/>

<style>
  .clock-container {
    border: var(--border);
    padding: var(--spacing-lg);
    border-radius: var(--radius-md);
    box-shadow: var(--box-shadow-webkit);
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
    color: white;
    transition: transform 0.3s ease-in-out;
    background-color: #6d73a9;
    position: relative;
  }

  .clock-container-title {
    font-size: clamp(20px, 3vw, 20px);
    color: var(--main-text-color);
    font-weight: bold;
  }

  .card-sub-paragraph {
    font-size: clamp(11px, 3vw, 13px);
    color: #ffffff80;
    text-wrap: wrap;
  }

  button {
    border: none;
    border-radius: var(--radius-xs);
    text-decoration: none;
    font-weight: 400;
    cursor: pointer;
    justify-self: flex-start;
    background-color: var(--primary-lightest);
    color: var(--primary-dark);
    padding: var(--spacing-xs);
    font-size: clamp(10px, 3vw, 14px);
    width: 6rem;
    z-index: 99999;

    &:hover {
      background-color: var(--primary-dark);
      color: var(--main-text-color);
    }
  }

  .button-wrapper {
    display: flex;
    justify-content: space-between;
  }

  label {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-size: clamp(10px, 3vw, 14px);
  }

  fieldset {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
    border: none;
  }

  .visually-hidden {
    border: 0;
    clip-path: inset(50%);
    height: 1px;
    margin: 0;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }

  .emergency-container-right {
    position: absolute;
    right: -1rem;
    bottom: -1.5rem;
    opacity: 0.16;
    width: 9rem;
    height: 9rem;
  }

  .emergency-right-panel :global(svg) {
    width: 100%;
    height: 100%;
    color: white;
  }

  .invalid-uuid-error {
    color: var(--background-color-secondary);
    background-color: var(--emergency);
    width: fit-content;
    padding: var(--spacing-xxs);
    font-size: clamp(10px, 3vw, 14px);
    border-radius: var(--radius-sm);
  }
</style>
