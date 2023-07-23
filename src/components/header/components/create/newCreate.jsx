import { Input, Select } from "antd";
import Anh from "../../../../assets/anhcreate.svg";
import Anh2 from "../../../../assets/anhPosition.svg";
import "./newCreate.scss";
import { useState } from "react";

const NewCreate = () => {
  const [isNext, setIsNext] = useState(false);
  const nextStep = () => {
    setIsNext(true);
  };
  return (
    <div className="newCreate">
      <div className="newCreate-popup">
        <div className="newCreate-left">
          <div className={`newCreate-form ${isNext ? "newCreate-none" : ""}`}>
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
            <div className="newCreate-btn" onClick={()=> nextStep()}>Continue</div>
          </div>
          <div className={`newCreate-email ${isNext ? "" : "newCreate-none"}`}>
            <h1>Invite your team</h1>
            <p>
              Trello makes teamwork your best work. Invite your new team members
              to get going!
            </p>
            <div className="newCreate-name">
              <div className="newCreate-label">Workspace members</div>
              <Input
                className="newCreate-input"
                placeholder="e.g. calrissian@cloud.ci"
              />
              <p className="newCreate-sub">
                <strong>Pro tip!</strong> Add multiple emails, or invite them
                with one link.
              </p>
            </div>
            <div className="newCreate-btn">Invete to Workspace</div>
            <div className="newCreate-finish">I'll do this later</div>
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
