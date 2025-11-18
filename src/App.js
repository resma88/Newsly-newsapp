import "./App.css";

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  static defaultProps = {
    country: "in",
    max: 9,
    topLine: "Top",

  };

  static propTypes = {
    country: PropTypes.string,
    max: PropTypes.number,
  };

  render() {
    return (
      <>
        <div>
        <Router>
          <NavBar />
          <Routes>
            <Route exact path="/"element={ <News key="everything" pageSize={9} country="in" category="everything" topLine="Top" />} />
             <Route exact path="/business" element={ <News key="business" pageSize={9} country="in" category="business" topLine="Business"/>}  />
            <Route exact path="/technology" element={ <News key="technology" pageSize={9} country="in" category="technology"  topLine="Technology" />}  />
            <Route exact path="/entertainment" element={ <News key="entertainment" pageSize={9} country="in" category="entertainment"  topLine="Entertainment" />}  />
            <Route exact path="/sports" element={ <News key="sports" pageSize={9} country="in" category="sports"  topLine="Sports" />}  />
            <Route exact path="/science" element={ <News key="science" pageSize={9} country="in" category="science"  topLine="Science" />}  />
            <Route exact path="/health" element={ <News key="health" pageSize={9} country="in" category="health"  topLine="Health" />}  />
          </Routes>
        </Router>
        </div>
      </>
    );
  }
}
