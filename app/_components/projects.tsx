import Img1 from "@/public/proj.webp";
import Img2 from "@/public/proj2.webp";
import Setup from "@/public/setup.webp";
import { Carousel } from "@components/carousel";
import { cn } from "@lib/cn";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import * as React from "react";

const Card = ({ className, children }: React.ComponentPropsWithoutRef<"div">) => (
    <div
        className={cn(
            "relative flex aspect-square h-full select-none flex-col justify-end",
            className,
        )}>
        {children}
    </div>
);

export const Projects = () => (
    <Carousel>
        <Card className="aspect-video">
            <video
                draggable={false}
                className="absolute h-full w-auto object-cover"
                playsInline
                autoPlay
                loop
                muted
                disablePictureInPicture>
                <source src="/vid.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </Card>
        <Card>
            <Image
                draggable={false}
                src={Img2}
                className="pointer-events-none absolute h-full w-auto object-cover object-center"
                alt=""
            />
        </Card>
        <Card>
            <Image
                draggable={false}
                src={Img1}
                className="pointer-events-none absolute h-full w-auto object-cover object-[63%]"
                alt=""
            />
        </Card>
        <Card>
            <Image
                draggable={false}
                src={Setup}
                className="pointer-events-none absolute h-full w-auto object-cover object-[63%]"
                alt=""
            />
            <span className="px-5 py-4 text-white opacity-90">setup</span>
        </Card>
        <Card>
            <figure className="pointer-events-none absolute inset-0 bg-[#4a99e8] object-cover" />
            <span className="z-10 px-5 py-4 text-foreground opacity-90">
                X (formerly Twitter)
                <ArrowUpRight className="ml-3 inline-block size-6" />
            </span>
        </Card>
    </Carousel>
);
