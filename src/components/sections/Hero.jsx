"use client";

import { motion } from "framer-motion";
import Background from "../ui/Background";
import profile from "../../assets/image/profile.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="
      relative
      min-h-screen
      overflow-hidden
      bg-[#050505]
      text-white
      flex
      items-center
      "
    >
      {/* Background */}

      <Background />

      {/* Left Glow */}

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        top-20
        left-10
        w-[500px]
        h-[500px]
        rounded-full
        bg-cyan-500/10
        blur-[150px]
        "
      />

      {/* Right Glow */}

      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        bottom-0
        right-0
        w-[450px]
        h-[450px]
        rounded-full
        bg-blue-500/10
        blur-[140px]
        "
      />

      {/* Container */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}

          <div>

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
                duration: .8,
              }}
              className="
              uppercase
              tracking-[8px]
              text-cyan-400
              font-medium
              "
            >
              Portfolio 2026
            </motion.p>

            <motion.h1
              initial={{
                opacity: 0,
                y: 100,
                filter: "blur(20px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 1,
              }}
              className="
              mt-6
              text-5xl
              md:text-7xl
              lg:text-[7rem]
              font-black
              leading-[0.9]
              "
            >
              Rohit
            </motion.h1>

            <motion.h1
              initial={{
                opacity: 0,
                y: 120,
                filter: "blur(20px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 1.2,
              }}
              className="
              text-5xl
              md:text-7xl
              lg:text-[7rem]
              font-black
              leading-[0.9]
              text-gray-300
              "
            >
              Singh
            </motion.h1>
            {/* Role */}

            <motion.h2
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.6,
                duration: 0.8,
              }}
              className="
              mt-8
              text-2xl
              md:text-3xl
              lg:text-4xl
              font-bold
              "
            >
              <span className="text-cyan-400">
                Data Scientist
              </span>

              <span className="text-white">
                {" "}• AI Engineer
              </span>
            </motion.h2>

            {/* Description */}

            <motion.p
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: .9,
                duration: .8,
              }}
              className="
              mt-8
              max-w-xl
              text-gray-400
              text-lg
              leading-9
              "
            >
              I build intelligent AI products,
              Machine Learning applications,
              Deep Learning models and modern web
              experiences using Python, React,
              OpenCV and Generative AI.
            </motion.p>

            {/* Buttons */}

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1.2,
              }}
              className="
              mt-12
              flex
              flex-wrap
              gap-5
              "
            >

              {/* View Projects */}

              <motion.button
                whileHover={{
                  scale: 1.08,
                  y: -4,
                }}
                whileTap={{
                  scale: .95,
                }}
                className="
                px-8
                py-4
                rounded-full
                bg-cyan-400
                text-black
                font-semibold
                shadow-[0_0_35px_rgba(34,211,238,.45)]
                transition-all
                duration-300
                "
              >
                View Projects
              </motion.button>

              {/* Download CV */}

              <motion.button
                whileHover={{
                  scale: 1.08,
                  borderColor: "#22d3ee",
                  color: "#22d3ee",
                }}
                whileTap={{
                  scale: .95,
                }}
                className="
                px-8
                py-4
                rounded-full
                border
                border-white/20
                bg-white/5
                backdrop-blur-xl
                font-semibold
                transition-all
                duration-300
                "
              >
                Download CV
              </motion.button>

            </motion.div>

          </div>

          {/* RIGHT */}

          <motion.div
            initial={{
              opacity: 0,
              x: 100,
            }}
            animate={{
              opacity: 1,
              x: 0,
              y: [0, -15, 0],
            }}
            transition={{
              opacity: {
                duration: 1,
              },
              x: {
                duration: 1,
              },
              y: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="
            flex
            justify-center
            "
          >

            <div className="relative">
              {/* Animated Glow */}

              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                absolute
                inset-0
                rounded-full
                bg-cyan-400/20
                blur-[120px]
                "
              />

              {/* Floating Border */}

              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                absolute
                -inset-4
                rounded-[40px]
                border
                border-cyan-400/20
                "
              />

              {/* Glass Background */}

              <div
                className="
                absolute
                inset-0
                rounded-[32px]
                bg-white/5
                backdrop-blur-2xl
                border
                border-white/10
                "
              />

              {/* Profile Image */}

              <motion.img
                src={profile}
                alt="Rohit Singh"
                whileHover={{
                  scale: 1.05,
                  rotate: -2,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                }}
                className="
                relative
                z-10
                w-[340px]
                md:w-[420px]
                lg:w-[470px]
                rounded-[30px]
                object-cover
                shadow-[0_20px_80px_rgba(0,0,0,.5)]
                "
              />

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}