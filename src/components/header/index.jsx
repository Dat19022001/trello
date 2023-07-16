import { CgMenuGridO } from "react-icons/cg";
import { BsChevronDown } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { BiSolidAdjust } from "react-icons/bi";
import { MdAccountCircle } from "react-icons/md";
// import { Link } from "react-router-dom";
import "./style.scss";
const Header = () => {
  const Menu1 = [
    {
      url: "1",
      name: "Workspaces",
    },
    {
      url: "2",
      name: "Recent",
    },
    {
      url: "3",
      name: "Starred",
    },
    {
      url: "4",
      name: "Templants",
    },
  ];
  return (
    <div className="header">
      <div className="header-icon">
        <CgMenuGridO />
      </div>
      <a href="a" className="header-home">
        <div className="header-logo"></div>
      </a>
      <div className="header-nav">
        <div className="header-menu">
          {Menu1.map((item, index) => (
            <a href={item.url} className="header-item" key={index}>
              <span>{item.name}</span>
              <BsChevronDown />
            </a>
          ))}
        </div>
        <div className="header-btnCreate">
          <span>Create</span>
        </div>
      </div>
      <div className="header-sub">
        <div className="header-search">
          <input className="header-input" placeholder="Search" />
          <AiOutlineSearch />
        </div>
        <div className="header-notify header-hover" title="Notiffication">
          <IoIosNotificationsOutline />
        </div>
        <div className="header-infor header-hover" title="Information">
          <HiOutlineInformationCircle />
        </div>
        <div className="header-theme header-hover" title="Theme">
          <BiSolidAdjust />
        </div>
        <div className="header-acount header-hover" title="Account">
          <MdAccountCircle />
        </div>
      </div>
    </div>
  );
};

export default Header;
