"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function Projects() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)

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
    if (projectsRef.current) observer.observe(projectsRef.current)

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current)
      if (projectsRef.current) observer.unobserve(projectsRef.current)
    }
  }, [])

  const projects = [
    {
      title: "Bloom Cosmetics",
      category: "Brand Identity",
      image: "/placeholder.svg?height=600&width=800",
      link: "#",
    },
    {
      title: "Nomad Coffee",
      category: "Packaging Design",
      image: "/placeholder.svg?height=600&width=800",
      link: "#",
    },
    {
      title: "Pulse Fitness",
      category: "Brand Identity & Web Design",
      image: "/placeholder.svg?height=600&width=800",
      link: "#",
    },
    {
      title: "Harvest Market",
      category: "Brand Identity & Packaging",
      image: "/placeholder.svg?height=600&width=800",
      link: "#",
    },
    {
      title: "Zenith Tech",
      category: "Brand Identity & Digital",
      image: "/placeholder.svg?height=600&width=800",
      link: "#",
    },
    {
      title: "Lumen Festival",
      category: "Brand Identity & Print",
      image: "/placeholder.svg?height=600&width=800",
      link: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 md:py-32 bg-monteiro-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="font-godger text-4xl md:text-5xl lg:text-6xl reveal text-monteiro-black">
            Nossos <span className="font-godger text-monteiro-purple">projetos</span>
          </h2>
        </div>

        <div ref={projectsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 reveal">
          {projects.map((project, index) => (
            <Link key={index} href={project.link} className="project-card group">
              <div className="relative h-[300px] md:h-[400px] overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-monteiro-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-monteiro-white">
                    <p className="font-helvetica text-sm">{project.category}</p>
                    <div className="flex items-center justify-between">
                      <h3 className="font-godger text-2xl">{project.title}</h3>
                      <ArrowUpRight className="h-5 w-5 text-monteiro-yellow" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
