'use client'

import { useState, FormEvent } from 'react'
import Button from './Button'

// 替换为您的 Formspree 表单 ID
const FORMSPREE_ID = 'YOUR_FORM_ID'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      
      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: '', email: '', message: '' })
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      alert('Failed to submit form. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h4 className="text-xl font-semibold text-neutral-900 mb-2">Message Sent!</h4>
        <p className="text-neutral-600 mb-6">
          Thank you for your inquiry. We will get back to you soon.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="text-primary-600 hover:text-primary-700 font-medium transition-colors"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div>
        <label htmlFor="name" className="label">
          Name*
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="input"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="label">
          Email*
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="input"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="label">
          Message*
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={3}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="input resize-none"
          placeholder="How can we help you?"
        />
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </Button>
    </form>
  )
}
