import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const Homepage = () => {
      const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
}

  return (
    <div className="bg-slate-50 overflow-x-hidden font-sans">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 shadow-lg' : 'bg-white/95'
      } backdrop-blur-lg border-b border-black/5`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-4 sm:py-6 flex justify-between items-center">
          <button 
            onClick={() => scrollToSection('hero')}
            className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 tracking-tight hover:opacity-80 transition-opacity"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Sekani Hub
          </button>
          
          {/* Desktop Menu */}
          <ul className="hidden lg:flex gap-8 xl:gap-12 items-center">
            <li>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-slate-900 font-medium hover:text-orange-500 transition-colors relative group"
              >
                Services
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('features')}
                className="text-slate-900 font-medium hover:text-orange-500 transition-colors relative group"
              >
                Features
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
              </button>
            </li>
            <li>
              <Link to='/about-us'>
              <button 
                
                className="text-slate-900 font-medium hover:text-orange-500 transition-colors relative group"
              >
                About Us
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
              </button>
              </Link>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-slate-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-500 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-orange-500/30"
              >
                Get Started
              </button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-slate-900 transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-slate-900 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-slate-900 transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? 'max-h-96' : 'max-h-0'
        }`}>
          <div className="px-4 sm:px-6 pb-6 space-y-4 bg-white border-t border-slate-200">
            <button 
              onClick={() => scrollToSection('services')}
              className="block w-full text-left py-3 text-slate-900 font-medium hover:text-orange-500 transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className="block w-full text-left py-3 text-slate-900 font-medium hover:text-orange-500 transition-colors"
            >
              Features
            </button>
            <Link to='/about-us'>
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left py-3 text-slate-900 font-medium hover:text-orange-500 transition-colors"
            >
              About Us

            </button>
            </Link>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full bg-slate-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-500 transition-all duration-300"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center pt-24 sm:pt-28 lg:pt-20 px-4 sm:px-6 lg:px-20 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
        {/* Animated background element */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center relative z-10">
          <div className="space-y-4 sm:space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Building{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-orange-500 bg-clip-text text-transparent">
                Intelligent
              </span>{' '}
              Solutions for Tomorrow
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-white/85 leading-relaxed">
              We craft cutting-edge AI agents and software that transform how businesses operate. From autonomous decision-making systems to intuitive user applications, we bring artificial intelligence to life.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6">
              <button 
                onClick={() => scrollToSection('services')}
                className="bg-orange-500 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:-translate-y-1 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/40 text-center"
              >
                Explore Solutions
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-transparent text-white px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg border-2 border-white/30 hover:bg-white/10 hover:border-white transition-all duration-300 text-center"
              >
                Talk to Us
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:gap-4">
            {[
              { icon: '🤖', title: 'AI Agents' },
              { icon: '⚡', title: 'Fast Deploy' },
              { icon: '🎯', title: 'Precision' },
              { icon: '🔒', title: 'Secure' },
              { icon: '📊', title: 'Analytics' },
              { icon: '🌐', title: 'Scalable' }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6 hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-400 hover:-translate-y-2 group"
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h4 className="text-white font-semibold text-xs sm:text-sm">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20 space-y-3 sm:space-y-4">
            <div className="text-xs sm:text-sm font-semibold text-orange-500 uppercase tracking-widest">
              What We Do
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 px-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Our Core Services
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto px-4">
              We specialize in two powerful domains that are reshaping the digital landscape
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {/* AI Agent Development */}
            <div className="group relative bg-slate-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 hover:-translate-y-2 transition-all duration-400 hover:shadow-2xl border-2 border-transparent hover:border-slate-200 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left"></div>
              
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-500 to-cyan-500 rounded-lg sm:rounded-xl flex items-center justify-center text-3xl sm:text-4xl mb-4 sm:mb-6">
                🤖
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-3 sm:mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                AI Agent Development
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4 sm:mb-6">
                Build sophisticated AI agents that work autonomously to solve complex problems, make intelligent decisions, and adapt to changing environments in real-time.
              </p>
              <ul className="space-y-2 sm:space-y-3">
                {[
                  'Custom agent architecture design',
                  'Natural language processing capabilities',
                  'Multi-agent coordination systems',
                  'Autonomous decision-making frameworks',
                  'Continuous learning and adaptation'
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-slate-900">
                    <span className="text-orange-500 font-bold mt-0.5 sm:mt-1 flex-shrink-0">→</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* AI-Powered Software */}
            <div className="group relative bg-slate-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 hover:-translate-y-2 transition-all duration-400 hover:shadow-2xl border-2 border-transparent hover:border-slate-200 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left"></div>
              
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-500 to-cyan-500 rounded-lg sm:rounded-xl flex items-center justify-center text-3xl sm:text-4xl mb-4 sm:mb-6">
                💻
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-3 sm:mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                AI-Powered Software
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4 sm:mb-6">
                Create intelligent applications that harness the power of AI to deliver exceptional user experiences, automate workflows, and unlock new capabilities.
              </p>
              <ul className="space-y-2 sm:space-y-3">
                {[
                  'Intelligent automation platforms',
                  'Predictive analytics tools',
                  'Computer vision applications',
                  'Conversational AI interfaces',
                  'Custom ML model integration'
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-slate-900">
                    <span className="text-orange-500 font-bold mt-0.5 sm:mt-1 flex-shrink-0">→</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 -translate-x-1/4 translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20 space-y-3 sm:space-y-4">
            <div className="text-xs sm:text-sm font-semibold text-orange-500 uppercase tracking-widest">
              Why Choose Us
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white px-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Built for Performance
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-white/70 max-w-2xl mx-auto px-4">
              Our solutions are engineered with precision and designed for scale
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {[
              {
                number: '01',
                title: 'Cutting-Edge Technology',
                description: 'We leverage the latest advances in machine learning, neural networks, and AI research to build solutions that stay ahead of the curve.'
              },
              {
                number: '02',
                title: 'Scalable Architecture',
                description: 'Our systems are designed to grow with your business, handling increased demand without compromising performance or reliability.'
              },
              {
                number: '03',
                title: 'Custom Solutions',
                description: 'Every business is unique. We craft tailored AI solutions that align perfectly with your specific needs and objectives.'
              },
              {
                number: '04',
                title: 'Rapid Deployment',
                description: 'Our streamlined development process ensures quick time-to-market without sacrificing quality or functionality.'
              },
              {
                number: '05',
                title: 'Enterprise Security',
                description: 'Built with security-first principles, our solutions protect your data and ensure compliance with industry standards.'
              },
              {
                number: '06',
                title: 'Ongoing Support',
                description: 'Our partnership doesn\'t end at deployment. We provide continuous optimization, updates, and dedicated support.'
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="text-center p-6 sm:p-8 hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="text-5xl sm:text-6xl lg:text-7xl font-black bg-gradient-to-r from-cyan-400 to-orange-500 bg-clip-text text-transparent mb-3 sm:mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {feature.number}
                </div>
                <h4 className="text-white text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4">
                  {feature.title}
                </h4>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 space-y-4 sm:space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white px-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Ready to Transform Your Business?
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-white/80 max-w-2xl mx-auto px-4">
                Let's build the future together. Get in touch to discuss how our AI solutions can drive your success.
              </p>
              <Link 
                to= '/start-project'
                className="inline-block bg-orange-500 text-white px-8 sm:px-10 lg:px-12 py-4 sm:py-5 rounded-lg font-semibold text-base sm:text-lg hover:-translate-y-1 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/40"
              >
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="about" className="bg-slate-900 text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-12">
            <div className="space-y-3 sm:space-y-4 sm:col-span-2 lg:col-span-1">
              <h3 className="text-2xl sm:text-3xl font-black" style={{ fontFamily: "'Playfair Display', serif" }}>Sekani Hub</h3>
              <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                Pioneering AI solutions that empower businesses to achieve more. We turn artificial intelligence into practical tools that solve real-world challenges.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-base sm:text-lg mb-4 sm:mb-6">Services</h4>
              <ul className="space-y-2 sm:space-y-3">
                {['AI Agents', 'AI Software', 'Consulting', 'Training'].map((item, index) => (
                  <li key={index}>
                    <button 
                      onClick={() => scrollToSection('services')}
                      className="text-sm sm:text-base text-white/70 hover:text-cyan-400 transition-colors"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-base sm:text-lg mb-4 sm:mb-6">Company</h4>
              <ul className="space-y-2 sm:space-y-3">
                {['About Us', 'Careers', 'Case Studies', 'Blog'].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-sm sm:text-base text-white/70 hover:text-cyan-400 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-base sm:text-lg mb-4 sm:mb-6">Contact</h4>
              <ul className="space-y-2 sm:space-y-3">
                {[
                  { text: 'Email Us', href: 'mailto:contact@neuralforge.ai' },
                  { text: 'Schedule Demo', href: '#' },
                  { text: 'Support', href: '#' },
                  { text: 'Partners', href: '#' }
                ].map((item, index) => (
                  <li key={index}>
                    <a href={item.href} className="text-sm sm:text-base text-white/70 hover:text-cyan-400 transition-colors">
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="pt-6 sm:pt-8 border-t border-white/10 text-center text-xs sm:text-sm text-white/50">
            <p>&copy; 2026 Sekani Hub. All rights reserved. Building the future with AI.</p>
          </div>
        </div>
      </footer>

      {/* Google Fonts Link - Add this to your index.html */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet" />
    </div>
  
  )
}

export default Homepage