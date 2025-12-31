"use client";

import React, { useState } from 'react';
import {
    Store,
    ShoppingBag,
    DollarSign,
    TrendingUp,
    Clock,
    Package,
    Settings,
    BarChart3,
    Star,
    Eye,
    EyeOff,
    UtensilsCrossed
} from 'lucide-react';

export default function SellerDashboard() {
    const [shopOpen, setShopOpen] = useState(true);

    // Mock data
    const stats = {
        todayRevenue: 1250000,
        todayOrders: 15,
        pendingOrders: 3,
        totalProducts: 24,
        rating: 4.8,
        totalReviews: 156,
    };

    const recentOrders = [
        { id: '#1234', customer: 'Nguyễn Văn A', total: 85000, status: 'pending', time: '2 phút trước' },
        { id: '#1233', customer: 'Trần Thị B', total: 120000, status: 'preparing', time: '15 phút trước' },
        { id: '#1232', customer: 'Lê Văn C', total: 65000, status: 'delivering', time: '25 phút trước' },
    ];

    const getStatusBadge = (status: string) => {
        const styles = {
            pending: 'bg-orange-100 text-orange-700',
            preparing: 'bg-blue-100 text-blue-700',
            delivering: 'bg-purple-100 text-purple-700',
        };
        const labels = {
            pending: 'Chờ xác nhận',
            preparing: 'Đang làm',
            delivering: 'Đang giao',
        };
        return { style: styles[status as keyof typeof styles], label: labels[status as keyof typeof labels] };
    };

    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            {/* Header */}
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 pt-12 pb-6 px-5">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h1 className="text-3xl font-bold text-white">Quản lý bán hàng</h1>
                        <p className="text-orange-100 text-sm mt-1">🏪 Cơm Tấm Chị Hoa</p>
                    </div>
                    <button className="p-2 bg-white/20 rounded-lg">
                        <Settings className="w-6 h-6 text-white" />
                    </button>
                </div>

                {/* Shop Status Toggle */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className={`w-3 h-3 rounded-full ${shopOpen ? 'bg-green-400' : 'bg-red-400'} animate-pulse`} />
                            <div>
                                <p className="text-white font-bold text-base">
                                    {shopOpen ? 'Đang mở cửa' : 'Đã đóng cửa'}
                                </p>
                                <p className="text-orange-100 text-xs mt-0.5">
                                    {shopOpen ? 'Sẵn sàng nhận đơn' : 'Tạm ngưng nhận đơn'}
                                </p>
                            </div>
                        </div>
                        <button
                            onClick={() => setShopOpen(!shopOpen)}
                            className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${shopOpen
                                    ? 'bg-white/90 text-orange-600'
                                    : 'bg-green-500 text-white'
                                }`}
                        >
                            {shopOpen ? (
                                <span className="flex items-center gap-1.5">
                                    <EyeOff className="w-4 h-4" />
                                    Đóng cửa
                                </span>
                            ) : (
                                <span className="flex items-center gap-1.5">
                                    <Eye className="w-4 h-4" />
                                    Mở cửa
                                </span>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="px-5 -mt-4">
                <div className="grid grid-cols-2 gap-3">
                    {/* Today Revenue */}
                    <div className="bg-white rounded-2xl p-4 shadow-sm">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="p-2 bg-green-100 rounded-lg">
                                <DollarSign className="w-5 h-5 text-green-600" />
                            </div>
                            <span className="text-xs text-gray-500 font-medium">Doanh thu hôm nay</span>
                        </div>
                        <p className="text-2xl font-bold text-gray-800">
                            {stats.todayRevenue.toLocaleString('vi-VN')}đ
                        </p>
                        <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
                            <TrendingUp className="w-3 h-3" />
                            +12% so với hôm qua
                        </p>
                    </div>

                    {/* Today Orders */}
                    <div className="bg-white rounded-2xl p-4 shadow-sm">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="p-2 bg-blue-100 rounded-lg">
                                <ShoppingBag className="w-5 h-5 text-blue-600" />
                            </div>
                            <span className="text-xs text-gray-500 font-medium">Đơn hôm nay</span>
                        </div>
                        <p className="text-2xl font-bold text-gray-800">{stats.todayOrders}</p>
                        <p className="text-xs text-orange-600 mt-1 font-semibold">
                            {stats.pendingOrders} đơn chờ xử lý
                        </p>
                    </div>

                    {/* Rating */}
                    <div className="bg-white rounded-2xl p-4 shadow-sm">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="p-2 bg-yellow-100 rounded-lg">
                                <Star className="w-5 h-5 text-yellow-600" />
                            </div>
                            <span className="text-xs text-gray-500 font-medium">Đánh giá</span>
                        </div>
                        <p className="text-2xl font-bold text-gray-800">{stats.rating} ⭐</p>
                        <p className="text-xs text-gray-500 mt-1">
                            {stats.totalReviews} lượt đánh giá
                        </p>
                    </div>

                    {/* Products */}
                    <div className="bg-white rounded-2xl p-4 shadow-sm">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="p-2 bg-purple-100 rounded-lg">
                                <Package className="w-5 h-5 text-purple-600" />
                            </div>
                            <span className="text-xs text-gray-500 font-medium">Món ăn</span>
                        </div>
                        <p className="text-2xl font-bold text-gray-800">{stats.totalProducts}</p>
                        <p className="text-xs text-gray-500 mt-1">món đang bán</p>
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="px-5 mt-6">
                <h2 className="text-lg font-bold text-gray-800 mb-3">Quản lý nhanh</h2>
                <div className="grid grid-cols-2 gap-3">
                    <QuickActionButton
                        icon={<ShoppingBag className="w-6 h-6" />}
                        label="Đơn hàng"
                        badge={stats.pendingOrders}
                        color="blue"
                        href="/seller/orders"
                    />
                    <QuickActionButton
                        icon={<UtensilsCrossed className="w-6 h-6" />}
                        label="Menu món ăn"
                        color="orange"
                        href="/seller/menu"
                    />
                    <QuickActionButton
                        icon={<BarChart3 className="w-6 h-6" />}
                        label="Thống kê"
                        color="green"
                        href="/seller/statistics"
                    />
                    <QuickActionButton
                        icon={<Clock className="w-6 h-6" />}
                        label="Giờ mở cửa"
                        color="purple"
                        href="/seller/hours"
                    />
                </div>
            </div>

            {/* Recent Orders */}
            <div className="px-5 mt-6">
                <div className="flex justify-between items-center mb-3">
                    <h2 className="text-lg font-bold text-gray-800">Đơn hàng gần đây</h2>
                    <a href="/seller/orders" className="text-sm text-orange-500 font-semibold">
                        Xem tất cả ›
                    </a>
                </div>

                <div className="space-y-3">
                    {recentOrders.map((order) => {
                        const badge = getStatusBadge(order.status);
                        return (
                            <div key={order.id} className="bg-white rounded-2xl p-4 shadow-sm">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <p className="font-bold text-gray-800">{order.id}</p>
                                        <p className="text-sm text-gray-600">{order.customer}</p>
                                    </div>
                                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${badge.style}`}>
                                        {badge.label}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-lg font-bold text-orange-500">
                                        {order.total.toLocaleString('vi-VN')}đ
                                    </span>
                                    <span className="text-xs text-gray-400">{order.time}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Tips Section */}
            <div className="px-5 mt-6 mb-6">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-4 text-white">
                    <div className="flex items-start gap-3">
                        <div className="text-2xl">💡</div>
                        <div>
                            <p className="font-bold mb-1">Mẹo kinh doanh</p>
                            <p className="text-sm text-white/90">
                                Trả lời đơn hàng trong 5 phút để tăng tỷ lệ chấp nhận từ khách hàng!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function QuickActionButton({
    icon,
    label,
    badge,
    color,
    href
}: {
    icon: React.ReactNode;
    label: string;
    badge?: number;
    color: 'blue' | 'orange' | 'green' | 'purple';
    href: string;
}) {
    const colorClasses = {
        blue: 'bg-blue-50 text-blue-600',
        orange: 'bg-orange-50 text-orange-600',
        green: 'bg-green-50 text-green-600',
        purple: 'bg-purple-50 text-purple-600',
    };

    return (
        <a
            href={href}
            className={`${colorClasses[color]} rounded-2xl p-4 flex flex-col items-center justify-center gap-2 relative active:scale-95 transition-transform shadow-sm`}
        >
            {badge && badge > 0 && (
                <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                    {badge}
                </span>
            )}
            {icon}
            <span className="text-sm font-semibold text-center">{label}</span>
        </a>
    );
}