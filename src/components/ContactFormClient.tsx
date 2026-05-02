"use client";

import { useState } from "react";

interface ContactFormProps {
  locale: string;
  contactT: Record<string, string>;
}

export default function ContactFormClient({ locale, contactT }: ContactFormProps) {
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
    <form onSubmit={handleSubmit} className="glass rounded-2xl p-8">
      <div className="mb-6">
        <label htmlFor="name" className="block text-[14px] font-medium text-[rgba(255,255,255,0.7)] mb-2">
          {contactT.name}
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-3 text-white placeholder-[rgba(255,255,255,0.3)] focus:outline-none focus:border-accent-teal transition-colors"
          placeholder={contactT.namePlaceholder}
          required
        />
      </div>
      
      <div className="mb-6">
        <label htmlFor="email" className="block text-[14px] font-medium text-[rgba(255,255,255,0.7)] mb-2">
          {contactT.email}
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-3 text-white placeholder-[rgba(255,255,255,0.3)] focus:outline-none focus:border-accent-teal transition-colors"
          placeholder={contactT.emailPlaceholder}
          required
        />
      </div>
      
      <div className="mb-6">
        <label htmlFor="subject" className="block text-[14px] font-medium text-[rgba(255,255,255,0.7)] mb-2">
          {contactT.subject}
        </label>
        <input
          type="text"
          id="subject"
          value={formData.subject}
          onChange={(e) => setFormData({...formData, subject: e.target.value})}
          className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-3 text-white placeholder-[rgba(255,255,255,0.3)] focus:outline-none focus:border-accent-teal transition-colors"
          placeholder={contactT.subjectPlaceholder}
          required
        />
      </div>
      
      <div className="mb-8">
        <label htmlFor="message" className="block text-[14px] font-medium text-[rgba(255,255,255,0.7)] mb-2">
          {contactT.message}
        </label>
        <textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
          rows={6}
          className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-3 text-white placeholder-[rgba(255,255,255,0.3)] focus:outline-none focus:border-accent-teal transition-colors resize-vertical"
          placeholder={contactT.messagePlaceholder}
          required
        />
      </div>
      
      <button
        type="submit"
        className="w-full bg-accent-teal text-primary-dark py-3 rounded-lg font-bold text-[14px] tracking-[0.5px] hover:translate-y-[-1px] hover:shadow-[0_4px_15px_rgba(78,205,196,0.3)] transition-all"
      >
        {contactT.send}
      </button>
    </form>
  );
}
