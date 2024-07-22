<script>
  import { fade, slide } from "svelte/transition";
  import { onMount } from "svelte";
  import Saos from "saos";
  // import Map from "./Map.svelte";

  let ready = false;
  onMount(() => (ready = true));

  // Section Id
  export let Id;
  // Section title
  export let contact_title = "Get in Touch with RacingHub!";
  // Social media links
  export let social = [
    ["Facebook", "fab fa-facebook-f", "https://www.facebook.com/RacingHub"],
    ["Twitter", "fab fa-twitter", "https://twitter.com/RacingHub"],
    ["Instagram", "fab fa-instagram", "https://instagram.com/RacingHub"],
    ["LinkedIn", "fab fa-linkedin-in", "https://www.linkedin.com/company/RacingHub"]
  ];
  // theme toggle
  export let state;

  let text_color = "dark";
  let bg_color = "light";

  if (state == "dark") {
    text_color = "light";
    bg_color = "dark";
  }
</script>

<!-- Contact component -->
<div
  class="bg-{bg_color} text-{text_color} d-flex justify-content-center align-items-center min-vh-100 flex-column"
  id={Id}
  style="padding-top:58px; background-color: transparent !important;"
>
  <Saos animation={""}>
    {#if ready}
      <div class="container text-center transition-container">
        <!-- Section title -->
        <div in:slide={{ duration: 1000 }} class="text-center mb-3">
          <h1 class="fw-bold text-primary">
            {contact_title}
          </h1>
        </div>
        <!-- Section title -->

        <hr />

        <!-- Contact Information -->
        <div in:fade={{ delay: 500, duration: 1000 }}>
          <p class="contact-info">
            Visit us at: <strong>123 Racing Street, Ingolstadt, Germany</strong><br>
            Call us: <strong>+49 123 456 789</strong><br>
            Email: <strong><a href="mailto:info@racinghub.com" class="contact-email">info@racinghub.com</a></strong>
          </p>
        </div>
        <!-- Contact Information -->

        <!-- Social Media -->
        <div class="social-media mt-4" in:fade={{ delay: 700, duration: 1000 }}>
          {#each social as item}
            <a class="btn shadow-sm mx-1 social-icon" href={item[2]} target="_blank" rel="noopener noreferrer" aria-label={item[0]}>
              <i class="h3 {item[1]}" />
            </a>
          {/each}
        </div>
        <!-- Social Media -->

        <!-- Map -->
        <!-- <div class="map-container mt-4">
          <Map id="contact-map" />
        </div> -->
        <!-- Map -->

        <!-- Empty column to make things perfect -->
        <div class="col-md-12" />
        <!-- Empty column to make things perfect -->
      </div>
    {/if}
  </Saos>
</div>

<!-- Contact component -->

<!-- Contact.svelte -->
<style>
  .transition-container {
    border-radius: 16px;
    background-color: rgba(29, 31, 55, 0.1) !important;
    backdrop-filter: blur(10px);
    padding: 2rem;
    transition: width 0.3s ease, height 0.3s ease;
    overflow: hidden;
    box-shadow: 0 0 60px rgba(14, 15, 26, 0.6);
  }

  .contact-info {
    font-size: 1.2rem;
    line-height: 1.5;
    margin-bottom: 2rem;
  }

  .contact-email {
    color: var(--primary-color);
    text-decoration: none;
  }

  .contact-email:hover {
    color: var(--hover-primary);
  }

  .social-media {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .social-icon {
    color: var(--primary-color);
    transition: transform 0.3s ease, color 0.3s ease;
    border-radius: 8px;
    border: 2px solid var(--primary-color);
    padding: 0.5rem 1rem;
    font-size: 1.5rem;
  }

  .social-icon:hover {
    color: var(--hover-primary);
    transform: scale(1.1);
  }

  .map-container {
    height: 60vh; /* Adjust the height as necessary */
    width: inherit !important;
  }

  @media (max-width: 768px) {
    .transition-container {
      box-shadow: 0 0 0px rgba(14, 15, 26, 0.6);
    }

    .contact-info {
      text-align: left;
    }

    .social-icon {
      font-size: 1.2rem;
    }
  }
</style>
