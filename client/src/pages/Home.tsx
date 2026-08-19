/*
 * DESIGN: Engineering Precision
 * - Full-screen hero with cleanroom image + dark overlay
 * - Dark text on image: use white text (image is dark/blue-toned)
 * - Stats section: large DM Mono numbers
 * - Services: hairline card borders
 * - Asymmetric layout with vertical labels
 */

import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { ArrowRight, ChevronDown } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { trpc } from "@/lib/trpc";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663566585792/UV3ApsRFKvxRDoHzqCkMDQ/hero-cleanroom-Q9W5TJEyJeoBbz3gtUdgkH.webp";
const CONSTRUCTION_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663566585792/UV3ApsRFKvxRDoHzqCkMDQ/cleanroom-construction-mJi5zaGLRJd3o4oNNdu4VQ.webp";
const TECH_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663566585792/UV3ApsRFKvxRDoHzqCkMDQ/cleanroom-tech-Ka2DCZZG3QZJz4Y8QgPXCY.webp";

function useCountUp(target: number, duration: number = 1500, start: boolean = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function StatItem({ value, suffix, label, started }: { value: number; suffix: string; label: string; started: boolean }) {
  const count = useCountUp(value, 1800, started);
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-end gap-1">
        <span className="text-[52px] lg:text-[64px] font-['DM_Mono'] font-light text-[#1A1F2E] leading-none tracking-tight">
          {count}
        </span>
        <span className="text-[24px] font-['DM_Mono'] font-light text-[#1565C0] mb-2">{suffix}</span>
      </div>
      <div className="text-[13px] text-[#6B7280] font-['Noto_Sans_KR'] font-light tracking-wide">{label}</div>
    </div>
  );
}

const services = [
  {
    num: "01",
    title: "클린룸 설계",
    subtitle: "Cleanroom Design",
    desc: "ISO 등급별 클린룸 설계부터 공조 시스템, 파티클 관리까지 최적화된 환경 설계를 제공합니다.",
    color: "#1565C0",
  },
  {
    num: "02",
    title: "클린룸 시공",
    subtitle: "Cleanroom Construction",
    desc: "모듈형 패널 시스템과 정밀 시공 기술로 반도체, 제약, 바이오 산업에 특화된 클린룸을 구축합니다.",
    color: "#00897B",
  },
  {
    num: "03",
    title: "유지 보수",
    subtitle: "Maintenance & Validation",
    desc: "클린룸 인증 취득 지원 및 정기 점검, 성능 검증 서비스로 최적의 운영 환경을 유지합니다.",
    color: "#1565C0",
  },
  {
    num: "04",
    title: "컨설팅",
    subtitle: "Engineering Consulting",
    desc: "프로젝트 기획 단계부터 완공까지 전문 엔지니어링 컨설팅으로 최적의 솔루션을 제안합니다.",
    color: "#00897B",
  },
];

export default function Home() {
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsStarted, setStatsStarted] = useState(false);
  const { data: recentProjects = [], isLoading: isLoadingProjects } = trpc.projects.list.useQuery();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-end overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1829]/90 via-[#0D1829]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D1829]/60 to-transparent" />

        {/* Vertical label */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex items-center gap-2">
          <span className="vertical-label text-white/40">Cleanroom Engineering</span>
          <div className="w-px h-16 bg-white/20" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-10 pb-24 w-full">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#4A9EFF]" />
              <span className="text-[11px] text-[#4A9EFF] tracking-[0.2em] uppercase font-['DM_Mono']">
                Since 2022
              </span>
            </div>
            <h1 className="text-[48px] lg:text-[68px] font-bold text-white leading-[1.05] tracking-tight mb-6 font-['DM_Sans']">
              Precision<br />
              <span className="text-[#4A9EFF]">Cleanroom</span><br />
              Engineering
            </h1>
            <p className="text-[15px] text-white/70 leading-relaxed mb-8 font-['Noto_Sans_KR'] font-light max-w-md">
              냉난방 공조와 크린룸 환경을 설계하고 시공합니다.
              고객과 함께 나아가는 이상이엔지가 최적의 환경을 만들어갑니다.
            </p>
            <div className="flex items-center gap-4">
              <Link href="/projects">
                <button className="flex items-center gap-2 px-6 py-3 bg-[#1565C0] text-white text-[13px] font-medium hover:bg-[#0D47A1] transition-colors duration-200 font-['Noto_Sans_KR']" style={{ borderRadius: "2px" }}>
                  시공 사례 보기
                  <ArrowRight size={14} />
                </button>
              </Link>
              <Link href="/contact">
                <button className="flex items-center gap-2 px-6 py-3 border border-white/30 text-white text-[13px] font-medium hover:border-white/60 transition-colors duration-200 font-['Noto_Sans_KR']" style={{ borderRadius: "2px" }}>
                  견적 문의
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
          <span className="text-[10px] tracking-[0.2em] font-['DM_Mono']">SCROLL</span>
          <ChevronDown size={14} className="animate-bounce" />
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="bg-white border-b border-[#E2E6EA]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-[#E2E6EA]">
            <div className="lg:px-10 first:pl-0">
              <StatItem value={2022} suffix="" label="설립 연도" started={statsStarted} />
            </div>
            <div className="lg:px-10">
              <StatItem value={3} suffix="" label="핵심 사업 분야" started={statsStarted} />
            </div>
            <div className="lg:px-10">
              <StatItem value={2} suffix="" label="주력 엔지니어링 분야" started={statsStarted} />
            </div>
            <div className="lg:px-10">
              <StatItem value={1} suffix="+" label="ISO 4006 등 보유 면허" started={statsStarted} />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          {/* Section Header */}
          <div className="flex items-start justify-between mb-14">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-px bg-[#1565C0]" />
                <span className="text-[11px] text-[#1565C0] tracking-[0.2em] uppercase font-['DM_Mono']">Services</span>
              </div>
              <h2 className="text-[36px] lg:text-[44px] font-bold text-[#1A1F2E] tracking-tight font-['DM_Sans']">
                전문 서비스
              </h2>
            </div>
            <div className="hidden lg:block text-right">
              <p className="text-[13px] text-[#6B7280] font-['Noto_Sans_KR'] font-light leading-relaxed max-w-xs">
                클린룸 설계부터 시공, 유지보수까지<br />
                원스톱 솔루션을 제공합니다.
              </p>
            </div>
          </div>

          {/* Service Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#E2E6EA]">
            {services.map((service) => (
              <div
                key={service.num}
                className="bg-white p-8 lg:p-10 group hover:bg-[#F8F9FA] transition-colors duration-200"
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="text-[11px] font-['DM_Mono'] text-[#6B7280] tracking-wider">{service.num}</span>
                  <div
                    className="w-1.5 h-1.5 rounded-full mt-1"
                    style={{ backgroundColor: service.color }}
                  />
                </div>
                <h3 className="text-[20px] font-bold text-[#1A1F2E] mb-1 font-['DM_Sans'] tracking-tight">
                  {service.title}
                </h3>
                <div className="text-[11px] text-[#6B7280] tracking-[0.1em] mb-4 font-['DM_Mono']">
                  {service.subtitle}
                </div>
                <p className="text-[13px] text-[#6B7280] leading-relaxed font-['Noto_Sans_KR'] font-light">
                  {service.desc}
                </p>
                <div className="mt-6 flex items-center gap-2 text-[12px] font-['DM_Sans'] font-medium" style={{ color: service.color }}>
                  <span>자세히 보기</span>
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Image Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden" style={{ borderRadius: "2px" }}>
                <img
                  src={CONSTRUCTION_IMG}
                  alt="클린룸 시공 현장"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-5 -right-5 bg-[#1565C0] text-white p-5 hidden lg:block" style={{ borderRadius: "2px" }}>
                <div className="text-[32px] font-['DM_Mono'] font-light leading-none">20</div>
                <div className="text-[11px] tracking-wider font-['DM_Sans'] mt-1 opacity-80">YEARS</div>
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-px bg-[#00897B]" />
                <span className="text-[11px] text-[#00897B] tracking-[0.2em] uppercase font-['DM_Mono']">About Us</span>
              </div>
              <h2 className="text-[36px] lg:text-[44px] font-bold text-[#1A1F2E] tracking-tight mb-6 font-['DM_Sans']">
                클린룸 전문<br />엔지니어링 기업
              </h2>
              <p className="text-[14px] text-[#6B7280] leading-relaxed mb-6 font-['Noto_Sans_KR'] font-light">
                이상이엔지는 2022년 설립 이래 냉난방 공조와 크린룸 분야의 엔지니어링 서비스를 제공합니다.
                현장 조건과 고객의 요구사항을 바탕으로 실용적인 설계와 시공을 제안합니다.
              </p>
              <p className="text-[14px] text-[#6B7280] leading-relaxed mb-8 font-['Noto_Sans_KR'] font-light">
                고객과 함께 나아가는 이상이엔지는 프로젝트의 시작부터 완공 이후까지
                신뢰할 수 있는 파트너가 되겠습니다.
              </p>
              <div className="flex flex-col gap-3 mb-8">
                {[
                  "냉난방 공조 시스템 설계 및 시공",
                  "크린룸 환경 설계 및 시공",
                  "ISO 4006 등 보유 면허 기반의 전문 서비스",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00897B] flex-shrink-0" />
                    <span className="text-[13px] text-[#1A1F2E] font-['Noto_Sans_KR']">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/about">
                <button className="flex items-center gap-2 px-6 py-3 border border-[#1A1F2E] text-[#1A1F2E] text-[13px] font-medium hover:bg-[#1A1F2E] hover:text-white transition-colors duration-200 font-['Noto_Sans_KR']" style={{ borderRadius: "2px" }}>
                  회사 소개 보기
                  <ArrowRight size={14} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Projects Preview */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-px bg-[#1565C0]" />
                <span className="text-[11px] text-[#1565C0] tracking-[0.2em] uppercase font-['DM_Mono']">Recent Projects</span>
              </div>
              <h2 className="text-[36px] lg:text-[44px] font-bold text-[#1A1F2E] tracking-tight font-['DM_Sans']">
                최근 시공 사례
              </h2>
            </div>
            <Link href="/projects">
              <button className="hidden md:flex items-center gap-2 text-[13px] text-[#1565C0] font-medium hover:gap-3 transition-all duration-200 font-['Noto_Sans_KR']">
                전체 보기
                <ArrowRight size={14} />
              </button>
            </Link>
          </div>

          {/* Table */}
          <div className="bg-white border border-[#E2E6EA]" style={{ borderRadius: "2px" }}>
            {/* Header */}
            <div className="grid grid-cols-[80px_1fr_120px_100px_100px] gap-0 border-b border-[#E2E6EA] px-6 py-3">
              {["연도", "공사명", "위치", "등급", "면적"].map((h) => (
                <div key={h} className="text-[11px] text-[#6B7280] font-['DM_Mono'] tracking-wider">{h}</div>
              ))}
            </div>
            {isLoadingProjects ? (
              <div className="px-6 py-7 text-[13px] text-[#6B7280] font-['Noto_Sans_KR']">시공사례를 불러오는 중입니다.</div>
            ) : recentProjects.length === 0 ? (
              <div className="px-6 py-7 text-[13px] text-[#6B7280] font-['Noto_Sans_KR']">등록된 시공사례가 없습니다.</div>
            ) : recentProjects.slice(0, 3).map((p) => (
              <div
                key={p.id}
                className="grid grid-cols-[80px_1fr_120px_100px_100px] gap-0 px-6 py-4 border-b border-[#F0F2F5] last:border-0 hover:bg-[#F8F9FA] transition-colors duration-150"
              >
                <div className="text-[12px] text-[#6B7280] font-['DM_Mono']">{p.year}</div>
                <div className="text-[13px] text-[#1A1F2E] font-['Noto_Sans_KR'] font-medium">{p.name}</div>
                <div className="text-[12px] text-[#6B7280] font-['Noto_Sans_KR']">{p.location}</div>
                <div className="text-[12px] font-['DM_Mono']" style={{ color: "#1565C0" }}>{p.grade}</div>
                <div className="text-[12px] text-[#6B7280] font-['DM_Mono']">{p.area.toLocaleString()}㎡</div>
              </div>
            ))}
          </div>

          <div className="mt-4 flex justify-end">
            <Link href="/projects">
              <button className="flex items-center gap-2 text-[13px] text-[#1565C0] font-medium font-['Noto_Sans_KR'] md:hidden">
                전체 시공 사례 보기 <ArrowRight size={14} />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#1A1F2E] relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${TECH_IMG})` }}
        />
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#4A9EFF]" />
            <span className="text-[11px] text-[#4A9EFF] tracking-[0.2em] uppercase font-['DM_Mono']">Get In Touch</span>
            <div className="w-8 h-px bg-[#4A9EFF]" />
          </div>
          <h2 className="text-[36px] lg:text-[52px] font-bold text-white tracking-tight mb-6 font-['DM_Sans']">
            프로젝트를 시작하세요
          </h2>
          <p className="text-[15px] text-white/60 leading-relaxed mb-10 font-['Noto_Sans_KR'] font-light max-w-lg mx-auto">
            클린룸 구축에 대한 모든 궁금증을 전문 엔지니어가 답변드립니다.
            지금 바로 무료 상담을 신청하세요.
          </p>
          <Link href="/contact">
            <button className="inline-flex items-center gap-3 px-8 py-4 bg-[#1565C0] text-white text-[14px] font-medium hover:bg-[#0D47A1] transition-colors duration-200 font-['Noto_Sans_KR']" style={{ borderRadius: "2px" }}>
              무료 상담 신청
              <ArrowRight size={16} />
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
