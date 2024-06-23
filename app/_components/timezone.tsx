import { dayjs } from "@lib/dayjs";

const Timezone = () => (
    <section className="container mt-16 grid w-full gap-6 md:grid-cols-2">
        <div className="flex w-full flex-col space-y-2">
            <h4 className="text-sm text-foreground">Your timezone</h4>
            <div className="flex items-center justify-between rounded-xl border p-3">
                <div className="flex flex-col space-y-1">
                    <span className="text-xs font-medium text-muted-foreground">
                        {dayjs.tz.guess()}
                    </span>
                    <span className="text-xs text-muted-foreground/75">
                        (GMT {dayjs().tz(dayjs.tz.guess()).format("Z")})
                    </span>
                </div>
                <div className="flex flex-col space-y-0.5">
                    <span className="text-xs font-medium text-muted-foreground/90">
                        {dayjs().tz(dayjs.tz.guess()).format("h:mm A")}
                    </span>
                    <span className="text-xs text-muted-foreground/75">
                        {dayjs().tz(dayjs.tz.guess()).format("ddd, MMM DD, YYYY")}
                    </span>
                </div>
            </div>
        </div>
        <div className="flex w-full flex-col space-y-2">
            <h4 className="text-sm text-foreground">My timezone</h4>
            <div className="flex items-center justify-between rounded-xl border p-3">
                <div className="flex flex-col space-y-1">
                    <span className="text-xs font-medium text-muted-foreground">Europe/Madrid</span>
                    <span className="text-xs text-muted-foreground/75">
                        (GMT {dayjs().tz("Europe/Madrid").format("Z")})
                    </span>
                </div>
                <div className="flex flex-col space-y-0.5">
                    <span className="text-xs font-medium text-muted-foreground/90">
                        {dayjs().tz("Europe/Madrid").format("h:mm A")}
                    </span>
                    <span className="text-xs text-muted-foreground/75">
                        {dayjs().tz("Europe/Madrid").format("ddd, MMM DD, YYYY")}
                    </span>
                </div>
            </div>
        </div>
    </section>
);

export { Timezone };
