// import {Route,Routes} from "react-router-dom";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Support from "./components/support";
import Allinone from "./components/allinone";

function App() {
  return (
      <>
          {/*<Routes>*/}
              <Navbar/>
              <Hero/>
              <About />
              <Support />
              <Allinone />
              {/*<Route path={'/'} element={''} />*/}
          {/*</Routes>*/}
      </>

  );
}

export default App;
