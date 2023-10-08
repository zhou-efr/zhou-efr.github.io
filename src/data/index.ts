import educations from "./educations.json";
import certifications from "./certifications.json";
import experiences from "./experiences.json";
import projects from "./projects.json";

type DataType = {
    title: string;
    location?: string;
    date?: string;
    link?: string;
    subtitle?: string;
    description?: string;
    iconname?: string;
}

export const data:{[key: string]: DataType[]} = {
    "educations": educations["educations"] as DataType[],
    "certifications": certifications["certifications"] as DataType[],
    "experiences": experiences["experiences"] as DataType[],
    "projects": projects["projects"] as DataType[],
}
