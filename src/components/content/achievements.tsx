import React from 'react';
import Link from 'next/link';

interface Achievement {
    title: string;
    description: string;
    link: string;
}

const Achievements: React.FC<{ achievements: Achievement[] }> = ({ achievements }) => {
    return (
        <div className="space-y-2">
            {achievements.map((achievement, index) => (
                <div key={index} className="flex items-baseline gap-3">
                    <Link
                        href={achievement.link}
                        target="_blank"
                        className="text-[14px] text-[#ededed] hover:text-white transition-colors shrink-0"
                    >
                        {achievement.title}
                    </Link>
                    <span className="text-[13px] text-[#444]">
                        {achievement.description}
                    </span>
                </div>
            ))}
        </div>
    );
};

export default Achievements;
