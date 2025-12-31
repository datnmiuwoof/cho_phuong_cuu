"use client";

import React from 'react';
import { Chrome, Users, ShoppingBag, Heart, Sparkles } from 'lucide-react';

export default function LoginPage() {
    const handleGoogleLogin = () => {
        // TODO: Implement Google OAuth
        alert('🔄 Đang chuyển đến Google để đăng nhập...');
        // window.location.href = '/api/auth/google';
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 flex flex-col">
            {/* Hero Section */}
            <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
                {/* Logo & Brand */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-orange-500 to-pink-500 rounded-3xl shadow-2xl mb-4 animate-bounce-slow">
                        <ShoppingBag className="w-12 h-12 text-white" />
                    </div>
                    <h1 className="text-4xl font-black bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent mb-2">
                        Chợ Làng
                    </h1>
                    <p className="text-gray-600 text-lg font-medium">
                        Nơi bà con bán đồ ăn cho nhau
                    </p>
                </div>

                {/* Features */}
                <div className="grid grid-cols-2 gap-4 mb-12 max-w-md w-full">
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/50">
                        <div className="bg-orange-100 w-12 h-12 rounded-xl flex items-center justify-center mb-3">
                            <Users className="w-6 h-6 text-orange-600" />
                        </div>
                        <p className="text-sm font-bold text-gray-800 mb-1">Cộng đồng</p>
                        <p className="text-xs text-gray-600">Bà con làng xóm</p>
                    </div>

                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/50">
                        <div className="bg-pink-100 w-12 h-12 rounded-xl flex items-center justify-center mb-3">
                            <Heart className="w-6 h-6 text-pink-600" />
                        </div>
                        <p className="text-sm font-bold text-gray-800 mb-1">Tình làng</p>
                        <p className="text-xs text-gray-600">Nghĩa xóm</p>
                    </div>

                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/50">
                        <div className="bg-purple-100 w-12 h-12 rounded-xl flex items-center justify-center mb-3">
                            <ShoppingBag className="w-6 h-6 text-purple-600" />
                        </div>
                        <p className="text-sm font-bold text-gray-800 mb-1">giạo tận nơi</p>
                        <p className="text-xs text-gray-600">chủ quán giao</p>
                    </div>

                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/50">
                        <div className="bg-green-100 w-12 h-12 rounded-xl flex items-center justify-center mb-3">
                            <Sparkles className="w-6 h-6 text-green-600" />
                        </div>
                        <p className="text-sm font-bold text-gray-800 mb-1">Tươi ngon</p>
                        <p className="text-xs text-gray-600">Món nhà làm</p>
                    </div>
                </div>

                {/* Google Login Button */}
                <div className="max-w-md w-full">
                    <button
                        onClick={handleGoogleLogin}
                        className="w-full bg-white hover:bg-gray-50 active:scale-98 text-gray-800 font-bold py-5 px-6 rounded-2xl shadow-2xl hover:shadow-xl transition-all flex items-center justify-center gap-3 border-2 border-gray-100"
                    >
                        <Chrome className="w-6 h-6 text-red-500" />
                        <span className="text-lg">Đăng nhập với Google</span>
                    </button>

                    <p className="text-center text-xs text-gray-500 mt-6 px-4">
                        Bằng việc đăng nhập, bạn đồng ý với{' '}
                        <span className="text-orange-600 font-semibold">Điều khoản</span> và{' '}
                        <span className="text-orange-600 font-semibold">Chính sách</span> của chúng tôi
                    </p>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-20 left-10 w-20 h-20 bg-orange-200 rounded-full blur-3xl opacity-50 animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-32 h-32 bg-pink-200 rounded-full blur-3xl opacity-50 animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 right-20 w-24 h-24 bg-purple-200 rounded-full blur-3xl opacity-50 animate-pulse delay-2000"></div>

            <style jsx>{`
                .active\\:scale-98:active {
                    transform: scale(0.98);
                }
                @keyframes bounce-slow {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                .animate-bounce-slow {
                    animation: bounce-slow 3s ease-in-out infinite;
                }
                .delay-1000 {
                    animation-delay: 1s;
                }
                .delay-2000 {
                    animation-delay: 2s;
                }
            `}</style>
        </div>
    );
}