<script>
    import { fade } from "svelte/transition";
    import { onMount } from "svelte";

    let ready = false;
    onMount(() => {
        ready = true;
    console.log('ready', ready);
    
    });
</script>

<!-- Home Component -->
<section id="home" class="home-section">
    <div class="overlay">
        <div class="container">
            {#if ready}
                <!-- Main Titles -->
                <h1 class="main-title" in:fade={{ duration: 1000 }}>
                    Dein Fahrerlebnis in Ingolstadt
                </h1>
                <p class="subtitle" in:fade={{ duration: 1000, delay: 500 }}>
                    Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor.
                </p>
                <!-- CTA Buttons -->
                <div class="button-group" in:fade={{ duration: 1000, delay: 1000 }}>
                    <button class="cta-button">Jetzt Termin buchen</button>
                    <p class="cta-text">Oder komm einfach vorbei</p>
                </div>
            {/if}
        </div>
    </div>
    <div class="scroll-indicator">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
    </div>
</section>

<style>
    .home-section {
        position: relative;
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        /* background: url('/assets/background.png') no-repeat center center; */
        background-size: cover;
        padding: 3rem 1rem;
    }

    .background-img {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        opacity: 0.2;
        width: 100%;
    }

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        /* background: linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)); */
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .container {
        position: relative;
        z-index: 1;
        text-align: center;
        color: var(--text-light);
    }

    .main-title {
        font-size: 2.5rem;
        font-weight: bold;
        margin-bottom: 1rem;
    }

    .subtitle {
        font-size: 1.2rem;
        margin-bottom: 2rem;
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

    .cta-text {
        color: var(--text-light);
        font-size: 1rem;
        margin-top: 0.5rem;
    }

    .scroll-indicator {
        position: absolute;
        bottom: 60px;
        left: 50%;
        transform: translateX(-50%);
        color: var(--text-light);
        animation: bounce 2s infinite;
    }

    @keyframes bounce {
        0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
        }
        40% {
            transform: translateY(-10px);
        }
        60% {
            transform: translateY(-5px);
        }
    }

    @media (max-width: 768px) {
        .main-title {
            font-size: 2rem;
        }

        .subtitle {
            font-size: 1rem;
        }

        .cta-button {
            font-size: 0.9rem;
        }
    }
</style>
