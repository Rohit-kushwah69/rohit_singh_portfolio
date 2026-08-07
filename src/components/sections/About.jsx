import { motion } from "framer-motion";
import Background from "../ui/Background";
import profile from "../../assets/image/profile.png";

const stats = [
  {
    number: "20+",
    title: "Projects",
  },
  {
    number: "2+",
    title: "Years Learning",
  },
  {
    number: "10+",
    title: "Certificates",
  },
  {
    number: "100%",
    title: "Passion",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen py-28 overflow-hidden"
    >
      <Background />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="uppercase tracking-[8px] text-gray-500"
        >
          About Me
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="text-5xl md:text-7xl font-black mt-5"
        >
          Who I Am
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-20 items-center mt-20">

          {/* IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .9 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.04,
              rotate: 1,
            }}
            className="relative"
          >
            <div className="absolute inset-0 bg-white/10 blur-3xl rounded-full scale-90"></div>

            <img
              src={profile}
              alt="profile"
              className="relative rounded-[35px] border border-white/10 shadow-2xl"
            />
          </motion.div>

          {/* CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .9 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold leading-tight">
              Turning Ideas Into Intelligent Digital Experiences
            </h3>

            <p className="mt-8 text-gray-400 text-lg leading-9">
              I'm Rohit Singh, a passionate Data Scientist and AI Engineer
              focused on Machine Learning, Deep Learning, Computer Vision,
              and Generative AI.
            </p>

            <p className="mt-6 text-gray-400 text-lg leading-9">
              I love building modern AI products that combine powerful
              backend intelligence with beautiful user experiences.
            </p>

            {/* STATS */}

            <div className="grid grid-cols-2 gap-6 mt-14">

              {stats.map((item, index) => (

                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * .15,
                    duration: .5,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -8,
                  }}
                  className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg p-8"
                >
                  <h2 className="text-5xl font-bold">
                    {item.number}
                  </h2>

                  <p className="text-gray-400 mt-3">
                    {item.title}
                  </p>

                </motion.div>

              ))}

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}