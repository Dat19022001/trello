import { Input } from "antd";
import { RiGitRepositoryPrivateLine } from "react-icons/ri";
import { BsPencil } from "react-icons/bs";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import "./workspaceTitle.scss";
import { useState } from "react";
import { updateWorkspace } from "../../../utils/storage";
import { useDispatch } from "react-redux";
import { setOnUpdate } from "../../../redux/slice/appReduce";
const WorkSpaceTitle = ({ workspace }) => {
  const [rename, setRename] = useState(true);
  const [name, setName] = useState(workspace.name);
  const [des, setDes] = useState(workspace.des);
  const [web, setWeb] = useState(workspace.web);
  const dispatch = useDispatch();
  const onChangeName = (value) => {
    setName(value);
  };
  const onChangDes = (value) => {
    setDes(value);
  };
  const onChangeWeb = (value) => {
    setWeb(value);
  };
  const isRename = () => {
    setRename(!rename);
  };
  const firstLetter = (name) => {
    const firstCharacter = name.charAt(0).toUpperCase();
    return firstCharacter;
  };
  const data = {
    id: workspace.id,
    name: name,
    des: des,
    web: web,
  };
  const onUpdate = () => {
    updateWorkspace(data);
    setRename(true);
    dispatch(setOnUpdate(Date.now()));
  };
  return (
    <div className="WorkspaceTitle">
      <div className="board-title">
        {rename ? (
          <div className="board-name">
            <span className="board-logo">{firstLetter(workspace.name)}</span>
            <div className="board-nameWork">
              <div className="board-fix">
                <p>{workspace.name}</p>
                <BsPencil onClick={() => isRename()} />
              </div>
              <div className="board-private">
                <RiGitRepositoryPrivateLine />
                <p>Private</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="board-rename">
            <div className="board-item">
              <div className="board-itemName">Name</div>
              <Input
                className="board-i"
                placeholder={workspace.name}
                value={name}
                onChange={(e) => onChangeName(e.target.value)}
              />
            </div>
            <div className="board-item">
              <div className="board-itemName">Short Name</div>
              <Input className="board-i" placeholder={workspace.id} />
            </div>
            <div className="board-item">
              <div className="board-itemName">Website(options)</div>
              <Input
                className="board-i"
                placeholder=""
                value={web}
                onChange={(e) => onChangeWeb(e.target.value)}
              />
            </div>
            <div className="board-item">
              <div className="board-itemName">Description(options)</div>
              <Input
                className="board-i"
                placeholder={`${workspace.des ? workspace.des : ""}`}
                value={des}
                onChange={(e) => onChangDes(e.target.value)}
              />
            </div>
            <div className="board-renameBtn">
              <div className="board-save" onClick={() => onUpdate()}>
                Save
              </div>
              <div className="board-cancel" onClick={() => isRename()}>
                Cancel
              </div>
            </div>
          </div>
        )}

        <div className="board-btn">
          <MdOutlineSupervisorAccount />
          <p>Invite Workspace members</p>
        </div>
      </div>
      <hr className="board-hr" />
    </div>
  );
};

export default WorkSpaceTitle;
