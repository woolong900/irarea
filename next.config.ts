import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./lib/i18n/request.ts')

const nextConfig: NextConfig = {
  // 启用静态导出
  output: 'export',
  
  // 图片优化配置（静态导出时禁用）
  images: {
    unoptimized: true,
  },
  
  // 尾部斜杠配置 - 必须开启以生成正确的目录结构
  // 这样会生成 /de/index.html 而不是 /de.html
  trailingSlash: true,
  
  // 严格模式
  reactStrictMode: true,
}

export default withNextIntl(nextConfig)
