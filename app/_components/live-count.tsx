"use client";

import { dayjs } from "@lib/dayjs";
import { useLocale } from "next-intl";
import * as React from "react";

export const LiveCount = () => {
    dayjs.locale(useLocale());

    const [time, setTime] = React.useState(() => dayjs().format("HH:mm:ss"));
    React.useEffect(() => {
        const intervalId = window.setInterval(() => {
            setTime(dayjs().format("HH:mm:ss"));
        }, 1000);
        return () => window.clearInterval(intervalId);
    }, []);

    return (
        <span
            aria-hidden
            className="select-all font-light font-mono text-muted-foreground text-xs tracking-wide opacity-40 mix-blend-soft-light [text-orientation:mixed] [writing-mode:vertical-rl]">
            {time}
        </span>
    );
};
