import { Github } from "lucide-react";
import Next from "@/assets/next.png";
import Netflix from "@/assets/neflix-react-clone.web.app_.png";
import BookFair from "@/assets/JosBookFair.png";
import Aov from "@/assets/armyofvolunteers.org_.png";
import Tvg from "@/assets/TVG.png";
const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-zinc-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4 text-center">
          Featured Projects
        </h2>
        <p className="text-zinc-400 text-center mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills and
          experience. Each project represents unique challenges and solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="bg-zinc-800/70 backdrop-blur-sm rounded-lg overflow-hidden shadow-xl border border-zinc-700 flex flex-col h-full group transform transition-all hover:-translate-y-2">
            <div className="h-48 bg-zinc-700 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-zinc-500 text-lg font-medium">
                {/* [Project Image - Dashboard Web App] */}
                <img
                  src={Next}
                  alt="Project Image"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="p-6 flex-grow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-blue-500">
                  Metrics and Dashboard Web App
                </h3>
              </div>
              <p className="text-sm text-zinc-400 mb-4">
                Next.js, React, Tailwind CSS
              </p>
              <p className="text-zinc-300 mb-4">
                A metrics dashboard for small businesses to track cash flow,
                invoices and customer expenses.
              </p>
              <div className="mb-4">
                <h4 className="text-sm font-medium text-zinc-200 mb-2">
                  Key Features:
                </h4>
                <ul className="text-zinc-400 text-sm space-y-1 list-disc pl-5">
                  <li>
                    Dashboard with visualization (Barchart) for monitoring cash
                    flow
                  </li>
                  <li>Daily/weekly/monthly tracking capabilities</li>
                  <li>User authorization and authentication</li>
                </ul>
              </div>
            </div>
            <div className="p-6 pt-0 mt-auto">
              <div className="flex gap-3">
                <a
                  href="https://nextjs-dashboard-steel-chi-83.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm px-3 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white transition-colors flex-grow text-center"
                >
                  Live Demo
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm px-3 py-2 rounded-md bg-zinc-700 hover:bg-zinc-600 text-zinc-200 transition-colors flex-grow text-center"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-zinc-800/70 backdrop-blur-sm rounded-lg overflow-hidden shadow-xl border border-zinc-700 flex flex-col h-full group transform transition-all hover:-translate-y-2">
            <div className="h-48 bg-zinc-700 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-zinc-500 text-lg font-medium">
                {/* [Project Image - Netflix Clone] */}
                <img
                  src={Netflix}
                  alt="Project Image"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="p-6 flex-grow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-blue-500">
                  Movie Recommendation Web App
                </h3>
              </div>
              <p className="text-sm text-zinc-400 mb-4">
                React, Tailwind CSS, Firebase, Firestore
              </p>
              <p className="text-zinc-300 mb-4">
                A Netflix-inspired web app that recommends movies to users based
                on their preferences.
              </p>
              <div className="mb-4">
                <h4 className="text-sm font-medium text-zinc-200 mb-2">
                  Key Features:
                </h4>
                <ul className="text-zinc-400 text-sm space-y-1 list-disc pl-5">
                  <li>Utilizes the TMDB API for up-to-date movie data</li>
                  <li>Favorites system with user account integration</li>
                  <li>Responsive design for all devices</li>
                </ul>
              </div>
            </div>
            <div className="p-6 pt-0 mt-auto">
              <div className="flex gap-3">
                <a
                  href="https://neflix-react-clone.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm px-3 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white transition-colors flex-grow text-center"
                >
                  Live Demo
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm px-3 py-2 rounded-md bg-zinc-700 hover:bg-zinc-600 text-zinc-200 transition-colors flex-grow text-center"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-zinc-800/70 backdrop-blur-sm rounded-lg overflow-hidden shadow-xl border border-zinc-700 flex flex-col h-full group transform transition-all hover:-translate-y-2">
            <div className="h-48 bg-zinc-700 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-zinc-500 text-lg font-medium">
                {/* [Project Image - Jos Book Fair] */}
                <img
                  src={BookFair}
                  alt="Project Image"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="p-6 flex-grow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-blue-500">
                  Jos Book Fair 2025
                </h3>
              </div>
              <p className="text-sm text-zinc-400 mb-4">
                React, ShadCN, Tailwind CSS, Express, MongoDB
              </p>
              <p className="text-zinc-300 mb-4">
                A website developed for the Book Fair in Jos, Nigeria, organized
                in collaboration with CMLI.
              </p>
              <div className="mb-4">
                <h4 className="text-sm font-medium text-zinc-200 mb-2">
                  Key Features:
                </h4>
                <ul className="text-zinc-400 text-sm space-y-1 list-disc pl-5">
                  <li>Online registration for Jos Book Club membership</li>
                  <li>Responsive design with Tailwind CSS</li>
                  <li>Event information and updates</li>
                </ul>
              </div>
            </div>
            <div className="p-6 pt-0 mt-auto">
              <div className="flex gap-3">
                <a
                  href="https://www.josbookfair.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm px-3 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white transition-colors flex-grow text-center"
                >
                  Live Demo
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm px-3 py-2 rounded-md bg-zinc-700 hover:bg-zinc-600 text-zinc-200 transition-colors flex-grow text-center"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Project 4 */}
          <div className="bg-zinc-800/70 backdrop-blur-sm rounded-lg overflow-hidden shadow-xl border border-zinc-700 flex flex-col h-full group transform transition-all hover:-translate-y-2">
            <div className="h-48 bg-zinc-700 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-zinc-500 text-lg font-medium">
                [Project Image - IFAOH]
              </div>
            </div>
            <div className="p-6 flex-grow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-blue-500">
                  Institute for the Advancement of Humanity
                </h3>
              </div>
              <p className="text-sm text-zinc-400 mb-4">WordPress, Yoast SEO</p>
              <p className="text-zinc-300 mb-4">
                Website for a Humanitarian Non-Profit Organization based in the
                United States.
              </p>
              <div className="mb-4">
                <h4 className="text-sm font-medium text-zinc-200 mb-2">
                  Key Features:
                </h4>
                <ul className="text-zinc-400 text-sm space-y-1 list-disc pl-5">
                  <li>Blog for organization updates</li>
                  <li>SEO optimization with Yoast</li>
                  <li>Responsive design for all devices</li>
                </ul>
              </div>
            </div>
            <div className="p-6 pt-0 mt-auto">
              <div className="flex gap-3">
                <a
                  href="https://ifaoh.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm px-3 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white transition-colors flex-grow text-center"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>

          {/* Project 5 */}
          <div className="bg-zinc-800/70 backdrop-blur-sm rounded-lg overflow-hidden shadow-xl border border-zinc-700 flex flex-col h-full group transform transition-all hover:-translate-y-2">
            <div className="h-48 bg-zinc-700 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-zinc-500 text-lg font-medium">
                {/* [Project Image - Army of Volunteers] */}
                <img
                  src={Aov}
                  alt="Project Image"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="p-6 flex-grow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-blue-500">
                  Army of Volunteers for Earth
                </h3>
              </div>
              <p className="text-sm text-zinc-400 mb-4">
                WordPress, Astra/Elementor, Yoast SEO
              </p>
              <p className="text-zinc-300 mb-4">
                Website for a Climate-based Non-Profit Organization located in
                San Jose, California.
              </p>
              <div className="mb-4">
                <h4 className="text-sm font-medium text-zinc-200 mb-2">
                  Key Features:
                </h4>
                <ul className="text-zinc-400 text-sm space-y-1 list-disc pl-5">
                  <li>Blog for organization updates</li>
                  <li>Cross-browser compatibility</li>
                  <li>SEO optimization with Yoast</li>
                </ul>
              </div>
            </div>
            <div className="p-6 pt-0 mt-auto">
              <div className="flex gap-3">
                <a
                  href="https://armyofvolunteers.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm px-3 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white transition-colors flex-grow text-center"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>

          {/* Project 6 */}
          <div className="bg-zinc-800/70 backdrop-blur-sm rounded-lg overflow-hidden shadow-xl border border-zinc-700 flex flex-col h-full group transform transition-all hover:-translate-y-2">
            <div className="h-48 bg-zinc-700 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-zinc-500 text-lg font-medium">
                {/* [Project Image - TVG Ventures] */}
                <img
                  src={Tvg}
                  alt="Project Image"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="p-6 flex-grow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-blue-500">
                  True Values Global Corporation
                </h3>
              </div>
              <p className="text-sm text-zinc-400 mb-4">Squarespace</p>
              <p className="text-zinc-300 mb-4">
                Website for a corporation showcasing their aims, objectives,
                forms, and relevant information about building wealth.
              </p>
              <div className="mb-4">
                <h4 className="text-sm font-medium text-zinc-200 mb-2">
                  Key Features:
                </h4>
                <ul className="text-zinc-400 text-sm space-y-1 list-disc pl-5">
                  <li>Interactive user interface</li>
                  <li>Easy navigation structure</li>
                  <li>Improved booking system</li>
                </ul>
              </div>
            </div>
            <div className="p-6 pt-0 mt-auto">
              <div className="flex gap-3">
                <a
                  href="https://tvgventures.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm px-3 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white transition-colors flex-grow text-center"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/Marvie-03"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 px-6 py-3 rounded-lg transition-colors"
          >
            <Github size={20} />
            See More Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
