// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   output: 'export', // Bắt buộc có dòng này để chạy trên GitHub Pages
//   images: {
//     unoptimized: true, // Thêm dòng này nếu bạn có dùng thẻ <Image />
//   },
// };

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Xuất file tĩnh để chạy trên GitHub Pages
  images: {
    unoptimized: true, // Bỏ qua tối ưu ảnh (GitHub Pages không hỗ trợ)
  },
  typescript: {
    // Thêm dòng này để bỏ qua lỗi TypeScript khi build
    ignoreBuildErrors: true, 
  },
  eslint: {
    // Thêm dòng này để bỏ qua lỗi ESLint khi build (nếu có)
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;