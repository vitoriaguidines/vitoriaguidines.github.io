import { motion } from "motion/react";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { SectionHeader } from "@/components/SectionHeader";
import { education, experience, tools } from "@/constants";
import { ExpCard } from "@/components/ExpCard";
import { ToolsCard } from "@/components/ToolsCard";

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
                <div className="grid gap-x-10 my-16 md:grid-cols-2">
                    <motion.div variants={fadeUp} className="mb-16 md:mb-0">
                        <h2 className="text-3xl font-semibold mb-8">Education</h2>
                        <div className="space-y-8 border-l border-neutral-700 pl-6">{education.map((item,i) =>
                    <ExpCard key={i} item={item}/>    
                    )}</div>
                    </motion.div>
                    
                    <motion.div variants={fadeUp} >
                        <h2 className="text-3xl font-semibold mb-8">Work Experience</h2>
                        <div className="space-y-8 border-l border-border pl-6">{experience.map((item,i) =>
                    <ExpCard key={i} item={item}/>    
                    )}</div>
                    </motion.div>
                </div>

                <div className="my-16">
                    <motion.h2 variants={fadeUp} className="text-3xl font-semibold mb-8 capitalize">
                        My favourite tools
                    </motion.h2>

                    <motion.div initial='hidden' whileInView='visible' viewport={{once: true, amount: 0.3}} variants={staggerContainer(0.5)} className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-5">
                        {tools.map((tool, i) => (
                            <ToolsCard 
                            key={i}
                            tool={tool}
                            />
                        ))}
                    </motion.div>
                </div>
        </motion.section>
    );
};