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
import { useDispatch, useSelector } from "react-redux";
import {
  setOpenCreate,
  setOpenCreateBoard,
  setOpenCreateWork,
} from "../../redux/slice/appReduce";
import Workspaces from "./components/workspaces";
import Recent from "./components/recent";
import Star from "./components/starred";
import Create from "./components/create";
import NewCreate from "./components/create/newCreate";
import CreateBoard from "./components/create/createBoard";
import { Link } from "react-router-dom";
import { appPath } from "../../config/appPath";
const Header = () => {
  const [open, setOpen] = useState(false);
  const [openWork, setOpenWork] = useState(false);
  const [openRecent, setOpenRecent] = useState(false);
  const [openStar, setOpenStar] = useState(false);
  // const [openCreate, setOpenCreate] = useState(false);
  const { openCreateWork, openCreate, openCreateBoard } = useSelector(
    (states) => states.appReduce
  );
  const [selectItem, setSelectItem] = useState(null);
  const dispatch = useDispatch();
  const isOpen = () => {
    setOpen(!open);
    setOpenWork(false);
    setOpenRecent(false);
    setOpenStar(false);
    setSelectItem(null);
    dispatch(setOpenCreate(false));
  };
  const isOpenMenu = (name) => {
    setSelectItem(name);
    if (name === "Workspaces") {
      setOpenWork(!openWork);
      setOpenRecent(false);
      setOpen(false);
      setOpenStar(false);
      dispatch(setOpenCreate(false));
      dispatch(setOpenCreateWork(false));
    } else if (name === "Recent") {
      setOpenRecent(!openRecent);
      setOpen(false);
      setOpenWork(false);
      setOpenStar(false);
      dispatch(setOpenCreate(false));
      dispatch(setOpenCreateWork(false));
    } else if (name === "Starred") {
      setOpenStar(!openStar);
      setOpenRecent(false);
      setOpen(false);
      setOpenWork(false);
      dispatch(setOpenCreate(false));
      dispatch(setOpenCreateWork(false));
    }
  };
  const isClose = () => {
    setOpen(false);
    setOpenWork(false);
    setOpenRecent(false);
    setOpenStar(false);
    dispatch(setOpenCreate(false));
    dispatch(setOpenCreateWork(false));
    dispatch(setOpenCreateBoard(false));
    setSelectItem(null);
  };
  const isOpenCreate = () => {
    dispatch(setOpenCreate(!openCreate));
    setOpen(false);
    setOpenWork(false);
    setOpenRecent(false);
    setOpenStar(false);
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
      <Link to={appPath.default} className="header-home">
        <div className="header-logo"></div>
      </Link>
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
        <div className="header-btnCreate" onClick={() => isOpenCreate()}>
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
        {openCreate && <Create />}
        {openCreate && (
          <div className="header-popup" onClick={() => isClose()}></div>
        )}
        {openCreateWork && <NewCreate />}
        {openCreateWork && (
          <div className="header-popup" onClick={() => isClose()}></div>
        )}
        {openCreateBoard && <div className="header-board"><CreateBoard /></div>}
        {openCreateBoard && (
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
