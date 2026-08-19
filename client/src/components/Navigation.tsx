/*
 * DESIGN: Engineering Precision
 * - Minimal top nav with hairline bottom border
 * - Logo: DM Sans bold + Noto Sans KR
 * - Nav links: hover underline expand effect
 * - Sticky with subtle backdrop blur
 */

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "홈", href: "/" },
  { label: "회사 소개", href: "/about" },
  { label: "사업 소개", href: "/business" },
  { label: "시공 사례", href: "/projects" },
  { label: "문의하기", href: "/contact" },
];

export default function Navigation() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-[0_1px_0_0_#E2E6EA]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1720px] mx-auto px-6 lg:px-12 xl:px-16">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center group">
              <img src="/manus-storage/isang-eng-wordmark_28786b69.png" alt="ISANG ENG 이상이엔지" className="h-7 lg:h-8 w-auto max-w-[164px] object-contain" />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 xl:gap-10">
            {navItems.map((item) => {
              const isActive = location === item.href;
              return (
                <Link key={item.href} href={item.href}>
                  <span
                    className={`relative text-[13px] font-medium tracking-wide transition-colors duration-200 pb-1 font-['Noto_Sans_KR'] ${
                      isActive
                        ? "text-[#1565C0]"
                        : "text-[#1A1F2E] hover:text-[#1565C0]"
                    }`}
                    style={{
                      borderBottom: isActive ? "1px solid #1565C0" : "1px solid transparent",
                    }}
                  >
                    {item.label}
                  </span>
                </Link>
              );
            })}
            <Link href="/contact">
              <button className="ml-2 px-5 py-2 text-[13px] font-medium bg-[#1565C0] text-white hover:bg-[#0D47A1] transition-colors duration-200 font-['Noto_Sans_KR']" style={{ borderRadius: "2px" }}>
                견적 문의
              </button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[#1A1F2E]"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-[#E2E6EA]">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navItems.map((item) => {
              const isActive = location === item.href;
              return (
                <Link key={item.href} href={item.href}>
                  <span
                    className={`block text-[14px] font-medium py-2 border-b border-[#F0F2F5] font-['Noto_Sans_KR'] ${
                      isActive ? "text-[#1565C0]" : "text-[#1A1F2E]"
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </span>
                </Link>
              );
            })}
            <Link href="/contact">
              <button
                className="w-full mt-2 px-5 py-3 text-[13px] font-medium bg-[#1565C0] text-white font-['Noto_Sans_KR']"
                style={{ borderRadius: "2px" }}
                onClick={() => setMobileOpen(false)}
              >
                견적 문의
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
