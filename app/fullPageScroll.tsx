'use client';

import { motion } from "framer-motion";
import { useRef } from "react";

interface FullPageSectionProps {
    sections: React.ReactNode[];
  }
  

export default function FullPageSection({ sections }: FullPageSectionProps) {
    const scrollRef = useRef(null)
    
    return (
        <div
        ref={scrollRef}
        style={{
          overflow: "scroll",
          height: "100vh", // Ensure the container takes up the full viewport height
          scrollSnapType: "y mandatory", // Enable scroll snapping
          width: "100vw", // Ensures full width
          margin: "0 auto", // Centers the content
        }}
        >

        {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }} // Start off-screen
              whileInView={{ opacity: 1, y: 0 }} // Animate into view
              viewport={{ root: scrollRef, amount: 0.4 }} // Trigger when 80% of the section is in view
              transition={{ duration: 0.8, ease: "easeOut" }} // Smooth animation
              className="w-full" // Ensures full width
            >
              {section}
            </motion.div>
          ))}
          </div>
    )
}


// export default function AnimatedSection({ children }: { children: React.ReactNode }) {
//     const ref = useRef(null);
//     const { scrollYProgress } = useScroll({
//         target: ref,
//         offset: ['start 0.8', 'end 0.2'], // Controls when animation starts & ends
//     });

//     const yTransform = useTransform(scrollYProgress, [0, 1], ['50%', '0%']); // Moves up while scrolling

//     return (
//         <motion.section
//             ref={ref}
//             className="flex items-center justify-center"
//             style={{ y: yTransform }}
//         >
//             {children}
//         </motion.section>
//     );
// }


// const sectionVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
//   };

// export default function AnimatedSection({ children }: { children: React.ReactNode }) {
//     return (
//         <motion.section
//         className="min-h-screen flex items-center justify-center p-16"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.2 }} // 20% of section must be visible before animation triggers
//         variants={sectionVariants}
//         >
//         {children}
//         </motion.section>
//     );
// }