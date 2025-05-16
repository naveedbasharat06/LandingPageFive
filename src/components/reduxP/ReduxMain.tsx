import { Provider } from "react-redux";
import { store } from "./store";
import ReduxApp from "./ReduxApp";

function Main() {
  return (
    <div>
      <Provider store={store}>
      <ReduxApp /> 
       </Provider>
    </div>
  );
}
export default Main;
