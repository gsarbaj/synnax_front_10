"use client"

import * as React from "react"
import {Moon, Sun} from 'lucide-react'
import {useTheme} from "next-themes"

interface ModeToggleProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
}

export function ModeToggle({className, ...props}: ModeToggleProps) {
    const {setTheme, theme} = useTheme()

    return (
        <button
            className={`ml-2 relative h-9 w-9 cursor-pointer ${className}`}
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            {...props}
        >
            <Sun
                className="absolute h-[1.2rem] w-[1.2rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"/>
            <Moon
                className="absolute h-[1.2rem] w-[1.2rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"/>
            <span className="sr-only">Toggle theme</span>
        </button>
    )
}