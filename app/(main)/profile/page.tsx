"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
    User,
    MapPin,
    Phone,
    Mail,
    Store,
    Heart,
    Bell,
    HelpCircle,
    LogOut,
    ChevronRight,
    Settings,
    Shield,
    CreditCard,
    Gift,
    Star
} from 'lucide-react';

// Mock auth hook
const useAuth = () => {
    const [user, setUser] = useState({
        name: 'Nguyễn Văn A',
        phone: '0901234567',
        email: 'nguyenvana@gmail.com',
        avatar: '👤',
        role: 'BUYER', // 'BUYER' or 'SELLER'
        shopName: 'Cơm Tấm Chị Hoa', // Nếu là SELLER
        memberSince: '01/2024',
        totalOrders: 24,
        points: 1250,
    });

    const upgradeToSeller = () => {
        setUser(prev => ({ ...prev, role: 'SELLER', shopName: 'Quán mới của tôi' }));
    };

    return { user, upgradeToSeller };
};

export default function ProfileScreen() {

    const router = useRouter();
    const { user, upgradeToSeller } = useAuth();
    const [showUpgradeModal, setShowUpgradeModal] = useState(false);

    const isSeller = user.role === 'SELLER';

    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            {/* Header with Avatar */}
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 pt-12 pb-20 px-5">
                <div className="flex items-center gap-4">
                    <div className="w-20 h-20 rounded-full bg-white/30 flex items-center justify-center text-4xl">
                        {user.avatar}
                    </div>
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold text-white">{user.name}</h2>
                        <p className="text-orange-100 text-sm mt-1">
                            {isSeller ? `🏪 ${user.shopName}` : '👋 Khách hàng thân thiết'}
                        </p>
                    </div>
                </div>
            </div>

            {/* Stats Cards - Overlap header */}
            <div className="px-5 -mt-12">
                <div className="bg-white rounded-2xl shadow-lg p-4">
                    <div className="flex justify-around">
                        <div className="text-center">
                            <p className="text-2xl font-bold text-gray-800">{user.totalOrders}</p>
                            <p className="text-xs text-gray-500 mt-1">Đơn hàng</p>
                        </div>
                        <div className="w-px bg-gray-200" />
                        <div className="text-center">
                            <p className="text-2xl font-bold text-orange-500">{user.points}</p>
                            <p className="text-xs text-gray-500 mt-1">Điểm tích lũy</p>
                        </div>
                        <div className="w-px bg-gray-200" />
                        <div className="text-center">
                            <p className="text-2xl font-bold text-gray-800">4.8</p>
                            <p className="text-xs text-gray-500 mt-1">Đánh giá</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Seller Upgrade Banner - Chỉ hiện khi là BUYER */}
            {!isSeller && (
                <div className="px-5 mt-4">
                    <button
                        onClick={() => setShowUpgradeModal(true)}
                        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-4 flex items-center justify-between shadow-lg active:scale-98 transition-transform"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center">
                                <Store className="w-6 h-6 text-white" />
                            </div>
                            <div className="text-left">
                                <p className="text-white font-bold text-base">Trở thành người bán</p>
                                <p className="text-white/90 text-xs mt-0.5">Mở quán và kiếm thêm thu nhập</p>
                            </div>
                        </div>
                        <ChevronRight className="w-6 h-6 text-white" />
                    </button>
                </div>
            )}

            {/* Seller Management - Chỉ hiện khi là SELLER */}
            {isSeller && (
                <div className="px-5 mt-4">
                    <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                        <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-4">
                            <p className="text-white font-bold text-base mb-1">🏪 Quản lý quán của tôi</p>
                            <p className="text-orange-100 text-xs">Theo dõi và quản lý quán hàng của bạn</p>
                        </div>
                        <div className="p-2">
                            <MenuItem icon="📊" label="Thống kê doanh thu" href="/sellers/dashboard" />
                            <MenuItem icon="📦" label="Quản lý đơn hàng" href="/sellers/orders" badge="3 mới" />
                            <MenuItem icon="🍽️" label="Quản lý món ăn" href="/sellers/menu" />
                            <MenuItem icon="⏰" label="Giờ mở cửa" href="/sellers/hours" />
                        </div>
                    </div>
                </div>
            )}

            {/* Account Section */}
            <div className="px-5 mt-4">
                <h3 className="text-sm font-bold text-gray-500 mb-2 px-2">TÀI KHOẢN</h3>
                <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                    <MenuItem icon={<User className="w-5 h-5 text-gray-600" />} label="Thông tin cá nhân" />
                    <MenuItem icon={<MapPin className="w-5 h-5 text-gray-600" />} label="Địa chỉ của tôi" />
                    <MenuItem icon={<CreditCard className="w-5 h-5 text-gray-600" />} label="Phương thức thanh toán" />
                    <MenuItem icon={<Gift className="w-5 h-5 text-gray-600" />} label="Mã giảm giá" badge="2" />
                </div>
            </div>

            {/* Other Section */}
            <div className="px-5 mt-4">
                <h3 className="text-sm font-bold text-gray-500 mb-2 px-2">KHÁC</h3>
                <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                    <MenuItem icon={<Heart className="w-5 h-5 text-gray-600" />} label="Quán yêu thích" />
                    <MenuItem icon={<Star className="w-5 h-5 text-gray-600" />} label="Đánh giá của tôi" />
                    <MenuItem icon={<Bell className="w-5 h-5 text-gray-600" />} label="Thông báo" />
                    <MenuItem icon={<Settings className="w-5 h-5 text-gray-600" />} label="Cài đặt" />
                    <MenuItem icon={<Shield className="w-5 h-5 text-gray-600" />} label="Chính sách & Điều khoản" />
                    <MenuItem icon={<HelpCircle className="w-5 h-5 text-gray-600" />} label="Trợ giúp & Hỗ trợ" />
                </div>
            </div>

            {/* Logout Button */}
            <div className="px-5 mt-4 mb-6">
                <button className="w-full bg-white rounded-2xl shadow-sm p-4 flex items-center justify-center gap-2 text-red-600 font-semibold active:scale-98 transition-transform">
                    <LogOut className="w-5 h-5" />
                    Đăng xuất
                </button>
            </div>

            {/* Version */}
            <p className="text-center text-xs text-gray-400 mb-4">Phiên bản 1.0.0</p>

            {/* Upgrade to Seller Modal */}
            {showUpgradeModal && (
                <div className="fixed pb-16 inset-0 bg-black/50 flex items-end justify-center z-50 animate-fade-in">
                    <div className="bg-white rounded-t-3xl w-full max-w-lg p-6 animate-slide-up">
                        <div className="text-center mb-6">
                            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Store className="w-10 h-10 text-white" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">Trở thành người bán</h2>
                            <p className="text-sm text-gray-600">
                                Mở quán của bạn và bắt đầu kinh doanh ngay hôm nay!
                            </p>
                        </div>

                        <div className="space-y-3 mb-6">
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <span className="text-lg">✅</span>
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-800 text-sm">Quản lý dễ dàng</p>
                                    <p className="text-xs text-gray-600">Công cụ quản lý đơn hàng và menu đơn giản</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <span className="text-lg">💰</span>
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-800 text-sm">Thu nhập hấp dẫn</p>
                                    <p className="text-xs text-gray-600">Không mất phí đăng ký, chỉ phí dịch vụ 5%</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <span className="text-lg">📱</span>
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-800 text-sm">Tiếp cận khách hàng</p>
                                    <p className="text-xs text-gray-600">Hàng ngàn khách hàng trong khu vực của bạn</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <button
                                onClick={() => setShowUpgradeModal(false)}
                                className="flex-1 py-3 rounded-xl border-2 border-gray-300 font-semibold text-gray-700"
                            >
                                Để sau
                            </button>
                            <button
                                onClick={() => {
                                    router.push('/cho_phuong_cuu/sellers/register');
                                    // upgradeToSeller();
                                    setShowUpgradeModal(false);
                                }}
                                className="flex-1 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 font-semibold text-white shadow-lg"
                            >
                                Đăng ký ngay
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
        .active\:scale-98:active {
          transform: scale(0.98);
        }
      `}</style>
        </div>
    );
}

// MenuItem Component
function MenuItem({
    icon,
    label,
    href,
    badge
}: {
    icon: React.ReactNode | string;
    label: string;
    href?: string;
    badge?: string;
}) {
    return (
        <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 active:bg-gray-100 transition-colors">
            <div className="flex items-center gap-3">
                {typeof icon === 'string' ? (
                    <span className="text-xl">{icon}</span>
                ) : (
                    icon
                )}
                <span className="text-sm font-medium text-gray-800">{label}</span>
            </div>
            <div className="flex items-center gap-2">
                {badge && (
                    <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                        {badge}
                    </span>
                )}
                <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
        </button>
    );
}