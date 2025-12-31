import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // Bắt buộc có dòng này để chạy trên GitHub Pages
  images: {
    unoptimized: true, // Thêm dòng này nếu bạn có dùng thẻ <Image />
  },
};

export default nextConfig;
