# Senary Racing Sim Hub Center

Welcome to the official repository of the **Senary Racing Sim Hub Center**! This project combines the power of Rust and cutting-edge web technologies to deliver a high-performance, immersive experience for racing simulation enthusiasts.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The **Senary Racing Sim Hub Center** is a comprehensive web application designed to enhance your racing simulation experience. It serves as a central hub where users can access race statistics, leaderboards, real-time chat, and AI-driven recommendations and insights.

## Features

- **High Performance Backend**: Built with Actix Web for a fast and reliable API.
- **Modern Frontend**: Utilizes Yew and Svelte for a responsive and dynamic user interface.
- **Real-Time Chat**: Integrated WebSocket support for seamless real-time communication.
- **AI Functionality**: Advanced AI features for personalized recommendations and insights.
- **Cross-Platform**: Designed to run smoothly on Linux, Windows, and macOS.

## Project Structure

```
rusthub/
├── backend/
│   ├── Cargo.lock
│   ├── Cargo.toml
│   ├── src/
│   │   └── main.rs
│   └── target/
└── frontend/
    ├── Cargo.lock
    ├── Cargo.toml
    ├── dist/
    ├── index.html
    ├── src/
    │   └── lib.rs
    ├── target/
    └── Trunk.toml
svelte/
├── bun.lockb
├── dist/
├── global.d.ts
├── index.html
├── LICENSE
├── node_modules/
├── package.json
├── public/
├── README.md
├── src/
│   ├── app.css
│   ├── App.svelte
│   ├── assets/
│   ├── lib/
│   ├── main.ts
│   ├── store.ts
│   └── vite-env.d.ts
├── svelte.config.js
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Installation

### Prerequisites

- Rust: Install via [rustup](https://rustup.rs/)
- Node.js and npm: Install via your package manager
- wasm-pack: Install via [wasm-pack](https://rustwasm.github.io/wasm-pack/installer/)

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/senary/racing-sim-hub.git
   cd racing-sim-hub/rusthub/backend
   ```

2. Build and run the backend:
   ```bash
   cargo build
   cargo run
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```

2. Install dependencies and build the project:
   ```bash
   npm install
   wasm-pack build --target web
   ```

3. Serve the frontend:
   ```bash
   npm install -g http-server
   http-server ./ -c-1
   ```

### Svelte Project Setup

1. Navigate to the Svelte directory:
   ```bash
   cd ../../svelte
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Build and serve the Svelte project:
   ```bash
   npm run build
   npm run dev
   ```

## Usage

1. Run the backend server:
   ```bash
   cd rusthub/backend
   cargo run
   ```

2. Serve the frontend:
   ```bash
   cd ../frontend
   http-server ./ -c-1
   ```

3. Access the application at `http://127.0.0.1:8080/` and start exploring the Senary Racing Sim Hub Center!

## Contributing

We welcome contributions from the community! Please fork this repository and submit pull requests to help improve the project.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

---

Feel free to reach out to us with any questions or feedback. Enjoy your racing experience with Senary!

---

This README should provide a clear and engaging overview of your project, making it easy for others to understand and contribute to your work. Let me know if you need any further adjustments or additions!
