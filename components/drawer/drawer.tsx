"use client";

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/tooltip";
import { cn } from "@/lib/cn";
import * as React from "react";
import { Drawer as DrawerPrimitive } from "vaul";

const Drawer = DrawerPrimitive.Root;

const DrawerPortal = DrawerPrimitive.Portal;

const DrawerOverlay = DrawerPrimitive.Overlay;

const DrawerClose = DrawerPrimitive.Close;

const DrawerTrigger = React.forwardRef<
    React.ElementRef<typeof DrawerPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Trigger> & { tooltipLabel: string }
>(({ tooltipLabel, ...props }, ref) => {
    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <DrawerPrimitive.Trigger {...props} ref={ref} />
            </TooltipTrigger>
            <TooltipContent>
                <span>{tooltipLabel}</span>
            </TooltipContent>
        </Tooltip>
    );
});
DrawerTrigger.displayName = "DrawerTrigger";

const DrawerContent = React.forwardRef<
    React.ElementRef<typeof DrawerPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>
>(({ className, children, ...props }, ref) => {
    return (
        <DrawerPrimitive.Portal>
            <DrawerPrimitive.Overlay className="fixed inset-0 bg-black/40" />
            <DrawerPrimitive.Content
                ref={ref}
                className={cn(
                    "fixed inset-x-0 bottom-0 mt-20 rounded-t-lg bg-zinc-100 p-4",
                    className
                )}
                {...props}>
                <span className="absolute left-1/2 top-2 h-1 w-12 -translate-x-1/2 rounded-2xl bg-neutral-300" />
                {children}
            </DrawerPrimitive.Content>
        </DrawerPrimitive.Portal>
    );
});
DrawerContent.displayName = "DrawerContent";

const DrawerTitle = React.forwardRef<
    React.ElementRef<typeof DrawerPrimitive.Title>,
    React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({ className, ...props }, ref) => {
    return (
        <DrawerPrimitive.Title
            ref={ref}
            className={cn("text-base font-medium", className)}
            {...props}
        />
    );
});
DrawerTitle.displayName = "DrawerTitle";

const DrawerDescription = React.forwardRef<
    React.ElementRef<typeof DrawerPrimitive.Description>,
    React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ className, ...props }, ref) => {
    return (
        <DrawerPrimitive.Description
            ref={ref}
            className={cn("mt-3 text-sm text-muted-foreground", className)}
            {...props}
        />
    );
});
DrawerDescription.displayName = "DrawerDescription";

export {
    Drawer,
    DrawerTrigger,
    DrawerContent,
    DrawerPortal,
    DrawerOverlay,
    DrawerClose,
    DrawerTitle,
    DrawerDescription,
};
