import React , { useState, useEffect,useRef } from 'react'
import { Link } from 'react-router-dom';

const Aboutus = () => {
    const [expandedFaq, setExpandedFaq] = useState(null);
     const [isVisible, setIsVisible] = useState(false);
  const sectionRefs = useRef([]);

  useEffect(() => {
    setIsVisible(true);

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

    const whyWeStarted = [
        {
            icon: '💡',
            title: 'The Problem',
            description: 'AI is advancing rapidly, but most businesses struggle to harness its power. Enterprise solutions are expensive, and DIY approaches often fail.'
        },
        {
            icon: '🎯',
            title: 'Our Solution',
            description: 'We build production-ready AI agents and software with startup speed and precision. No bureaucracy, no bloat—just solutions that work.'
        },
        {
            icon: '🚀',
            title: 'The Vision',
            description: 'Making world-class AI accessible to every company, regardless of size or budget. Empowering businesses to compete and innovate.'
        }
    ];

    const traction = [
        { metric: '6mo', label: 'Since Launch' },
        { metric: '15+', label: 'Active Clients' },
        { metric: '100%', label: 'Retention Rate' },
        { metric: '$500K', label: 'ARR' }
    ];

    const values = [
        {
            icon: '⚡',
            title: 'Speed',
            description: 'We ship fast and iterate quickly. Time is our most valuable asset.'
        },
        {
            icon: '🎨',
            title: 'Craft',
            description: 'Beautiful products that are both powerful and delightful to use.'
        },
        {
            icon: '🤝',
            title: 'Partnership',
            description: 'Your success is our success. We work alongside you, not just for you.'
        },
        {
            icon: '📈',
            title: 'Transparency',
            description: 'Honest communication, clear pricing, and open about our journey.'
        }
    ];

    const expertise = [
        { area: 'AI Agents', description: 'Autonomous systems that make intelligent decisions' },
        { area: 'Custom Software', description: 'Bespoke AI applications built for your needs' },
        { area: 'Automation', description: 'Intelligent workflows that scale your operations' },
        { area: 'Integration', description: 'Seamlessly connect AI into your existing systems' }
    ];

    const faqs = [
        {
            q: 'Why choose a startup over an established company?',
            a: 'Direct access to decision-makers, faster execution, more flexibility, and transparent pricing. We\'re building our reputation—your success is our success.'
        },
        {
            q: 'What makes you different?',
            a: 'We focus on shipping production-ready solutions, not endless research. We move fast, stay lean, and price fairly. No enterprise sales process.'
        },
        {
            q: 'How do you ensure quality?',
            a: 'Our team has built AI systems at leading tech companies. We bring that expertise with startup agility. Every project includes testing, documentation, and support.'
        },
        {
            q: 'What\'s your pricing model?',
            a: 'Project-based or retainer, depending on scope. We provide transparent quotes upfront—no hidden fees, no surprises.'
        }
    ];
    return (
        <div className="min-h-screen bg-white">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes countUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-slideDown {
          animation: slideDown 0.6s ease-out forwards;
        }

        .animate-scaleIn {
          animation: scaleIn 0.6s ease-out forwards;
        }

        .animate-countUp {
          animation: countUp 0.5s ease-out forwards;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out forwards;
        }

        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out forwards;
        }

        .scroll-animate {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .scroll-animate.animate-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-700 { animation-delay: 0.7s; }
        .delay-800 { animation-delay: 0.8s; }

        .initial-hidden {
          opacity: 0;
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100 animate-slideDown">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link 
            to="/"
            className="text-xl sm:text-2xl font-black text-slate-900 hover:opacity-70 transition-opacity duration-300"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Neural Forge
          </Link>
          
          <div className="flex items-center gap-4 sm:gap-6">
            <Link 
              to="/" 
              className="text-slate-600 hover:text-slate-900 transition-colors duration-300 text-sm sm:text-base"
            >
              Home
            </Link>
            <Link 
              to="/start-project"
              className="bg-slate-900 text-white px-4 sm:px-6 py-2 rounded-lg font-semibold hover:bg-slate-700 hover:scale-105 transition-all duration-300 text-sm sm:text-base"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 sm:pt-40 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 
            className={`text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight initial-hidden ${
              isVisible ? 'animate-fadeInUp' : ''
            }`}
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            We Build AI Products That Actually Ship
          </h1>
          
          <p className={`text-lg sm:text-xl text-slate-600 mb-12 leading-relaxed initial-hidden ${
            isVisible ? 'animate-fadeInUp delay-200' : ''
          }`}>
            A small team obsessed with turning ambitious AI ideas into production-ready solutions. No fluff, no delays—just exceptional work.
          </p>

          {/* Traction Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {traction.map((item, index) => (
              <div 
                key={index}
                className={`text-center initial-hidden ${
                  isVisible ? `animate-countUp delay-${300 + index * 100}` : ''
                } hover:scale-110 transition-transform duration-300`}
              >
                <div 
                  className="text-3xl sm:text-4xl font-black text-slate-900 mb-1"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {item.metric}
                </div>
                <div className="text-xs sm:text-sm text-slate-500 uppercase tracking-wider">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-8 sm:gap-12">
            {whyWeStarted.map((item, index) => (
              <div 
                key={index} 
                ref={(el) => (sectionRefs.current[index] = el)}
                className="text-center group hover:-translate-y-2 transition-all duration-500 ease-out scroll-animate"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 group-hover:scale-125 transition-transform duration-500">
                  {item.icon}
                </div>
                <h3 
                  className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 group-hover:text-slate-600 transition-colors duration-300"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 
            className="text-3xl sm:text-4xl font-black text-slate-900 mb-12 sm:mb-16 text-center"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            What We Build
          </h2>

          <div className="grid sm:grid-cols-2 gap-8 sm:gap-12">
            {expertise.map((item, index) => (
              <div 
                key={index}
                ref={(el) => (sectionRefs.current[3 + index] = el)}
                className="group hover:translate-x-2 transition-all duration-300 ease-out scroll-animate"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 group-hover:text-slate-600 transition-colors duration-300">
                  {item.area}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 
            className="text-3xl sm:text-4xl font-black text-slate-900 mb-12 sm:mb-16 text-center"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            How We Work
          </h2>

          <div className="grid sm:grid-cols-2 gap-8 sm:gap-12">
            {values.map((value, index) => (
              <div 
                key={index}
                ref={(el) => (sectionRefs.current[7 + index] = el)} 
                className="flex gap-4 group hover:-translate-y-1 transition-all duration-300 scroll-animate"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl sm:text-4xl flex-shrink-0 group-hover:scale-125 transition-transform duration-300">
                  {value.icon}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 group-hover:text-slate-600 transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 
            className="text-3xl sm:text-4xl font-black text-slate-900 mb-12 sm:mb-16 text-center"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Common Questions
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                ref={(el) => (sectionRefs.current[11 + index] = el)}
                className="border-b border-slate-200 pb-6 hover:border-slate-400 transition-colors duration-300 scroll-animate"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full flex items-center justify-between text-left group"
                >
                  <span className="text-base sm:text-lg font-semibold text-slate-900 pr-4 group-hover:text-slate-600 transition-colors duration-300">
                    {faq.q}
                  </span>
                  <svg 
                    className={`w-5 h-5 text-slate-400 transition-all duration-500 flex-shrink-0 ${
                      expandedFaq === index ? 'rotate-180 text-slate-900' : ''
                    }`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    expandedFaq === index ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple Statement */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Let's Build Something Great
          </h2>
          <p className="text-base sm:text-lg text-white/80 mb-10">
            We're selective about the projects we take on. If you're solving a real problem and value quality—we should talk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/start-project"
              className="bg-white text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 hover:scale-105 transition-all duration-300 text-sm sm:text-base"
            >
              Start a Project
            </Link>
            <a 
              href="mailto:isaac@sekanihub.com"
              className="bg-white/10 text-white px-8 py-3 rounded-lg font-semibold border border-white/20 hover:bg-white/20 hover:border-white/40 hover:scale-105 transition-all duration-300 text-sm sm:text-base"
            >
              Send us an Email
            </a>
          </div>
        </div>
      </section>

      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet" />
    </div>
    )
}

export default Aboutus