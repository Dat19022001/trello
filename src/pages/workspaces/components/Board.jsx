import { AiOutlineSearch, AiOutlineStar } from "react-icons/ai";
import { Input, Select } from "antd";
import "./Board.scss";
import WorkSpaceTitle from "./worksapceTitle";
import { useParams } from "react-router-dom";
import { getWorkspaceById } from "../../../utils/storage";
import { useSelector } from "react-redux";
import { useEffect } from "react";
const Board = () => {
  const { type } = useParams();

  const data = [
    {
      name: "test1",
    },
    {
      name: "test2",
    },
    {
      name: "test3",
    },
    {
      name: "test3",
    },
  ];
  const { onUpdate } = useSelector((states) => states.appReduce);
  let workspace = getWorkspaceById(type);
  useEffect(() => {

  }, [onUpdate]);
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
          <div className="board-create board-item">Create new board</div>
          {data.map((item, index) => (
            <div className="board-item board-star" key={index}>
              {item.name}
              <AiOutlineStar />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Board;
