<script>
    import { slide, fade } from "svelte/transition";
    import { onMount } from "svelte";
    import Saos from "saos";

    let ready = false;
    onMount(() => (ready = true));

    // Section Id
    export let Id;
    // Section title
    export let services_title = "Our Services";
    // Array of services
    export let services = [
        {
            title: "Realistic Racing Simulators",
            description: "Experience the thrill of racing with our state-of-the-art simulators that provide a realistic driving experience.",
            image: "../assets/background.png",
            link: "#"
        },
        {
            title: "Multiple Tracks and Cars",
            description: "Choose from a variety of tracks and cars to race on, providing endless possibilities and challenges.",
            image: "../assets/background.png",

            link: "#"
        },
        {
            title: "Professional Coaching",
            description: "Get tips and training from professional racers to improve your skills and performance.",
            image: "../assets/background.png",

            link: "#"
        },
        {
            title: "Competitive Tournaments",
            description: "Participate in our regular tournaments and compete against others to win exciting prizes.",
            image: "../assets/background.png",

            link: "#"
        },
        {
            title: "Corporate Events and Parties",
            description: "Book our venue for corporate events, team-building activities, and private parties.",
            image: "../assets/background.png",

            link: "#"
        }
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

<style>
    .service-image {
        max-height: 333px;
        object-fit: cover;
        width: 100%;
        border-radius: 8px;
        overflow: hidden;
    }

    .service-card {
        border-radius: 16px;
        /* background-color: rgba(29, 31, 55, 0.2) !important; */
        backdrop-filter: blur(20px);
        padding: 1rem;
        margin: 1rem;
        flex: 1 1 calc(50% - 2rem);
        box-sizing: border-box;
        /* box-shadow: 0 0 60px rgba(14, 15, 26, 0.6); */
        transition: outline 0.3s ease, transform 0.3s ease;
    }

    .service-card:hover {
        transform: scale(1.05);
    }

    .card {
        background-color: transparent !important;
        box-shadow: none !important;
    }

    .flex-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
    }

    @media (max-width: 768px) {
        .service-card {
            flex: 1 1 100%;
        }
    }
</style>

<!-- Services component -->
<div class="text-{text_color} d-flex justify-content-center align-items-center min-vh-100" id={Id} style="padding-top:58px; background-color: transparent !important;">
    <Saos animation={""}>
        {#if ready}
            <div class="container text-center">
                <!-- Section title -->
                <div in:slide={{ duration: 1000 }} class="mb-5">
                    <h1 class="fw-bold text-primary">{services_title}</h1>
                </div>
                <!-- Section title -->
                <hr class="mb-5" />
                <!-- Section Data -->
                <div class="flex-container">
                    {#each services as service}
                        <div in:fade={{ delay: 500, duration: 1500 }} class="service-card">
                            <a class="text-{text_color}" href={service.link} target="_blank">
                                <div class="card">
                                    <img class="card-img-top service-image" src={service.image} alt={service.title} />
                                    <div class="card-body">
                                        <!-- Service title -->
                                        <h5 class="card-title text-primary fw-bold">{service.title}</h5>
                                        <!-- Service description -->
                                        <p class="card-text">{service.description}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    {/each}
                </div>
                <!-- Section Data -->
            </div>
        {/if}
    </Saos>
</div>
<!-- Services component -->
