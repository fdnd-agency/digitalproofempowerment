<script>
  let { reviewerName, reviewerProffesion, reviewText, dateTimeFormat, reviewDate, profileImage } =
    $props();

  import { Profile, QuotesIcon } from "$lib";
</script>

<article class="review-card-container">
  <Profile name={reviewerName} profilePicture={profileImage} proffesion={reviewerProffesion} />

  <p>{reviewText}</p>

  <footer class="card-footer">
    <time datetime={dateTimeFormat} class="review-date">{reviewDate}</time>
    <QuotesIcon className="quote-icon" />
  </footer>
</article>

<style>
  .review-card-container {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
    border: var(--border);
    padding: var(--spacing-lg);
    border-radius: var(--radius-sm);
    box-shadow: var(--box-shadow-webkit);
  }

  p {
    font-size: clamp(11px, 3vw, 13px);
  }

  .card-footer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: auto;
  }

  time {
    align-self: flex-end;
    text-decoration: underline;
    text-decoration-color: var(--accent-neutral);
    text-underline-offset: var(--spacing-xxs);
  }
</style>
