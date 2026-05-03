import styles from "./Header.module.css";

export default function Header() {
    return (
        <header className ={styles.header}>
            <div className={styles.logo}>Columbus</div>
            <button className={styles.cartButton} type="button" aria-label="Open cart">
                Koszyk
                <span className={styles.badge}>0</span>
            </button>

        </header>
    );
}