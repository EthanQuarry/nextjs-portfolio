import React from 'react';
import Link from 'next/link';

interface CustomLinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
    [key: string]: any; // For any additional props
}

const CustomLink: React.FC<CustomLinkProps> = ({ href, children, className = '', ...props }) => {
    return (
        <Link href={href} className={`relative group ${className}`} {...props}>
            <span className="relative z-10">{children}</span>
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#f2613f] transition-transform duration-200 group-hover:-translate-y-[2px] group-hover:opacity-60"></span>
        </Link>
    );
};

export default CustomLink;

