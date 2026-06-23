# 🛒 Voltic

A modern e-commerce storefront built with React — browse a tech product catalog, manage a shopping cart, and sign in, all with a clean, responsive UI.

> **Live demo:** _add your deployed URL here_
> **Status:** Learning / portfolio project

<!-- Add a screenshot or GIF here once deployed:
![Voltic screenshot](./screenshot.png)
-->

## ✨ Features

- **Product catalog** — responsive grid of products with images, prices, and details
- **Product detail pages** — individual route per product (`/products/:id`)
- **Live search** — filter products by name as you type
- **Shopping cart**
  - Add to cart from the catalog or detail page
  - Update quantities and remove items on the checkout page
  - Live cart count badge in the navbar
  - Running order total
  - Cart **persists across page refreshes** (saved to `localStorage`)
- **Authentication** — sign up, log in, and log out with form validation
- **Responsive design** — works on mobile and desktop

## 🛠️ Tech Stack

- **React 19** — UI library (functional components + hooks)
- **Vite** — build tool and dev server
- **React Router v7** — client-side routing
- **React Hook Form** — form handling and validation
- **Context API** — global state for cart and authentication
- **CSS** — custom styling with CSS variables (no UI framework)

## 🏗️ Architecture

State is shared through two React Context providers (see `src/context/`):

- **`AuthContext`** — holds the current user and handles sign up / login / logout. User accounts and the active session are stored in `localStorage`.
- **`CartContext`** — holds the cart items and exposes helpers to add, remove, and update quantities, plus compute the total. The cart syncs to `localStorage` so it survives refreshes.

Product data is a static array in `src/data/products.js`. Pages live in `src/pages/` and reusable UI in `src/components/`.

## 🚀 Getting Started

**Prerequisites:** [Node.js](https://nodejs.org/) (v18 or newer)

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/react-ecom.git
cd react-ecom

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Then open the URL shown in the terminal (usually `http://localhost:5173`).

### Available scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the development server (HMR)   |
| `npm run build`   | Build for production                 |
| `npm run preview` | Preview the production build locally |
| `npm run lint`    | Run ESLint                           |

## ⚠️ Note

This is a **front-end learning project** with no backend. Authentication is simulated using `localStorage`, and passwords are **not** encrypted — so please don't use real credentials. The goal of this project was to practice React fundamentals: components, hooks, the Context API, routing, and forms.

## 📚 What I learned

- Managing global state with the Context API instead of prop drilling
- Controlled form inputs and validation with React Hook Form
- Client-side routing and dynamic route parameters
- Persisting state to `localStorage` with `useEffect`
- Deriving values from state (cart totals, item counts, search results)
