

const About = () => {
  return (
    <section id="about" className="py-24 bg-zinc-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
        <div className="bg-zinc-800/50 backdrop-blur-sm p-8 rounded-lg shadow-xl border border-zinc-700">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4 text-blue-500">
                My Story
              </h3>
              <p className="text-zinc-300 mb-4">
                I got into Web Development with a mission to solve visibility,
                usability, and accessibility problems, especially for
                organizations, businesses, and brands.
              </p>
              <p className="text-zinc-300 mb-4">
                What excites me most about web development is creating
                exceptional user interfaces. I believe first impressions and
                perceptions go a long way in shaping the user experience. That's
                why I leverage frameworks like React and Next.js for their speed
                and efficient development capabilities.
              </p>
              <p className="text-zinc-300">
                I bring over four years of experience in web development, with a
                particular focus on creating elegant, minimalist designs that
                enhance user experience. My specialty lies in combining
                technical proficiency with an aesthetic sensibility to deliver
                web applications that are both visually appealing and highly
                functional.
              </p>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4 text-blue-500">
                Career Goals
              </h3>
              <p className="text-zinc-300 mb-4">
                I'm currently seeking full-time roles and/or freelance
                opportunities where I can contribute my skills and continue
                growing as a developer.
              </p>
              <p className="text-zinc-300 mb-6">
                I'm open to working with startups or established organizations
                in fintech, health, real estate, education, and other relevant
                sectors. I'm particularly interested in projects that challenge
                me to create innovative solutions and deliver exceptional user
                experiences.
              </p>

              <h3 className="text-2xl font-semibold mb-4 text-blue-500">
                Let's Work Together
              </h3>
              <div className="flex gap-4">
                <a
                  href="#contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors inline-flex items-center"
                >
                  Get In Touch
                </a>
                <a
                  href="#projects"
                  className="bg-transparent border border-zinc-600 hover:border-blue-500 text-zinc-300 hover:text-blue-500 px-4 py-2 rounded-md transition-colors inline-flex items-center"
                >
                  View Projects
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
