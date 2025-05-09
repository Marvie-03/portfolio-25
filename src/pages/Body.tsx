import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Twitter, Mail } from "lucide-react";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Me from "@/assets/MeNow.jpg";
import Logo from "@/assets/logo.png";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY;

      // Update navbar background on scroll
      if (scrollPosition > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update active section based on scroll position
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          if (sectionId) {
            setActiveSection(sectionId);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-black text-zinc-100 font-sans">
      {/* Navigation */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-zinc-900/90 backdrop-blur-md shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          {scrolled ? (
            <div className="text-xl font-bold">
              <img
                src={Logo}
                alt="Logo"
                className="h-10 w-10 object-cover"
              />
            </div>
          ) : (
            <div className="text-xl font-bold"></div>
          )}
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`transition-colors hover:text-blue-500 ${
                  activeSection === link.id ? "text-blue-500" : "text-zinc-300"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-zinc-300 hover:text-blue-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-zinc-900 absolute w-full py-4 shadow-lg">
            <div className="container mx-auto px-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`transition-colors px-4 py-2 hover:bg-zinc-800 rounded ${
                    activeSection === link.id
                      ? "text-blue-500"
                      : "text-zinc-300"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden"
      >
        <div className="container mx-auto px-6 z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 space-y-6 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold">
                <span className="text-zinc-100">Hello, I'm </span>
                <span className="text-blue-500">Marvellous Modupe</span>
              </h1>
              <p className="text-xl md:text-2xl text-zinc-400">Web Developer</p>
              <p className="text-zinc-400 text-lg max-w-lg">
                As a web developer with over four years of experience, I
                specialize in creating elegant, minimalist designs that enhance
                user experience. With more than two years of expertise in React
                and Next.js, I combine technical skill with a keen eye for
                aesthetics to deliver visually appealing and functional web
                applications.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start ">
                <a
                  href="#projects"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors"
                >
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="bg-transparent border border-zinc-600 hover:border-blue-500 text-zinc-300 hover:text-blue-500 px-6 py-3 rounded-md transition-colors"
                >
                  Contact Me
                </a>
              </div>
              <div className="flex gap-4 justify-center md:justify-start py-4">
                <a
                  href="https://github.com/Marvie-03"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-blue-500 transition-colors"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/kayveengee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-blue-500 transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://x.com/kayveengee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-blue-500 transition-colors"
                >
                  <Twitter size={24} />
                </a>
                <a
                  href="mailto:kayveengee@gmail.com"
                  className="text-zinc-400 hover:text-blue-500 transition-colors"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
            <div className="md:w-1/2 p-8 flex justify-center">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-blue-500 bg-zinc-800 flex items-center justify-center text-4xl text-blue-500 font-bold">
                <img
                  src={Me}
                  alt="Marvellous Modupe"
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute -right-24 -top-24 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute -left-24 bottom-32 w-80 h-80 bg-blue-700 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Skills Section */}
      <Skills />

      {/* Projects Section */}
      <Projects />

      {/* Contact Section */}
      <Contact />

      <Footer />
    </div>
  );
};

export default Portfolio;
