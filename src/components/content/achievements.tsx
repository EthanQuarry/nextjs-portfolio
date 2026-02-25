import React from 'react';
import Link from 'next/link';

interface Achievement {
    title: string;
    description: string;
    link: string;
}

const Achievements: React.FC<{ achievements: Achievement[] }> = ({ achievements }) => {
    return (
        <div className="flex flex-col">
            {achievements.map((achievement, index) => (
                <div key={index} className="achievement-row flex items-baseline gap-3">
                    <Link
                        href={achievement.link}
                        target="_blank"
                        className="text-[14px] font-medium shrink-0 custom-underline"
                        style={{ color: 'var(--text-primary)' }}
                    >
                        {achievement.title}
                    </Link>
                    <span
                        className="text-[14px]"
                        style={{ color: 'var(--text-muted)' }}
                    >
                        {achievement.description}
                    </span>
                </div>
            ))}
        </div>
    );
};

export default Achievements;
