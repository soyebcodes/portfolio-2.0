import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import { Star, Sun, Moon } from "lucide-react";

const Navbar = () => {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : true; // Default to dark if no saved theme
  });

  useEffect(() => {
    const theme = isDark ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [isDark]);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Projects", to: "/projects" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full shadow z-50 transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center md:justify-between h-16 gap-4">
          {/* Logo */}
          <NavLink
            to="/"
            className="font-space-text flex gap-2 items-center text-2xl font-bold text-[#008236]"
          >
            <Star fill="green" />
            Soyeb Codes
          </NavLink>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                className={({ isActive }) =>
                  `font-inter transition px-3 py-1 rounded-full ${
                    isActive
                      ? "text-white bg-[#008236] border border-[#008236]"
                      : "text-black dark:text-white font-bold hover:text-[#008236]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            {/* Dark Mode Toggle Button */}
            <button
              className="btn btn-sm btn-circle"
              onClick={() => setIsDark((prev) => !prev)}
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun className="text-yellow-400" /> : <Moon />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
