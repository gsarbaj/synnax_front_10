"use client"

import * as React from "react"
import {useTheme} from "next-themes"
import {cn} from "@/lib/utils";

interface ModeToggleProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
}

export function ModeToggle({className, ...props}: ModeToggleProps) {
    const {setTheme, theme} = useTheme()
    const [mounted, setMounted] = React.useState(false)

    // useEffect only runs on the client, so now we can safely show the UI
    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <button
                type="button"
                title="Toggle theme"
                data-slot="button"
                className={cn(
                    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 group/toggle extend-touch-target size-8",
                    className
                )}
                disabled
                {...props}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-4.5"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/>
                    <path d="M12 3l0 18"/>
                    <path d="M12 9l4.65 -4.65"/>
                    <path d="M12 14.3l7.37 -7.37"/>
                    <path d="M12 19.6l8.85 -8.85"/>
                </svg>
                <span className="sr-only">Toggle theme</span>
            </button>
        )
    }

    return (
        // <button
        //     className={`ml-2 relative h-9 w-9 cursor-pointer ${className}`}
        //     onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        //     {...props}
        // >
        //     <Sun
        //         className="absolute h-[1.2rem] w-[1.2rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"/>
        //     <Moon
        //         className="absolute h-[1.2rem] w-[1.2rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"/>
        //     <span className="sr-only">Toggle theme</span>
        // </button>

        <button
            type="button"
            title="Toggle theme"
            data-slot="button"
            className={cn(
                "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 group/toggle extend-touch-target size-8",
                className
            )}
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            {...props}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-4.5"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/>
                <path d="M12 3l0 18"/>
                <path d="M12 9l4.65 -4.65"/>
                <path d="M12 14.3l7.37 -7.37"/>
                <path d="M12 19.6l8.85 -8.85"/>
            </svg>
            <span className="sr-only">Toggle theme</span>
        </button>
    )
}