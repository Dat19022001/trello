import { Route, Routes } from "react-router-dom";

import { appPath } from "./appPath";
import Workspace from "../pages/workspaces";
import WorkspaceDelete from "../pages/workspaceSet";
import BoardColumns from "../pages/Boards";

const AppRouters = () => {
  return (
    <Routes>
      <Route path={appPath.workspace + "/:type"} element={<Workspace />} />
      {/* <Route path={appPath.column + "/:type"} element={<Workspace />} /> */}
      <Route
        path={appPath.workspace + "/:id/account"}
        element={<WorkspaceDelete />}
      />
      <Route
        path={appPath.column + "/:type"}
        element={<BoardColumns />}
      />
    </Routes>
  );
};

export default AppRouters;
