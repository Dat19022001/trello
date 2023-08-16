import MenuList from "./components/MenuList";
import WorkspaceList from "./components/WorkspaceList";
import styles from "./homepage.module.scss";
const HomePage = () => {
  return (
    <div className={styles.container}>
      <MenuList />
      <div className={styles.main}>
        <WorkspaceList />
      </div>
    </div>
  );
};

export default HomePage;
