"use client";

import { useState } from "react";
import Header from "@/components/Header/Header";
import ProductList from "@/components/ProductList/ProductList";
import type { ColumbusRecruitmentData, Product } from "@/types/columbus";
import styles from "./ProductListing.module.css";

type ProductListingProps = {
  data: ColumbusRecruitmentData;
};

// Define a type for the theme
type Theme = "light" | "dark";


/*==================================================================*/

export default function ProductListing({ data }: ProductListingProps) {
   //UI states
  const [cartCount, setCartCount] = useState(0);
  const [addingProductId, setAddingProductId] = useState<string | null>(null);
  const [theme, setTheme] = useState<Theme>("light");

  // //Sorting and filtering states
  const [sortOrder, setSortOrder] = useState<"default" | "price-asc" | "price-desc">("default");
  const [discountFilter, setDiscountFilter] = useState<"all" | "discounted">("all");
  const [columns, setColumns] = useState<2 | 3 | 4>(3);

//Function to handle adding product to cart with simulated delay
  async function handleAddToCart(product: Product) {
    setAddingProductId(product.articleNumber);

    await new Promise((resolve) => setTimeout(resolve, 500));

    setCartCount((currentCount) => currentCount + 1);
    setAddingProductId(null);
  }


//Function to toggle between light and dark themes
  function toggleTheme() {
      setTheme((currentTheme) =>
        currentTheme === "light" ? "dark" : "light"
      );
    }

// Compute the list of products to display based on sorting and filtering     
const visibleProducts = data.products
  .filter((product) => {
    if (discountFilter === "discounted") {
      return Boolean(product.promotion);
    }

    return true;
  })
  .toSorted((a, b) => {
    if (sortOrder === "price-asc") {
      return a.price - b.price;
    }

    if (sortOrder === "price-desc") {
      return b.price - a.price;
    }

    return 0;
  });

// Handle case when there are no products available
  if (!data.products.length) {
    return (
      <div className={styles.page} data-theme={theme}>
        <Header cartCount={cartCount} theme={theme} onToggleTheme={toggleTheme} />
        <main className={styles.main}>
          <p>No products available.</p>
        </main>
      </div>
    );
  }

// Main render of the product listing page
  return (
    <div className={styles.page} data-theme={theme}>
      <Header cartCount={cartCount} theme={theme} onToggleTheme={toggleTheme} />

      <main className={styles.main}>
        <ProductList
        products={visibleProducts}
        onAddToCart={handleAddToCart}
        addingProductId={addingProductId}
        sortOrder={sortOrder}
        onSortOrderChange={setSortOrder}
        discountFilter={discountFilter}
        onDiscountFilterChange={setDiscountFilter}
        columns={columns}
        onColumnsChange={setColumns}
        />
      </main>
    </div>
  );
}