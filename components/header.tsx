"use client"

import Link from "next/link"
import { Star } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

const navItems = [
  { name: "HOME", href: "#home" },
  { name: "SOBRE", href: "#sobre" },
  { name: "PROJETOS", href: "#projetos" },
  { name: "EXPERIÊNCIA", href: "#experiencia" },
  { name: "CONTATO", href: "#contato" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-[#e7eaa1] border-b border-[#464545] py-4"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <span className="font-godger text-xl text-[#464545]">MONTEIRO BRANDING</span>
          </motion.div>

          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ y: -3 }}
              >
                <Link href={item.href} className="font-godger text-[#464545] hover:text-[#e2bfff] transition-colors">
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="md:hidden">
            <motion.button
              className="w-8 h-8 flex flex-col justify-center items-center space-y-1.5"
              onClick={toggleMenu}
              whileTap={{ scale: 0.9 }}
            >
              <motion.span
                className="block w-5 h-0.5 bg-[#464545]"
                animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
              ></motion.span>
              <motion.span className="block w-5 h-0.5 bg-[#464545]" animate={{ opacity: isOpen ? 0 : 1 }}></motion.span>
              <motion.span
                className="block w-5 h-0.5 bg-[#464545]"
                animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
              ></motion.span>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden absolute top-full left-0 right-0 bg-[#f5f3e7] border-b border-[#464545] py-4"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Link
                    href={item.href}
                    className="font-godger text-[#464545] hover:text-[#e2bfff] transition-colors block py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
