import { Input } from "antd";
import WorkSpaceTitle from "../../workspaces/components/workspaceTitle";
import styles from "./member.module.scss";
import { getMembersByWorkspace } from "../../../utils/storage";
import { useState } from "react";

const MemberList = ({ workspace }) => {
  const [name, setName] = useState('');
  const members = getMembersByWorkspace(workspace.id, name);
  return (
    <div className={styles.wrapper}>
      <WorkSpaceTitle workspace={workspace} />
      <div className={styles.body}>
        <h2>Workspace members</h2>
        <Input
          className={styles.input}
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
          placeholder="Filter by name"
        />
        <div className={styles.list}>
          {members.map((member) => (
            <div key={member.id} className={styles.item}>
              <div className={styles.thumb}>
                {member.fullname[0]}
              </div>
              <div className={styles.memberInfo}>
                <div className={styles.fullname}>{member.fullname}</div>
                <div className={styles.username}>@{member.username}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MemberList;
