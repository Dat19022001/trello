import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import styles from "./menu.module.scss";
import { submenuItems } from "../constant";
import { Link } from "react-router-dom";

const MenuItem = ({ id, name }) => {
  const firstLetter = name[0];
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!open);


  return (
    <div className={styles.item}>
      <div className={styles.headItem} onClick={toggleOpen}>
        <div className={styles.thumb}>{firstLetter}</div>
        <div className={styles.name}>{name}</div>
        <button className={styles.btnIcon}>
          {open ? <FiChevronUp size={20} color="#9fadbc" /> : <FiChevronDown size={20} color="#9fadbc" />}
        </button>
      </div>
      <div className={styles.bodyItem} data-active={open}>
        <div className={styles.submenuList}>
          {submenuItems(id).map((item) => (
            <Link key={item.id} className={styles.submenuItem} to={item.url}>
              <div className={styles.submenuIcon}>{item.icon}</div>
              <div className={styles.submenuName}>{item.name}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
