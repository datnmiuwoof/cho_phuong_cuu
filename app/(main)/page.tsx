'use client'

import React, { use, useState } from 'react';
import { MapPin, Search, ChevronRight, Star, Clock } from 'lucide-react';

export default function HomeScreen() {
  const [selectedCategory, setSelectedCategory] = useState('Tất cả');
  const [searchText, setSearchText] = useState('');

  const categories = [
    { id: 1, name: 'Tất cả', icon: '🍽️' },
    { id: 2, name: 'Cơm', icon: '🍚' },
    { id: 3, name: 'Phở/Bún', icon: '🍜' },
    { id: 4, name: 'Bánh mì', icon: '🥖' },
    { id: 5, name: 'Đồ uống', icon: '🧋' },
    { id: 6, name: 'Ăn vặt', icon: '🍢' },
  ];

  const shops = [
    {
      id: 1,
      name: 'Cơm Tấm Sườn Bì Chả',
      icon: '🍚',
      speciality: 'Cơm tấm, sườn nướng',
      rating: 4.8,
      reviews: 234,
      distance: '0.8 km',
      time: '15-20 phút',
      owner: 'Chị Mai',
    },
    {
      id: 2,
      name: 'Phở Bò Hà Nội',
      icon: '🍜',
      speciality: 'Phở bò, phở gà',
      rating: 4.9,
      reviews: 456,
      distance: '1.2 km',
      time: '20-25 phút',
      owner: 'Anh Tuấn',
    },
    {
      id: 3,
      name: 'Bánh Mì Thịt Nướng',
      icon: '🥖',
      speciality: 'Bánh mì pâté, thịt nướng',
      rating: 4.7,
      reviews: 189,
      distance: '0.5 km',
      time: '10-15 phút',
      owner: 'Cô Lan',
    },
    {
      id: 4,
      name: 'Trà Sữa Ngon Lành',
      icon: '🧋',
      speciality: 'Trà sữa trân châu, trà trái cây',
      rating: 4.6,
      reviews: 312,
      distance: '1.5 km',
      time: '15-20 phút',
      owner: 'Anh Khoa',
    },
    {
      id: 5,
      name: 'Bún Chả Hà Nội',
      icon: '🍢',
      speciality: 'Bún chả, nem rán',
      rating: 4.8,
      reviews: 278,
      distance: '1.0 km',
      time: '20-25 phút',
      owner: 'Chị Hương',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 mb-10">
      {/* Header */}
      <div className="bg-gradient-to-br from-orange-500 to-orange-600 pt-12 pb-6 px-5 rounded-b-3xl shadow-lg">
        <div className="flex justify-between items-center mb-5">
          <div>
            <h1 className="text-3xl font-bold text-white">Giao đồ ăn</h1>
            <p className="text-orange-100 text-sm mt-1">Đặt món ngay hôm nay</p>
          </div>
          <div className="w-11 h-11 rounded-full bg-white/30 flex items-center justify-center">
            <span className="text-2xl">👤</span>
          </div>
        </div>

        {/* Location Card */}
        <button className="w-full bg-white/25 rounded-xl p-3 flex items-center mb-4">
          <MapPin className="text-white w-5 h-5 mr-3" />
          <div className="flex-1 text-left">
            <p className="text-orange-100 text-xs">Vị trí hiện tại</p>
            <p className="text-white font-semibold text-base mt-0.5">Ấp 3, Xã Tân Thạnh</p>
          </div>
          <ChevronRight className="text-white w-6 h-6" />
        </button>

        {/* Search Bar */}
        <div className="bg-white rounded-xl p-3 flex items-center">
          <Search className="text-gray-400 w-5 h-5 mr-3" />
          <input
            type="text"
            placeholder="Tìm món ăn, quán ăn..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="flex-1 text-base text-gray-700 outline-none bg-transparent"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="px-5 pt-5">
        <h2 className="text-lg font-bold text-gray-800 mb-4">Danh mục</h2>
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.name)}
              className={`flex-shrink-0 px-5 py-3 rounded-xl font-semibold text-sm transition-all ${selectedCategory === category.name
                ? 'bg-orange-500 text-white shadow-md'
                : 'bg-white text-gray-700 border border-gray-200'
                }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Shops List */}
      <div className="px-5 pt-5 pb-5">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-gray-800">Quán gần bạn</h2>
          <button className="text-orange-500 font-semibold text-sm">
            Xem tất cả ›
          </button>
        </div>

        {shops.map((shop) => (
          <div
            key={shop.id}
            className="bg-white rounded-2xl p-4 mb-4 flex shadow-sm active:scale-98 transition-transform cursor-pointer"
          >
            <div className="w-[70px] h-[70px] rounded-xl bg-orange-50 flex items-center justify-center mr-3.5 flex-shrink-0">
              <span className="text-4xl">{shop.icon}</span>
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="text-base font-bold text-gray-800 mb-1 truncate">
                {shop.name}
              </h3>
              <p className="text-sm text-gray-600 mb-2 truncate">
                {shop.speciality}
              </p>

              <div className="flex flex-wrap gap-3 mb-2">
                <div className="flex items-center">
                  <Star className="w-3 h-3 text-yellow-500 fill-yellow-500 mr-1" />
                  <span className="text-xs text-gray-600">
                    {shop.rating} ({shop.reviews})
                  </span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-3 h-3 text-gray-400 mr-1" />
                  <span className="text-xs text-gray-600">{shop.distance}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-3 h-3 text-gray-400 mr-1" />
                  <span className="text-xs text-gray-600">{shop.time}</span>
                </div>
              </div>

              <div className="inline-block bg-green-50 px-2.5 py-1 rounded-md">
                <span className="text-xs text-green-700 font-semibold">
                  🛵 {shop.owner}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .active\:scale-98:active {
          transform: scale(0.98);
        }
      `}</style>
    </div>
  );
}