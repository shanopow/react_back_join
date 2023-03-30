import ReactDOM from "react-dom";
import {BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import PageNotFound from "./pages/404";

import Degree from "./pages/SingleDegree";
import Degrees from "./pages/Degrees";

import Cohort from "./pages/SingleCohort";
import Cohorts from "./pages/Cohorts";

import Module from "./pages/SingleModule";
import Modules from "./pages/Modules";
import ModuleDelivered from "./pages/ModuleDelivered";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          
          <Route path="degrees" element={<Degrees />} />
          <Route path="degrees/:shortcode" element={<Degree />} />
          
          <Route path="cohorts" element={<Cohorts />} />
          <Route path="cohorts/:id" element={<Cohort />} />
          
          <Route path="modules" element={<Modules />} />
          <Route path="modules/:code" element={<Module />} />
          <Route path="modules/delivered/:delivered" element={<ModuleDelivered />} />

          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));