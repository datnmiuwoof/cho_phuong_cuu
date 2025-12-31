"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TabItem({
    href,
    label,
}: {
    href: string;
    label: string;
}) {
    const pathname = usePathname();
    const active = pathname === href;

    return (
        <Link
            href={href}
            className={`flex-1 flex items-center justify-center text-sm ${active ? "text-orange-500 font-semibold" : "text-gray-400"
                }`}
        >
            {label}
        </Link>
    );
}
