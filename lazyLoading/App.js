import "./App.css";
import React, { Suspense, lazy } from "react";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));

class App extends React.Component {
  render() {
    return (
      <div>
        <h3>Lazy Loading</h3>
        <Suspense fallback = {<div>Loading Home page...</div>} >
          <Home />
        </Suspense>
        <Suspense fallback = {<div>Loading About page...</div>} >
          <About />
        </Suspense>
      </div>
    )
  }
}

export default App;
