/*
 * DESIGN: Engineering Precision
 * - Dark charcoal footer with hairline dividers
 * - Minimal information layout
 * - DM Mono for technical data
 */

import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-[#1A1F2E] text-white">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        {/* Top section */}
        <div className="py-14 grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-white/10">
          {/* Brand */}
          <div>
            <div className="inline-flex mb-5">
              <img src="/manus-storage/isang-eng-wordmark_28786b69.png" alt="ISANG ENG 이상이엔지" className="h-8 w-auto max-w-[166px] object-contain" />
            </div>
            <p className="text-[13px] text-white/50 leading-relaxed font-['Noto_Sans_KR'] font-light">
              냉난방 공조와 크린룸을 위한<br />
              엔지니어링 파트너
            </p>
          </div>

          {/* Links */}
          <div>
            <div className="text-[11px] text-white/30 tracking-[0.15em] uppercase font-['DM_Sans'] mb-4">Navigation</div>
            <div className="flex flex-col gap-3">
              {[
                { label: "홈", href: "/" },
                { label: "회사 소개", href: "/about" },
                { label: "사업 소개", href: "/business" },
                { label: "시공 사례", href: "/projects" },
                { label: "문의하기", href: "/contact" },
              ].map((item) => (
                <Link key={item.href} href={item.href}>
                  <span className="text-[13px] text-white/60 hover:text-white transition-colors duration-200 font-['Noto_Sans_KR']">
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="text-[11px] text-white/30 tracking-[0.15em] uppercase font-['DM_Sans'] mb-4">Contact</div>
            <div className="flex flex-col gap-3">
              <div>
                <div className="text-[11px] text-white/30 font-['DM_Mono'] mb-1">TEL</div>
                <a href="tel:0425642223" className="text-[13px] text-white/70 font-['DM_Mono'] hover:text-white">042-564-2223</a>
              </div>
              <div>
                <div className="text-[11px] text-white/30 font-['DM_Mono'] mb-1">EMAIL</div>
                <a href="mailto:isang@isang.co.kr" className="text-[13px] text-white/70 font-['DM_Mono'] hover:text-white">isang@isang.co.kr</a>
              </div>
              <div>
                <div className="text-[11px] text-white/30 font-['DM_Mono'] mb-1">ADDRESS</div>
                <div className="text-[13px] text-white/70 font-['Noto_Sans_KR'] font-light leading-relaxed">
                  대전광역시 서구 관저동<br />1969-10, 2F
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="text-[12px] text-white/30 font-['DM_Mono']">
            © 2022 ISANG ENG. All rights reserved.
          </div>
          <div className="text-[11px] text-white/20 font-['DM_Mono'] tracking-wider">
            HVAC &amp; CLEANROOM ENGINEERING
          </div>
        </div>
      </div>
    </footer>
  );
}
