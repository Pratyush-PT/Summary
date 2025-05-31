import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles["header"]}>
      <a href="/">
        <h1>Synop</h1>
      </a>
      <a href="">
        <p>GitHub</p>
      </a>
    </header>
  );
};

export default Header;
