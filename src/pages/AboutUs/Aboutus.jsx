import React , { useState } from 'react'

const Aboutus = () => {
    const [expandedFaq, setExpandedFaq] = useState(null);

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
            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                    <a
                        href="/"
                        className="text-xl sm:text-2xl font-black text-slate-900"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        Sekani Hub
                    </a>

                    <div className="flex items-center gap-4 sm:gap-6">
                        <a href="/" className="text-slate-600 hover:text-slate-900 transition-colors text-sm sm:text-base">
                            Home
                        </a>
                        <a
                            href="/start-project"
                            className="bg-slate-900 text-white px-4 sm:px-6 py-2 rounded-lg font-semibold hover:bg-slate-700 transition-colors text-sm sm:text-base"
                        >
                            Get Started
                        </a>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-32 sm:pt-40 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <h1
                        className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        We Build AI Products That Actually Ship
                    </h1>

                    <p className="text-lg sm:text-xl text-slate-600 mb-12 leading-relaxed">
                        A small team obsessed with turning ambitious AI ideas into production-ready solutions. No fluff, no delays—just exceptional work.
                    </p>

                    {/* Traction Metrics */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                        {traction.map((item, index) => (
                            <div
                                key={index}
                                className="text-center"
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
                            <div key={index} className="text-center">
                                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6">{item.icon}</div>
                                <h3
                                    className="text-xl sm:text-2xl font-bold text-slate-900 mb-3"
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
                            <div key={index}>
                                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
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
                            <div key={index} className="flex gap-4">
                                <div className="text-3xl sm:text-4xl flex-shrink-0">{value.icon}</div>
                                <div>
                                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
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
                                className="border-b border-slate-200 pb-6"
                            >
                                <button
                                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                                    className="w-full flex items-center justify-between text-left group"
                                >
                                    <span className="text-base sm:text-lg font-semibold text-slate-900 pr-4 group-hover:text-slate-600 transition-colors">
                                        {faq.q}
                                    </span>
                                    <svg
                                        className={`w-5 h-5 text-slate-400 transition-transform flex-shrink-0 ${expandedFaq === index ? 'rotate-180' : ''
                                            }`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                </button>

                                {expandedFaq === index && (
                                    <div className="mt-4">
                                        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                                            {faq.a}
                                        </p>
                                    </div>
                                )}
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
                        <a
                            href="/start-project"
                            className="bg-white text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors text-sm sm:text-base"
                        >
                            Start a Project
                        </a>
                        <a
                            href="mailto:contact@neuralforge.ai"
                            className="bg-white/10 text-white px-8 py-3 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-colors text-sm sm:text-base"
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