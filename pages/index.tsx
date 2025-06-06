import React, { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main className="min-h-screen bg-[#f7f5ef] text-[#1e293b] font-sans">
      <header>
        <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md relative z-10" role="navigation" aria-label="Main navigation">
          <div className="flex items-center space-x-3">
            <img src="/logo.svg" alt="Agentic Pacific Logo" className="w-10" />
            <span className="text-xl font-semibold text-[#1e293b]">Agentic Pacific</span>
          </div>
          <div className="hidden md:flex space-x-6 text-[#1e293b] font-medium">
            <a href="#what-we-do" className="hover:text-[#ff6700]" aria-current="page">What We Do</a>
            <a href="#demo" className="hover:text-[#ff6700]">Demo</a>
            <a href="#contact" className="hover:text-[#ff6700]">Contact</a>
          </div>
          <button
            className="md:hidden text-[#1e293b] focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          {menuOpen && (
            <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center py-4 space-y-4 md:hidden">
              <a href="#what-we-do" className="text-[#1e293b] hover:text-[#ff6700]" aria-current="page">What We Do</a>
              <a href="#demo" className="text-[#1e293b] hover:text-[#ff6700]">Demo</a>
              <a href="#contact" className="text-[#1e293b] hover:text-[#ff6700]">Contact</a>
            </div>
          )}
        </nav>
      </header>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center pt-32 pb-24 px-4">
        <h1 className="text-4xl font-bold mb-2">Your partner in AI-powered growth</h1>
        <p className="text-lg max-w-2xl">
          Agentic Pacific helps you harness the best of AI with turnkey setup and ongoing support. We track the latest advancements so you don't have to — and we tailor solutions to your business, not the other way around.
        </p>
      </section>

      {/* What We Do */}
      <section id="what-we-do" className="bg-white py-16 px-4">
        <h2 className="text-2xl font-semibold text-center mb-8">What We Do</h2>
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
          <div className="bg-[#f7f5ef] p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-bold text-xl mb-2">AI Agents</h3>
            <p className="text-gray-700">Around-the-clock agents trained on your business to answer questions, collect information, and route inquiries intelligently.</p>
          </div>
          <div className="bg-[#f7f5ef] p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-bold text-xl mb-2">Service Automation</h3>
            <p className="text-gray-700">Responsive agents that handle common tasks, provide helpful answers, and escalate when needed — without delay.</p>
          </div>
          <div className="bg-[#f7f5ef] p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-bold text-xl mb-2">Workflow Orchestration</h3>
            <p className="text-gray-700">End-to-end automation that connects the right tools, actions, and insights — built to enhance your daily operations.</p>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-16 px-4 bg-[#f0f4f8]">
        <h2 className="text-2xl font-semibold text-center mb-6">Live Demo</h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="mb-4">Preview our live chatbot and example use cases.</p>
          <div className="border-2 border-dashed border-gray-300 p-12 rounded-xl">[Demo Placeholder]</div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-16 px-4 text-center">
        <h2 className="text-2xl font-semibold mb-4">Let’s talk</h2>
        <p className="mb-6">Curious if AI can help your business? Let’s talk. Email us at <span className="font-mono">hello@agenticpacific.com</span></p>
        <button className="bg-[#ff6700] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#e65c00] transition">
          Contact Us
        </button>
      </section>
    </main>
  );
}