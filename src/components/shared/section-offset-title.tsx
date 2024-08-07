import React, { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import LightText from '../ui/light-text';

const inter = Inter({ subsets: ['latin'] });

interface SectionWithOffsetProps {
    title: string;
    children: ReactNode;
    titleClassName?: string;
    contentClassName?: string;
}

const SectionWithOffset: React.FC<SectionWithOffsetProps> = ({
    title,
    children,
    titleClassName = "md:w-28  flex-shrink-0 font-light text-foreground-rgb opacity-50 text-md md:text-right",
    contentClassName = "flex-grow text-md"
}) => {
    return (
        <div className={`flex flex-col md:flex-row space-x-4 mb-8 ${inter.className}`}>
            <LightText className={`font-semibold ${titleClassName}`}>
                {title}
            </LightText>
            <div className={contentClassName}>
                {children}
            </div>
        </div>
    );
};

export default SectionWithOffset;