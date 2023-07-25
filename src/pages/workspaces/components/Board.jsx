import { BsPencil } from "react-icons/bs";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import { AiOutlineSearch, AiOutlineStar } from "react-icons/ai";
import { RiGitRepositoryPrivateLine } from "react-icons/ri";
import { Input, Select } from "antd";
import "./Board.scss";
import { useState } from "react";
const Board = () => {
  const [rename, setRename] = useState(true);
  const isRename = () => {
    setRename(!rename);
  };
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
        {rename ? (
          <div className="board-name">
            <span className="board-logo">T</span>
            <div className="board-nameWork">
              <div className="board-fix">
                <p>Trello không gian làm việc</p>
                <BsPencil onClick={() => isRename()} />
              </div>
              <div className="board-private">
                <RiGitRepositoryPrivateLine />
                <p>Private</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="board-rename">
            <div className="board-item">
              <div className="board-itemName">Name</div>
              <Input className="board-i" placeholder="Trello không gian làm việc" />
            </div>
            <div className="board-item">
              <div className="board-itemName">Short Name</div>
              <Input className="board-i" placeholder="Trello không gian làm việc" />
            </div>
            <div className="board-item">
              <div className="board-itemName">Website(options)</div>
              <Input className="board-i" placeholder="" />
            </div>
            <div className="board-item">
              <div className="board-itemName">Description(options)</div>
              <Input className="board-i" placeholder="" />
            </div>
            <div className="board-renameBtn">
              <div className="board-save">Save</div>
              <div className="board-cancel" onClick={() => isRename()}>Cancel</div>
            </div>
          </div>
        )}

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
