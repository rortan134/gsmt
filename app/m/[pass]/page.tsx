import prisma from "@/prisma";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import relativeTime from "dayjs/plugin/relativeTime";
import timeZone from "dayjs/plugin/timezone";
import { redirect } from "next/navigation";

dayjs.extend(localizedFormat);
dayjs.extend(relativeTime);
dayjs.extend(timeZone);

export default async function MessagesPage({ params }: { params: { pass: string } }) {
    if (params.pass !== process.env.ACCESS_PASS) {
        redirect("/");
    }

    const userMessages = await prisma.userMessage.findMany({
        select: {
            id: true,
            messages: true,
        },
    });

    return (
        <div className="container flex flex-col space-y-12 py-6">
            {userMessages.map((userMessage, i) => (
                <div key={i} className="flex flex-col space-y-0.5">
                    <span className="text-sm font-medium">{userMessage.id}</span>
                    <div className="flex flex-col pl-6">
                        {userMessage.messages.map((message, j) => (
                            <div key={j} className="flex flex-col">
                                <span className="text-xs">
                                    {dayjs(message.createdAt).fromNow()}
                                </span>
                                <span className="text-sm">{message.content}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
