import { Provider } from "react-redux";
import Header from "./components/header";
import store from "./redux/store";
import Workspace from "./pages/workspaces";

function App() {
  return (
    <Provider store={store}>
      <div>
        <div className="App">
          <Header />
          <Workspace />
        </div>
      </div>
    </Provider>
  );
}

export default App;
