import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // 启用静态导出
  output: 'export',
  
  // 图片优化配置（静态导出时禁用）
  images: {
    unoptimized: true,
  },
  
  // 尾部斜杠配置（可选，根据需要开启）
  trailingSlash: false,
  
  // 严格模式
  reactStrictMode: true,
}

export default nextConfig
