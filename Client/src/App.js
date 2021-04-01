import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login"
import Banner from "./Components/Banner";
import Welcome from "./Components/Welcome";
import Footer from "./Components/Footer";
import ClientCard from "./Components/ClientCard";
import CreateProfile from "./Components/CreateProfile";
import UpdateProfile from "./Components/UpdateProfile";
import CreateMealPlan from "./Components/CreateMealPlan";


function App() {
  return (
      <Router>
          <Switch>
          <div>
              <Route exact path={["/", "/signUp"]}>
                  <SignUp />
              </Route>
              <Route exact path={["/login"]}>
                  <Login />
              </Route>
              <Route exact path="/dashboard">
                <Banner />
                <Welcome />
                <Footer />
              </Route>
              <Route exact path={["/clientCard"]}>
                <Banner />
                <ClientCard />
                <Footer />
              </Route> 
              <Route  exact path="/createProfile">
                <Banner />
                <CreateProfile />
                <Footer />
              </Route>
              <Route exact path="/updateProfile">
                <Banner />
                <UpdateProfile />
                <Footer />
              </Route>
              <Route exact path="/createMealPlan">
                <Banner />
                <CreateMealPlan />
                <Footer />
              </Route>
          </div>
          </Switch>
      </Router>
  )
}

export default App;
