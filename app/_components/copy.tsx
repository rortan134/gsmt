"use client";

import { Check } from "lucide-react";
import * as React from "react";
import CopyToClipboard from "react-copy-to-clipboard";

const Copy = ({ children, ...props }: React.ComponentPropsWithoutRef<typeof CopyToClipboard>) => {
    const [copied, setCopied] = React.useState(false);

    const copyHandler = React.useCallback(() => {
        setCopied(true);
        window.setTimeout(() => setCopied(false), 2000);
    }, []);

    return (
        <CopyToClipboard onCopy={copyHandler} {...props}>
            {copied ? <Check className="h-4 w-4" /> : children}
        </CopyToClipboard>
    );
};

export { Copy };
