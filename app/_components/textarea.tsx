import { cn } from "@lib/cn";
import type * as React from "react";
import TextareaAutosize from "react-textarea-autosize";

const Textarea = ({
    className,
    placeholder = "",
    ...props
}: React.ComponentPropsWithRef<typeof TextareaAutosize>) => (
    <TextareaAutosize
        {...props}
        className={cn(
            "flex max-h-[50vh] min-h-[80px] w-full resize-none appearance-none rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background [scroll-padding-block:6px] placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className,
        )}
        tabIndex={0}
        placeholder={placeholder}
        autoCapitalize="off"
        autoComplete="off"
        autoCorrect="off"
        spellCheck="false"
        data-gramm="false"
        wt-ignore-input="true"
    />
);

export { Textarea };
