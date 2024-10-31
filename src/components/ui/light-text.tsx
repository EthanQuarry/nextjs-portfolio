import React from 'react';
import Link from 'next/link';

interface LightTextProps {
    children: React.ReactNode;
    className?: string;
    underline?: boolean;
    href?: string;
}

const LightText: React.FC<LightTextProps> = ({ children, className = '', underline = false, href }) => {
    const baseClasses = `text-[#9c8f8f] ${className}`;

    if (underline) {
        return (
            <Link href={href || '#'} className={`relative group ${baseClasses}`}>
                <span className="relative z-10">{children}</span>
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#f2613f] transition-transform duration-200 group-hover:-translate-y-[2px] group-hover:opacity-60"></span>
            </Link>
        );
    }

    return (
        <span className={baseClasses}>
            {children}
        </span>
    );
};

export default LightText;