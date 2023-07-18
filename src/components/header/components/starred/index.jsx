import { AiOutlineStar } from "react-icons/ai";
import Image from "../../../../assets/cc47d0a8c646581ccd08.svg";
import "./style.scss"
const Star = () => {
  const data = [
    
  ];

  return (
    <div className="Star">
      {data.length > 0 ? (
        <div className="Star-list">
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
      ) : (
        <div className="Star-null">
          <img src={Image} alt="anh" />
          <p>Star important boards to access them quickly and easily.</p>
        </div>
      )}
    </div>
  );
};

export default Star;
