import { motion } from "motion/react";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";

export const About = () => {
    return (
        <motion.section
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.3}}
            variants={staggerContainer(0)}
            className="mt-30 scroll-mt-10"
            id='about'
            >
                <SectionHeader subtitle='About' title='Transforming Curiosity Into Research and Inovation'/>
                <motion.p variants={fadeUp} className="mt-4 text-neutral-300">
                    I’m a curious Computer Science student driven by the desire to turn questions into research and understanding. I enjoy exploring how things work beneath the surface, breaking down complex systems, and learning through experimentation. My main interests lie in cybersecurity, automation, and cloud technologies, where curiosity and investigation play a key role in building reliable and secure solutions.
                </motion.p>

                <motion.p variants={fadeUp} className="mt-2 text-neutral-300">
                    Over the past few years, I’ve explored web development, cybersecurity, and DevSecOps through hands-on projects and real-world experience. I’ve worked with Python, Django, React, and cloud tools, moving between building applications and understanding how they can fail — and how to make them safer. I enjoy analyzing systems end to end, whether that means testing security, monitoring traffic, or automating protections as part of the development process.
                </motion.p>

                <motion.div
                variants={fadeUp}
                transition={{delay: 0.2}}
                >
                    <Button className="mt-5 cursor-pointer" asChild>
                        <a href="#contact">Contact Me</a>
                    </Button>
                </motion.div>
        </motion.section>
    );
};