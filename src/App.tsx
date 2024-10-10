import styles from "./app.module.css";
import Session from "./components/session/Session";
// import Table from "./components/table/Table";
import { WINTER } from "./data/data";

const App = () => (
  <>
    <div className={styles.title}>Training Diary</div>
    <div className={styles.mainColumn}>
      {WINTER.filter((session) => session.type === "track").map((session) => (
        <Session session={session} />
      ))}
    </div>
  </>
);

export default App;
