"use client";

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@components/form";
import { Textarea } from "@components/textarea";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerMessage } from "@lib/message";
// @ts-expect-error no type declaration
import { DeviceUUID } from "device-uuid";
import { AnimatePresence, motion } from "motion/react";
import * as React from "react";
import { useForm } from "react-hook-form";
import slugify from "slugify";
import { z } from "zod";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface MessageStoreProps {
    messages: string[];
    setMessages: (state: string[] | ((state: string[]) => string[])) => void;
}

const useMessageStore = create<MessageStoreProps>()(
    persist(
        (set) => ({
            messages: [],
            setMessages: (messages) =>
                messages instanceof Function
                    ? set((prevValues) => ({
                          messages: messages(prevValues.messages),
                      }))
                    : set({ messages }),
        }),
        { name: "gsmt-app-storage" }
    )
);

const formSchema = z.object({
    message: z
        .string()
        .min(2, {
            message: "Message must be at least 2 characters.",
        })
        .max(5000),
});

const MessageInput = () => {
    const { messages, setMessages } = useMessageStore();
    const [parentContainer] = useAutoAnimate();
    const [, startTransition] = React.useTransition();
    const [submitted, setSubmitted] = React.useState(false);
    const [showNote, setShowNote] = React.useState(false);
    const textAreaRef = React.useRef<HTMLTextAreaElement>(null);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: { message: "" },
    });

    React.useEffect(function focusInputOnMount() {
        window.setTimeout(() => {
            if (!textAreaRef.current) {
                return;
            }
            textAreaRef.current.focus();
        }, 400);
    }, []);

    function onSubmit(values: z.infer<typeof formSchema>) {
        form.clearErrors();
        form.reset();
        setMessages((prevMessages) => [...prevMessages, values.message]);

        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
        const id = new DeviceUUID().get() as string;
        startTransition(async () => {
            await registerMessage(id, values.message);
        });

        setSubmitted(true);

        window.setTimeout(() => {
            setSubmitted(false);
            setShowNote(true);
            window.setTimeout(() => setShowNote(false), 5000);
        }, 3000);
    }

    return (
        <div className="flex w-full flex-col">
            <div
                className="flex w-full flex-col items-end justify-end space-y-2"
                ref={parentContainer}
            >
                {messages.map((message) => (
                    <div
                        className="flex h-fit w-fit max-w-1/2 items-center justify-end rounded-3xl bg-blue-600 px-3 py-1"
                        key={slugify(message)}
                    >
                        <span className="text-right text-primary-foreground text-sm">
                            {message}
                        </span>
                    </div>
                ))}
            </div>
            <Form {...form}>
                <form
                    // eslint-disable-next-line @typescript-eslint/no-misused-promises
                    className="mt-3 inline-flex w-full justify-between space-x-4"
                    onSubmit={form.handleSubmit(onSubmit)}
                >
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem className="w-full flex-1">
                                <FormLabel>Send a message</FormLabel>
                                <FormControl>
                                    <Textarea
                                        className="h-[38px] min-h-fit w-full resize-none rounded-3xl bg-transparent"
                                        placeholder="Send message"
                                        required
                                        spellCheck
                                        {...field}
                                        ref={textAreaRef}
                                    />
                                </FormControl>
                                <div className="relative h-fit max-h-11 w-full overflow-hidden">
                                    <AnimatePresence>
                                        {submitted ? (
                                            <motion.span
                                                animate={{ opacity: 1 }}
                                                className="relative inline-block font-medium text-green-600 text-xs"
                                                exit={{ opacity: 0, top: -100 }}
                                                initial={{ opacity: 0 }}
                                                key="submitted"
                                            >
                                                Message sent
                                            </motion.span>
                                        ) : null}
                                        {showNote ? (
                                            <motion.span
                                                animate={{
                                                    opacity: 1,
                                                    top: "auto",
                                                }}
                                                className="relative inline-block text-xs"
                                                exit={{ opacity: 0, top: -100 }}
                                                initial={{
                                                    opacity: 0,
                                                    top: 100,
                                                }}
                                                key="note"
                                            >
                                                You will be contacted soon.
                                                Please make sure you have
                                                included your contact.
                                            </motion.span>
                                        ) : null}
                                        {submitted || showNote ? null : (
                                            <motion.div
                                                animate={{
                                                    opacity: 1,
                                                    top: "auto",
                                                }}
                                                className="relative w-full"
                                                exit={{ opacity: 0, top: -100 }}
                                                initial={{
                                                    opacity: 0,
                                                    top: 100,
                                                }}
                                            >
                                                <FormDescription className="text-xs">
                                                    Please provide a way to
                                                    contact you (Email,
                                                    LinkedIn, Twitter...)
                                                </FormDescription>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <button
                        className="relative top-[1.9rem] flex h-11 w-fit items-center justify-center px-2 font-medium text-foreground text-sm"
                        type="submit"
                    >
                        Send
                    </button>
                </form>
            </Form>
        </div>
    );
};

export { MessageInput };
