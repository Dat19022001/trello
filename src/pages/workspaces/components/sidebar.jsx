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
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-title">
        <div className="sidebar-img">
          <span className="sidebar-first">T</span>
        </div>
        <div className="sidebar-workspace">
          <div className="sidebar-name">Trello Không gian làm việc</div>
          <div className="sidebar-price">Free</div>
        </div>
        <AiOutlineLeft />
      </div>
      <div className="sidebar-ul">
        <div className="sidebar-li">
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
        <div className="sidebar-li">
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
        <AiOutlinePlus />
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
    </div>
  );
};

export default Sidebar;
