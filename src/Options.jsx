import React, { useState } from 'react';

const Options = ({ text, Icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`flex gap-2 xl:p-[12px] transition ease-in-out delay-150 duration-100 rounded hover:cursor-pointer  `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span
        className={`flex items-center ${
          isHovered ? 'bg-[#E1E8ED]' : ''
        } p-[10px] rounded-[50px]`}
      >
        <Icon className="text-[20px]" />
        <div className='hidden xl:block text-[20px] '>{text}</div>
      </span>
      
    </div>
  );
};

export default Options;
