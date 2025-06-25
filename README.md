# IP Lookup

A lightweight React & TypeScript single‐page app to look up IP‐to‐country/timezone information, with built-in IndexedDB caching, internationalization, and a native `<dialog>` modal UI.

## Features

- 🔍 Lookup an IP address for country & local time
- ⚡ Fast development & build via Vite
- 🌐 i18n support via react-i18next (English & Hebrew examples)
- 🎨 Modal implemented with native `<dialog>` and backdrop blur
- 🧪 Jest + MSW test examples, ESLint + Prettier, Husky & GitHub Actions CI

## Table of Contents

1. [Tech Stack](#tech-stack)
2. [Prerequisites](#prerequisites)
3. [Getting Started](#getting-started)
4. [Available Scripts](#available-scripts)
5. [Project Structure](#project-structure)
7. [Internationalization (i18n)](#internationalization-i18n)
8. [Modal & Accessibility](#modal--accessibility)
9. [Testing](#testing)
10. [CI / CD](#ci--cd)
11. [Contributing](#contributing)
12. [License](#license)

---

## Tech Stack

- **Framework & Bundler:** React 18, Vite
- **Language:** TypeScript (with `strict` mode)
- **Caching:** IndexedDB via `idb` (with TTL & max‐entries eviction)
- **i18n:** react-i18next + i18next-http-backend + suspense
- **Styling:** CSS / SCSS modules
- **Testing:** Jest, React Testing Library, MSW
- **CI:** GitHub Actions

---

## Prerequisites

- Node.js ≥ 16
- npm or Yarn
- (Optional) A modern browser with `<dialog>` support, or polyfill

---

## Getting Started

```bash
git clone https://github.com/oreninho/ip_lookup.git
cd ip_lookup

# install dependencies
npm install
# or
yarn

# start dev server
npm run dev
# or
yarn dev
