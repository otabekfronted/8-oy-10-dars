import React from "react";
import Text from "./Text";
import { BsArrowRight } from "react-icons/bs";
function Content({ className, heading, text, desc, number, image }) {
    return (
        <div className="text-white z-[1000] max-w-7xl mx-auto" id={number}>
            <div className={`flex gap-28 items-center ${className}`}>
                <div className="w-full relative h-full">
                    <h1 className="absolute -top-36 left-0 text-[180px] font-['Prompt'] font-bold -z-10 text-white/5">
                        {number}
                    </h1>
                    <div className=" pl-[100px]">
                        <Text text={text} />
                        <h1 className="text-[4rem] font-normal">{heading}</h1>
                        <p className=" font-['Prompt'] ">{desc}</p>
                        <p className="font-['Prompt'] text-[#FBD784] mt-4">
                            read more <BsArrowRight className="inline-block" />
                        </p>
                    </div>
                </div>
                <div className="w-full">
                    <img src={`${image}`} alt="dec" />
                </div>
            </div>
        </div>
    );
}

export default Content;
