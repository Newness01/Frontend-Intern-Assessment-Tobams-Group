'use client'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative h-125 md:h-137.5 lg:h-150 flex items-center justify-center text-white mb-8 pt-20 pb-12">
      
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/bg1.jpg" 
          alt="hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="relative  max-w-2xl mx-auto text-center ">
        
        <motion.span 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="inline-block bg-[rgba(255,255,255,0.1)]  px-4 py-2 mt-30 rounded-full text-xs md:text-sm font-medium tracking-wider mb-6">
          WHAT WE DO
        </motion.span>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold lg:whitespace-nowrap mb-6">
          Training and Development
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-base md:text-lg  mb-8 leading-relaxed">
          Our comprehensive range of programs and resources is designed to enhance skills, broaden knowledge, and propel careers forward in today's ever-evolving landscape.
        </motion.p>

        <motion.button 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="inline-flex items-center justify-center bg-(--Hue-Primary,rgba(87,18,68,1)) hover:bg-[#a81b70] px-8 py-3 rounded-lg text-white font-semibold transition duration-300 mb-7">
          Book a Consultation
        </motion.button>
      </motion.div>
    </motion.section>
  );
}
