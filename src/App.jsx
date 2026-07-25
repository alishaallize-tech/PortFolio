import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
function App() {
  return (
    <>
      {/* <h1 className="text-5xl text-center mt-20">
        My Portfolio
      </h1> */}
      <Navbar/>
      <Hero/>
      <About/>
    </>
  );
}

export default App;