import { useState } from "react";
import { shortDate } from "../../formatters";
import { Session as SessionType, Set } from "../../types";
import styles from "./session.module.css";

const Session = ({ session }: { session: SessionType }) => {
  const [isShowComments, setIsShowComments] = useState(false);
  return (
    <div className={styles.session}>
      <div className={styles.date}>{shortDate(session.date)}</div>
      {/* @ts-ignore */}
      {session.sets.map((s: Set, i) => (
        <div className={styles.set}>
          <div className={styles.row}>
            {/* @ts-ignore */}
            {session.sets.length > 1 && <div>{`Set ${i + 1}`}</div>}
          </div>
          <div className={styles.row}>
            <div>{`Distance${s.distances.length > 1 ? "s" : ""} ${
              s.distances
            }`}</div>
            <div>{`Repetitions ${s.repetitions}`}</div>
            <div>{`Recovery ${s.recovery}`}</div>
          </div>
          <div>{`Time${s.times.length ? "s" : ""}: ${s.times.map(
            (t) => ` ${t}`
          )}`}</div>
          <div>{`Average: ${(
            s.times.reduce((a, c) => a + c, 0) / s.times.length
          ).toFixed(1)}`}</div>
        </div>
      ))}
      <div onClick={() => setIsShowComments(!isShowComments)}>Comments</div>
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

export default Session;
