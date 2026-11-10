import styles from "./Footer.module.css"

function Footer() {
    return (
        <footer className={styles.footer}>
            <p className={styles.copyrighht}>
                &copy; Copyright {new Date().getFullYear()} WorldWide Inc.
            </p>
        </footer>
    )
}

export default Footer;
