import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Github, Linkedin, Mail, ExternalLink, Download, Code, Database, Brain, ChevronDown } from 'lucide-react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
    }
  }

  const skills = {
    'Data Engineering': ['Python', 'Apache Spark', 'Kafka', 'Airflow', 'SQL', 'PostgreSQL', 'MongoDB', 'Docker', 'Kubernetes'],
    'AI/ML': ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'MLflow', 'Jupyter', 'OpenAI API'],
    'Cloud & DevOps': ['AWS', 'Azure', 'GCP', 'Terraform', 'Jenkins', 'Git', 'Linux', 'Bash']
  }

  const projects = [
    {
      title: 'Real-time Data Pipeline',
      description: 'Built a scalable real-time data pipeline using Apache Kafka and Spark Streaming to process millions of events per day.',
      technologies: ['Python', 'Kafka', 'Spark', 'AWS'],
      github: '#',
      demo: '#'
    },
    {
      title: 'ML Model Deployment Platform',
      description: 'Developed an end-to-end ML platform for model training, versioning, and deployment with automated CI/CD pipelines.',
      technologies: ['Python', 'MLflow', 'Docker', 'Kubernetes'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Predictive Analytics Dashboard',
      description: 'Created an interactive dashboard for predictive analytics using machine learning models and real-time data visualization.',
      technologies: ['Python', 'TensorFlow', 'React', 'D3.js'],
      github: '#',
      demo: '#'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-sm' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Portfolio
            </div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'resume', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize hover:text-blue-400 transition-colors ${activeSection === section ? 'text-blue-400' : 'text-gray-300'}`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 p-1">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                <span className="text-4xl font-bold">YN</span>
              </div>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Your Name
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Data Engineer & AI/ML Specialist
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Transforming raw data into actionable insights through cutting-edge engineering and machine learning solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3 text-lg"
            >
              View My Work
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline" 
              className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 text-lg"
            >
              Get In Touch
            </Button>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-gray-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  I'm a passionate Data Engineer and AI/ML Specialist with expertise in building scalable data pipelines, 
                  implementing machine learning solutions, and transforming complex data into actionable business insights.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  With a strong background in distributed systems, cloud technologies, and modern ML frameworks, 
                  I help organizations leverage their data to drive innovation and growth.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <div className="flex items-center gap-2 text-blue-400">
                    <Database className="w-5 h-5" />
                    <span>Data Engineering</span>
                  </div>
                  <div className="flex items-center gap-2 text-purple-400">
                    <Brain className="w-5 h-5" />
                    <span>Machine Learning</span>
                  </div>
                  <div className="flex items-center gap-2 text-green-400">
                    <Code className="w-5 h-5" />
                    <span>Software Development</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category} className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-colors">
                <CardHeader>
                  <CardTitle className="text-xl text-center text-blue-400">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-slate-700 text-gray-300 hover:bg-blue-600 hover:text-white transition-colors">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-400">{project.title}</CardTitle>
                  <CardDescription className="text-gray-300">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="border-purple-400 text-purple-400">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button size="sm" variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button size="sm" variant="outline" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-white">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Resume
          </h2>
          <div className="max-w-4xl mx-auto text-center">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <p className="text-lg text-gray-300 mb-8">
                  Download my complete resume to learn more about my experience, education, and achievements.
                </p>
                <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3 text-lg">
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <p className="text-lg text-gray-300 text-center mb-8">
                  I'm always interested in new opportunities and collaborations. Let's connect!
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white">
                    <Mail className="w-5 h-5 mr-2" />
                    Email Me
                  </Button>
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn
                  </Button>
                  <Button variant="outline" className="border-gray-400 text-gray-400 hover:bg-gray-400 hover:text-white">
                    <Github className="w-5 h-5 mr-2" />
                    GitHub
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-700">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2024 Your Name. Built with React and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

