import { Carousel } from "@components/carousel";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const Projects = () => (
    <Carousel>
        <div className="relative flex aspect-square h-full">
            <div className="h-full w-auto object-cover" />
        </div>
        <div className="relative flex h-full">
            <div className="h-full w-auto object-cover" />
        </div>
        <div className="relative flex aspect-square h-full">
            <div className="h-full w-auto object-cover" />
        </div>
        <div className="relative flex h-full">
            <div className="h-full w-auto object-cover" />
        </div>
        <div className="relative flex aspect-square h-full">
            <span className="text-2xl font-semibold">Must read</span>
            <div className="h-full w-auto object-cover" />
        </div>
        <Link
            href="httsp://x.com/gsmmtt"
            target="_blank"
            className="relative flex aspect-square h-full flex-col justify-end px-3 py-4">
            <div className="absolute inset-0 bg-[#4a99e8] object-cover" />
            <span className="text-2xl font-semibold">X (formerly Twitter)</span>
            <ArrowUpRight className="absolute bottom-4 right-4 size-6" />
        </Link>
    </Carousel>
);
