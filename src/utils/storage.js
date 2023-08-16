export const setWorkspaceStorage = (data) => {
  var Workspace = JSON.parse(localStorage.getItem("Workspace")) || [];
  Workspace.push(data);
  localStorage.setItem("Workspace", JSON.stringify(Workspace));
};
export const getWorkSpaceStorage = () => {
  return JSON.parse(localStorage.getItem("Workspace")) || [];
};

export const getMembersByWorkspace = (id, name) => {
  const members =  [
    {
      id: 1,
      username: 'vbh30',
      fullname: 'Vũ Bá Hướng',
      wId: '52ee87ba-b960-49a1-b8fc-d458ed3f0efe'
    },
    {
      id: 2,
      username: 'nqh',
      fullname: 'Nguyễn Quang Hải',
      wId: '52ee87ba-b960-49a1-b8fc-d458ed3f0efe'

    },
    {
      id: 3,
      username: 'dnt',
      fullname: 'Đạt',
      wId: '52ee87ba-b960-49a1-b8fc-d458ed3f0efe'

    }
  ]
  // const members = JSON.parse(localStorage.getItem("Members")) || [];
  return members.filter(({ wId, fullname }) => wId === id && fullname.includes(name))
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

export const setBoard = (data) => {
  var Boards = JSON.parse(localStorage.getItem("Boards")) || [];
  if (Boards.length === 0) {
    Boards.push(data);
  } else {
    Boards.forEach((item) => {
      if (item.idWorkspace === data.idWorkspace) {
        item.board.push({
          id: data.board[0].id,
          nameBoard: data.board[0].nameBoard,
          like: false,
          backgroundImage: data.board[0].backgroundImage,
        });
      } else {
        Boards.push(data);
      }
    });
  }
  localStorage.setItem("Boards", JSON.stringify(Boards));
};
export const getBoard = (id) => {
  const Boards = JSON.parse(localStorage.getItem("Boards")) || [];
  const Board = Boards.find((item) => item.idWorkspace === id);
  return Board;
};
