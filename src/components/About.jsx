import { motion } from "framer-motion";

const About = () => {
  const learningJourney = [
    {
      year: "2024",
      title: "Learning Full-Stack Development",
      description:
        "Currently expanding my knowledge into back-end development. Learning Node.js and databases to understand full-stack development.",
      achievements: ["Node.js", "Express", "MongoDB"],
    },
    {
      year: "2023",
      title: "Advanced Front-End Development",
      description:
        "Mastering advanced React concepts, state management, and modern front-end practices. Building complex applications with React and related technologies.",
      achievements: ["React", "Context API", "React Router"],
    },
    {
      year: "2022",
      title: "Front-End Frameworks",
      description:
        "Diving deep into React ecosystem and modern CSS frameworks. Learning responsive design principles and component-based architecture.",
      achievements: ["React", "Tailwind CSS", "Git"],
    },
    {
      year: "2021",
      title: "Web Development Fundamentals",
      description:
        "Starting my journey in web development, building a strong foundation in core technologies and basic interactivity.",
      achievements: ["HTML5", "CSS3", "JavaScript"],
    },
  ];
  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h1>
          <p className="text-xl text-gray-400">Get to know who I am</p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-full md:w-3/4 lg:w-full mx-auto"
          >
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 p-1">
              <div className="w-full h-full bg-[#1e1e1e] rounded-2xl flex items-center justify-center">
                <span className="text-6xl">👨‍💻</span>
              </div>
            </div>
          </motion.div>

          {/* Bio Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="prose prose-invert">
              <p className="text-lg text-gray-300">
                I am a passionate Front-End Developer with a keen eye for design
                and a love for creating beautiful, responsive web experiences.
                My journey in web development started with a curiosity about how
                websites work, and that curiosity has evolved into a
                professional pursuit of excellence in creating modern web
                applications.
              </p>
              <p className="text-lg text-gray-300">
                I specialize in building user-friendly interfaces using React
                and modern web technologies. My approach combines clean code
                practices with creative design solutions to deliver exceptional
                user experiences.
              </p>
            </div>

            {/* Learning Journey Timeline */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-6 text-white">
                My Learning Journey
              </h2>
              <div className="space-y-6">
                {learningJourney.map((exp, index) => (
                  <motion.div
                    key={exp.year}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="relative pl-8 border-l-2 border-blue-500"
                  >
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500"></div>
                    <div className="mb-4">
                      <span className="text-blue-400 font-semibold">
                        {exp.year}
                      </span>
                      <h3 className="text-xl font-bold text-white">
                        {exp.title}
                      </h3>
                    </div>
                    <p className="text-gray-300 mb-3">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.achievements.map((achievement) => (
                        <span
                          key={achievement}
                          className="px-3 py-1 bg-blue-500/10 rounded-full text-sm text-blue-400"
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
