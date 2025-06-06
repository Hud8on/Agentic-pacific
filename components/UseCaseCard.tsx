

import React from 'react';

interface UseCaseCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  image?: React.ReactNode;
}

const UseCaseCard: React.FC<UseCaseCardProps> = ({ title, description, icon, image }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-start space-x-4">
        {icon && <div className="text-3xl text-blue-500">{icon}</div>}
        {image && <div className="w-12 h-12 flex-shrink-0">{image}</div>}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default UseCaseCard;