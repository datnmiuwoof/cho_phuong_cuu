"use client";

import React, { useState } from 'react';
import {
    ArrowLeft,
    Store,
    Check,
    Phone,
    Sparkles,
    Zap,
    TrendingUp,
    Crown,
    Rocket
} from 'lucide-react';

export default function RegisterSeller() {
    const [selectedPlan, setSelectedPlan] = useState<string>('3months');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [storeName, setStoreName] = useState('');

    // Mock user data từ Google Login
    const userData = {
        name: 'Nguyễn Văn A',
        email: 'nguyenvana@gmail.com',
        avatar: 'https://ui-avatars.com/api/?name=Nguyen+Van+A&background=ff6b35&color=fff'
    };

    const plans = [
        {
            id: '1month',
            duration: '1 tháng',
            months: 1,
            price: 10000,
            pricePerMonth: 10000,
            icon: <Zap className="w-6 h-6" />,
            color: 'from-blue-500 to-cyan-500'
        },
        {
            id: '3months',
            duration: '3 tháng',
            months: 3,
            price: 27000,
            originalPrice: 30000,
            pricePerMonth: 9000,
            discount: '10%',
            badge: 'Tiết kiệm 3K',
            icon: <TrendingUp className="w-6 h-6" />,
            color: 'from-orange-500 to-pink-500',
            popular: true
        },
        {
            id: '6months',
            duration: '6 tháng',
            months: 6,
            price: 48000,
            originalPrice: 60000,
            pricePerMonth: 8000,
            discount: '20%',
            badge: 'Tiết kiệm 12K',
            icon: <Sparkles className="w-6 h-6" />,
            color: 'from-purple-500 to-pink-500'
        },
        {
            id: '12months',
            duration: '12 tháng',
            months: 12,
            price: 84000,
            originalPrice: 120000,
            pricePerMonth: 7000,
            discount: '30%',
            badge: 'Tiết kiệm 36K',
            icon: <Crown className="w-6 h-6" />,
            color: 'from-yellow-500 to-orange-500',
            best: true
        }
    ];

    const features = [
        { icon: '🎯', text: 'Đăng bán không giới hạn món ăn gia đình' },
        { icon: '📊', text: 'Thống kê doanh thu chi tiết' },
        { icon: '💰', text: 'Nhận thanh toán dễ dàng' },
        { icon: '📱', text: 'Quản lý đơn hàng đơn giản' },
        { icon: '🎁', text: 'Công cụ giảm giá cho khách quen' },
        { icon: '💬', text: 'Hỗ trợ nhiệt tình 24/7' }
    ];

    const handleRegister = () => {
        if (!storeName || storeName.trim().length < 3) {
            alert('Vui lòng nhập tên gian hàng (ít nhất 3 ký tự)!');
            return;
        }

        if (!phoneNumber || phoneNumber.length < 10) {
            alert('Vui lòng nhập số điện thoại hợp lệ!');
            return;
        }

        const plan = plans.find(p => p.id === selectedPlan);
        alert(`🎉 Đăng ký thành công!\n\nTên gian hàng: ${storeName}\nGói: ${plan?.duration}\nTổng: ${plan?.price.toLocaleString('vi-VN')}đ\n\nChúc bạn kinh doanh thành công!`);
        // Redirect to seller dashboard
        // window.location.href = '/seller/dashboard';
    };

    const formatPrice = (price: number) => {
        return price.toLocaleString('vi-VN');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
            {/* Header */}
            <div className="bg-white/80 backdrop-blur-lg border-b border-white/20 sticky top-0 z-10 shadow-sm">
                <div className="flex items-center justify-between p-4 max-w-2xl mx-auto">
                    <button
                        onClick={() => window.history.back()}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <ArrowLeft className="w-6 h-6" />
                    </button>
                    <h1 className="text-lg font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                        Đăng ký bán hàng
                    </h1>
                    <div className="w-10" />
                </div>
            </div>

            <div className="px-5 py-6 pb-24 max-w-2xl mx-auto">
                {/* Hero Section with User Info */}
                <div className="bg-white rounded-3xl p-6 mb-6 shadow-xl border border-white/50">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="relative">
                            <img
                                src={userData.avatar}
                                alt="avatar"
                                className="w-16 h-16 rounded-full ring-4 ring-orange-100"
                            />
                            <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full p-1">
                                <Rocket className="w-4 h-4 text-white" />
                            </div>
                        </div>
                        <div className="flex-1">
                            <p className="text-sm text-gray-500">Xin chào,</p>
                            <p className="text-lg font-bold text-gray-800">{userData.name}</p>
                            <p className="text-xs text-gray-500">{userData.email}</p>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl p-4 text-white">
                        <p className="text-sm opacity-90 mb-1">🎉 Chào mừng bạn đến với</p>
                        <p className="text-xl font-bold mb-2">Cộng đồng người bán</p>
                        <p className="text-sm opacity-90">Bắt đầu kinh doanh chỉ với <span className="font-bold">10.000đ/tháng</span></p>
                    </div>
                </div>

                {/* Pricing Plans */}
                <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-gray-800">Chọn gói phù hợp</h3>
                        <div className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">
                            💚 Siêu tiết kiệm
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mb-4">
                        {plans.map((plan) => (
                            <div
                                key={plan.id}
                                onClick={() => setSelectedPlan(plan.id)}
                                className={`relative rounded-2xl p-4 cursor-pointer transition-all ${selectedPlan === plan.id
                                        ? 'ring-4 ring-orange-400 shadow-2xl scale-105'
                                        : 'bg-white shadow-md hover:shadow-lg'
                                    }`}
                                style={{
                                    background: selectedPlan === plan.id
                                        ? `linear-gradient(135deg, ${plan.color.includes('blue') ? '#3b82f6, #06b6d4' : plan.color.includes('orange') && plan.color.includes('pink') ? '#f97316, #ec4899' : plan.color.includes('purple') ? '#a855f7, #ec4899' : '#eab308, #f97316'})`
                                        : 'white'
                                }}
                            >
                                {/* Popular/Best Badge */}
                                {plan.popular && (
                                    <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg animate-pulse">
                                        🔥 HOT
                                    </div>
                                )}
                                {plan.best && (
                                    <div className="absolute -top-2 -right-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                                        👑 BEST
                                    </div>
                                )}

                                <div className={`${selectedPlan === plan.id ? 'text-white' : 'text-gray-400'} mb-3`}>
                                    {plan.icon}
                                </div>

                                <p className={`text-lg font-bold mb-1 ${selectedPlan === plan.id ? 'text-white' : 'text-gray-800'}`}>
                                    {plan.duration}
                                </p>

                                <div className="mb-2">
                                    <p className={`text-2xl font-black ${selectedPlan === plan.id ? 'text-white' : 'text-orange-600'}`}>
                                        {formatPrice(plan.price)}đ
                                    </p>
                                    {plan.originalPrice && (
                                        <p className={`text-xs line-through ${selectedPlan === plan.id ? 'text-white/70' : 'text-gray-400'}`}>
                                            {formatPrice(plan.originalPrice)}đ
                                        </p>
                                    )}
                                </div>

                                <div className={`flex items-center justify-between text-xs ${selectedPlan === plan.id ? 'text-white/90' : 'text-gray-600'}`}>
                                    <span>{formatPrice(plan.pricePerMonth)}đ/tháng</span>
                                    {plan.badge && (
                                        <span className={`${selectedPlan === plan.id ? 'bg-white/30' : 'bg-green-100 text-green-700'} px-2 py-0.5 rounded-full font-semibold`}>
                                            {plan.badge}
                                        </span>
                                    )}
                                </div>

                                {/* Check Icon */}
                                {selectedPlan === plan.id && (
                                    <div className="absolute top-3 right-3 bg-white rounded-full p-1">
                                        <Check className="w-4 h-4 text-orange-500" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Features Grid */}
                <div className="bg-white rounded-3xl p-6 mb-6 shadow-xl border border-white/50">
                    <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2 text-lg">
                        <Sparkles className="w-5 h-5 text-orange-500" />
                        Quyền lợi của bạn
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-2 bg-gradient-to-br from-orange-50 to-pink-50 rounded-xl p-3"
                            >
                                <span className="text-xl">{feature.icon}</span>
                                <p className="text-xs text-gray-700 leading-relaxed">
                                    {feature.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Store Name & Phone Input */}
                <div className="bg-white rounded-3xl p-6 mb-6 shadow-xl border border-white/50">
                    <h3 className="font-bold text-gray-800 mb-4 text-lg">Thông tin gian hàng</h3>

                    {/* Store Name */}
                    <div className="mb-4">
                        <label className="text-sm font-semibold text-gray-700 mb-2 block">
                            Tên gian hàng <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2">
                                <Store className="w-5 h-5 text-gray-400" />
                            </div>
                            <input
                                type="text"
                                value={storeName}
                                onChange={(e) => setStoreName(e.target.value)}
                                placeholder="VD: Cơm nhà chị Hoa, Bánh mì ông Tám..."
                                className="w-full border-2 border-gray-200 rounded-2xl pl-12 pr-4 py-4 text-lg focus:outline-none focus:border-orange-500 transition-colors"
                            />
                        </div>
                        <p className="text-xs text-gray-500 mt-2">
                            🏪 Đặt tên thân thiện để khách hàng dễ nhớ
                        </p>
                    </div>

                    {/* Phone Number */}
                    <div>
                        <label className="text-sm font-semibold text-gray-700 mb-2 block">
                            Số điện thoại <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2">
                                <Phone className="w-5 h-5 text-gray-400" />
                            </div>
                            <input
                                type="tel"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                placeholder="Nhập số điện thoại của bạn"
                                className="w-full border-2 border-gray-200 rounded-2xl pl-12 pr-4 py-4 text-lg focus:outline-none focus:border-orange-500 transition-colors"
                            />
                        </div>
                        <p className="text-xs text-gray-500 mt-2">
                            📱 Số điện thoại để khách hàng liên hệ đặt món và hẹn lấy hàng
                        </p>
                    </div>
                </div>

                {/* Summary */}
                <div className="bg-gradient-to-r from-orange-500 to-pink-500 rounded-3xl p-6 mb-6 shadow-xl text-white">
                    <div className="flex items-center justify-between mb-3">
                        <p className="text-sm opacity-90">Gói đã chọn</p>
                        <p className="font-bold text-lg">
                            {plans.find(p => p.id === selectedPlan)?.duration}
                        </p>
                    </div>
                    <div className="border-t border-white/30 pt-3 flex items-center justify-between">
                        <p className="text-lg font-semibold">Tổng thanh toán</p>
                        <p className="text-3xl font-black">
                            {formatPrice(plans.find(p => p.id === selectedPlan)?.price || 0)}đ
                        </p>
                    </div>
                </div>

                {/* Register Button */}
                <button
                    onClick={handleRegister}
                    className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold py-5 rounded-2xl shadow-2xl hover:shadow-xl active:scale-98 transition-all text-lg"
                >
                    🚀 Đăng ký ngay
                </button>

                {/* Terms */}
                <p className="text-center text-xs text-gray-500 mt-4">
                    Bằng việc đăng ký, bạn đồng ý với <span className="text-orange-600 font-semibold">Điều khoản dịch vụ</span> và <span className="text-orange-600 font-semibold">Chính sách bảo mật</span>
                </p>
            </div>

            <style jsx>{`
                .active\\:scale-98:active {
                    transform: scale(0.98);
                }
                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.8; }
                }
                .animate-pulse {
                    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }
            `}</style>
        </div>
    );
}