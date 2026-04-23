'use client'
import { VectorSquare, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function TrainingSection({
  title,
  description,
  points,
  image,
  reverse = false,
}) {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-12">
      <div
        className={`max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Image */}
        <motion.div 
          initial={{ opacity: 0, x: reverse ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className={`${reverse ? "md:order-2" : ""}`}>
          <img
            src={image}
            alt={title}
            className="w-full h-62.5 md:h-75 object-cover rounded-xl"
          />
        </motion.div>

        {/* Text */}
        <motion.div 
          initial={{ opacity: 0, x: reverse ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className={`${reverse ? "md:order-1" : ""}`}>
          <h2 className="text-xl  md:text-2xl font-semibold text-(--Hue-Main-Text,rgba(21,21,21,1)) mb-3">
            {title}
          </h2>

          <p className="text-(--Hue-Subdued,rgba(105,105,105,1)) text-sm md:text-base mb-4">
            {description}
          </p>

          <ul className="space-y-2 text-sm text-(--Hue-Subdued,rgba(105,105,105,1))">
            {points.map((point, index) => (
              <li key={index} className="flex items-center ml-7 gap-2">
                <Zap className="w-4 h-4 text-(--shades-purple-selection-purple-60,rgba(72,15,57,1))" />
                {point}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
}