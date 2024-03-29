import { useDispatch } from "react-redux";
import "./style.scss";
import {
  setOpenCreate,
  setOpenCreateBoard,
  setOpenCreateWork,
} from "../../../../redux/slice/appReduce";
const Create = () => {
  const dispatch = useDispatch();
  const isOpenCreate = () => {
    dispatch(setOpenCreateWork(true));
    dispatch(setOpenCreate(false));
  };
  const isOpenBoard = () => {
    dispatch(setOpenCreateBoard(true));
    dispatch(setOpenCreate(false));
  };
  return (
    <div className="Create">
      <div className="Create-title" onClick={()=> isOpenBoard()}>
        <h1>Create board</h1>
        <p>
          A board is made up of cards ordered on lists. Use it to manage
          projects, track information, or organize anything.
        </p>
      </div>
      <div className="Create-title">
        <h1>Start with a template</h1>
        <p>Get started faster with a board template.</p>
      </div>
      <div className="Create-title" onClick={() => isOpenCreate()}>
        <h1>Create Workspace</h1>
        <p>
          A Workspace is a group of boards and people. Use it to organize your
          company, side hustle, family, or friends.
        </p>
      </div>
    </div>
  );
};

export default Create;
