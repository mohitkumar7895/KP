'use client';

import { useEffect, useState } from 'react';
import { supabase, Service } from '@/lib/supabase';
import * as Icons from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Services() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const { data, error } = await supabase
        .from('services')
        .select('*')
        .eq('is_active', true)
        .order('display_order');

      if (error) throw error;
      setServices(data || []);
    } catch (error) {
      console.error('Error fetching services:', error);
    } finally {
      setLoading(false);
    }
  };

  const getIcon = (iconName: string) => {
    const Icon = Icons[iconName as keyof typeof Icons] as any;
    return Icon || Icons.Briefcase;
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-white to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        

        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-lg animate-pulse">
                <div className="w-16 h-16 bg-gray-200 rounded-xl mb-6"></div>
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = getIcon(service.icon);
              const colors = [
                { bg: 'from-blue-500 to-blue-600', hover: 'group-hover:from-blue-600 group-hover:to-blue-700' },
                { bg: 'from-green-500 to-green-600', hover: 'group-hover:from-green-600 group-hover:to-green-700' },
                { bg: 'from-orange-500 to-orange-600', hover: 'group-hover:from-orange-600 group-hover:to-orange-700' },
                { bg: 'from-purple-500 to-purple-600', hover: 'group-hover:from-purple-600 group-hover:to-purple-700' },
                { bg: 'from-pink-500 to-pink-600', hover: 'group-hover:from-pink-600 group-hover:to-pink-700' },
                { bg: 'from-teal-500 to-teal-600', hover: 'group-hover:from-teal-600 group-hover:to-teal-700' },
              ];
              const colorSet = colors[index % colors.length];

              return (
                <div
                  key={service.id}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 animate-in fade-in slide-in-from-bottom-4"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${colorSet.bg} ${colorSet.hover} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Button
                    variant="ghost"
                    className="text-blue-600 hover:text-blue-700 p-0 h-auto font-semibold group/btn"
                  >
                    Learn More
                    <Icons.ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              );
            })}
          </div>
        )}

        
      </div>
    </section>
  );
}
