'use client'

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'

const Navbar: React.FC = () => {
    const pathname = usePathname()

    const linkClass = (path: string) =>
        pathname === path
            ? 'text-[#ededed]'
            : 'text-[#555] hover:text-[#999]';

    return (
        <nav className="w-full flex flex-col sm:flex-row items-center sm:justify-between gap-4 py-2">
            <Link href="/" className="text-[15px] font-medium text-white tracking-[-0.01em]">
                Ethan Quarry
            </Link>
            <div className="flex gap-6 text-[13px]">
                <Link href="/quotes" className={`transition-colors ${linkClass('/quotes')}`}>
                    Quotes
                </Link>
                <Link href="/blog" className={`transition-colors ${linkClass('/blog')}`}>
                    Blog
                </Link>
                <Link href="/link" className={`transition-colors ${linkClass('/link')}`}>
                    Links
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
