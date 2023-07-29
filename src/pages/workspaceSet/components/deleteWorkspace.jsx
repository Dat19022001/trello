import { useDispatch, useSelector } from "react-redux";
import WorkSpaceTitle from "../../workspaces/components/workspaceTitle";
import DeletePopup from "./deletePopup";
import "./deleteWorkspace.scss";
import { setOpenDeleteWorkspace } from "../../../redux/slice/appReduce";
const DeleteWorkspace = ({ workspace }) => {
  const { openDeleteWorkspace } = useSelector((states) => states.appReduce);
  const dispatch = useDispatch();
  const isClose = () => {
    dispatch(setOpenDeleteWorkspace(false));
  };
  const isOpen = () => {
    dispatch(setOpenDeleteWorkspace(true));
  };
  return (
    <div className="delete">
      <WorkSpaceTitle workspace={workspace} />
      <div className="delete-body">
        <h1>Workspace Setting </h1>
        <p className="delete-label">Workspace visibility</p>
        <hr className="delete-hr" />
        <div className="delete-visibility">
          <p className="delete-sub">
            Private - This Workspace is private. It's not indexed or visible to
            those outside the Workspace.
          </p>
          <div className="delete-btn">Change</div>
        </div>
        <p className="delete-label">Slack workspaces linking</p>
        <hr className="delete-hr" />
        <div className="delete-visibility">
          <p className="delete-sub">
            Link your Slack and Trello Workspaces together to collaborate on
            Trello projects from within Slack.
          </p>
          <div className="delete-btn">Add to slack</div>
        </div>
        <div className="delete-delete" onClick={() => isOpen()}>
          Delete this workspace
        </div>
        {openDeleteWorkspace && (
          <div className="delete-position">
            <DeletePopup workspace={workspace} />
          </div>
        )}
        {openDeleteWorkspace && (
          <div className="delete-close" onClick={() => isClose()}></div>
        )}
      </div>
    </div>
  );
};
export default DeleteWorkspace;
