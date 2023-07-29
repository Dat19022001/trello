import { Input } from "antd";
import { AiOutlineClose } from "react-icons/ai";
import "./deletePopup.scss";
import { useDispatch } from "react-redux";
import {
  setOpenDeleteWorkspace,
  setRefetchWorkspace,
} from "../../../redux/slice/appReduce";
import { useState } from "react";
import { deleteWorkspace } from "../../../utils/storage";
import { useNavigate } from "react-router-dom";
import { appPath } from "../../../config/appPath";
const DeletePopup = ({ workspace }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isClose = () => {
    dispatch(setOpenDeleteWorkspace(false));
  };
  const [name, setName] = useState();
  const onChange = (value) => {
    setName(value);
  };
  const Delete = (id) => {
    if (deleteWorkspace(id)) {
      navigate(appPath.default);
      dispatch(setRefetchWorkspace(Date.now()));
      dispatch(setOpenDeleteWorkspace(false));
    } else {
      console.log("that bai");
    }
  };
  return (
    <div className="deletePopup">
      <div className="delete-title">
        <h1>Delete Workspace?</h1>
        <AiOutlineClose onClick={() => isClose()} />
      </div>
      <div className="delete-p">{`Enter the Workspace name ${workspace.name} to delete`}</div>
      <p className="delete-label1">Things to know:</p>
      <ul className="delete-list">
        <li className="delete-item">
          <p>This is permanent and can't be undone.</p>
        </li>
        <li className="delete-item">
          <p>All boards in this Workspace will be closed.</p>
        </li>
        <li className="delete-item">
          <p>TBoard admins can reopen boards.</p>
        </li>
        <li className="delete-item">
          <p>Board members will not be able to interact with closed boards.</p>
        </li>
      </ul>
      <p className="delete-label1">Enter the Workspace name to delete</p>
      <Input
        className="delete-input"
        onChange={(e) => onChange(e.target.value)}
      />
      <div
        className={`delete-btn delete-btn1 ${
          name === workspace.name ? "delete-ok" : ""
        }`}
        onClick={() => Delete(workspace.id)}
      >
        Delete Workspaces
      </div>
    </div>
  );
};

export default DeletePopup;
