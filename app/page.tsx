import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/drawer";
import { MessageInput } from "@/components/message-input";
import prisma from "@/prisma";
import {
    Braces,
    BrainCircuit,
    ExternalLink,
    Eye,
    Github,
    Globe,
    Home,
    Mail,
    MessageCircle,
    Twitter,
    Watch,
} from "lucide-react";
import Link from "next/link";
import { ServerCountUpdate } from "./server-count-update";

export const revalidate = 1;

async function getPageViewCount() {
    const data = await prisma.counter.findUnique({
        where: { id: 1 },
    });

    return data?.visitCount;
}

export default async function HomePage() {
    const pageViewCount = await getPageViewCount();

    return (
        <main className="relative mb-24 h-full w-full py-6">
            <ServerCountUpdate />
            <header className="container flex w-full items-center">
                <h1 className="text-sm font-medium text-foreground md:text-base">gsmt</h1>
            </header>
            <div className="container flex flex-col space-y-6 pt-8">
                <div className="flex w-full flex-col space-y-4">
                    <div className="flex w-full justify-between">
                        <span className="text-xs text-muted-foreground/80">
                            IPA&nbsp;<i>/ˈɡɪlbət/</i> —&nbsp;Software Dev
                        </span>
                        <span className="flex items-center text-xs text-muted-foreground/80">
                            <Eye className="mr-1 h-4 w-4" />
                            {pageViewCount} page views
                        </span>
                    </div>
                    <p className="text-sm text-foreground">
                        Hi there, I&apos;m a software developer passionate about building a better
                        web, creating great experiences for end users, and trying to solve
                        real-world <Globe className="inline-block h-4 w-4 opacity-50" /> problems
                        with an eye for design. I&apos;m also a fan of open-source software, and
                        cool-looking watches <Watch className="inline-block h-4 w-4 opacity-50" />.
                        <br />
                        <br />
                        Introduced to technology at a young age, I have been building software for
                        over 3 years now. Doing everything from data scrapers{" "}
                        <Braces className="inline-block h-4 w-4 opacity-50" />, dynamic websites and
                        APIs, native applications, fractal simulations and data visualizations.
                        <br />
                        <br />
                        I&apos;m always looking for new ways to use technology to make a positive
                        impact on people. I have been particularly interested in using ML{" "}
                        <BrainCircuit className="inline-block h-4 w-4 opacity-50" /> to create more
                        personalized and engaging experiences for users.
                    </p>
                </div>
                <div className="flex w-full flex-col space-y-2">
                    <p className="text-sm text-foreground">
                        Currently working on an{" "}
                        <Link
                            href="https://strapho.com"
                            className="text-green-500 underline underline-offset-4"
                            target="_blank"
                            rel="nofollow">
                            AI productivity app
                        </Link>{" "}
                        at <strong className="font-medium">buildspace</strong>.
                    </p>
                </div>
                <div className="flex w-full flex-col space-y-2">
                    <p className="text-sm text-foreground">
                        If you&apos;d like to connect find me on the links below or chat
                    </p>
                </div>
            </div>
            <div className="container flex w-full flex-col items-center space-y-4 pt-6 md:flex-row md:space-x-4 md:space-y-0">
                <Link
                    href="/"
                    title="Twitter"
                    className="flex h-9 w-full items-center justify-center rounded-md border bg-transparent px-2.5 text-sm md:w-fit">
                    <Twitter className="mr-2 h-4 w-4" />
                    Twitter
                </Link>
                <Link
                    href="https://github.com/rortan134"
                    title="GitHub"
                    className="flex h-9 w-full items-center justify-center rounded-md border bg-transparent px-2.5 text-sm md:w-fit">
                    <Github className="mr-2 h-4 w-4" />
                    Github
                </Link>
                <Link
                    href="mailto:gsmt.dev@gmail.com"
                    title="Email"
                    className="flex h-9 w-full items-center justify-center rounded-md border bg-transparent px-2.5 text-sm md:w-fit">
                    <Mail className="mr-2 h-4 w-4" />
                    Email
                </Link>
            </div>
            <nav className="fixed inset-x-0 bottom-0 bg-gradient-to-t from-black/10 pb-12">
                <div className="absolute bottom-3 left-1/2 flex w-64 -translate-x-1/2 items-center justify-between overflow-hidden rounded-3xl border bg-neutral-200/70 px-1 py-0.5 backdrop-blur-sm">
                    <Link
                        href="/"
                        className="inline-flex w-full items-center justify-center rounded-2xl bg-neutral-300/50 px-3 py-1.5">
                        <Home className="h-4 w-4" />
                    </Link>
                    <Drawer>
                        <DrawerTrigger className="inline-flex w-full items-center justify-center rounded-2xl px-4 py-1.5 text-sm font-medium opacity-90">
                            Projects
                        </DrawerTrigger>
                        <DrawerContent className="px-0">
                            <DrawerTitle className="px-4">Projects</DrawerTitle>
                            <DrawerDescription className="px-4">
                                Find my best personal projects below. WIP
                            </DrawerDescription>
                            <div className="mt-6 flex w-full flex-col space-y-4 md:space-y-16">
                                <div className="grid grid-cols-4 gap-4 md:grid-cols-1 md:gap-x-0">
                                    <div className="relative col-span-1 flex flex-col overflow-hidden md:col-span-full md:row-span-full md:w-full md:py-4">
                                        <div className="absolute inset-0 hidden bg-neutral-200 object-cover md:block"></div>
                                        <div className="z-10 ml-4 aspect-square h-full max-h-20 w-auto max-w-[80px] rounded-md bg-neutral-300" />
                                    </div>
                                    <div className="col-span-3 flex w-full flex-col space-y-0.5 pr-4 md:pl-4">
                                        <h3 className="text-sm font-medium text-foreground">
                                            Project
                                        </h3>
                                        <p className="text-xs text-muted-foreground">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing
                                            elit. Quo laborum veniam at nostrum quia tenetur magnam
                                            quasi vitae.
                                        </p>
                                        <div className="flex items-center space-x-4">
                                            <span className="truncate text-xs text-muted-foreground">
                                                Next.js • Prisma • AWS
                                            </span>
                                            <Link
                                                href="/"
                                                className="flex items-center justify-center text-xs text-muted-foreground underline-offset-2 active:underline md:hover:underline">
                                                View live
                                                <ExternalLink className="ml-1 h-3 w-3" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 flex w-full flex-col space-y-4 md:space-y-16">
                                <div className="grid grid-cols-4 gap-4 md:grid-cols-1 md:gap-x-0">
                                    <div className="relative col-span-1 flex flex-col overflow-hidden md:col-span-full md:row-span-full md:w-full md:py-4">
                                        <div className="absolute inset-0 hidden bg-neutral-200 object-cover md:block"></div>
                                        <div className="z-10 ml-4 aspect-square h-full max-h-20 w-auto max-w-[80px] rounded-md bg-neutral-300" />
                                    </div>
                                    <div className="col-span-3 flex w-full flex-col space-y-0.5 pr-4 md:pl-4">
                                        <h3 className="text-sm font-medium text-foreground">
                                            Project
                                        </h3>
                                        <p className="text-xs text-muted-foreground">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing
                                            elit. Quo laborum veniam at nostrum quia tenetur magnam
                                            quasi vitae.
                                        </p>
                                        <div className="flex items-center space-x-4">
                                            <span className="truncate text-xs text-muted-foreground">
                                                Next.js • Prisma • AWS
                                            </span>
                                            <Link
                                                href="/"
                                                className="flex items-center justify-center text-xs text-muted-foreground underline-offset-2 active:underline md:hover:underline">
                                                View live
                                                <ExternalLink className="ml-1 h-3 w-3" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 flex w-full flex-col space-y-4 md:space-y-16">
                                <div className="grid grid-cols-4 gap-4 md:grid-cols-1 md:gap-x-0">
                                    <div className="relative col-span-1 flex flex-col overflow-hidden md:col-span-full md:row-span-full md:w-full md:py-4">
                                        <div className="absolute inset-0 hidden bg-neutral-200 object-cover md:block"></div>
                                        <div className="z-10 ml-4 aspect-square h-full max-h-20 w-auto max-w-[80px] rounded-md bg-neutral-300" />
                                    </div>
                                    <div className="col-span-3 flex w-full flex-col space-y-0.5 pr-4 md:pl-4">
                                        <h3 className="text-sm font-medium text-foreground">
                                            Project
                                        </h3>
                                        <p className="text-xs text-muted-foreground">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing
                                            elit. Quo laborum veniam at nostrum quia tenetur magnam
                                            quasi vitae.
                                        </p>
                                        <div className="flex items-center space-x-4">
                                            <span className="truncate text-xs text-muted-foreground">
                                                Next.js • Prisma • AWS
                                            </span>
                                            <Link
                                                href="/"
                                                className="flex items-center justify-center text-xs text-muted-foreground underline-offset-2 active:underline md:hover:underline">
                                                View live
                                                <ExternalLink className="ml-1 h-3 w-3" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 flex w-full flex-col space-y-4 md:space-y-16">
                                <div className="grid grid-cols-4 gap-4 md:grid-cols-1 md:gap-x-0">
                                    <div className="relative col-span-1 flex flex-col overflow-hidden md:col-span-full md:row-span-full md:w-full md:py-4">
                                        <div className="absolute inset-0 hidden bg-neutral-200 object-cover md:block"></div>
                                        <div className="z-10 ml-4 aspect-square h-full max-h-20 w-auto max-w-[80px] rounded-md bg-neutral-300" />
                                    </div>
                                    <div className="col-span-3 flex w-full flex-col space-y-0.5 pr-4 md:pl-4">
                                        <h3 className="text-sm font-medium text-foreground">
                                            Project
                                        </h3>
                                        <p className="text-xs text-muted-foreground">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing
                                            elit. Quo laborum veniam at nostrum quia tenetur magnam
                                            quasi vitae.
                                        </p>
                                        <div className="flex items-center space-x-4">
                                            <span className="truncate text-xs text-muted-foreground">
                                                Next.js • Prisma • AWS
                                            </span>
                                            <Link
                                                href="/"
                                                className="flex items-center justify-center text-xs text-muted-foreground underline-offset-2 active:underline md:hover:underline">
                                                View live
                                                <ExternalLink className="ml-1 h-3 w-3" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </DrawerContent>
                    </Drawer>
                    <Drawer>
                        <DrawerTrigger className="inline-flex w-full items-center justify-center rounded-2xl px-3 py-1.5 opacity-90">
                            <MessageCircle className="h-4 w-4" />
                        </DrawerTrigger>
                        <DrawerContent>
                            <MessageInput />
                            <div className="flex items-center justify-end space-x-4 pt-5">
                                <Link
                                    href="https://twitter.com"
                                    className="inline-flex items-center text-xs text-muted-foreground"
                                    title="Twitter">
                                    <Twitter className="mr-1 h-3 w-3" />
                                    Twitter
                                    <ExternalLink className="ml-1 h-3 w-3" />
                                </Link>
                                <Link
                                    href="https://github.com/rortan134"
                                    className="inline-flex items-center text-xs text-muted-foreground"
                                    title="GitHub">
                                    <Github className="mr-1 h-3 w-3" />
                                    GitHub
                                    <ExternalLink className="ml-1 h-3 w-3" />
                                </Link>
                                <Link
                                    href="mailto:gsmt.dev@gmail.com"
                                    className="inline-flex items-center text-xs text-muted-foreground"
                                    title="Email">
                                    <Mail className="mr-1 h-3 w-3" />
                                    Email
                                    <ExternalLink className="ml-1 h-3 w-3" />
                                </Link>
                            </div>
                        </DrawerContent>
                    </Drawer>
                </div>
            </nav>
        </main>
    );
}
