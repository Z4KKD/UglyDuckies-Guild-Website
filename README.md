# 🦆 Ugly Duckies Guild Website

Welcome to the **Ugly Duckies** — a *chaotic, sarcastic, and slightly competent* World of Warcraft guild website built with **React**.  
This project showcases the guild’s identity, recruitment details, and a fun animated atmosphere full of **clouds and flying ducks**.

---

## 🌟 Features

- 🎨 **Animated Cloud Background** – Subtle and immersive, created dynamically with pure JS and CSS.
- 🦆 **Flying Ducks Animation** – Because why not? Adds personality and motion to the site.
- 💬 **Guild Info Cards** – Displays guild details, raid schedules, offerings, and recruiter contacts.
- 🧭 **Sticky Header Navigation** – Smooth-scrolling links for quick access to each section.
- 🧍 **Recruiter Section** – Lists key contacts with Discord and Battle.net info.
- 💛 **Themed Design** – Gold-accented fantasy aesthetic with consistent typography and custom colors.
- ❤️ **Responsive Layout** – Fully mobile-friendly for all your raid recruitment needs.

---

## 🧩 Project Structure

```
src/
├── components/
│   ├── AnimatedBackground.jsx       # Floating clouds background animation
│   ├── FlyingDucksBackground.jsx    # 🦆 Duck animation system
│   ├── GuildCard.jsx                # Displays guild info & offerings
│   ├── Header.jsx                   # Top navigation bar
│   └── Footer.jsx                   # Footer with external links
│
├── data/
│   └── guilds.js                    # Guild data and recruiter info
│
├── styles/
│   ├── Header.css
│   ├── Footer.css
│   └── guildcard.css
│
├── App.jsx                          # Main app structure
├── index.css                        # Global styling and theme
└── index.js                         # React entry point
```

---

## 🛠️ Technologies Used

| Category | Tech |
|-----------|------|
| Framework | [React](https://reactjs.org/) |
| Styling | CSS3 (custom modules + root variables) |
| Icons | [Font Awesome](https://fontawesome.com/icons) |
| Animations | Vanilla JS + CSS keyframes |
| Data | Static guild info file (`guilds.js`) |

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/yourusername/ugly-duckies-website.git
cd ugly-duckies-website
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Run the Development Server
```bash
npm start
```
Then visit 👉 `http://localhost:3000`

### 4️⃣ Build for Production
```bash
npm run build
```

---

## 🧙‍♂️ Environment Setup

No special environment variables are needed — this project is **entirely client-side**.

Make sure your project structure includes:
- `/public/logo.png` (guild logo)
- `/public/screenshot.png` (optional showcase image)

---

## 🎨 Customization

You can tweak colors, animations, and content easily:
- **Colors & Fonts:** Edit root variables in `index.css`
- **Guild Info:** Update `src/data/guilds.js`
- **Animations:** Modify parameters in `AnimatedBackground.jsx` and `FlyingDucksBackground.jsx`

---

## 🌍 Links

| Resource | URL |
|-----------|-----|
| 🪶 Warcraft Logs | [View Guild Logs](https://www.warcraftlogs.com/guild/us/thrall/ugly%20duckies) |
| 🏆 Raider.io | [View Profile](https://raider.io/guilds/us/thrall/Ugly%20Duckies) |
| ⚔️ WoW Armory | [Guild Page](https://worldofwarcraft.blizzard.com/en-us/guild/us/thrall/ugly-duckies) |

---

## 👑 About the Guild

> “We’re a mid-core CE-aspiring guild full of questionably sane, occasionally competent, and always entertaining players.”

Ugly Duckies offers:
- 🦆 A stable raid core held together by duct tape and emotional damage  
- 💀 Consistent wipes (educational, not emotional)  
- ☕ Key pushers who cope through humor and caffeine  
- 📈 Spreadsheets we don’t actually update  

And yes… we have *plenty* of duck puns.

---

## 💻 Developer Notes

Created with ❤️ by **Z4KKD**

If you’d like to fork or extend this project:
- Keep animations light for performance
- All UI components are modular and can be imported elsewhere
- Styling is centralized via CSS variables for easy theming

---

## 📜 License

This project is open source and available under the **MIT License**.  
You’re free to modify, remix, and repurpose — just keep the duck spirit alive 🦆

---

### 🦆 Quack responsibly.
> *“One more pull.” – Every raid leader ever*
