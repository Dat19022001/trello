import Sidebar from "./components/sidebar";
import "./style.scss";
import Board from "./components/Board";
import { useParams } from "react-router-dom";
import { getWorkspaceById } from "../../utils/storage";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import BoardColumns from "../Boards";
const Workspace = () => {
  const { type } = useParams();
  const workspace = getWorkspaceById(type);
  const { onUpdate } = useSelector((states) => states.appReduce);
  useEffect(() => {}, [onUpdate]);
  return (
    <div className="Workspace1">
      <Sidebar workspace={workspace} />
      {/* <Board /> */}
      <BoardColumns></BoardColumns>
    </div>
  );
};

export default Workspace;
