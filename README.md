# 🔮 Tarot Reading

A lightweight, interactive web application designed to draw and display tarot cards. Built with straightforward front-end technologies for a fast, intuitive card-picking experience.

---

## ✨ Features

- **Random Card Selection:** Pick single or multiple cards from the deck with randomized shuffling.
- **Card Details & Meanings:** View upright and reversed meanings, card artwork, and interpretations.
- **Ask the Arcana (AI Guidance):** Get contextual, multi-card synthesized readings via generative AI directly connected to your active spread.
- **Multi-Provider BYOK (Bring Your Own Key):** Connect directly to your choice of AI model (Google Gemini, Groq, OpenRouter, or OpenAI) with zero subscription middleman.
- **100% Client-Side Privacy:** Your API keys and personal reading questions remain strictly in your browser's local storage—no backend servers or telemetry.
- **Non-Intrusive Arcana Drawer:** Consult readings via an atmospheric floating slide-over drawer without disrupting the main card table.
- **Zero Heavy Dependencies:** Fast loading, responsive layout, and zero build steps.

---

## 🌟 What's New: "Ask the Arcana" AI Interpretation

The **Arcana Guidance** assistant transforms individual card meanings into a cohesive story:

* **Narrative Synthesis:** Connects past, present, and future cards into an overarching journey rather than isolated dictionary definitions.
* **Custom Focus Inquiries:** Ask a specific life question or pick from quick-suggestion prompt chips (Career, Blind Spots, Relationships).
* **Multi-Provider Support:**
  * **Google Gemini:** `gemini-3.6-flash` *(Recommended for instant, free usage)*
  * **Groq:** `llama-3.3-70b-versatile` *(Ultra-fast inference)*
  * **OpenRouter:** `google/gemini-3.6-flash` or open-source community models
  * **OpenAI:** `gpt-4o-mini`

### 🔑 Quick Setup Guide

1. **Draw Cards:** Deal your desired spread on the main board.
2. **Open the Drawer:** Click the floating **✨ Consult the Arcana** button in the lower-right corner.
3. **Configure Your Key:**
   * Open the **Settings (⚙)** tab inside the drawer.
   * Select your AI provider (Google Gemini provides free access via Google AI Studio).
   * Follow the link provided in the drawer to retrieve your API key.
   * Paste your key and click **Save & Connect**.
4. **Reveal Insights:** Enter an optional question and hit **✦ Reveal Arcana's Guidance**.

---

## 🛠️ Built With

- **HTML5** – Markup and semantic structure.
- **CSS3** – Layout styling, card flip animations, and responsiveness.
- **JavaScript (Vanilla / ES6+)** – Shuffle algorithms, state management, and DOM manipulation.
- **Web Storage API (`localStorage`)** – Safe, device-only persistence for user keys and preferences.
- **Antigravity** – Yep, this project is mostly build with help of Antigravity.

---

## 🚀 Getting Started

### Prerequisites

No special package manager is required to run the project. You only need a modern web browser (Chrome, Firefox, Safari, Edge).

### Installation & Local Run

1. **Clone the repository:**
   ```bash
   git clone https://github.com/faputraa/tarot-app.git
   ```

2. **Navigate into the project directory:**
   ```bash
   cd tarot-app
   ```


3. **Open the app:**
   * Double-click `tarot.html` to open directly in any browser.
   * Or start a quick local server:
   ```bash
   # Python 3
   python3 -m http.server 8000
   ```


Then visit `http://localhost:8000`.

---

## 📝 Changelog

### [2026-09-05]

* **Added:** "Ask the Arcana" AI interpretation feature powered by client-side LLM integrations.
* **Added:** Bring-Your-Own-Key (BYOK) architecture supporting Google Gemini (`gemini-3.6-flash`), Groq, OpenRouter, and OpenAI.
* **Added:** Slide-over Arcana drawer with floating action button (FAB) for reading guidance without page reload.
* **Added:** In-drawer API key management, guide links, and custom focus question inputs.
* **Security:** Pure client-side request dispatching using browser `localStorage` with zero remote logging.

