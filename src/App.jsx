import { useEffect, useState } from "react";
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Loader from "./components/ui/Loader";
import SocialRail from "./components/ui/SocialRail";
// import Cursor from "./components/ui/Cursor";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";

import ProjectDetails from "./pages/ProjectDetails";


/* =====================================================
   HOME PAGE
===================================================== */

function Home() {
  return (
    <>
      {/* <Cursor /> */}

      <Navbar />

      <main
        className="
          min-h-screen
          bg-[#070707]
          text-white
          overflow-x-hidden
        "
      >
        <Hero />

        <About />

        <Projects />

        <Footer />
      </main>
    </>
  );
}


/* =====================================================
   CONTACT PAGE
===================================================== */

function ContactPage() {
  return (
    <>
      <Navbar />

      <main
        className="
          min-h-screen
          bg-[#070707]
          text-white
          overflow-x-hidden
        "
      >
        <Contact />
      </main>
    </>
  );
}


/* =====================================================
   PROJECT DETAILS PAGE
===================================================== */

function ProjectDetailsPage() {
  return (
    <main
      className="
        min-h-screen
        bg-[#050505]
        text-white
        overflow-x-hidden
      "
    >
      <ProjectDetails />
    </main>
  );
}


/* =====================================================
   APP
===================================================== */

export default function App() {
  const [loading, setLoading] = useState(true);


  /* ===================================================
     LOADER
  =================================================== */

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);

    return () => {
      clearTimeout(timer);
    };
  }, []);


  /* ===================================================
     SHOW LOADER
  =================================================== */

  if (loading) {
    return (
      <Loader
        finish={() => setLoading(false)}
      />
    );
  }


  /* ===================================================
     ROUTES
  =================================================== */

  return (
    <>
      {/* ================================================
          SOCIAL RAIL

          Website ke har page par fixed rahega.
      ================================================ */}

      <SocialRail />


      <Routes>

        {/* ==============================================
            HOME

            /
            ↓
            Home Page
        ============================================== */}

        <Route
          path="/"
          element={<Home />}
        />


        {/* ==============================================
            CONTACT

            /contact
            ↓
            Contact Page
        ============================================== */}

        <Route
          path="/contact"
          element={<ContactPage />}
        />


        {/* ==============================================
            PROJECT DETAILS

            /projects/1
            /projects/2
            /projects/3
            ↓
            Project Details
        ============================================== */}

        <Route
          path="/projects/:id"
          element={<ProjectDetailsPage />}
        />


        {/* ==============================================
            DEFAULT / UNKNOWN ROUTE

            Agar koi galat URL open ho:
            
            /abc
            /hello
            /random

            to automatically Home par jayega.
        ============================================== */}

        <Route
          path="*"
          element={
            <Navigate
              to="/"
              replace
            />
          }
        />

      </Routes>
    </>
  );
}