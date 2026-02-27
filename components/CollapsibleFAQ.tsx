'use client'

import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string | null
  list: string[] | null
}

interface CollapsibleFAQProps {
  faqs: FAQItem[]
}

export function CollapsibleFAQ({ faqs }: CollapsibleFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="bg-neutral-50 rounded-lg border border-neutral-200 overflow-hidden"
        >
          <button
            onClick={() => toggle(index)}
            className="w-full flex items-center justify-between p-6 text-left hover:bg-neutral-100 transition-colors"
          >
            <h3 className="text-lg font-semibold text-neutral-900 pr-4">
              {faq.question}
            </h3>
            <svg
              className={`w-5 h-5 text-neutral-500 flex-shrink-0 transition-transform duration-200 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? 'max-h-96' : 'max-h-0'
            }`}
          >
            <div className="px-6 pb-6">
              {faq.answer && (
                <p className="text-neutral-600 leading-relaxed">{faq.answer}</p>
              )}
              {faq.list && (
                <ul className="list-disc list-inside text-neutral-600 space-y-1">
                  {faq.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
