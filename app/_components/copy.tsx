"use client";

import { Slot } from "@radix-ui/react-slot";
import copy from "copy-to-clipboard";
import * as React from "react";

const Copy = ({
    text,
    ...props
}: React.ComponentProps<typeof Slot> & { text: string }) => {
    const [copied, setCopied] = React.useState(false);

    const copyHandler = React.useCallback(() => {
        copy(text);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 2000);
    }, [text]);

    return <Slot data-copied={copied} onClick={copyHandler} {...props} />;
};

export { Copy };
