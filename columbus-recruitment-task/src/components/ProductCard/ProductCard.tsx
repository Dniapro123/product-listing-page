import styles from "./ProductCard.module.css";

export default function ProductCard() {
  return (
    <article className={styles.card}>
      <div className={styles.imagePlaceholder}>Image</div>

      <div className={styles.content}>
        <p className={styles.brand}>Brand name</p>
        <h2 className={styles.title}>Product title</h2>
        <p className={styles.description}>Short product description</p>

        <div className={styles.footer}>
          <p className={styles.price}>€99.99</p>
          <button className={styles.button} type="button">
            Add to cart
          </button>
        </div>
      </div>
    </article>
  );
}