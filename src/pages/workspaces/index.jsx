import Sidebar from "./components/sidebar";
import "./style.scss";
import Board from "./components/Board";
const Workspace = () => {
  return (
    <div className="Workspace1">
      <Sidebar />
      <Board />
    </div>
  );
};

export default Workspace;
