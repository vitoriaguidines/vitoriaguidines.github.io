import { motion } from "motion/react";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { SectionHeader } from "@/components/SectionHeader";
import { education, experience, tools } from "@/constants";

export const Resume = () => {
    return (
        <motion.section
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.3}}
            variants={staggerContainer(0)}
            className="mt-30 scroll-mt-10"
            id='resume'
            >
                <SectionHeader subtitle='Resume' title='Education and practical experience'/>
                <motion.p variants={fadeUp} className="mt-4 text-neutral-300">
                    I’m studying Computer Science while gaining hands-on experience in software development, ethical hacking, and DevOps operations. Through academic, personal, and professional projects — including internship experience — I’ve worked across different stages of building, testing, and operating systems in real-world environments.
                </motion.p>
                
        </motion.section>
    );
};