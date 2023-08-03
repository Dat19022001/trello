import { AiOutlineClose, AiOutlineLeft } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import Bg from "../../../../assets/review.svg";
import Bg9 from "../../../../assets/bg1.jpg";
import Bg8 from "../../../../assets/bg2.jpg";
import Bg7 from "../../../../assets/bg3.jpg";
import Bg6 from "../../../../assets/bg4.jpg";
import { Input, Select } from "antd";
import "./createBoard.scss";
import { useDispatch } from "react-redux";
import {
  setOpenCreate,
  setOpenCreateBoard,
  setOpenCreateBoardS,
  setOpenCreateBoardSS,
} from "../../../../redux/slice/appReduce";
import { useState } from "react";
import { getWorkSpaceStorage, setBoard } from "../../../../utils/storage";
import { v4 as uuidv4 } from "uuid";

const CreateBoard = () => {
  const Workspaces = getWorkSpaceStorage();
  const selectWorkspace = Workspaces.map((workspace) => {
    return { value: workspace.id, label: workspace.name };
  });
  const List = [
    {
      name: "1",
      img: `${Bg9}`,
    },
    {
      name: "2",
      img: `${Bg8}`,
    },
    {
      name: "3",
      img: `${Bg7}`,
    },
    {
      name: "4",
      img: `${Bg6}`,
    },
  ];
  const [isBg, setIsBg] = useState(Bg9);
  const [name, setName] = useState("1");
  const [nameBoard, setNameBoard] = useState();
  const [idWorkspace, setIdWorkspace] = useState();
  const [check, setCheck] = useState(false);
  const Id = uuidv4();
  const dispatch = useDispatch();
  const isClose = () => {
    dispatch(setOpenCreateBoard(false));
    dispatch(setOpenCreateBoardS(false));
  };
  const isBack = () => {
    dispatch(setOpenCreate(true));
    dispatch(setOpenCreateBoard(false));
  };
  const isChooseBg = (name) => {
    const check = List.find((item) => item.name === name);
    setIsBg(check.img);
    setName(name);
  };
  const onChangName = (value) => {
    setNameBoard(value);
  };
  const handleChange = (value) => {
    setIdWorkspace(value);
    setCheck(true);
  };
  const createBoard = () => {
    const data = {
      idWorkspace: idWorkspace,
      board: [
        {
          backgroundImage: isBg,
          id: Id,
          nameBoard: nameBoard,
          like: false,
        },
      ],
    };
    setBoard(data);
    dispatch(setOpenCreateBoard(false));
    dispatch(setOpenCreateBoardS(false));
    dispatch(setOpenCreateBoardSS(false));
  };
  return (
    <div className="NewBoard">
      <div className="board-title">
        <AiOutlineLeft onClick={() => isBack()} />
        <p>Create Board</p>
        <AiOutlineClose onClick={() => isClose()} />
      </div>
      <div className="board-review">
        <div
          className="board-a"
          style={{
            backgroundImage: `url(${isBg})`,
          }}
        >
          <img src={Bg} alt="anh" />
        </div>
      </div>
      <p className="board-bg">Background</p>
      <div className="board-list">
        {List.map((item, index) => (
          <div
            className="board-item"
            key={index}
            style={{ backgroundImage: `url(${item.img})` }}
            onClick={() => isChooseBg(item.name)}
          >
            <TiTick className={`${name === item.name ? "" : "board-none"}`} />
          </div>
        ))}
      </div>
      <div className="board-label">Board title</div>
      <Input
        className="board-input"
        placeholder=""
        autoFocus="true"
        onChange={(e) => onChangName(e.target.value)}
      />
      <p className="board-required">👋Board title is required</p>
      <div className="board-label">Workspace</div>
      <Select
        className="board-select"
        defaultValue={selectWorkspace[0].label}
        onChange={handleChange}
        options={selectWorkspace}
      />
      <div
        className={`${check ? "board-create" : ""} board-btn`}
        onClick={() => createBoard()}
      >
        Create
      </div>
      <div className="board-tem board-btn">Start with template</div>
      <p className="board-sub">
        By using images from Unsplash, you agree to their license and Terms of
        Service
      </p>
    </div>
  );
};

export default CreateBoard;
