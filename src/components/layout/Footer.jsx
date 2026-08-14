import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiMail,
} from "react-icons/fi";

import Background from "../ui/Background";

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/Rohit-kushwah69",
    icon: FiGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/rohit-kushwah-3512b0301/",
    icon: FiLinkedin,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/therohitkushwah___",
    icon: FiInstagram,
  },
  {
    name: "Email",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=rk6109744@gmail.com",
    icon: FiMail,
  },
];

export default function Footer() {
  return (
    <footer
      className="
        relative
        overflow-hidden
        min-h-screen
        bg-[#060606]
        text-white
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
          HERO PURPLE GLOW
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
          HERO INDIGO GLOW
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
          HERO TOP GLOW
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
          HERO GRID
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
          ROHIT BACKGROUND WATERMARK
      ========================================== */}

      <div
        className="
          absolute
          inset-x-0
          bottom-[-90px]
          flex
          justify-center
          pointer-events-none
          select-none
          overflow-hidden
        "
      >
        <motion.span
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
          className="
            font-['Space_Grotesk']
            font-bold
            text-[170px]
            sm:text-[250px]
            md:text-[330px]
            lg:text-[420px]
            xl:text-[500px]
            leading-none
            tracking-[-15px]
            text-white/[0.018]
            whitespace-nowrap
          "
        >
          ROHIT
        </motion.span>
      </div>

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
            TOP LINE
        ========================================== */}

        <div className="pt-10">
          <div className="h-px bg-white/[0.07]" />
        </div>

        {/* ==========================================
            CLOSING STATEMENT
        ========================================== */}

        <div
          className="
            py-24
            sm:py-32
            lg:py-40
            text-center
          "
        >

          {/* ==========================================
              LABEL
          ========================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 15,
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
            }}
            className="
              flex
              items-center
              justify-center
              gap-4
              font-['Space_Grotesk']
              text-[8px]
              uppercase
              tracking-[4px]
              text-gray-600
            "
          >
            <span className="w-8 h-px bg-white/20" />

            Thanks for stopping by

            <span className="w-8 h-px bg-white/20" />
          </motion.div>

          {/* ==========================================
              MAIN HEADING
          ========================================== */}

          <motion.h2
            initial={{
              opacity: 0,
              y: 60,
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
              delay: 0.1,
            }}
            className="
              mt-8
              font-['Space_Grotesk']
              text-[48px]
              sm:text-[68px]
              md:text-[88px]
              lg:text-[110px]
              font-bold
              leading-[0.82]
              tracking-[-7px]
            "
          >
            LET'S MAKE

            <br />

            <span className="text-white/20">
              SOMETHING GREAT.
            </span>
          </motion.h2>

          {/* ==========================================
              DESCRIPTION
          ========================================== */}

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
              duration: 0.7,
              delay: 0.3,
            }}
            className="
              mx-auto
              mt-8
              max-w-md
              font-['Space_Grotesk']
              text-sm
              leading-7
              text-gray-600
            "
          >
            I'm always open to interesting ideas,
            collaborations and opportunities to build
            something meaningful.
          </motion.p>

          {/* ==========================================
              EMAIL BUTTON
          ========================================== */}

          <motion.a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=rk6109744@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.45,
            }}
            whileHover={{
              y: -5,
            }}
            className="
    group
    inline-flex
    items-center
    gap-4
    mt-9
    px-6
    py-3
    rounded-full
    border
    border-white/[0.09]
    bg-white/[0.025]
    backdrop-blur-xl
    font-['Space_Grotesk']
    text-sm
    text-gray-300
    hover:border-violet-400/30
    hover:text-white
    transition-all
    duration-300
  "
          >
            rk6109744@gmail.com

            <span
              className="
      flex
      items-center
      justify-center
      w-8
      h-8
      rounded-full
      bg-white
      text-black
      transition-transform
      duration-300
      group-hover:rotate-45
    "
            >
              <FiArrowUpRight size={15} />
            </span>
          </motion.a>

        </div>

        {/* ==========================================
            SOCIALS
        ========================================== */}

        <div
          className="
            border-y
            border-white/[0.06]
            py-6
            flex
            flex-col
            sm:flex-row
            sm:items-center
            sm:justify-between
            gap-5
          "
        >

          {/* LEFT */}

          <div
            className="
              font-['Space_Grotesk']
              text-[8px]
              uppercase
              tracking-[3px]
              text-gray-700
            "
          >
            Connect with me
          </div>

          {/* SOCIAL LINKS */}

          <div
            className="
              flex
              flex-wrap
              items-center
              gap-3
              sm:gap-5
            "
          >

            {socials.map((social, index) => {
              const Icon = social.icon;

              return (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target={
                    social.name === "Email"
                      ? undefined
                      : "_blank"
                  }
                  rel={
                    social.name === "Email"
                      ? undefined
                      : "noopener noreferrer"
                  }
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
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -3,
                  }}
                  className="
                    flex
                    items-center
                    gap-2
                    px-3
                    py-2
                    rounded-full
                    border
                    border-transparent
                    hover:border-white/[0.08]
                    hover:bg-white/[0.025]
                    text-gray-600
                    hover:text-white
                    transition-all
                  "
                >

                  <Icon size={13} />

                  <span
                    className="
                      font-['Space_Grotesk']
                      text-[9px]
                    "
                  >
                    {social.name}
                  </span>

                </motion.a>
              );
            })}

          </div>

        </div>

        {/* ==========================================
            BOTTOM
        ========================================== */}

        <div
          className="
            py-7
            flex
            flex-col
            md:flex-row
            md:items-center
            md:justify-between
            gap-5
          "
        >

          {/* COPYRIGHT */}

          <div
            className="
              font-['Space_Grotesk']
              text-[8px]
              uppercase
              tracking-[2px]
              text-gray-700
            "
          >
            © {new Date().getFullYear()} Rohit Singh
          </div>

          {/* CENTER */}

          <div
            className="
              font-['Space_Grotesk']
              text-[8px]
              uppercase
              tracking-[3px]
              text-gray-700
            "
          >
            Data Scientist · AI Engineer
          </div>

          {/* BACK TO TOP */}

          <motion.button
            whileHover={{
              y: -3,
            }}
            whileTap={{
              scale: 0.95,
            }}
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="
              group
              flex
              items-center
              gap-3
              font-['Space_Grotesk']
              text-[8px]
              uppercase
              tracking-[2px]
              text-gray-600
              hover:text-white
              transition-colors
            "
          >
            Back to top

            <span
              className="
                flex
                items-center
                justify-center
                w-7
                h-7
                rounded-full
                border
                border-white/[0.08]
                group-hover:border-violet-400/30
                transition-all
              "
            >
              ↑
            </span>

          </motion.button>

        </div>

      </div>
    </footer>
  );
}