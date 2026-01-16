import { motion } from "motion/react"
import { fadeUp, staggerContainer } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { SparkleIcon } from "lucide-react";

export const Hero = () => {
    return (
        <motion.section
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.3}}
            variants={staggerContainer(0)}
            className="pt-20"
            id='hero'
            >
            <motion.p variants={fadeUp} className="flex intems-center justify-center py-1 gap-2 border border-neural-600 rounded-sm w-32">
                <SparkleIcon size={15} /> <span>Introduction</span>
            </motion.p>
            <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold capitalize mt-2 wax-w-3xl md:leading-16"
            >
                I'm <span className="text-primary">Vitória Guidine</span>, Computer Science student at Fluminense Federal University (UFF)
            </motion.h1>
            <motion.div
            variants={fadeUp}
            className="mt-5 flex gap-2"
            >
                <Button asChild>
                    <a href="#projects">My Projects</a>
                </Button>

                <Button className="cursor-pointer" variant='outline'>Download CV</Button>
            </motion.div>
        </motion.section>
    );
};