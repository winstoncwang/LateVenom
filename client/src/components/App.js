import React from "react";
import { Router, Route } from "react-router-dom";
import "./stylesheet/App.css";

//components
import Header from "./Header";
import Footer from "./Footer";
import Contents from "./contents/Contents";
import LogInForm from "./authentications/LogInForm";
import history from "../history";

const App = () => {
  return (
    <div className="ui">
      <Router history={history}>
        {" "}
        {/* use history @4.10.1 of 04/10/2020 the bug of v5 will not route properly */}
        <div>
          <Header />
          <Route exact path="/" component={Contents} />
          <Route exact path="/login" component={LogInForm} />
          <Footer />
        </div>
      </Router>
    </div>
  );
};

export default App;
