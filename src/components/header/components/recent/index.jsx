import { AiOutlineStar } from "react-icons/ai";
import "./style.scss";
const Recent = () => {
  const data = [
    {
      name: "Test",
      workspace: "Trello Không gian làm việc",
      url: "abc",
    },
    {
      name: "Test",
      workspace: "Trello Không gian làm việc",
      url: "abc",
    },
  ];
  return (
    <div className="Recent">
      {data.map((item, index) => (
        <a href={item.url} className="Recent-item" key={index}>
          <span className="Recent-img"></span>
          <div className="Recent-content">
            <p>{item.name}</p>
            <strong>{item.workspace}</strong>
          </div>
          <AiOutlineStar />
        </a>
      ))}
    </div>
  );
};

export default Recent;
