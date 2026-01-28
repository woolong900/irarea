// 图片资源映射
// 产品图片存储在 /public/images/products/ 目录
// 网站通用图片优先使用本地图片，如需CDN可在注释中找到原始URL

// CDN 基础 URL (保留备用)
// const CDN_BASE = 'https://assets.zyrosite.com/YrDWE7VZMbhQ8enR'

export const IMAGES = {
  // Logo - 使用本地产品图作为占位
  logo: '/images/products/1746866251195-timo256-0.webp',
  logoAlt: '/images/products/1746866251195-timo256-0.webp',

  // 背景图片 - 使用产品图片代替（原CDN: about_us_bk-mxB4prD2DBCa5jVa.jpg）
  heroBg: '/images/hero-bg.webp',
  aboutBg: '/images/products/1746864108388-igs.webp',
  servicesBg: '/images/products/1746864280895-igs.webp',

  // 公司介绍图片 - 使用产品图片展示（原CDN: company-introduction1-A3Q2qp3ye9iMkkzG.jpg）
  companyIntro: '/images/products/1746864499485-twin1212-1.webp',
  
  // 应用场景图片 - 使用已下载的产品图片作为展示
  scenarios: {
    security: '/images/products/1746864108389-igs612-1.webp',
    thermography: '/images/products/1746866251195-timo256-0.webp', 
    firefighting: '/images/products/1746864499485-twin1212-1.webp',
  },

  // 工业解决方案图片 - 使用产品图片替代
  industrial: {
    drone: '/images/products/1746862250225-plug417r-0.webp',
    droneSupport: '/images/products/1746862021994-plug612r-0.webp',
    smartHome: '/images/products/1746865311727-coin612-thermal-module-1.webp',
    smartBuilding: '/images/products/1746865496952-coin417g2-1.webp',
    aiot: '/images/products/1746867654172-timo120-0.webp',
    hardware: '/images/products/1746776758459-new-plug1212-1.webp',
  },

  // 服务图片 - 使用产品图片替代
  services: {
    service1: '/images/products/1746863162635-itl612-g2-1.webp',
    service2: '/images/products/1746776409042-iha417w-1.webp',
  },
}

// 产品图片映射 - 使用本地下载的图片
export const PRODUCT_IMAGES: Record<string, string[]> = {
  timo256: [
    '/images/products/1746866251195-timo256-0.webp',
    '/images/products/1746866251196-timo256-1.webp',
    '/images/products/1746866251196-timo256-2.webp',
    '/images/products/1746866251196-timo256-3.webp',
    '/images/products/1746866251196-timo256-4.webp',
  ],
  timo120: [
    '/images/products/1746867654172-timo120-0.webp',
    '/images/products/1746867654173-timo120-1.webp',
    '/images/products/1746867654173-timo120-2.webp',
  ],
  igs412: [
    '/images/products/1746864280895-igs412-1.webp',
    '/images/products/1746864280896-igs412-2.webp',
    '/images/products/1746864280896-igs412-3.webp',
    '/images/products/1746864280896-igs412-4.webp',
  ],
  igs612: [
    '/images/products/1746864108389-igs612-1.webp',
    '/images/products/1746864108389-igs612-2.webp',
    '/images/products/1746864108389-igs612-3.webp',
    '/images/products/1746864108389-igs612-4.webp',
    '/images/products/1746864108389-igs612-5.webp',
  ],
  twin412: [
    '/images/products/1746865015987-twin-11.webp',
    '/images/products/1746865015988-twin412-1.webp',
    '/images/products/1746865015989-twin412-2.webp',
    '/images/products/1746865015989-twin412-3.webp',
  ],
  twin612: [
    '/images/products/1746864645504-twin-1.webp',
    '/images/products/1746864645504-twin612-1.webp',
    '/images/products/1746864645504-twin612-2.webp',
    '/images/products/1746864645504-twin612-3.webp',
  ],
  twin1212: [
    '/images/products/1746864499485-twin1212-1.webp',
    '/images/products/1746864499486-twin1212-2.webp',
    '/images/products/1746864499486-twin1212-3.webp',
    '/images/products/1746864499486-twin1212-4.webp',
    '/images/products/1746864499486-twin1212-5.webp',
  ],
  plug417r: [
    '/images/products/1746862250225-plug417r-0.webp',
    '/images/products/1746862250226-plug417r-1.webp',
    '/images/products/1746862250226-plug417r-2.webp',
    '/images/products/1746862250226-plug417r-3.webp',
  ],
  plug612r: [
    '/images/products/1746862021994-plug612r-0.webp',
    '/images/products/1746862021995-plug612r-1.webp',
    '/images/products/1746862021995-plug612r-2.webp',
    '/images/products/1746862021995-plug612r-3.webp',
  ],
  plug617r: [
    '/images/products/1746860824674-plug617r-0.webp',
    '/images/products/1746860838143-plug617r-1.webp',
    '/images/products/1746860852863-plug617r-2.webp',
    '/images/products/1746860852864-plug617r-3.webp',
  ],
  plug1212r: [
    '/images/products/1746776758459-new-plug1212-1.webp',
    '/images/products/1746776789630-plug1212r-4.webp',
  ],
  coin612: [
    '/images/products/1746865311727-coin612-thermal-module-1.webp',
    '/images/products/1746865311728-coin612-thermal-module-2.webp',
    '/images/products/1746865311728-coin612-thermal-module-3.webp',
  ],
  coin417g2: [
    '/images/products/1746865496952-coin417g2-1.webp',
    '/images/products/1746865496952-coin417g2-2.webp',
    '/images/products/1746865496953-coin417g2-3.webp',
  ],
  mini212: [
    '/images/products/1749629651636-mini212g22.1mm.webp',
    '/images/products/1749629651637-mini212g210mm.webp',
    '/images/products/1749629651637-mini212g23.2mm.webp',
  ],
  min1212r: [
    '/images/products/1749628176947-_1749628140480.webp',
    '/images/products/1749628296038-_1749628281355.webp',
    '/images/products/1749628296040-_17496282694214.webp',
  ],
  ilc212: [
    '/images/products/0e6b34db-8271-4a91-9e23-3ed66d2bcab8.webp',
  ],
  'itl612r-pro': [
    '/images/products/1746863162635-itl612-g2-1.webp',
    '/images/products/1746863162633-itl612-2.webp',
    '/images/products/1746863162634-itl612-3.webp',
  ],
  iha417w: [
    '/images/products/1746776409042-iha417w-1.webp',
  ],
  iha417: [
    '/images/products/1746776602367-plug417s-0.webp',
  ],
  'idas-384s': [
    '/images/products/1746775425051-idas384s.webp',
  ],
  // XH Series (Cooled IR Modules)
  xh1207mb: [
    '/images/products/xh1207mb-0.webp',
    '/images/products/xh1207mb-1.webp',
    '/images/products/xh1207mb-3.webp',
    '/images/products/xh1207mb-4.webp',
  ],
  xh1210hmf: [
    '/images/products/xh1210hmf-0.webp',
    '/images/products/xh1210hmf-1.webp',
    '/images/products/xh1210hmf-3.webp',
  ],
  xh1210lc: [
    '/images/products/xh1210lc-0.webp',
    '/images/products/xh1210lc-1.webp',
    '/images/products/xh1210lc-3.webp',
    '/images/products/xh1210lc-4.webp',
  ],
  xh1212ma: [
    '/images/products/xh1212ma-0.webp',
    '/images/products/xh1212ma-1.webp',
    '/images/products/xh1212ma-3.webp',
    '/images/products/xh1212ma-4.webp',
  ],
  xh330: [
    '/images/products/xh330-0.webp',
    '/images/products/xh330-1.webp',
    '/images/products/xh330-3.webp',
    '/images/products/xh330-4.webp',
  ],
  xh615hmg: [
    '/images/products/xh615hmg-0.webp',
    '/images/products/xh615hmg-1.webp',
    '/images/products/xh615hmg-3.webp',
    '/images/products/xh615hmg-4.webp',
  ],
  xh615la: [
    '/images/products/xh615la-0.webp',
    '/images/products/xh615la-1.webp',
    '/images/products/xh615la-3.webp',
    '/images/products/xh615la-4.webp',
  ],
  xh615ma: [
    '/images/products/xh615ma-0.webp',
    '/images/products/xh615ma-1.webp',
    '/images/products/xh615ma-3.webp',
    '/images/products/xh615ma-4.webp',
  ],
  // YXW Series (Portable Thermal Cameras)
  yxw256: [
    '/images/YXW256-1.webp',
    '/images/YXW256-2.webp',
    '/images/YXW256-3.webp',
    '/images/YXW256-4.webp',
    '/images/YXW256-5.webp',
    '/images/YXW256-6.webp',
  ],
  // YXP Series (Compact Thermal Modules)
  yxp160: [
    '/images/YXP160-1.webp',
    '/images/YXP160-2.webp',
    '/images/YXP160-3.webp',
  ],
  yxp256: [
    '/images/YXP160-1.webp',
    '/images/YXP160-2.webp',
    '/images/YXP160-3.webp',
  ],
  // YXI Series (Handheld Thermal Imagers)
  yxi160: [
    '/images/YXI160-1.webp',
    '/images/YXI160-2.webp',
    '/images/YXI160-3.webp',
    '/images/YXI160-4.webp',
  ],
  yxi256: [
    '/images/YXI160-1.webp',
    '/images/YXI160-2.webp',
    '/images/YXI160-3.webp',
    '/images/YXI160-4.webp',
  ],
  yxi80: [
    '/images/yxi80-1.webp',
    '/images/yxi80-2.webp',
    '/images/yxi80-3.webp',
    '/images/yxi80-4.webp',
    '/images/yxi80-5.webp',
    '/images/yxi80-6.webp',
  ],
  yxi96: [
    '/images/yxi80-1.webp',
    '/images/yxi80-2.webp',
    '/images/yxi80-3.webp',
    '/images/yxi80-4.webp',
    '/images/yxi80-5.webp',
    '/images/yxi80-6.webp',
  ],
  'yxi96-pro': [
    '/images/yxi80-1.webp',
    '/images/yxi80-2.webp',
    '/images/yxi80-3.webp',
    '/images/yxi80-4.webp',
    '/images/yxi80-5.webp',
    '/images/yxi80-6.webp',
  ],
}

// 获取产品图片的辅助函数
export function getProductImages(productId: string): string[] {
  return PRODUCT_IMAGES[productId] || []
}

// 获取产品主图
export function getProductMainImage(productId: string): string | null {
  const images = PRODUCT_IMAGES[productId]
  return images && images.length > 0 ? images[0] : null
}
