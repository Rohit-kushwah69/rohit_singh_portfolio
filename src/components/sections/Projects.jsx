import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import Background from "../ui/Background";
import { projects } from "../../data/projects";

export default function Projects() {
  const navigate = useNavigate();

  const [activeProject, setActiveProject] = useState(null);

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  /* ==========================================
      BACK TO PROJECTS SCROLL
  ========================================== */

  useEffect(() => {
    if (window.location.hash === "#projects") {
      setTimeout(() => {
        document
          .getElementById("projects")
          ?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
      }, 100);
    }
  }, []);

  /* ==========================================
      MOUSE MOVE
  ========================================== */

  const handleMouseMove = (e) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  /* ==========================================
      OPEN PROJECT
  ========================================== */

  const handleProjectClick = (project) => {
    navigate(`/projects/${project.id}`);
  };

  return (
    <section
      id="projects"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#070707]
        text-white
        py-28
        sm:py-36
        lg:py-44
      "
      onMouseMove={handleMouseMove}
    >

      {/* ==========================================
          BACKGROUND
      ========================================== */}

      <Background />


      {/* ==========================================
          GRID
      ========================================== */}

      <div
        className="
          absolute
          inset-0
          pointer-events-none
          opacity-[0.012]
          bg-[linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)]
          bg-[size:100px_100px]
        "
      />


      {/* ==========================================
          VIGNETTE
      ========================================== */}

      <div
        className="
          absolute
          inset-0
          pointer-events-none
          bg-[radial-gradient(circle_at_center,transparent_20%,#070707_92%)]
        "
      />


      {/* ==========================================
          FLOATING CURSOR IMAGE
      ========================================== */}

      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
              rotate: -5,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.8,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
              fixed
              z-50
              hidden
              lg:block
              pointer-events-none
              w-[330px]
              h-[220px]
              overflow-hidden
              rounded-[22px]
              border
              border-white/10
              bg-[#0b0b0d]
              shadow-[0_30px_100px_rgba(0,0,0,.7)]
            "
            style={{
              left: mousePosition.x + 20,
              top: mousePosition.y - 110,
            }}
          >

            <motion.img
              key={activeProject.image}
              src={activeProject.image}
              alt={activeProject.title}
              initial={{
                scale: 1.15,
              }}
              animate={{
                scale: 1,
              }}
              transition={{
                duration: 0.5,
              }}
              className="
                w-full
                h-full
                object-cover
              "
            />

            {/* Image Overlay */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/70
                via-transparent
                to-transparent
              "
            />

            {/* Image Info */}

            <div
              className="
                absolute
                left-5
                right-5
                bottom-4
                flex
                items-center
                justify-between
                font-['Space_Grotesk']
              "
            >

              <span
                className="
                  text-[8px]
                  uppercase
                  tracking-[2px]
                  text-white/60
                "
              >
                {activeProject.category}
              </span>

              <span
                className="
                  text-[8px]
                  uppercase
                  tracking-[2px]
                  text-white/30
                "
              >
                {activeProject.year}
              </span>

            </div>

          </motion.div>
        )}
      </AnimatePresence>


      {/* ==========================================
          MAIN
      ========================================== */}

      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-6
          sm:px-8
          lg:px-12
        "
      >

        {/* ==========================================
            HEADER
        ========================================== */}

        <div
          className="
            grid
            lg:grid-cols-[1fr_320px]
            gap-10
            items-end
          "
        >

          <div>

            {/* Selected Work */}

            <motion.div
              initial={{
                opacity: 0,
                x: -20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
              }}
              className="
                flex
                items-center
                gap-3
                font-['Space_Grotesk']
                text-[9px]
                uppercase
                tracking-[4px]
                text-violet-400
              "
            >

              <span
                className="
                  w-8
                  h-px
                  bg-violet-400
                "
              />

              Selected Work

            </motion.div>


            {/* Heading */}

            <motion.h2
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.9,
              }}
              className="
                mt-6
                font-['Space_Grotesk']
                text-5xl
                sm:text-7xl
                md:text-8xl
                lg:text-[110px]
                font-bold
                leading-[0.82]
                tracking-[-7px]
              "
            >

              WORK

              <span className="text-white/20">
                {" "}LAB.
              </span>

            </motion.h2>

          </div>


          {/* Description */}

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.2,
            }}
            className="
              max-w-sm
              font-['Space_Grotesk']
              text-sm
              leading-7
              text-gray-600
            "
          >
            A collection of experiments, products and
            intelligent systems built around data,
            technology and curiosity.
          </motion.p>

        </div>


        {/* ==========================================
            HEADER LINE
        ========================================== */}

        <div
          className="
            mt-12
            h-px
            bg-white/[0.07]
          "
        />


        {/* ==========================================
            PROJECT LIST
        ========================================== */}

        <div className="mt-8">

          {projects.map((project, index) => (

            <motion.div
              key={project.id}

              initial={{
                opacity: 0,
                y: 25,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              viewport={{
                once: true,
              }}

              transition={{
                duration: 0.6,
                delay: index * 0.05,
              }}

              onMouseEnter={() => setActiveProject(project)}

              onMouseLeave={() => setActiveProject(null)}

              onClick={() => handleProjectClick(project)}

              className="
                group
                relative
                cursor-pointer
                border-b
                border-white/[0.06]
              "
            >

              <div
                className="
                  relative
                  py-8
                  sm:py-10
                  lg:py-12
                  flex
                  items-center
                  gap-5
                  sm:gap-8
                  lg:gap-10
                "
              >

                {/* ==================================
                    NUMBER
                ================================== */}

                <div
                  className="
                    w-8
                    sm:w-12
                    shrink-0
                    font-['Space_Grotesk']
                    text-[9px]
                    sm:text-[10px]
                    uppercase
                    tracking-[2px]
                    text-gray-700
                    group-hover:text-violet-400
                    transition-colors
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </div>


                {/* ==================================
                    TITLE
                ================================== */}

                <div className="flex-1 min-w-0">

                  <h3
                    className="
                      font-['Space_Grotesk']
                      text-2xl
                      sm:text-4xl
                      md:text-5xl
                      lg:text-6xl
                      font-semibold
                      tracking-[-2px]
                      truncate
                      text-gray-300
                      group-hover:text-white
                      group-hover:translate-x-2
                      transition-all
                      duration-500
                    "
                  >
                    {project.title}
                  </h3>


                  {/* ==================================
                      META
                  ================================== */}

                  <div
                    className="
                      mt-3
                      flex
                      flex-wrap
                      items-center
                      gap-x-4
                      gap-y-2
                      font-['Space_Grotesk']
                      text-[7px]
                      sm:text-[8px]
                      uppercase
                      tracking-[2px]
                      text-gray-700
                    "
                  >

                    <span>
                      {project.category}
                    </span>

                    <span className="text-white/10">
                      /
                    </span>

                    <span>
                      {project.year}
                    </span>

                    <span className="hidden sm:block text-white/10">
                      /
                    </span>

                    <span className="hidden sm:block">
                      {project.tech
                        .slice(0, 3)
                        .join(" · ")}
                    </span>

                  </div>

                </div>


                {/* ==================================
                    ARROW
                ================================== */}

                <motion.div
                  whileHover={{
                    rotate: 45,
                  }}
                  className="
                    shrink-0
                    w-10
                    h-10
                    sm:w-12
                    sm:h-12
                    rounded-full
                    border
                    border-white/[0.07]
                    flex
                    items-center
                    justify-center
                    text-gray-600
                    group-hover:border-violet-400/40
                    group-hover:bg-violet-400
                    group-hover:text-black
                    transition-all
                    duration-400
                  "
                >

                  <FiArrowUpRight size={18} />

                </motion.div>

              </div>


              {/* ==================================
                  MOBILE IMAGE
              ================================== */}

              <div
                className="
                  lg:hidden
                  h-0
                  overflow-hidden
                  group-hover:h-[210px]
                  transition-all
                  duration-500
                "
              >

                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full
                    h-full
                    object-cover
                    rounded-[20px]
                  "
                />

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}