export const setWorkspaceStorage = (data) => {
  var Workspace = JSON.parse(localStorage.getItem("Workspace")) || [];
  Workspace.push(data);
  localStorage.setItem("Workspace", JSON.stringify(Workspace));
};
export const getWorkSpaceStorage = () => {
  return JSON.parse(localStorage.getItem("Workspace")) || [];
};

export const getWorkspaceById = (Id) => {
  const Workspaces = JSON.parse(localStorage.getItem("Workspace")) || [];
  const Workspace = Workspaces.find((item) => item.id === Id);
  return Workspace;
};

export const updateWorkspace = (data) => {
  const Workspaces = JSON.parse(localStorage.getItem("Workspace")) || [];
  const indexWorkspace = Workspaces.findIndex((item) => item.id === data.id);
  if (indexWorkspace !== -1) {
    const workspace = {
      ...Workspaces[indexWorkspace],
      name: data.name,
      des: data.des,
      web: data.web,
    };
    Workspaces[indexWorkspace] = workspace;
    localStorage.setItem("Workspace", JSON.stringify(Workspaces));
    return true;
  }
  return false;
};

export const deleteWorkspace = (id) => {
  const Workspaces = JSON.parse(localStorage.getItem("Workspace")) || [];
  const indexWorkspace = Workspaces.findIndex((item) => item.id === id);
  if (indexWorkspace !== -1) {
    Workspaces.splice(indexWorkspace, 1);
    localStorage.setItem("Workspace", JSON.stringify(Workspaces));
    return true;
  }
  return false;
};
