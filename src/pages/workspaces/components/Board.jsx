import { BsPencil } from "react-icons/bs";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import { AiOutlineSearch, AiOutlineStar } from "react-icons/ai";
import { RiGitRepositoryPrivateLine } from "react-icons/ri";
import { Input, Select } from "antd";
import "./Board.scss";
const Board = () => {
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
  return (
    <div className="board">
      <div className="board-title">
        <div className="board-name">
          <span className="board-logo">T</span>
          <div className="board-nameWork">
            <div className="board-fix">
              <p>Trello không gian làm việc</p>
              <BsPencil />
            </div>
            <div className="board-private">
              <RiGitRepositoryPrivateLine />
              <p>Private</p>
            </div>
          </div>
        </div>
        <div className="board-btn">
          <MdOutlineSupervisorAccount />
          <p>Invite Workspace members</p>
        </div>
      </div>
      <hr className="board-hr" />
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
