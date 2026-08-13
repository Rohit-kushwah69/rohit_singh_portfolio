import { motion } from "framer-motion";

const particles = [
  { left: "8%", top: "20%", size: 3, duration: 5 },
  { left: "18%", top: "70%", size: 2, duration: 7 },
  { left: "32%", top: "15%", size: 2, duration: 6 },
  { left: "45%", top: "80%", size: 3, duration: 8 },
  { left: "60%", top: "22%", size: 2, duration: 5 },
  { left: "72%", top: "68%", size: 3, duration: 7 },
  { left: "86%", top: "30%", size: 2, duration: 6 },
  { left: "92%", top: "82%", size: 2, duration: 8 },
];

export default function Background() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* =========================================
          PREMIUM BASE
      ========================================= */}

      <div className="absolute inset-0 bg-[#06100C]" />


      {/* =========================================
          3D PERSPECTIVE SPACE
      ========================================= */}

      <div
        className="
          absolute
          inset-0
          [perspective:1200px]
        "
      >

        {/* =====================================
            LARGE 3D RING
        ===================================== */}

        <motion.div
          animate={{
            rotateX: [65, 75, 65],
            rotateZ: [0, 360],
          }}
          transition={{
            rotateX: {
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            },
            rotateZ: {
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            },
          }}
          className="
            absolute
            top-1/2
            left-1/2
            -translate-x-1/2
            -translate-y-1/2

            w-[650px]
            h-[650px]

            rounded-full

            border
            border-emerald-300/[0.10]

            [transform-style:preserve-3d]

            shadow-[0_0_50px_rgba(16,185,129,0.04)]
          "
        />


        {/* =====================================
            SECOND 3D RING
        ===================================== */}

        <motion.div
          animate={{
            rotateY: [0, 360],
            rotateX: [55, 65, 55],
          }}
          transition={{
            rotateY: {
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            },
            rotateX: {
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="
            absolute
            top-1/2
            left-1/2
            -translate-x-1/2
            -translate-y-1/2

            w-[480px]
            h-[480px]

            rounded-full

            border
            border-teal-300/[0.09]

            [transform-style:preserve-3d]
          "
        />


        {/* =====================================
            THIRD RING
        ===================================== */}

        <motion.div
          animate={{
            rotateX: 360,
            rotateY: 180,
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            absolute
            top-1/2
            left-1/2
            -translate-x-1/2
            -translate-y-1/2

            w-[300px]
            h-[300px]

            rounded-full

            border
            border-amber-200/[0.08]

            [transform-style:preserve-3d]
          "
        />


        {/* =====================================
            3D CORE
        ===================================== */}

        <motion.div
          animate={{
            rotateX: [0, 360],
            rotateY: [0, 360],
            y: [0, -20, 0],
          }}
          transition={{
            rotateX: {
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            },

            rotateY: {
              duration: 28,
              repeat: Infinity,
              ease: "linear",
            },

            y: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="
            absolute
            top-1/2
            left-1/2
            -translate-x-1/2
            -translate-y-1/2

            w-[120px]
            h-[120px]

            [transform-style:preserve-3d]
          "
        >

          {/* Cube Front */}

          <div
            className="
              absolute
              inset-0

              border
              border-emerald-300/20

              bg-emerald-400/[0.025]

              backdrop-blur-sm

              [transform:translateZ(60px)]
            "
          />


          {/* Cube Back */}

          <div
            className="
              absolute
              inset-0

              border
              border-emerald-300/10

              [transform:rotateY(180deg)_translateZ(60px)]
            "
          />


          {/* Cube Right */}

          <div
            className="
              absolute
              inset-0

              border
              border-teal-300/15

              [transform:rotateY(90deg)_translateZ(60px)]
            "
          />


          {/* Cube Left */}

          <div
            className="
              absolute
              inset-0

              border
              border-teal-300/10

              [transform:rotateY(-90deg)_translateZ(60px)]
            "
          />


          {/* Cube Top */}

          <div
            className="
              absolute
              inset-0

              border
              border-amber-200/15

              [transform:rotateX(90deg)_translateZ(60px)]
            "
          />


          {/* Cube Bottom */}

          <div
            className="
              absolute
              inset-0

              border
              border-amber-200/10

              [transform:rotateX(-90deg)_translateZ(60px)]
            "
          />

        </motion.div>

      </div>


      {/* =========================================
          CENTRAL LIGHT
      ========================================= */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.12, 0.28, 0.12],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute

          top-1/2
          left-1/2

          -translate-x-1/2
          -translate-y-1/2

          w-[500px]
          h-[500px]

          rounded-full

          bg-emerald-400/[0.035]

          blur-[120px]
        "
      />


      {/* =========================================
          FLOATING 3D PARTICLES
      ========================================= */}

      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className="
            absolute
            rounded-full
            bg-emerald-200
          "
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,

            boxShadow:
              "0 0 15px rgba(52,211,153,0.8)",
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            opacity: [0.15, 0.8, 0.15],
            scale: [0.8, 1.4, 0.8],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.4,
          }}
        />
      ))}


      {/* =========================================
          3D FLOOR GRID
      ========================================= */}

      <motion.div
        animate={{
          backgroundPositionY: ["0px", "80px"],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute

          bottom-[-20%]
          left-1/2

          -translate-x-1/2

          w-[130%]
          h-[55%]

          opacity-[0.12]

          [transform:perspective(500px)_rotateX(65deg)]

          origin-bottom

          bg-[linear-gradient(
            rgba(52,211,153,0.12)_1px,
            transparent_1px
          ),
          linear-gradient(
            90deg,
            rgba(52,211,153,0.12)_1px,
            transparent_1px
          )]

          bg-[size:80px_80px]
        "
      />


      {/* =========================================
          TOP LIGHT
      ========================================= */}

      <div
        className="
          absolute

          top-[-200px]
          left-1/2

          -translate-x-1/2

          w-[700px]
          h-[400px]

          rounded-full

          bg-emerald-300/[0.025]

          blur-[130px]
        "
      />


      {/* =========================================
          CHAMPAGNE LIGHT
      ========================================= */}

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.04, 0.12, 0.04],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute

          top-[25%]
          right-[12%]

          w-[180px]
          h-[180px]

          rounded-full

          bg-amber-200/[0.04]

          blur-[80px]
        "
      />


      {/* =========================================
          CINEMATIC VIGNETTE
      ========================================= */}

      <div
        className="
          absolute
          inset-0

          bg-[radial-gradient(
            ellipse_at_center,
            transparent_30%,
            rgba(0,5,3,0.72)_100%
          )]
        "
      />


      {/* =========================================
          BOTTOM FADE
      ========================================= */}

      <div
        className="
          absolute
          bottom-0
          left-0
          right-0

          h-[250px]

          bg-gradient-to-t
          from-[#06100C]
          to-transparent
        "
      />

    </div>
  );
}