import {
  AiOutlineLeft,
  AiOutlineCreditCard,
  AiOutlinePlus,
  AiOutlineSetting,
  AiOutlineDown,
  AiOutlineTable,
  AiOutlineStar,
} from "react-icons/ai";
import { MdManageAccounts } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { BsThreeDots } from "react-icons/bs";
import "./sidebar.scss";
import { useDispatch, useSelector } from "react-redux";
import CreateBoard from "../../../components/header/components/create/createBoard";
import { setOpenCreateBoardS } from "../../../redux/slice/appReduce";
import { useNavigate } from "react-router-dom";
import { appPath } from "../../../config/appPath";
// import { useParams } from "react-router-dom";
// import { getWorkspaceById } from "../../../utils/storage";
const Sidebar = ({ workspace }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { openCreateBoardS } = useSelector((states) => states.appReduce);
  const isClose = () => {
    dispatch(setOpenCreateBoardS(false));
  };
  const isOpen = () => {
    dispatch(setOpenCreateBoardS(true));
  };
  const firstLetter = (name) => {
    const firstCharacter = name.charAt(0).toUpperCase();
    return firstCharacter;
  };
  return (
    <div className="sidebar">
      <div className="sidebar-title">
        <div style={{ display: "flex" }}>
          <div className="sidebar-img">
            <span className="sidebar-first">{firstLetter(workspace.name)}</span>
          </div>
          <div className="sidebar-workspace">
            <div className="sidebar-name">{workspace.name}</div>
            <div className="sidebar-price">Free</div>
          </div>
        </div>
        <AiOutlineLeft />
      </div>
      <div className="sidebar-ul">
        <div
          className="sidebar-li"
          onClick={() => navigate(appPath.workspace + "/" + workspace.id)}
        >
          <div className="sidebar-item">
            <AiOutlineCreditCard />
            <div className="sidebar-sub">Boards</div>
          </div>
        </div>
        <div className="sidebar-li">
          <div className="sidebar-item">
            <MdManageAccounts />
            <div className="sidebar-sub">Members</div>
          </div>
          <AiOutlinePlus style={{ padding: 10 }} />
        </div>
        <div
          className="sidebar-li"
          onClick={() =>
            navigate(appPath.workspace + "/" + workspace.id + "/account")
          }
        >
          <div className="sidebar-item">
            <AiOutlineSetting />
            <div className="sidebar-sub">Workspace settings</div>
          </div>
          <AiOutlineDown style={{ padding: 10 }} />
        </div>
      </div>
      <div className="sidebar-view">
        <div className="sidebar-board">
          <p>Workspaces view</p>
        </div>
        <div className="sidebar-item1">
          <AiOutlineTable />
          <span>Table</span>
        </div>
        <div className="sidebar-item1">
          <SlCalender />
          <span>Calender</span>
        </div>
      </div>
      <div className="sidebar-board">
        <p>Your Boards</p>
        <AiOutlinePlus onClick={() => isOpen()} />
      </div>
      <div className="sidebar-list">
        <div style={{ display: "flex", alignItems: "center" }}>
          <span className="sidebar-bg"></span>
          <span className="sidebar-nameBoard">Test</span>
        </div>
        <div style={{ display: "flex" }}>
          <BsThreeDots />
          <AiOutlineStar />
        </div>
      </div>
      {openCreateBoardS && (
        <div className="sidebar-openBoard">
          <CreateBoard />
        </div>
      )}
      {openCreateBoardS && (
        <div className="sidebar-close" onClick={() => isClose()}></div>
      )}
    </div>
  );
};

export default Sidebar;
