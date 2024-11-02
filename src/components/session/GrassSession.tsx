import { useState } from "react";
import { shortDate } from "../../formatters";
import { DurationSet, GrassSession as GrassSessionType } from "../../types";
import styles from "./session.module.css";
import Pill from "../pill/Pill";

const GrassSession = ({ session }: { session: GrassSessionType }) => {
  const [isShowComments, setIsShowComments] = useState(false);
  return (
    <div className={styles.session}>
      <div className={styles.ribbon}>
        <Pill text={session.type} session={session.type} />
        <div className={styles.date}>{shortDate(session.date)}</div>
      </div>
      {session.sets.map((s: DurationSet, i) => (
        <div key={i} className={styles.set}>
          <div className={styles.row}>
            {session.sets.length > 1 && (
              <div className={styles.setName}>{`Set ${i + 1}`}</div>
            )}
          </div>
          <div className={styles.row}>
            <div className={styles.column}>
              <div className={styles.row}>{`Repetitions ${s.repetitions}`}</div>
              <div className={styles.row}>{`Recovery ${s.recovery}s`}</div>
            </div>
          </div>
        </div>
      ))}
      <div className={styles.ribbon}>
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

export default GrassSession;
