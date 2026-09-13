'use client';
import AnimatedName from "./name-animation";
import { motion } from "framer-motion";

const awards = [
    {
        icon: "🏆",
        title: "Lead Organizer & Portal Developer",
        event: "AutoHack 2.0 Hackathon",
        org: "Georgian College",
        date: "Mar 2026",
        note: "Full-stack portal adopted by a government sponsor for reuse"
    },
    {
        icon: "🥈",
        title: "2nd Place",
        event: "Innov8 Awards Competition, RISE",
        org: "Georgian College R&I",
        date: "Apr 2025",
        note: ""
    },
    {
        icon: "🥈",
        title: "2nd Place",
        event: "AI Hack 2.0 Hackathon",
        org: "Georgian College",
        date: "Feb 2024",
        note: ""
    },
    {
        icon: "⭐",
        title: "Bravo Award — Excellent Performance",
        event: "",
        org: "PureSoftware Pvt. Ltd.",
        date: "Apr 2022",
        note: ""
    },
    {
        icon: "🥈",
        title: "2nd Place",
        event: "DCRUST HACK, Devfolio",
        org: "DCRUST",
        date: "2022",
        note: "Augmented Reality Virtual Labs project"
    },
    {
        icon: "🎃",
        title: "Hacktoberfest Contributor",
        event: "",
        org: "Digital Ocean & GitHub",
        date: "2019, 2020",
        note: ""
    },
    {
        icon: "🏅",
        title: "Winner",
        event: "Student Induction Program",
        org: "AICTE / DCRUST Murthal",
        date: "2018",
        note: ""
    },
];

const certifications = [
    { name: "Microsoft AI Classroom Series", issuer: "Microsoft / NASSCOM", color: "from-blue-900 to-blue-800" },
    { name: "Machine Learning Foundations", issuer: "AWS Academy", color: "from-orange-900 to-orange-800" },
    { name: "Cloud Foundations", issuer: "AWS Academy", color: "from-orange-900 to-orange-800" },
    { name: "Artificial Intelligence", issuer: "IIT Kanpur", color: "from-red-900 to-red-800" },
    { name: "Data Structures", issuer: "UC San Diego · Coursera", color: "from-teal-900 to-teal-800" },
    { name: "Web App Technologies & Django", issuer: "University of Michigan · Coursera", color: "from-yellow-900 to-yellow-800" },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
};

export default function CertificationsAwards() {
    return (
        <div className="p-8 md:p-16">
            {/* Awards */}
            <AnimatedName
                name={<h1 className="text-teal-400 text-[1.6rem] md:text-[2.7rem] italic font-semibold pb-8 md:pb-12">
                    Wins Along the Way
                </h1>} />

            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-16 md:mb-24"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
            >
                {awards.map((award, i) => (
                    <motion.div
                        key={i}
                        variants={itemVariants}
                        className="bg-zinc-900 border border-zinc-700 hover:border-teal-500 transition-colors duration-300 rounded-xl p-5 flex flex-col gap-2"
                    >
                        <div className="flex items-center justify-between">
                            <span className="text-2xl">{award.icon}</span>
                            <span className="text-zinc-500 text-xs font-mono">{award.date}</span>
                        </div>
                        <h3 className="text-white font-semibold text-sm md:text-base leading-snug">{award.title}</h3>
                        {award.event && <p className="text-teal-400 text-sm">{award.event}</p>}
                        <p className="text-zinc-400 text-xs">{award.org}</p>
                        {award.note && <p className="text-zinc-500 text-xs italic">{award.note}</p>}
                    </motion.div>
                ))}
            </motion.div>

            {/* Certifications */}
            <AnimatedName
                name={<h1 className="text-teal-400 text-[1.6rem] md:text-[2.7rem] italic font-semibold pb-8 md:pb-12">
                    Proof I Actually Studied
                </h1>} />

            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
            >
                {certifications.map((cert, i) => (
                    <motion.div
                        key={i}
                        variants={itemVariants}
                        className={`bg-gradient-to-br ${cert.color} border border-zinc-700 hover:border-teal-500 transition-colors duration-300 rounded-xl p-5 flex flex-col justify-between gap-3`}
                    >
                        <div className="flex items-start gap-3">
                            <span className="text-xl mt-0.5">🎓</span>
                            <h3 className="text-white font-semibold text-sm md:text-base leading-snug">{cert.name}</h3>
                        </div>
                        <p className="text-zinc-300 text-xs font-medium pl-8">{cert.issuer}</p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
