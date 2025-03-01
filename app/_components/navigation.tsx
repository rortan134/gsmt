import { Link } from "@/navigation";
import { Drawer, DrawerContent, DrawerTrigger } from "@components/drawer";
import { MessageInput } from "@components/message-input";
import * as AccessibleIcon from "@radix-ui/react-accessible-icon";
import { Home, MessageCircle } from "lucide-react";

export const Navigation = () => (
    <nav className="fixed inset-x-0 bottom-0 z-20 pb-12">
        <div className="-translate-x-1/2 absolute bottom-3 left-1/2 flex w-fit items-center justify-between overflow-hidden rounded-3xl border bg-neutral-200/80 px-1 py-0.5 shadow-sm backdrop-blur-xl">
            <Link
                href="/"
                className="inline-flex w-full items-center justify-center rounded-2xl bg-neutral-300/80 px-4 py-1.5">
                <AccessibleIcon.Root label="Go to home page">
                    <Home className="size-4" />
                </AccessibleIcon.Root>
            </Link>
            <Drawer>
                <DrawerTrigger
                    title="Send a Message"
                    className="inline-flex w-full items-center justify-center rounded-2xl px-4 py-1.5">
                    <AccessibleIcon.Root label="Send a Message">
                        <MessageCircle className="size-4" />
                    </AccessibleIcon.Root>
                    <span className="absolute top-1.5 right-3.5 size-2 rounded-full bg-green-500" />
                </DrawerTrigger>
                <DrawerContent>
                    <MessageInput />
                </DrawerContent>
            </Drawer>
        </div>
    </nav>
);
