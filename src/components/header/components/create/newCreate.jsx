import { Input, Select } from "antd";
import Anh from "../../../../assets/anhcreate.svg";
import Anh2 from "../../../../assets/anhPosition.svg";
import "./newCreate.scss";
const NewCreate = () => {
  return (
    <div className="newCreate">
      <div className="newCreate-popup">
        <div className="newCreate-left">
          <div className="newCreate-form">
            <h1>Let's build a Workspace</h1>
            <p>
              Boost your productivity by making it easier for everyone to access
              boards in one location.
            </p>
            <div className="newCreate-name">
              <div className="newCreate-label">Workspace name</div>
              <Input className="newCreate-input" placeholder="Taco's Co" />
              <p className="newCreate-sub">
                This is the name of your company, team or organization.
              </p>
            </div>
            <div className="newCreate-type">
              <div className="newCreate-label">Workspace name</div>
              <Select
              className="newCreate-select"
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
            <div className="newCreate-des">
              <div className="newCreate-label">Workspace description</div>
              <textarea
                className="newCreate-text"
                placeholder="Our team organizes everything here"
              />
              <p className="newCreate-sub">
                Get your members on board with a few words about your Workspace.
              </p>
            </div>
            <div className="newCreate-btn">Continue</div>
          </div>
        </div>
        <div className="newCreate-right">
          <div className="newCreate-img">
            <img src={Anh} alt="anh" className="newCreate-anh" />
            <img src={Anh2} alt="anh2" className="newCreate-position" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewCreate;
