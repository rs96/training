import styles from "./app.module.css";
import GrassSession from "./components/session/GrassSession";
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
          session.type === SessionType.Hill ||
          session.type === SessionType.Grass
      )
        .sort((a, b) => b.date - a.date)
        .map((session, i) => (
          <>
            {(session.type === SessionType.Track ||
              session.type === SessionType.Hill) && (
              <TrackSession key={i} session={session} />
            )}
            {session.type === SessionType.Grass && (
              <GrassSession key={i} session={session} />
            )}
          </>
        ))}
    </div>
  </>
);

export default App;
