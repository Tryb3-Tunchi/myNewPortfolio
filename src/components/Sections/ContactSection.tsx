// src/components/Sections/ContactSection.tsx
import React, { useState, useRef } from 'react';
import { Send, Loader, CheckCircle, XCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

// Replace these with your actual EmailJS credentials
const EMAILJS_SERVICE_ID = "service_tzm5nmf";
const EMAILJS_TEMPLATE_ID = "template_pux6p77";
const EMAILJS_TEMPLATE_ID_ME = "template_3v35zes";
const EMAILJS_PUBLIC_KEY = "xE4YeTp98nG3INHWd";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    reason: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null as string | null
  });

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ isSubmitting: true, isSubmitted: false, error: null });
  
    try {
      // Send email to the owner (You) with the form data
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID_ME, // Template for owner
        {
          to_email: "bebefinn72@gmail.com", // Replace with your actual email
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          reason: formData.reason,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );
  
      // Send confirmation email to the sender
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID, // Template for sender confirmation
        
        {
          to_name: formData.name,
          to_email: formData.email, // Email of the sender
          message: "Thank you for reaching out!. I have received your message and will review your inquiry as soon as possible. If your request requires immediate attention, I’ll do my best to get back to you promptly. In the meantime, feel free to explore my linkedIn, connect to learn more about my work.",
        },
        EMAILJS_PUBLIC_KEY
      );
  
      setStatus({
        isSubmitting: false,
        isSubmitted: true,
        error: null,
      });
  
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        reason: '',
        message: ''
      });
  
    } catch (error) {
      setStatus({
        isSubmitting: false,
        isSubmitted: false,
        error: 'Failed to send message. Please try again.'
      });
    }
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (status.isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4 animate-fadeIn">
          <CheckCircle className="w-16 h-16 text-teal-400 mx-auto" />
          <h2 className="text-2xl font-bold text-teal-400">Message Sent!</h2>
          <p className="text-gray-300">Thank you for reaching out. I'll get back to you soon!</p>
          <button
            onClick={() => setStatus({ isSubmitting: false, isSubmitted: false, error: null })}
            className="mt-4 text-teal-400 hover:text-teal-300 transition-colors"
          >
            Send another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-teal-400 mb-8">Let's Work Together</h2>
        
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-gray-300 block">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 
                         text-gray-100 focus:outline-none focus:border-teal-400 
                         transition-colors duration-300"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-gray-300 block">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 
                         text-gray-100 focus:outline-none focus:border-teal-400 
                         transition-colors duration-300"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="text-gray-300 block">Phone (Optional)</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 
                       text-gray-100 focus:outline-none focus:border-teal-400 
                       transition-colors duration-300"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="reason" className="text-gray-300 block">Reason for Contact</label>
            <select
              id="reason"
              name="reason"
              required
              value={formData.reason}
              onChange={handleChange}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 
                       text-gray-100 focus:outline-none focus:border-teal-400 
                       transition-colors duration-300"
            >
              <option value="">Select a reason</option>
              <option value="job">Job Opportunity</option>
              <option value="project">Project Collaboration</option>
              <option value="freelance">Freelance Work</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-gray-300 block">Message</label>
            <textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 
                       text-gray-100 focus:outline-none focus:border-teal-400 
                       transition-colors duration-300"
            />
          </div>

          {status.error && (
            <div className="flex items-center space-x-2 text-red-400">
              <XCircle size={20} />
              <span>{status.error}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={status.isSubmitting}
            className="flex items-center justify-center w-full md:w-auto px-8 py-3 
                     bg-teal-400 hover:bg-teal-500 text-gray-900 rounded-lg font-medium
                     transition-colors duration-300 disabled:opacity-50"
          >
            {status.isSubmitting ? (
              <Loader className="animate-spin mr-2" size={20} />
            ) : (
              <Send className="mr-2" size={20} />
            )}
            {status.isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;