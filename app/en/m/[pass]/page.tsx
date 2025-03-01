import prisma from "@/prisma";
import { dayjs } from "@lib/dayjs";
import { redirect } from "next/navigation";

export default async function MessagesPage({
    params,
}: { params: { pass: string } }) {
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
                <div key={userMessage.id} className="flex flex-col space-y-0.5">
                    <span className="font-medium text-sm">
                        {userMessage.id}
                    </span>
                    <div className="flex flex-col pl-6">
                        {userMessage.messages.map((message) => (
                            <div key={message.id} className="flex flex-col">
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
