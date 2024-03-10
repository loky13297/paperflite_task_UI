import { Provider } from "react-redux";
import "./App.css";
import HomePage from "./pages";
import { store } from "./store/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <HomePage />
      </Provider>
    </div>
  );
}

export default App;
