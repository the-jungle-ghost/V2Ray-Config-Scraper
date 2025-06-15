import React, { ReactNode } from 'react';
import { getPlatformIcon } from '../utils/guideUtils';

interface StepType {
  title: string | ReactNode;
  description: string | ReactNode;
  customContent?: ReactNode;
}

interface GuideSectionProps {
  title: string | ReactNode;
  platform: string;
  steps: StepType[];
}

export function GuideSection({ title, platform, steps }: GuideSectionProps) {
  const platformIcon = getPlatformIcon(platform);
  
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl" role="img" aria-label={`${platform} icon`}>
          {platformIcon}
        </span>
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
      </div>
      
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div key={index} className="border-l-4 border-purple-200 pl-4">
            <h3 className="font-medium text-gray-800 mb-1">
              Step {index + 1}: {step.title}
            </h3>
            <p className="text-gray-600 text-sm break-words whitespace-normal">
              {step.description}
            </p>
            {step.customContent && step.customContent}
          </div>
        ))}
      </div>
    </div>
  );
} 