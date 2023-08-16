import { Input, Select } from "antd";
import { v4 as uuidv4 } from "uuid";

import Anh from "../../../../assets/anhcreate.svg";
import Anh2 from "../../../../assets/anhPosition.svg";
import "./newCreate.scss";
import { useState } from "react";
import { setWorkspaceStorage } from "../../../../utils/storage";
import { useNavigate } from "react-router-dom";
import { appPath } from "../../../../config/appPath";
import { setOpenCreateWork } from "../../../../redux/slice/appReduce";
import { useDispatch } from "react-redux";

const NewCreate = () => {
  const { TextArea } = Input;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const Id = uuidv4();
  const [isNext, setIsNext] = useState(false);
  const nextStep = () => {
    if (name === "" && type === "") {
    } else {
      setIsNext(true);
    }
  };
  const onFinish = () => {
    setWorkspaceStorage(data);
    navigate(appPath.workspace + "/" + Id);
    dispatch(setOpenCreateWork(false));
  };
  const [name, setName] = useState("");
  const [des, setDes] = useState("");
  const [type, setType] = useState("");
  const [member, setMember] = useState("");
  const onChangeName = (value) => {
    setName(value);
  };
  const onChangDes = (value) => {
    setDes(value);
  };
  const onChangEmail = (value) => {
    setMember(value);
  };
  const handleChange = (value) => {
    setType(value);
  };
  const data = {
    id: Id,
    name: name,
    des: des,
    type: type,
    member: member,
    web: "",
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
              <Input
                className="newCreate-input"
                value={name}
                placeholder="Taco's Co"
                onChange={(e) => onChangeName(e.target.value)}
              />
              <p className="newCreate-sub">
                This is the name of your company, team or organization.
              </p>
            </div>
            <div className="newCreate-type">
              <div className="newCreate-label">Workspace type</div>
              <Select
                onChange={handleChange}
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
                    value:"Operations",
                    label: "Operations",
                  },
                  {
                    value:"Human Resources",
                    label: "Human Resources",
                  }
                ]}
              />
            </div>
            <div className="newCreate-des">
              <div className="newCreate-label">Workspace description</div>
              <TextArea
                className="newCreate-text"
                placeholder="Our team organizes everything here"
                value={des}
                onChange={(e) => onChangDes(e.target.value)}
              />
              <p className="newCreate-sub">
                Get your members on board with a few words about your Workspace.
              </p>
            </div>
            <div
              className={`newCreate-btn ${
                name === "" && type === "" ? "newCreate-btnX" : ""
              }`}
              onClick={() => nextStep()}
            >
              Continue
            </div>
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
                value={member}
                onChange={(e) => onChangEmail(e.target.value)}
                className="newCreate-input"
                placeholder="e.g. calrissian@cloud.ci"
              />
              <p className="newCreate-sub">
                <strong>Pro tip!</strong> Add multiple emails, or invite them
                with one link.
              </p>
            </div>
            <div className="newCreate-btn">Invete to Workspace</div>
            <div className="newCreate-finish" onClick={() => onFinish()}>
              I'll do this later
            </div>
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
