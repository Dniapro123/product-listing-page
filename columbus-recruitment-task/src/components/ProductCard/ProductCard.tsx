import type { Product } from "@/types/columbus";
import { calculateDiscountedPrice, formatPrice } from "@/utils/price";
import styles from "./ProductCard.module.css";

type ProductCardProps = {
  product: Product;
  onAddToCart: (product: Product) => Promise<void>;
  isAdding: boolean;
};

export default function ProductCard({
  product,
  onAddToCart,
  isAdding,
}: ProductCardProps) {
  const discountedPrice = product.promotion
    ? calculateDiscountedPrice(product.price, product.promotion.percentage)
    : null;

  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          className={styles.image}
          src={product.image.url}
          alt={product.image.altText}
        />
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
            onClick={() => onAddToCart(product)}
            aria-label={`Add ${product.title} to cart`}
          >
            {isAdding ? "Adding..." : "Add to cart"}
          </button>
      </div>
      </div>
    </article>
  );
}