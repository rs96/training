import { useState } from "react";
import { formatTime, shortDate } from "../../formatters";
import {
  Set,
  TrackSession as TrackSessionType,
  HillSession,
} from "../../types";
import styles from "./session.module.css";
import Pill from "../pill/Pill";

const TrackSession = ({
  session,
}: {
  session: TrackSessionType | HillSession;
}) => {
  const [isShowComments, setIsShowComments] = useState(false);
  return (
    <div className={styles.session}>
      <div className={styles.ribbon}>
        <Pill text={session.type} session={session.type} />
        <div className={styles.date}>{shortDate(session.date)}</div>
      </div>
      {session.sets.map((s: Set, i) => (
        <div key={i} className={styles.set}>
          <div className={styles.row}>
            {session.sets.length > 1 && (
              <div className={styles.setName}>{`Set ${i + 1}`}</div>
            )}
          </div>
          <div className={styles.row}>
            <div className={styles.column}>
              <div className={styles.row}>{`Distance${
                s.distances.length > 1 ? "s" : ""
              } ${s.distances}`}</div>
              <div className={styles.row}>{`Repetitions ${s.repetitions}`}</div>
              <div className={styles.row}>{`Recovery ${s.recovery}s`}</div>
            </div>
            <div className={styles.column}>
              <div>{`Time${s.times.length ? "s" : ""}: ${s.times.map(
                (t) => ` ${formatTime(t)}`
              )}`}</div>
              <div>{`Average: ${formatTime(
                s.times.reduce((a, c) => a + c, 0) / s.times.length
              )}`}</div>
            </div>
          </div>
          {session.recoveries.length > 0 && i < session.recoveries.length && (
            <div className={styles.column}>
              <div className={styles.setName}>{`Rest ${i + 1}`}</div>
              {`${session.recoveries[i]}s`}
            </div>
          )}
        </div>
      ))}
      <div className={styles.div}>
        <button onClick={() => setIsShowComments(!isShowComments)}>
          Comments
        </button>
      </div>
      {isShowComments && (
        <div className={styles.comments}>
          <div className={styles.commentPart}>
            <div>Athlete</div>
            <div className={styles.commentContent}>
              {session.comments.athlete}
            </div>
          </div>
          <div className={styles.commentPart}>
            <div>Coach</div>
            <div className={styles.commentContent}>
              {session.comments.coach}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrackSession;
