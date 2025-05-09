

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-black relative">
        <div className="absolute inset-0 overflow-hidden opacity-5">
          <div className="absolute right-1/4 top-1/4 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
          <div className="absolute left-1/4 bottom-1/4 w-80 h-80 bg-blue-700 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-3xl font-bold mb-12 text-center">My Skills & Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Core Technical Skills */}
            <div className="bg-zinc-900/70 backdrop-blur-sm p-8 rounded-lg shadow-xl border border-zinc-800 h-full">
              <h3 className="text-2xl font-semibold mb-6 text-blue-500 flex items-center">
                Core Technical Skills
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium mb-3 text-zinc-200">Frontend Development</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-zinc-800 text-blue-400 rounded-full text-sm">HTML</span>
                    <span className="px-3 py-1 bg-zinc-800 text-blue-400 rounded-full text-sm">CSS</span>
                    <span className="px-3 py-1 bg-zinc-800 text-blue-400 rounded-full text-sm">JavaScript</span>
                    <span className="px-3 py-1 bg-zinc-800 text-blue-400 rounded-full text-sm">React</span>
                    <span className="px-3 py-1 bg-zinc-800 text-blue-400 rounded-full text-sm">Next.js</span>
                    <span className="px-3 py-1 bg-zinc-800 text-blue-400 rounded-full text-sm">TailwindCSS</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-3 text-zinc-200">Content Management Systems</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-zinc-800 text-blue-400 rounded-full text-sm">WordPress</span>
                    <span className="px-3 py-1 bg-zinc-800 text-blue-400 rounded-full text-sm">Squarespace</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Tools & Technologies */}
            <div className="bg-zinc-900/70 backdrop-blur-sm p-8 rounded-lg shadow-xl border border-zinc-800 h-full">
              <h3 className="text-2xl font-semibold mb-6 text-blue-500 flex items-center">
                Tools & Technologies
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-lg font-medium mb-2 text-zinc-200">Version Control</h4>
                  <ul className="text-zinc-400 list-disc list-inside space-y-1">
                    <li>GitHub</li>
                    <li>GitLab</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-2 text-zinc-200">Build Tools</h4>
                  <ul className="text-zinc-400 list-disc list-inside space-y-1">
                    <li>Vite</li>
                    <li>npm</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-2 text-zinc-200">Testing</h4>
                  <ul className="text-zinc-400 list-disc list-inside space-y-1">
                    <li>Cypress</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-2 text-zinc-200">API Integration</h4>
                  <ul className="text-zinc-400 list-disc list-inside space-y-1">
                    <li>RESTful APIs</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-2 text-zinc-200">Design Tools</h4>
                  <ul className="text-zinc-400 list-disc list-inside space-y-1">
                    <li>Figma</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-2 text-zinc-200">Deployment</h4>
                  <ul className="text-zinc-400 list-disc list-inside space-y-1">
                    <li>Vercel</li>
                    <li>Netlify</li>
                    <li>cPanel</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Specializations */}
          <div className="bg-zinc-900/70 backdrop-blur-sm p-8 rounded-lg shadow-xl border border-zinc-800">
            <h3 className="text-2xl font-semibold mb-6 text-blue-500">Areas of Specialization</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-zinc-800/50 rounded-lg">
                <h4 className="text-lg font-medium mb-2 text-zinc-200">Responsive Design</h4>
                <p className="text-zinc-400">
                  I approach design with a mobile-first mindset, ensuring your website looks great on all devices.
                </p>
              </div>
              
              <div className="p-4 bg-zinc-800/50 rounded-lg">
                <h4 className="text-lg font-medium mb-2 text-zinc-200">Performance Optimization</h4>
                <p className="text-zinc-400">
                  Using Suspense API and modern optimization techniques to improve web app performance.
                </p>
              </div>
              
              <div className="p-4 bg-zinc-800/50 rounded-lg">
                <h4 className="text-lg font-medium mb-2 text-zinc-200">Accessibility</h4>
                <p className="text-zinc-400">
                  UI colors with proper contrast and correct HTML tags to enable screen readers to efficiently understand content.
                </p>
              </div>
              
              <div className="p-4 bg-zinc-800/50 rounded-lg">
                <h4 className="text-lg font-medium mb-2 text-zinc-200">State Management</h4>
                <p className="text-zinc-400">
                  Experience with Redux and Context API for efficient state management in React applications.
                </p>
              </div>
              
              <div className="p-4 bg-zinc-800/50 rounded-lg">
                <h4 className="text-lg font-medium mb-2 text-zinc-200">SEO Implementation</h4>
                <p className="text-zinc-400">
                  Implementing meta tags and alt descriptions for images to ensure proper SEO practices.
                </p>
              </div>
              
              <div className="p-4 bg-zinc-800/50 rounded-lg">
                <h4 className="text-lg font-medium mb-2 text-zinc-200">Interactive UIs</h4>
                <p className="text-zinc-400">
                  Building UIs with a user-first approach, ensuring intuitive and engaging experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Skills