import type * as React from "react";

const PageShell = (props: React.ComponentPropsWithoutRef<"main">) => (
    <main
        id="main"
        {...props}
        tabIndex={-1}
        className="gutter-stable relative isolate z-0 h-fit w-full min-w-0 max-w-full py-6 outline-hidden"
    />
);

export { PageShell };
