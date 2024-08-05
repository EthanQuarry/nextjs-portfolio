import React from 'react';
import Link from 'next/link';
import CustomLink from './link';

const Navbar: React.FC = () => {
    return (
        <nav className="py-4">
            <div className="container mx-auto flex flex-col items-center">
                <Link href="/" className="text-2xl text-white mb-4">
                    Ethan Quarry
                </Link>
                <ul className="flex space-x-6">
                    <li>
                        <CustomLink href="/projects" className="opacity-60 hover:opacity-100">
                            Questions
                        </CustomLink>
                    </li>
                    <li>
                        <CustomLink href="/startups" className="opacity-60 hover:opacity-100">
                            Quotes
                        </CustomLink>
                    </li>
                    <li>
                        <CustomLink href="/blog" className="opacity-60 hover:opacity-100">
                            Blog
                        </CustomLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;