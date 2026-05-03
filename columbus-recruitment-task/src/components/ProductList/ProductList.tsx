
import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductList.module.css";
import type { Product } from "@/types/columbus";

type ProductListProps = {
    products: Product[];
    onAddToCart: (product: Product) => Promise<void>;
    addingProductId: string | null;
};
// const mockProducts = [1, 2, 3, 4, 5, 6];

export default function ProductList({ products, onAddToCart, addingProductId }: ProductListProps) {
    return (
        <section className={styles.section} aria-labelledby="products-heading">
           <div className={styles.heading} >
           <p className={styles.eyebrow}>Product catalog</p>           
            <h1 id="products-heading">Discover our products</h1>
            
            <div className={styles.grid}>
                {products.map((product) => (
                    <ProductCard 
                        key={product.articleNumber} 
                        product={product} 
                        onAddToCart={onAddToCart} 
                        isAdding={addingProductId === product.articleNumber}
                    />
                ))}
            </div>
            </div>
        </section>
    );
}