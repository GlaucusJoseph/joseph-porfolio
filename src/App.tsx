import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainNavbar from "./components/MainNavbar";
import About from "./components/About";
import Technologies from "./components/Technologies";

function App() {
  return (
    <>
      <MainNavbar />
      <About />
      <Technologies />
    </>
  );
}

export default App;
