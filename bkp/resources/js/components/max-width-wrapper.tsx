import { cn } from '@/lib/utils';
import React from 'react';

interface MaxWidthWrapperProps {
    className?: string;
    children: React.ReactNode;
}

export default function MaxWidthWrapper({
    children,
    className,
}: MaxWidthWrapperProps) {
    return (
        <div
            className={cn(
                'mx-auto h-full w-full max-w-346 px-4 sm:px-6 lg:px-8',
                className,
            )}
        >
            {children}
        </div>
    );
}
