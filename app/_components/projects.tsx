import { Carousel } from "@components/carousel";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const Card = ({ children }: { children: React.ReactNode }) => (
    <div className="relative flex aspect-square h-full px-3 py-4 md:px-5 md:py-6">{children}</div>
);

export const Projects = () => (
    <Carousel>
        <Card>
            <div className="h-full w-auto object-cover" />
        </Card>
        <Card>
            <div className="h-full w-auto object-cover" />
        </Card>
        <Card>
            <div className="h-full w-auto object-cover" />
        </Card>
        <Card>
            <div className="h-full w-auto object-cover" />
        </Card>
        <Link
            href="httsp://x.com/gsmmtt"
            target="_blank"
            className="align-end relative flex aspect-square h-full justify-between px-3 py-4 md:px-5 md:py-6">
            <span className="text-lg font-semibold">X (formerly Twitter)</span>
            <ArrowUpRight className="size-6" />
        </Link>
    </Carousel>
);
