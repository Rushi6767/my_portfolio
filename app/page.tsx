export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-sm z-50 border-b border-purple-500/20">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Rushi Sathavara</h1>
          <div className="flex gap-6">
            <a href="#about" className="text-gray-300 hover:text-purple-400 transition">About</a>
            <a href="#experience" className="text-gray-300 hover:text-purple-400 transition">Experience</a>
            <a href="#projects" className="text-gray-300 hover:text-purple-400 transition">Projects</a>
            <a href="#contact" className="text-gray-300 hover:text-purple-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl text-center">
          <div className="mb-6">
            <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30">
              Available for new opportunities
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Full Stack Engineer
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              & R&D Specialist
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            M.S. Computer Science student with 5+ years of experience building scalable web applications,
            AI-driven tools, and leading development teams.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="#projects" className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition">
              View My Work
            </a>
            <a href="#contact" className="px-8 py-3 border border-purple-500 text-purple-300 hover:bg-purple-500/10 rounded-lg transition">
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">About Me</h2>
          <p className="text-lg text-gray-300 leading-relaxed text-center">
            Passionate about building developer tools and enhancing collaboration through software.
            Expertise in Python, React, and REST APIs, with a strong focus on writing testable,
            maintainable code and managing CI/CD pipelines. Proven track record of shipping high-quality
            solutions in fast-paced startup and enterprise environments.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Work Experience</h2>

          <div className="space-y-8">
            {/* Experience 1 */}
            <div className="bg-slate-800/50 border border-purple-500/20 rounded-lg p-6 hover:border-purple-500/40 transition">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">Full Stack Developer</h3>
                  <p className="text-purple-400 font-semibold">Harrisburg University</p>
                  <p className="text-gray-400 text-sm">Harrisburg, PA</p>
                </div>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                  Mar 2024 – Present
                </span>
              </div>
              <ul className="text-gray-300 space-y-2 mb-4">
                <li>• Developed 3D printing platform (Print3D) using SvelteKit, Python, and Docker</li>
                <li>• Built responsive dashboard for MacroPivot AI Financial Platform with React and TypeScript</li>
                <li>• Managed deployments via Jenkins CI/CD pipelines</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                {['SvelteKit', 'React', 'TypeScript', 'Python', 'Docker', 'Jenkins'].map(tech => (
                  <span key={tech} className="px-3 py-1 bg-slate-700 text-gray-300 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Experience 2 */}
            <div className="bg-slate-800/50 border border-purple-500/20 rounded-lg p-6 hover:border-purple-500/40 transition">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">Python/Django Developer</h3>
                  <p className="text-purple-400 font-semibold">LinkSture Technologies</p>
                  <p className="text-gray-400 text-sm">Ahmedabad, India</p>
                </div>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                  Sep 2021 – Jul 2022
                </span>
              </div>
              <ul className="text-gray-300 space-y-2 mb-4">
                <li>• Architected scalable RESTful APIs using Django REST Framework</li>
                <li>• Implemented async task queues using Celery and Redis</li>
                <li>• Developed custom admin dashboards with React.js for Shopify integration</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                {['Python', 'Django', 'DRF', 'React.js', 'Celery', 'Redis'].map(tech => (
                  <span key={tech} className="px-3 py-1 bg-slate-700 text-gray-300 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Experience 3 */}
            <div className="bg-slate-800/50 border border-purple-500/20 rounded-lg p-6 hover:border-purple-500/40 transition">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">Team Lead & Python Developer</h3>
                  <p className="text-purple-400 font-semibold">Odoo (Open Source ERP)</p>
                  <p className="text-gray-400 text-sm">Gandhinagar, India</p>
                </div>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                  Dec 2019 – Sep 2021
                </span>
              </div>
              <ul className="text-gray-300 space-y-2 mb-4">
                <li>• Led team of 4 developers in OCR department</li>
                <li>• Improved OCR extraction accuracy from 75% to 92%</li>
                <li>• Maintained automated testing workflows using Odoo Runbot</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                {['Python', 'Odoo', 'PostgreSQL', 'JavaScript', 'CI/CD'].map(tech => (
                  <span key={tech} className="px-3 py-1 bg-slate-700 text-gray-300 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Featured Projects</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Project 1 */}
            <div className="bg-slate-900/50 border border-purple-500/20 rounded-lg p-6 hover:border-purple-500/40 transition">
              <h3 className="text-2xl font-bold text-white mb-3">Print3D E-Commerce Platform</h3>
              <p className="text-gray-300 mb-4">
                SvelteKit application for selecting, uploading, and purchasing 3D models with dynamic fetching and cost calculations.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['SvelteKit', 'TypeScript', 'TailwindCSS', 'Python'].map(tech => (
                  <span key={tech} className="px-2 py-1 bg-slate-700 text-gray-300 rounded text-xs">
                    {tech}
                  </span>
                ))}
              </div>
              <a href="https://print3d.samfun.dev" target="_blank" rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 transition">
                View Live Demo →
              </a>
            </div>

            {/* Project 2 */}
            <div className="bg-slate-900/50 border border-purple-500/20 rounded-lg p-6 hover:border-purple-500/40 transition">
              <h3 className="text-2xl font-bold text-white mb-3">MacroPivot AI Platform</h3>
              <p className="text-gray-300 mb-4">
                Responsive financial advisor platform with dashboard, landing page, and smooth GSAP animations.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['React', 'TypeScript', 'GSAP', 'TailwindCSS'].map(tech => (
                  <span key={tech} className="px-2 py-1 bg-slate-700 text-gray-300 rounded text-xs">
                    {tech}
                  </span>
                ))}
              </div>
              <a href="https://fait.cie.harrisburgu.cloud/" target="_blank" rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 transition">
                View Live Demo →
              </a>
            </div>

            {/* Project 3 */}
            <div className="bg-slate-900/50 border border-purple-500/20 rounded-lg p-6 hover:border-purple-500/40 transition">
              <h3 className="text-2xl font-bold text-white mb-3">LangGraph Chatbot Agent</h3>
              <p className="text-gray-300 mb-4">
                Stateful conversational agent using LangGraph and LLMs with persistent state management and tool-calling.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['Python', 'LangChain', 'LangGraph', 'LLMs'].map(tech => (
                  <span key={tech} className="px-2 py-1 bg-slate-700 text-gray-300 rounded text-xs">
                    {tech}
                  </span>
                ))}
              </div>
              <a href="https://github.com/Rushi6767/lang_chain" target="_blank" rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 transition">
                View on GitHub →
              </a>
            </div>

            {/* Project 4 */}
            <div className="bg-slate-900/50 border border-purple-500/20 rounded-lg p-6 hover:border-purple-500/40 transition">
              <h3 className="text-2xl font-bold text-white mb-3">Smart Cart</h3>
              <p className="text-gray-300 mb-4">
                Advanced shopping cart system with session persistence, REST API endpoints, and input validation.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['Flask', 'Python', 'JavaScript', 'REST APIs'].map(tech => (
                  <span key={tech} className="px-2 py-1 bg-slate-700 text-gray-300 rounded text-xs">
                    {tech}
                  </span>
                ))}
              </div>
              <a href="https://github.com/Rushi6767" target="_blank" rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 transition">
                View on GitHub →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Technical Skills</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-purple-400 mb-3">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'JavaScript', 'TypeScript', 'SQL', 'C++', 'Bash'].map(skill => (
                  <span key={skill} className="px-4 py-2 bg-slate-800 text-gray-300 rounded-lg">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-purple-400 mb-3">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {['React.js', 'SvelteKit', 'Tailwind CSS', 'HTML5', 'CSS3'].map(skill => (
                  <span key={skill} className="px-4 py-2 bg-slate-800 text-gray-300 rounded-lg">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-purple-400 mb-3">Backend & Databases</h3>
              <div className="flex flex-wrap gap-2">
                {['Django', 'DRF', 'FastAPI', 'Flask', 'Node.js', 'PostgreSQL', 'Redis', 'MongoDB'].map(skill => (
                  <span key={skill} className="px-4 py-2 bg-slate-800 text-gray-300 rounded-lg">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-purple-400 mb-3">DevOps & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {['Git', 'GitHub Actions', 'Docker', 'Kubernetes', 'Jenkins', 'Linux'].map(skill => (
                  <span key={skill} className="px-4 py-2 bg-slate-800 text-gray-300 rounded-lg">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-purple-400 mb-3">AI & ML</h3>
              <div className="flex flex-wrap gap-2">
                {['LLMs', 'LangChain', 'RAG', 'OpenAI API', 'Vector Databases'].map(skill => (
                  <span key={skill} className="px-4 py-2 bg-slate-800 text-gray-300 rounded-lg">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-slate-800/50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Get In Touch</h2>
          <p className="text-xl text-gray-300 mb-8">
            I&apos;m currently looking for new opportunities. Whether you have a question or just want to say hi,
            I&apos;ll try my best to get back to you!
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="mailto:sathawararushi@gmail.com"
              className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition">
              Email Me
            </a>
            <a href="https://linkedin.com/in/rushi-sathavara-abb68418b" target="_blank" rel="noopener noreferrer"
              className="px-8 py-3 border border-purple-500 text-purple-300 hover:bg-purple-500/10 rounded-lg transition">
              LinkedIn
            </a>
            <a href="https://github.com/Rushi6767" target="_blank" rel="noopener noreferrer"
              className="px-8 py-3 border border-purple-500 text-purple-300 hover:bg-purple-500/10 rounded-lg transition">
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-purple-500/20">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>© 2024 Rushi Sathavara. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
