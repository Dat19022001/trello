import { Provider } from "react-redux";
import Header from "./components/header";
import store from "./redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouters from "./config/appRouters";
import Board from "./pages/Boards";




function App() {
  return (
    <Provider store={store}>
      <div>
        <div className="App">

          <Router>
            <Header></Header>
            <Board></Board>
    
            <AppRouters />
          </Router>



        </div>
      </div>
    </Provider>
  );
}

export default App;
