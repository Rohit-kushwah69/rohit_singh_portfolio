import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  // { name: "Home", href: "#home" },
  // { name: "About", href: "#about" },
  // { name: "Projects", href: "#projects" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full z-50"
    >
      <div className="max-w-7xl mx-auto px-8 h-24 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-[6px]">RS</h1>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-400 hover:text-white transition"
            >
              {link.name}
            </a>
          ))}

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2.5 rounded-full bg-cyan-400 text-black text-sm font-semibold shadow-[0_0_25px_rgba(34,211,238,.35)] transition-shadow duration-300 hover:shadow-[0_0_35px_rgba(34,211,238,.5)]"
          >
            Let's Talk
          </motion.a>
        </nav>

        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden relative z-50 w-8 h-8 flex flex-col justify-center items-center gap-1.5"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }}
            className="w-6 h-0.5 bg-white rounded-full"
          />
          <motion.span
            animate={{ opacity: menuOpen ? 0 : 1 }}
            className="w-6 h-0.5 bg-white rounded-full"
          />
          <motion.span
            animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }}
            className="w-6 h-0.5 bg-white rounded-full"
          />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col gap-6 px-8 py-8">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-400 hover:text-white transition text-lg"
                >
                  {link.name}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="px-6 py-3 rounded-full bg-cyan-400 text-black text-sm font-semibold text-center shadow-[0_0_25px_rgba(34,211,238,.35)]"
              >
                Let's Talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}