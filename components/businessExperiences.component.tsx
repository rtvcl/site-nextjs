import Image from 'next/image';
import React from 'react';

type Props = {};
type BusinessExperience = {
  icon: string;
  label: string;
};

const dataBusinessExperiences: BusinessExperience[] = [
  { icon: 'icon-ecom.png', label: 'E-commerce SaaS' },
  { icon: 'icon-edu.png', label: 'Educations' },
  { icon: 'icon-fin.png', label: 'Financial Services' },
  { icon: 'icon-diga.png', label: 'Digital Agency' },
];

const BusinessExperience = (props: Props) => {
  return (
    <div className="p-5">
      <h4 className="text-xl font-semibold">Business Experiences</h4>
      <ul className="grid grid-cols-2 gap-2 mt-4">
        {dataBusinessExperiences.map((businessExperience) => {
          return (
            <li
              key={businessExperience.label}
              className="flex items-center gap-2"
            >
              <Image
                src={`/be-icon/${businessExperience.icon}`}
                width="24"
                height="24"
                alt={businessExperience.label}
                className="object-contain"
              />
              <span>{businessExperience.label}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BusinessExperience;
