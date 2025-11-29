"use client";

import { cn } from "@/app/lib/cn";
import { Menu } from "@base-ui-components/react/menu";
import type * as React from "react";

const DropdownMenu = Menu.Root;

const DropdownMenuTrigger = Menu.Trigger;

const DropdownMenuGroup = Menu.Group;

interface DropdownMenuContentProps
    extends React.ComponentProps<typeof Menu.Popup> {
    sideOffset?: number;
}

const DropdownMenuContent = ({
    className,
    sideOffset = 4,
    children,
    ...popupProps
}: DropdownMenuContentProps) => (
    <Menu.Portal>
        <Menu.Positioner sideOffset={sideOffset}>
            <Menu.Popup
                {...popupProps}
                className={cn(
                    "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
                    className
                )}
            >
                {children}
            </Menu.Popup>
        </Menu.Positioner>
    </Menu.Portal>
);

const DropdownMenuItem = ({
    className,
    children,
    ...props
}: React.ComponentProps<typeof Menu.Item>) => (
    <Menu.Item
        {...props}
        className={cn(
            "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-hidden transition-colors data-[disabled]:pointer-events-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:opacity-50",
            className
        )}
    />
);

export {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
};
