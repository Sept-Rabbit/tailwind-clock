import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./Layout/Layout";
import Alarm from "./pages/Alarm";
import TimeZone from "./pages/TimeZone";
import StopWatch from "./pages/StopWatch";
import Timer from "./pages/Timer";

function App() {
  return (
    <div className="h-screen font-sans bg-white">
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Alarm />
          </Route>
          <Route path="/timezone">
            <TimeZone />
          </Route>
          <Route path="/stopwatch">
            <StopWatch />
          </Route>
          <Route path="/timer">
            <Timer />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
