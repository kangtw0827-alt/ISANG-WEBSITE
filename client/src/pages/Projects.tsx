import { useMemo, useState } from "react";
import { Link } from "wouter";
import { Filter, LogIn, Search, ShieldCheck } from "lucide-react";
import { startLogin } from "@/const";
import { useAuth } from "@/_core/hooks/useAuth";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { trpc } from "@/lib/trpc";

const GRADE_OPTIONS = ["전체", "ISO Class 4", "ISO Class 5", "ISO Class 6", "ISO Class 7", "ISO Class 8"];
const TYPE_OPTIONS = ["전체", "반도체 FAB", "제약 GMP", "바이오 연구", "디스플레이", "의료", "항공우주", "화장품"];

export default function Projects() {
  const [search, setSearch] = useState("");
  const [gradeFilter, setGradeFilter] = useState("전체");
  const [typeFilter, setTypeFilter] = useState("전체");
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const { data: projects = [], isLoading } = trpc.projects.list.useQuery();
  const { user, loading: authLoading } = useAuth();

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase();
    return projects.filter((project) => {
      const matchSearch = !term || [project.name, project.client, project.location, project.projectType]
        .some((value) => value.toLowerCase().includes(term));
      const matchGrade = gradeFilter === "전체" || project.grade === gradeFilter;
      const matchType = typeFilter === "전체" || project.projectType === typeFilter;
      return matchSearch && matchGrade && matchType;
    });
  }, [projects, search, gradeFilter, typeFilter]);

  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      <Navigation />
      <main>
        <section className="pt-28 pb-12 bg-white border-b border-[#E2E6EA]">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-[#1565C0]" />
              <span className="text-[11px] text-[#1565C0] tracking-[0.2em] uppercase font-['DM_Mono']">Construction Cases</span>
            </div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div>
                <h1 className="text-[40px] lg:text-[52px] font-bold text-[#1A1F2E] tracking-tight font-['DM_Sans']">시공 사례</h1>
                <p className="text-[14px] text-[#6B7280] mt-2 font-['Noto_Sans_KR'] font-light">이상엔지니어링이 중앙 관리하는 주요 프로젝트 현황입니다.</p>
              </div>
              {!authLoading && (
                user?.role === "admin" ? (
                  <Link href="/admin">
                    <span className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#1A1F2E] text-white text-[13px] font-medium font-['Noto_Sans_KR'] hover:bg-[#2D3444] transition-colors" style={{ borderRadius: "2px" }}>
                      <ShieldCheck size={15} /> 관리자 관리
                    </span>
                  </Link>
                ) : (
                  <button onClick={() => startLogin()} className="inline-flex items-center gap-2 px-4 py-2.5 border border-[#1A1F2E] text-[#1A1F2E] text-[13px] font-medium font-['Noto_Sans_KR'] hover:bg-[#1A1F2E] hover:text-white transition-colors" style={{ borderRadius: "2px" }}>
                    <LogIn size={15} /> 관리자 로그인
                  </button>
                )
              )}
            </div>
          </div>
        </section>

        <section className="max-w-[1280px] mx-auto px-6 lg:px-10 py-8 lg:py-10">
          <div className="flex flex-col lg:flex-row gap-3 lg:items-center justify-between mb-5">
            <div className="flex flex-wrap gap-3 items-center">
              <div className="relative">
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
                <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="공사명, 발주처, 위치 검색" className="w-[230px] pl-9 pr-4 py-2 text-[13px] border border-[#E2E6EA] bg-white focus:outline-none focus:border-[#1565C0] font-['Noto_Sans_KR']" style={{ borderRadius: "2px" }} />
              </div>
              <div className="flex items-center gap-1.5">
                <Filter size={12} className="text-[#9CA3AF]" />
                <select value={gradeFilter} onChange={(event) => setGradeFilter(event.target.value)} className="px-3 py-2 text-[12px] border border-[#E2E6EA] bg-white focus:outline-none focus:border-[#1565C0] font-['DM_Mono']" style={{ borderRadius: "2px" }}>
                  {GRADE_OPTIONS.map((grade) => <option key={grade}>{grade}</option>)}
                </select>
              </div>
              <select value={typeFilter} onChange={(event) => setTypeFilter(event.target.value)} className="px-3 py-2 text-[12px] border border-[#E2E6EA] bg-white focus:outline-none focus:border-[#1565C0] font-['Noto_Sans_KR']" style={{ borderRadius: "2px" }}>
                {TYPE_OPTIONS.map((type) => <option key={type}>{type}</option>)}
              </select>
            </div>
            <span className="text-[12px] text-[#6B7280] font-['DM_Mono']">{filtered.length} / {projects.length} PROJECTS</span>
          </div>

          <div className="bg-white border border-[#E2E6EA] overflow-x-auto" style={{ borderRadius: "2px" }}>
            <div className="min-w-[780px]">
              <div className="grid grid-cols-[72px_1fr_125px_130px_100px_90px] px-5 py-3 bg-[#F8F9FA] border-b border-[#E2E6EA] text-[11px] text-[#6B7280] font-['DM_Mono'] tracking-wider">
                <div>연도</div><div>공사명</div><div>발주처</div><div>위치</div><div>등급</div><div>면적(㎡)</div>
              </div>
              {isLoading ? (
                <div className="px-5 py-14 text-center text-[13px] text-[#6B7280] font-['Noto_Sans_KR']">시공사례를 불러오는 중입니다.</div>
              ) : filtered.length === 0 ? (
                <div className="px-5 py-14 text-center">
                  <p className="text-[14px] text-[#1A1F2E] font-medium font-['Noto_Sans_KR']">등록된 시공사례가 없습니다.</p>
                  <p className="mt-2 text-[12px] text-[#6B7280] font-['Noto_Sans_KR'] font-light">관리자 로그인 후 첫 번째 시공사례를 중앙 저장소에 등록해 주세요.</p>
                </div>
              ) : filtered.map((project) => (
                <div key={project.id}>
                  <button onClick={() => setExpandedId(expandedId === project.id ? null : project.id)} className="w-full text-left grid grid-cols-[72px_1fr_125px_130px_100px_90px] px-5 py-4 border-b border-[#F0F2F5] hover:bg-[#F8F9FA] transition-colors">
                    <span className="text-[12px] text-[#6B7280] font-['DM_Mono']">{project.year}</span>
                    <span className="pr-4"><span className="block text-[13px] text-[#1A1F2E] font-medium font-['Noto_Sans_KR']">{project.name}</span><span className="block mt-1 text-[11px] text-[#9CA3AF] font-['Noto_Sans_KR']">{project.projectType}</span></span>
                    <span className="text-[12px] text-[#6B7280] font-['Noto_Sans_KR'] truncate">{project.client}</span>
                    <span className="text-[12px] text-[#6B7280] font-['Noto_Sans_KR'] truncate">{project.location}</span>
                    <span><span className="inline-block text-[11px] text-[#1565C0] bg-[#EEF2FF] px-2 py-0.5 font-['DM_Mono']" style={{ borderRadius: "2px" }}>{project.grade.replace("ISO ", "")}</span></span>
                    <span className="text-[12px] text-[#1A1F2E] font-['DM_Mono']">{project.area.toLocaleString()}</span>
                  </button>
                  {expandedId === project.id && (
                    <div className="px-5 py-5 bg-[#F8F9FA] border-b border-[#E2E6EA] grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4">
                      <div><div className="text-[10px] text-[#9CA3AF] font-['DM_Mono'] tracking-wider">PROJECT DESCRIPTION</div><p className="mt-2 text-[13px] text-[#1A1F2E] leading-relaxed font-['Noto_Sans_KR']">{project.description}</p></div>
                      <div className="text-[12px] text-[#6B7280] font-['Noto_Sans_KR'] md:text-right"><span className="block">공사 기간 {project.duration}</span><span className="mt-1 inline-block">{project.status === "in_progress" ? "진행중" : "완료"}</span></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
