import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiMail,
  FiArrowLeft,
} from "react-icons/fi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Background from "../ui/Background";

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/Rohit-kushwah69",
    icon: FiGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: FiLinkedin,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/",
    icon: FiInstagram,
  },
];

export default function Contact() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent("Portfolio Contact");

    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href =
      `mailto:your@email.com?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#060606]
        text-white
        py-8
        sm:py-10
        lg:py-12
      "
    >
      <Background />

      {/* ==========================================
          HERO STYLE BACKGROUND
      ========================================== */}

      <div
        className="
          absolute
          inset-0
          pointer-events-none
          bg-[radial-gradient(circle_at_50%_35%,transparent_10%,#060606_88%)]
        "
      />

      {/* Purple Glow */}

      <div
        className="
          absolute
          top-[-180px]
          right-[-150px]
          w-[550px]
          h-[550px]
          rounded-full
          bg-violet-500/[0.035]
          blur-[160px]
          pointer-events-none
        "
      />

      {/* Indigo Glow */}

      <div
        className="
          absolute
          bottom-[-200px]
          left-[-180px]
          w-[500px]
          h-[500px]
          rounded-full
          bg-indigo-500/[0.025]
          blur-[150px]
          pointer-events-none
        "
      />

      {/* Grid */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.012]
          pointer-events-none
          bg-[linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)]
          bg-[size:100px_100px]
        "
      />

      {/* ==========================================
          BACKGROUND NAME
      ========================================== */}

      <div
        className="
          absolute
          left-1/2
          bottom-[-80px]
          -translate-x-1/2
          w-full
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
          }}
          className="
            whitespace-nowrap
            font-['Space_Grotesk']
            font-bold
            text-[130px]
            sm:text-[200px]
            md:text-[280px]
            lg:text-[380px]
            xl:text-[470px]
            leading-none
            tracking-[-15px]
            text-white/[0.018]
          "
        >
          ROHIT SINGH
        </motion.span>
      </div>

      {/* ==========================================
          MAIN CONTAINER
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
            TOP NAV
        ========================================== */}

        <div
          className="
            mt-6
            flex
            items-center
            justify-between
            pb-6
            border-b
            border-white/[0.06]
          "
        >

          {/* BACK HOME */}

          <motion.button
            onClick={() => navigate("/")}
            whileHover={{
              x: -4,
            }}
            whileTap={{
              scale: 0.96,
            }}
            className="
              group
              flex
              items-center
              gap-3
              font-['Space_Grotesk']
              text-[9px]
              uppercase
              tracking-[2.5px]
              text-gray-600
              hover:text-white
              transition-colors
            "
          >

            <span
              className="
                flex
                items-center
                justify-center
                w-8
                h-8
                rounded-full
                border
                border-white/[0.08]
                group-hover:border-violet-400/30
                transition-all
              "
            >
              <FiArrowLeft size={14} />
            </span>

            Back to Home

          </motion.button>

          {/* PAGE NUMBER */}

          <div
            className="
              font-['Space_Grotesk']
              text-[8px]
              uppercase
              tracking-[4px]
              text-gray-700
            "
          >
            04 / Contact
          </div>

        </div>

        {/* ==========================================
            HEADER
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
          className="mt-12 sm:mt-16"
        >

          <div
            className="
              flex
              items-center
              gap-3
              font-['Space_Grotesk']
              text-[9px]
              uppercase
              tracking-[5px]
              text-violet-400
            "
          >

            <span className="w-8 h-px bg-violet-400/50" />

            Let's Connect

            <span className="w-8 h-px bg-violet-400/50" />

          </div>

          <div
            className="
              mt-8
              flex
              flex-col
              lg:flex-row
              lg:items-end
              lg:justify-between
              gap-8
            "
          >

            <h1
              className="
                font-['Space_Grotesk']
                font-semibold
                text-[55px]
                sm:text-[72px]
                md:text-[90px]
                lg:text-[112px]
                leading-[0.82]
                tracking-[-7px]
              "
            >
              LET'S TALK
              <span className="text-white/20">.</span>
            </h1>

            <p
              className="
                max-w-sm
                pb-2
                font-['Space_Grotesk']
                text-sm
                leading-7
                text-gray-500
              "
            >
              Have an idea worth building?
              Tell me about it and let's create
              something meaningful together.
            </p>

          </div>

        </motion.div>

        {/* ==========================================
            CONTENT
        ========================================== */}

        <div
          className="
            mt-12
            lg:mt-16
            grid
            lg:grid-cols-[1fr_1.1fr]
            gap-12
            lg:gap-24
          "
        >

          {/* ==========================================
              LEFT SIDE
          ========================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
          >

            <div
              className="
                font-['Space_Grotesk']
                text-[8px]
                uppercase
                tracking-[4px]
                text-gray-700
              "
            >
              Direct Contact
            </div>

            {/* EMAIL */}

            <a
              href="mailto:your@email.com"
              className="
                group
                block
                mt-7
                pb-7
                border-b
                border-white/[0.06]
              "
            >

              <div
                className="
                  flex
                  items-center
                  justify-between
                "
              >

                <div
                  className="
                    flex
                    items-center
                    gap-3
                  "
                >

                  <FiMail
                    size={15}
                    className="
                      text-gray-600
                      group-hover:text-violet-300
                      transition-colors
                    "
                  />

                  <span
                    className="
                      font-['Space_Grotesk']
                      text-[9px]
                      uppercase
                      tracking-[3px]
                      text-gray-600
                    "
                  >
                    Email
                  </span>

                </div>

                <FiArrowUpRight
                  size={15}
                  className="
                    text-gray-700
                    group-hover:text-white
                    transition-colors
                  "
                />

              </div>

              <p
                className="
                  mt-4
                  font-['Space_Grotesk']
                  text-lg
                  sm:text-xl
                  text-gray-400
                  group-hover:text-white
                  transition-colors
                "
              >
                your@email.com
              </p>

            </a>

            {/* AVAILABLE */}

            <div
              className="
                mt-7
                flex
                items-center
                gap-3
              "
            >

              <span className="relative flex w-2 h-2">

                <span
                  className="
                    absolute
                    w-full
                    h-full
                    rounded-full
                    bg-violet-400
                    animate-ping
                    opacity-40
                  "
                />

                <span
                  className="
                    relative
                    w-2
                    h-2
                    rounded-full
                    bg-violet-400
                  "
                />

              </span>

              <span
                className="
                  font-['Space_Grotesk']
                  text-[8px]
                  uppercase
                  tracking-[3px]
                  text-gray-600
                "
              >
                Currently available
              </span>

            </div>

            {/* SOCIAL */}

            <div className="mt-12">

              <div
                className="
                  font-['Space_Grotesk']
                  text-[8px]
                  uppercase
                  tracking-[4px]
                  text-gray-700
                "
              >
                Social
              </div>

              <div className="mt-5 space-y-2">

                {socials.map((social, index) => {

                  const Icon = social.icon;

                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{
                        opacity: 0,
                        x: -15,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        delay: index * 0.08,
                      }}
                      whileHover={{
                        x: 6,
                      }}
                      className="
                        group
                        flex
                        items-center
                        justify-between
                        py-3
                        border-b
                        border-white/[0.04]
                      "
                    >

                      <div
                        className="
                          flex
                          items-center
                          gap-3
                        "
                      >

                        <Icon
                          size={14}
                          className="
                            text-gray-700
                            group-hover:text-violet-300
                            transition-colors
                          "
                        />

                        <span
                          className="
                            font-['Space_Grotesk']
                            text-xs
                            text-gray-500
                            group-hover:text-white
                            transition-colors
                          "
                        >
                          {social.name}
                        </span>

                      </div>

                      <FiArrowUpRight
                        size={13}
                        className="
                          text-gray-700
                          group-hover:text-white
                          transition-colors
                        "
                      />

                    </motion.a>
                  );

                })}

              </div>

            </div>

          </motion.div>

          {/* ==========================================
              FORM
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
              delay: 0.15,
            }}
          >

            <div
              className="
                relative
                p-6
                sm:p-8
                lg:p-10
                rounded-[24px]
                border
                border-white/[0.08]
                bg-white/[0.02]
                backdrop-blur-xl
              "
            >

              {/* FORM HEADER */}

              <div
                className="
                  flex
                  items-center
                  justify-between
                  mb-8
                "
              >

                <div
                  className="
                    font-['Space_Grotesk']
                    text-[8px]
                    uppercase
                    tracking-[4px]
                    text-gray-600
                  "
                >
                  Start a project
                </div>

                <span
                  className="
                    font-['Space_Grotesk']
                    text-[8px]
                    text-gray-700
                  "
                >
                  01—03
                </span>

              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >

                {/* NAME */}

                <div>

                  <label
                    className="
                      block
                      font-['Space_Grotesk']
                      text-[8px]
                      uppercase
                      tracking-[3px]
                      text-gray-600
                    "
                  >
                    Your name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Rohit Singh"
                    className="
                      mt-3
                      w-full
                      bg-transparent
                      border-b
                      border-white/[0.1]
                      pb-4
                      outline-none
                      font-['Space_Grotesk']
                      text-base
                      text-white
                      placeholder:text-gray-700
                      focus:border-violet-400/50
                      transition-colors
                    "
                  />

                </div>

                {/* EMAIL */}

                <div>

                  <label
                    className="
                      block
                      font-['Space_Grotesk']
                      text-[8px]
                      uppercase
                      tracking-[3px]
                      text-gray-600
                    "
                  >
                    Email address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="
                      mt-3
                      w-full
                      bg-transparent
                      border-b
                      border-white/[0.1]
                      pb-4
                      outline-none
                      font-['Space_Grotesk']
                      text-base
                      text-white
                      placeholder:text-gray-700
                      focus:border-violet-400/50
                      transition-colors
                    "
                  />

                </div>

                {/* MESSAGE */}

                <div>

                  <label
                    className="
                      block
                      font-['Space_Grotesk']
                      text-[8px]
                      uppercase
                      tracking-[3px]
                      text-gray-600
                    "
                  >
                    Your message
                  </label>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="
                      mt-3
                      w-full
                      bg-transparent
                      border-b
                      border-white/[0.1]
                      pb-4
                      outline-none
                      resize-none
                      font-['Space_Grotesk']
                      text-base
                      leading-7
                      text-white
                      placeholder:text-gray-700
                      focus:border-violet-400/50
                      transition-colors
                    "
                  />

                </div>

                {/* BUTTON */}

                <div
                  className="
                    pt-3
                    flex
                    justify-end
                  "
                >

                  <motion.button
                    type="submit"
                    whileHover={{
                      scale: 1.04,
                    }}
                    whileTap={{
                      scale: 0.97,
                    }}
                    className="
                      group
                      flex
                      items-center
                      gap-4
                      px-6
                      py-3
                      rounded-full
                      bg-white
                      text-black
                      font-['Space_Grotesk']
                      text-xs
                      font-semibold
                    "
                  >

                    Send Message

                    <span
                      className="
                        flex
                        items-center
                        justify-center
                        w-7
                        h-7
                        rounded-full
                        bg-black
                        text-white
                        transition-transform
                        duration-300
                        group-hover:rotate-45
                      "
                    >
                      <FiArrowUpRight size={14} />
                    </span>

                  </motion.button>

                </div>

              </form>

            </div>

          </motion.div>

        </div>

        {/* ==========================================
            BOTTOM
        ========================================== */}

        <div
          className="
            mt-16
            pt-6
            border-t
            border-white/[0.06]
            flex
            flex-col
            sm:flex-row
            sm:items-center
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
            Hyderabad · India
          </span>

          <span>
            Data · AI · Technology
          </span>

          <span>
            © {new Date().getFullYear()} Rohit Singh
          </span>

        </div>

      </div>
    </section>
  );
}