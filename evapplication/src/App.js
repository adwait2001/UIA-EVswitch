import React, { Component } from "react";
import HomeScreen from "./HomeScreen";
import HomeHeader from "./HomeHeader";
import { Switch, Route } from "react-router";
import Quiz from "./Quiz";
import Results from "./Results";
import Stats from "./Components/stats";
import LocationMap from "./Map";
import OpCost from "./Components/OpCost";
import Login from "./Components/login";
import UserManual from "./Components/UserManual";
import GetHistory from "./Components/GetHistory";

const Main = () => (
  //routing
  <Switch>
    <Route exact path="/" component={HomeScreen} />
    <Route exact path="/quiz" component={Quiz} />
    <Route path="/quiz/results/" component={Results} />
    <Route path="/statistics" component={Stats} />
    <Route path="/map" component={LocationMap} />
    <Route path="/opCost" component={OpCost} />
    <Route path="/login" component={Login} />
    <Route path="/manual" component={UserManual} />
    <Route path="/history" component={GetHistory} />
  </Switch>
);

class App extends Component {
  render() {
    return (
      <div className="quiz">
        <HomeHeader />
        <Main />
      </div>
    );
  }
}

export default App;
