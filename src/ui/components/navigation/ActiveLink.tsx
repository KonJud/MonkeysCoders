"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useMemo } from "react"
import clsx from "clsx"


interface Props {
    href: string;
    children: React.ReactNode;
}


export const ActiveLink = ({ href, children }: Props) => {

    const pathname = usePathname()

    const isActive: boolean = useMemo(() => {
        return pathname === href;
    }, [pathname, href])

    return (
        <Link
            href={href}
            className={clsx(isActive && "text-primary-300 font-semibold")}
        >
            {children}
        </Link>
    )
}