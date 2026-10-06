import React from 'react';
import Link from 'next/link';

interface Role {
    company: string;
    link?: string;
    role: string;
    place: string;
    dates: string;
    description: string;
    watch?: { href: string; label: string };
}

const Experience: React.FC<{ roles: Role[] }> = ({ roles }) => {
    return (
        <div className="space-y-8">
            {roles.map((item, index) => (
                <div key={index}>
                    <div className="flex items-baseline justify-between gap-4">
                        {item.link ? (
                            <Link
                                href={item.link}
                                target="_blank"
                                className="text-[15px] text-[#ededed] hover:text-white transition-colors"
                            >
                                {item.company}
                            </Link>
                        ) : (
                            <span className="text-[15px] text-[#ededed]">{item.company}</span>
                        )}
                        <span className="text-[12px] text-[#333] shrink-0">{item.dates}</span>
                    </div>
                    <p className="text-[13px] text-[#555] mt-0.5">
                        {item.role} &middot; {item.place}
                    </p>
                    <p className="font-serif text-[15px] leading-[1.85] text-[#888] mt-3">
                        {item.description}
                    </p>
                    {item.watch && (
                        <Link
                            href={item.watch.href}
                            target="_blank"
                            className="inline-flex items-center gap-1.5 text-[13px] text-[#999] hover:text-white transition-colors mt-3 border-b border-[#333] hover:border-[#666] pb-px"
                        >
                            {item.watch.label}
                            <span className="text-[10px]">&#8599;</span>
                        </Link>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Experience;
