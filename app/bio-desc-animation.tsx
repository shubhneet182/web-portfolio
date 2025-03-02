'use client';

import { motion } from "framer-motion";

interface BioProps {
    bio: React.ReactNode;
  }
  

export default function AnimatedBioDescription({ bio }: BioProps) {
    return (
        <div>
        <motion.div
            initial={{ x: "100%", opacity: 0 }} // Start from above the screen
            whileInView={{ x: "0%", opacity: 1 }} // Move to its original place
            viewport={{ once: false }}  // This ensures the animation happens each time the element comes into view
            transition={{ duration: 0.5, ease: "easeOut", bounce: 0.3 }} // Smooth transition
            >
              {bio}
            </motion.div>
          </div>
    )
}