import styles from "../../app.module.css";

const Table = ({
  headers,
  rows,
}: {
  headers: string[];
  rows: (string | number)[][];
}) => (
  <div className={styles.table}>
    <div className={styles.headers}>
      {headers.map((h) => (
        <div className={styles.cell}>{h}</div>
      ))}
    </div>
    <div className={styles.tableBody}>
      {rows.map((row) => (
        <div className={styles.row}>
          {row.map((item) => (
            <div className={styles.cell}>{item}</div>
          ))}
        </div>
      ))}
    </div>
  </div>
);

export default Table;
