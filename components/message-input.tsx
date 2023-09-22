"use client";

import { Textarea } from "@/components/ui/textarea";
import * as React from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/form/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";

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
        }
    )
);

const formSchema = z.object({
    message: z
        .string()
        .min(2, {
            message: "Message must be at least 2 characters.",
        })
        .max(1000),
});

export const MessageInput = React.memo(function MessageInput() {
    const { messages, setMessages } = useMessageStore();
    const [parent] = useAutoAnimate();

    const textAreaRef = React.useRef<HTMLTextAreaElement>(null);

    React.useEffect(() => {
        setTimeout(() => {
            if (!textAreaRef.current) return;
            // Manually focusing because `autoFocus` glitches the drawer
            // https://github.com/emilkowalski/vaul/issues/52
            textAreaRef.current.focus();
        }, 400);
    }, []);

    React.useEffect(() => {}, []);

    const form = useForm<z.infer<typeof formSchema>>({
        // @ts-expect-error TODO: fix readonly type
        resolver: zodResolver(formSchema),
        defaultValues: {
            message: "",
        },
    });

    const [submitted, setSubmitted] = React.useState(false);
    const [showNote, setShowNote] = React.useState(false);

    function onSubmit(values: z.infer<typeof formSchema>) {
        form.clearErrors();
        form.reset();

        setMessages((prevMessages) => [...prevMessages, values.message]);
        setSubmitted(true);

        setTimeout(() => {
            setSubmitted(false);
            setShowNote(true);

            setTimeout(() => {
                setShowNote(false);
            }, 5000);
        }, 3000);
    }

    return (
        <div className="w-full flex flex-col">
            <div ref={parent} className="w-full flex flex-col space-y-2 justify-end items-end">
                {messages.map((message, i) => (
                    <div key={i} className="max-w-1/2 rounded-3xl py-1 px-3 w-fit h-fit flex items-center justify-end bg-blue-600">
                        <span className="text-sm text-primary-foreground text-right">{message}</span>
                    </div>
                ))}
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="inline-flex w-full justify-between mt-3 space-x-4">
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem className="w-full flex-1">
                                <FormLabel>Message Gilbert</FormLabel>
                                <FormControl>
                                    <Textarea
                                        required
                                        spellCheck
                                        className="w-full min-h-fit h-[38px] rounded-3xl resize-none bg-transparent"
                                        placeholder="Send message"
                                        {...field}
                                        ref={textAreaRef}
                                    />
                                </FormControl>
                                <div className="max-h-11 overflow-hidden relative h-fit w-full">
                                    <AnimatePresence>
                                        {submitted ? (
                                            <motion.span
                                                key="submitted"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0, top: -100 }}
                                                className="relative text-xs text-green-600 font-medium inline-block"
                                            >
                                                Message sent
                                            </motion.span>
                                        ) : null}
                                        {showNote ? (
                                            <motion.span
                                                key="note"
                                                initial={{ opacity: 0, top: 100 }}
                                                animate={{ opacity: 1, top: "auto" }}
                                                exit={{ opacity: 0, top: -100 }}
                                                className="relative text-xs inline-block"
                                            >
                                                You will be contacted soon. Please make sure you have included your contact.
                                            </motion.span>
                                        ) : null}
                                        {!submitted && !showNote ? (
                                            <motion.div
                                                initial={{ opacity: 0, top: 100 }}
                                                animate={{ opacity: 1, top: "auto" }}
                                                exit={{ opacity: 0, top: -100 }}
                                                className="w-full relative"
                                            >
                                                <FormDescription className="text-xs">
                                                    Please provide a way to contact you (e.g. Email, LinkedIn, Twitter...).
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
                        className="relative top-[1.9rem] text-sm text-foreground w-fit h-11 flex items-center justify-center px-2 font-medium"
                    >
                        Send
                    </button>
                </form>
            </Form>
        </div>
    );
});
