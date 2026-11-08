import styles from "./Header.module.css";

const Header = ({ activeTab, setActiveTab }) => {
  return (
    <header className={styles["header"]}>
      <h1>Tabs Components With React</h1>
      <div className={styles["tabs"]}>
        <button
          onClick={() => setActiveTab(1)}
          className={activeTab === 1 ? styles["active"] : null}
        >
          Tab 1
        </button>
        <button
          onClick={() => setActiveTab(2)}
          className={activeTab === 2 ? styles["active"] : null}
        >
          Tab 2
        </button>
        <button
          onClick={() => setActiveTab(3)}
          className={activeTab === 3 ? styles["active"] : null}
        >
          Tab 3
        </button>
        <button
          onClick={() => setActiveTab(4)}
          className={activeTab === 4 ? styles["active"] : null}
        >
          Tab 4
        </button>
      </div>
    </header>
  );
};

export default Header;
