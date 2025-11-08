'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
             <Link href="/" className="flex items-center gap-3">
              {/* ✅ FIXED LOGO */}
              <div className="w-12 h-12 rounded-lg flex items-center justify-center shadow-md">
                <img
                  src="/logo.png"
                  alt="KP Logo"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                  KP Manpower
                </h1>
                <p className="text-xs text-gray-600">Recruitment Services</p>
              </div>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Your trusted partner for workforce management and recruitment solutions. Delivering excellence since 2023.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-slate-700 hover:bg-blue-600 flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-slate-700 hover:bg-blue-600 flex items-center justify-center transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-slate-700 hover:bg-blue-600 flex items-center justify-center transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-slate-700 hover:bg-blue-600 flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/Abouts" className="text-gray-300 hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link href="/Servicess" className="text-gray-300 hover:text-blue-400 transition-colors">Our Services</Link></li>
              <li><Link href="/Jobss" className="text-gray-300 hover:text-blue-400 transition-colors">Current Openings</Link></li>
              <li><Link href="/Contacts" className="text-gray-300 hover:text-blue-400 transition-colors">Contact Us</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Workforce Management</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">HR Outsourcing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Recruitment Solutions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Training & Development</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Administrative Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  Ganga Ganj Panki, Kanpur Nagar, Uttar Pradesh 208020
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a href="tel:+919999118211" className="text-gray-300 hover:text-blue-400 transition-colors">
                  +91 9999118211
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a href="mailto:kp.manpower2023@gmail.com" className="text-gray-300 hover:text-blue-400 transition-colors">
                  kp.manpower2023@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} KP Manpower Services. All rights reserved. | Designed with excellence</p>
        </div>
      </div>
    </footer>
  );
}