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
            () => React.startTransition(() => forceRender((prev) => prev + 1)),
            5000,
        );
        return () => window.clearInterval(intervalId);
    }, [forceRender]);

    return (
        <section className="container mt-20 grid w-full gap-6 md:grid-cols-2">
            <div className="flex w-full flex-col space-y-2">
                <h4 className="text-sm text-foreground">Your timezone</h4>
                <div className="flex items-center justify-between rounded-xl border p-3">
                    <div className="flex flex-col space-y-1">
                        <Clock timezone={dayjs.tz.guess()} />
                        <span className="text-xs font-medium text-muted-foreground">
                            {dayjs.tz.guess()}
                        </span>
                        <span className="text-xs text-muted-foreground/75">
                            (GMT {dayjs().format("Z")})
                        </span>
                    </div>
                    <div className="flex flex-col space-y-0.5">
                        <span className="text-xs font-medium text-muted-foreground/90">
                            {dayjs().format("h:mm A")}
                        </span>
                        <span className="text-xs text-muted-foreground/75">
                            {dayjs().format("ddd, MMM DD, YYYY")}
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex w-full flex-col space-y-2">
                <h4 className="text-sm text-foreground">My timezone</h4>
                <div className="flex items-center justify-between rounded-xl border p-3">
                    <div className="flex items-center space-x-1">
                        <Clock timezone={gTimezone} />
                        <div className="flex flex-col space-y-1">
                            <span className="text-xs font-medium text-muted-foreground">
                                {gTimezone}
                            </span>
                            <span className="text-xs text-muted-foreground/75">
                                (GMT {dayjs().tz(gTimezone).format("Z")})
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-0.5">
                        <span className="text-xs font-medium text-muted-foreground/90">
                            {dayjs().tz(gTimezone).format("h:mm A")}
                        </span>
                        <span className="text-xs text-muted-foreground/75">
                            {dayjs().tz(gTimezone).format("ddd, MMM DD, YYYY")}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { Timezone };
