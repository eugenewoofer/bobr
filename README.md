# Bobr 🥤

A modern, responsive web application dedicated to the fascinating world of beavers — built with Vue 3, TypeScript, and Vite.

## ✨ Features

- **Dark‑mode UI** with gradient accents, blur effects, and smooth animations
- **Fully responsive** — mobile‑first sidebar, hamburger menu for small screens
- **Multi‑page navigation** — Home, Bobr, Gallery, Video, Fun Facts, Habitat, Species
- **Vue 3 + TypeScript** — type‑safe, reactive, Composition API
- **Vite** — instant hot‑module replacement, fast builds
- **Clean component architecture** — views, shared components, Vue Router

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/eugenewoofer/bobr.git
   cd bobr
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```
   Then open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview the built app**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
bobr/
├── src/
│   ├── assets/          # Images, icons, fonts
│   ├── components/      # Reusable Vue components (SideBar, etc.)
│   ├── router/         # Vue Router configuration
│   ├── views/          # Page‑level components (HomeView, BobrView, …)
│   ├── App.vue         # Root component
│   ├── main.ts         # Application entry point
│   └── style.css       # Global styles
├── index.html          # HTML template
├── vite.config.ts      # Vite configuration
├── tsconfig.json       # TypeScript configuration
├── package.json        # Dependencies & scripts
└── README.md           # You are here
```

## 🛠️ Available Scripts

- `npm run dev` — start dev server at `localhost:5173`
- `npm run build` — build for production (outputs to `dist/`)
- `npm run preview` — locally preview the production build
- `dev.bat` — Windows batch script that opens the browser and starts the dev server

## 🎨 Design Notes

- **Color palette:** dark background (`#12101C`), gold gradients (`#8B6914` → `#D4A030`)
- **Sidebar:** fixed on desktop, slide‑in on mobile with overlay
- **Cards:** hover effects, smooth transitions
- **Icons:** SVG assets and emoji fallbacks
- **Typography:** system fonts with gradient text for headings

## 🔍 Security & Logs

The project includes request logging (`serve.log`, `srv.log`). If you see suspicious POST requests (e.g., `/device.rsp`), those are likely automated scans — the app itself does not execute external commands.

## 📄 License

MIT — see [LICENSE](LICENSE) (if present) or contact the author.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing`)
5. Open a Pull Request

## 📬 Contact

- **GitHub:** [@eugenewoofer](https://github.com/eugenewoofer)
- **Project:** [https://github.com/eugenewoofer/bobr](https://github.com/eugenewoofer/bobr)

---

*Built with ❤️ for beavers everywhere.*