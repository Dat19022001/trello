import { useParams } from "react-router-dom";
import Sidebar from "../workspaces/components/sidebar";
import { getWorkspaceById } from "../../utils/storage";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import MemberList from "./components/MemberList";

const WorkspaceMembers = () => {
  const { id } = useParams();
  const workspace = getWorkspaceById(id);
  const { onUpdate } = useSelector((states) => states.appReduce);
  useEffect(() => {}, [onUpdate]);

  return (
    <div className="Workspace1">
      <Sidebar workspace={workspace} />
      <MemberList workspace={workspace} />
    </div>
  );
};

export default WorkspaceMembers;
