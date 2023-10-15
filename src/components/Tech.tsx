import React from 'react';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';

const Tech = (): React.JSX.Element => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-20">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <div className="group">
            <BallCanvas icon={technology.icon} />
            <span className="invisible group-hover:visible opacity:0 group-hover:opacity-100 transition bg-blue-500 text-white p-1 rounded top-full mt-2 whitespace-nowrap">
              {technology.name}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, '');
