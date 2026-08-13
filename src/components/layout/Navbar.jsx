import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <motion.header
      initial={{
        y: -60,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        px-5
        sm:px-8
        lg:px-12
        py-6
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          flex
          justify-end
        "
      >
        <Link to="/contact">
          <motion.div
            initial={{
              opacity: 0,
              x: 20,
              filter: "blur(6px)",
            }}
            animate={{
              opacity: 1,
              x: 0,
              filter: "blur(0px)",
            }}
            transition={{
              delay: 0.5,
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover="hover"
            whileTap={{
              scale: 0.94,
            }}
            className="
              group
              relative
              flex
              items-center
              gap-2
              cursor-pointer
              font-['Space_Grotesk']
            "
          >
            {/* ==========================================
                LET'S TALK
            ========================================== */}

            <motion.span
              variants={{
                hover: {
                  x: -2,
                  color: "#a78bfa",
                },
              }}
              transition={{
                duration: 0.25,
              }}
              className="
                relative
                text-white
                text-sm
                sm:text-base
                font-medium
                transition-colors
                duration-300
              "
            >
              Let's Talk

              {/* UNDERLINE */}

              <motion.span
                variants={{
                  hover: {
                    width: "100%",
                  },
                }}
                initial={{
                  width: "0%",
                }}
                transition={{
                  duration: 0.35,
                  ease: "easeOut",
                }}
                className="
                  absolute
                  left-0
                  -bottom-1
                  h-px
                  bg-violet-400
                "
              />
            </motion.span>

            {/* ==========================================
                ARROW
            ========================================== */}

            <motion.span
              variants={{
                hover: {
                  x: 4,
                  y: -4,
                  rotate: 45,
                },
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
              className="
                text-xs
                text-gray-500
                group-hover:text-violet-400
                transition-colors
                duration-300
              "
            >
              ↗
            </motion.span>

            {/* ==========================================
                GLOW
            ========================================== */}

            <motion.span
              initial={{
                opacity: 0,
                scale: 0.7,
              }}
              variants={{
                hover: {
                  opacity: 1,
                  scale: 1,
                },
              }}
              transition={{
                duration: 0.3,
              }}
              className="
                absolute
                -inset-3
                rounded-full
                bg-violet-400/[0.06]
                blur-xl
                -z-10
                pointer-events-none
              "
            />
          </motion.div>
        </Link>
      </div>
    </motion.header>
  );
}