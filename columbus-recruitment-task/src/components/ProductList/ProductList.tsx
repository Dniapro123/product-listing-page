
import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductList.module.css";
import type { Product } from "@/types/columbus";

type ProductListProps = {
  products: Product[];
  onAddToCart: (product: Product) => Promise<void>;
  addingProductId: string | null;
//   sortOrder: "default" | "price-asc" | "price-desc";
//   onSortOrderChange: (value: "default" | "price-asc" | "price-desc") => void;
//   discountFilter: "all" | "discounted";
//   onDiscountFilterChange: (value: "all" | "discounted") => void;
//   columns: 2 | 3 | 4;
//   onColumnsChange: (value: 2 | 3 | 4) => void;
};
// const mockProducts = [1, 2, 3, 4, 5, 6];

export default function ProductList({
  products,
  onAddToCart,
  addingProductId,
//   sortOrder,
//   onSortOrderChange,
//   discountFilter,
//   onDiscountFilterChange,
//   columns,
//   onColumnsChange,
}: ProductListProps) {
  return (
    <section className={styles.section} aria-labelledby="products-heading">
      <div className={styles.hero}>
        <p className={styles.eyebrow}>Product catalog</p>
        <h1 id="products-heading">Discover our products</h1>
        <p className={styles.subtitle}>
          Curated performance essentials with clean design, clear pricing and smooth shopping flow.
        </p>
      </div>

      {/* <div className={styles.toolbar} aria-label="Product controls">
        <label>
          Sort
          <select
            value={sortOrder}
            onChange={(event) =>
              onSortOrderChange(event.target.value as "default" | "price-asc" | "price-desc")
            }
          >
            <option value="default">Default</option>
            <option value="price-asc">Price: low to high</option>
            <option value="price-desc">Price: high to low</option>
          </select>
        </label>

        <label>
          Products
          <select
            value={discountFilter}
            onChange={(event) =>
              onDiscountFilterChange(event.target.value as "all" | "discounted")
            }
          >
            <option value="all">All</option>
            <option value="discounted">Discounted only</option>
          </select>
        </label>

        <label>
          Columns
          <select
            value={columns}
            onChange={(event) => onColumnsChange(Number(event.target.value) as 2 | 3 | 4)}
          >
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
          </select>
        </label>
      </div> */}
      

      {products.length ? (
        // <div
        //   className={styles.grid}
        //   style={{ "--columns": columns } as React.CSSProperties}
        // >
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
      ) : (
        <p className={styles.empty}>No products match selected filters.</p>
      )}
    </section>
  );
}