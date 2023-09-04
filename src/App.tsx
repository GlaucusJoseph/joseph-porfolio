import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  About,
  Courses,
  MainNavbar,
  Technologies,
  WorkExperience,
} from "./components";

function App() {
  return (
    <>
      <MainNavbar />
      <About />
      <Technologies />
      <WorkExperience />
      <Courses />
    </>
  );
}

export default App;
