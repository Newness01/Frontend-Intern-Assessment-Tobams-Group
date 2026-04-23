'use client'
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-10">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-(--Hue-Primary,rgba(87,18,68,1)) text-white text-center py-8 rounded-xl">
          <p className="text-sm mb-2">
            Want to accelerate professional growth and development at your organisation?
          </p>
          <h3 className="text-lg font-semibold mb-4">
            See how we can help.
          </h3>

          <button className="bg-white font-semibold text-(--Hue-Primary,rgba(87,18,68,1)) px-5 py-2 rounded-lg">
            Book a Consultation
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
}