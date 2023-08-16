import { Link } from "react-router-dom";
import { submenuItems } from "../constant";
import styles from "./workspace.module.scss";
import { getBoard } from "../../../utils/storage";
import { useMemo } from "react";
import { setOpenCreateBoard } from "../../../redux/slice/appReduce";
import { useDispatch } from "react-redux";

const WorkspaceItem = ({ id, name }) => {
  const firstLetter = name[0];

  const data = getBoard(id);
  const boards = useMemo(() => {
    if (!data) return [];
    return data.board;
  }, [data]);

  const dispatch = useDispatch();
  
  const isOpenCreate = () => {
    dispatch(setOpenCreateBoard(true));
  };
  return (
    <div className={styles.wrapperItem}>
      <div className={styles.item}>
        <div className={styles.itemThumb}>{firstLetter}</div>
        <div className={styles.itemName}>{name}</div>
        <div className={styles.actions}>
          {submenuItems(id).map((item) => (
            <Link key={item.id} to={item.url} className={styles.actionItem}>
              {item.icon}
              <div className={styles.actionName}>{item.name}</div>
            </Link>
          ))}
        </div>
      </div>
      <div className={styles.boardList}>
        {boards.map((board) => (
          <div
            key={board.id}
            className={styles.boardItem}
            style={{ "--background-image": `url('${board.backgroundImage}')` }}
          >
            <div className={styles.boardName}>{board.nameBoard}</div>
          </div>
        ))}
        <div className={styles.boardItem} onClick={isOpenCreate}>
          <div className={styles.btnNewBoard}>Create new board</div>
        </div>
      </div>
    </div>
  );
};

export default WorkspaceItem;
