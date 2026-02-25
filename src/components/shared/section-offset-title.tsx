import React, { ReactNode } from 'react';

interface SectionWithOffsetProps {
    title: string;
    children: ReactNode;
    titleClassName?: string;
    contentClassName?: string;
}

const SectionWithOffset: React.FC<SectionWithOffsetProps> = ({
    title,
    children,
    titleClassName,
    contentClassName = "flex-grow"
}) => {
    return (
        <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className={titleClassName || "md:w-24 shrink-0 text-[12px] uppercase tracking-[0.08em] text-[#555] md:text-right pt-0.5 font-medium"}>
                {title}
            </div>
            <div className={contentClassName}>
                {children}
            </div>
        </div>
    );
};

export default SectionWithOffset;
