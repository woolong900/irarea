'use client'

import Script from 'next/script'

// Google Analytics 4 Measurement ID
const GA4_ID = 'G-P4XY2H8S1Q'
// Google Ads 转化 ID
const GOOGLE_ADS_ID = 'AW-17913964427'

export default function GoogleAnalytics() {
  return (
    <>
      {/* Google tag (gtag.js) - 使用 GA4 ID 加载 */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          // 配置 GA4
          gtag('config', '${GA4_ID}', {
            page_title: document.title,
            page_location: window.location.href,
          });
          
          // 配置 Google Ads
          gtag('config', '${GOOGLE_ADS_ID}');
        `}
      </Script>
    </>
  )
}

// 转化追踪辅助函数
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
    dataLayer: unknown[]
  }
}

// 表单提交转化
export function trackFormSubmission(formName: string = 'contact_form') {
  if (typeof window !== 'undefined' && window.gtag) {
    // Google Ads 转化事件 - 表单提交
    window.gtag('event', 'conversion', {
      send_to: 'AW-17913964427/8UEsCKSe_e4bEIvPhd5C',
      value: 10.0,
      currency: 'USD',
    })
    
    // 同时发送 generate_lead 事件用于分析
    window.gtag('event', 'generate_lead', {
      event_category: 'engagement',
      event_label: formName,
      value: 10,
      currency: 'USD',
    })
    
    console.log('Form submission conversion tracked:', formName)
  }
}

// WhatsApp 点击转化
export function trackWhatsAppClick() {
  if (typeof window !== 'undefined' && window.gtag) {
    // Google Ads 转化事件 - WhatsApp 点击
    window.gtag('event', 'conversion', {
      send_to: 'AW-17913964427/AE6JCIC2_e4bEIvPhd5C',
      value: 5.0,
      currency: 'USD',
    })
    
    // 同时发送 contact 事件用于分析
    window.gtag('event', 'contact', {
      event_category: 'engagement',
      event_label: 'whatsapp_click',
      value: 5,
      currency: 'USD',
    })
    
    console.log('WhatsApp click conversion tracked')
  }
}

// 产品页面浏览
export function trackProductView(productId: string, productName: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'view_item', {
      currency: 'USD',
      value: 0,
      items: [
        {
          item_id: productId,
          item_name: productName,
        },
      ],
    })
  }
}

// 自定义事件追踪
export function trackCustomEvent(eventName: string, parameters?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters)
  }
}
