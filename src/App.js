import "./App.css";
import React, { useState } from "react";
import NavBar from "./Components/NavBar";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import News from "./Components/News";

const App = () => {
  const [apikey, setApiKey] = useState("55f411f839484f9cbd978fb27df2939f");
  setApiKey("55f411f839484f9cbd978fb27df2939f");
  const [progress, setProgress] = useState(10);
  const setProgressPercent = (progress) => {
    setProgress(progress);
  };

  return (
    <div>
      <Router>
        <LoadingBar color="#1e389e" progress={progress} height={5} />
        <NavBar />

        <Switch>
          <Route exact path="/">
            <News
              key="general"
              setProgress={setProgressPercent}
              country="in"
              category=""
              apikey={apikey}
            />
          </Route>
          <Route exact path="/business">
            <News
              key="business"
              setProgress={setProgressPercent}
              country="in"
              category="Business"
              apikey={apikey}
            />
          </Route>
          <Route exact path="/health">
            <News
              key="health"
              setProgress={setProgressPercent}
              country="in"
              category="Health"
              apikey={apikey}
            />
          </Route>
          <Route exact path="/entertainment">
            <News
              key="entertainment"
              setProgress={setProgressPercent}
              country="in"
              category="Entertainment"
              apikey={apikey}
            />
          </Route>
          <Route exact path="/sports">
            <News
              key="sports"
              setProgress={setProgressPercent}
              country="in"
              category="Sports"
              apikey={apikey}
            />
          </Route>
          <Route exact path="/science">
            <News
              key="science"
              setProgress={setProgressPercent}
              country="in"
              category="Science"
              apikey={apikey}
            />
          </Route>
          <Route exact path="/technology">
            <News
              key="technology"
              setProgress={setProgressPercent}
              country="in"
              category="Technology"
              apikey={apikey}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
export default App;
