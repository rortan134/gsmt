"use client";

import { cn } from "@lib/cn";
import { motion } from "framer-motion";
import * as React from "react";

function random(min: number, max: number) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

export const Line = ({
    variant = "horizontal",
    className,
    ...props
}: React.ComponentPropsWithoutRef<typeof motion.div> & { variant?: "vertical" | "horizontal" }) => (
    <motion.div
        {...props}
        aria-hidden
        className={cn(
            "pointer-events-none absolute origin-center select-none bg-muted-foreground opacity-40 mix-blend-soft-light",
            {
                "overflow-fade-x -inset-x-11 h-px": variant === "horizontal",
                "overflow-fade-y -bottom-8 -top-6 w-px": variant === "vertical",
            },
            className,
        )}
        initial={{ opacity: 0.4 }}
        animate={{ opacity: 0, ...(variant === "vertical" ? { height: 0 } : { width: 0 }) }}
        transition={{ delay: 0.6, duration: 1.2 * random(0.9, 1.2), ease: "easeInOut" }}
    />
);
