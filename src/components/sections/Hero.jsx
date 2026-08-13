import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Background from "../ui/Background";
import profile from "../../assets/image/profile.png";

export default function Hero() {
  const navigate = useNavigate();

  // ==========================================
  // 3D MOUSE PARALLAX
  // ==========================================

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 80,
    damping: 25,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 80,
    damping: 25,
  });

  const rotateX = useSpring(
    useTransform(smoothY, [-0.5, 0.5], [6, -6]),
    {
      stiffness: 80,
      damping: 25,
    }
  );

  const rotateY = useSpring(
    useTransform(smoothX, [-0.5, 0.5], [-8, 8]),
    {
      stiffness: 80,
      damping: 25,
    }
  );

  const imageX = useSpring(
    useTransform(smoothX, [-0.5, 0.5], [-10, 10]),
    {
      stiffness: 70,
      damping: 22,
    }
  );

  const imageY = useSpring(
    useTransform(smoothY, [-0.5, 0.5], [-10, 10]),
    {
      stiffness: 70,
      damping: 22,
    }
  );

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX / window.innerWidth - 0.5);
      mouseY.set(e.clientY / window.innerHeight - 0.5);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#060606]
        text-white
        flex
        items-center
        [perspective:1600px]
      "
    >
      <Background />

      {/* ==========================================
          AMBIENT GLOW
      ========================================== */}

      <div
        className="
          absolute
          right-[5%]
          top-1/2
          -translate-y-1/2
          w-[500px]
          h-[500px]
          rounded-full
          bg-violet-500/[0.04]
          blur-[150px]
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          left-[-200px]
          bottom-[-200px]
          w-[450px]
          h-[450px]
          rounded-full
          bg-indigo-500/[0.025]
          blur-[140px]
          pointer-events-none
        "
      />

      {/* ==========================================
          SUBTLE GRID
      ========================================== */}

      <div
        className="
          absolute
          inset-0
          pointer-events-none
          opacity-[0.018]
          bg-[linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)]
          bg-[size:90px_90px]
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
          bg-[radial-gradient(circle_at_center,transparent_25%,#060606_90%)]
        "
      />

      {/* ==========================================
          MAIN
      ========================================== */}

      <div
        className="
          relative
          z-10
          w-full
          max-w-7xl
          mx-auto
          px-6
          sm:px-8
          lg:px-12
          py-28
        "
      >
        <div
          className="
            grid
            lg:grid-cols-[1fr_0.9fr]
            items-center
            gap-16
            lg:gap-24
          "
        >
          {/* ==========================================
              LEFT
          ========================================== */}

          <div>

            {/* STATUS */}

            <motion.div
              initial={{
                opacity: 0,
                x: -20,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.7,
              }}
              className="
                flex
                items-center
                gap-3
                font-['Space_Grotesk']
                text-[9px]
                uppercase
                tracking-[3px]
                text-gray-500
              "
            >
              <span className="relative flex h-2 w-2">
                <span
                  className="
                    absolute
                    h-full
                    w-full
                    rounded-full
                    bg-violet-400
                    opacity-50
                    animate-ping
                  "
                />

                <span
                  className="
                    relative
                    h-2
                    w-2
                    rounded-full
                    bg-violet-400
                  "
                />
              </span>

              Hello, I'm Rohit
            </motion.div>

            {/* ==========================================
                HEADING
            ========================================== */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 45,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.9,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                mt-8
                font-['Space_Grotesk']
                font-bold
                text-[46px]
                sm:text-[56px]
                md:text-[66px]
                lg:text-[70px]
                xl:text-[78px]
                leading-[0.9]
                tracking-[-4px]
              "
            >
              I BUILD
              <br />

              <span className="text-white/35">
                WITH
              </span>{" "}

              <span
                className="
                  text-transparent
                  bg-clip-text
                  bg-gradient-to-r
                  from-violet-200
                  via-violet-400
                  to-indigo-500
                "
              >
                DATA.
              </span>
            </motion.h1>

            {/* LINE */}

            <motion.div
              initial={{
                width: 0,
              }}
              animate={{
                width: 100,
              }}
              transition={{
                delay: 0.8,
                duration: 0.7,
              }}
              className="
                mt-8
                h-px
                bg-gradient-to-r
                from-violet-400
                to-transparent
              "
            />

            {/* NAME */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.85,
              }}
              className="
                mt-6
                font-['Space_Grotesk']
              "
            >
              <div
                className="
                  text-xl
                  sm:text-2xl
                  font-semibold
                  tracking-tight
                "
              >
                Rohit Singh
              </div>

              <div
                className="
                  mt-1
                  text-xs
                  uppercase
                  tracking-[2px]
                  text-violet-400
                "
              >
                Data Scientist · AI Engineer
              </div>
            </motion.div>

            {/* DESCRIPTION */}

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1,
              }}
              className="
                mt-6
                max-w-lg
                font-['Space_Grotesk']
                text-sm
                leading-7
                text-gray-500
              "
            >
              Turning raw data into intelligent systems,
              meaningful insights and modern digital
              experiences powered by AI.
            </motion.p>

            {/* ==========================================
                BUTTONS
            ========================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1.15,
              }}
              className="
                mt-8
                flex
                flex-wrap
                gap-3
              "
            >
              <motion.button
                whileHover={{
                  y: -4,
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                onClick={() => {
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    });
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  px-7
                  py-3.5
                  rounded-full
                  bg-white
                  text-black
                  font-['Space_Grotesk']
                  text-xs
                  font-semibold
                  shadow-[0_15px_40px_rgba(255,255,255,.06)]
                "
              >
                <span className="relative z-10">
                  Explore Work
                  <span
                    className="
                      ml-2
                      inline-block
                      transition-transform
                      group-hover:translate-x-1
                    "
                  >
                    →
                  </span>
                </span>

                <span
                  className="
                    absolute
                    inset-0
                    bg-violet-200
                    -translate-x-full
                    transition-transform
                    duration-500
                    group-hover:translate-x-0
                  "
                />
              </motion.button>

              <motion.button
                whileHover={{
                  y: -4,
                  borderColor: "rgba(167,139,250,.5)",
                  color: "#c4b5fd",
                }}
                whileTap={{
                  scale: 0.97,
                }}
                onClick={() => {
                  document
                    .getElementById("about")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    });
                }}
                className="
                  px-7
                  py-3.5
                  rounded-full
                  border
                  border-white/[0.09]
                  bg-white/[0.015]
                  backdrop-blur-md
                  text-gray-500
                  font-['Space_Grotesk']
                  text-xs
                  font-semibold
                  transition-all
                "
              >
                About Me
              </motion.button>
            </motion.div>

            {/* ==========================================
                TECH
            ========================================== */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 1.35,
              }}
              className="
                mt-11
                flex
                flex-wrap
                gap-x-6
                gap-y-3
                font-['Space_Grotesk']
                text-[8px]
                uppercase
                tracking-[2.5px]
                text-gray-700
              "
            >
              <span>Python</span>
              <span>Machine Learning</span>
              <span>Deep Learning</span>
              <span>GenAI</span>
            </motion.div>
          </div>

          {/* ==========================================
              RIGHT
          ========================================== */}

          <div
            className="
              relative
              flex
              justify-center
              lg:justify-end
            "
          >
            <motion.div
              style={{
                rotateX,
                rotateY,
              }}
              initial={{
                opacity: 0,
                scale: 0.78,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 1.1,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                relative
                w-[290px]
                h-[290px]
                sm:w-[340px]
                sm:h-[340px]
                md:w-[390px]
                md:h-[390px]
                lg:w-[410px]
                lg:h-[410px]
                [transform-style:preserve-3d]
              "
            >

              {/* ========================================
                  BACK GLOW
              ======================================== */}

              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                  opacity: [0.35, 0.55, 0.35],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  -inset-16
                  rounded-full
                  bg-violet-500/[0.055]
                  blur-[90px]
                  [transform:translateZ(-120px)]
                "
              />

              {/* ========================================
                  OUTER RING
              ======================================== */}

              <motion.div
                animate={{
                  rotateZ: 360,
                }}
                transition={{
                  duration: 28,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  -inset-10
                  rounded-full
                  border
                  border-violet-400/[0.09]
                  [transform:translateZ(-60px)]
                "
              >
                <span
                  className="
                    absolute
                    top-1/2
                    -right-1
                    w-2
                    h-2
                    rounded-full
                    bg-violet-400
                    shadow-[0_0_20px_rgba(167,139,250,.9)]
                  "
                />
              </motion.div>

              {/* ========================================
                  SECOND RING
              ======================================== */}

              <motion.div
                animate={{
                  rotateZ: -360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  -inset-5
                  rounded-full
                  border
                  border-white/[0.07]
                  [transform:translateZ(-35px)]
                "
              >
                <span
                  className="
                    absolute
                    top-8
                    left-1/2
                    w-1.5
                    h-1.5
                    rounded-full
                    bg-white/40
                  "
                />
              </motion.div>

              {/* ========================================
                  IMAGE
              ======================================== */}

              <div
                className="
                  absolute
                  inset-0
                  overflow-hidden
                  rounded-full
                  border
                  border-white/[0.13]
                  bg-[#0d0d0f]
                  shadow-[0_45px_110px_rgba(0,0,0,.8)]
                  [transform:translateZ(35px)]
                "
              >
                <motion.img
                  src={profile}
                  alt="Rohit Singh"
                  style={{
                    x: imageX,
                    y: imageY,
                  }}
                  whileHover={{
                    scale: 1.055,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                  className="
                    absolute
                    inset-0
                    w-full
                    h-full
                    object-cover
                  "
                />

                {/* IMAGE COLOR */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-violet-500/[0.1]
                    via-transparent
                    to-black/40
                  "
                />

                {/* SHINE */}

                <motion.div
                  animate={{
                    x: ["-130%", "130%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatDelay: 4,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute
                    top-0
                    left-0
                    w-[35%]
                    h-full
                    skew-x-[-18deg]
                    bg-gradient-to-r
                    from-transparent
                    via-white/[0.09]
                    to-transparent
                  "
                />
              </div>

              {/* ========================================
                  INNER RING
              ======================================== */}

              <div
                className="
                  absolute
                  inset-3
                  rounded-full
                  border
                  border-white/[0.08]
                  [transform:translateZ(55px)]
                  pointer-events-none
                "
              />

              {/* ========================================
                  AI TEXT
              ======================================== */}

              <motion.div
                animate={{
                  y: [0, -9, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  -left-10
                  top-16
                  font-['Space_Grotesk']
                  text-4xl
                  font-bold
                  tracking-[-2px]
                  text-violet-400/[0.17]
                  [transform:translateZ(100px)]
                "
              >
                AI
              </motion.div>

              {/* ========================================
                  GLASS CARD
              ======================================== */}

              <motion.div
                animate={{
                  y: [0, 8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  -right-8
                  bottom-14
                  hidden
                  md:block
                  px-5
                  py-4
                  rounded-2xl
                  border
                  border-white/[0.09]
                  bg-[#09090b]/85
                  backdrop-blur-xl
                  shadow-[0_20px_50px_rgba(0,0,0,.45)]
                  [transform:translateZ(110px)]
                "
              >
                <div
                  className="
                    flex
                    items-center
                    gap-2
                    text-[7px]
                    uppercase
                    tracking-[2px]
                    text-gray-600
                  "
                >
                  <span
                    className="
                      w-1.5
                      h-1.5
                      rounded-full
                      bg-violet-400
                      shadow-[0_0_10px_rgba(167,139,250,.8)]
                    "
                  />

                  Focus
                </div>

                <div
                  className="
                    mt-1.5
                    font-['Space_Grotesk']
                    text-sm
                    font-semibold
                  "
                >
                  AI + ML
                </div>
              </motion.div>

              {/* ========================================
                  FLOATING DOT
              ======================================== */}

              <motion.div
                animate={{
                  scale: [1, 1.35, 1],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="
                  absolute
                  -right-3
                  top-12
                  w-3
                  h-3
                  rounded-full
                  bg-violet-400
                  shadow-[0_0_25px_rgba(167,139,250,.9)]
                  [transform:translateZ(130px)]
                "
              />

              {/* ========================================
                  SMALL LABEL
              ======================================== */}

              <motion.div
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                }}
                className="
                  absolute
                  -left-3
                  bottom-12
                  hidden
                  sm:block
                  px-3
                  py-2
                  rounded-lg
                  border
                  border-white/[0.06]
                  bg-black/40
                  backdrop-blur-md
                  font-['Space_Grotesk']
                  text-[7px]
                  uppercase
                  tracking-[2px]
                  text-gray-600
                  [transform:translateZ(90px)]
                "
              >
                Data → Intelligence
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ==========================================
          SCROLL
      ========================================== */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.7,
        }}
        className="
          absolute
          bottom-7
          left-1/2
          -translate-x-1/2
          flex
          flex-col
          items-center
          gap-3
          font-['Space_Grotesk']
          text-[7px]
          uppercase
          tracking-[4px]
          text-gray-700
        "
      >
        <span>Scroll</span>

        <motion.div
          animate={{
            height: [15, 28, 15],
            opacity: [0.25, 0.8, 0.25],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="
            w-px
            bg-gradient-to-b
            from-violet-400
            to-transparent
          "
        />
      </motion.div>
    </section>
  );
}