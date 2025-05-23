'use client';

import { useEffect, useRef } from 'react';
import { Quote } from 'lucide-react';

export function Testimonials() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (testimonialsRef.current) observer.observe(testimonialsRef.current);
    if (marqueeRef.current) observer.observe(marqueeRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (testimonialsRef.current) observer.unobserve(testimonialsRef.current);
      if (marqueeRef.current) observer.unobserve(marqueeRef.current);
    };
  }, []);

  const testimonials = [
    {
      quote:
        'A MONTEIRO BRANDING transformou a identidade visual da nossa empresa. Sua abordagem criativa e estratégica nos ajudou a conectar com nosso público de um jeito totalmente novo.',
      author: 'Maria Silva',
      company: 'CEO, Bloom Cosmetics',
    },
    {
      quote:
        'Trabalhar com o time da MONTEIRO foi um divisor de águas para nossa marca. Eles entenderam perfeitamente nossa visão e a tornaram realidade com um design impressionante.',
      author: 'João Pereira',
      company: 'Fundador, Nomad Coffee',
    },
    {
      quote:
        'O time da MONTEIRO BRANDING é extremamente profissional. Sua atenção aos detalhes e soluções criativas superaram todas as nossas expectativas.',
      author: 'Ana Costa',
      company: 'Diretora de Marketing, Zenith Tech',
    },
  ];

 const marqueeWords = ["BRANDING", "DESIGN", "STRATEGY", "CREATIVITY", "IDENTITY", "INNOVATION", "PASSION", "VISION"]

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="font-godger text-4xl md:text-5xl lg:text-6xl text-monteiro-black reveal">
            Depoimentos dos meus <span className="font-godger text-monteiro-purple">clientes</span>
          </h2>
        </div>

        <div ref={testimonialsRef} className="grid md:grid-cols-3 gap-8 reveal">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-monteiro-white p-8 rounded-lg shadow-lg">
              <Quote className="h-10 w-10 text-monteiro-purple mb-4" />
              <p className="font-helvetica text-lg mb-6 text-monteiro-black">{testimonial.quote}</p>
              <div>
                <p className="font-godger text-xl text-monteiro-black">{testimonial.author}</p>
                <p className="font-helvetica text-sm text-monteiro-black/70">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
