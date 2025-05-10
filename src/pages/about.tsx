import React from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import styles from '../styles/About.module.css';

const About = () => {
  return (
    <>
      <Head>
        <title>About CodeAI - Learn AI Development</title>
        <meta name="description" content="Learn about CodeAI, a platform dedicated to teaching modern AI development tools like GitHub Copilot and Cursor." />
      </Head>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={styles.container}
      >
        <div className={styles.content}>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={styles.title}
          >
            About CodeAI
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className={styles.textContent}
          >
            <p>
              Welcome to CodeAI, a learning platform designed to help you unlock the power of modern AI development tools like GitHub Copilot and Cursor.
            </p>

            <p>
              At its core, CodeAI is the passion project of one developer (that's me!)—a space where I combine my experience in curriculum design and tech development to share what I learn, create engaging courses, and help others master the art of building applications with AI assistance.
            </p>

            <p>
              This platform isn't just about teaching; it's about learning and growing together. As I explore the latest in AI coding tools, I'm committed to sharing insights, resources, and practical guidance to help you become a more confident, efficient, and creative developer.
            </p>

            <p>
              Whether you're curious about how Copilot can supercharge your coding workflow or how Cursor can transform your development experience, you'll find hands-on tutorials, thoughtful lessons, and a supportive learning journey here at CodeAI.
            </p>

            <p className={styles.finalParagraph}>
              Let's build smarter, faster, and better—together.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className={styles.illustration}
          >
            {/* AI Code Illustration */}
            <svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 150 C50 100, 150 50, 200 50 C250 50, 350 100, 350 150 C350 200, 250 250, 200 250 C150 250, 50 200, 50 150" stroke="#4F46E5" strokeWidth="2" fill="none"/>
              <circle cx="200" cy="150" r="30" fill="#4F46E5" fillOpacity="0.2"/>
              <path d="M180 140 L220 140 M180 160 L220 160" stroke="#4F46E5" strokeWidth="2"/>
              <path d="M150 100 L250 100 M150 200 L250 200" stroke="#4F46E5" strokeWidth="2" strokeDasharray="4 4"/>
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default About; 