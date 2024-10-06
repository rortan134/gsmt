"use client";

import { Clock } from "@components/clock";
import { dayjs } from "@lib/dayjs";
import { useLocale } from "next-intl";
import * as React from "react";

const gTimezone = "Europe/Madrid";

const Timezone = () => {
    dayjs.locale(useLocale());

    const [, forceRender] = React.useState(0);
    React.useEffect(() => {
        const intervalId = window.setInterval(
            () => React.startTransition(() => forceRender(prev => prev + 1)),
            5000,
        );
        return () => window.clearInterval(intervalId);
    }, []);

    return (
        <section className="container mt-20 grid w-full gap-6 md:grid-cols-2">
            <div className="flex w-full flex-col space-y-2">
                <h4 className="text-foreground text-sm">Your timezone</h4>
                <div className="flex items-center justify-between rounded-xl border p-3">
                    <div className="flex items-center space-x-3">
                        <Clock timezone={dayjs.tz.guess()} />
                        <div className="flex flex-col space-y-1">
                            <span className="font-medium text-muted-foreground text-xs">
                                {dayjs.tz.guess()}
                            </span>
                            <span className="text-muted-foreground/75 text-xs">
                                ({dayjs().format("z")})
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-0.5">
                        <span className="font-medium text-muted-foreground/90 text-xs">
                            {dayjs().format("h:mm A")}
                        </span>
                        <span className="text-muted-foreground/75 text-xs">
                            {dayjs().format("ddd, MMM DD, YYYY")}
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex w-full flex-col space-y-2">
                <h4 className="text-foreground text-sm">My timezone</h4>
                <div className="flex items-center justify-between rounded-xl border p-3">
                    <div className="flex items-center space-x-3">
                        <Clock timezone={gTimezone} />
                        <div className="flex flex-col space-y-1">
                            <span className="font-medium text-muted-foreground text-xs">
                                {gTimezone}
                            </span>
                            <span className="text-muted-foreground/75 text-xs">
                                ({dayjs().tz(gTimezone).format("z")})
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-0.5">
                        <span className="font-medium text-muted-foreground/90 text-xs">
                            {dayjs().tz(gTimezone).format("h:mm A")}
                        </span>
                        <span className="text-muted-foreground/75 text-xs">
                            {dayjs().tz(gTimezone).format("ddd, MMM DD, YYYY")}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { Timezone };
