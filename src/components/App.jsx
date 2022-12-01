import RoutesWithChat from "./RoutesWithChat";
import { init } from "../actions/websocket";
import "../css/main.scss";

function App() {
  if (import.meta.hot) {
    init();
    import.meta.hot.send("my:from-client", { msg: "Hey!" });
  }

  console.log("import.meta.env: ", import.meta.env);
  return <RoutesWithChat />;
}

export default App;
