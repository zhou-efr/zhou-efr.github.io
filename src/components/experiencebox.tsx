import {FC} from "react";
import B from "@/components/b";

interface ExperienceBoxProps {
    title: string;
    location?: string;
    date?: string;
    subtitle?: string;
    description?: string;
    link?: string;
    Icon?: FC;
    width: "medium" | "large" | "full";
    border?: boolean;
    color?: "white" | "darkgray";
}

const widthClass = {
    "medium": "w-full md:w-1/3",
    "large": "w-full md:w-2/3",
    "full": "w-full"
}

const colorClass = {
    "white": "bg-white",
    "darkgray": "bg-darkgray"
}

const borderClass = {
    "white": "border-l-2 border-white -ml-12 pl-12 pb-2",
    "darkgray": "border-l-2 border-darkgray -ml-12 pl-12 pb-2"
}

export default function ExperienceBox({title, location, date, subtitle, description, link, Icon, width = "medium", border = true, color = "white"}: ExperienceBoxProps) {
    return (
        <div className={`font-light mb-3 ${widthClass[width]}`}>
            <div className={"flex flex-row justify-center items-start"}>
                <div className={`w-12 h-12 md:w-14 md:h-14 p-2.5 ${colorClass[color]} rounded-full flex justify-center items-center`}>
                    {Icon && <Icon/>}
                </div>
                <div className={"flex flex-col justify-start items-start gap-3 w-5/6 ml-5"}>
                    <h3 className={"text-xl md:text-2xl h-12 md:h-14 flex items-center"}><span className="h-fit"><B>{title}</B> {location} {date && ("/ " + date)}</span></h3>
                    <div className={`flex flex-col justify-start items-start gap-1 w-full ${border && borderClass[color]} text-md md:text-lg`}>
                        <h4 className={""}>{subtitle && subtitle}{link && <> - <a className={"underline hover:text-verylightgray"} href={link} target={"_blank"}>lien</a></> }</h4>
                        {description && <p className={"italic"}>{description}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
}
