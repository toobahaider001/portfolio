import React from 'react';

interface SkillScoreProps {
    title: string;
    score: number;
}

const SkillScore: React.FC<SkillScoreProps> = ({
    title,
    score
}) => {
  return (
    <div className="flex flex-col gap-2 w-full px-5">
        <div className="font-medium tracking-tight">{title}</div>
        <div className="md:w-full h-4 rounded-full bg-zinc-200 overflow-hidden">
            {/* Progress Fill */}
            <div
                style={{ width: `${score}%` }}
                className="h-full bg-blue-600 transition-all duration-300 ease-in-out"
            ></div>
        </div>
    </div>
  );
};

export default SkillScore;
