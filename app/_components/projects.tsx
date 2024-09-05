import { Carousel } from "@components/carousel";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const Projects = () => (
    <Carousel>
        <div className="relative flex aspect-square h-full px-3 py-4 md:px-5 md:py-6">
            <div className="h-full w-auto object-cover" />
        </div>
        <div className="relative flex h-full">
            <div className="h-full w-auto object-cover px-3 py-4 md:px-5 md:py-6" />
        </div>
        <div className="relative flex aspect-square h-full">
            <div className="h-full w-auto object-cover px-3 py-4 md:px-5 md:py-6" />
        </div>
        <div className="relative flex h-full">
            <div className="h-full w-auto object-cover" />
        </div>
        <Link
            href="httsp://x.com/gsmmtt"
            target="_blank"
            className="align-end relative flex aspect-square h-full justify-between px-3 py-4 md:px-5 md:py-6">
            <span className="text-lg font-semibold">X (formerly Twitter)</span>
            <ArrowUpRight className="size-6" />
        </Link>
    </Carousel>
);
