'use client'
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Testimonials() {
  const testimonials = [
    {
      image: './image7.png',
      name: 'Aisha Yusuf',
      role: 'Founder, CraftHub NG',
      text: 'Working with Tobams Group on our website was a breeze. They understood our vision and transformed it into a beautiful online space. Highly recommend their Website Design service!',
    },
    {
      image: './image8.png',
      name: 'John Davies',
      role: 'Marketing Manager, E-Commerce Emporium',
      text: 'Tobams Group’s Digital Marketing strategies gave our brand the boost it needed. Simple yet powerful techniques that delivered tangible results. A pleasure to collaborate with!',
    },
    {
      image: './image9.png',
      name: 'Chinonso Nwankwo',
      role: 'HR Director, FutureTech Solutions',
      text: 'Tobams Group has been instrumental in our talent acquisition journey. Their Tech Talent Solution service consistently connects us with the right professionals. Reliable and straightforward.',
    },
  ];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-16 bg-[rgba(196,196,196,0.3)]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center text-3xl font-semibold mb-12">Testimonials</h2>

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-4xl bg-white p-8 shadow-[0_40px_80px_rgba(15,23,42,0.08)] border border-slate-200 border-l-2 border-l-(--Hue-Secondary,rgba(239,67,83,1))  transition hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-6 text-(--Hue-Main-Text,rgba(21,21,21,1))">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-14 w-14 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-base font-semibold ">{item.name}</h3>
                  <p className="text-[11px] text-(--Hue-Subdued,rgba(105,105,105,1))">{item.role}</p>
                </div>
              </div>

              <p className="text-sm leading-7 font-semibold text-(--Hue-Main-Text,rgba(21,21,21,1))">{item.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 flex justify-end gap-3">
          <button className="inline-flex h-8 w-8 items-center justify-center rounded-[10px] border border-slate-200 bg-[rgba(240,67,84,0.1)] text-(--Hue-Secondary,rgba(239,67,83,1)) transition hover:bg-slate-100">
        
            <ChevronLeft/>

          </button>
          <button className="inline-flex h-8 w-8 items-center justify-center rounded-[10px] border border-slate-200 bg-[rgba(240,67,84,0.1)] text-(--Hue-Secondary,rgba(239,67,83,1)) transition hover:bg-slate-100">
            <ChevronRight />
            
          </button>
        </div>
      </div>
    </motion.section>
  );
}