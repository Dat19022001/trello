import { useParams } from "react-router-dom";
import Sidebar from "../workspaces/components/sidebar";
import DeleteWorkspace from "./components/deleteWorkspace";
import { getWorkspaceById } from "../../utils/storage";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const WorkspaceDelete = () => {
  const { id } = useParams();
  const workspace = getWorkspaceById(id);
  const { onUpdate } = useSelector((states) => states.appReduce);
  useEffect(() => {}, [onUpdate]);
  return (
    <div className="Workspace1">
      <Sidebar workspace={workspace} />
      <DeleteWorkspace workspace={workspace} />
    </div>
  );
};

export default WorkspaceDelete;
