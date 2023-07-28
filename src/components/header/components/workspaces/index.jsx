import { Link } from "react-router-dom";
import { getWorkSpaceStorage } from "../../../../utils/storage";
import { appPath } from "../../../../config/appPath";
import "./style.scss";

const Workspaces = () => {
  const data = getWorkSpaceStorage();

  const firstLetter = (name) => {
    const firstCharacter = name.charAt(0).toUpperCase();
    return firstCharacter;
  };

  return (
    <div className="Workspaces">
      <h1 className="Workspaces-title">Your Workspace</h1>
      <div className="Workspaces-content">
        {data.map((item, index) => (
          <div className="Workspaces-item" key={index}>
            <Link to={appPath.workspace +"/" + item.id}>
              <div className="Workspaces-imgae">
                <span className="Workspaces-firstCharacter">
                  {firstLetter(item.name)}
                </span>
              </div>
              <div className="Workspaces-name">{item.name}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workspaces;
