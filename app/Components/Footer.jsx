'use client'
import { Mail, Phone } from 'lucide-react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-(--shades-purple-selection-purple-100,rgba(17,4,14,1)) text-white pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-4 pb-10 border-b border-white/10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm   text-gray mb-3">
              Ready to be a part of something extraordinary?
            </p>
            <p className="text-[16px] md:text-4xl  leading-tight">
              Let’s work together to create a difference
            </p>
          </div>
          <button className="inline-flex items-center justify-center rounded-[10px] bg-(--Hue-Primary,rgba(87,18,68,1)) px-4 py-2 md:px-7 md:py-3 text-xs md:text-sm font-semibold text-white transition hover:bg-[#a81b70] self-start">
            Get In Touch
          </button>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-5 px-4 grid md:grid-cols-4 gap-8">
        
        
        <div>
          <img src="./tobam.png" alt="Tobams logo" className="w-32 h-auto object-contain mb-4" />
          <p className="text-sm text-[rgba(248,248,248,1)]">
            Tobams Group is an innovative consultancy firm reshaping the 
            future of tech talent development in Africa, specializing in 
            talent acquisition, internships, 
            and skill development with a global perspective.
          </p>

          <div className="flex items-center gap-2 mt-4">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full text-[#2a001c] transition hover:bg-gray-100"
              style={{ backgroundColor: "var(--Hue-White, rgba(255, 255, 255, 1))" }}
            >
              <span className="sr-only">LinkedIn</span>
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full text-[#2a001c] transition hover:bg-gray-100"
              style={{ backgroundColor: "var(--Hue-White, rgba(255, 255, 255, 1))" }}
            >
              <span className="sr-only">Instagram</span>
              <FaInstagram className="w-5 h-5" />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full text-[#2a001c] transition hover:bg-gray-100"
              style={{ backgroundColor: "var(--Hue-White, rgba(255, 255, 255, 1))" }}
            >
              <span className="sr-only">X</span>
              <FaXTwitter className="w-5 h-5" />
            </a>
          </div>
        </div>
 
 <div>
          <h3 className="font-semibold mb-2">What we do</h3>
          <ul className="text-sm space-y-1 text-white">
            <li>Sustainability Services</li>
            <li>Strategy Planning and Implementation</li>
            <li>Tech Talent Solutions</li>
            <li>Training and Development</li>
            <li>IT Consulting Services</li>
            <li>Social Impact</li>
            <li>Talent Recruitment</li>
          </ul>
          
        </div>
        
        <div>
          <h3 className="font-semibold mb-2">Company</h3>
          <ul className="text-sm space-y-1 text-(--Hue-White,rgba(255,255,255,1))">
            <li>About</li>
            <li>Jobs</li>
            <li>Projects</li>
            <li>Our Founder</li>
            <li>Business Model</li>
            <li>The Team</li>
            <li>Contact Us</li>
            <li>Blog</li>
            <li>FAQs</li>
            <li>Testimonials</li>

          </ul>
        </div>

        

        
        <div>
          <h3 className="font-semibold mb-2">Solutions</h3>
          <ul className="text-sm space-y-1 text-white">
            <li>Tobams Group Academy</li>
            <li>Help a Tech Talent</li>
            <li>Campus Ambassadors Program</li>
            <li>Join Our Platform</li>
            <li>Pricing</li>
            <li>Book a Consultation</li>
            <li>Join Our Slack Community</li>

          </ul>
        </div>
      </div>

<div className="bg-[rgba(255,255,255,0.06)] text-white border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-8 mt-12">
        <div className="flex flex-col lg:flex-row gap-8 bg-white/5 border border-white/10 rounded-4xl p-8 shadow-xl shadow-black/20">
          <div className="lg:basis-2/3">
            <h3 className="font-semibold mb-4">Registered Offices</h3>

            <div className="space-y-6 text-sm text-gray-300">
              <div className="space-y-2">
                <p className="text-(--Hue-Secondary,rgba(239,67,83,1)) font-medium">United Kingdom</p>
                <p>07451169 (Registered by Company House)</p>
                <p>Vine Cottages, 215 North Street, Romford, Essex, United Kingdom, RM1 4QA</p>
              </div>

              <div className="space-y-2">
                <p className="text-(--Hue-Secondary,rgba(239,67,83,1)) font-medium">Nigeria</p>
                <p>RC 1048722 (Registered by the Corporate Affairs Commission)</p>
                <p>4, Muiz Close, Angwar-Rimi</p>
              </div>
            </div>
          </div>

          <div className="lg:basis-1/3">
            <h3 className="font-semibold mb-4">Contact Information</h3>

            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-(--Hue-Secondary,rgba(239,67,83,1))" />
                <span>theteam@tobamsgroup.com</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-(--Hue-Secondary,rgba(239,67,83,1))" />
                <span>+447886600748</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center text-xs text-white font-light">
        <p>Copyright © Tobams Group, 2024. All rights reserved.</p>

        <div className="flex gap-4 mt-2 md:mt-0">
          <span className="hover:underline cursor-pointer">Terms and Conditions</span>
          <span className="hover:underline cursor-pointer">Privacy Policy</span>
          <span className="hover:underline cursor-pointer">Cookies Policy</span>
        </div>
      </div>
    </div>
    </motion.footer>
  );
}