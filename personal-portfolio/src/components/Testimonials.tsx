import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { fadeUp } from "@/lib/animations";
import { ChevronLeftIcon, ChevronRightIcon, SparkleIcon, StarIcon } from "lucide-react";
import { testimonials } from "@/constants";

export const Testimonials = () => {
    const [curSlide, setCurSlide] = useState(0);
    const next = () => setCurSlide((prev) => (prev + 1) % testimonials.length)
    const prev = () => setCurSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)

    return (
        <motion.section
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.8}}
                    variants={fadeUp}
                    className="mt-20 scroll-mt-10"
                    id='testmonials'
                    >
                        <p className="flex items-center justify-center py-1 gap-2 border border-neutral-600 rounded-sm w-32">
                <SparkleIcon size={15} /> Curiosities
            </p>

            <h2 className="text-4xl font-bold capitalize mt-2 md:max-w-3xl">
                A Little About Me
            </h2>
            <div className="mt-10 relative w-full">
                <AnimatePresence mode='wait'>
                    <motion.div
                    key={curSlide}
                    initial={{opacity: 0, y: 20 }}
                    animate={{opacity: 1, y: 0}}
                    exit={{opacity: 0, y: -20}}
                    transition={{duration: 0.4}}
                    layout
                    className="border rounded-3xl border-neutral-800 bg-neutral-900/10 p-8 flex flex-col md:flex-row items-start gap-6"
                    >
                        <img src={testimonials[curSlide].image}
                        alt={testimonials[curSlide].name}
                        className="size-40 border rounded-2xl object-cover"
                        >

                        </img>
                        <div className="flex-1 space-y-4">
                            <div>
                                <h3 className="text-lg font-semibold text-white">
                                    {testimonials[curSlide].name}
                                </h3>

                                <p className="text-sm text-neutral-400">
                                    {testimonials[curSlide].role}
                                </p>
                            </div>
                            <p className="text-neutral-300 leading-relaxed">
                                {testimonials[curSlide].text}
                            </p>
                        </div>
                    </motion.div>
                </AnimatePresence>

                <div className="flex gap-4 mt-8 ">
                    <button onClick={prev} className="size-10 flex items-center justify-center rounded-full border border-neutral-700 hover:bg-neutral-800 transition">
                        <ChevronLeftIcon size={18} />
                    </button>
                    <button onClick={next} className="size-10 flex items-center justify-center rounded-full border border-neutral-700 hover:bg-neutral-800 transition">
                        <ChevronRightIcon size={18} />
                    </button>
                </div>
            </div>
        </motion.section>
    );
};