import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Убираем всё, что может мешать раздаче статики на Vercel
  reactStrictMode: true,
  poweredByHeader: false,
  
  // Явно разрешаем загрузку статики из public
  images: {
    unoptimized: true, // Нужно для статических картинок на Vercel
  },
  
  // Отключаем индикаторы разработки
  devIndicators: false,
  
  // Разрешаем любые источники для разработки (на продакшене не влияет)
  allowedDevOrigins: ["*"],
};

export default nextConfig;