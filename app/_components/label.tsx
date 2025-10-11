import { cn } from "@lib/cn";
import type * as React from "react";

const Label = ({ className, ...props }: React.ComponentProps<"label">) => (
    // biome-ignore lint/a11y/noLabelWithoutControl: biome can't infer htmlFor prop correctly
    <label
        {...props}
        className={cn(
            "font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
            className
        )}
    />
);

export { Label };
