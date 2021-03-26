import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Banner from "./components/Banner";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";

function App() {
  return (
      <Router>
          <div>
              <Banner />
              <SideBar />
              <main>
                  <Switch>

                  </Switch>
              </main>
              <Footer />
          </div>
      </Router>
  )
}

export default App;
