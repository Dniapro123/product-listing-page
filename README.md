# Product Listing Page – Columbus Recruitment Task

## Overview

This project is a product listing page built with **Next.js (App Router)** and **TypeScript**.
It displays products fetched from an external API and allows users to add items to a cart.

The application focuses on clean UI, accessibility, and proper state handling.



---

## Tech Stack

* Next.js 16 (App Router)
* React
* TypeScript
* CSS Modules
* Fetch API

---

## Features
There are implemented Responsive Web Design, Dark/Light theme, filtring/sorting elements.

### Product Listing

* Displays product image, title, brand, description, and price
* Handles promotions (discounted price + percentage)
* Responsive grid layout (mobile / tablet / desktop)

### Cart

* Add to cart functionality
* Cart badge updates dynamically
* Simulated API request (loading state)
* Disabled button during request

### UI/UX

* Dark / Light mode toggle
* Accessible components (`aria-label`, semantic HTML)
* Smooth interactions

### Error Handling

* Empty state when no products available
* Fallback for broken/missing images
* Loading states for async actions

---

## Installation

```bash
npm install
npm run dev
```

Open:

```
http://localhost:3000
```

---

## API

Data is fetched from the provided API using an `x-api-key` header.

---

## Project Structure

```
src/
  app/
    page.tsx
    layout.tsx
  components/
    Header/
    ProductList/
    ProductCard/
    ProductListing/
  services/
    products.ts
  types/
    columbus.ts
  utils/
    price.ts
```

---

## Accessibility

* Semantic HTML (`header`, `main`, `section`, `article`)
* Proper `alt` attributes for images
* `aria-label` for interactive elements

---

## Notes

* No UI libraries were used (only CSS Modules)
* The CSS design for Columbus-styled logo in the header element was created using Gemini tool.



---

## Author
Uladzisla Budziankou 
for
Frontend Recruitment Task – Columbus
