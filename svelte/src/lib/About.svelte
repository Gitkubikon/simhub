<script>
    import { fade } from "svelte/transition";
    import { onMount } from "svelte";

    let ready = false;
    onMount(() => (ready = true));

    // Section Id
    export let Id;
    // Title of the about section
    export let about_title = "Welcome to RacingHub!";
    // Description of the racing hub
    export let description = "Experience the thrill of high-speed racing with our state-of-the-art simulators. Whether you're a professional racer or just looking for some fun, RacingHub has something for everyone.";
    // Features
    export let features = [
        "Realistic Racing Simulators",
        "Multiple Tracks and Cars",
        "Professional Coaching",
        "Competitive Tournaments",
        "Corporate Events and Parties"
    ];
</script>

<!-- About component -->
<div class="about-section bg-dark text-light d-flex justify-content-center align-items-center min-vh-100" id={Id}>
    {#if ready}
        <div class="container text-center transition-container">
            <!-- About Section -->
            <div class="row">
                <div in:fade={{ duration: 1000 }} class="col-12 mb-3">
                    <!-- Section title -->
                    <h1 class="content-header fw-bold text-primary mb-5">
                        {about_title}
                    </h1>
                    <!-- Section title -->

                    <hr class="mb-5" />

                    <!-- Section Data -->
                    <p in:fade={{ delay: 500, duration: 1000 }} class="description-text">
                        {description}
                    </p>
                    <!-- Section Data -->

                    <!-- Features -->
                    <div class="features mt-5">
                        {#each features as feature}
                            <div class="feature-item" in:fade={{ delay: 700, duration: 1000 }}>
                                <i class="fas fa-check-circle feature-icon"></i>
                                <span class="feature-text">{feature}</span>
                            </div>
                        {/each}
                    </div>
                    <!-- Features -->

                    <!-- Book Now Button -->
                    <div class="button-group mt-5" in:fade={{ delay: 1000, duration: 1000 }}>
                        <button class="cta-button">Book Your Experience</button>
                    </div>
                    <!-- Book Now Button -->
                </div>
            </div>
            <!-- About Section -->
        </div>
    {/if}
</div>

<!-- About component -->
<style>
    .about-section {
        padding-top: 58px;
        background-color: var(--background-dark) !important;
    }

    .transition-container {
        border-radius: 16px;
        background-color: rgba(29, 31, 55, 0.1) !important;
        backdrop-filter: blur(10px);
        padding: 2rem;
        transition: width 0.3s ease, height 0.3s ease;
        overflow: hidden;
        box-shadow: 0 0 60px rgba(14, 15, 26, 0.6);
    }

    .content-header {
        justify-content: center;
        align-content: center;
        display: flex;
        align-items: center;
    }

    .description-text {
        font-size: 1.2rem;
        margin-bottom: 2rem;
    }

    .features {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .feature-item {
        display: flex;
        align-items: center;
        font-size: 1.2rem;
        margin-bottom: 1rem;
    }

    .feature-icon {
        color: var(--primary-color);
        margin-right: 0.5rem;
    }

    .button-group {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .cta-button {
        background-color: var(--primary-color);
        color: var(--text-light);
        border: none;
        padding: 10px 20px;
        cursor: pointer;
        transition: background-color 0.3s, transform 0.3s;
        border-radius: 5px;
        font-family: 'Orbitron', sans-serif;
        font-size: 1rem;
        margin-bottom: 1rem;
    }

    .cta-button:hover {
        background-color: var(--hover-primary);
        transform: scale(1.05);
    }

    @media (max-width: 768px) {
        .transition-container {
            box-shadow: 0 0 0px rgba(14, 15, 26, 0.6);
        }

        .description-text {
            text-align: left;
        }

        .feature-item {
            font-size: 1rem;
        }

        .cta-button {
            font-size: 0.9rem;
        }
    }
</style>
