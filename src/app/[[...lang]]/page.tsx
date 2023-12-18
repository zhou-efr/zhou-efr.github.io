import ExperienceBox from "@/components/experiencebox";
import {fr_data, en_data, heading, DataType} from "@/data";
import {get_icon} from "@/icons";
import MailIcon from "@/icons/mail.svg";
import LinkedInIcon from "@/icons/linkedin.svg";
import GithubIcon from "@/icons/github.svg";
import BannerImage from "@/images/banner4.png";
import Flag_fr from "@/images/France.png";
import Flag_uk from "@/images/United-Kingdoms.png";
import Image from "next/image";
import {Banner} from "@/components/Banner";
import Description from "@/components/description";
import TopWave from "@/assets/vectors/topwave";
import BottomWave from "@/assets/vectors/bottomwave";

const images = [
    BannerImage
].map((image) => ({
    id: crypto.randomUUID(),
    image
}));

export async function generateStaticParams() {
    return [
        { lang: [''] },
        { lang: ['fr'] },
        { lang: ['en'] },
    ]
}

export default function Home({ params }: { params: { lang: string[] } }) {
    const lang = params?.lang?.[0] || "en";
    const data = (lang == "fr")? fr_data : en_data as {[key: string]: DataType[]};

    const get_experience = (experience: "educations" | "experiences" | "projects" | "certifications", size: "medium" | "large" | "full", color: "white" | "darkgray" = "white") => {
        return data[experience].map((subdata, index) => {
            return (
                <ExperienceBox
                    key={index}
                    title={subdata.title}
                    location={subdata.location}
                    date={subdata.date}
                    subtitle={subdata.subtitle}
                    description={subdata.description}
                    Icon={get_icon(subdata.iconname)}
                    width={size}
                    link={subdata.link}
                    color={color}
                    border={index !== data[experience].length - 1}
                />
            )
        })
    }

    return (
        <main className="w-screen flex flex-col justify-start items-center bg-white">
            <div className="fixed flex top-5 right-10 gap-5">
                <a href="./en">
                    <Image className="h-8 w-8 object-contain transform transition-all hover:scale-110" src={Flag_uk} alt="UK flag"/>
                </a>
                <a href="./fr">
                    <Image className="h-8 w-8 object-contain transform transition-all hover:scale-110" src={Flag_fr} alt="French flag"/>
                </a>
            </div>
            <section className="w-screen flex flex-col justify-start items-center gap-5 py-20 bg-darkgray text-white px-3 md:px-10">
                <h1 className={"text-5xl md:text-8xl font-semibold mt-20 text-center"}>Killian Zhou</h1>
                <div className="flex flex-col justify-center items-center text-center font-light text-lg md:text-xl w-5/6 md:w-1/2 mt-14">
                    <p>{heading[lang]["age-location"]}</p>
                    <p className={"font-semibold"}>{heading[lang]["title"]}</p>
                    <p>{heading[lang]["job"]}</p>
                </div>
                <Description descriptions={heading[lang]["descriptions"]} language={lang} shortDescription={heading[lang]["inShort"]}/>
                <div className={"flex flex-col justify-center items-center mt-10 w-full"}>
                    {
                        get_experience("educations", "large")
                    }
                </div>
                <div className={"flex flex-col justify-center items-center mt-10 w-full"}>
                    {
                        get_experience("certifications", "large")
                    }
                </div>
            </section>
            <TopWave/>
            <section className="w-screen flex flex-col justify-start items-center gap-5 py-20 bg-white text-white px-3 md:px-10">
                <Banner images={images} speed={25000}/>
            </section>
            <BottomWave/>
            <section className="w-screen flex flex-col justify-start items-center gap-5 py-20 bg-lightgray text-darkgray px-3 md:px-10 -mt-10">
                <div className={"flex flex-wrap justify-center items-start w-full md:w-5/6"}>
                    <div className={"flex flex-col justify-center items-center lg:items-end w-full lg:w-1/2"}>
                        <h2 className={"text-4xl font-semibold text-center pb-5 pt-10 w-full"}>Expériences</h2>
                        {
                            get_experience("experiences", "full", "darkgray")
                        }
                    </div>
                    <div className={"flex flex-col justify-center items-center lg:items-start w-full lg:w-1/2"}>
                        <h2 className={"text-4xl font-semibold text-center pb-5 pt-10 w-full"}>Projets</h2>
                        {
                            get_experience("projects", "full", "darkgray")
                        }
                    </div>
                </div>
            </section>
            <section className="w-screen flex flex-col justify-center items-center gap-5 py-20 bg-lightgray text-darkgray px-5 -mt-14">
                <div className={"flex flex-col justify-center items-center w-full md:w-5/6 border-t border-darkgray pt-14"}>
                    <div className={"flex flex-wrap justify-center items-start w-5/6 md:w-3/4"}>
                        <div className={"flex flex-col justify-start items-end w-full md:w-1/2"}>
                            <h2 className={"text-4xl font-semibold text-center pb-5 w-full"}>Me contacter</h2>
                            <div className={"flex flex-row justify-center items-center gap-1 md:mt-10 h-10 w-full"}>
                                <a href={"mailto:zhou-efr@gmail.com"} target={"_blank"}><Image src={MailIcon} alt={"Send me an email"} className={"h-8 contact-icon hover:opacity-50 transition-all"} /></a>
                                <a href={"https://www.linkedin.com/in/zhou-killian/"} target={"_blank"}><Image src={LinkedInIcon} alt={"Contact me on LinkedIn"} className={"h-10 contact-icon hover:opacity-50 transition-all"} /></a>
                                <a href={"https://github.com/zhou-efr"} target={"_blank"}><Image src={GithubIcon} alt={"Follow me on GitHub"} className={"h-10 contact-icon hover:opacity-50 transition-all"} /></a>
                            </div>
                        </div>
                        <div className={"flex flex-col justify-start items-center w-full md:w-1/2 mt-5 md:mt-2"}>
                            <div className={"flex flex-col gap-3"}>
                                <div className={"flex flex-col items-start"}>
                                    <h3 className={"text-2xl font-semibold w-full"}>LinkedIn</h3>
                                    <p>Killian Zhou</p>
                                    <a className={"hover:text-verylightgray"} href={"https://linkedin.com/in/zhou-killian/"} target={"_blank"}>linkedin.com/in/zhou-killian/</a>
                                </div>
                                <div className={"flex flex-col items-start"}>
                                    <h3 className={"text-2xl font-semibold w-full"}>Courriel</h3>
                                    <p>Killian Zhou</p>
                                    <a className={"hover:text-verylightgray"} href={"mailto:zhou-efr@gmail.com"} target={"_blank"}>zhou-efr@gmail.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
