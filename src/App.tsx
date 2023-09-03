import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainNavbar from "./components/MainNavbar";
import About from "./components/About";
import Technologies from "./components/Technologies";
import WorkExperience from "./components/WorkExperience";

function App() {
  return (
    <>
      <MainNavbar />
      <About />
      <Technologies />
      <WorkExperience/>
    </>
  );
}

export default App;
