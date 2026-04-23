'use client'
import { ArrowBigRightIcon, Dot, MoveUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function LearningSystem() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-[rgba(87,18,68,0.1)] py-4">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Image */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex items-center justify-center ">
          <img
            src="/image1.jpg"
            alt="learning"
            className="w-84 h-84 md:w-80 md:h-80 rounded-full object-cover"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl md:text-2xl text-(--Hue-Primary,rgba(87,18,68,1)) font-semibold mt-15 mb-3">
            Learning Management System
          </h2>
<div className="bg-[rgba(87,18,68,0.1)] px-4 py-3">
          <p className="text-(--Hue-Main-Text,rgba(21,21,21,1)) text-sm mb-4">
            TG Academy is a hub of knowledge and skill-building resources 
            designed to empower tech talents on their learning journey. 
            From technical courses covering the latest programming languages and development frameworks to soft skills training in leadership, effective communication and project management, TG Academy offers a wide range of courses to cater to diverse learning needs. With accessible and interactive learning materials, individuals can enhance 
            their skills and stay ahead in today's competitive tech landscape.
          </p>

<h3 className="text-(--Hue-Primary,rgba(87,18,68,1)) pb-2 font-bold">Some of the Courses include:</h3>
          <div className="space-y-2 mb-4">
            <span className="flex items-center gap-1"> <Dot/> Business Analysis</span>
            <span className="flex items-center gap-1"> <Dot/> Design Thinking</span>
            <span className="flex items-center gap-1"> <Dot/> Effective Communication</span>
          </div>

          <div className="space-y-2 mb-4">
            <span className="flex items-center gap-1"> <Dot/> Enterpreneurship</span>
            <span className="flex items-center gap-1"> <Dot/> Career Development</span>
            <span className="flex items-center gap-1"> <Dot/> Business Model</span>
          </div>
</div>
          <button className="bg-(--Hue-Primary,rgba(87,18,68,1)) text-white gap-1 mt-5 px-4 py-2 rounded-lg flex items-center">
            Learn More <MoveUpRight/>
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
}