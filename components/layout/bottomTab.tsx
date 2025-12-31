"use client";

import { Home, ShoppingBag, Store, User } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

// Mock auth hook - thay bằng hook thật của bạn
const useAuth = () => {
    return {
        user: { role: "seller" } // Change to "BUYER" to test
    };
};

function TabItem({ href, label, icon: Icon, isActive }: {
    href: string;
    label: string;
    icon: any;
    isActive: boolean;
}) {
    return (
        <Link
            href={href}
            className="flex-1 flex flex-col items-center justify-center gap-1 relative group"
        >
            {/* Active indicator */}
            {isActive && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-orange-500 rounded-full" />
            )}

            <Icon
                className={`w-6 h-6 mt-2 transition-colors ${isActive ? 'text-orange-500' : 'text-gray-400'
                    }`}
                strokeWidth={isActive ? 2.5 : 2}
            />
            <span
                className={`text-xs font-medium transition-colors ${isActive ? 'text-orange-500' : 'text-gray-500'
                    }`}
            >
                {label}
            </span>
        </Link>
    );
}

export default function BottomTab() {
    const pathname = usePathname();
    const { user } = useAuth();
    const isSeller = user?.role === "seller";

    const tabs = [
        { href: "/", label: "Trang chủ", icon: Home },
        { href: "/orders", label: "Đơn hàng", icon: ShoppingBag },
        ...(isSeller ? [{ href: "/sellers", label: "Bán hàng", icon: Store }] : []),
        { href: "/profile", label: "Cá nhân", icon: User },
    ];

    return (
        <nav className="w-full h-16 border-t border-gray-200 fixed bottom-0 bg-white flex items-center shadow-lg z-50">
            {tabs.map((tab) => (
                <TabItem
                    key={tab.href}
                    href={tab.href}
                    label={tab.label}
                    icon={tab.icon}
                    isActive={pathname === tab.href}
                />
            ))}
        </nav>
    );
}