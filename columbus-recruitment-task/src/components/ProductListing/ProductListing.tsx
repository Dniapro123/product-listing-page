'use client';

import { useState } from "react";
import Header from "@/components/Header/Header";
import ProductList from "@/components/ProductList/ProductList";
import type { ColumbusRecruitmentData, Product } from "@/types/columbus";

type ProductListingProps = {
  data: ColumbusRecruitmentData;
};

export default function ProductListing({ data }: ProductListingProps) {
  const [cartCount, setCartCount] = useState(0);
  const [addingProductId, setAddingProductId] = useState<string | null>(null);

  async function handleAddToCart(product: Product) {
    setAddingProductId(product.articleNumber);

    await new Promise((resolve) => setTimeout(resolve, 500));

    setCartCount((currentCount) => currentCount + 1);
    setAddingProductId(null);
  }

  if (!data.products.length) {
    return (
      <>
        <Header cartCount={cartCount} />
        <main>
          <p>No products available.</p>
        </main>
      </>
    );
  }

  return (
    <>
      <Header cartCount={cartCount} />

      <main>
        <ProductList
        products={data.products}
        onAddToCart={handleAddToCart}
        addingProductId={addingProductId}
        />
      </main>
    </>
  );
}