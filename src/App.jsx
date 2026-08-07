import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Loader from "./components/ui/Loader";
import Cursor from "./components/ui/Cursor";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import ProjectDetails from "./pages/ProjectDetails";

function Home() {
  return (
    <>
      <Cursor />
      <Navbar />

      <main className="bg-[#070707] text-white overflow-x-hidden">
        <Hero />
        <About />
        <Projects />
      </main>
    </>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader finish={() => setLoading(false)} />;
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/project/:id"
        element={
          <>
            <Cursor />
            <ProjectDetails />
          </>
        }
      />
    </Routes>
  );
}