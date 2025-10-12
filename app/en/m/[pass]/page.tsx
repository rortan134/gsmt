import { dayjs } from "@lib/dayjs";
import { redirect } from "next/navigation";
import { prisma } from "@/prisma";

export default async function MessagesPage({
    searchParams,
}: {
    searchParams: Promise<{ pass: string }>;
}) {
    const params = await searchParams;
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
            {userMessages.map((userMessage) => (
                <div className="flex flex-col space-y-0.5" key={userMessage.id}>
                    <span className="font-medium text-sm">
                        {userMessage.id}
                    </span>
                    <div className="flex flex-col pl-6">
                        {userMessage.messages.map((message) => (
                            <div className="flex flex-col" key={message.id}>
                                <span className="text-xs">
                                    {dayjs(message.createdAt).fromNow()}
                                </span>
                                <span className="text-sm">
                                    {message.content}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
