import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login"
import Banner from "./Components/Banner";
import Welcome from "./Components/Welcome";
import Footer from "./Components/Footer";
//import ClientCard from "./Components/ClientCard";
//import CreateProfile from "./Components/CreateProfile";
//import UpdateProfile from "./Components/UpdateProfile";
import CreateMeal from "./Components/CreateMeal";
import IngredientList from "./Components/Foods";
import MealCard from "./Components/MealCard";

function App() {
  return (
      <Router>
          <Switch>
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
              {/*<Route exact path={["/clientCard"]}>
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
              </Route> */}
              <Route exact path="/ingredientList">
                <Banner />
                <IngredientList />
                <Footer />
              </Route>
              <Route exact path="/createMeal">
                <Banner />
                <CreateMeal />
                <Footer />
              </Route>
              <Route exact path="/viewMeals">
                <Banner />
                <MealCard />
                <Footer />
              </Route>
          </Switch>
      </Router>
  )
}

export default App;
