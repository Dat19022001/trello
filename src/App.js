import { Provider } from "react-redux";
import Header from "./components/header";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
      </div>
    </Provider>
  );
}

export default App;
