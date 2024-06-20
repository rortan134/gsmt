"use client";

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/form";
import { Textarea } from "@/components/textarea";
import { registerMessage } from "@/lib/message";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { zodResolver } from "@hookform/resolvers/zod";
// @ts-expect-error no type declaration
import { DeviceUUID } from "device-uuid";
import { AnimatePresence, motion } from "framer-motion";
import * as React from "react";
import { useForm } from "react-hook-form";
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
        {
            name: "gsmt-app-storage",
            version: 0, // update on breaking changes (e.g. renaming a value)
        },
    ),
);

const formSchema = z.object({
    message: z
        .string()
        .min(2, {
            message: "Message must be at least 2 characters.",
        })
        .max(5000),
});

function MessageInput () {
    const { messages, setMessages } = useMessageStore();
    const [parent] = useAutoAnimate();
    const [submitted, setSubmitted] = React.useState(false);
    const [showNote, setShowNote] = React.useState(false);

    const textAreaRef = React.useRef<HTMLTextAreaElement>(null);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: { message: "" },
    });

    React.useEffect(function focusInputOnMount() {
        window.setTimeout(() => {
            if (!textAreaRef.current) return;
            textAreaRef.current.focus();
        }, 400);
    }, []);

    function onSubmit(values: z.infer<typeof formSchema>) {
        form.clearErrors();
        form.reset();

        const id = new DeviceUUID().get() as string;
        React.startTransition(async () => await registerMessage(id, values.message));

        setMessages((prevMessages) => [...prevMessages, values.message]);
        setSubmitted(true);

        window.setTimeout(() => {
            setSubmitted(false);
            setShowNote(true);
            window.setTimeout(() => setShowNote(false), 5000);
        }, 3000);
    }

    return (
        <div className="flex w-full flex-col">
            <div ref={parent} className="flex w-full flex-col items-end justify-end space-y-2">
                {messages.map((message, i) => (
                    <div
                        key={i}
                        className="max-w-1/2 flex h-fit w-fit items-center justify-end rounded-3xl bg-blue-600 px-3 py-1">
                        <span className="text-right text-sm text-primary-foreground">
                            {message}
                        </span>
                    </div>
                ))}
            </div>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="mt-3 inline-flex w-full justify-between space-x-4">
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem className="w-full flex-1">
                                <FormLabel>Send a message</FormLabel>
                                <FormControl>
                                    <Textarea
                                        required
                                        spellCheck
                                        className="h-[38px] min-h-fit w-full resize-none rounded-3xl bg-transparent"
                                        placeholder="Send message"
                                        {...field}
                                        ref={textAreaRef}
                                    />
                                </FormControl>
                                <div className="relative h-fit max-h-11 w-full overflow-hidden">
                                    <AnimatePresence>
                                        {submitted ? (
                                            <motion.span
                                                key="submitted"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0, top: -100 }}
                                                className="relative inline-block text-xs font-medium text-green-600">
                                                Message sent
                                            </motion.span>
                                        ) : null}
                                        {showNote ? (
                                            <motion.span
                                                key="note"
                                                initial={{ opacity: 0, top: 100 }}
                                                animate={{ opacity: 1, top: "auto" }}
                                                exit={{ opacity: 0, top: -100 }}
                                                className="relative inline-block text-xs">
                                                You will be contacted soon. Please make sure you
                                                have included your contact.
                                            </motion.span>
                                        ) : null}
                                        {!submitted && !showNote ? (
                                            <motion.div
                                                initial={{ opacity: 0, top: 100 }}
                                                animate={{ opacity: 1, top: "auto" }}
                                                exit={{ opacity: 0, top: -100 }}
                                                className="relative w-full">
                                                <FormDescription className="text-xs">
                                                    Please provide a way to contact you (e.g. Email,
                                                    LinkedIn, Twitter...).
                                                </FormDescription>
                                            </motion.div>
                                        ) : null}
                                    </AnimatePresence>
                                </div>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <button
                        type="submit"
                        className="relative top-[1.9rem] flex h-11 w-fit items-center justify-center px-2 text-sm font-medium text-foreground">
                        Send
                    </button>
                </form>
            </Form>
        </div>
    );
};

export { MessageInput };