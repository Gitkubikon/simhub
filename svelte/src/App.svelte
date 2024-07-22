<script>
    import Navbar from "./lib/Navbar.svelte";
    import Footer from "./lib/Footer.svelte";
    import Header from "./lib/Header.svelte";
    import About from "./lib/About.svelte";
    import Services from "./lib/Services.svelte";
    import Contact from "./lib/Contact.svelte";
    import { onMount } from "svelte";

    let brand = "Racing Hub";
    let nav_items = [
        ["Home", "#"],
        ["About", "#about"],
        ["Services", "#services"],
        ["Contact", "#contact"],
    ];

    let contact_title = "Get in Touch with RacingHub!";
    let social = [
        ["Facebook", "fab fa-facebook-f", "https://www.facebook.com/RacingHub"],
        ["Twitter", "fab fa-twitter", "https://twitter.com/RacingHub"],
        ["Instagram", "fab fa-instagram", "https://instagram.com/RacingHub"],
        [
            "LinkedIn",
            "fab fa-linkedin-in",
            "https://www.linkedin.com/company/RacingHub",
        ],
    ];

    let state = "dark"; // Change this to "light" to use light theme.

    let text_color = "dark";
    let bg_color = "light";

    if (state === "dark") {
        text_color = "light";
        bg_color = "dark";
    }

    onMount(() => {
        console.log("App mounted");
        const sections = document.querySelectorAll("section");
        const ctaButton = document.querySelector(".cta-button");

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                } else {
                    entry.target.classList.remove("visible");
                }
            });
        });

        sections.forEach((section) => {
            observer.observe(section);
        });
    });
</script>

<main class="bg-{bg_color} text-{text_color} min-vh-100">
    <div class="bg-pattern">
        <Navbar {brand} {nav_items} {state} />
        <Header {state} />
        <About Id="about" {state} />
        <Services Id="services" {state} />
        <Contact Id="contact" {contact_title} {social} {state} />
        <Footer {brand} {state} />
    </div>
    <button class="cta-button">Jetzt Termin buchen</button>
</main>

<style>
    .cta-button {
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        font-size: 1.2rem;
        font-weight: bold;
        border: none;
        border-radius: 8px;
        background-color: var(--primary-color);
        color: var(--text-light);
        cursor: pointer;
        transition:
            background-color 0.3s,
            transform 0.3s;
    }

    html {
        scroll-behavior: smooth;
    }

    section {
        opacity: 0;
        transition: opacity 0.5s ease-in-out;
    }

    section.visible {
        opacity: 1;
    }
</style>
