import { useState } from "react";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home", id: "home" },
    { path: "/about", label: "About", id: "about" },
    { path: "/projects", label: "Projects", id: "projects" },
    { path: "/contact", label: "Contact", id: "contact" },
  ];

  return (
    <nav className="fixed w-full bg-gradient-to-r from-gray-900/90 to-gray-800/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-[26px] nameFont font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
            >
              Abdallah
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.id}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm md:text-base font-medium transition-colors ${
                      isActive
                        ? "text-blue-400 bg-gray-800/50"
                        : "hover:text-blue-400"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center cursor-pointer p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <FaBars className="block size-6 " />
              ) : (
                <IoClose className="block size-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          className="md:hidden bg-gradient-to-r from-gray-900/95 to-gray-800/95 backdrop-blur-sm"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.id}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive
                      ? "text-blue-400 bg-gray-800/50"
                      : "hover:text-blue-400"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
