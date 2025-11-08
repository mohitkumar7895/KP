'use client';

import { Target, Users, Award, TrendingUp } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To provide exceptional workforce solutions that drive business growth and employee satisfaction.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced professionals dedicated to understanding and fulfilling your manpower requirements.',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Award,
      title: 'Quality Assured',
      description: 'Rigorous screening and verification processes ensure only the best candidates for your organization.',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: TrendingUp,
      title: 'Growth Focused',
      description: 'Strategic workforce planning and management solutions to scale your business efficiently.',
      color: 'from-purple-500 to-purple-600',
    },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="inline-block mb-4">
            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
              About Us
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your Reliable Partner in
            <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Workforce Management
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Since 2023, KP Manpower has been at the forefront of connecting businesses with exceptional talent.
            We specialize in providing comprehensive recruitment and workforce management solutions across various industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold">
                Why Businesses Trust KP Manpower
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                We understand that your workforce is your greatest asset. Our proven strategies, advanced screening processes,
                and dedicated support team ensure you get the right people at the right time.
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Industry Expertise</h4>
                    <p className="text-gray-400 text-sm">Deep understanding of corporate, institutional, and defense sectors.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Cost-Effective Solutions</h4>
                    <p className="text-gray-400 text-sm">Reduce administrative overhead while maintaining quality standards.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">End-to-End Support</h4>
                    <p className="text-gray-400 text-sm">From recruitment to onboarding, we handle every aspect of workforce management.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/15 transition-colors">
                <div className="text-5xl font-bold text-blue-400 mb-2">300+</div>
                <div className="text-gray-300 text-sm">Satisfied Clients</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/15 transition-colors">
                <div className="text-5xl font-bold text-green-400 mb-2">5000+</div>
                <div className="text-gray-300 text-sm">Placements</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/15 transition-colors">
                <div className="text-5xl font-bold text-orange-400 mb-2">19+</div>
                <div className="text-gray-300 text-sm">Years Experience</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/15 transition-colors">
                <div className="text-5xl font-bold text-purple-400 mb-2">98%</div>
                <div className="text-gray-300 text-sm">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
