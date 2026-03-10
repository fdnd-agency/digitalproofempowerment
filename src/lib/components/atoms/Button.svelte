<script>
  let { className, buttonText, Icon, buttonType, ...rest } = $props();
</script>

<button class={`basic-button ${className || ""}`} type={buttonType} {...rest}>
  {#if Icon}
    <Icon class="icon" />
  {/if}
  {buttonText}
</button>

<style>
  .basic-button {
    display: flex;
    align-items: center;
    gap: var(--spacing-xs);
    border-radius: var(--radius-xs);
    font-size: clamp(10px, 3vw, 14px);
    font-weight: 550;
    padding: var(--spacing-xs);
    -webkit-box-shadow: var(--box-shadow-webkit);
    box-shadow: var(--box-shadow);
    letter-spacing: 0.03rem;
    cursor: pointer;
  }

  .btn-white {
    background-color: var(--main-background-color);
    color: var(--main-text-color);
    border: var(--border);

    &:hover {
      background-color: var(--accent-neutral);
      color: var(--secondary-text-color);
    }
  }

  .btn-red {
    background-color: var(--emergency-color);
    color: var(--secondary-text-color);
    border: none;
    padding: var(--spacing-xs);

    &:hover {
      background-color: var(--main-background-color);
      color: var(--main-text-color);
    }
  }

  .btn-black {
    background-color: var(--secondary-background-color);
    color: var(--secondary-text-color);
    border: none;
    padding: var(--spacing-xs);

    &:hover {
      background-color: var(--accent-neutral);
    }
  }

  .quiz-button {
    grid-row: 2;
    font-size: clamp(16px, 2.5vw, 20px);
    background: rgba(255, 255, 255, 0.2);
    border-radius: var(--spacing-md);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(20.6px);
    -webkit-backdrop-filter: blur(10.6px);
    border: 1px solid var(--accent-lightest);
    padding: var(--spacing-xl);
    padding-top: var(--spacing-xs);
    padding-bottom: var(--spacing-xs);
    margin: var(--spacing-xs);
    color: var(--secondary-text-color);
  }

  .quiz-button:hover {
    background-color: var(--accent-dark);
    border: 1px solid whitesmoke;
  }

  .quiz-button:focus {
    outline: 1px solid var(--accent-neutral);
  }

  .anon-button {
    background: rgb(225, 225, 225);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5.3px);
    border: 1px solid rgba(105, 62, 5, 0.37);
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--main-text-color);
  }
  .identified-button {
    background: rgb(225, 225, 225,);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5.3px);
    border: 1px solid rgba(105, 62, 5, 0.37);
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--main-text-color);
    
  }

  .form-back-button {
    background: rgba(225, 225, 225, 0.8);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5.3px);
    -webkit-backdrop-filter: blur(5.3px);
    border: 1px solid rgba(105, 62, 5, 0.37);
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--main-text-color);
    margin: var(--spacing-xs);
    font-size: 1.5rem; 
    padding: 0 var(--spacing-md);
  }
  .submit-button{
     background: rgb(225, 225, 225, );
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5.3px);
    -webkit-backdrop-filter: blur(5.3px);
    border: 1px solid rgba(105, 62, 5, 0.37);
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--main-text-color);
    margin: var(--spacing-xs) ;
    align-self: center;
    padding:  var(--spacing-xs) var(--spacing-2xl);
  }
</style>
