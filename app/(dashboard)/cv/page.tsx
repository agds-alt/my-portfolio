"use client";

import { Download } from "lucide-react";
import Image from "next/image";

export default function CVPage() {
  const handleDownloadPDF = () => {
    window.print();
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-2 md:p-6">
      {/* Download Button - Hidden on print */}
      <button
        onClick={handleDownloadPDF}
        className="fixed top-20 right-4 md:top-24 md:right-8 z-50 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 print:hidden transition-colors"
      >
        <Download className="w-5 h-5" />
        <span className="hidden md:inline">Download PDF</span>
      </button>

      <div className="w-full md:max-w-[210mm] bg-white shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white p-4 md:p-8 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full"></div>
          <div className="relative z-10 flex items-center gap-4">
            {/* Photo */}
            <div className="shrink-0">
              <Image
                src="/avatar.jpg"
                alt="Abdul Gofur"
                width={80}
                height={80}
                className="rounded-full border-4 border-white/30"
              />
            </div>
            {/* Text Content */}
            <div className="flex-1">
              <h1 className="text-3xl md:text-5xl font-bold mb-2 tracking-wide">ABDUL GOFUR</h1>
              <div className="text-base md:text-xl font-light mb-2 md:mb-3">Full-stack Developer & Web Application Specialist</div>
              <div className="text-xs md:text-sm italic opacity-90">Building scalable web applications with modern technologies</div>
            </div>
          </div>
        </div>

        {/* Contact Bar */}
        <div className="bg-gradient-to-r from-pink-500 to-red-500 text-white p-3 md:p-5 flex flex-wrap gap-3 md:gap-6 text-xs">
          <div className="flex items-center gap-2">
            <span>📧</span>
            <a href="mailto:agdscid@gmail.com" className="hover:underline">agdscid@gmail.com</a>
          </div>
          <div className="flex items-center gap-2">
            <span>📱</span>
            <span>0812-2157-5053</span>
          </div>
          <div className="flex items-center gap-2">
            <span>📍</span>
            <span>Jakarta, Indonesia</span>
          </div>
          <div className="flex items-center gap-2">
            <span>💼</span>
            <a href="https://github.com/agds-alt" target="_blank" className="hover:underline">github.com/agds-alt</a>
          </div>
          <div className="flex items-center gap-2">
            <span>🔗</span>
            <a href="https://linkedin.com/in/abdul-gofur" target="_blank" className="hover:underline">linkedin.com/in/abdul-gofur</a>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 p-4 md:p-8">
          {/* Left Column */}
          <div className="space-y-6">
            {/* About */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-purple-600 mb-3 pb-2 border-b-4 border-purple-600 inline-block">PROFIL</h2>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed mt-3">
                Saya Abdul Gofur, lahir di Majalengka 12 April 1994. Full-stack developer dengan 1+ tahun pengalaman
                dalam membangun aplikasi web production-ready. Memiliki semangat kerja yang tinggi di bidang IT dan
                passionate dalam menciptakan solusi yang scalable dan performant.
              </p>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-pink-500 mb-3 pb-2 border-b-4 border-pink-500 inline-block">PENDIDIKAN</h2>
              <div className="mt-3 space-y-4">
                <div className="border-l-4 border-gray-300 pl-4 relative">
                  <div className="absolute -left-[7px] top-1 w-3 h-3 bg-purple-600 rounded-full"></div>
                  <div className="font-bold text-purple-600 text-sm">2013</div>
                  <div className="font-semibold text-sm">SMA Muhammadiyah 1 Bandung</div>
                </div>
                <div className="border-l-4 border-gray-300 pl-4 relative">
                  <div className="absolute -left-[7px] top-1 w-3 h-3 bg-purple-600 rounded-full"></div>
                  <div className="font-bold text-purple-600 text-sm">2014</div>
                  <div className="font-semibold text-sm">Pendidikan Dasar Militer Menwa</div>
                  <div className="text-xs text-gray-600">Pendidikan Dasar Militer Resimen Mahasiswa dan dilantik di Dik Passus Situ Lembang</div>
                </div>
                <div className="border-l-4 border-gray-300 pl-4 relative">
                  <div className="absolute -left-[7px] top-1 w-3 h-3 bg-purple-600 rounded-full"></div>
                  <div className="font-bold text-purple-600 text-sm">2014</div>
                  <div className="font-semibold text-sm">Pendidikan Para Dasar Marinir</div>
                  <div className="text-xs text-gray-600">Pendidikan Pasukan Udara Dasar Marinir / Terjun Statik</div>
                </div>
                <div className="border-l-4 border-gray-300 pl-4 relative">
                  <div className="absolute -left-[7px] top-1 w-3 h-3 bg-purple-600 rounded-full"></div>
                  <div className="font-bold text-purple-600 text-sm">2017</div>
                  <div className="font-semibold text-sm">D3 Teknik Informatika</div>
                  <div className="text-xs text-gray-600">Berhenti di semester 5 (Total SKS yang sudah diambil adalah 93 SKS)</div>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-orange-500 mb-3 pb-2 border-b-4 border-orange-500 inline-block">PENGALAMAN KERJA</h2>
              <div className="mt-3 space-y-4">
                <div className="border-l-4 border-gray-300 pl-4 relative">
                  <div className="absolute -left-[7px] top-1 w-3 h-3 bg-purple-600 rounded-full"></div>
                  <div className="font-bold text-purple-600 text-sm">2015</div>
                  <div className="font-semibold text-sm">Mocha Loco Café and Resto</div>
                  <div className="text-xs text-gray-600">Bekerja sebagai waiter selama 3 bulan pada saat libur kuliah</div>
                </div>
                <div className="border-l-4 border-gray-300 pl-4 relative">
                  <div className="absolute -left-[7px] top-1 w-3 h-3 bg-purple-600 rounded-full"></div>
                  <div className="font-bold text-purple-600 text-sm">2017</div>
                  <div className="font-semibold text-sm">Agen JNE Sudirman 2</div>
                  <div className="text-xs text-gray-600">Bekerja sebagai Admin selama 1 (satu) tahun pada saat cuti kuliah</div>
                </div>
                <div className="border-l-4 border-gray-300 pl-4 relative">
                  <div className="absolute -left-[7px] top-1 w-3 h-3 bg-purple-600 rounded-full"></div>
                  <div className="font-bold text-purple-600 text-sm">2024 - Sekarang</div>
                  <div className="font-semibold text-sm">Full-stack Developer (Freelance)</div>
                  <div className="text-xs text-gray-600">Mengembangkan aplikasi web full-stack dengan Next.js, React, TypeScript, dan PostgreSQL</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Skills */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-blue-500 mb-3 pb-2 border-b-4 border-blue-500 inline-block">KEAHLIAN TEKNIS</h2>
              <div className="mt-3 space-y-3">
                <div className="bg-gradient-to-r from-pink-50 to-red-50 p-3 rounded-lg border-l-4 border-red-500">
                  <div className="font-semibold text-sm text-gray-900">Frontend Development</div>
                  <div className="text-xs text-gray-600">Next.js, React, TypeScript, Tailwind CSS</div>
                </div>
                <div className="bg-gradient-to-r from-pink-50 to-red-50 p-3 rounded-lg border-l-4 border-red-500">
                  <div className="font-semibold text-sm text-gray-900">Backend Development</div>
                  <div className="text-xs text-gray-600">Node.js, tRPC, Prisma, PostgreSQL</div>
                </div>
                <div className="bg-gradient-to-r from-pink-50 to-red-50 p-3 rounded-lg border-l-4 border-red-500">
                  <div className="font-semibold text-sm text-gray-900">Database</div>
                  <div className="text-xs text-gray-600">PostgreSQL, Supabase, MongoDB, Redis</div>
                </div>
                <div className="bg-gradient-to-r from-pink-50 to-red-50 p-3 rounded-lg border-l-4 border-red-500">
                  <div className="font-semibold text-sm text-gray-900">Tools & DevOps</div>
                  <div className="text-xs text-gray-600">Git, Docker, Vercel, PWA</div>
                </div>
                <div className="bg-gradient-to-r from-pink-50 to-red-50 p-3 rounded-lg border-l-4 border-red-500">
                  <div className="font-semibold text-sm text-gray-900">Typing Speed</div>
                  <div className="text-xs text-gray-600">80 WPM</div>
                </div>
                <div className="bg-gradient-to-r from-pink-50 to-red-50 p-3 rounded-lg border-l-4 border-red-500">
                  <div className="font-semibold text-sm text-gray-900">System Administration</div>
                  <div className="text-xs text-gray-600">Windows & Linux Installation</div>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-purple-600 mb-3 pb-2 border-b-4 border-purple-600 inline-block">BAHASA</h2>
              <div className="mt-3 grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center text-white font-bold text-sm mb-2">
                    97.5%
                  </div>
                  <div className="text-xs font-semibold">Indonesia</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-pink-500 to-red-500 flex items-center justify-center text-white font-bold text-sm mb-2">
                    90.5%
                  </div>
                  <div className="text-xs font-semibold">Sunda</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center text-white font-bold text-sm mb-2">
                    25%
                  </div>
                  <div className="text-xs font-semibold">Inggris</div>
                </div>
              </div>
            </div>
          </div>

          {/* Projects Section - Full Width */}
          <div className="col-span-1 md:col-span-2 bg-gradient-to-br from-purple-50 to-purple-100 p-4 md:p-6 rounded-xl mt-4">
            <h2 className="text-xl md:text-2xl font-bold text-purple-600 mb-4 pb-2 border-b-4 border-purple-600 inline-block">PORTFOLIO PROYEK WEB</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mt-5">
              {/* Project 1 */}
              <div className="bg-white rounded-lg p-4 md:p-5 shadow-lg border-t-4 border-purple-600 hover:-translate-y-1 transition-transform">
                <h3 className="font-bold text-sm md:text-base mb-2">WC Check</h3>
                <p className="text-xs text-gray-600 mb-3 leading-relaxed">
                  Professional Toilet Monitoring System dengan QR code scanning dan analytics real-time.
                  Meningkatkan efisiensi inspeksi hingga 70%.
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-2 py-1 rounded text-[9px] font-semibold">Next.js</span>
                  <span className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-2 py-1 rounded text-[9px] font-semibold">TypeScript</span>
                  <span className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-2 py-1 rounded text-[9px] font-semibold">Supabase</span>
                  <span className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-2 py-1 rounded text-[9px] font-semibold">PWA</span>
                </div>
                <a href="https://wc-checks.vercel.app" className="text-purple-600 hover:underline text-xs font-semibold" target="_blank">
                  🔗 wc-checks.vercel.app
                </a>
                <div className="mt-2 inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-[9px] font-bold uppercase">
                  Production
                </div>
              </div>

              {/* Project 2 */}
              <div className="bg-white rounded-lg p-4 md:p-5 shadow-lg border-t-4 border-pink-500 hover:-translate-y-1 transition-transform">
                <h3 className="font-bold text-sm md:text-base mb-2">AGDS Corp POS</h3>
                <p className="text-xs text-gray-600 mb-3 leading-relaxed">
                  Point of Sale & Warehouse Management System dengan modern tech stack.
                  Multi-outlet management dengan real-time inventory tracking.
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-2 py-1 rounded text-[9px] font-semibold">Next.js 16</span>
                  <span className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-2 py-1 rounded text-[9px] font-semibold">tRPC</span>
                  <span className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-2 py-1 rounded text-[9px] font-semibold">PostgreSQL</span>
                  <span className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-2 py-1 rounded text-[9px] font-semibold">Redis</span>
                </div>
                <a href="https://agdspos.vercel.app" className="text-purple-600 hover:underline text-xs font-semibold" target="_blank">
                  🔗 agdspos.vercel.app
                </a>
                <div className="mt-2 inline-block px-3 py-1 bg-red-100 text-red-700 rounded-full text-[9px] font-bold uppercase">
                  Development
                </div>
              </div>

              {/* Project 3 */}
              <div className="bg-white rounded-lg p-4 md:p-5 shadow-lg border-t-4 border-blue-500 hover:-translate-y-1 transition-transform">
                <h3 className="font-bold text-sm md:text-base mb-2">Selisih Berat</h3>
                <p className="text-xs text-gray-600 mb-3 leading-relaxed">
                  Logistics Weight Audit System for J&T Express dengan GPS watermarking dan barcode scanning.
                  Database production: 25,000+ entries.
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-2 py-1 rounded text-[9px] font-semibold">Next.js</span>
                  <span className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-2 py-1 rounded text-[9px] font-semibold">GPS API</span>
                  <span className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-2 py-1 rounded text-[9px] font-semibold">Barcode</span>
                  <span className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-2 py-1 rounded text-[9px] font-semibold">Supabase</span>
                </div>
                <a href="https://selisih-berat.vercel.app" className="text-purple-600 hover:underline text-xs font-semibold" target="_blank">
                  🔗 selisih-berat.vercel.app
                </a>
                <div className="mt-2 inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-[9px] font-bold uppercase">
                  Production
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white text-center p-3 md:p-5 text-xs">
          Portfolio: <a href="https://agds-dev.vercel.app" target="_blank" className="font-semibold hover:underline">agds-dev.vercel.app</a> |
          Created with ❤️ by Abdul Gofur | 2025
        </div>
      </div>

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          /* Remove default margins and set page size to F4 */
          @page {
            size: 210mm 330mm;
            margin: 0;
          }

          /* Ensure backgrounds and colors print */
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            color-adjust: exact !important;
          }

          /* Hide scrollbars and shadows for print */
          body {
            margin: 0;
            padding: 0;
          }

          /* Make CV full width in print */
          .min-h-screen {
            min-height: auto;
            padding: 0 !important;
            background: white !important;
          }

          /* Remove shadow in print */
          .shadow-2xl {
            box-shadow: none !important;
          }

          /* Ultra compact spacing for print */
          .space-y-6 {
            gap: 0.5rem !important;
          }

          .space-y-6 > * + * {
            margin-top: 0.5rem !important;
          }

          .space-y-4 {
            gap: 0.25rem !important;
          }

          .space-y-4 > * + * {
            margin-top: 0.25rem !important;
          }

          .space-y-3 {
            gap: 0.25rem !important;
          }

          .space-y-3 > * + * {
            margin-top: 0.25rem !important;
          }

          /* Minimal header padding */
          .bg-gradient-to-r.from-purple-600 {
            padding: 0.5rem 1rem !important;
          }

          /* Optimize photo size for print */
          .bg-gradient-to-r.from-purple-600 img {
            width: 50px !important;
            height: 50px !important;
          }

          .bg-gradient-to-r.from-purple-600 .flex.items-center {
            gap: 0.75rem !important;
          }

          /* Force 2-column layout in print and reduce padding */
          .grid.grid-cols-1 {
            padding: 0.75rem !important;
            gap: 0.75rem !important;
            grid-template-columns: 1fr 1fr !important;
          }

          /* Much smaller fonts for print */
          h1 {
            font-size: 1.5rem !important;
            margin-bottom: 0.25rem !important;
            line-height: 1.2 !important;
          }

          h2 {
            font-size: 1rem !important;
            margin-bottom: 0.25rem !important;
            padding-bottom: 0.125rem !important;
            border-bottom-width: 2px !important;
          }

          h3 {
            font-size: 0.75rem !important;
            margin-bottom: 0.25rem !important;
          }

          p, div {
            font-size: 0.65rem !important;
            line-height: 1.2 !important;
            margin-bottom: 0 !important;
          }

          /* Ultra compact project cards */
          .bg-white.rounded-lg {
            padding: 0.5rem !important;
            margin-bottom: 0.25rem !important;
          }

          /* Much smaller language circles */
          .rounded-full.bg-gradient-to-br {
            width: 2.5rem !important;
            height: 2.5rem !important;
            font-size: 0.6rem !important;
          }

          /* Minimal skills boxes padding */
          .bg-gradient-to-r.from-pink-50 {
            padding: 0.35rem !important;
            margin-bottom: 0.25rem !important;
          }

          /* Minimal footer padding */
          .text-center.p-3 {
            padding: 0.35rem !important;
          }

          /* Minimal contact bar padding */
          .flex.flex-wrap.gap-3 {
            padding: 0.5rem !important;
            gap: 0.35rem !important;
          }

          /* Remove decorative circle in header */
          .absolute.-top-20 {
            display: none !important;
          }

          /* Reduce border thickness */
          .border-l-4 {
            border-left-width: 2px !important;
            padding-left: 0.5rem !important;
          }

          .border-b-4 {
            border-bottom-width: 2px !important;
          }

          .border-t-4 {
            border-top-width: 2px !important;
          }

          /* Compact timeline dots */
          .absolute.w-3.h-3 {
            width: 0.5rem !important;
            height: 0.5rem !important;
            left: -0.3rem !important;
          }

          /* Reduce project section padding */
          .bg-gradient-to-br.from-purple-50 {
            padding: 0.5rem !important;
            margin-top: 0.5rem !important;
          }

          /* Make project grid more compact */
          .grid.grid-cols-1.md\\:grid-cols-3 {
            gap: 0.5rem !important;
          }

          /* Compact tag badges */
          .bg-gradient-to-r.from-purple-600.to-purple-800 {
            padding: 0.125rem 0.35rem !important;
            font-size: 0.5rem !important;
          }

          /* Reduce all rounded corners for cleaner look */
          .rounded-lg {
            border-radius: 0.25rem !important;
          }

          .rounded-xl {
            border-radius: 0.25rem !important;
          }

          .rounded-2xl {
            border-radius: 0.25rem !important;
          }

          /* Ensure proper page breaks */
          .space-y-6 > div,
          .space-y-3 > div {
            page-break-inside: avoid;
          }

          /* Make links visible in print */
          a[href]:after {
            content: none !important;
          }
        }
      `}</style>
    </div>
  );
}
