'use client';

import { useEffect, useRef, useState } from 'react';
import { Palette, Layers, Globe, Camera, PenTool, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Services() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const [activeService, setActiveService] = useState<number | null>(null);

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
    if (servicesRef.current) observer.observe(servicesRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (servicesRef.current) observer.unobserve(servicesRef.current);
    };
  }, []);

  const services = [
    {
      icon: <Palette className="h-10 w-10" />,
      title: 'Identidade Visual',
      description:
        'Criamos identidades visuais completas, que incluem logotipos, paletas de cores, tipografia e sistemas visuais que capturam a essência do seu negócio e conectam com o seu público.',
      examples: ['Logotipo', 'Identidade', 'Manual', 'Estratégia'],
    },
    {
      icon: <Layers className="h-10 w-10" />,
      title: 'Design de Embalagem',
      description:
        'Desenvolvemos embalagens impactantes, que se destacam nas prateleiras e comunicam a proposta de valor da sua marca, criando experiências inesquecíveis para o consumidor.',
      examples: ['Embalagem', 'Rótulo', 'Caixa', 'Sustentabilidade'],
    },
    {
      icon: <Globe className="h-10 w-10" />,
      title: 'Design de Sites',
      description:
        'Sites bonitos e funcionais, que proporcionam experiências intuitivas e transmitem de forma clara a identidade da sua marca, combinando estética, navegação fluida e conteúdo relevante.',
      examples: ['Website', 'UI/UX', 'E-commerce', 'Aplicativo'],
    },
    {
      icon: <Camera className="h-10 w-10" />,
      title: 'Direção de Arte',
      description:
        'Orientação criativa estratégica para ensaios fotográficos, campanhas e outros projetos, garantindo uma narrativa visual coesa e impactante em todos os pontos de contato da marca.',
      examples: ['Fotografia', 'Campanha', 'Storytelling', 'Conceito'],
    },
    {
      icon: <PenTool className="h-10 w-10" />,
      title: 'Ilustração',
      description:
        'Ilustrações personalizadas que adicionam personalidade e originalidade à comunicação da sua marca, criando ativos visuais únicos que a destacam no mercado.',
      examples: ['Ilustração', 'Personagem', 'Infográfico', 'Editorial'],
    },
    {
      icon: <MessageSquare className="h-10 w-10" />,
      title: 'Estratégia de Marca',
      description:
        'Pensamento estratégico para alinhar a identidade visual aos objetivos do seu negócio e ao público ideal, criando uma base sólida para uma comunicação consistente e eficaz.',
      examples: ['Posicionamento', 'Público', 'Concorrência', 'Mensagem'],
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-monteiro-black text-monteiro-white overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-monteiro-purple blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 rounded-full bg-monteiro-yellow blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-monteiro-purple/30 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <p className="font-helvetica text-monteiro-purple mb-4 tracking-wider uppercase">O que fazemos</p>
          <h2 ref={titleRef} className="font-godger text-4xl md:text-5xl lg:text-7xl reveal">
            Nossos <span className="font-godger text-monteiro-yellow">serviços</span>
          </h2>
          <p className="font-helvetica text-monteiro-white/70 max-w-2xl mx-auto mt-6">
            Oferecemos uma gama completa de serviços de branding e design para ajudar o seu negócio a se destacar no
            mercado competitivo de hoje.
          </p>
        </div>

        <div ref={servicesRef} className="reveal">
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              // Alternando cores: índices pares (0, 2, 4) são roxo, ímpares (1, 3, 5) são amarelo
              const isPurple = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={cn(
                    'group relative overflow-hidden rounded-2xl transition-all duration-500',
                    activeService === index ? 'scale-[1.02]' : ''
                  )}
                  onMouseEnter={() => setActiveService(index)}
                  onMouseLeave={() => setActiveService(null)}
                >
                  <div
                    className={cn(
                      'absolute inset-0 bg-gradient-to-br transition-all duration-500',
                      isPurple
                        ? 'from-monteiro-purple/20 to-monteiro-black'
                        : 'from-monteiro-yellow/20 to-monteiro-black'
                    )}
                  ></div>

                  <div className="relative z-10 p-8 h-full flex flex-col">
                    <div
                      className={cn(
                        'mb-6 p-4 rounded-xl inline-flex items-center justify-center w-16 h-16 transition-all duration-300',
                        isPurple
                          ? 'bg-monteiro-purple/20 text-monteiro-purple'
                          : 'bg-monteiro-yellow/20 text-monteiro-yellow',
                        activeService === index ? 'scale-110' : ''
                      )}
                    >
                      {service.icon}
                    </div>

                    <h3
                      className={cn(
                        'font-godger text-2xl md:text-3xl mb-4 transition-colors duration-300',
                        isPurple
                          ? 'text-monteiro-white group-hover:text-monteiro-purple'
                          : 'text-monteiro-white group-hover:text-monteiro-yellow'
                      )}
                    >
                      {service.title}
                    </h3>

                    <p className="font-helvetica text-monteiro-white/80 mb-6 flex-grow">{service.description}</p>

                    <div
                      className={cn(
                        'grid grid-cols-2 gap-2 transition-all duration-500 max-h-0 opacity-0 overflow-hidden',
                        activeService === index ? 'max-h-40 opacity-100 mt-4' : ''
                      )}
                    >
                      {service.examples.map((example, i) => (
                        <div
                          key={i}
                          className={cn(
                            'text-sm font-helvetica py-2 px-3 rounded-full text-center transition-all duration-300',
                            isPurple
                              ? 'bg-monteiro-purple/20 text-monteiro-purple border border-monteiro-purple/30'
                              : 'bg-monteiro-yellow/20 text-monteiro-yellow border border-monteiro-yellow/30'
                          )}
                        >
                          {example}
                        </div>
                      ))}
                    </div>

                    <div
                      className={cn(
                        'w-full h-1 mt-6 rounded-full overflow-hidden',
                        activeService === index ? 'opacity-100' : 'opacity-30'
                      )}
                    >
                      <div
                        className={cn(
                          'h-full transition-all duration-700',
                          isPurple ? 'bg-monteiro-purple' : 'bg-monteiro-yellow',
                          activeService === index ? 'w-full' : 'w-0'
                        )}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-monteiro-white/10 to-transparent"></div>
    </section>
  );
}
