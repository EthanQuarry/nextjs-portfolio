import React from 'react';

interface Achievement {
    title: string;
    description: string;
    link: string;
}

const Achievements: React.FC<{ achievements: Achievement[] }> = ({ achievements }) => {
    return (
        <div className="flex flex-col space-y-2">
            {achievements.map((achievement, index) => (
                <a href={achievement.link} key={index} className="flex-1">
                    <span className="text-accent-rgb custom-underline">{achievement.title}</span>
                    <span className="text-foreground-rgb opacity-60 ml-2">{achievement.description}</span>
                </a>
            ))}
        </div>
    );
};

export default Achievements;    