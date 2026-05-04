"use client";

import type { Product } from "@/types/columbus";
import { calculateDiscountedPrice, formatPrice } from "@/utils/price";
import styles from "./ProductCard.module.css";
import { useState } from "react";

type ProductCardProps = {
  product: Product;
  onAddToCart: (product: Product) => Promise<void>;
  isAdding: boolean;
};

/*==================================================================*/

export default function ProductCard({
  product,
  onAddToCart,
  isAdding,
}: ProductCardProps) {

  // Calculate the discounted price if a promotion is available
  const discountedPrice = product.promotion
    ? calculateDiscountedPrice(product.price, product.promotion.percentage)
    : null;

    const [hasImageError, setHasImageError] = useState(false);
  const imageUrl = product.image.url || product.image.url;

  //Return the product card with all details
  return (

    // Handle image loading errors by showing a fallback
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        {imageUrl && !hasImageError ? (
          <img
            className={styles.image}
            src={imageUrl}
            alt={product.image.altText}
            onError={() => setHasImageError(true)}
          />
        ) : (
          <div className={styles.imageFallback}>
            <span>{product.image.altText}</span>
          </div>
        )}
      </div>

      <div className={styles.content}>
        <p className={styles.brand}>{product.brandName}</p>
        <h2 className={styles.title}>{product.title}</h2>
        <p className={styles.description}>{product.description}</p>

        {product.promotion && (
          <div className={styles.promotion}>
            <span>{product.promotion.name}</span>
            <span>-{product.promotion.percentage}%</span>
          </div>
        )}

        <div className={styles.footer}>
          <div className={styles.priceBlock}>
            {discountedPrice !== null ? (
              <>
              <p className={styles.oldPrice}>{formatPrice(product.price)}</p>
              <p className={styles.discountPrice}>
              {formatPrice(discountedPrice)}
              </p>
              </>
            ) : (
              <p className={styles.price}>{formatPrice(product.price)}</p>
            )}

          </div>
          <button
            className={styles.button}
            type="button"
            disabled={isAdding}
            onClick={() => {  onAddToCart(product);}}
            aria-label={`Add ${product.title} to cart`}
          >
            {isAdding ? "Adding..." : "Add to cart"}
          </button>
      </div>
      </div>
    </article>
  );
}