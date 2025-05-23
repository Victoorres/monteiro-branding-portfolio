'use client';

import { useEffect, useRef, useState } from 'react';
import { Coffee, Users, Briefcase, Clock, Heart, Lightbulb, Zap, Star, Quote } from 'lucide-react';

export function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedNumbers, setAnimatedNumbers] = useState({
    projects: 0,
    clients: 0,
    coffee: 0,
    hours: 0,
    awards: 0,
    ideas: 0,
  });
  const designerQuotes = [
    {
      quote: 'Design não é apenas como parece e como se sente. Design é como funciona.',
      author: 'Steve Jobs',
    },
    {
      quote: 'Bom design é óbvio. Ótimo design é transparente.',
      author: 'Joe Sparano',
    },
    {
      quote: 'Design é inteligência tornada visível.',
      author: 'Alina Wheeler',
    },
    {
      quote: 'Simplicidade é a sofisticação suprema.',
      author: 'Leonardo da Vinci',
    },
  ];

  const randomQuote = designerQuotes[Math.floor(Math.random() * designerQuotes.length)];

  const stats = [
    {
      icon: <Briefcase className="h-8 w-8" />,
      number: 127,
      suffix: '+',
      label: 'Projetos Concluídos',
      description: 'E contando...',
      color: 'purple',
    },
    {
      icon: <Users className="h-8 w-8" />,
      number: 89,
      suffix: '+',
      label: 'Clientes Satisfeitos',
      description: 'Que voltaram pra mais',
      color: 'yellow',
    },
    {
      icon: <Coffee className="h-8 w-8" />,
      number: 4847,
      suffix: '+',
      label: 'Cafés Tomados',
      description: 'Combustível da criatividade',
      color: 'purple',
    },
    {
      icon: <Clock className="h-8 w-8" />,
      number: 12500,
      suffix: '+',
      label: 'Horas de Trabalho',
      description: 'Pura dedicação',
      color: 'yellow',
    },
    {
      icon: <Heart className="h-8 w-8" />,
      number: 156,
      suffix: '+',
      label: 'Corações Conquistados',
      description: 'Através do design',
      color: 'purple',
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      number: 2341,
      suffix: '+',
      label: 'Ideias Brilhantes',
      description: 'Algumas até funcionaram',
      color: 'yellow',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            animateNumbers();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  const animateNumbers = () => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setAnimatedNumbers({
        projects: Math.floor(127 * progress),
        clients: Math.floor(89 * progress),
        coffee: Math.floor(4847 * progress),
        hours: Math.floor(12500 * progress),
        awards: Math.floor(156 * progress),
        ideas: Math.floor(2341 * progress),
      });

      if (currentStep >= steps) {
        clearInterval(interval);
        setAnimatedNumbers({
          projects: 4,
          clients: 5,
          coffee: 20,
          hours: 500,
          awards: 100,
          ideas: 5,
        });
      }
    }, stepDuration);
  };

  const getAnimatedValue = (index: number) => {
    const values = [
      animatedNumbers.projects,
      animatedNumbers.clients,
      animatedNumbers.coffee,
      animatedNumbers.hours,
      animatedNumbers.awards,
      animatedNumbers.ideas,
    ];
    return values[index];
  };

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-monteiro-white relative overflow-hidden">
      {/* Background decorative elements - mais visíveis */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-monteiro-purple/30 blur-2xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-monteiro-yellow/30 blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-monteiro-purple/20 blur-xl"></div>
        <div className="absolute top-20 left-1/2 w-28 h-28 rounded-full bg-monteiro-yellow/20 blur-xl"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-12">
          <p className="font-helvetica text-monteiro-black/80 mb-4 tracking-wider uppercase text-sm font-medium">
            Nossos números
          </p>
          <h2 className="font-godger text-3xl md:text-4xl lg:text-5xl text-monteiro-black">
            Alguns <span className="font-godger text-monteiro-purple">números</span> que nos{' '}
            <span className="font-godger text-monteiro-yellow">orgulham</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl p-8 transition-all duration-500 hover:scale-105 hover:-translate-y-2 shadow-lg hover:shadow-2xl ${
                stat.color === 'purple'
                  ? 'bg-gradient-to-br from-monteiro-purple/25 to-monteiro-purple/15 border-2 border-monteiro-purple/40 hover:border-monteiro-purple/60'
                  : 'bg-gradient-to-br from-monteiro-yellow/25 to-monteiro-yellow/15 border-2 border-monteiro-yellow/40 hover:border-monteiro-yellow/60'
              }`}
            >
              {/* Floating icon background - mais visível */}
              <div
                className={`absolute -top-4 -right-4 w-16 h-16 rounded-full opacity-20 ${
                  stat.color === 'purple' ? 'bg-monteiro-purple' : 'bg-monteiro-yellow'
                }`}
              ></div>

              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 transition-all duration-300 group-hover:scale-110 shadow-md ${
                  stat.color === 'purple'
                    ? 'bg-monteiro-purple/40 text-monteiro-purple border border-monteiro-purple/30'
                    : 'bg-monteiro-yellow/40 text-monteiro-yellow border border-monteiro-yellow/30'
                }`}
              >
                {stat.icon}
              </div>

              <div className="space-y-2">
                <div className="flex items-baseline gap-1 justify-center">
                  <span
                    className={`font-godger text-4xl md:text-5xl drop-shadow-sm text-monteiro-black`}
                  >
                    {isVisible ? getAnimatedValue(index).toLocaleString() : '0'}
                  </span>
                  <span
                    className={`font-godger text-2xl ${
                      stat.color === 'purple' ? 'text-monteiro-purple' : 'text-monteiro-yellow'
                    }`}
                  >
                    {stat.suffix}
                  </span>
                </div>

                <h3 className="font-godger text-xl text-monteiro-black group-hover:text-monteiro-black/90 transition-colors font-medium">
                  {stat.label}
                </h3>

                <p className="font-helvetica text-sm text-monteiro-black/70 italic font-medium">{stat.description}</p>
              </div>

              {/* Hover effect line - mais visível */}
              <div
                className={`absolute bottom-0 left-0 h-2 w-0 group-hover:w-full transition-all duration-500 ${
                  stat.color === 'purple' ? 'bg-monteiro-purple' : 'bg-monteiro-yellow'
                }`}
              ></div>

              {/* Inner glow effect */}
              <div
                className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  stat.color === 'purple'
                    ? 'bg-gradient-to-br from-monteiro-purple/10 to-transparent'
                    : 'bg-gradient-to-br from-monteiro-yellow/10 to-transparent'
                }`}
              ></div>
            </div>
          ))}
        </div>


      </div>

      {/* Decorative bottom line - mais visível */}
    </section>
  );
}
