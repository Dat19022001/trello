import { AiOutlinePlus } from "react-icons/ai";
import styles from "./menu.module.scss";
import MenuItem from "./MenuItem";
import { getWorkSpaceStorage } from "../../../utils/storage";
import { useDispatch } from "react-redux";
import {
  setOpenCreateWork
} from "../../../redux/slice/appReduce";
const MenuList = () => {
  const data = getWorkSpaceStorage();

  const dispatch = useDispatch();
  const isOpenCreate = () => {
    dispatch(setOpenCreateWork(true));
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>
        <div className={styles.title}>Workspaces</div>
        <button className={styles.btnIcon} onClick={isOpenCreate}>
          <AiOutlinePlus size={16} color="#9fadbc" />
        </button>
      </div>
      <div className={styles.list}>
        {data.map((item) => (
          <MenuItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default MenuList;
