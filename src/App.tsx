import { BrowserRouter, Route, Routes } from "react-router-dom";
import Developers from "./pages/Developers";
import Repositories from "./pages/Repositories";
import { ROUTE_DEVELOPERS, ROUTE_HOME } from "./constants";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={ROUTE_DEVELOPERS} element={<Developers />} />
          <Route path={ROUTE_HOME} element={<Repositories />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
