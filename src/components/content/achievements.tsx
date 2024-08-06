import React from 'react';
import CustomLink from '../ui/link';

interface Achievement {
    title: string;
    description: string;
    link: string;
}

const Achievements: React.FC<{ achievements: Achievement[] }> = ({ achievements }) => {
    return (
        <div className="flex flex-col space-y-2">
            {achievements.map((achievement, index) => (
                <div key={index} className="flex-1">
                    <CustomLink href={achievement.link} target="_blank">{achievement.title}</CustomLink>
                    <span className="text-foreground-rgb opacity-60 ml-2">{achievement.description}</span>
                </div>
            ))}
        </div>
    );
};

export default Achievements;    