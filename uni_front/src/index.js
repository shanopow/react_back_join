import ReactDOM from "react-dom";
import {BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import PageNotFound from "./pages/404";

import Degree from "./pages/SingleDegree";
import Degrees from "./pages/Degrees";
import DegreeForm from "./components/displays/forms/DegreeForm";

import Cohort from "./pages/SingleCohort";
import Cohorts from "./pages/Cohorts";
import CohortForm from "./components/displays/forms/CohortForm";

import Module from "./pages/SingleModule";
import Modules from "./pages/Modules";
import ModuleDelivered from "./pages/ModuleDelivered";
import ModuleForm from "./components/displays/forms/ModuleForm";

import Students from "./pages/Students";
import Student from "./pages/SingleStudent";
import StudentForm from "./components/displays/forms/StudentForm";
import StudentGrade from "./pages/StudentGrade";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          
          <Route path="degrees" element={<Degrees />} />
          <Route path="degrees/:shortcode" element={<Degree />} />
          <Route path="degrees/new" element={<DegreeForm />} />

          <Route path="cohorts" element={<Cohorts />} />
          <Route path="cohorts/:id" element={<Cohort />} />
          <Route path="cohorts/new" element={<CohortForm />} />
 
          <Route path="modules" element={<Modules />} />
          <Route path="modules/:code" element={<Module />} />
          <Route path="modules/delivered/:delivered" element={<ModuleDelivered />} />
          <Route path="modules/new" element={<ModuleForm />} />
 
          <Route path="students" element={<Students />} />
          <Route path="students/:id" element={<Student />} />
          <Route path="students/new" element={<StudentForm />} />
          <Route path="students/:id/:code" element={<StudentGrade />} />

          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));