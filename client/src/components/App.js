import React from "react";
import { Router, Route } from "react-router-dom";
import "./stylesheet/App.css";

//components
import Header from "./Header";
import Contents from "./contents/Contents.js";
import Footer from "./Footer";
import history from "../history";

const App = () => {
  return (
    <div className="ui">
      <Router history={history}>
        <div>
          <Header />
          <Route path="/" exact component={Contents} />
          <Footer />
        </div>
      </Router>
    </div>
  );
};

export default App;
