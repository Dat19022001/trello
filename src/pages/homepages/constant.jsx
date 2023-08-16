import { IoIosSettings } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineViewGrid } from "react-icons/hi";
import { FiHeart } from "react-icons/fi";
import { appPath } from "../../config/appPath";

export const submenuItems = (id) => [
  {
    id: "board",
    icon: (
      <svg
        width="16"
        height="16"
        role="presentation"
        focusable="false"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5ZM5 6C5 5.44772 5.44772 5 6 5H10C10.5523 5 11 5.44772 11 6V16C11 16.5523 10.5523 17 10 17H6C5.44772 17 5 16.5523 5 16V6ZM14 5C13.4477 5 13 5.44772 13 6V12C13 12.5523 13.4477 13 14 13H18C18.5523 13 19 12.5523 19 12V6C19 5.44772 18.5523 5 18 5H14Z"
          fill="#9fadbc"
        ></path>
      </svg>
    ),
    name: "Boards",
    url: appPath.workspace + "/" + id,
  },
  {
    id: "highlight",
    icon: <FiHeart size={16} color="#9fadbc" />,
    name: "Highlights",
    url: "#",
  },
  {
    id: "view",
    icon: <HiOutlineViewGrid size={16} color="#9fadbc" />,
    name: "Views",
    url: "#",
  },
  {
    id: "member",
    icon: <AiOutlineUser size={16} color="#9fadbc" />,
    name: "Members",
    url: appPath.workspace + "/" + id + "/members",
  },
  {
    id: "settings",
    icon: <IoIosSettings size={16} color="#9fadbc" />,
    name: "Settings",
    url: appPath.workspace + "/" + id + "/account",
  },
];
