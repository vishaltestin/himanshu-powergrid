import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import React from 'react';

// 1. Create a motion-enabled version of Inertia's Link
const MotionLink = motion(Link);

const ThemeButton = ({ text = 'Explore', link = '#' }) => {
    const letters = Array.from(text);

    return (
        <MotionLink
            initial="initial"
            whileHover="hover"
            className="relative inline-flex overflow-hidden bg-primary rounded-lg px-6 py-3.5 text-base font-heading tracking-wider text-white hover:bg-secondary transition-colors duration-300"
            href={link}
        >
            <span className="sr-only">{text}</span>

            <span
                className="relative block h-6 overflow-hidden"
                aria-hidden="true"
            >
                <span className="flex">
                    {letters.map((letter, i) => (
                        <motion.span
                            key={`top-${i}`}
                            className="inline-block"
                            variants={{
                                initial: { y: 0 },
                                hover: { y: '-100%' },
                            }}
                            transition={{
                                duration: 0.35,
                                ease: [0.4, 0, 0.2, 1],
                                delay: i * 0.025,
                            }}
                        >
                            {letter === ' ' ? '\u00A0' : letter}
                        </motion.span>
                    ))}
                </span>

                <span className="absolute top-full left-0 flex">
                    {letters.map((letter, i) => (
                        <motion.span
                            key={`bottom-${i}`}
                            className="inline-block"
                            variants={{
                                initial: { y: 0 },
                                hover: { y: '-100%' },
                            }}
                            transition={{
                                duration: 0.35,
                                ease: [0.4, 0, 0.2, 1],
                                delay: i * 0.025,
                            }}
                        >
                            {letter === ' ' ? '\u00A0' : letter}
                        </motion.span>
                    ))}
                </span>
            </span>
        </MotionLink>
    );
};

export default ThemeButton;
