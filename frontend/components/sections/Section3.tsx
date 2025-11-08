'use client';

import { useEffect, useState, useRef } from 'react';
import { Users, Briefcase, Building2, Award } from 'lucide-react';

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
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
  }, []);

  const stats = [
    {
      icon: Users,
      value: 5000,
      suffix: '+',
      label: 'Successful Placements',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Building2,
      value: 300,
      suffix: '+',
      label: 'Corporate Clients',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Briefcase,
      value: 19,
      suffix: '+',
      label: 'Years of Experience',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: Award,
      value: 98,
      suffix: '%',
      label: 'Client Satisfaction',
      color: 'from-purple-500 to-purple-600',
    },
  ];

  const Counter = ({ end, suffix }: { end: number; suffix: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }, [isVisible, end]);

    return (
      <span>
        {count.toLocaleString()}
        {suffix}
      </span>
    );
  };

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

    </section>
  );
}
