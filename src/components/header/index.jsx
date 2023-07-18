import { CgMenuGridO } from "react-icons/cg";
import { BsChevronDown } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { BiSolidAdjust } from "react-icons/bi";
import { MdAccountCircle } from "react-icons/md";
// import { Link } from "react-router-dom";
import "./style.scss";
import Menu from "./components/menu";
import { useState } from "react";
import Workspaces from "./components/workspaces";
import Recent from "./components/recent";
import Star from "./components/starred";
const Header = () => {
  const [open, setOpen] = useState(false);
  const [openWork, setOpenWork] = useState(false);
  const [openRecent, setOpenRecent] = useState(false);
  const [openStar, setOpenStar] = useState(false);
  const [selectItem, setSelectItem] = useState(null);
  const isOpen = () => {
    setOpen(!open);
    setOpenWork(false);
    setOpenRecent(false);
    setOpenStar(false);
  };
  const isOpenMenu = (name) => {
    setSelectItem(name);
    if (name === "Workspaces") {
      setOpenWork(!openWork);
      setOpenRecent(false);
      setOpen(false);
      setOpenStar(false);
    } else if (name === "Recent") {
      setOpenRecent(!openRecent);
      setOpen(false);
      setOpenWork(false);
      setOpenStar(false);
    } else if (name === "Starred") {
      setOpenStar(!openStar);
      setOpenRecent(false);
      setOpen(false);
      setOpenWork(false);
    }
  };
  const isClose = () => {
    setOpen(false);
    setOpenWork(false);
    setOpenRecent(false);
    setOpenStar(false);
    setSelectItem(null);
  };
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
      <div className="header-icon" onClick={() => isOpen()}>
        <CgMenuGridO />
      </div>
      {open && <Menu />}
      {open && <div className="header-popup" onClick={() => isClose()}></div>}
      <a href="a" className="header-home">
        <div className="header-logo"></div>
      </a>
      <div className="header-nav">
        <div className="header-menu">
          {Menu1.map((item, index) => (
            <div
              className={`header-item ${
                selectItem === item.name ? "header-select" : ""
              } `}
              key={index}
              onClick={() => {
                isOpenMenu(item.name);
              }}
            >
              <span>{item.name}</span>
              <BsChevronDown />
            </div>
          ))}
        </div>
        <div className="header-btnCreate">
          <span>Create</span>
        </div>
        {openWork && <Workspaces />}
        {openWork && (
          <div className="header-popup" onClick={() => isClose()}></div>
        )}
        {openRecent && <Recent />}
        {openRecent && (
          <div className="header-popup" onClick={() => isClose()}></div>
        )}
        {openStar && <Star />}
        {openStar && (
          <div className="header-popup" onClick={() => isClose()}></div>
        )}
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
