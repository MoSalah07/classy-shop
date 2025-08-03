# 🛍️ Classy-Shop

**Classy-Shop** is a modern e-commerce application built with [Next.js 15](https://nextjs.org/) and supports full internationalization using [next-intl](https://next-intl-docs.vercel.app/). The site is responsive, multilingual (Arabic & English), and includes a custom-built dashboard with recursive nested menus.

---

## 🔥 Features

- ✅ Fully responsive layout (Mobile, Tablet, Desktop)
- 🌐 Multi-language support (Arabic 🇸🇦 and English 🇺🇸)
- ⚙️ Dashboard with nested, recursive menus
- 🧭 Dynamic header with language switcher
- 🧩 Built using Tailwind CSS & Material UI
- 🚀 Fast, optimized, and ready for production
- 📦 Structured for scalability and future integration

---

## 📸 Preview

> You can add screenshots or a live demo link here in the future.

---

## 🧱 Tech Stack

| Tech              | Description                             |
| ----------------- | --------------------------------------- |
| Next.js 15        | React framework with SSR & App Router   |
| next-intl         | Internationalization and locale routing |
| Tailwind CSS      | Utility-first CSS for custom styling    |
| Material UI (MUI) | UI components and icons                 |
| TypeScript        | Type-safe development                   |

---

## 📁 Project Structure

```bash
.
├── app/
│   └── [locale]/          # Internationalized routes
│       ├── layout.tsx
│       ├── page.tsx
│       └── ...
├── components/            # Shared components
│   └── header/
│       ├── NavBar.tsx
│       └── LangSwitcher.tsx
├── dashboard/             # Admin dashboard
│   └── admin/
├── messages/              # Locale translation files
│   ├── en.json
│   └── ar.json
├── public/                # Static assets
├── styles/                # Global styling if needed
├── constants/             # App constants (currency, links, etc.)
├── store/                 # Zustand or other state management
├── middleware.ts          # Locale detection middleware
└── README.md
```
