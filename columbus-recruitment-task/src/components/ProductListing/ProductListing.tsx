import ProductList from "../ProductList/ProductList";
import Header from "../Header/Header";
import styles from "./ProductListing.module.css";

export default function ProductListing() {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <ProductList />
            </main>
        </>
    );
}