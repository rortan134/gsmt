"use client";

import { dayjs } from "@lib/dayjs";
import * as React from "react";

export const Clock = ({ timezone }: { timezone: string }) => {
    const [time, setTime] = React.useState(dayjs().tz(timezone));

    React.useEffect(() => {
        const timer = window.setInterval(() => {
            setTime(dayjs().tz(timezone));
        }, 1000);
        return () => window.clearInterval(timer);
    }, [timezone]);

    const hourDegrees = time.hour() * 30 + time.minute() * 0.5;
    const minuteDegrees = time.minute() * 6 + time.second() * 0.1;
    const secondDegrees = time.second() * 6;

    return (
        <div className="relative m-1 size-6 rounded-full border-2 border-dotted border-gray-700 bg-gray-100 opacity-75">
            <div
                className="absolute bottom-1/2 left-1/2 z-30 h-1.5 w-px origin-bottom bg-gray-800"
                style={{ transform: `translateX(-50%) rotate(${hourDegrees}deg)` }}></div>
            <div
                className="absolute bottom-1/2 left-1/2 z-20 h-2.5 w-px origin-bottom bg-gray-800"
                style={{ transform: `translateX(-50%) rotate(${minuteDegrees}deg)` }}></div>
            <div
                className="absolute bottom-1/2 left-1/2 z-10 h-2.5 w-px origin-bottom bg-red-500"
                style={{ transform: `translateX(-50%) rotate(${secondDegrees}deg)` }}></div>
        </div>
    );
};
