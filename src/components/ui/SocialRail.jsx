import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiMail,
} from "react-icons/fi";

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

export default function SocialRail() {
  return (
    <div
      className="
        fixed
        left-0
        top-1/2
        -translate-y-1/2
        z-[999]

        hidden
        md:flex

        flex-col
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
              x: -25,
            }}

            animate={{
              opacity: 1,
              x: 0,
            }}

            transition={{
              duration: 0.5,
              delay: 0.15 + index * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}

            whileHover={{
              x: 7,
            }}

            className="
              group
              relative

              flex
              items-center

              w-[52px]
              h-[52px]

              border-r
              border-t
              border-b
              border-white/[0.07]

              bg-[#080808]/80
              backdrop-blur-xl

              text-gray-600

              hover:text-white

              transition-all
              duration-300

              overflow-visible
            "
          >

            {/* Left active indicator */}

            <span
              className="
                absolute
                left-0
                top-1/2
                -translate-y-1/2

                w-[2px]
                h-0

                bg-violet-400

                group-hover:h-6

                transition-all
                duration-300
              "
            />


            {/* Icon */}

            <span
              className="
                relative
                z-10

                w-full
                flex
                items-center
                justify-center

                group-hover:text-violet-300

                transition-colors
                duration-300
              "
            >

              <Icon
                size={17}
                strokeWidth={1.5}
              />

            </span>


            {/* Glow */}

            <span
              className="
                absolute
                inset-0

                bg-violet-500/[0.06]

                opacity-0
                group-hover:opacity-100

                blur-xl

                transition-opacity
                duration-300

                pointer-events-none
              "
            />


            {/* Label */}

            <span
              className="
                absolute
                left-[62px]
                top-1/2
                -translate-y-1/2

                whitespace-nowrap

                px-3
                py-2

                rounded-md

                border
                border-white/[0.08]

                bg-[#0a0a0c]/95
                backdrop-blur-xl

                font-['Space_Grotesk']
                text-[8px]
                uppercase
                tracking-[3px]

                text-gray-400

                opacity-0
                translate-x-[-8px]

                group-hover:opacity-100
                group-hover:translate-x-0

                transition-all
                duration-300

                pointer-events-none
              "
            >
              {social.name}
            </span>

          </motion.a>
        );
      })}

    </div>
  );
}