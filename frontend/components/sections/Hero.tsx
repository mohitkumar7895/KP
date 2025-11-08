'use client';

import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-slate-600/10"></div>

      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-slate-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in slide-in-from-left duration-700">
            <div className="inline-block">
              <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                Excellence in Workforce Solutions
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Your Trusted
              <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Manpower
              </span>
              <span className="block">Partner</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
              Connecting businesses with exceptional talent. We provide comprehensive workforce management and recruitment solutions tailored to your industry needs.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-gray-700">19+ Years of Industry Experience</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-gray-700">300+ Satisfied Clients</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-gray-700">Professional & Reliable Service</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all text-lg px-8 py-6"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('services')}
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 text-lg px-8 py-6"
              >
                Our Services
              </Button>
            </div>
          </div>

          <div className="relative hidden lg:block animate-in slide-in-from-right duration-700 delay-300">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl transform rotate-6 opacity-20"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 text-center transform hover:scale-105 transition-transform">
                    <div className="text-4xl font-bold text-blue-600">300+</div>
                    <div className="text-sm text-gray-600 mt-2">Happy Clients</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 text-center transform hover:scale-105 transition-transform">
                    <div className="text-4xl font-bold text-green-600">19+</div>
                    <div className="text-sm text-gray-600 mt-2">Years Experience</div>
                  </div>
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 text-center transform hover:scale-105 transition-transform">
                    <div className="text-4xl font-bold text-orange-600">98%</div>
                    <div className="text-sm text-gray-600 mt-2">Success Rate</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 text-center transform hover:scale-105 transition-transform">
                    <div className="text-4xl font-bold text-purple-600">24/7</div>
                    <div className="text-sm text-gray-600 mt-2">Support</div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-6">
                  <h3 className="font-semibold text-lg mb-2">Why Choose Us?</h3>
                  <p className="text-sm text-blue-100">
                    Proven track record, dedicated support, and comprehensive solutions for all your manpower needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
