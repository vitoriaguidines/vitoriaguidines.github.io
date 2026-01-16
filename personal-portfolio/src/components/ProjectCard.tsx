import { motion } from "motion/react";
import { fadeUp } from "@/lib/animations";
import type { ProjectType } from "@/types";

export const ProjectCard = ({ imgSrc, projectLink, tags, title }: ProjectType) => {
    return (
        <motion.div 
            variants={fadeUp}
            className="relative group"
        >
            <a 
                href={projectLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
            >
                <figure className="overflow-hidden rounded-md aspect-870/580 w-full bg-secondary">
                    <img 
                        src={imgSrc} 
                        alt={title} 
                        className="rounded-md transition duration-500 group-hover:scale-110 w-full h-full object-cover"
                    />
                </figure>
            </a>

            <div className="absolute bottom-0 p-2 flex gap-2 z-10 pointer-events-none">
                {tags.map((tag, i) => (
                    <span 
                        key={i} 
                        className="bg-background py-1 px-2 rounded-sm text-sm shadow-sm pointer-events-auto hover:bg-primary hover:text-black transition-colors"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </motion.div>
    );
};