import { getWorkSpaceStorage } from "../../../utils/storage";
import WorkspaceItem from "./WorkspaceItem";
import styles from "./workspace.module.scss";

const WorkspaceList = () => {
  const data = getWorkSpaceStorage();

  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>Your workspaces</div>
      <div className={styles.list}>
        {data.map((item) => (
          <WorkspaceItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default WorkspaceList;
