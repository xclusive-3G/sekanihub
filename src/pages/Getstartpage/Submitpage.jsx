// ProjectSubmitted.jsx - Success page with real data from backend
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useMemo } from "react";

export default function ProjectSubmitted() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const state = useMemo(() => {
  return location.state || {};
}, [location.state]);

  // Redirect if no data (user directly accessed page)
  useEffect(() => {
    if (!state.projectId) {
      navigate('/start-project');
    }
  }, [state, navigate]);

  if (!state.projectId) {
    return null;
  }

  // Format current date/time for display
  const submittedDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const submittedTime = new Date().toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>

      {/* Header */}
      <header className="relative z-10 px-4 sm:px-6 lg:px-20 py-6 sm:py-8">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <a 
            href="/"
            className="text-2xl sm:text-3xl font-black text-white tracking-tight hover:opacity-80 transition-opacity"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Sekani Hub
          </a>
          <a 
            href="/"
            className="text-white/70 hover:text-white transition-colors text-sm sm:text-base"
          >
            ← Back to Home
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 px-4 sm:px-6 lg:px-20 py-8 sm:py-12">
        <div className="max-w-5xl mx-auto">
          
          {/* Success Animation & Message */}
          <div className="text-center mb-12 sm:mb-16 animate-fadeIn">
            {/* Checkmark Animation */}
            <div className="inline-flex items-center justify-center w-20 h-20 sm:w-28 sm:h-28 mb-6 sm:mb-8 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full animate-ping opacity-75"></div>
              <div className="relative bg-gradient-to-r from-green-500 to-emerald-500 rounded-full w-20 h-20 sm:w-28 sm:h-28 flex items-center justify-center shadow-2xl shadow-green-500/50">
                <svg className="w-10 h-10 sm:w-14 sm:h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
            </div>

            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-4 sm:mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Project <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">Submitted!</span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-white/80 max-w-3xl mx-auto mb-6 sm:mb-8">
              Thank you for choosing Sekani Hub! We're excited to bring your AI vision to life.
            </p>

            {/* Countdown Timer */}
            <div className="inline-flex items-center gap-3 sm:gap-4 bg-white/5 backdrop-blur-lg border border-white/10 rounded-full px-6 sm:px-8 py-3 sm:py-4">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-white/80 font-semibold text-sm sm:text-base">We'll contact you within</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <span className="text-2xl sm:text-3xl font-black text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                  24
                </span>
                <span className="text-white/60 text-sm sm:text-base">hours</span>
              </div>
            </div>
          </div>

          {/* Confirmation Card */}
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/10 shadow-2xl mb-8 sm:mb-12">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-white/10">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-orange-500 to-cyan-500 rounded-xl sm:rounded-2xl flex items-center justify-center text-2xl sm:text-3xl flex-shrink-0">
                📨
              </div>
              <div className="flex-1">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Confirmation Sent
                </h2>
                <p className="text-sm sm:text-base text-white/60">
                  We've sent a confirmation email to <span className="text-cyan-400 font-semibold">{state.email}</span>
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="bg-white/5 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10">
                <div className="text-xs sm:text-sm text-white/60 mb-1 sm:mb-2">Project ID</div>
                <div className="text-base sm:text-lg font-bold text-white font-mono break-all">{state.projectId}</div>
              </div>
              <div className="bg-white/5 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10">
                <div className="text-xs sm:text-sm text-white/60 mb-1 sm:mb-2">Project Name</div>
                <div className="text-base sm:text-lg font-bold text-white truncate" title={state.projectName}>{state.projectName}</div>
              </div>
              <div className="bg-white/5 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10">
                <div className="text-xs sm:text-sm text-white/60 mb-1 sm:mb-2">Submitted On</div>
                <div className="text-base sm:text-lg font-bold text-white">{submittedDate}</div>
              </div>
              <div className="bg-white/5 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10">
                <div className="text-xs sm:text-sm text-white/60 mb-1 sm:mb-2">Time</div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-base sm:text-lg font-bold text-green-400">{submittedTime}</span>
                </div>
              </div>
            </div>

            {/* Email Confirmation Status */}
            <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-cyan-500/10 border border-cyan-500/30 rounded-xl">
              <div className="flex items-start gap-3">
                <div className="text-2xl">✉️</div>
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg font-bold text-white mb-1">Email Confirmation</h3>
                  <p className="text-sm sm:text-base text-white/70">
                    A confirmation email has been sent to <span className="text-cyan-400 font-semibold">{state.email}</span>. 
                    Please check your inbox (and spam folder) for details about your submission.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* What Happens Next */}
          <div className="mb-8 sm:mb-12">
            <h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 sm:mb-8 text-center"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              What Happens <span className="bg-gradient-to-r from-cyan-400 to-orange-500 bg-clip-text text-transparent">Next?</span>
            </h2>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {[
                { step: 1, icon: '📧', title: 'Confirmation Email', desc: 'Check your inbox for a confirmation email with your project details', time: 'Within 5 minutes' },
                { step: 2, icon: '👥', title: 'Team Review', desc: 'Our AI specialists will review your requirements and prepare initial insights', time: '2-4 hours' },
                { step: 3, icon: '📞', title: 'Discovery Call', desc: 'We\'ll schedule a call to discuss your project in detail and answer questions', time: 'Within 24 hours' },
                { step: 4, icon: '📋', title: 'Proposal & Timeline', desc: 'Receive a detailed proposal with scope, timeline, and investment breakdown', time: '2-3 business days' }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-white/30 transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="flex items-start gap-4 sm:gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-500 to-cyan-500 rounded-xl sm:rounded-2xl flex items-center justify-center text-2xl sm:text-3xl group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2 mb-2 sm:mb-3">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <span className="text-xs sm:text-sm font-bold text-white/40">STEP {item.step}</span>
                        </div>
                        <span className="text-xs sm:text-sm text-cyan-400 font-semibold whitespace-nowrap">{item.time}</span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-sm sm:text-base text-white/60 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-gradient-to-r from-orange-500/10 to-cyan-500/10 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/20 mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
              While You Wait...
            </h3>
            
            <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
              <a 
                href="/case-studies"
                className="bg-white/5 hover:bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-white/30 transition-all duration-300 hover:-translate-y-1 text-center group"
              >
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform">📚</div>
                <h4 className="text-base sm:text-lg font-bold text-white mb-2">Browse Case Studies</h4>
                <p className="text-xs sm:text-sm text-white/60">See how we've helped others</p>
              </a>

              <a 
                href="/blog"
                className="bg-white/5 hover:bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-white/30 transition-all duration-300 hover:-translate-y-1 text-center group"
              >
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform">📖</div>
                <h4 className="text-base sm:text-lg font-bold text-white mb-2">Read Our Blog</h4>
                <p className="text-xs sm:text-sm text-white/60">Latest AI insights & trends</p>
              </a>

              <a 
                href="/"
                className="bg-white/5 hover:bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-white/30 transition-all duration-300 hover:-translate-y-1 text-center group"
              >
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform">🏠</div>
                <h4 className="text-base sm:text-lg font-bold text-white mb-2">Back to Home</h4>
                <p className="text-xs sm:text-sm text-white/60">Explore our services</p>
              </a>
            </div>
          </div>

          {/* Contact Support */}
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/10 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Have Questions?
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-white/70 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Our team is here to help. Reach out anytime and we'll get back to you right away.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <a 
                href="mailto:isaac@sekanihub.com"
                className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-orange-500 to-cyan-500 text-white rounded-lg sm:rounded-xl font-semibold hover:shadow-xl hover:shadow-orange-500/50 transition-all duration-300 hover:-translate-y-1 text-sm sm:text-base"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                Email Us
              </a>
            </div>
          </div>

        </div>
      </main>

      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet" />

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}