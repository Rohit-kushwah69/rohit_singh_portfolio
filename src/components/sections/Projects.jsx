import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Background from "../ui/Background";
import { projects } from "../../data/projects";

export default function Projects() {
    const navigate = useNavigate();

    return (
        <section
            id="projects"
            className="relative py-32 overflow-hidden bg-[#070707]"
        >
            <Background />

            {/* Background Glow */}

            <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 blur-[140px] rounded-full" />
            <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500/10 blur-[140px] rounded-full" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="uppercase tracking-[8px] text-cyan-400"
                >
                    Featured Work
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-5 text-4xl md:text-6xl font-bold"
                >
                    Selected Projects
                </motion.h2>

                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: 120 }}
                    transition={{ duration: 1 }}
                    className="h-1 bg-cyan-400 mt-6"
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.7,
                                delay: index * 0.15,
                            }}
                            whileHover={{
                                y: -12,
                            }}
                            className="
      group
      relative
      overflow-hidden
      rounded-[28px]
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      transition-all
      duration-500
    "
                        >

                            {/* Image */}

                            <div className="relative overflow-hidden">

                                <motion.img
                                    whileHover={{
                                        scale: 1.08,
                                    }}
                                    transition={{
                                        duration: 0.5,
                                    }}
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-[260px] object-cover"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                                {/* Category */}

                                <div className="absolute top-5 left-5">

                                    <span className="px-4 py-2 rounded-full bg-black/50 backdrop-blur-xl text-xs uppercase tracking-widest">

                                        {project.category}

                                    </span>

                                </div>

                                {/* Year */}

                                <div className="absolute top-5 right-5">

                                    <span className="text-white/50 font-semibold">

                                        {project.year}

                                    </span>

                                </div>

                            </div>

                            {/* Content */}

                            <div className="p-7">

                                <motion.h3
                                    whileHover={{
                                        x: 5,
                                    }}
                                    className="text-3xl font-bold"
                                >
                                    {project.title}
                                </motion.h3>

                                <p className="mt-5 text-gray-400 leading-7">
                                    {project.short}
                                </p>

                                {/* Tech */}

                                <div className="flex flex-wrap gap-2 mt-6">

                                    {project.tech.map((item) => (

                                        <motion.span
                                            key={item}
                                            whileHover={{
                                                y: -3,
                                            }}
                                            className="
              px-3
              py-2
              rounded-full
              border
              border-white/10
              bg-white/5
              text-sm
            "
                                        >
                                            {item}
                                        </motion.span>

                                    ))}

                                </div>
                                {/* View Project Button */}

                                <motion.button
                                    whileHover={{
                                        scale: 1.03,
                                        y: -2,
                                    }}
                                    whileTap={{
                                        scale: 0.96,
                                    }}
                                    onClick={() => navigate(`/project/${project.id}`)}
                                    className="
          w-full
          mt-8
          bg-cyan-400
          hover:bg-cyan-300
          text-black
          rounded-xl
          py-4
          font-semibold
          flex
          justify-center
          items-center
          gap-3
          transition-all
          duration-300
          shadow-lg
          shadow-cyan-500/20
        "
                                >
                                    View Project

                                    <motion.div
                                        whileHover={{ x: 5 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <FiArrowUpRight size={20} />
                                    </motion.div>
                                </motion.button>

                            </div>

                            {/* Animated Border */}

                            <motion.div
                                className="
        absolute
        inset-0
        rounded-[28px]
        border
        border-cyan-400/0
        pointer-events-none
        group-hover:border-cyan-400/40
        transition-all
        duration-500
      "
                            />

                            {/* Glow */}

                            <div
                                className="
        absolute
        -inset-1
        opacity-0
        group-hover:opacity-100
        transition-all
        duration-500
        bg-cyan-400/10
        blur-3xl
        -z-10
      "
                            />

                        </motion.div>
                    ))}

                </div>

            </div>

        </section>
    );
}