import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Home from "./pages/Home";
import main from "./pages/main";

function App() {
  return (
      <Router>
          <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/main" component={main}/> */}
          </Switch>
      </Router>
  )
}

export default App;
