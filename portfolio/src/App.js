import { useState } from "react";
import Typewriter from "typewriter-effect";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <div id="loading-parent">
          <div id="loading-child">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Hi, I am Reito Serizawa!")
                  .deleteAll()
                  .callFunction(() => setLoading(false))
                  .start();
              }}
            />
          </div>
        </div>
      ) : (
        <>
          <NavBar />
          <Home />
          <About />
        </>
      )}
    </>
  );
}

export default App;
