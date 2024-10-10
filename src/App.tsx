import styles from "./app.module.css";
import Table from "./components/table/Table";

const App = () => (
  <>
    <div className={styles.title}>Training Diary</div>
    <div className={styles.mainColumn}>
      <Table
        headers={["This", "Is", "A", "Test"]}
        rows={[
          [0, 1, 2, 3],
          [9, 8, 7, 6],
        ]}
      />
    </div>
    <div className="card">
      <button onClick={() => {}}>count is lol broke</button>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
    </div>
  </>
);

export default App;
