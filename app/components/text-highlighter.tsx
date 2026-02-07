/** biome-ignore-all lint/style/noNestedTernary: <explanation> */
"use client";

import { cn } from "@/app/lib/cn";
import {
    motion,
    useInView,
    type Transition,
    type UseInViewOptions,
} from "motion/react";
import {
    useEffect,
    useImperativeHandle,
    useRef,
    useState,
    type ElementType,
} from "react";

type HighlightDirection = "ltr" | "rtl" | "ttb" | "btt";

interface TextHighlighterProps extends React.ComponentProps<"div"> {
    /**
     * HTML element to render as
     * @default "span"
     */
    as?: ElementType;

    /**
     * How to trigger the animation
     * @default "inView"
     */
    triggerType?: "hover" | "ref" | "inView" | "auto";

    /**
     * Animation transition configuration
     */
    transition?: Transition;

    /**
     * Options for useInView hook when triggerType is "inView"
     */
    useInViewOptions?: UseInViewOptions;

    /**
     * Highlight color (CSS color string). Also can be a function that returns a color string, eg:
     * @default 'hsl(60, 90%, 68%)' (yellow)
     */
    highlightColor?: string;

    /**
     * Direction of the highlight animation
     * @default "ltr" (left to right)
     */
    direction?: HighlightDirection;
}

const TextHighlighter = ({
    children,
    as = "span",
    triggerType = "inView",
    transition = { type: "spring", duration: 1, delay: 0, bounce: 0 },
    useInViewOptions = {
        once: true,
        initial: false,
        amount: 0.1,
    },
    className,
    highlightColor = "hsl(25, 90%, 80%)",
    direction = "ltr",
    ref,
    ...props
}: TextHighlighterProps) => {
    const componentRef = useRef<HTMLDivElement>(null);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [currentDirection, setCurrentDirection] =
        useState<HighlightDirection>(direction);

    // this allows us to change the direction whenever the direction prop changes
    useEffect(() => {
        setCurrentDirection(direction);
    }, [direction]);

    const isInView = useInView(componentRef, useInViewOptions);

    useImperativeHandle(ref, () => ({
        // @ts-expect-error - todo: fix type
        animate: (animationDirection?: HighlightDirection) => {
            if (animationDirection) {
                setCurrentDirection(animationDirection);
            }
            setIsAnimating(true);
        },
        reset: () => setIsAnimating(false),
    }));

    const shouldAnimate =
        triggerType === "hover"
            ? isHovered
            : triggerType === "inView"
              ? triggerType === "inView"
                  ? isInView
                  : false
              : triggerType === "ref"
                ? isAnimating
                : triggerType === "auto";

    const ElementTag = as || "span";

    // biome-ignore lint/complexity/noExcessiveCognitiveComplexity: <explanation>
    const getBackgroundSize = (animated: boolean) => {
        switch (currentDirection) {
            case "ltr":
                return animated ? "100% 100%" : "0% 100%";
            case "rtl":
                return animated ? "100% 100%" : "0% 100%";
            case "ttb":
                return animated ? "100% 100%" : "100% 0%";
            case "btt":
                return animated ? "100% 100%" : "100% 0%";
            default:
                return animated ? "100% 100%" : "0% 100%";
        }
    };

    const getBackgroundPosition = () => {
        switch (currentDirection) {
            case "ltr":
                return "0% 0%";
            case "rtl":
                return "100% 0%";
            case "ttb":
                return "0% 0%";
            case "btt":
                return "0% 100%";
            default:
                return "0% 0%";
        }
    };

    const animatedSize = getBackgroundSize(shouldAnimate);
    const initialSize = getBackgroundSize(false);
    const backgroundPosition = getBackgroundPosition();

    const highlightStyle = {
        backgroundImage: `linear-gradient(${highlightColor}, ${highlightColor})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition,
        backgroundSize: animatedSize,
        boxDecorationBreak: "clone",
        WebkitBoxDecorationBreak: "clone",
    } as React.CSSProperties;

    return (
        <ElementTag
            onMouseEnter={() => triggerType === "hover" && setIsHovered(true)}
            onMouseLeave={() => triggerType === "hover" && setIsHovered(false)}
            ref={componentRef}
            {...props}
        >
            <motion.span
                animate={{
                    backgroundSize: animatedSize,
                }}
                className={cn("inline", className)}
                initial={{
                    backgroundSize: initialSize,
                }}
                style={highlightStyle}
                transition={transition}
            >
                {children}
            </motion.span>
        </ElementTag>
    );
};

export { TextHighlighter };
