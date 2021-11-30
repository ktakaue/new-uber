import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components
import { Restaurants } from "./containers/Restaurants";
import { Foods } from "./containers/Foods";
import { Orders } from "./containers/Orders";

function App() {
  return (
    <Router>
      <Switch>
        <Route  path="/restaurants">
          <Restaurants />
        </Route>
        <Route  path="/foods">
          <foods />
        </Route>
        <Route  path="/orders">
          <Orders />
        </Route>
        {/* ここから追加 */}
        <Route
          path="/restaurants/:restaurantsId/foods"
          render={({ match }) => <Foods match={match} />}
        />
        {/* ここまで追加 */}
      </Switch>
    </Router>
  );
}

export default App;
