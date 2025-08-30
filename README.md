# 🛒 Shoping site

## 📙 Description

Flikart is a project developed for online shopping inspired from ShopEase. It incorporates various technologies and libraries to achieve Html5, css3, React, typescript, redux, tailwindcss

## 🛠️ Installation

Before getting started, ensure you have Node.js and npm installed on your machine.

```bash
# Clone the repository
https://github.com/muhammadshakkeerp/Shopease.git

# Navigate to the project directory
cd ShopEase_clone

# Install dependencies
npm install
```

## Usage

To run the development server:

```bash
npm run dev
```

To build the project:

```bash
npm run build
```

To run tests:

```bash
npm test
```

## 🔑 Key Features

  - Add-to-Cart
  - Dark Mode
  - Header + Dropdown menu
  - Image slider
  - Product Details
  - Login Section
  - Order & Wishlist section


## 👨‍💻  Technologies Used

- **Frontend:**
  - React
  - Redux Toolkit
  - Tailwind CSS
  - Apollo Client
  - React Router Dom
  - GraphQL
  - Jest

- **Dev Dependencies:**
  - TypeScript
  - ESLint
  - Vite

## 📁  Folder Structure

```plaintext
flikart/
│
├── src/
│   ├── components/
│   ├── pages/
│   ├── utils/
│   └── App.tsx
│
├── public/
│   ├── index.html
│   └── ...
│
├── package.json
├── tsconfig.json
└── ...
```

## Optimized File
``` 
import { lazy } from "react";

const Home = lazy(() => import("../pages/Home"));
const Account = lazy(() => import("../pages/Account"));
const Cart = lazy(() => import("../pages/Cart"));
const ProductsGroup = lazy(() => import("../pages/ProductsGroup"));
const NestedHoverNavlink = lazy(
  () => import("../components/NestedHoverNavlink")
);
const ProductGallery = lazy(() => import("../pages/ProductGallery"));
const ProductDatails = lazy(() => import("../components/ProductDetails"));
const Checkout = lazy(() => import("../components/Checkout"));
const PaymentSuccessful = lazy(() => import("../components/PaymentSuccesfull"));
const ChatBot = lazy(() => import("../components/chatbot/ChatBot"));

export {
  Home,
  Account,
  Cart,
  ProductsGroup,
  NestedHoverNavlink,
  ProductGallery,
  ProductDatails,
  Checkout,
  PaymentSuccessful,
  ChatBot,
};

// Account section optimization
const AccountDetails = lazy(() => import("../components/AccountDetails"));
const Login = lazy(() => import("../firebase/Login"));

const Profile = lazy(() => import("../components/Profile"));
const Wishlist = lazy(() => import("../components/WishList"));
const Orders = lazy(() => import("../components/Orders"));
const Rewards = lazy(() => import("../components/Rewards"));

export { AccountDetails, Login, Profile, Wishlist, Orders, Rewards };
```

