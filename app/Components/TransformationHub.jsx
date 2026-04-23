'use client'
import { MoveUpRight, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function TransformationHub() {
  const items = [
    "Strategic Career Guidance",
    "Leadership Development",
    "CV Development",
    "Sustainability Leadership",
    "Communication Skills",
    "Business Model",
  ];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className=" py-12">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* CARD CONTAINER */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-[rgba(239,67,83,0.2)] rounded-2xl p-6 md:p-8">
          
          {/* TOP TEXT */}
          <p className="text-[16px] font-semibold italic text-(--Hue-Pending-Main,rgba(22,113,217,1)) mb-2">
            Learning With Our CEO:
          </p>

          <h2 className="text-[28px] md:text-[32px] italic font-semibold mb-4 text-(--Hue-Primary,rgba(87,18,68,1))">
            Transformation Hub With Jite Newton
          </h2>

          <p className="text-(--Hue-Main-Text,rgba(21,21,21,1)) text-[15px] md:text-[16px] mb-6 max-w-6xl">
            Transformation Hub with Jite Newton is a flagship webinar series curated 
            by the CEO, Dr. Jite Newton. Designed to elevate career trajectories and 
            leadership capabilities, this exclusive event offers invaluable insights 
            and strategies for personal and professional growth. Whether you're 
            seeking to advance your career or enhance your leadership skills, 
            the Transformation Hub provides a transformative learning experience to unlock 
            your full potential and drive success in your endeavours.
          </p>

          {/* BOTTOM GRID */}
          <div className="grid md:grid-cols-2 gap-6 items-center">
            
            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <img
                src="/image6.jpg"
                alt="CEO"
                className="w-full h-55 md:h-65 object-cover rounded-xl"
              />
            </motion.div>

            {/* FEATURES */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-[rgba(255,255,255,0.3)] p-4 rounded-xl">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {items.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white text-(--Hue-Main-Text,rgba(21,21,21,1)) px-3 py-2 rounded-lg text-sm flex items-center gap-2"
                  >
                    <Zap className="w-4 h-4 text-(--Hue-Primary,rgba(87,18,68,1))" />
                    {item}
                  </motion.div>
                ))}
              </div>

              <button className="bg-(--Hue-Primary,rgba(87,18,68,1)) text-white mt-5 px-4 py-2 rounded-lg flex items-center gap-2">
                Learn More <MoveUpRight size={16} />
              </button>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </motion.section>
  );
}