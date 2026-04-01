<script>
    import { Button, Input, Label, EyeIcon, LoadingState, FormValidationMessages, ErrorMessageIcon } from "$lib";
    import { superForm } from 'sveltekit-superforms';

    let { data } = $props();

    const { form, errors, enhance, message, submitting, reset } = superForm(data.form, {resetForm: true});

</script>

<form class="contact-form" method="POST" id="contact-form" use:enhance>
    <fieldset class="contact-form-fieldset">
        <legend class="contact-form-legend">Contact form</legend>

        <div class="input-group">
            <Label inputId="first-name" formId="contact-form" className="contact-form-label" text="First name" />
            <Input name="firstname" type="text" placeholder="First name" className="contact-form-input" id="first-name" bind:value={$form.firstname} />

            {#if $errors.firstname}
                <FormValidationMessages ErrorText={$errors.firstname} Icon={ErrorMessageIcon} className="error-message"  />
            {/if}
        </div>

        <div class="input-group">
            <Label inputId="last-name" formId="contact-form" className="contact-form-label" text="Last name" />
            <Input name="lastname" type="text" placeholder="Last name" className="contact-form-input" id="last-name" bind:value={$form.lastname} />

            {#if $errors.lastname}
                <FormValidationMessages ErrorText={$errors.lastname} Icon={ErrorMessageIcon} className="error-message"  />
            {/if}
        </div>

        <div class="input-group">
            <Label inputId="email" formId="contact-form" className="contact-form-label" text="Email" />
            <Input name="email" type="email" placeholder="emailadress" className="contact-form-input" id="email" bind:value={$form.email}  />
            
            {#if $errors.email}
                <FormValidationMessages ErrorText={$errors.email} Icon={ErrorMessageIcon} className="error-message"  />
            {/if}
        </div>

        <div class="input-group">
            <Label inputId="message" formId="contact-form" className="contact-form-label" text="Message" />
            <Input name="message" placeholder="Your message" type="textarea" className="contact-form-input" id="message" bind:value={$form.message}  />

            {#if $errors.message }
                <FormValidationMessages ErrorText={$errors.message} Icon={ErrorMessageIcon} className="error-message"  />
            {/if}
        </div>
    </fieldset>


    <div class="button-wrapper">
        <Button
            Icon={EyeIcon}
            buttonType="submit"
            className="btn-black"
            buttonText="Send"
        />
            
        {#if $submitting}
            <LoadingState/>    
        {/if}

        {#if $message === 'Message send successfull'}
                <FormValidationMessages ErrorText={$message} Icon={ErrorMessageIcon} className="success-message"  />
        {:else if $message === 'Something went wrong'}
                <FormValidationMessages ErrorText={$message} Icon={ErrorMessageIcon} className="error-message"  />
        {/if}
    </div>
</form>

<style>
  .contact-form {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
  }

  .contact-form-fieldset {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
  }

  .input-group {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xxs);
    text-align: left;
  }

  .contact-form-legend {
    display: none;
  }

  .contact-form-fieldset {
    border: none;
  }

  .button-wrapper {
    display: flex;
    flex-direction: row;
    gap: var(--spacing-md);
  }

  .error-message {
    font-size: clamp(11px, 3vw, 12px);
    background-color: var(--emergency-color);
    width: fit-content;
    padding: var(--spacing-xxs);
    border-radius: var(--radius-sm);
    color: var(--secondary-text-color);
    font-style: italic;
    padding-left: var(--spacing-xs);
    padding-right: var(--spacing-xs);
    margin-top: var(--radius-xs);

    display: flex;
    flex-direction: row;
    gap: var(--spacing-xxs);
    justify-content: center;
    align-items: center;

    svg {
      align-self: flex-start;
    }
  }

  .success-message {
    font-size: clamp(11px, 3vw, 12px);
    background-color: green;
    width: fit-content;
    padding: var(--spacing-xxs);
    border-radius: var(--radius-sm);
    color: var(--secondary-text-color);
    font-style: italic;
    padding-left: var(--spacing-xs);
    padding-right: var(--spacing-xs);
    margin-top: var(--radius-xs);

    display: flex;
    flex-direction: row;
    gap: var(--spacing-xxs);
    justify-content: center;
    align-items: center;

    animation: fadeOut 1s ease forwards;
    animation-delay: 3s;

    svg {
      align-self: flex-start;
    }
  }

  /* @keyframes fadeOut {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
} */

  .loader-container {
    display: flex;
    align-items: center;
    width: fit-content;
    gap: var(--spacing-xs);

    span {
      height: 0.7rem;
      width: 0.7rem;
      border-radius: var(--radius-lg);
      background-color: var(--accent-neutral);
      animation: loading 1s ease infinite;
    }

    .circle-one {
      animation-delay: 0s;
    }

    .circle-two {
      animation-delay: 0.2s;
    }

    .circle-three {
      animation-delay: 0.3s;
    }
  }

  @keyframes loading {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-1rem);
    }
    100% {
      transform: translateY(0);
    }
  }
</style>
