"use client";

import { Menu } from "@base-ui-components/react/menu";
import { cn } from "@lib/cn";
import * as React from "react";

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

interface DropdownMenuItemProps extends React.ComponentProps<typeof Menu.Item> {
    asChild?: boolean;
}

const DropdownMenuItem = ({
    asChild,
    className,
    children,
    ...itemProps
}: DropdownMenuItemProps) => (
    <Menu.Item
        {...itemProps}
        className={cn(
            "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-hidden transition-colors data-[disabled]:pointer-events-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:opacity-50",
            className
        )}
        render={
            asChild && React.isValidElement(children)
                ? (props) => React.cloneElement(children, props)
                : undefined
        }
    >
        {asChild ? null : children}
    </Menu.Item>
);

export {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
};
