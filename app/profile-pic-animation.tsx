'use client';

import { motion } from "framer-motion";

interface ProfilePicProps {
    profile: React.ReactNode;
  }
  

export default function AnimatedProfile({ profile }: ProfilePicProps) {
    return (
        <div>
        <motion.div
            initial={{ y: "-100%", opacity: 0 }} // Start from above the screen
            whileInView={{ y: "0%", opacity: 1 }} // Move to its original place
            viewport={{ once: false }}  // This ensures the animation happens each time the element comes into view
            transition={{ duration: 0.5, ease: "easeOut"}} // Smooth transition
            >
              {profile}
            </motion.div>
          </div>
    )
}