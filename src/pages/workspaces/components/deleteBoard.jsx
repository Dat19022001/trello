import { AiOutlineClose } from "react-icons/ai";
import "./deleteBoard.scss"
const DeleteBoard = () => {
  return (
    <div className="DeleteBoard">
      <div className="DeleteBoard-title">
        <p>Dat</p>
        <AiOutlineClose />
      </div>
      <div className="DeleteBoard-body">
        <p>Do you want to delete this board ?</p>
      </div>
      <div className="DeleteBoard-btn">Delete</div>
    </div>
  );
};

export default DeleteBoard;
