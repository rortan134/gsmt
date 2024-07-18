"use client";

import * as React from "react";
import CopyToClipboard from "react-copy-to-clipboard";

const Copy = (props: React.ComponentPropsWithoutRef<typeof CopyToClipboard>) => {
    const [copied, setCopied] = React.useState(false);

    const copyHandler = React.useCallback(() => {
        setCopied(true);
        window.setTimeout(() => setCopied(false), 2000);
    }, []);

    return <CopyToClipboard onCopy={copyHandler} data-copied={copied} {...props} />;
};

export { Copy };
