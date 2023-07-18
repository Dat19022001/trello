import { AiOutlineYoutube } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";

import "./style.scss";
const Menu = () => {
  const data = [
    {
      link: "bac",
      name: "Jira Service Management",
      sub: "Collaborative IT service management",
    },
    {
      link: "bac",
      name: "Jira Service Management",
      sub: "Collaborative IT service management",
    },
    {
      link: "bac",
      name: "Jira Service Management",
      sub: "Collaborative IT service management",
    },
  ];
  return (
    <div className="Menu">
      <div className="Menu-title">
        <h1>Swich to</h1>
        <div style={{ display: "flex", alignItems: "center" }}>
          <a href="1">Atlassian Start</a>
          <AiOutlineYoutube />
        </div>
      </div>
      <a href="1" className="Menu-home">
        <img
          src="https://fd-assets.prod.atl-paas.net/image/logos/contrib/trello/icons/white.svg"
          alt="anh"
        />
        <p>Trello</p>
      </a>
      <h2>Recommended For Your Team</h2>
      <div className="Menu-sub">
        {data.map((item, index) => (
          <div key={index} className="Menu-item1">
            <a href={item.link} className="Menu-item">
              <img
                src="https://fd-assets.prod.atl-paas.net/image/logos/contrib/jira-service-management/icons/blue.svg"
                alt="anhr"
              />
              <div className="Menu-name">
                <p>{item.name}</p>
                <span>{item.sub}</span>
              </div>
            </a>
            <BsThreeDots />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
