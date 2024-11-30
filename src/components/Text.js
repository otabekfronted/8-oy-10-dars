import React from 'react';

function Text({ text }) {
  return (
    <div className="flex gap-4 font-['Prompt'] items-center ">
      <span className="inline-block h-[1px] w-20 bg-[#FBD784]"></span>
      <p className="text-[#FBD784] tracking-[0.3em] text-xs uppercase">{text}</p>
    </div>
  );
}

export default Text;
