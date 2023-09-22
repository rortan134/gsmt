import Link from "next/link";
import { ServerCountUpdate } from "./server-count-update";
import { Twitter, Github, Mail, Home, MessageCircle, ExternalLink, Eye, Watch, Globe, Braces, BrainCircuit } from "lucide-react";
import { Drawer, DrawerContent, DrawerDescription, DrawerTrigger, DrawerTitle } from "@/components/drawer";
import { MessageInput } from "@/components/message-input";
import prisma from "@/prisma";

async function getPageViewCount() {
    const data = await prisma.counter.findUnique({
        where: { id: 1 },
    });

    return data?.visitCount;
}

export default async function HomePage() {
    const pageViewCount = await getPageViewCount();

    return (
        <main className="relative w-full h-full py-6 mb-24">
            <ServerCountUpdate />
            <header className="container flex items-center w-full">
                <h1 className="font-medium text-sm md:text-base text-foreground">gsmt</h1>
            </header>
            <div className="container flex flex-col space-y-6 pt-8">
                <div className="flex flex-col w-full space-y-4">
                    <div className="flex justify-between w-full">
                        <span className="text-muted-foreground/80 text-xs">
                            IPA&nbsp;<i>/ˈɡɪlbət/</i> —&nbsp;Software Dev
                        </span>
                        <span className="text-muted-foreground/80 text-xs flex items-center">
                            <Eye className="w-4 h-4 mr-1" />
                            {pageViewCount} page views
                        </span>
                    </div>
                    <p className="text-foreground text-sm">
                        Hi there, I&apos;m a software developer passionate about building a better web, creating great experiences for end
                        users, and trying to solve real-world <Globe className="inline-block h-4 w-4 opacity-50" /> problems with an eye for
                        design. I&apos;m also a fan of open-source software, and cool-looking watches{" "}
                        <Watch className="inline-block h-4 w-4 opacity-50" />.
                        <br />
                        <br />
                        Introduced to technology at a young age, I have been building software for over 3 years now. Doing everything from
                        data scrapers <Braces className="inline-block h-4 w-4 opacity-50" />, dynamic websites and APIs, native
                        applications, fractal simulations and data visualizations.
                        <br />
                        <br />
                        I&apos;m always looking for new ways to use technology to make a positive impact on people. I have been particularly
                        interested in using ML <BrainCircuit className="inline-block h-4 w-4 opacity-50" /> to create more personalized and
                        engaging experiences for users.
                    </p>
                </div>
                <div className="flex flex-col w-full space-y-2">
                    <p className="text-foreground text-sm">
                        Currently working on an{" "}
                        <Link
                            href="https://strapho.com"
                            className="underline underline-offset-4 text-green-500"
                            target="_blank"
                            rel="nofollow"
                        >
                            AI productivity app
                        </Link>{" "}
                        at <strong className="font-medium">buildspace</strong>.
                    </p>
                </div>
                <div className="flex flex-col w-full space-y-2">
                    <p className="text-foreground text-sm">If you&apos;d like to connect find me on the links below or chat</p>
                </div>
            </div>
            <div className="container pt-6 md:flex-row flex-col w-full flex items-center md:space-x-4 md:space-y-0 space-y-4">
                <Link
                    href="/"
                    title="Twitter"
                    className="w-full md:w-fit text-sm h-9 px-2.5 rounded-md border bg-transparent flex items-center justify-center"
                >
                    <Twitter className="h-4 w-4 mr-2" />
                    Twitter
                </Link>
                <Link
                    href="https://github.com/rortan134"
                    title="GitHub"
                    className="w-full md:w-fit text-sm h-9 px-2.5 rounded-md border bg-transparent flex items-center justify-center"
                >
                    <Github className="h-4 w-4 mr-2" />
                    Github
                </Link>
                <Link
                    href="mailto:gsmt.dev@gmail.com"
                    title="Email"
                    className="w-full md:w-fit text-sm h-9 px-2.5 rounded-md border bg-transparent flex items-center justify-center"
                >
                    <Mail className="h-4 w-4 mr-2" />
                    Email
                </Link>
            </div>
            <nav className="bg-gradient-to-t from-black/10 inset-x-0 fixed bottom-0 pb-12">
                <div className="backdrop-blur-sm bg-neutral-200/70 border bottom-3 absolute left-1/2 overflow-hidden -translate-x-1/2 rounded-3xl w-64 flex justify-between items-center px-1 py-0.5">
                    <Link href="/" className="rounded-2xl bg-neutral-300/50 px-3 py-1.5 w-full inline-flex items-center justify-center">
                        <Home className="h-4 w-4" />
                    </Link>
                    <Drawer>
                        <DrawerTrigger className="rounded-2xl px-4 py-1.5 text-sm font-medium w-full inline-flex items-center justify-center opacity-90">
                            Projects
                        </DrawerTrigger>
                        <DrawerContent className="px-0">
                            <DrawerTitle className="px-4">Projects</DrawerTitle>
                            <DrawerDescription className="px-4">Find my best personal projects below. WIP</DrawerDescription>
                            <div className="mt-6 flex flex-col space-y-4 md:space-y-16 w-full">
                                <div className="grid grid-cols-4 md:grid-cols-1 gap-4 md:gap-x-0">
                                    <div className="md:py-4 relative overflow-hidden col-span-1 md:w-full md:row-span-full md:col-span-full flex flex-col">
                                        <div className="hidden md:block absolute inset-0 bg-neutral-200 object-cover"></div>
                                        <div className="ml-4 z-10 aspect-square w-auto h-full max-w-[80px] max-h-20 rounded-md bg-neutral-300" />
                                    </div>
                                    <div className="md:pl-4 pr-4 w-full col-span-3 flex flex-col space-y-0.5">
                                        <h3 className="text-foreground font-medium text-sm">Project</h3>
                                        <p className="text-muted-foreground text-xs">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo laborum veniam at nostrum quia
                                            tenetur magnam quasi vitae.
                                        </p>
                                        <div className="flex items-center space-x-4">
                                            <span className="text-xs text-muted-foreground truncate">Next.js • Prisma • AWS</span>
                                            <Link
                                                href="/"
                                                className="flex items-center justify-center text-xs text-muted-foreground underline-offset-2 active:underline md:hover:underline"
                                            >
                                                View live
                                                <ExternalLink className="h-3 w-3 ml-1" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 flex flex-col space-y-4 md:space-y-16 w-full">
                                <div className="grid grid-cols-4 md:grid-cols-1 gap-4 md:gap-x-0">
                                    <div className="md:py-4 relative overflow-hidden col-span-1 md:w-full md:row-span-full md:col-span-full flex flex-col">
                                        <div className="hidden md:block absolute inset-0 bg-neutral-200 object-cover"></div>
                                        <div className="ml-4 z-10 aspect-square w-auto h-full max-w-[80px] max-h-20 rounded-md bg-neutral-300" />
                                    </div>
                                    <div className="md:pl-4 pr-4 w-full col-span-3 flex flex-col space-y-0.5">
                                        <h3 className="text-foreground font-medium text-sm">Project</h3>
                                        <p className="text-muted-foreground text-xs">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo laborum veniam at nostrum quia
                                            tenetur magnam quasi vitae.
                                        </p>
                                        <div className="flex items-center space-x-4">
                                            <span className="text-xs text-muted-foreground truncate">Next.js • Prisma • AWS</span>
                                            <Link
                                                href="/"
                                                className="flex items-center justify-center text-xs text-muted-foreground underline-offset-2 active:underline md:hover:underline"
                                            >
                                                View live
                                                <ExternalLink className="h-3 w-3 ml-1" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 flex flex-col space-y-4 md:space-y-16 w-full">
                                <div className="grid grid-cols-4 md:grid-cols-1 gap-4 md:gap-x-0">
                                    <div className="md:py-4 relative overflow-hidden col-span-1 md:w-full md:row-span-full md:col-span-full flex flex-col">
                                        <div className="hidden md:block absolute inset-0 bg-neutral-200 object-cover"></div>
                                        <div className="ml-4 z-10 aspect-square w-auto h-full max-w-[80px] max-h-20 rounded-md bg-neutral-300" />
                                    </div>
                                    <div className="md:pl-4 pr-4 w-full col-span-3 flex flex-col space-y-0.5">
                                        <h3 className="text-foreground font-medium text-sm">Project</h3>
                                        <p className="text-muted-foreground text-xs">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo laborum veniam at nostrum quia
                                            tenetur magnam quasi vitae.
                                        </p>
                                        <div className="flex items-center space-x-4">
                                            <span className="text-xs text-muted-foreground truncate">Next.js • Prisma • AWS</span>
                                            <Link
                                                href="/"
                                                className="flex items-center justify-center text-xs text-muted-foreground underline-offset-2 active:underline md:hover:underline"
                                            >
                                                View live
                                                <ExternalLink className="h-3 w-3 ml-1" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 flex flex-col space-y-4 md:space-y-16 w-full">
                                <div className="grid grid-cols-4 md:grid-cols-1 gap-4 md:gap-x-0">
                                    <div className="md:py-4 relative overflow-hidden col-span-1 md:w-full md:row-span-full md:col-span-full flex flex-col">
                                        <div className="hidden md:block absolute inset-0 bg-neutral-200 object-cover"></div>
                                        <div className="ml-4 z-10 aspect-square w-auto h-full max-w-[80px] max-h-20 rounded-md bg-neutral-300" />
                                    </div>
                                    <div className="md:pl-4 pr-4 w-full col-span-3 flex flex-col space-y-0.5">
                                        <h3 className="text-foreground font-medium text-sm">Project</h3>
                                        <p className="text-muted-foreground text-xs">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo laborum veniam at nostrum quia
                                            tenetur magnam quasi vitae.
                                        </p>
                                        <div className="flex items-center space-x-4">
                                            <span className="text-xs text-muted-foreground truncate">Next.js • Prisma • AWS</span>
                                            <Link
                                                href="/"
                                                className="flex items-center justify-center text-xs text-muted-foreground underline-offset-2 active:underline md:hover:underline"
                                            >
                                                View live
                                                <ExternalLink className="h-3 w-3 ml-1" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </DrawerContent>
                    </Drawer>
                    <Drawer>
                        <DrawerTrigger className="rounded-2xl px-3 py-1.5 w-full inline-flex items-center justify-center opacity-90">
                            <MessageCircle className="h-4 w-4" />
                        </DrawerTrigger>
                        <DrawerContent>
                            <MessageInput />
                            <div className="pt-5 flex items-center justify-end space-x-4">
                                <Link
                                    href="https://twitter.com"
                                    className="inline-flex items-center text-muted-foreground text-xs"
                                    title="Twitter"
                                >
                                    <Twitter className="h-3 w-3 mr-1" />
                                    Twitter
                                    <ExternalLink className="h-3 w-3 ml-1" />
                                </Link>
                                <Link
                                    href="https://github.com/rortan134"
                                    className="inline-flex items-center text-muted-foreground text-xs"
                                    title="GitHub"
                                >
                                    <Github className="h-3 w-3 mr-1" />
                                    GitHub
                                    <ExternalLink className="h-3 w-3 ml-1" />
                                </Link>
                                <Link
                                    href="mailto:gsmt.dev@gmail.com"
                                    className="inline-flex items-center text-muted-foreground text-xs"
                                    title="Email"
                                >
                                    <Mail className="h-3 w-3 mr-1" />
                                    Email
                                    <ExternalLink className="h-3 w-3 ml-1" />
                                </Link>
                            </div>
                        </DrawerContent>
                    </Drawer>
                </div>
            </nav>
        </main>
    );
}
