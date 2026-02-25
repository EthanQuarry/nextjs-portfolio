'use client'

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'

const Navbar: React.FC = () => {
    const pathname = usePathname()

    const isActive = (path: string) => {
        return pathname === path
            ? 'text-[var(--text-primary)]'
            : 'text-[var(--text-muted)] hover:text-[var(--text-secondary)]';
    };

    return (
        <nav className="py-4">
            <div className="container mx-auto flex flex-col items-center">
                <Link href="/" className="text-xl font-semibold tracking-tight text-white mb-4">
                    Ethan Quarry
                </Link>
                <ul className="flex space-x-6 text-sm">
                    <li>
                        <Link href="/quotes" className={`transition-colors duration-200 ${isActive('/quotes')}`}>
                            Quotes
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog" className={`transition-colors duration-200 ${isActive('/blog')}`}>
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link href="/link" className={`transition-colors duration-200 ${isActive('/link')}`}>
                            Links
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
