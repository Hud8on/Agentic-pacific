import React, { useState } from 'react';

type IndustryUseCase = {
  title: string;
  description: string;
};

type AccordionProps = {
  industry: string;
  useCases: IndustryUseCase[];
};

const IndustryAccordion: React.FC<AccordionProps> = ({ industry, useCases }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-blue-200 bg-[#FDF6EE] rounded-lg p-10 my-16 shadow-md">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left text-4xl sm:text-5xl font-extrabold text-[#153243] hover:text-[#E67E22] focus:outline-none mb-12 sm:mb-16"
      >
        {industry}
      </button>
      {isOpen && (
        <ul className="mt-10 pl-8 list-disc space-y-8 text-[#153243]">
          {useCases.map((useCase, index) => (
            <li key={index} className="text-lg leading-relaxed flex items-start gap-4">
              <div className="w-6 h-6 bg-[#E67E22] rounded-full mt-1"></div> {/* Icon placeholder */}
              <div>
                <strong className="block text-[#153243] mb-1">{useCase.title}:</strong>
                {useCase.description}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default IndustryAccordion;