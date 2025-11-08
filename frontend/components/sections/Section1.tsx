'use client';

import Image from 'next/image';
import aboutImage from '@/public/kpman5.jpg'; // ✅ Correct way to import image from public folder

export default function AboutPage() {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        {/* Left Image */}
        <div className="w-full">
          <Image
            src={aboutImage} // ✅ imported image used here
            alt="K.P. Manpower Team"
            className="rounded-xl shadow-xl object-cover w-full h-auto"
            priority
          />
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            K.P. MANPOWER SERVICES
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>KPMS</strong> has been incorporated in the year 2023. It is run and managed by professionals.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Satish Chandra is the Managing Director KPMS</strong> started its activities in the year 2023 at
            Noida (Uttar Pradesh) with a strategy to develop and motivate high caliber human resources and promotes
            unconventional innovative ideas and concepts.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            It is a feat to create a bridge between corporate, institutions and defense all as industries thereby
            multiplying synergic parameters. We create options, process opportunities and thus develop institutions to be
            more productive, effective and result oriented. KPMS is a Professional, Dynamic and Efficient service agency
            having its process system driven from computerized data bank to internet web pages.
          </p>

          <p className="text-gray-700 leading-relaxed">
            The quest is for excellence in professionalism; focus on search for career and growth. We are a multi
            functional and multi locational organization with the following set of interdependent groups:
          </p>
        </div>
      </div>

      {/* Floating Buttons */}
      {/* 📞 Left Side Call Button */}
      <div className="fixed bottom-6 left-6 z-50 group">
        <a
          href="tel:+919876543210"
          className="bg-gradient-to-br from-green-400 to-green-600 text-white w-14 h-14 flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-7 h-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15a2.25 2.25 0 002.25-2.25v-2.1a.75.75 0 00-.615-.736l-4.74-.79a.75.75 0 00-.805.374l-1.48 2.59a11.034 11.034 0 01-4.83-4.83l2.59-1.48a.75.75 0 00.374-.805l-.79-4.74a.75.75 0 00-.736-.615h-2.1A2.25 2.25 0 002.25 6.75z"
            />
          </svg>
        </a>
        <span className="absolute left-16 bottom-2 bg-gray-800 text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
          Call Us
        </span>
      </div>

      {/* 💬 Right Side WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50 group">
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-br from-green-500 to-emerald-700 text-white w-14 h-14 flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-7 h-7"
          >
            <path d="M16.69 13.29c-.27-.13-1.6-.78-1.84-.87-.25-.09-.43-.13-.6.14-.18.27-.69.87-.85 1.05-.16.18-.31.2-.58.07-.27-.13-1.14-.42-2.18-1.33-.8-.71-1.33-1.58-1.49-1.85-.16-.27-.02-.41.12-.54.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.47-.07-.13-.6-1.45-.82-1.99-.21-.5-.43-.43-.6-.44l-.51-.01c-.18 0-.47.07-.72.34s-.94.92-.94 2.24.97 2.6 1.1 2.78c.13.18 1.9 2.9 4.62 4.06.65.28 1.16.45 1.56.57.66.21 1.26.18 1.73.11.53-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.31z" />
            <path d="M12.04 2C6.58 2 2.21 6.35 2.21 11.81c0 2.09.61 4.04 1.66 5.67L2 22l4.69-1.22c1.59.87 3.4 1.36 5.35 1.36 5.46 0 9.83-4.35 9.83-9.83C21.87 6.35 17.5 2 12.04 2zm0 17.81c-1.7 0-3.28-.46-4.63-1.27l-.33-.19-2.78.72.74-2.71-.22-.35a8.49 8.49 0 01-1.28-4.61c0-4.7 3.83-8.52 8.52-8.52s8.52 3.83 8.52 8.52-3.83 8.52-8.52 8.52z" />
          </svg>
        </a>
        <span className="absolute right-16 bottom-2 bg-gray-800 text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
          WhatsApp
        </span>
      </div>
    </section>
  );
}
