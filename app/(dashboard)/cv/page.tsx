"use client";

export default function CVPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <style jsx>{`
        .cv-container {
            width: 210mm;
            min-height: 330mm;
            background: white;
            margin: 0 auto;
            box-shadow: 0 10px 50px rgba(0,0,0,0.3);
            position: relative;
            overflow: hidden;
        }

        /* Header Section */
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 30px 40px;
            position: relative;
            overflow: hidden;
        }

        .header::before {
            content: '';
            position: absolute;
            top: -50%;
            right: -10%;
            width: 300px;
            height: 300px;
            background: rgba(255,255,255,0.1);
            border-radius: 50%;
        }

        .header-content {
            position: relative;
            z-index: 1;
        }

        .name {
            font-size: 42px;
            font-weight: 700;
            margin-bottom: 8px;
            letter-spacing: 1px;
        }

        .title {
            font-size: 20px;
            font-weight: 300;
            opacity: 0.95;
            margin-bottom: 15px;
        }

        .tagline {
            font-size: 14px;
            opacity: 0.9;
            font-style: italic;
        }

        /* Contact Bar */
        .contact-bar {
            background: linear-gradient(90deg, #f093fb 0%, #f5576c 100%);
            padding: 20px 40px;
            display: flex;
            flex-wrap: wrap;
            gap: 25px;
            align-items: center;
        }

        .contact-item {
            display: flex;
            align-items: center;
            gap: 8px;
            color: white;
            font-size: 12px;
        }

        .contact-item svg {
            width: 16px;
            height: 16px;
            fill: white;
        }

        .contact-item a {
            color: white;
            text-decoration: none;
        }

        .contact-item a:hover {
            text-decoration: underline;
        }

        /* Main Content */
        .content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
            padding: 30px 40px;
        }

        .section {
            margin-bottom: 25px;
        }

        .section-title {
            font-size: 20px;
            font-weight: 700;
            margin-bottom: 15px;
            padding-bottom: 8px;
            border-bottom: 3px solid;
            display: inline-block;
        }

        .section-title.purple {
            color: #667eea;
            border-color: #667eea;
        }

        .section-title.pink {
            color: #f5576c;
            border-color: #f5576c;
        }

        .section-title.orange {
            color: #fa709a;
            border-color: #fa709a;
        }

        .section-title.teal {
            color: #4facfe;
            border-color: #4facfe;
        }

        /* About */
        .about-text {
            font-size: 13px;
            line-height: 1.6;
            color: #555;
        }

        /* Education & Experience */
        .timeline-item {
            margin-bottom: 18px;
            padding-left: 20px;
            border-left: 3px solid #e0e0e0;
            position: relative;
        }

        .timeline-item::before {
            content: '';
            position: absolute;
            left: -7px;
            top: 3px;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        .timeline-year {
            font-weight: 700;
            color: #667eea;
            font-size: 13px;
            margin-bottom: 4px;
        }

        .timeline-title {
            font-weight: 600;
            font-size: 14px;
            margin-bottom: 3px;
            color: #333;
        }

        .timeline-desc {
            font-size: 12px;
            color: #666;
            line-height: 1.5;
        }

        /* Skills */
        .skills-grid {
            display: grid;
            gap: 12px;
        }

        .skill-item {
            background: linear-gradient(135deg, #f093fb10 0%, #f5576c10 100%);
            padding: 10px 15px;
            border-radius: 8px;
            border-left: 4px solid #f5576c;
        }

        .skill-name {
            font-weight: 600;
            font-size: 13px;
            color: #333;
            margin-bottom: 3px;
        }

        .skill-level {
            font-size: 11px;
            color: #666;
        }

        /* Languages */
        .languages {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 15px;
        }

        .language-item {
            text-align: center;
        }

        .language-circle {
            width: 70px;
            height: 70px;
            border-radius: 50%;
            margin: 0 auto 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 14px;
            color: white;
        }

        .lang-id { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
        .lang-su { background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); }
        .lang-en { background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); }

        .language-name {
            font-size: 12px;
            font-weight: 600;
            color: #333;
        }

        /* Projects Section - Full Width */
        .projects-section {
            grid-column: 1 / -1;
            background: linear-gradient(135deg, #667eea05 0%, #764ba205 100%);
            padding: 25px;
            border-radius: 12px;
            margin-top: 10px;
        }

        .projects-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            margin-top: 20px;
        }

        .project-card {
            background: white;
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
            border-top: 4px solid;
            transition: transform 0.3s;
        }

        .project-card:nth-child(1) { border-top-color: #667eea; }
        .project-card:nth-child(2) { border-top-color: #f5576c; }
        .project-card:nth-child(3) { border-top-color: #4facfe; }

        .project-card:hover {
            transform: translateY(-5px);
        }

        .project-title {
            font-size: 16px;
            font-weight: 700;
            margin-bottom: 8px;
            color: #333;
        }

        .project-desc {
            font-size: 11px;
            color: #666;
            line-height: 1.5;
            margin-bottom: 12px;
        }

        .project-tech {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
            margin-bottom: 12px;
        }

        .tech-tag {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 3px 8px;
            border-radius: 4px;
            font-size: 9px;
            font-weight: 600;
        }

        .project-link {
            display: inline-flex;
            align-items: center;
            gap: 5px;
            color: #667eea;
            text-decoration: none;
            font-size: 11px;
            font-weight: 600;
        }

        .project-link:hover {
            text-decoration: underline;
        }

        .project-status {
            display: inline-block;
            padding: 3px 10px;
            border-radius: 12px;
            font-size: 9px;
            font-weight: 700;
            text-transform: uppercase;
            margin-top: 8px;
        }

        .status-production {
            background: #10b98144;
            color: #047857;
        }

        .status-development {
            background: #f5576c44;
            color: #c62e4a;
        }

        /* Footer */
        .footer {
            text-align: center;
            padding: 20px;
            background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
            color: white;
            font-size: 11px;
        }

        .footer a {
            color: white;
            font-weight: 600;
        }

        @media print {
            .cv-container {
                box-shadow: none;
            }
        }

        @media (max-width: 768px) {
            .cv-container {
                width: 100%;
            }
            .content {
                grid-template-columns: 1fr;
            }
            .projects-grid {
                grid-template-columns: 1fr;
            }
        }
      `}</style>

      <div className="cv-container">
        {/* Header */}
        <div className="header">
          <div className="header-content">
            <h1 className="name">ABDUL GOFUR</h1>
            <div className="title">Full-stack Developer & Web Application Specialist</div>
            <div className="tagline">Building scalable web applications with modern technologies</div>
          </div>
        </div>

        {/* Contact Bar */}
        <div className="contact-bar">
          <div className="contact-item">
            <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
            <a href="mailto:agdscid@gmail.com">agdscid@gmail.com</a>
          </div>
          <div className="contact-item">
            <svg viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            <span>0812-2157-5053</span>
          </div>
          <div className="contact-item">
            <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            <span>Jakarta, Indonesia</span>
          </div>
          <div className="contact-item">
            <svg viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            <a href="https://github.com/agds-alt" target="_blank">github.com/agds-alt</a>
          </div>
          <div className="contact-item">
            <svg viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            <a href="https://linkedin.com/in/abdul-gofur" target="_blank">linkedin.com/in/abdul-gofur</a>
          </div>
        </div>

        {/* Main Content */}
        <div className="content">
          {/* Left Column */}
          <div>
            {/* About */}
            <div className="section">
              <h2 className="section-title purple">PROFIL</h2>
              <p className="about-text">
                Saya Abdul Gofur, lahir di Majalengka 12 April 1994. Full-stack developer dengan 1+ tahun pengalaman
                dalam membangun aplikasi web production-ready. Memiliki semangat kerja yang tinggi di bidang IT dan
                passionate dalam menciptakan solusi yang scalable dan performant.
              </p>
            </div>

            {/* Education */}
            <div className="section">
              <h2 className="section-title pink">PENDIDIKAN</h2>
              <div className="timeline-item">
                <div className="timeline-year">2013</div>
                <div className="timeline-title">SMA Muhammadiyah 1 Bandung</div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">2014</div>
                <div className="timeline-title">Pendidikan Dasar Militer Menwa</div>
                <div className="timeline-desc">Pendidikan Dasar Militer Resimen Mahasiswa dan dilantik di Dik Passus Situ Lembang</div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">2014</div>
                <div className="timeline-title">Pendidikan Para Dasar Marinir</div>
                <div className="timeline-desc">Pendidikan Pasukan Udara Dasar Marinir / Terjun Statik</div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">2017</div>
                <div className="timeline-title">D3 Teknik Informatika</div>
                <div className="timeline-desc">Berhenti di semester 5 (Total SKS yang sudah diambil adalah 93 SKS)</div>
              </div>
            </div>

            {/* Experience */}
            <div className="section">
              <h2 className="section-title orange">PENGALAMAN KERJA</h2>
              <div className="timeline-item">
                <div className="timeline-year">2015</div>
                <div className="timeline-title">Mocha Loco Café and Resto</div>
                <div className="timeline-desc">Bekerja sebagai waiter selama 3 bulan pada saat libur kuliah</div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">2017</div>
                <div className="timeline-title">Agen JNE Sudirman 2</div>
                <div className="timeline-desc">Bekerja sebagai Admin selama 1 (satu) tahun pada saat cuti kuliah</div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">2024 - Sekarang</div>
                <div className="timeline-title">Full-stack Developer (Freelance)</div>
                <div className="timeline-desc">Mengembangkan aplikasi web full-stack dengan Next.js, React, TypeScript, dan PostgreSQL</div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div>
            {/* Skills */}
            <div className="section">
              <h2 className="section-title teal">KEAHLIAN TEKNIS</h2>
              <div className="skills-grid">
                <div className="skill-item">
                  <div className="skill-name">Frontend Development</div>
                  <div className="skill-level">Next.js, React, TypeScript, Tailwind CSS</div>
                </div>
                <div className="skill-item">
                  <div className="skill-name">Backend Development</div>
                  <div className="skill-level">Node.js, tRPC, Prisma, PostgreSQL</div>
                </div>
                <div className="skill-item">
                  <div className="skill-name">Database</div>
                  <div className="skill-level">PostgreSQL, Supabase, MongoDB, Redis</div>
                </div>
                <div className="skill-item">
                  <div className="skill-name">Tools & DevOps</div>
                  <div className="skill-level">Git, Docker, Vercel, PWA</div>
                </div>
                <div className="skill-item">
                  <div className="skill-name">Typing Speed</div>
                  <div className="skill-level">80 WPM</div>
                </div>
                <div className="skill-item">
                  <div className="skill-name">Design</div>
                  <div className="skill-level">Corel (Basic), UI/UX Design</div>
                </div>
                <div className="skill-item">
                  <div className="skill-name">System Administration</div>
                  <div className="skill-level">Windows & Linux Installation</div>
                </div>
                <div className="skill-item">
                  <div className="skill-name">Soft Skills</div>
                  <div className="skill-level">Team Work, Problem Solving</div>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="section">
              <h2 className="section-title purple">BAHASA</h2>
              <div className="languages">
                <div className="language-item">
                  <div className="language-circle lang-id">97.5%</div>
                  <div className="language-name">Indonesia</div>
                </div>
                <div className="language-item">
                  <div className="language-circle lang-su">90.5%</div>
                  <div className="language-name">Sunda</div>
                </div>
                <div className="language-item">
                  <div className="language-circle lang-en">25%</div>
                  <div className="language-name">Inggris</div>
                </div>
              </div>
            </div>
          </div>

          {/* Projects Section - Full Width */}
          <div className="projects-section">
            <h2 className="section-title purple">PORTFOLIO PROYEK WEB</h2>
            <div className="projects-grid">
              {/* Project 1: WC Check */}
              <div className="project-card">
                <h3 className="project-title">WC Check</h3>
                <p className="project-desc">
                  Professional Toilet Monitoring System dengan QR code scanning dan analytics real-time.
                  Meningkatkan efisiensi inspeksi hingga 70%.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">Next.js</span>
                  <span className="tech-tag">TypeScript</span>
                  <span className="tech-tag">Supabase</span>
                  <span className="tech-tag">PWA</span>
                </div>
                <a href="https://wc-checks.vercel.app" className="project-link" target="_blank">
                  🔗 wc-checks.vercel.app
                </a>
                <div className="project-status status-production">Production</div>
              </div>

              {/* Project 2: AGDS POS */}
              <div className="project-card">
                <h3 className="project-title">AGDS Corp POS</h3>
                <p className="project-desc">
                  Point of Sale & Warehouse Management System dengan modern tech stack.
                  Multi-outlet management dengan real-time inventory tracking.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">Next.js 16</span>
                  <span className="tech-tag">tRPC</span>
                  <span className="tech-tag">PostgreSQL</span>
                  <span className="tech-tag">Redis</span>
                </div>
                <a href="https://agdspos.vercel.app" className="project-link" target="_blank">
                  🔗 agdspos.vercel.app
                </a>
                <div className="project-status status-development">Development</div>
              </div>

              {/* Project 3: Selisih Berat */}
              <div className="project-card">
                <h3 className="project-title">Selisih Berat</h3>
                <p className="project-desc">
                  Logistics Weight Audit System for J&T Express dengan GPS watermarking dan barcode scanning.
                  Database production: 25,000+ entries.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">Next.js</span>
                  <span className="tech-tag">GPS API</span>
                  <span className="tech-tag">Barcode</span>
                  <span className="tech-tag">Supabase</span>
                </div>
                <a href="https://selisih-berat.vercel.app" className="project-link" target="_blank">
                  🔗 selisih-berat.vercel.app
                </a>
                <div className="project-status status-production">Production</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="footer">
          Portfolio: <a href="https://agds-dev.vercel.app" target="_blank">agds-dev.vercel.app</a> |
          Created with ❤️ by Abdul Gofur | 2025
        </div>
      </div>
    </div>
  );
}
