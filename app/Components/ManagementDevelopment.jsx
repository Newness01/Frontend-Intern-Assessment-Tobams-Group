'use client'
import { Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function ManagementDevelopment() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-(--shades-purple-selection-purple-80,rgba(44,9,34,1)) rounded-2xl p-6 md:p-10 grid md:grid-cols-2 gap-8 items-stretch">
          
          {/* Image */}
          <div>
            <img
              src="/image5.jpg"
              alt="management"
              className="rounded-xl w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="text-white">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
              Management Development Program
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-6">
              Tobams Group offers a comprehensive Management
Development Program designed to equip corporate
organisations with the high
-performing leaders they need to
thrive.
        </p>

            
  <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-6">
Our program includes workshops, seminars, coaching
sessions, online courses, and experiential learning
opportunities designed to improve leadership, strategic
thinking, communication, and other essential managerial
competencies for corporate organisations.
            </p>

            <div className="space-y-3">
              {[
                "Enhanced Leadership Skills",
                "Improved Employee Engagement",
                "Stronger Organizational Culture",
                "Sustainable Growth",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-(--shades-purple-selection-purple-40,rgba(143,97,130,1)) px-4 py-2 rounded-lg text-sm flex items-center gap-3"
                >
                  <Zap className="w-4 h-4"/> {item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
}