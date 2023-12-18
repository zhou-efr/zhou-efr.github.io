import educations_fr from "./fr/educations.json";
import certifications_fr from "./fr/certifications.json";
import experiences_fr from "./fr/experiences.json";
import projects_fr from "./fr/projects.json";
import heading_fr from "./fr/heading.json";

import educations_en from "./en/educations.json";
import certifications_en from "./en/certifications.json";
import experiences_en from "./en/experiences.json";
import projects_en from "./en/projects.json";
import heading_en from "./en/heading.json";
import { type } from "os";

export type DataType = {
    title: string;
    location?: string;
    date?: string;
    link?: string;
    subtitle?: string;
    description?: string;
    iconname?: string;
}

export type HeadingType = {
    "age-location": string;
    title: string;
    job: string;
    inShort: string;
    "descriptions": string[];
}

export const heading:{[key: string]: HeadingType} = {
    "fr": heading_fr["heading"] as HeadingType,
    "en": heading_en["heading"] as HeadingType,
}

export const fr_data:{[key: string]: DataType[]} = {
    "educations": educations_fr["educations"] as DataType[],
    "certifications": certifications_fr["certifications"] as DataType[],
    "experiences": experiences_fr["experiences"] as DataType[],
    "projects": projects_fr["projects"] as DataType[],
}

export const en_data:{[key: string]: DataType[]} = {
    "educations": educations_en["educations"] as DataType[],
    "certifications": certifications_en["certifications"] as DataType[],
    "experiences": experiences_en["experiences"] as DataType[],
    "projects": projects_en["projects"] as DataType[],
}
