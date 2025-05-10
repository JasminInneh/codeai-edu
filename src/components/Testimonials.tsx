import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "CodeAI has transformed how I approach development. The AI-powered learning experience is unlike anything I've tried before.",
      author: "Sarah Chen",
      role: "Full Stack Developer"
    },
    {
      quote: "The way CodeAI combines AI tools with practical learning has helped me become more efficient in my coding workflow.",
      author: "Michael Rodriguez",
      role: "Software Engineer"
    },
    {
      quote: "I was skeptical about AI coding tools, but CodeAI showed me how to use them effectively. Now I can't imagine coding without them.",
      author: "Emily Thompson",
      role: "Frontend Developer"
    }
  ];

  return (
    <motion.section 
      id="testimonials-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-[#1A1A1A] rounded-2xl overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#00B4D8] rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#00B4D8] rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 px-6 py-16 sm:px-12 sm:py-20 lg:px-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold text-white text-center mb-12"
            >
              What People Say
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 * index }}
                  viewport={{ once: true }}
                  className="bg-[#2A2A2A] rounded-xl p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex flex-col h-full">
                    <div className="flex-1">
                      <svg className="w-8 h-8 text-[#00B4D8] mb-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                      <p className="text-gray-300 mb-4">{testimonial.quote}</p>
                    </div>
                    <div>
                      <p className="text-white font-semibold">{testimonial.author}</p>
                      <p className="text-[#00B4D8] text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials; 