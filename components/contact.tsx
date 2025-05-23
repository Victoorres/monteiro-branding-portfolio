"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Instagram, Twitter, Linkedin, Facebook, Send, CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"

export function Contact() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const infoRef = useRef<HTMLDivElement>(null)
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (titleRef.current) observer.observe(titleRef.current)
    if (formRef.current) observer.observe(formRef.current)
    if (infoRef.current) observer.observe(infoRef.current)

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current)
      if (formRef.current) observer.unobserve(formRef.current)
      if (infoRef.current) observer.unobserve(infoRef.current)
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-monteiro-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-monteiro-purple/20 blur-2xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-monteiro-yellow/20 blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-monteiro-purple/10 blur-xl"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <p className="font-helvetica text-monteiro-purple mb-4 tracking-wider uppercase">Get in touch</p>
          <h2 ref={titleRef} className="font-godger text-4xl md:text-5xl lg:text-6xl reveal gradient-text">
            Let's Connect
          </h2>
          <p className="font-helvetica text-monteiro-black/70 max-w-2xl mx-auto mt-6">
            Ready to transform your brand? We're excited to hear about your project and explore how we can help bring
            your vision to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <form
            ref={formRef}
            className="space-y-6 reveal bg-white rounded-2xl p-8 shadow-xl border border-monteiro-purple/10"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="font-helvetica text-sm text-monteiro-black font-medium">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="border-monteiro-black/20 focus:border-monteiro-purple bg-monteiro-white text-monteiro-black"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="font-helvetica text-sm text-monteiro-black font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  className="border-monteiro-black/20 focus:border-monteiro-purple bg-monteiro-white text-monteiro-black"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="font-helvetica text-sm text-monteiro-black font-medium">
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                value={formState.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="border-monteiro-black/20 focus:border-monteiro-purple bg-monteiro-white text-monteiro-black"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="font-helvetica text-sm text-monteiro-black font-medium">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                className="min-h-[150px] border-monteiro-black/20 focus:border-monteiro-purple bg-monteiro-white text-monteiro-black"
                required
              />
            </div>

            <Button
              type="submit"
              className={cn(
                "w-full transition-all duration-300 relative overflow-hidden group",
                isSubmitted
                  ? "bg-green-500 hover:bg-green-600"
                  : "bg-monteiro-purple hover:bg-monteiro-purple/90 text-monteiro-black",
              )}
              disabled={isSubmitting || isSubmitted}
            >
              <span
                className={cn(
                  "flex items-center gap-2 transition-all duration-300",
                  isSubmitting ? "opacity-0" : "opacity-100",
                  isSubmitted ? "opacity-0" : "opacity-100",
                )}
              >
                Send Message
                <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>

              {isSubmitting && (
                <span className="absolute inset-0 flex items-center justify-center">
                  <svg
                    className="animate-spin h-5 w-5 text-monteiro-black"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                </span>
              )}

              {isSubmitted && (
                <span className="absolute inset-0 flex items-center justify-center text-white">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Message Sent!
                </span>
              )}
            </Button>

            {isSubmitted && (
              <p className="text-green-600 text-sm text-center font-medium">
                Thank you for your message! We'll get back to you soon.
              </p>
            )}
          </form>

          <div ref={infoRef} className="space-y-8 reveal">
            <div className="bg-gradient-to-br from-monteiro-purple/20 to-monteiro-purple/5 p-8 rounded-2xl shadow-lg border border-monteiro-purple/20 float-animation">
              <h3 className="font-godger text-2xl mb-6 text-monteiro-black">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-monteiro-purple/20 p-3 rounded-full">
                    <MapPin className="h-5 w-5 text-monteiro-purple" />
                  </div>
                  <div>
                    <p className="font-helvetica font-medium text-monteiro-black">Our Location</p>
                    <p className="font-helvetica text-monteiro-black/70">Av. Paulista, 1000, São Paulo, Brazil</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-monteiro-purple/20 p-3 rounded-full">
                    <Phone className="h-5 w-5 text-monteiro-purple" />
                  </div>
                  <div>
                    <p className="font-helvetica font-medium text-monteiro-black">Phone Number</p>
                    <p className="font-helvetica text-monteiro-black/70">+55 11 9999-9999</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-monteiro-purple/20 p-3 rounded-full">
                    <Mail className="h-5 w-5 text-monteiro-purple" />
                  </div>
                  <div>
                    <p className="font-helvetica font-medium text-monteiro-black">Email Address</p>
                    <p className="font-helvetica text-monteiro-black/70">hello@monteirobranding.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="float-animation-delay-1">
              <h3 className="font-godger text-2xl mb-6 text-monteiro-black">Follow Us</h3>
              <div className="grid grid-cols-4 gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-monteiro-black/20 hover:border-monteiro-purple hover:bg-monteiro-purple/10 text-monteiro-black h-14 w-14"
                >
                  <Instagram className="h-6 w-6" />
                  <span className="sr-only">Instagram</span>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-monteiro-black/20 hover:border-monteiro-purple hover:bg-monteiro-purple/10 text-monteiro-black h-14 w-14"
                >
                  <Twitter className="h-6 w-6" />
                  <span className="sr-only">Twitter</span>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-monteiro-black/20 hover:border-monteiro-purple hover:bg-monteiro-purple/10 text-monteiro-black h-14 w-14"
                >
                  <Linkedin className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-monteiro-black/20 hover:border-monteiro-purple hover:bg-monteiro-purple/10 text-monteiro-black h-14 w-14"
                >
                  <Facebook className="h-6 w-6" />
                  <span className="sr-only">Facebook</span>
                </Button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-monteiro-yellow/20 to-monteiro-yellow/5 p-6 rounded-2xl shadow-lg border border-monteiro-yellow/20 float-animation-delay-2">
              <h3 className="font-godger text-xl mb-3 text-monteiro-black">Office Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <p className="font-helvetica text-monteiro-black/80">Monday - Friday:</p>
                  <p className="font-helvetica font-medium text-monteiro-black">9:00 AM - 6:00 PM</p>
                </div>
                <div className="flex justify-between">
                  <p className="font-helvetica text-monteiro-black/80">Saturday:</p>
                  <p className="font-helvetica font-medium text-monteiro-black">By appointment</p>
                </div>
                <div className="flex justify-between">
                  <p className="font-helvetica text-monteiro-black/80">Sunday:</p>
                  <p className="font-helvetica font-medium text-monteiro-black">Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative bottom line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-monteiro-purple/40 to-transparent"></div>
    </section>
  )
}
