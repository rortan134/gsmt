"use client";

import { cn } from "@lib/cn";
import { useAutoResizeTextArea } from "@lib/use-textarea-autoresize";
import { useComposedRefs } from "motion/react";
import type * as React from "react";

const Textarea = ({
    className,
    placeholder = "",
    ref,
    ...props
}: React.ComponentProps<"textarea">) => {
    const autoSizeRef = useAutoResizeTextArea();
    const composedRefs = useComposedRefs(ref, autoSizeRef);

    return (
        <textarea
            {...props}
            autoCapitalize="off"
            autoComplete="off"
            autoCorrect="off"
            className={cn(
                "flex max-h-[50vh] min-h-[80px] w-full resize-none appearance-none rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background [field-sizing:content]! [scroll-padding-block:6px] placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                className
            )}
            data-gramm="false"
            placeholder={placeholder}
            ref={composedRefs}
            spellCheck="false"
            tabIndex={0}
            wt-ignore-input="true"
        />
    );
};

export { Textarea };
