"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-monteiro-black text-monteiro-white py-12 md:py-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/placeholder.svg?height=60&width=180"
                alt="MONTEIRO BRANDING"
                width={180}
                height={60}
                className="h-12 w-auto"
              />
            </Link>
            <p className="font-helvetica text-monteiro-white/70 max-w-md">
              MONTEIRO BRANDING transforms ideas into powerful visual identities that connect with your audience and
              drive business results.
            </p>
          </div>

          <div>
            <h4 className="font-godger text-xl mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#home"
                  className="font-helvetica text-monteiro-white/70 hover:text-monteiro-purple transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="font-helvetica text-monteiro-white/70 hover:text-monteiro-purple transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="font-helvetica text-monteiro-white/70 hover:text-monteiro-purple transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="font-helvetica text-monteiro-white/70 hover:text-monteiro-purple transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="font-helvetica text-monteiro-white/70 hover:text-monteiro-purple transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-godger text-xl mb-6">Newsletter</h4>
            <p className="font-helvetica text-monteiro-white/70 mb-4">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="bg-monteiro-black border border-monteiro-white/20 rounded-md px-4 py-2 text-sm w-full focus:outline-none focus:border-monteiro-purple text-monteiro-white"
              />
              <Button className="bg-monteiro-purple hover:bg-monteiro-purple/80 text-monteiro-black">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-monteiro-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="font-helvetica text-sm text-monteiro-white/50">
            © {currentYear} MONTEIRO BRANDING. All rights reserved.
          </p>

          <Button
            variant="outline"
            size="icon"
            className="mt-4 md:mt-0 rounded-full border-monteiro-white/20 hover:border-monteiro-purple hover:bg-monteiro-purple/10"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <ArrowUp className="h-5 w-5" />
            <span className="sr-only">Back to top</span>
          </Button>
        </div>
      </div>
    </footer>
  )
}
