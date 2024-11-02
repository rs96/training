import { SessionType } from "../../types";
import styles from "./pill.module.css";

const colours: Record<SessionType, string> = {
  [SessionType.Grass]: "#3f9b0b",
  [SessionType.Track]: "#dd1111",
  [SessionType.Bike]: "",
  [SessionType.Gym]: "",
  [SessionType.LongRun]: "2200ee",
  [SessionType.Hill]: "#ffff33",
};

const Pill = ({ text, session }: { text: string; session: SessionType }) => (
  <div className={styles.pill} style={{ backgroundColor: colours[session] }}>
    {text}
  </div>
);

export default Pill;
