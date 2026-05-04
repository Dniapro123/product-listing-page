import styles from "./Header.module.css";

type HeaderProps = {
    cartCount: number;
    theme: "light" | "dark";
    onToggleTheme: () => void;
};

export default function Header({ cartCount, theme, onToggleTheme }: HeaderProps) {
    return (
        <header className ={styles.header} >
            <div className={styles.inner}>
                <div className={styles.logo} aria-label="Columbus">
                    Columbus
                </div>
                <div className={styles.actions}>
                    <button className={styles.themeButton} 
                        type="button" 
                        onClick = {onToggleTheme} 
                        aria-label="Toggle theme">
                            {theme === "light" ? "🌙" : "☀️"}
                        </button>

                        <button className={styles.cartButton} type="button" aria-label="Open cart">
                            <span aria-hidden="true">🛒</span>
                            <span className={styles.badge}>{cartCount}</span>
                        </button>
                    </div>
            </div>
        </header>
    );
}