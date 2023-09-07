import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  About,
  Courses,
  MainNavbar,
  Technologies,
  WorkExperience,
  Projects,
} from "./components";

function App() {
  return (
    <>
      <MainNavbar />
      <About />
      <Technologies />
      <WorkExperience />
      <Courses />
      <Projects />
    </>
  );
}

export default App;
