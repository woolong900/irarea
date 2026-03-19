'use client'

import { trackWhatsAppClick } from './GoogleAnalytics'

interface Props {
  label: string
}

export default function WhatsAppCta({ label }: Props) {
  const phoneNumber = '8613385207064'
  const whatsappUrl = `https://wa.me/${phoneNumber}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsAppClick()}
      className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium rounded-md bg-[#25D366] text-white hover:bg-[#20BA5A] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366]"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-white flex-shrink-0">
        <path d="M16.004 0C7.165 0 .002 7.163.002 16c0 2.825.736 5.58 2.137 8.012L.015 32l8.203-2.15A15.94 15.94 0 0 0 16.004 32C24.843 32 32 24.837 32 16S24.843 0 16.004 0zm0 29.333a13.28 13.28 0 0 1-6.784-1.86l-.487-.29-5.046 1.324 1.348-4.92-.317-.505A13.27 13.27 0 0 1 2.67 16c0-7.352 5.982-13.333 13.334-13.333S29.337 8.648 29.337 16s-5.981 13.333-13.333 13.333zm7.31-9.982c-.4-.2-2.367-1.168-2.733-1.302-.367-.133-.633-.2-.9.2-.267.4-1.033 1.302-1.267 1.568-.233.267-.467.3-.867.1-.4-.2-1.69-.623-3.22-1.987-1.19-1.062-1.993-2.373-2.227-2.773-.233-.4-.025-.617.175-.817.18-.18.4-.467.6-.7.2-.233.267-.4.4-.667.133-.267.067-.5-.033-.7-.1-.2-.9-2.167-1.233-2.967-.325-.78-.655-.675-.9-.687-.233-.012-.5-.015-.767-.015s-.7.1-1.067.5c-.367.4-1.4 1.368-1.4 3.335s1.433 3.868 1.633 4.135c.2.267 2.82 4.31 6.833 6.043.955.412 1.7.658 2.28.842.958.305 1.83.262 2.52.16.77-.115 2.367-.968 2.7-1.902.333-.935.333-1.735.233-1.902-.1-.167-.367-.267-.767-.467z" />
      </svg>
      {label}
    </a>
  )
}
