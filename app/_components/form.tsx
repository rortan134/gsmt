import { Label } from "@components/label";
import { cn } from "@lib/cn";
import type * as LabelPrimitive from "@radix-ui/react-label";
import { Slot } from "@radix-ui/react-slot";
import * as React from "react";
import {
    Controller,
    type ControllerProps,
    type FieldPath,
    type FieldValues,
    FormProvider,
    useFormContext,
} from "react-hook-form";

const Form = FormProvider;

interface FormFieldContextValue<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> {
    name: TName;
}

const FormFieldContext = React.createContext<FormFieldContextValue>(
    {} as FormFieldContextValue
);

const FormField = <
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
    ...props
}: ControllerProps<TFieldValues, TName>) => (
    <FormFieldContext.Provider value={{ name: props.name }}>
        <Controller {...props} />
    </FormFieldContext.Provider>
);

const useFormField = () => {
    const fieldContext = React.useContext(FormFieldContext);
    const itemContext = React.useContext(FormItemContext);
    const { getFieldState, formState } = useFormContext();

    if (!fieldContext) {
        throw new Error("useFormField should be used within <FormField>");
    }

    const fieldState = getFieldState(fieldContext.name, formState);
    const { id } = itemContext;

    return {
        id,
        name: fieldContext.name,
        formItemId: `${id}-form-item`,
        formDescriptionId: `${id}-form-item-description`,
        formMessageId: `${id}-form-item-message`,
        ...fieldState,
    };
};

interface FormItemContextValue {
    id: string;
}

const FormItemContext = React.createContext<FormItemContextValue>(
    {} as FormItemContextValue
);

const FormItem = ({
    className,
    ...props
}: React.ComponentPropsWithoutRef<"div">) => {
    const id = React.useId();
    return (
        <FormItemContext.Provider value={{ id }}>
            <div className={cn("space-y-2", className)} {...props} />
        </FormItemContext.Provider>
    );
};

const FormLabel = ({
    className,
    ...props
}: React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>) => {
    const { error, formItemId } = useFormField();
    return (
        <Label
            className={cn(error && "text-destructive", className)}
            htmlFor={formItemId}
            {...props}
        />
    );
};

const FormControl = (props: React.ComponentPropsWithoutRef<typeof Slot>) => {
    const { error, formItemId, formDescriptionId, formMessageId } =
        useFormField();
    return (
        <Slot
            id={formItemId}
            aria-describedby={
                error
                    ? `${formDescriptionId} ${formMessageId}`
                    : `${formDescriptionId}`
            }
            aria-invalid={!!error}
            {...props}
        />
    );
};

const FormDescription = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => {
    const { formDescriptionId } = useFormField();
    return (
        <p
            id={formDescriptionId}
            className={cn("text-muted-foreground text-sm", className)}
            {...props}
        />
    );
};

const FormMessage = ({
    className,
    children,
    ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => {
    const { error, formMessageId } = useFormField();
    const body = error ? String(error?.message) : children;
    if (!body) {
        return null;
    }
    return (
        <p
            id={formMessageId}
            className={cn("font-medium text-destructive text-sm", className)}
            {...props}
        >
            {body}
        </p>
    );
};

export {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    useFormField,
};
