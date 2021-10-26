import { LeftNav } from "./Component.jsx/LeftNav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./SCSS/App.scss";
import { Home } from "./Component.jsx/Home";
function App() {
  return (
    <div className="App">
      <div className="appContainer row">
          <div className="col-3 bg-secondary leftNavContainer">
            <LeftNav />
          </div>
          <div className="col-9">
                 <Home/>      
          </div>
      </div>
    </div>
  );
}

export default App;