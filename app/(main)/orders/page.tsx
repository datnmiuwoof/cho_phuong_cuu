"use client";

import React, { useState } from 'react';
import { Phone, MapPin, Star, RotateCcw, Store } from 'lucide-react';

export default function UserOrdersScreen() {
    const [activeTab, setActiveTab] = useState<'ongoing' | 'history'>('ongoing');

    // Đơn hàng đang diễn ra
    const ongoingOrders = [
        {
            id: 1,
            shop: 'Cơm Tấm Chị Hoa',
            shopIcon: '🍚',
            items: [
                { name: 'Cơm tấm sườn bì chả', quantity: 2, price: 35000 },
                { name: 'Trà đá', quantity: 2, price: 5000 },
            ],
            total: 80000,
            status: 'preparing',
            orderTime: '14:30',
            address: 'Ấp 3, Xã Tân Thạnh',
            estimatedTime: '15-20 phút',
            sellerPhone: '0901234567',
            note: 'Cho ít hành',
        },
        {
            id: 2,
            shop: 'Phở Bà Năm',
            shopIcon: '🍜',
            items: [
                { name: 'Phở bò tái nạm', quantity: 1, price: 45000 },
            ],
            total: 45000,
            status: 'delivering',
            orderTime: '14:15',
            address: 'Ấp 3, Xã Tân Thạnh',
            estimatedTime: '5-10 phút nữa',
            sellerPhone: '0912345678',
            note: '',
        },
    ];

    // Lịch sử đơn hàng
    const historyOrders = [
        {
            id: 1,
            shop: 'Bánh Mì Cô Ba',
            shopIcon: '🥖',
            items: [
                { name: 'Bánh mì pate thịt', quantity: 2, price: 20000 },
            ],
            total: 40000,
            status: 'completed',
            orderDate: 'Hôm qua, 12:30',
            rating: 5,
        },
        {
            id: 2,
            shop: 'Trà Sữa Anh Minh',
            shopIcon: '🧋',
            items: [
                { name: 'Trà sữa trân châu', quantity: 2, price: 25000 },
                { name: 'Trà đào cam sả', quantity: 1, price: 30000 },
            ],
            total: 80000,
            status: 'completed',
            orderDate: '22/12, 16:45',
            rating: 4,
        },
        {
            id: 3,
            shop: 'Cơm Tấm Chị Hoa',
            shopIcon: '🍚',
            items: [
                { name: 'Cơm tấm sườn', quantity: 1, price: 30000 },
            ],
            total: 30000,
            status: 'cancelled',
            orderDate: '21/12, 11:20',
            cancelReason: 'Hết món',
        },
    ];

    const getStatusText = (status: string) => {
        const statusMap: Record<string, string> = {
            pending: 'Chờ xác nhận',
            preparing: 'Đang chuẩn bị',
            delivering: 'Đang giao',
            completed: 'Hoàn thành',
            cancelled: 'Đã hủy',
        };
        return statusMap[status] || status;
    };

    const getStatusColor = (status: string) => {
        const colorMap: Record<string, string> = {
            pending: '#ff9800',
            preparing: '#2196f3',
            delivering: '#9c27b0',
            completed: '#4caf50',
            cancelled: '#f44336',
        };
        return colorMap[status] || '#666';
    };

    const renderStars = (rating: number) => {
        return '⭐'.repeat(rating) + '☆'.repeat(5 - rating);
    };

    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            {/* Header */}
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 pt-12 pb-5 px-5">
                <h1 className="text-3xl font-bold text-white">Đơn hàng của tôi</h1>
                <p className="text-orange-100 text-sm mt-1">Theo dõi đơn đặt món</p>
            </div>

            {/* Tab Selector */}
            <div className="flex bg-white border-b border-gray-200">
                <button
                    onClick={() => setActiveTab('ongoing')}
                    className={`flex-1 py-4 text-center font-semibold text-base transition-all ${activeTab === 'ongoing'
                        ? 'text-orange-500 border-b-2 border-orange-500'
                        : 'text-gray-400'
                        }`}
                >
                    🔥 Đang diễn ra ({ongoingOrders.length})
                </button>
                <button
                    onClick={() => setActiveTab('history')}
                    className={`flex-1 py-4 text-center font-semibold text-base transition-all ${activeTab === 'history'
                        ? 'text-orange-500 border-b-2 border-orange-500'
                        : 'text-gray-400'
                        }`}
                >
                    📜 Lịch sử ({historyOrders.length})
                </button>
            </div>

            {/* Content */}
            <div className="px-4 pt-4">
                {activeTab === 'ongoing' ? (
                    // ĐƠN ĐANG DIỄN RA
                    <>
                        {ongoingOrders.length > 0 ? (
                            ongoingOrders.map((order) => (
                                <div key={order.id} className="bg-white rounded-2xl p-4 mb-4 shadow-sm">
                                    {/* Shop Header */}
                                    <div className="flex justify-between items-center mb-3 pb-3 border-b border-gray-100">
                                        <div className="flex items-center flex-1">
                                            <span className="text-3xl mr-3">{order.shopIcon}</span>
                                            <div>
                                                <h3 className="text-base font-bold text-gray-800">{order.shop}</h3>
                                                <p className="text-xs text-gray-400 mt-0.5">{order.orderTime}</p>
                                            </div>
                                        </div>
                                        <div
                                            className="px-3 py-1.5 rounded-lg"
                                            style={{ backgroundColor: `${getStatusColor(order.status)}15` }}
                                        >
                                            <span
                                                className="text-xs font-bold"
                                                style={{ color: getStatusColor(order.status) }}
                                            >
                                                {getStatusText(order.status)}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Items */}
                                    <div className="mb-3">
                                        {order.items.map((item, index) => (
                                            <div key={index} className="flex justify-between py-1.5">
                                                <span className="text-sm text-gray-700">
                                                    {item.quantity}x {item.name}
                                                </span>
                                                <span className="text-sm font-semibold text-gray-800">
                                                    {(item.quantity * item.price).toLocaleString('vi-VN')}đ
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Divider */}
                                    <div className="h-px bg-gray-200 my-3" />

                                    {/* Total */}
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm font-semibold text-gray-600">Tổng cộng</span>
                                        <span className="text-xl font-bold text-orange-500">
                                            {order.total.toLocaleString('vi-VN')}đ
                                        </span>
                                    </div>

                                    {/* Delivery Info */}
                                    {order.status === 'delivering' && (
                                        <div className="flex items-center bg-gray-50 p-3 rounded-lg mt-3">
                                            <span className="text-2xl mr-3">🛵</span>
                                            <div className="flex-1">
                                                <p className="text-sm font-semibold text-gray-800">Chủ quán đang giao</p>
                                                <p className="text-xs text-gray-600 mt-0.5">Dự kiến: {order.estimatedTime}</p>
                                            </div>
                                        </div>
                                    )}

                                    {order.status === 'preparing' && (
                                        <div className="flex items-center bg-gray-50 p-3 rounded-lg mt-3">
                                            <span className="text-2xl mr-3">👨‍🍳</span>
                                            <div className="flex-1">
                                                <p className="text-sm font-semibold text-gray-800">Quán đang chuẩn bị món</p>
                                                <p className="text-xs text-gray-600 mt-0.5">Thời gian: {order.estimatedTime}</p>
                                            </div>
                                        </div>
                                    )}

                                    {order.status === 'pending' && (
                                        <div className="flex items-center bg-gray-50 p-3 rounded-lg mt-3">
                                            <span className="text-2xl mr-3">⏳</span>
                                            <div className="flex-1">
                                                <p className="text-sm font-semibold text-gray-800">Chờ quán xác nhận</p>
                                                <p className="text-xs text-gray-600 mt-0.5">Vui lòng đợi trong giây lát</p>
                                            </div>
                                        </div>
                                    )}

                                    {/* Note */}
                                    {order.note && (
                                        <div className="bg-amber-50 p-2.5 rounded-lg mt-3">
                                            <p className="text-xs font-semibold text-amber-700 mb-1">💬 Ghi chú của bạn:</p>
                                            <p className="text-sm text-gray-700">{order.note}</p>
                                        </div>
                                    )}

                                    {/* Actions */}
                                    <div className="flex gap-2 mt-3">
                                        <button className="flex-1 bg-blue-50 text-blue-600 py-2.5 rounded-lg font-semibold text-sm flex items-center justify-center gap-1.5">
                                            <Phone className="w-4 h-4" />
                                            Liên hệ quán
                                        </button>
                                        {order.status === 'pending' && (
                                            <button className="px-4 py-2.5 rounded-lg border border-gray-300 text-gray-600 font-semibold text-sm">
                                                Hủy đơn
                                            </button>
                                        )}
                                        {order.status === 'delivering' && (
                                            <button className="px-4 py-2.5 rounded-lg bg-purple-600 text-white font-semibold text-sm flex items-center gap-1.5">
                                                <MapPin className="w-4 h-4" />
                                                Theo dõi
                                            </button>
                                        )}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="flex flex-col items-center py-16">
                                <span className="text-7xl mb-4">📦</span>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Chưa có đơn hàng nào</h3>
                                <p className="text-sm text-gray-500 text-center mb-6">
                                    Hãy đặt món ngay để ủng hộ quán làng nhé!
                                </p>
                                <button className="bg-orange-500 text-white px-8 py-3 rounded-full font-bold text-base">
                                    Đặt món ngay
                                </button>
                            </div>
                        )}
                    </>
                ) : (
                    // LỊCH SỬ ĐƠN HÀNG
                    <>
                        {historyOrders.map((order) => (
                            <div key={order.id} className="bg-white rounded-2xl p-4 mb-4 shadow-sm">
                                {/* Shop Header */}
                                <div className="flex justify-between items-center mb-3 pb-3 border-b border-gray-100">
                                    <div className="flex items-center flex-1">
                                        <span className="text-3xl mr-3">{order.shopIcon}</span>
                                        <div>
                                            <h3 className="text-base font-bold text-gray-800">{order.shop}</h3>
                                            <p className="text-xs text-gray-400 mt-0.5">{order.orderDate}</p>
                                        </div>
                                    </div>
                                    <div
                                        className="px-3 py-1.5 rounded-lg"
                                        style={{ backgroundColor: `${getStatusColor(order.status)}15` }}
                                    >
                                        <span
                                            className="text-xs font-bold"
                                            style={{ color: getStatusColor(order.status) }}
                                        >
                                            {getStatusText(order.status)}
                                        </span>
                                    </div>
                                </div>

                                {/* Items */}
                                <div className="mb-3">
                                    {order.items.map((item, index) => (
                                        <div key={index} className="flex justify-between py-1.5">
                                            <span className="text-sm text-gray-700">
                                                {item.quantity}x {item.name}
                                            </span>
                                            <span className="text-sm font-semibold text-gray-800">
                                                {(item.quantity * item.price).toLocaleString('vi-VN')}đ
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* Divider */}
                                <div className="h-px bg-gray-200 my-3" />

                                {/* Total */}
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-semibold text-gray-600">Tổng cộng</span>
                                    <span className="text-xl font-bold text-orange-500">
                                        {order.total.toLocaleString('vi-VN')}đ
                                    </span>
                                </div>

                                {/* Rating or Cancel Reason */}
                                {order.status === 'completed' && order.rating ? (
                                    <div className="flex justify-between items-center bg-green-50 p-2.5 rounded-lg mt-3">
                                        <span className="text-xs font-semibold text-green-700">Đánh giá của bạn:</span>
                                        <span className="text-base">{renderStars(order.rating)}</span>
                                    </div>
                                ) : order.status === 'completed' ? (
                                    <button className="w-full bg-amber-50 text-amber-700 py-2.5 rounded-lg font-semibold text-sm mt-3 flex items-center justify-center gap-1.5">
                                        <Star className="w-4 h-4" />
                                        Đánh giá đơn hàng
                                    </button>
                                ) : order.status === 'cancelled' && order.cancelReason ? (
                                    <div className="bg-red-50 p-2.5 rounded-lg mt-3">
                                        <p className="text-xs font-semibold text-red-700 mb-1">Lý do hủy:</p>
                                        <p className="text-sm text-gray-700">{order.cancelReason}</p>
                                    </div>
                                ) : null}

                                {/* Actions */}
                                <div className="flex gap-2 mt-3">
                                    <button className="flex-1 bg-orange-50 text-orange-600 py-2.5 rounded-lg font-semibold text-sm flex items-center justify-center gap-1.5">
                                        <RotateCcw className="w-4 h-4" />
                                        Đặt lại
                                    </button>
                                    {order.status === 'completed' && (
                                        <button className="px-4 py-2.5 rounded-lg border border-gray-300 text-gray-600 font-semibold text-sm flex items-center gap-1.5">
                                            <Store className="w-4 h-4" />
                                            Xem quán
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </>
                )}
            </div>
        </div>
    );
}