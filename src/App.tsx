import { useState } from "react";
import styles from "./app.module.css";
import GrassSession from "./components/session/GrassSession";
import TrackSession from "./components/session/TrackSession";
// import Table from "./components/table/Table";
import { WINTER } from "./data/data";
import {
  GrassSession as GrassSessionType,
  HillSession,
  Session,
  SessionType,
  TrackSession as TrackSessionType,
} from "./types";
import Chart from "./components/chart/Chart";

const mapSessionToComponent = (session: Session) =>
  ({
    [SessionType.Track]: <TrackSession session={session as TrackSessionType} />,
    [SessionType.Hill]: <TrackSession session={session as HillSession} />,
    [SessionType.Grass]: <GrassSession session={session as GrassSessionType} />,
    [SessionType.Bike]: (
      <TrackSession session={session as TrackSessionType | HillSession} />
    ),
    [SessionType.Gym]: (
      <TrackSession session={session as TrackSessionType | HillSession} />
    ),
    [SessionType.LongRun]: (
      <TrackSession session={session as TrackSessionType | HillSession} />
    ),
  }[session.type]);

const App = () => {
  const [page, setPage] = useState("sessions");
  return (
    <>
      <div className={styles.title}>Training Diary</div>
      <div className={styles.pages}>
        <div className={styles.pageName} onClick={() => setPage("sessions")}>
          Sessions
        </div>
        <div className={styles.pageName} onClick={() => setPage("trends")}>
          Trend Chart
        </div>
      </div>
      <div className={styles.mainColumn}>
        {page === "sessions" &&
          WINTER.filter(
            (session) =>
              session.type === SessionType.Track ||
              session.type === SessionType.Hill ||
              session.type === SessionType.Grass
          )
            .sort((a, b) => b.date - a.date)
            .map((session, i) => (
              <div key={i}>{mapSessionToComponent(session)}</div>
            ))}
        {page === "trends" && <Chart />}
      </div>
    </>
  );
};

export default App;
