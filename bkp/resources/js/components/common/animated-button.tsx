import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';
import React from 'react';

const AnimatedButton = ({ text = 'Explore', link = '#', textClassName = 'text-white' }: any) => {
    return (
        <Link href={link} className={cn(`w-max backdrop-blur-md group relative font-heading-2 flex cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-transparent px-9 py-3 text-base font-semibold shadow-[0_0_0_2px_#1b8a5a] transition-all duration-600 ease-[cubic-bezier(0.23,1,0.32,1)] hover:rounded-full hover:shadow-[0_0_0_12px_transparent] active:scale-95 active:shadow-[0_0_0_4px_#1b8a5a] hover:text-white`, textClassName)}>
            <ArrowRight strokeWidth={2.5} size={20} className="absolute z-9 transition-all duration-800 ease-[cubic-bezier(0.23,1,0.32,1)] -left-1/4 group-hover:left-4" />

            <span className="relative z-1 -translate-x-3 transition-all duration-800 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-3">
                {text}
            </span>

            <span className="absolute top-1/2 left-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent opacity-0 transition-all duration-800 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:h-60 group-hover:w-60 group-hover:opacity-100" />

            <ArrowRight strokeWidth={2.5} size={20} className="absolute z-9 transition-all duration-800 ease-[cubic-bezier(0.23,1,0.32,1)] right-4 group-hover:-right-1/4" />
        </Link>
    );
};

export default AnimatedButton;
