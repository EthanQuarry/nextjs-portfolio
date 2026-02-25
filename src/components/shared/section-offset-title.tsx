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
    contentClassName = "flex-grow text-md"
}) => {
    return (
        <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div
                className={titleClassName || "md:w-24 shrink-0 text-xs uppercase tracking-wider font-medium pt-1"}
                style={{ color: 'var(--text-muted)' }}
            >
                {title}
            </div>
            <div className={contentClassName}>
                {children}
            </div>
        </div>
    );
};

export default SectionWithOffset;
