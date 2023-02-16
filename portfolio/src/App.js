import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Typewriter from "typewriter-effect";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(false);

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
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
