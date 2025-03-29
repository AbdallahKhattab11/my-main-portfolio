import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaGit } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { TbBrandFramerMotion } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoAccessibility } from "react-icons/io5";
import { SiMui } from "react-icons/si";
import { CgPerformance } from "react-icons/cg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>

        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-7xl font-bold">
              <span className="text-[#d4d4d4] nameFont">
                <span className="text-3xl md:text-5xl">Hello, I'm</span>{" "}
                <span className="text-5xl md:text-7xl text-[#569cd6]">
                  Abdallah Khattab
                </span>
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-[#d4d4d4] max-w-2xl mx-auto">
              Frontend developer skilled in React, Tailwind, and modern web
              technologies, crafting smooth and dynamic user experiences.
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Link
                to="/contact"
                className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-semibold hover:opacity-90 transition-all duration-300"
              >
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-[#d4d4d4] rounded-full p-2">
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-1.5 h-1.5 bg-[#d4d4d4] rounded-full mx-auto"
            />
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-[#569cd6]">Technical Skills</span>
            </h2>
            <p className="text-[#d4d4d4]">Technologies I work with</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" /> },
              { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" /> },
              { name: "JavaScript", icon: <FaJs className="text-[#F7DF1E]" /> },
              { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
              { name: "Tailwind CSS", icon: <RiTailwindCssFill className="text-[#06B6D4]" /> },
              { name: "Git", icon: <FaGit className="text-[#F05032]" /> },
              { name: "GitHub", icon: <FaGithub className="text-[#3178C6]" /> },
              { name: "Responsive Design", icon: <FaMobileAlt className="text-[#4CAF50]" /> },
              { name: "Framer Motion", icon: <TbBrandFramerMotion className="text-[#0055FF]" /> },
              { name: "Accessibility", icon: <IoAccessibility className="text-[#4CAF50]" /> },
              { name: "Material UI", icon: <SiMui className="text-[#0081CB]" /> },
              { name: "Performance Optimization", icon: <CgPerformance className="text-[#4CAF50]" /> },
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#1e1e1e] p-6 rounded-lg text-center flex flex-col items-center justify-center hover:bg-[#2d2d2d] transition-colors duration-300"
              >
                <div className="text-4xl mb-4">{skill.icon}</div>
                <h3 className="text-lg font-semibold text-[#d4d4d4]">
                  {skill.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
