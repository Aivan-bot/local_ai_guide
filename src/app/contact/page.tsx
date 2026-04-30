"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-primary-dark text-white">
      <Navbar />
      
      <main className="pt-24 px-4 lg:px-[max(60px,(100vw-1200px)/2)] pb-20">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <span className="inline-block text-[11px] tracking-[3px] uppercase text-accent-teal font-semibold mb-5">
            Contact
          </span>
          
          <h1 className="font-montserrat text-[48px] font-bold text-white leading-[1.2] mb-6">
            Get in Touch
          </h1>
          
          <p className="text-[18px] text-[rgba(255,255,255,0.6)] leading-[1.6] max-w-2xl mx-auto">
            Have a question about our services, workshops, or want to discuss a project? We'd love to hear from you.
          </p>
        </div>
        
        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="glass rounded-2xl p-8">
            <div className="mb-6">
              <label htmlFor="name" className="block text-[14px] font-medium text-[rgba(255,255,255,0.7)] mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-3 text-white placeholder-[rgba(255,255,255,0.3)] focus:outline-none focus:border-accent-teal transition-colors"
                placeholder="Your name"
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="email" className="block text-[14px] font-medium text-[rgba(255,255,255,0.7)] mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-3 text-white placeholder-[rgba(255,255,255,0.3)] focus:outline-none focus:border-accent-teal transition-colors"
                placeholder="your@email.com"
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="subject" className="block text-[14px] font-medium text-[rgba(255,255,255,0.7)] mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
                className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-3 text-white placeholder-[rgba(255,255,255,0.3)] focus:outline-none focus:border-accent-teal transition-colors"
                placeholder="What is this about?"
                required
              />
            </div>
            
            <div className="mb-8">
              <label htmlFor="message" className="block text-[14px] font-medium text-[rgba(255,255,255,0.7)] mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                rows={6}
                className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-3 text-white placeholder-[rgba(255,255,255,0.3)] focus:outline-none focus:border-accent-teal transition-colors resize-vertical"
                placeholder="Tell us about your project or question..."
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-accent-teal text-primary-dark py-3 rounded-lg font-bold text-[14px] tracking-[0.5px] hover:translate-y-[-1px] hover:shadow-[0_4px_15px_rgba(78,205,196,0.3)] transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
