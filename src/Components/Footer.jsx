import styles from "./footer.module.css";
import logo from "../logo.svg";
export default function Footer({ completedTodos, totalTodos }) {
  return (
    <div className={styles.footer}>
      <img src={logo} className="App-logo" alt="logo" />
      <span className={styles.spanText}>
        Completed tasks : {completedTodos}/{totalTodos}
      </span>
    </div>
  );
}
