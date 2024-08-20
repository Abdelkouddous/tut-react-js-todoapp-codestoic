import styles from "./Header.module.css";
import logo from "../logo.svg";
export default function Header() {
  return (
    <div className={styles.header}>
      <img src={logo} className="App-logo" alt="logo" />
      Todo App
    </div>
  );
}
