'use client';

import { useEffect, useRef } from 'react';

export function Services() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

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
      id: 1,
      title: 'UI/UX Design',
      description:
        'Criando interfaces intuitivas e experiências de usuário que encantam e convertem. De wireframes a protótipos interativos.',
      color: 'purple',
      tags: ['Wireframes', 'Protótipos', 'Teste de Usabilidade'],
      svgPath:
        'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    },
    {
      id: 2,
      title: 'Identidade visual',
      description:
        'Desenvolvendo marcas memoráveis e identidades visuais completas que comunicam a essência do seu negócio.',
      color: 'yellow',
      tags: ['Logotipo', 'Paleta de Cores', 'Tipografia'],
      svgPath:
        'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
    },
    {
      id: 3,
      title: 'Design de mídia social',
      description:
        'Criando conteúdo visual para redes sociais que engaja sua audiência e fortalece sua presença digital.',
      color: 'purple',
      tags: ['Publicações', 'Stories', 'Capas', 'Modelos'],
      svgPath:
        'M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z M15 13a3 3 0 11-6 0 3 3 0 016 0z',
    },
    {
      id: 4,
      title: 'Design de app',
      description:
        'Desenvolvendo interfaces de aplicativos móveis que combinam estética e funcionalidade para uma experiência excepcional.',
      color: 'yellow',
      tags: ['UI Móvel', 'Pesquisa de UX', 'Protótipos'],
      svgPath: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
    },
    {
      id: 5,
      title: 'Design web',
      description: 'Criando sites modernos, responsivos e otimizados que convertem visitantes em clientes.',
      color: 'purple',
      tags: ['Landing Pages', 'E-commerce', 'Blogs'],
      svgPath:
        'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    },
    {
      id: 6,
      title: 'Apresentação de design',
      description:
        'Desenvolvendo slides profissionais e visualmente impactantes para reuniões, palestras e treinamentos.',
      color: 'yellow',
      tags: ['PowerPoint', 'Modelos Personalizados'],
      svgPath:
        'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z',
    },
  ];

  const getCores = (index: number, invertido = false) => {
    const isPar = index % 2 === 0;
    const cor = invertido ? !isPar : isPar;

    return cor
      ? {
          gradiente: 'from-monteiro-purple to-monteiro-yellow',
          bgIcone: 'bg-monteiro-purple/10',
          corIcone: 'text-monteiro-purple',
        }
      : {
          gradiente: 'from-monteiro-yellow to-monteiro-purple',
          bgIcone: 'bg-monteiro-yellow/10',
          corIcone: 'text-monteiro-yellow',
        };
  };

  return (
    <section id="servicos" className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="font-godger text-monteiro-black text-4xl md:text-5xl lg:text-7xl reveal">
            Nossos <span className="font-godger text-monteiro-purple">serviços</span>
          </h2>
          <p className="font-helvetica text-monteiro-white/70 max-w-2xl mx-auto mt-6">
            Oferecemos uma gama completa de serviços de branding e design para ajudar o seu negócio a se destacar no
            mercado competitivo de hoje.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const cores = getCores(index);
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden h-full flex flex-col"
              >
                <div className={`h-2 bg-gradient-to-r ${cores.gradiente}`}></div>
                <div className="p-8 flex flex-col flex-grow justify-center items-center">
                  <div className={`w-16 h-16 ${cores.bgIcone} rounded-xl flex items-center justify-center mb-6`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className={`w-8 h-8 ${cores.corIcone}`}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.svgPath} />
                    </svg>
                  </div>
                  <h3 className={`${cores.corIcone} text-xl mb-3`}>{service.title}</h3>
                  <p className="text-monteiro-black/70 mb-6 flex-grow text-center">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag, i) => (
                      <span
                        key={i}
                        className={`${cores.bgIcone} ${cores.corIcone} text-xs font-bold px-3 py-1 rounded-full`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
