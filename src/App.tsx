import styles from "./app.module.css";
import TrackSession from "./components/session/TrackSession";
// import Table from "./components/table/Table";
import { WINTER } from "./data/data";
import { SessionType } from "./types";

const App = () => (
  <>
    <div className={styles.title}>Training Diary</div>
    <div className={styles.mainColumn}>
      {WINTER.filter(
        (session) =>
          session.type === SessionType.Track ||
          session.type === SessionType.Hill
      )
        .sort((a, b) => b.date - a.date)
        .map((session, i) => (
          <TrackSession key={i} session={session} />
        ))}
    </div>
  </>
);

export default App;
