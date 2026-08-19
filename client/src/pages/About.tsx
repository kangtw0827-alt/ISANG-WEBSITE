/*
 * DESIGN: Engineering Precision
 * - Company intro with team image
 * - Timeline for history
 * - Certifications grid
 * - Core values with hairline borders
 */

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ABOUT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663566585792/UV3ApsRFKvxRDoHzqCkMDQ/about-team-cNaizREdsSvDZhXQU6qJgK.webp";
const CONSTRUCTION_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663566585792/UV3ApsRFKvxRDoHzqCkMDQ/cleanroom-construction-mJi5zaGLRJd3o4oNNdu4VQ.webp";

const history = [
  { year: "2022", event: "이상이엔지 설립", detail: "냉난방 공조와 크린룸 엔지니어링 서비스를 시작" },
];

const certifications = [
  { name: "ISO 4006 등", desc: "보유 면허 및 관련 자격", year: "LICENSE" },
];

const values = [
  {
    num: "01",
    title: "정밀성",
    subtitle: "Precision",
    desc: "마이크론 단위의 정밀도를 요구하는 클린룸 환경에서 타협 없는 기술 정밀성을 추구합니다.",
    color: "#1565C0",
  },
  {
    num: "02",
    title: "신뢰성",
    subtitle: "Reliability",
    desc: "고객의 요구사항을 경청하고 약속한 기준을 지키는 엔지니어링 파트너가 됩니다.",
    color: "#00897B",
  },
  {
    num: "03",
    title: "혁신",
    subtitle: "Innovation",
    desc: "최신 클린룸 기술 트렌드를 선도하며 고객의 미래 요구사항에 선제적으로 대응합니다.",
    color: "#1565C0",
  },
];

const team = [
  { name: "냉난방 공조", role: "HVAC Engineering", career: "현장 조건에 맞춘 공조 환경 설계" },
  { name: "크린룸", role: "Cleanroom Engineering", career: "청정 환경 구축을 위한 설계·시공" },
  { name: "고객 중심", role: "Customer Partnership", career: "고객과 함께 나아가는 프로젝트 관리" },
];

export default function About() {
  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      <Navigation />

      {/* Page Header */}
      <div className="pt-28 pb-12 bg-white border-b border-[#E2E6EA]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px bg-[#00897B]" />
            <span className="text-[11px] text-[#00897B] tracking-[0.2em] uppercase font-['DM_Mono']">About Us</span>
          </div>
          <h1 className="text-[40px] lg:text-[52px] font-bold text-[#1A1F2E] tracking-tight font-['DM_Sans']">
            회사 소개
          </h1>
          <p className="text-[14px] text-[#6B7280] mt-2 font-['Noto_Sans_KR'] font-light max-w-lg">
            2022년 설립된 이상이엔지는 고객과 함께 나아가는 엔지니어링 파트너입니다.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-px bg-[#1565C0]" />
                <span className="text-[11px] text-[#1565C0] tracking-[0.2em] uppercase font-['DM_Mono']">Mission</span>
              </div>
              <h2 className="text-[32px] lg:text-[40px] font-bold text-[#1A1F2E] tracking-tight mb-6 font-['DM_Sans']">
                청정 환경이<br />미래를 만듭니다
              </h2>
              <p className="text-[14px] text-[#6B7280] leading-relaxed mb-5 font-['Noto_Sans_KR'] font-light">
                이상이엔지는 냉난방 공조와 크린룸 환경의 설계·시공을 제공합니다.
                프로젝트의 목적과 현장 조건을 세심하게 검토해 안정적인 작업 환경을 만들어갑니다.
              </p>
              <p className="text-[14px] text-[#6B7280] leading-relaxed font-['Noto_Sans_KR'] font-light">
                고객의 요구사항을 정확히 이해하고, 설계부터 시공까지 책임감 있게 수행하는 것을
                이상이엔지의 기본 원칙으로 삼고 있습니다.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden" style={{ borderRadius: "2px" }}>
                <img src={ABOUT_IMG} alt="이상엔지니어링 팀" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-6 h-px bg-[#1565C0]" />
            <span className="text-[11px] text-[#1565C0] tracking-[0.2em] uppercase font-['DM_Mono']">Core Values</span>
          </div>
          <h2 className="text-[32px] font-bold text-[#1A1F2E] tracking-tight mb-12 font-['DM_Sans']">핵심 가치</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E2E6EA]">
            {values.map((v) => (
              <div key={v.num} className="bg-white p-8 lg:p-10">
                <div className="flex items-start justify-between mb-6">
                  <span className="text-[11px] font-['DM_Mono'] text-[#6B7280] tracking-wider">{v.num}</span>
                  <div className="w-1.5 h-1.5 rounded-full mt-1" style={{ backgroundColor: v.color }} />
                </div>
                <h3 className="text-[22px] font-bold text-[#1A1F2E] mb-1 font-['DM_Sans'] tracking-tight">{v.title}</h3>
                <div className="text-[11px] text-[#6B7280] tracking-[0.1em] mb-4 font-['DM_Mono']">{v.subtitle}</div>
                <p className="text-[13px] text-[#6B7280] leading-relaxed font-['Noto_Sans_KR'] font-light">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px bg-[#00897B]" />
            <span className="text-[11px] text-[#00897B] tracking-[0.2em] uppercase font-['DM_Mono']">History</span>
          </div>
          <h2 className="text-[32px] font-bold text-[#1A1F2E] tracking-tight mb-12 font-['DM_Sans']">연혁</h2>

          <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-0">
            {history.map((h, i) => (
              <div key={i} className="contents">
                {/* Year */}
                <div className="py-5 lg:py-6 border-b border-[#F0F2F5] flex items-center">
                  <span className="text-[22px] font-['DM_Mono'] font-light text-[#1565C0] tracking-tight">{h.year}</span>
                </div>
                {/* Event */}
                <div className="py-5 lg:py-6 border-b border-[#F0F2F5] lg:pl-10 flex items-center">
                  <div>
                    <div className="text-[14px] font-medium text-[#1A1F2E] font-['Noto_Sans_KR']">{h.event}</div>
                    <div className="text-[12px] text-[#6B7280] mt-1 font-['Noto_Sans_KR'] font-light">{h.detail}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px bg-[#1565C0]" />
            <span className="text-[11px] text-[#1565C0] tracking-[0.2em] uppercase font-['DM_Mono']">Certifications</span>
          </div>
          <h2 className="text-[32px] font-bold text-[#1A1F2E] tracking-tight mb-10 font-['DM_Sans']">인증 현황</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#E2E6EA]">
            {certifications.map((c) => (
              <div key={c.name} className="bg-white p-6 lg:p-8">
                <div className="text-[11px] text-[#6B7280] font-['DM_Mono'] tracking-wider mb-3">{c.year}</div>
                <div className="text-[20px] font-bold text-[#1565C0] font-['DM_Sans'] mb-2">{c.name}</div>
                <div className="text-[12px] text-[#6B7280] font-['Noto_Sans_KR'] font-light">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-px bg-[#00897B]" />
                <span className="text-[11px] text-[#00897B] tracking-[0.2em] uppercase font-['DM_Mono']">Leadership</span>
              </div>
          <h2 className="text-[32px] font-bold text-[#1A1F2E] tracking-tight mb-8 font-['DM_Sans']">기술 역량</h2>
              <div className="flex flex-col gap-0">
                {team.map((m, i) => (
                  <div key={i} className="flex items-center justify-between py-4 border-b border-[#F0F2F5]">
                    <div>
                      <div className="text-[14px] font-medium text-[#1A1F2E] font-['Noto_Sans_KR']">{m.name}</div>
                      <div className="text-[12px] text-[#6B7280] mt-0.5 font-['Noto_Sans_KR'] font-light">{m.role}</div>
                    </div>
                    <div className="text-[12px] text-[#6B7280] font-['Noto_Sans_KR'] font-light text-right">{m.career}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="aspect-[4/3] overflow-hidden" style={{ borderRadius: "2px" }}>
              <img src={CONSTRUCTION_IMG} alt="시공 현장" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
