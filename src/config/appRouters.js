import { Route, Routes } from "react-router-dom";

import { appPath } from "./appPath";
import Workspace from "../pages/workspaces";

const AppRouters = () => {
  return (
    <Routes>
      <Route path={appPath.workspace + "/:type"} element={<Workspace />} />
    </Routes>
  );
};

export default AppRouters;
