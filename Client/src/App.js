import React from "react";
import { BrowserRouter as Router,} from "react-router-dom";
import Banner from "./Components/Banner";
import SideBar from "./Components/SideBar";
import Footer from "./Components/Footer";

function App() {
  return (
      <Router>
          <div>
              <Banner />
              <SideBar />
              <main>
                  

                  
              </main>
              <Footer />
          </div>
      </Router>
  )
}

export default App;
