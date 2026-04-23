'use client'
import { MoveUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ConsultantTraining() {
  const data = [
    {
      title: "Expert-Led Learning",
      text: "Gain insight from seasoned professionals in the field as they mentor you through the subtleties of business analysis.",
    },
    {
      title: "Interactive Workshops",
      text: "Engage in hands-on workshops designed to enhance your training capabilities and provide practical insights.",
    },
    {
      title: "Comprehensive Curriculum",
      text: "Access a robust curriculum that covers fundamental principles and advanced methodologies, ensuring a well-rounded understanding.",
    },
    {
      title: "Global Recognition",
      text: "You will attain a globally recognized certification, opening doors to new career opportunities and industry recognition.",
    },
  ];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-12 bg-[rgba(87,18,68,0.1)]">
      <div className="max-w-6xl mx-auto px-4">
        
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-(--Hue-Primary,rgba(87,18,68,1))">
          Training The Consultant
        </h2>
 
 <p className="text-(--Hue-Primary,rgba(87,18,68,1)) font-bold text-sm mb-6">
         Maximise Your Potential as a Certified Trainer:
        </p>
        <p className="text-(--Hue-Main-Text,rgba(21,21,21,1)) text-sm mb-6">
          With the help of our Training Consultants program, 
          take a revolutionary step toward becoming a distinguished 
          certified training consultant. Learn from professionals in the field, 
          immerse yourself in a thorough curriculum, and hone your 
          training methods through interactive workshops. Participating
           in our program will enable you to gain expertise in diverse courses while also 
          developing the abilities to mentor and encourage others in their career advancement.
        </p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap- bg-(--Hue-Primary,rgba(87,18,68,1)) rounded-xl">
          {data.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              viewport={{ once: true }}
              className=" text-white p-4 rounded-lg"
            >
              <h3 className="font-semibold mb-0">{item.title}</h3>
              <p className="text-sm text-gray-200">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>

       <button className="bg-(--Hue-Primary,rgba(87,18,68,1)) text-white gap-1 mt-5 px-4 py-2 rounded-lg flex items-center">
                   Learn More <MoveUpRight/>
                 </button>
      </div>
    </motion.section>
  );
}