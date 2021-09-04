import { Provider } from "react-redux";
import store from './store/store';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import './utilities/Normalize.scss';
import Home from "./components/Home/Home";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <NavLink to="/">
          Home
        </NavLink>
        <Switch>
          <Route path="/" exact><Home/> </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
