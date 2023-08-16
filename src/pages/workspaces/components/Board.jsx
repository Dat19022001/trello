import { AiOutlineSearch, AiOutlineStar } from "react-icons/ai";
import { Input, Select } from "antd";
import "./Board.scss";
import WorkSpaceTitle from "./workspaceTitle";
import { useParams } from "react-router-dom";
import { getBoard, getWorkspaceById } from "../../../utils/storage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import CreateBoard from "../../../components/header/components/create/createBoard";
import { setOpenCreateBoardSS } from "../../../redux/slice/appReduce";
import { useState } from "react";
const Board = () => {
  const { type } = useParams();
  const dispatch = useDispatch();
  const { onUpdate, openCreateBoardSS, createBoard, refetchBoard } =
    useSelector((states) => states.appReduce);
  let workspace = getWorkspaceById(type);
  var Board = getBoard(workspace.id);

  if (Board === undefined) {
    var data1 = [];
  } else {
    data1 = Board.board;
  }
  const [data, setData] = useState(data1);
  console.log(data);
  // var data = [];
  // if (Board === undefined) {
  //   data = [];
  // } else {
  //   data = Board.board;
  // }
  const isOpen = () => {
    dispatch(setOpenCreateBoardSS(true));
  };
  const isClose = () => {
    dispatch(setOpenCreateBoardSS(false));
  };
  const onSort = (value) => {
    if (value === "AZ") {
      Board.board.sort((boardA, boardB) => {
        const nameA = boardA.nameBoard.toUpperCase();
        const nameB = boardB.nameBoard.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
      setData(Board.board);
    } else {
      Board.board.sort((boardA, boardB) => {
        const nameA = boardA.nameBoard.toUpperCase();
        const nameB = boardB.nameBoard.toUpperCase();
        if (nameA < nameB) {
          return 1;
        }
        if (nameA > nameB) {
          return -1;
        }
        return 0;
      });
      setData(Board.board);
    }
  };
  useEffect(() => {
    Board = getBoard(workspace.id);
    if (Board === undefined) {
      setData([]);
    } else {
      setData(Board.board);
    }

    // eslint-disable-next-line
  }, [onUpdate, createBoard, refetchBoard]);

  return (
    <div className="board">
      <WorkSpaceTitle workspace={workspace} />
      <div className="board-body">
        <h1>Boards</h1>
        <div className="board-function">
          <div className="board-left">
            <div className="board-sort">
              <div className="board-label">Sort by</div>
              <Select
                className="board-select"
                defaultValue="A-Z"
                style={{
                  width: 120,
                }}
                onChange={onSort}
                options={[
                  {
                    value: "AZ",
                    label: "A-Z",
                  },
                  {
                    value: "ZA",
                    label: "Z-A",
                  },
                ]}
              />
            </div>
            <div className="board-filter">
              <div className="board-label">Filter by</div>
              <Select
                className="board-select"
                defaultValue="choose"
                style={{
                  width: 120,
                }}
                // onChange={handleChange}
                options={[
                  {
                    value: "choose",
                    label: "choose...",
                  },
                  {
                    value: "lucy",
                    label: "Lucy",
                  },
                  {
                    value: "Yiminghe",
                    label: "yiminghe",
                  },
                  {
                    value: "disabled",
                    label: "Disabled",
                    disabled: true,
                  },
                ]}
              />
            </div>
          </div>
          <div className="board-search">
            <div className="board-label">Sort by</div>
            <Input
              className="board-input"
              placeholder="Search boards"
              prefix={<AiOutlineSearch />}
            />
          </div>
        </div>
        <div className="board-list">
          <div className="board-create board-item" onClick={() => isOpen()}>
            Create new board
          </div>
          {data.map((item, index) => (
            <div
              className="board-item board-star"
              style={{ backgroundImage: `url(${item.backgroundImage})` }}
              key={index}
            >
              {item.nameBoard}
              <AiOutlineStar />
            </div>
          ))}
        </div>
      </div>
      {openCreateBoardSS && (
        <div className="board-position">
          <CreateBoard />
        </div>
      )}
      {openCreateBoardSS && (
        <div className="board-close" onClick={() => isClose()}></div>
      )}
    </div>
  );
};

export default Board;
