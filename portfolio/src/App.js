import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Work from "./components/Work/Work";
import WorkPage from "./components/WorkPage/WorkPage";
import Loading from "./components/Loading/Loading";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <Loading
          title="Hello, I am Reito Serizawa"
          setLoading={setLoading}
          loading={loading}
        />
      ) : (
        <>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route
              exact
              path="/about"
              element={<About setLoading={setLoading} loading={loading} />}
            />
            <Route exact path="/work" element={<Work />} />
            <Route exact path="/work/:id" element={<WorkPage />} />
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
