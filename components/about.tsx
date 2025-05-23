'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export function About() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

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
    if (textRef.current) observer.observe(textRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (textRef.current) observer.unobserve(textRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  return (
    <section id="about" className="py-20 md:py-32 bg-monteiro-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div ref={imageRef} className="relative h-[400px] md:h-[600px] reveal">
            <div
              className="absolute top-0 left-0 w-full h-full bg-monteiro-yellow -z-10 transform -translate-x-6 -translate-y-6 rounded-full
"
            />
            <Image
              src="/mbrand-logo-fundo-rosa.svg?height=600&width=500"
              alt="About MONTEIRO BRANDING"
              width={1920}
              height={1080}
              className="object-cover"
            />
          </div>

          <div className="space-y-8">
            <h2 ref={titleRef} className="font-godger text-4xl md:text-5xl lg:text-6xl reveal text-monteiro-black">
              Sobre <span className="font-godger text-monteiro-purple"> nós</span>
            </h2>

            <div ref={textRef} className="space-y-6 reveal">
              <p className="font-helvetica text-lg text-monteiro-black/80">
                Não somos apenas um estúdio de Identidade Visual e Branding — somos os autores da personalidade da sua
                marca.
              </p>

              <p className="font-helvetica text-lg text-monteiro-black/80">
                Aqui, a mesmice não tem vez. Acreditamos que cada negócio merece uma identidade única, feita sob medida,
                que cause impacto e não deixe ninguém indiferente.
              </p>

              <p className="font-helvetica text-lg text-monteiro-black/80">
                WMisturamos estratégia, criatividade e uma pitada de ousadia para dar vida a marcas autênticas que
                contam histórias reais — sem clichês, sem enrolação.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <p className="font-godger text-4xl text-monteiro-purple">7+</p>
                <p className="font-helvetica text-sm text-monteiro-black/80">Anos de experiência</p>
              </div>
              <div className="text-center">
                <p className="font-godger text-4xl text-monteiro-purple">15+</p>
                <p className="font-helvetica text-sm text-monteiro-black/80">Projetos entregues</p>
              </div>
              <div className="text-center">
                <p className="font-godger text-4xl text-monteiro-purple">20+</p>
                <p className="font-helvetica text-sm text-monteiro-black/80">Clientes felizes</p>
              </div>
              <div className="text-center">
                <p className="font-godger text-4xl text-monteiro-purple">100%</p>
                <p className="font-helvetica text-sm text-monteiro-black/80">Satisfação garantida</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
