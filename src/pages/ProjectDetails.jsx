import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import { FiArrowLeft, FiArrowUpRight, FiGithub } from "react-icons/fi";

import Background from "../components/ui/Background";
import { projects } from "../data/projects";

export default function ProjectDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    const project = projects.find((item) => item.id === id);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#070707] text-white">
                <h1 className="text-5xl font-bold">Project Not Found</h1>
            </div>
        );
    }

    return (
        <section className="relative min-h-screen bg-[#070707] overflow-hidden py-20">

            <Background />

            <div className="relative z-10 max-w-7xl mx-auto px-6">

                {/* Back */}

                <motion.button
                    whileHover={{ x: -5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate("/")}
                    className="flex items-center gap-2 text-cyan-400 mb-12"
                >
                    <FiArrowLeft />
                    Back
                </motion.button>

                {/* Title */}

                <motion.h1
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: .8 }}
                    className="text-5xl md:text-7xl font-black"
                >
                    {project.title}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: .3 }}
                    className="text-gray-400 leading-8 mt-8 max-w-4xl"
                >
                    {project.description}
                </motion.p>

                {/* Photo + Video */}

                {/* Photo + Video */}

                <div className="grid lg:grid-cols-2 gap-10 mt-16">

                    {/* Photo */}

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-[420px] object-cover rounded-3xl border border-white/10"
                        />
                    </motion.div>

                    {/* Video */}

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <video
                            controls
                            className="w-full h-[420px] object-cover rounded-3xl border border-white/10"
                        >
                            <source src={project.video} type="video/mp4" />
                        </video>
                    </motion.div>

                </div>

                {/* Tech Stack */}

                <div className="flex flex-wrap gap-4 mt-16">

                    {project.tech.map((item) => (

                        <motion.span
                            key={item}
                            whileHover={{
                                y: -5,
                            }}
                            className="
                px-5
                py-3
                rounded-full
                bg-white/5
                border
                border-white/10
                text-white
              "
                        >
                            {item}
                        </motion.span>

                    ))}

                </div>
                {/* Buttons */}

                <div className="flex flex-wrap gap-6 mt-16">

                    <motion.a
                        whileHover={{
                            scale: 1.05,
                            y: -4,
                        }}
                        whileTap={{
                            scale: .95,
                        }}
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="
            flex
            items-center
            gap-3
            px-8
            py-4
            rounded-2xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            hover:border-cyan-400/40
            transition-all
            "
                    >
                        <FiGithub size={22} />
                        GitHub
                    </motion.a>

                    <motion.a
                        whileHover={{
                            scale: 1.05,
                            y: -4,
                        }}
                        whileTap={{
                            scale: .95,
                        }}
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="
            flex
            items-center
            gap-3
            px-8
            py-4
            rounded-2xl
            bg-cyan-400
            hover:bg-cyan-300
            text-black
            font-semibold
            transition-all
            "
                    >
                        Live Demo

                        <FiArrowUpRight size={20} />

                    </motion.a>

                </div>

                {/* Bottom Line */}

                <motion.div

                    initial={{
                        opacity: 0
                    }}

                    whileInView={{
                        opacity: 1
                    }}

                    viewport={{
                        once: true
                    }}

                    transition={{
                        delay: .3
                    }}

                    className="
          mt-24
          border-t
          border-white/10
          pt-10
          text-center
          "
                >

                    <p className="text-gray-500">

                        Designed & Developed by

                        <span className="text-cyan-400 ml-2">

                            Rohit Singh

                        </span>

                    </p>

                </motion.div>

            </div>

        </section>

    );

}