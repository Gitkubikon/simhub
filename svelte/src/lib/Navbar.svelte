<script>
    // Section Id
    export let Id;
    // Brand name
    export let brand;
    // Navigation bar items
    export let nav_items;
    // theme toggle
    export let state;

    let text_color = "dark";
    let bg_color = "light";

    if (state == "dark") {
        text_color = "light";
        bg_color = "dark";
    }

    let isMenuOpen = false;
    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }
</script>

<!-- Navigation component -->
<div class="container">
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-{bg_color} bg-{bg_color} shadow-0 fixed-top px-3 py-3" {Id}>
        <div class="container-fluid">
            <!-- Navbar brand -->
            <a class="navbar-brand text-primary" href="/">
                <span class="text-shadows" data-text="{brand}">{brand}</span>
            </a>
            <!-- Navbar brand -->

            <!-- Toggle button -->
            <button
                class="navbar-toggler"
                type="button"
                aria-label="Toggle navigation"
                on:click={toggleMenu}
            >
                <i class="fas fa-bars"></i>
            </button>
            <!-- Toggle button -->

            <!-- Collapsible wrapper -->
            <div class={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarSupportedContent">
                <!-- Navbar items -->
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    {#each nav_items as item}
                        <li class="nav-item">
                            <a class="nav-link text-{text_color}" href={item[1]}>{item[0]}</a>
                        </li>
                    {/each}
                    <!-- Social Media -->
                    <li class="nav-item">
                        <a class="nav-link text-{text_color}" href="https://www.facebook.com" target="_blank">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-{text_color}" href="https://www.twitter.com" target="_blank">
                            <i class="fab fa-twitter"></i>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-{text_color}" href="https://www.instagram.com" target="_blank">
                            <i class="fab fa-instagram"></i>
                        </a>
                    </li>
                    <!-- Profile -->
                    <li class="nav-item">
                        <a class="nav-link text-{text_color}" href="/profile">
                            <i class="fas fa-user"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <!-- Navbar -->
</div>
<!-- Navigation component -->

<style>
    /* Desktop styles */
    .navbar {
        background-color: var(--background-dark) !important;
        border-bottom: 2px solid var(--primary-color);
        transition: background-color 0.3s, box-shadow 0.3s;
        z-index: 1000;
    }

    .navbar:hover {
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    }

    .navbar-toggler {
        border: none;
        color: var(--text-light);
        font-size: 1.5rem;
    }

    .navbar-toggler:focus {
        outline: none;
    }

    .nav-link {
        color: var(--text-light) !important;
        position: relative;
        display: inline-block;
        padding: 0.5em 1em;
        transition: color 0.3s, transform 0.3s;
    }

    .nav-link::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: var(--primary-color);
        visibility: hidden;
        transform: scaleX(0);
        transition: all 0.3s ease-in-out;
    }

    .nav-link:hover::before {
        visibility: visible;
        transform: scaleX(1);
    }

    .nav-link:hover {
        color: var(--primary-color) !important;
        transform: translateY(-2px);
    }

    .navbar-brand {
        font-family: 'Orbitron', sans-serif;
        font-size: 2rem;
        color: var(--primary-color) !important;
        transition: color 0.3s, transform 0.3s;
        display: inline-block;
        padding: 0.5em 1em;
    }

    .navbar-brand:hover {
        color: var(--hover-primary) !important;
        transform: scale(1.05);
    }

    /* Mobile styles */
    @media (max-width: 768px) {
        .navbar-collapse {
            background-color: var(--background-dark);
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease-in-out;
        }

        .navbar-collapse.show {
            max-height: 500px; /* Adjust as needed */
        }

        .nav-item {
            width: 100%;
            text-align: center;
        }

        .nav-link {
            font-family: 'Orbitron', sans-serif;
            width: 100%;
            padding: 1rem;
            border-bottom: 1px solid var(--primary-color);
            color: var(--text-light) !important;
            opacity: 0;
            animation: fadeIn 0.5s forwards;
        }

        .nav-link:nth-child(1) {
            animation-delay: 0.1s;
        }

        .nav-link:nth-child(2) {
            animation-delay: 0.2s;
        }

        .nav-link:nth-child(3) {
            animation-delay: 0.3s;
        }

        .nav-link:nth-child(4) {
            animation-delay: 0.4s;
        }

        .nav-link:nth-child(5) {
            animation-delay: 0.5s;
        }

        .nav-link:hover {
            background-color: var(--background-light);
            color: var(--text-dark) !important;
        }

        .nav-link::before {
            visibility: hidden;
        }

        .navbar-toggler {
            font-size: 1.5rem;
            color: var(--text-light);
        }

        .navbar-brand {
            font-size: 1.5rem;
            padding: 0.5rem 1rem;
        }
    }

    /* Animations */
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    /* Improved 3D Effect */
    :global(.text-shadows) {
        position: relative;
        color: var(--color-1);
        font-weight: bold;
        font-family: 'Kode Mono', monospace;
        text-shadow:
            1px 1px 0 var(--color-2),
            2px 2px 0 var(--color-3),
            3px 3px 0 var(--color-4),
            4px 4px 0 var(--color-5),
            5px 5px 0 var(--color-6),
            6px 6px 0 var(--color-7),
            7px 7px 0 var(--color-8),
            8px 8px 0 var(--color-9),
            9px 9px 0 var(--color-10);
        transition: all 2s ease-in-out;
        animation: textShadowTransition 2s ease-in-out forwards;
    }
    @keyframes textShadowTransition {
        0% {
            text-shadow: none;
            transform: scale(1) translateY(0);
        }
        100% {
            text-shadow:
                1px 1px 0 var(--color-2),
                2px 2px 0 var(--color-3),
                3px 3px 0 var(--color-4),
                4px 4px 0 var(--color-5),
                5px 5px 0 var(--color-6),
                6px 6px 0 var(--color-7),
                7px 7px 0 var(--color-8),
                8px 8px 0 var(--color-9),
                9px 9px 0 var(--color-10);
            transform: scale(1.2) translateY(-10px);
        }
    }
    /* :global(.text-shadows::after) {
        content: attr(data-text);
        position: absolute;
        top: 0;
        left: 0;
        color: #000;
        z-index: -1;
        transform: translate(5px, 5px);
        filter: blur(1px);
        opacity: 0.5;
        transition: transform 2s ease-in-out, filter 2s ease-in-out, opacity 2s ease-in-out;
    } */
</style>
