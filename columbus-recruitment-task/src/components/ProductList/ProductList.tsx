
import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductList.module.css";

const mockProducts = [1, 2, 3, 4, 5, 6];

export default function ProductList() {
    return (
        <section className={styles.section} aria-labelledby="products-heading">
           <div className={styles.heading} >
           <p className={styles.eyebrow}>Product catalog</p>           
            <h1 id="products-heading">Discover our products</h1>
            <div className={styles.grid}>
                {mockProducts.map((product) => (
                <ProductCard key={product} />
                ))}
            </div>
            </div>
        </section>
    );
}