"use client";

import { cn } from "@/lib/cn";
import * as LabelPrimitive from "@radix-ui/react-label";
import * as React from "react";

const Label = ({
    className,
    ...props
}: React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>) => (
    <LabelPrimitive.Root
        {...props}
        className={cn(
            "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
            className,
        )}
    />
);

export { Label };
