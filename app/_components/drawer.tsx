"use client";

import { cn } from "@lib/cn";
import * as AccessibleIcon from "@radix-ui/react-accessible-icon";
import { X } from "lucide-react";
import * as React from "react";
import { Drawer as DrawerPrimitive } from "vaul";

const Drawer = DrawerPrimitive.Root;

const DrawerTrigger = DrawerPrimitive.Trigger;

const DrawerContent = ({
    className,
    children,
    ...props
}: React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>) => (
    <DrawerPrimitive.Portal>
        <DrawerPrimitive.Overlay className="fixed inset-0 bg-black/40" />
        <DrawerPrimitive.Content
            {...props}
            className={cn(
                "fixed inset-x-0 bottom-0 mt-20 rounded-t-lg bg-zinc-100 px-4 py-3",
                className,
            )}>
            <DrawerPrimitive.Handle className="rounded-full bg-neutral-300" />
            {children}
        </DrawerPrimitive.Content>
    </DrawerPrimitive.Portal>
);

const DrawerTitle = ({
    className,
    ...props
}: React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>) => (
    <div className="flex items-center justify-between">
        <DrawerPrimitive.Title {...props} className={cn("text-base font-medium", className)} />
        <DrawerPrimitive.Close
            title="Close"
            className="ml-auto flex size-6 items-center justify-center rounded-full bg-neutral-200 text-foreground">
            <AccessibleIcon.Root label="Close drawer">
                <X className="size-4" />
            </AccessibleIcon.Root>
        </DrawerPrimitive.Close>
    </div>
);

const DrawerDescription = ({
    className,
    ...props
}: React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>) => (
    <DrawerPrimitive.Description
        {...props}
        className={cn("mt-3 text-sm text-muted-foreground", className)}
    />
);

export { Drawer, DrawerContent, DrawerDescription, DrawerTitle, DrawerTrigger };
