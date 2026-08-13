import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect } from "react";

import Background from "../ui/Background";
import profile from "../../assets/image/profile.png";

const stats = [
  { number: "20+", title: "Projects" },
  { number: "2+", title: "Years Learning" },
  { number: "10+", title: "Certificates" },
  { number: "100%", title: "Passion" },
];

const skills = [
  "Python",
  "Machine Learning",
  "Deep Learning",
  "Computer Vision",
  "Generative AI",
  "Data Science",
];

export default function About() {
  // ==========================================
  // 3D EFFECT
  // ==========================================

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [5, -5]),
    {
      stiffness: 80,
      damping: 25,
    }
  );

  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-7, 7]),
    {
      stiffness: 80,
      damping: 25,
    }
  );

  const imageX = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-6, 6]),
    {
      stiffness: 70,
      damping: 20,
    }
  );

  const imageY = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [-6, 6]),
    {
      stiffness: 70,
      damping: 20,
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
      id="about"
      className="
        relative
        min-h-screen
        py-28
        lg:py-36
        overflow-hidden
        bg-[#060606]
        text-white
        [perspective:1700px]
      "
    >
      <Background />

      {/* ==========================================
          HERO STYLE VIGNETTE
      ========================================== */}

      <div
        className="
          absolute
          inset-0
          pointer-events-none
          bg-[radial-gradient(circle_at_center,transparent_20%,#060606_90%)]
        "
      />

      {/* ==========================================
          MAIN PURPLE GLOW
      ========================================== */}

      <div
        className="
          absolute
          right-[5%]
          top-1/2
          -translate-y-1/2
          w-[520px]
          h-[520px]
          rounded-full
          bg-violet-500/[0.04]
          blur-[150px]
          pointer-events-none
        "
      />

      {/* ==========================================
          SECONDARY INDIGO GLOW
      ========================================== */}

      <div
        className="
          absolute
          left-[-180px]
          bottom-[-180px]
          w-[450px]
          h-[450px]
          rounded-full
          bg-indigo-500/[0.025]
          blur-[140px]
          pointer-events-none
        "
      />

      {/* ==========================================
          TOP LEFT SUBTLE GLOW
      ========================================== */}

      <div
        className="
          absolute
          left-[15%]
          top-[-180px]
          w-[350px]
          h-[350px]
          rounded-full
          bg-violet-500/[0.018]
          blur-[120px]
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
          CONTENT
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
            TOP HEADER
        ========================================== */}

        <div
          className="
            flex
            flex-col
            lg:flex-row
            lg:items-end
            lg:justify-between
            gap-8
          "
        >

          {/* LEFT TITLE */}

          <div>

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
                duration: 0.7,
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
              <span>
                01
              </span>

              <span
                className="
                  w-10
                  h-px
                  bg-violet-400/50
                "
              />

              Profile
            </motion.div>

            <motion.h2
              initial={{
                opacity: 0,
                y: 35,
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
                font-semibold
                text-[48px]
                sm:text-[58px]
                md:text-[68px]
                lg:text-[76px]
                leading-[0.9]
                tracking-[-4px]
              "
            >
              BEYOND

              <br />

              <span className="text-white/20">
                THE CODE.
              </span>
            </motion.h2>

          </div>

          {/* RIGHT INTRO */}

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
              delay: 0.25,
            }}
            className="
              max-w-sm
              pb-2
              font-['Space_Grotesk']
              text-sm
              leading-7
              text-gray-500
            "
          >
            A little insight into the person,
            mindset and technologies behind
            the work.
          </motion.p>

        </div>

        {/* ==========================================
            PROFILE AREA
        ========================================== */}

        <div
          className="
            mt-20
            grid
            lg:grid-cols-[0.9fr_1.1fr]
            gap-16
            lg:gap-24
            items-center
          "
        >

          {/* ========================================
              IMAGE
          ======================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -70,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 1,
            }}
            className="
              relative
              flex
              justify-center
              lg:justify-start
            "
          >

            <motion.div
              style={{
                rotateX,
                rotateY,
              }}
              className="
                relative
                w-[285px]
                h-[380px]
                sm:w-[330px]
                sm:h-[430px]
                md:w-[370px]
                md:h-[475px]
                [transform-style:preserve-3d]
              "
            >

              {/* ========================================
                  BACK CARD
              ======================================== */}

              <div
                className="
                  absolute
                  inset-0
                  rounded-[36px]
                  border
                  border-violet-400/[0.12]
                  [transform:translateZ(-60px)_translateX(24px)_translateY(24px)]
                "
              />

              {/* ========================================
                  MIDDLE CARD
              ======================================== */}

              <div
                className="
                  absolute
                  inset-0
                  rounded-[36px]
                  border
                  border-white/[0.06]
                  [transform:translateZ(-30px)_translateX(12px)_translateY(12px)]
                "
              />

              {/* ========================================
                  IMAGE GLOW
              ======================================== */}

              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                className="
                  absolute
                  -inset-16
                  rounded-full
                  bg-violet-500/[0.05]
                  blur-[80px]
                  [transform:translateZ(-100px)]
                "
              />

              {/* ========================================
                  MAIN IMAGE
              ======================================== */}

              <div
                className="
                  absolute
                  inset-0
                  overflow-hidden
                  rounded-[36px]
                  border
                  border-white/[0.12]
                  bg-[#0d0d0f]
                  shadow-[0_50px_110px_rgba(0,0,0,.8)]
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
                    scale: 1.045,
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

                {/* IMAGE OVERLAY */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black
                    via-transparent
                    to-violet-500/[0.07]
                  "
                />

                {/* ========================================
                    TOP INFO
                ======================================== */}

                <div
                  className="
                    absolute
                    top-6
                    left-6
                    right-6
                    flex
                    justify-between
                    font-['Space_Grotesk']
                    text-[8px]
                    uppercase
                    tracking-[3px]
                  "
                >

                  <span className="text-violet-300">
                    RS / 01
                  </span>

                  <span className="text-white/25">
                    2026
                  </span>

                </div>

                {/* ========================================
                    BOTTOM INFO
                ======================================== */}

                <div
                  className="
                    absolute
                    left-6
                    right-6
                    bottom-7
                  "
                >

                  <div
                    className="
                      text-[8px]
                      uppercase
                      tracking-[3px]
                      text-violet-300
                    "
                  >
                    Data Scientist
                  </div>

                  <div
                    className="
                      mt-2
                      font-['Space_Grotesk']
                      text-xl
                      font-semibold
                    "
                  >
                    Rohit Singh
                  </div>

                </div>

              </div>

              {/* ========================================
                  FLOATING AI
              ======================================== */}

              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="
                  absolute
                  -left-8
                  top-16
                  hidden
                  md:block
                  font-['Space_Grotesk']
                  text-4xl
                  font-bold
                  text-violet-400/[0.12]
                  [transform:translateZ(100px)]
                "
              >
                AI
              </motion.div>

              {/* ========================================
                  FLOATING CARD
              ======================================== */}

              <motion.div
                animate={{
                  y: [0, 7, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="
                  absolute
                  -right-8
                  bottom-20
                  hidden
                  md:block
                  px-4
                  py-3
                  rounded-2xl
                  border
                  border-white/[0.08]
                  bg-[#09090b]/90
                  backdrop-blur-xl
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
                    "
                  />

                  Currently Learning

                </div>

                <div
                  className="
                    mt-1
                    font-['Space_Grotesk']
                    text-xs
                    font-semibold
                  "
                >
                  AI / ML
                </div>

              </motion.div>

            </motion.div>

          </motion.div>

          {/* ========================================
              RIGHT CONTENT
          ======================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 1,
            }}
          >

            {/* SMALL TITLE */}

            <div
              className="
                font-['Space_Grotesk']
                text-[9px]
                uppercase
                tracking-[3px]
                text-violet-400
              "
            >
              Who I am
            </div>

            {/* MAIN TITLE */}

            <h3
              className="
                mt-5
                max-w-2xl
                font-['Space_Grotesk']
                text-3xl
                sm:text-4xl
                md:text-5xl
                font-semibold
                leading-[1.05]
                tracking-[-2px]
              "
            >
              I build with

              <span className="text-white/25">
                {" "}curiosity,
              </span>

              <br />

              learn with

              <span className="text-violet-400">
                {" "}purpose.
              </span>
            </h3>

            {/* DESCRIPTION */}

            <div className="mt-8 space-y-5">

              <p
                className="
                  max-w-xl
                  font-['Space_Grotesk']
                  text-sm
                  sm:text-[15px]
                  leading-7
                  text-gray-500
                "
              >
                I'm Rohit Singh, a Data Scientist and
                AI Engineer passionate about solving
                real-world problems through data,
                machine learning and modern AI.
              </p>

              <p
                className="
                  max-w-xl
                  font-['Space_Grotesk']
                  text-sm
                  sm:text-[15px]
                  leading-7
                  text-gray-500
                "
              >
                I enjoy taking an idea from a simple
                concept to a working product — from
                exploring data and training models to
                building useful digital experiences.
              </p>

            </div>

            {/* ========================================
                SKILLS
            ======================================== */}

            <div className="mt-9">

              <div
                className="
                  font-['Space_Grotesk']
                  text-[8px]
                  uppercase
                  tracking-[3px]
                  text-gray-600
                "
              >
                Technologies I Work With
              </div>

              <div
                className="
                  mt-4
                  flex
                  flex-wrap
                  gap-2
                "
              >

                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: index * 0.07,
                    }}
                    whileHover={{
                      y: -3,
                    }}
                    className="
                      px-3
                      py-2
                      rounded-full
                      border
                      border-white/[0.07]
                      bg-white/[0.02]
                      font-['Space_Grotesk']
                      text-[8px]
                      uppercase
                      tracking-[1.5px]
                      text-gray-500
                      hover:border-violet-400/30
                      hover:text-violet-300
                      transition-all
                    "
                  >
                    {skill}
                  </motion.div>
                ))}

              </div>

            </div>

          </motion.div>

        </div>

        {/* ==========================================
            STATS
        ========================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            mt-20
            lg:mt-24
            grid
            grid-cols-2
            lg:grid-cols-4
            border
            border-white/[0.07]
            rounded-3xl
            overflow-hidden
            bg-white/[0.015]
          "
        >

          {stats.map((item, index) => (
            <motion.div
              key={item.title}
              whileHover={{
                backgroundColor:
                  "rgba(255,255,255,0.025)",
              }}
              className={`
                relative
                p-6
                sm:p-8
                transition-all

                ${
                  index !== stats.length - 1
                    ? "border-r border-white/[0.06]"
                    : ""
                }

                ${
                  index < 2
                    ? "border-b lg:border-b-0 border-white/[0.06]"
                    : ""
                }
              `}
            >

              <div
                className="
                  font-['Space_Grotesk']
                  text-3xl
                  sm:text-4xl
                  font-semibold
                  tracking-[-2px]
                "
              >
                {item.number}
              </div>

              <div
                className="
                  mt-2
                  font-['Space_Grotesk']
                  text-[8px]
                  uppercase
                  tracking-[2px]
                  text-gray-600
                "
              >
                {item.title}
              </div>

              <div
                className="
                  mt-5
                  h-px
                  w-8
                  bg-violet-400/40
                "
              />

            </motion.div>
          ))}

        </motion.div>

        {/* ==========================================
            BOTTOM LINE
        ========================================== */}

        <div
          className="
            mt-8
            flex
            flex-col
            sm:flex-row
            sm:justify-between
            gap-3
            font-['Space_Grotesk']
            text-[8px]
            uppercase
            tracking-[3px]
            text-gray-700
          "
        >

          <span>
            Data → Intelligence → Experience
          </span>

          <span>
            Rohit Singh / 2026
          </span>

        </div>

      </div>
    </section>
  );
}