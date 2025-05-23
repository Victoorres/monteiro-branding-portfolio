'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowDown, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const marqueeWords = ['BRANDING', 'DESIGN', 'STRATEGY', 'CREATIVITY', 'IDENTITY', 'INNOVATION', 'PASSION', 'VISION'];

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
    if (subtitleRef.current) observer.observe(subtitleRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (subtitleRef.current) observer.unobserve(subtitleRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  return (
    <>
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Image - Clouds */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 z-0">
            <Image
              src="/cloud.jpeg"
              alt="Background"
              width={1312}
              height={736}
              priority
              quality={90}
              className="w-full h-[63rem] md:h-full object-cover"
            />
          </div>
        </div>

        <div className="container-wide z-10 -mt-16 sm:-mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Logo Section */}
            <div className="w-64 h-64 relative">
              <Image
                src="/mbrand-logo.svg"
                alt="Logo"
                width={256}
                height={256}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Text Section */}
            <div className="space-y-2 text-center sm:text-left">
              <p className="text-monteiro-white font-godger text-2xl md:text-3xl">
                SOMOS UM ESTÚDIO DE <br />
                <span className="text-[#e2bfff] font-godger text-2xl md:text-3xl">
                  IDENTIDADE VISUAL <span className="font-godger text-monteiro-white">PARA</span>
                </span>
              </p>

              <p className="text-4xl md:text-5xl font-godger text-monteiro-yellow leading-tight">
                MULHERES
                <br />
                EMPREENDEDORAS
                <br />
                <span className="font-godger text-[#464545]">
                  COM MARCAS <br /> AUTÊNTICAS
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="py-8 bg-monteiro-black text-monteiro-white overflow-hidden">
        <div className="marquee">
          <div className="marquee-content">
            {marqueeWords.map((word, index) => (
              <span key={index} className="font-godger text-6xl md:text-8xl mx-8">
                {word}
              </span>
            ))}
            {marqueeWords.map((word, index) => (
              <span key={`repeat-${index}`} className="font-godger text-6xl md:text-8xl mx-8">
                {word}
              </span>
            ))}
          </div>
        </div>
      </div>

      <section id="home" className="relative min-h-screen flex items-center pt-10 overflow-hidden bg-monteiro-white">
        <div className="absolute top-0 right-0 w-1/2 h-screen bg-monteiro-purple/20 -z-10" />

        <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center pb-[25vh] sm:pb-[45vh]">
          <div className="space-y-8">
            <h1 ref={titleRef} className="font-godger text-5xl md:text-7xl lg:text-8xl reveal text-monteiro-black">
              Marcas que <span className="font-godger text-monteiro-purple">colam </span>igual figurinha
              <span className="font-godger text-monteiro-yellow"> rara</span>!
            </h1>

            <p
              ref={subtitleRef}
              className="font-helvetica text-lg md:text-xl text-monteiro-black/80 max-w-md reveal italic"
            >
              “Somos um estúdio criativo, especializado em Identidade Visual e Branding. Criamos marcas autênticas,
              cheias de personalidade, que chamam atenção e ficam na memória. Acreditamos que toda marca deve expressar
              sua essência de forma única e marcante — e é exatamente isso que entregamos!”
            </p>
          </div>

          <div ref={imageRef} className="relative h-[400px] md:h-[600px] reveal">
            <div className="relative z-10">
              <div className="absolute inset-0 bg-white rounded-3xl transform rotate-3 shadow-xl" />
              <div className="relative bg-gradient-to-br from-white to-white/90 rounded-3xl p-6 pb-12 backdrop-blur-sm border border-white/40 shadow-lg">
                <Image
                  src="/hanna.jpg?height=400&width=400"
                  alt="Foto de perfil"
                  width={400}
                  height={400}
                  className="rounded-2xl w-full h-auto shadow-lg"
                />

                {/* Image caption */}
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-[#464545] px-6 py-2 rounded-full shadow-lg z-20">
                  <p className="font-godger text-sm text-white whitespace-nowrap">Hanna Monteiro</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
