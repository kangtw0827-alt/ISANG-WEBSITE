/*
 * DESIGN: Engineering Precision
 * - White-space driven business overview with hairline dividers
 * - Tech blue and emerald accent points communicate precision and reliability
 * - Uses the existing engineering image assets and asymmetric information layout
 */

import { ArrowRight, Check } from "lucide-react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const CONSTRUCTION_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663566585792/UV3ApsRFKvxRDoHzqCkMDQ/cleanroom-construction-mJi5zaGLRJd3o4oNNdu4VQ.webp";
const TECH_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663566585792/UV3ApsRFKvxRDoHzqCkMDQ/cleanroom-tech-Ka2DCZZG3QZJz4Y8QgPXCY.webp";

const businessAreas = [
  {
    number: "01",
    title: "냉난방 공조",
    english: "HVAC Engineering",
    description:
      "현장 조건과 사용 목적을 검토하여 안정적인 실내 환경을 위한 냉난방·공조 시스템의 설계와 시공을 제공합니다.",
    details: ["현장 조건 및 요구사항 검토", "냉난방·공조 설비 계획", "시공 및 운영 점검"],
    accent: "#1565C0",
  },
  {
    number: "02",
    title: "크린룸 설계·시공",
    english: "Cleanroom Engineering",
    description:
      "크린룸의 용도와 청정 환경 요구사항을 바탕으로 공간 계획부터 설비, 마감까지 통합적인 설계와 시공을 수행합니다.",
    details: ["공간 및 동선 계획", "공조·설비 연계 검토", "현장 시공 관리"],
    accent: "#00897B",
  },
  {
    number: "03",
    title: "고객 맞춤 프로젝트",
    english: "Customer Partnership",
    description:
      "고객과 함께 나아가는 이상이엔지는 프로젝트 초기 검토부터 설계·시공 과정까지 요구사항을 지속적으로 소통합니다.",
    details: ["프로젝트 요구사항 협의", "설계·시공 일정 조율", "완공 이후 문의 지원"],
    accent: "#1565C0",
  },
];

const industries = ["상업·업무시설", "산업·생산시설", "연구·실험시설", "고객 맞춤 프로젝트"];

export default function Business() {
  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      <Navigation />

      <main>
        <section className="pt-28 pb-12 bg-white border-b border-[#E2E6EA]">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-[#00897B]" />
              <span className="text-[11px] text-[#00897B] tracking-[0.2em] uppercase font-['DM_Mono']">
                Business Areas
              </span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 items-end">
              <div>
                <h1 className="text-[40px] lg:text-[52px] font-bold text-[#1A1F2E] tracking-tight font-['DM_Sans']">
                  사업 소개
                </h1>
                <p className="text-[14px] text-[#6B7280] mt-3 font-['Noto_Sans_KR'] font-light leading-relaxed max-w-2xl">
                  냉난방 공조와 크린룸 설계·시공을 중심으로, 이상이엔지는 고객 현장에 필요한
                  엔지니어링 서비스를 제공합니다.
                </p>
              </div>
              <div className="lg:border-l border-[#E2E6EA] lg:pl-8 grid grid-cols-2 gap-6">
                <div>
                  <div className="text-[30px] leading-none text-[#1565C0] font-['DM_Mono'] font-light">3</div>
                  <div className="mt-1 text-[11px] text-[#6B7280] font-['DM_Mono'] tracking-wider">CORE AREAS</div>
                </div>
                <div>
                  <div className="text-[30px] leading-none text-[#00897B] font-['DM_Mono'] font-light">2022</div>
                  <div className="mt-1 text-[11px] text-[#6B7280] font-['DM_Mono'] tracking-wider">ESTABLISHED</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-[#F8F9FA]">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-8 lg:gap-14">
              <div className="lg:pt-3">
                <div className="vertical-label hidden lg:block">Integrated Cleanroom Services</div>
                <div className="lg:hidden flex items-center gap-3">
                  <div className="w-6 h-px bg-[#1565C0]" />
                  <span className="text-[11px] text-[#1565C0] tracking-[0.2em] uppercase font-['DM_Mono']">What We Do</span>
                </div>
              </div>
              <div className="bg-[#E2E6EA] grid grid-cols-1 gap-px">
                {businessAreas.map((area) => (
                  <article key={area.number} className="group bg-white px-6 py-8 lg:px-10 lg:py-10 transition-colors duration-200 hover:bg-[#FBFCFD]">
                    <div className="grid grid-cols-1 md:grid-cols-[88px_1fr_240px] gap-5 md:gap-8">
                      <div className="flex items-start justify-between md:block">
                        <span className="text-[12px] text-[#6B7280] font-['DM_Mono']">{area.number}</span>
                        <span className="md:hidden w-1.5 h-1.5 rounded-full mt-1.5" style={{ backgroundColor: area.accent }} />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h2 className="text-[23px] lg:text-[26px] font-bold text-[#1A1F2E] tracking-tight font-['DM_Sans']">{area.title}</h2>
                          <span className="hidden md:block w-1.5 h-1.5 rounded-full" style={{ backgroundColor: area.accent }} />
                        </div>
                        <div className="text-[11px] text-[#6B7280] tracking-[0.12em] font-['DM_Mono']">{area.english}</div>
                        <p className="mt-5 text-[13px] leading-relaxed text-[#6B7280] font-['Noto_Sans_KR'] font-light max-w-xl">{area.description}</p>
                      </div>
                      <ul className="border-t md:border-t-0 md:border-l border-[#E2E6EA] pt-4 md:pt-0 md:pl-7 flex flex-col justify-center gap-3">
                        {area.details.map((detail) => (
                          <li key={detail} className="flex gap-2 text-[12px] text-[#1A1F2E] font-['Noto_Sans_KR']">
                            <Check size={14} className="shrink-0 mt-0.5" style={{ color: area.accent }} />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white border-y border-[#E2E6EA]">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="aspect-[4/3] overflow-hidden" style={{ borderRadius: "2px" }}>
                <img src={CONSTRUCTION_IMAGE} alt="클린룸 시공 현장" className="h-full w-full object-cover" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-6 h-px bg-[#00897B]" />
                  <span className="text-[11px] text-[#00897B] tracking-[0.2em] uppercase font-['DM_Mono']">Process</span>
                </div>
                <h2 className="text-[32px] lg:text-[40px] font-bold text-[#1A1F2E] tracking-tight font-['DM_Sans']">프로젝트의 전 과정을<br />정밀하게 연결합니다</h2>
                <div className="mt-8 border-t border-[#E2E6EA]">
                  {[
                    ["01", "현장·요구사항 분석", "공정 특성, 청정도 기준, 공간 조건을 종합적으로 검토합니다."],
                    ["02", "최적화 설계·시공", "품질과 시공성, 운영 효율을 고려한 통합 솔루션을 적용합니다."],
                    ["03", "검증·운영 지원", "성능 검증과 유지관리 기준을 제시해 안정적인 가동을 뒷받침합니다."],
                  ].map(([number, title, description]) => (
                    <div key={number} className="grid grid-cols-[46px_1fr] gap-3 py-5 border-b border-[#E2E6EA]">
                      <span className="text-[11px] text-[#1565C0] font-['DM_Mono'] pt-0.5">{number}</span>
                      <div>
                        <h3 className="text-[14px] text-[#1A1F2E] font-medium font-['Noto_Sans_KR']">{title}</h3>
                        <p className="mt-1 text-[12px] text-[#6B7280] leading-relaxed font-['Noto_Sans_KR'] font-light">{description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-[#1A1F2E] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-center bg-cover" style={{ backgroundImage: `url(${TECH_IMAGE})` }} />
          <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 items-end">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-6 h-px bg-[#4A9EFF]" />
                  <span className="text-[11px] text-[#4A9EFF] tracking-[0.2em] uppercase font-['DM_Mono']">Industries</span>
                </div>
                <h2 className="text-[32px] lg:text-[40px] font-bold text-white tracking-tight font-['DM_Sans']">현장별 요구조건에<br />맞춘 공조·청정 환경</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/15 border border-white/15">
                {industries.map((industry, index) => (
                  <div key={industry} className="bg-[#1A1F2E]/95 p-5 flex items-center gap-4">
                    <span className="text-[11px] text-[#4A9EFF] font-['DM_Mono']">0{index + 1}</span>
                    <span className="text-[13px] text-white/80 font-['Noto_Sans_KR']">{industry}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-white/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
              <p className="text-[14px] text-white/60 font-['Noto_Sans_KR'] font-light">귀사의 공정 조건에 맞는 클린룸 솔루션을 상담해 보세요.</p>
              <Link href="/contact">
                <span className="inline-flex items-center gap-3 px-6 py-3 bg-[#1565C0] text-white text-[13px] font-medium hover:bg-[#0D47A1] transition-colors font-['Noto_Sans_KR']" style={{ borderRadius: "2px" }}>
                  프로젝트 상담하기
                  <ArrowRight size={15} />
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
