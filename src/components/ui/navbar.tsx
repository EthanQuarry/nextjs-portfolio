'use client'

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import CustomLink from '@/components/ui/link';

const Navbar: React.FC = () => {
    const pathname = usePathname()

    const isActive = (path: string) => {
        return pathname === path ? 'opacity-100' : 'opacity-60 hover:opacity-100';
    };

    return (
        <nav className="py-4">
            <div className="container mx-auto flex flex-col items-center">
                <Link href="/" className="text-2xl text-white mb-4">
                    Ethan Quarry
                </Link>
                <ul className="flex space-x-6">
                    <li>
                        <CustomLink href="/quotes" className={isActive('/quotes')}>
                            Quotes
                        </CustomLink>
                    </li>
                    <li>
                        <CustomLink href="/blog" className={isActive('/blog')}>
                            Blog
                        </CustomLink>
                    </li>
                    <li>
                        <CustomLink href="/questions" className={isActive('/questions')}>
                            Questions
                        </CustomLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;