import { Route, Routes } from "react-router-dom";

import { appPath } from "./appPath";
import Workspace from "../pages/workspaces";
import WorkspaceDelete from "../pages/workspaceSet";

const AppRouters = () => {
  return (
    <Routes>
      <Route path={appPath.workspace + "/:type"} element={<Workspace />} />
      <Route
        path={appPath.workspace + "/:id/account"}
        element={<WorkspaceDelete />}
      />
    </Routes>
  );
};

export default AppRouters;
