import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Getstartpage = () => {
    const [currentStep, setCurrentStep] = useState(1);
      const navigate = useNavigate();

  const [formData, setFormData] = useState({
    // Step 1: Project Type
    projectType: '',
    
    // Step 2: Project Details
    projectName: '',
    projectDescription: '',
    timeline: '',
    budget: '',
    
    // Step 3: Requirements
    features: [],
    industry: '',
    targetAudience: '',
    
    // Step 4: Contact Info
    fullName: '',
    email: '',
    company: '',
    phone: '',
    hearAboutUs: ''
  });

  const totalSteps = 4;

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFeatureToggle = (feature) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    navigate('/project-submitted');
  };

  const progressPercentage = (currentStep / totalSteps) * 100;
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

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
        <div className="max-w-4xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-8 sm:mb-12">
            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Start Your <span className="bg-gradient-to-r from-cyan-400 to-orange-500 bg-clip-text text-transparent">AI Project</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-white/70 max-w-2xl mx-auto">
              Tell us about your vision, and we'll help bring it to life with cutting-edge AI solutions
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8 sm:mb-12">
            <div className="flex justify-between items-center mb-3 sm:mb-4">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex items-center flex-1">
                  <div className="flex flex-col items-center flex-1">
                    <div 
                      className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-sm sm:text-base transition-all duration-300 ${
                        currentStep >= step 
                          ? 'bg-gradient-to-r from-orange-500 to-cyan-500 text-white scale-110' 
                          : 'bg-white/10 text-white/50'
                      }`}
                    >
                      {step}
                    </div>
                    <div className={`text-xs sm:text-sm mt-2 text-center hidden sm:block transition-colors ${
                      currentStep >= step ? 'text-white font-semibold' : 'text-white/50'
                    }`}>
                      {step === 1 && 'Type'}
                      {step === 2 && 'Details'}
                      {step === 3 && 'Requirements'}
                      {step === 4 && 'Contact'}
                    </div>
                  </div>
                  {step < 4 && (
                    <div className={`h-1 flex-1 mx-2 rounded-full transition-all duration-300 ${
                      currentStep > step ? 'bg-gradient-to-r from-orange-500 to-cyan-500' : 'bg-white/10'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>
            <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-orange-500 to-cyan-500 transition-all duration-500 ease-out"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>

          {/* Form Card */}
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border border-white/10 shadow-2xl">
            <form onSubmit={handleSubmit}>
              {/* Step 1: Project Type */}
              {currentStep === 1 && (
                <div className="space-y-6 sm:space-y-8">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                      What type of project are you looking to build?
                    </h2>
                    <p className="text-sm sm:text-base text-white/60">Select the option that best describes your needs</p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    {[
                      { value: 'ai-agent', icon: '🤖', title: 'AI Agent', desc: 'Autonomous intelligent systems' },
                      { value: 'ai-software', icon: '💻', title: 'AI Software', desc: 'Custom AI applications' },
                      { value: 'consulting', icon: '💡', title: 'Consulting', desc: 'Strategy & guidance' },
                      { value: 'other', icon: '✨', title: 'Other', desc: 'Custom requirements' }
                    ].map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => handleInputChange('projectType', option.value)}
                        className={`p-6 sm:p-8 rounded-xl sm:rounded-2xl border-2 transition-all duration-300 text-left group hover:scale-105 ${
                          formData.projectType === option.value
                            ? 'border-orange-500 bg-orange-500/10'
                            : 'border-white/10 bg-white/5 hover:border-white/30'
                        }`}
                      >
                        <div className="text-4xl sm:text-5xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform">{option.icon}</div>
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">{option.title}</h3>
                        <p className="text-xs sm:text-sm text-white/60">{option.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Project Details */}
              {currentStep === 2 && (
                <div className="space-y-6 sm:space-y-8">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                      Tell us about your project
                    </h2>
                    <p className="text-sm sm:text-base text-white/60">Provide some details so we can understand your vision</p>
                  </div>

                  <div className="space-y-5 sm:space-y-6">
                    <div>
                      <label className="block text-white font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
                        Project Name
                      </label>
                      <input
                        type="text"
                        value={formData.projectName}
                        onChange={(e) => handleInputChange('projectName', e.target.value)}
                        placeholder="e.g., Customer Support AI Agent"
                        className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/10 border border-white/20 rounded-lg sm:rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/50 transition-all text-sm sm:text-base"
                      />
                    </div>

                    <div>
                      <label className="block text-white font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
                        Project Description
                      </label>
                      <textarea
                        value={formData.projectDescription}
                        onChange={(e) => handleInputChange('projectDescription', e.target.value)}
                        placeholder="Describe what you want to build and the problem it will solve..."
                        rows="5"
                        className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/10 border border-white/20 rounded-lg sm:rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/50 transition-all resize-none text-sm sm:text-base"
                      ></textarea>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
                      <div>
                        <label className="block text-white font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
                          Timeline
                        </label>
                        <select
                          value={formData.timeline}
                          onChange={(e) => handleInputChange('timeline', e.target.value)}
                          className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/10 border border-white/20 rounded-lg sm:rounded-xl text-white focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/50 transition-all text-sm sm:text-base"
                        >
                          <option value="" className="bg-slate-800">Select timeline</option>
                          <option value="urgent" className="bg-slate-800">ASAP (1-2 weeks)</option>
                          <option value="fast" className="bg-slate-800">Fast (1 month)</option>
                          <option value="standard" className="bg-slate-800">Standard (2-3 months)</option>
                          <option value="flexible" className="bg-slate-800">Flexible (3+ months)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-white font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
                          Budget Range
                        </label>
                        <select
                          value={formData.budget}
                          onChange={(e) => handleInputChange('budget', e.target.value)}
                          className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/10 border border-white/20 rounded-lg sm:rounded-xl text-white focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/50 transition-all text-sm sm:text-base"
                        >
                          <option value="" className="bg-slate-800">Select budget</option>
                          <option value="10k-25k" className="bg-slate-800">$10k - $25k</option>
                          <option value="25k-50k" className="bg-slate-800">$25k - $50k</option>
                          <option value="50k-100k" className="bg-slate-800">$50k - $100k</option>
                          <option value="100k+" className="bg-slate-800">$100k+</option>
                          <option value="discuss" className="bg-slate-800">Prefer to discuss</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Requirements */}
              {currentStep === 3 && (
                <div className="space-y-6 sm:space-y-8">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                      What features do you need?
                    </h2>
                    <p className="text-sm sm:text-base text-white/60">Select all that apply to your project</p>
                  </div>

                  <div className="space-y-5 sm:space-y-6">
                    <div>
                      <label className="block text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
                        Key Features
                      </label>
                      <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                        {[
                          'Natural Language Processing',
                          'Computer Vision',
                          'Predictive Analytics',
                          'Automation Workflows',
                          'Data Integration',
                          'Real-time Processing',
                          'Multi-language Support',
                          'Custom Training'
                        ].map((feature) => (
                          <button
                            key={feature}
                            type="button"
                            onClick={() => handleFeatureToggle(feature)}
                            className={`px-4 sm:px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl border-2 transition-all duration-300 text-left text-sm sm:text-base ${
                              formData.features.includes(feature)
                                ? 'border-cyan-500 bg-cyan-500/10 text-white'
                                : 'border-white/20 bg-white/5 text-white/70 hover:border-white/40'
                            }`}
                          >
                            <span className="mr-2 sm:mr-3">{formData.features.includes(feature) ? '✓' : '○'}</span>
                            {feature}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
                      <div>
                        <label className="block text-white font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
                          Industry
                        </label>
                        <select
                          value={formData.industry}
                          onChange={(e) => handleInputChange('industry', e.target.value)}
                          className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/10 border border-white/20 rounded-lg sm:rounded-xl text-white focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/50 transition-all text-sm sm:text-base"
                        >
                          <option value="" className="bg-slate-800">Select industry</option>
                          <option value="healthcare" className="bg-slate-800">Healthcare</option>
                          <option value="finance" className="bg-slate-800">Finance</option>
                          <option value="retail" className="bg-slate-800">Retail</option>
                          <option value="technology" className="bg-slate-800">Technology</option>
                          <option value="education" className="bg-slate-800">Education</option>
                          <option value="manufacturing" className="bg-slate-800">Manufacturing</option>
                          <option value="other" className="bg-slate-800">Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-white font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
                          Target Audience
                        </label>
                        <input
                          type="text"
                          value={formData.targetAudience}
                          onChange={(e) => handleInputChange('targetAudience', e.target.value)}
                          placeholder="e.g., Enterprise customers, Developers"
                          className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/10 border border-white/20 rounded-lg sm:rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/50 transition-all text-sm sm:text-base"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Contact Information */}
              {currentStep === 4 && (
                <div className="space-y-6 sm:space-y-8">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                      How can we reach you?
                    </h2>
                    <p className="text-sm sm:text-base text-white/60">We'll use this information to get in touch with you</p>
                  </div>

                  <div className="space-y-5 sm:space-y-6">
                    <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
                      <div>
                        <label className="block text-white font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          value={formData.fullName}
                          onChange={(e) => handleInputChange('fullName', e.target.value)}
                          placeholder="John Doe"
                          required
                          className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/10 border border-white/20 rounded-lg sm:rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/50 transition-all text-sm sm:text-base"
                        />
                      </div>

                      <div>
                        <label className="block text-white font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="john@company.com"
                          required
                          className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/10 border border-white/20 rounded-lg sm:rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/50 transition-all text-sm sm:text-base"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
                      <div>
                        <label className="block text-white font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
                          Company Name
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          placeholder="Your Company"
                          className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/10 border border-white/20 rounded-lg sm:rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/50 transition-all text-sm sm:text-base"
                        />
                      </div>

                      <div>
                        <label className="block text-white font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="+1 (555) 123-4567"
                          className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/10 border border-white/20 rounded-lg sm:rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/50 transition-all text-sm sm:text-base"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-white font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
                        How did you hear about us?
                      </label>
                      <select
                        value={formData.hearAboutUs}
                        onChange={(e) => handleInputChange('hearAboutUs', e.target.value)}
                        className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/10 border border-white/20 rounded-lg sm:rounded-xl text-white focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/50 transition-all text-sm sm:text-base"
                      >
                        <option value="" className="bg-slate-800">Select an option</option>
                        <option value="google" className="bg-slate-800">Google Search</option>
                        <option value="social" className="bg-slate-800">Social Media</option>
                        <option value="referral" className="bg-slate-800">Referral</option>
                        <option value="event" className="bg-slate-800">Event/Conference</option>
                        <option value="other" className="bg-slate-800">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg sm:rounded-xl p-4 sm:p-6">
                    <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                      By submitting this form, you agree to our privacy policy and consent to being contacted by our team regarding your project inquiry.
                    </p>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8 sm:mt-12">
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="order-2 sm:order-1 px-6 sm:px-8 py-3 sm:py-4 bg-white/10 text-white rounded-lg sm:rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20 text-sm sm:text-base"
                  >
                    ← Previous
                  </button>
                )}
                
                {currentStep < totalSteps ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={currentStep === 1 && !formData.projectType}
                    className="order-1 sm:order-2 flex-1 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-orange-500 to-cyan-500 text-white rounded-lg sm:rounded-xl font-semibold hover:shadow-xl hover:shadow-orange-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                  >
                    Continue →
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="order-1 sm:order-2 flex-1 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-orange-500 to-cyan-500 text-white rounded-lg sm:rounded-xl font-semibold hover:shadow-xl hover:shadow-orange-500/50 transition-all duration-300 text-sm sm:text-base"
                  >
                    Submit Project →
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 sm:mt-12 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="text-center p-4 sm:p-6 bg-white/5 backdrop-blur-lg rounded-lg sm:rounded-xl border border-white/10">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-1 sm:mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>24h</div>
              <div className="text-xs sm:text-sm text-white/60">Response Time</div>
            </div>
            <div className="text-center p-4 sm:p-6 bg-white/5 backdrop-blur-lg rounded-lg sm:rounded-xl border border-white/10">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-1 sm:mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>100+</div>
              <div className="text-xs sm:text-sm text-white/60">Projects Delivered</div>
            </div>
            <div className="text-center p-4 sm:p-6 bg-white/5 backdrop-blur-lg rounded-lg sm:rounded-xl border border-white/10 col-span-2 sm:col-span-1">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-1 sm:mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>98%</div>
              <div className="text-xs sm:text-sm text-white/60">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </main>

      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet" />
    </div>
  )
}

export default Getstartpage