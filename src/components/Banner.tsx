import {FC} from "react";
import Image, {StaticImageData} from "next/image";
// mandatory CSS inside globals.css

type ImageElement = {
    id: string;
    image: StaticImageData;
}

interface BannerProps {
    images: ImageElement[];
    speed?: number;
}

const Banner:FC<BannerProps> = ({ images, speed = 5000 }) => {
    return (
        <div className="inner">
            <div className="wrapper">
                <section style={{ "--speed": `${speed}ms` } as {[key: string]: string}}>
                    {images.map(({ id, image }) => (
                        <div className="image" key={id}>
                            <Image className={"img"} src={image} alt={id} />
                        </div>
                    ))}
                </section>
                <section style={{ "--speed": `${speed}ms` } as {[key: string]: string}}>
                    {images.map(({ id, image }) => (
                        <div className="image" key={id}>
                            <Image className={"img"} src={image} alt={id} />
                        </div>
                    ))}
                </section>
                <section style={{ "--speed": `${speed}ms` } as {[key: string]: string}}>
                    {images.map(({ id, image }) => (
                        <div className="image" key={id}>
                            <Image className={"img"} src={image} alt={id} />
                        </div>
                    ))}
                </section>
            </div>
        </div>
    );
};

export { Banner };
