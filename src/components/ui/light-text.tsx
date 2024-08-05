import React from 'react';

interface LightTextProps {
    children: React.ReactNode;
    className?: string;
}

const LightText: React.FC<LightTextProps> = ({ children, className = '' }) => {
    return (
        <span className={`text-[#7d7d7d] ${className}`}>
            {children}
        </span>
    );
};

export default LightText;
