import React, { useState, useEffect } from 'react';
import { Mail, Phone, Linkedin, Code, Briefcase, Award, GraduationCap, ChevronDown, Menu, X, ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'education', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const skills = {
    languages: ['Python', 'JavaScript', 'C', 'C++', 'PHP'],
    frontend: ['Angular', 'React', 'Next.js', 'HTML5', 'CSS3', 'jQuery'],
    backend: ['Node.js', 'RESTful APIs'],
    database: ['SQL', 'MySQL'],
    tools: ['Git', 'Selenium', 'Visual Studio Code', 'Postman']
  };

  const projects = [
    {
      name: 'Clopay Project',
      role: 'Full Stack Developer',
      tech: ['Angular', 'Node.js', 'Selenium', 'Python'],
      description: 'Built application features with Angular and Node.js backend. Implemented automated testing frameworks.'
    },
    {
      name: 'Axalta Paint Manufacturing',
      role: 'Angular Developer & Automation Tester',
      tech: ['Angular 19', 'AngularJS Migration', 'Selenium'],
      description: 'Migrated screens from AngularJS to Angular 19. Developed reusable components and optimized performance.'
    },
    {
      name: 'Kaakateeya Project',
      role: 'Frontend Developer',
      tech: ['Responsive Design', 'Mobile-First'],
      description: 'Led responsive design initiatives for blog pages ensuring cross-device compatibility.'
    },
    {
      name: 'Radwell Project',
      role: 'UI Developer',
      tech: ['C#', 'jQuery'],
      description: 'Enhanced UI and responsiveness with design-level improvements for better UX.'
    },
    {
      name: 'Pluralsight Project',
      role: 'Frontend Developer',
      tech: ['React.js', 'Next.js'],
      description: 'Implemented responsive design and component-based architecture with modern frontend practices.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-slate-800">Harsha Vardhini Agatamudi</div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'experience', 'education', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors ${
                    activeSection === section ? 'text-blue-600 font-semibold' : 'text-slate-600 hover:text-blue-600'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-slate-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-2">
              {['home', 'about', 'skills', 'experience', 'education', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left px-4 py-2 capitalize text-slate-600 hover:bg-slate-50 rounded"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 inline-block p-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
            <div className="bg-white px-6 py-2 rounded-full">
              <span className="text-sm font-semibold text-slate-700">Full Stack Developer</span>
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="block text-slate-800">Harsha Vardhini</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mt-3 pb-4">
              Agatamudi
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-2xl mx-auto mt-4">
            Technical Associate with 2.5 years of experience specializing in Angular, React, Node.js, and automated testing
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a href="mailto:agatamudi2002@gmail.com" className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Mail size={20} />
              Contact Me
            </a>
            <button onClick={() => scrollToSection('experience')} className="flex items-center gap-2 px-6 py-3 border-2 border-slate-300 text-slate-700 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors">
              <Briefcase size={20} />
              View Work
            </button>
          </div>

          <button onClick={() => scrollToSection('about')} className="animate-bounce text-slate-400 hover:text-blue-600 transition-colors">
            <ChevronDown size={32} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-8 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-slate-800">Professional Profile</h3>
              <p className="text-slate-600 leading-relaxed">
                Technical Associate with a B.Tech in Electronics and Communication Engineering. Experienced in delivering innovative projects with expertise in React, Next.js, Angular, Node.js, Python, and Selenium.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-slate-800">Key Strengths</h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>Full stack development with modern frameworks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>Migration expertise from legacy to modern systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>Automated testing and quality assurance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>Responsive design across all devices</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-12 text-center">Technical Skills</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-lg font-semibold text-slate-800 mb-4 capitalize flex items-center gap-2">
                  <Code size={20} className="text-blue-600" />
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4 text-center">Work Experience</h2>
          <div className="text-center mb-12">
            <p className="text-xl text-slate-700 font-semibold">Evoke Technologies, Hyderabad</p>
            <p className="text-slate-600">Technical Associate • September 2023 - Present</p>
          </div>

          <div className="space-y-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-slate-200">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-800">{project.name}</h3>
                    <p className="text-blue-600 font-medium">{project.role}</p>
                  </div>
                </div>
                <p className="text-slate-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section id="education" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-12 text-center">Education & Recognition</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="text-blue-600" size={28} />
                <h3 className="text-xl font-bold text-slate-800">Education</h3>
              </div>
              <p className="font-semibold text-slate-700">B.Tech in Electronics and Communication</p>
              <p className="text-slate-600">MVGR College of Engineering, Vizianagaram</p>
              <p className="text-slate-600">JNTU-GV • 2023</p>
              <p className="text-blue-600 font-bold text-lg mt-2">CGPA: 9.22/10</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Award className="text-purple-600" size={28} />
                <h3 className="text-xl font-bold text-slate-800">Achievements</h3>
              </div>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">🏆</span>
                  <span>Python Certification - NPTEL</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">🏆</span>
                  <span>Winner - Group Discussion Competition</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">🏆</span>
                  <span>Cultural Committee Member - Evoke Technologies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">🏆</span>
                  <span>Leader in Cultural & Technical Events</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-8">Get In Touch</h2>
          <p className="text-lg text-slate-600 mb-12">
            I'm always open to discussing new opportunities and projects
          </p>

          <div className="grid sm:grid-cols-3 gap-6">
            <a href="mailto:agatamudi2002@gmail.com" className="flex flex-col items-center gap-3 p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl hover:shadow-lg transition-shadow border border-blue-100">
              <Mail className="text-blue-600" size={32} />
              <span className="font-semibold text-slate-800">Email</span>
              <span className="text-sm text-slate-600">agatamudi2002@gmail.com</span>
            </a>

            <a href="tel:+917386713774" className="flex flex-col items-center gap-3 p-6 bg-gradient-to-br from-green-50 to-white rounded-xl hover:shadow-lg transition-shadow border border-green-100">
              <Phone className="text-green-600" size={32} />
              <span className="font-semibold text-slate-800">Phone</span>
              <span className="text-sm text-slate-600">+91 7386713774</span>
            </a>

            <a href="https://linkedin.com/in/harsha-vardhini-agatamudi" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 p-6 bg-gradient-to-br from-purple-50 to-white rounded-xl hover:shadow-lg transition-shadow border border-purple-100">
              <Linkedin className="text-purple-600" size={32} />
              <span className="font-semibold text-slate-800">LinkedIn</span>
              <span className="text-sm text-slate-600 flex items-center gap-1">
                View Profile <ExternalLink size={14} />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-300">© 2026 Harsha Vardhini Agatamudi. All rights reserved.</p>
          <p className="text-slate-400 text-sm mt-2">Built with React & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}