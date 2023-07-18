import "./style.scss"

const Workspaces = () => {
  const data = [
    {
      name: "Dự án reactjs",
      url: "abc",
      
    },
    {
      name: "Không gian làm việc",
      url: "abc",
    },
  ];

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
            <a href={item.url}>
              <div className="Workspaces-imgae">
                <span className="Workspaces-firstCharacter">{firstLetter(item.name)}</span>
              </div>
              <div className="Workspaces-name">
                {item.name}
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workspaces;
