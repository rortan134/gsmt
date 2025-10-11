"use client";

import { cn } from "@lib/cn";
import { X } from "lucide-react";
import type * as React from "react";
import { Drawer as DrawerPrimitive } from "vaul";

const Drawer = DrawerPrimitive.Root;

const DrawerTrigger = DrawerPrimitive.Trigger;

const DrawerContent = ({
    className,
    children,
    ...props
}: React.ComponentProps<typeof DrawerPrimitive.Content>) => (
    <DrawerPrimitive.Portal>
        <DrawerPrimitive.Overlay className="fixed inset-0 bg-black/40" />
        <DrawerPrimitive.Content
            {...props}
            className={cn(
                "fixed inset-x-0 bottom-0 mt-20 rounded-t-lg bg-zinc-100 px-4 py-3",
                className
            )}
        >
            <DrawerPrimitive.Handle className="rounded-full bg-neutral-300" />
            {children}
        </DrawerPrimitive.Content>
    </DrawerPrimitive.Portal>
);

const DrawerTitle = ({
    className,
    ...props
}: React.ComponentProps<typeof DrawerPrimitive.Title>) => (
    <div className="flex items-center justify-between">
        <DrawerPrimitive.Title
            {...props}
            className={cn("font-medium text-base", className)}
        />
        <DrawerPrimitive.Close
            className="ml-auto flex size-6 items-center justify-center rounded-full bg-neutral-200 text-foreground"
            title="Close drawer"
        >
            <X aria-hidden className="size-4" focusable="false" />
            <span className="sr-only">Close drawer</span>
        </DrawerPrimitive.Close>
    </div>
);

const DrawerDescription = ({
    className,
    ...props
}: React.ComponentProps<typeof DrawerPrimitive.Description>) => (
    <DrawerPrimitive.Description
        {...props}
        className={cn("mt-3 text-muted-foreground text-sm", className)}
    />
);

export { Drawer, DrawerContent, DrawerDescription, DrawerTitle, DrawerTrigger };
