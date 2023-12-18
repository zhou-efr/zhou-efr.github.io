"use client";

import { FC, useState } from "react";

interface DescriptionProps {
    shortDescription: string;
    descriptions: string[];
    language: string;
}

const buttonText:{[key: string]: {showLess: string, showMore: string}} = {
    en: {
        showLess: "Show less",
        showMore: "Show more"
    },
    fr: {
        showLess: "Afficher moins",
        showMore: "Afficher plus"
    }
}

const Description:FC<DescriptionProps> = ({ descriptions, language, shortDescription} : DescriptionProps) => {
    const [showComplete, setShowComplete] = useState(false);
    const lang = language || "en";

    return (
        <>
            <div className="lg:flex hidden flex-col justify-center items-center text-center font-light text-md lg:text-xl w-5/6 md:w-2/3 gap-5 mt-10">            
                { descriptions.map((description, index) => {
                        return (
                            <p key={index}>&nbsp;&nbsp;&nbsp;&nbsp;{description}</p>
                        );
                })}
            </div>
            <div className="flex lg:hidden flex-col justify-center items-center text-center font-light text-md lg:text-xl w-5/6 md:w-2/3 gap-5 mt-10">
                {
                    !showComplete && (
                        <p className="">{shortDescription}</p>
                    )
                }
                { showComplete && descriptions.map((description, index) => {
                        return (
                            <p key={index}>&nbsp;&nbsp;&nbsp;&nbsp;{description}</p>
                        );
                })}
                {descriptions.length > 1 && (
                    <button className="underline hover:text-darkgray" onClick={() => setShowComplete(!showComplete)}>
                        {showComplete ? buttonText[lang].showLess : buttonText[lang].showMore}
                    </button>
                )}
            </div>
        </>
    );
}

export default Description;