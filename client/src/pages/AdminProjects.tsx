import { useState } from "react";
import { Link } from "wouter";
import { Building2, Edit3, ExternalLink, Loader2, LogIn, Plus, Save, ShieldAlert, Trash2, X } from "lucide-react";
import { toast } from "sonner";
import { startLogin } from "@/const";
import { useAuth } from "@/_core/hooks/useAuth";
import DashboardLayout from "@/components/DashboardLayout";
import { trpc } from "@/lib/trpc";

type ProjectForm = {
  year: string; name: string; client: string; location: string; projectType: string; grade: string; area: string; duration: string; description: string; status: "completed" | "in_progress";
};

const initialForm: ProjectForm = { year: String(new Date().getFullYear()), name: "", client: "", location: "", projectType: "반도체 FAB", grade: "ISO Class 5", area: "", duration: "", description: "", status: "completed" };
const typeOptions = ["반도체 FAB", "제약 GMP", "바이오 연구", "디스플레이", "의료", "항공우주", "화장품", "기타"];
const gradeOptions = ["ISO Class 4", "ISO Class 5", "ISO Class 6", "ISO Class 7", "ISO Class 8"];

export default function AdminProjects() {
  const { user, loading: authLoading } = useAuth();
  const utils = trpc.useUtils();
  const { data: projects = [], isLoading } = trpc.projects.list.useQuery(undefined, { enabled: user?.role === "admin" });
  const [formOpen, setFormOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [form, setForm] = useState<ProjectForm>(initialForm);

  const createProject = trpc.projects.create.useMutation({
    onSuccess: async () => { await utils.projects.list.invalidate(); closeForm(); toast.success("시공사례가 중앙 저장소에 등록되었습니다."); },
    onError: () => toast.error("저장하지 못했습니다. 관리자 권한과 입력값을 확인해 주세요."),
  });
  const updateProject = trpc.projects.update.useMutation({
    onSuccess: async () => { await utils.projects.list.invalidate(); closeForm(); toast.success("시공사례가 수정되었습니다."); },
    onError: () => toast.error("수정하지 못했습니다. 다시 시도해 주세요."),
  });
  const removeProject = trpc.projects.remove.useMutation({
    onSuccess: async () => { await utils.projects.list.invalidate(); toast.success("시공사례가 삭제되었습니다."); },
    onError: () => toast.error("삭제하지 못했습니다. 다시 시도해 주세요."),
  });

  function closeForm() { setFormOpen(false); setEditingId(null); setForm(initialForm); }
  function openCreate() { setEditingId(null); setForm(initialForm); setFormOpen(true); }
  function openEdit(project: typeof projects[number]) {
    setEditingId(project.id);
    setForm({ year: String(project.year), name: project.name, client: project.client, location: project.location, projectType: project.projectType, grade: project.grade, area: String(project.area), duration: project.duration, description: project.description, status: project.status });
    setFormOpen(true);
  }
  function submit() {
    const payload = { ...form, year: Number(form.year), area: Number(form.area) };
    if (!payload.name.trim() || !payload.client.trim() || !payload.location.trim() || !payload.description.trim() || !Number.isInteger(payload.year) || !Number.isInteger(payload.area) || payload.area <= 0) {
      toast.error("필수 항목과 면적 값을 확인해 주세요."); return;
    }
    if (editingId) updateProject.mutate({ id: editingId, data: payload }); else createProject.mutate(payload);
  }

  if (authLoading) return <div className="min-h-screen grid place-items-center bg-[#F8F9FA]"><Loader2 className="animate-spin text-[#1565C0]" /></div>;
  if (!user) return <AccessRequired title="관리자 로그인이 필요합니다" description="시공사례를 중앙 저장소에서 등록·수정·삭제하려면 관리자 계정으로 로그인해 주세요." />;
  if (user.role !== "admin") return <AccessRequired title="관리자 권한이 필요합니다" description="현재 계정에는 시공사례 관리 권한이 없습니다. 프로젝트 소유자 계정으로 로그인해 주세요." signedIn />;

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto py-4 lg:py-8">
        <div className="flex flex-col md:flex-row justify-between gap-6 mb-8">
          <div><div className="flex items-center gap-2 text-[11px] text-[#00897B] font-['DM_Mono'] tracking-[0.16em]"><span className="w-5 h-px bg-[#00897B]" /> ADMIN CONSOLE</div><h1 className="mt-3 text-[34px] font-bold text-[#1A1F2E] tracking-tight font-['DM_Sans']">시공사례 관리</h1><p className="mt-2 text-[13px] text-[#6B7280] font-['Noto_Sans_KR']">여기서 저장한 내용은 모든 방문자에게 동일하게 공개됩니다.</p></div>
          <div className="flex items-start gap-3"><Link href="/projects"><span className="inline-flex items-center gap-2 px-4 py-2.5 border border-[#E2E6EA] text-[13px] text-[#1A1F2E] hover:border-[#1565C0] font-['Noto_Sans_KR']" style={{ borderRadius: "2px" }}><ExternalLink size={14} /> 공개 화면</span></Link><button onClick={openCreate} className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#1565C0] text-white text-[13px] font-medium hover:bg-[#0D47A1] font-['Noto_Sans_KR']" style={{ borderRadius: "2px" }}><Plus size={15} /> 사례 등록</button></div>
        </div>
        <div className="border border-[#E2E6EA] bg-white" style={{ borderRadius: "2px" }}>
          <div className="px-5 py-3 border-b border-[#E2E6EA] bg-[#F8F9FA] text-[11px] text-[#6B7280] font-['DM_Mono'] tracking-wider">CENTRAL PROJECT REPOSITORY · {projects.length} RECORDS</div>
          {isLoading ? <div className="py-16 grid place-items-center"><Loader2 className="animate-spin text-[#1565C0]" /></div> : projects.length === 0 ? <div className="py-16 text-center"><Building2 size={28} className="mx-auto text-[#9CA3AF]" /><p className="mt-4 text-[14px] text-[#1A1F2E] font-medium font-['Noto_Sans_KR']">등록된 시공사례가 없습니다.</p><button onClick={openCreate} className="mt-4 text-[13px] text-[#1565C0] font-medium font-['Noto_Sans_KR']">첫 번째 사례 등록하기</button></div> : <div className="divide-y divide-[#F0F2F5]">{projects.map((project) => <div key={project.id} className="px-5 py-4 flex flex-col md:flex-row md:items-center gap-4 hover:bg-[#F8F9FA] transition-colors"><div className="w-16 text-[12px] text-[#6B7280] font-['DM_Mono']">{project.year}</div><div className="flex-1"><p className="text-[14px] text-[#1A1F2E] font-medium font-['Noto_Sans_KR']">{project.name}</p><p className="mt-1 text-[12px] text-[#6B7280] font-['Noto_Sans_KR']">{project.client} · {project.location} · {project.grade} · {project.area.toLocaleString()}㎡</p></div><div className="flex items-center gap-2"><button onClick={() => openEdit(project)} className="p-2 text-[#6B7280] hover:text-[#1565C0] hover:bg-[#EEF2FF]" aria-label={`${project.name} 수정`}><Edit3 size={16} /></button><button onClick={() => { if (window.confirm(`'${project.name}' 사례를 삭제할까요?`)) removeProject.mutate({ id: project.id }); }} className="p-2 text-[#6B7280] hover:text-red-500 hover:bg-red-50" aria-label={`${project.name} 삭제`}><Trash2 size={16} /></button></div></div>)}</div>}
        </div>
      </div>

      {formOpen && <div className="fixed inset-0 z-[100] flex items-center justify-center p-4"><button className="absolute inset-0 bg-black/40 backdrop-blur-sm" aria-label="모달 닫기" onClick={closeForm} /><div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white shadow-2xl" style={{ borderRadius: "2px" }}><div className="px-6 py-5 flex items-center justify-between border-b border-[#E2E6EA]"><div><h2 className="text-[19px] font-bold text-[#1A1F2E] font-['DM_Sans']">{editingId ? "시공사례 수정" : "시공사례 등록"}</h2><p className="mt-1 text-[12px] text-[#6B7280] font-['Noto_Sans_KR']">저장 즉시 공개 시공사례 목록에 반영됩니다.</p></div><button onClick={closeForm} className="p-2 text-[#6B7280] hover:text-[#1A1F2E]"><X size={18} /></button></div><div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-5"><Field label="연도"><input value={form.year} onChange={(e) => setForm({ ...form, year: e.target.value })} inputMode="numeric" className="field" placeholder="2026" /></Field><Field label="상태"><select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value as ProjectForm["status"] })} className="field"><option value="completed">완료</option><option value="in_progress">진행중</option></select></Field><Field label="공사명" wide><input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="field" placeholder="예: 제약 GMP 클린룸 구축" /></Field><Field label="발주처"><input value={form.client} onChange={(e) => setForm({ ...form, client: e.target.value })} className="field" /></Field><Field label="위치"><input value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} className="field" /></Field><Field label="공사 유형"><select value={form.projectType} onChange={(e) => setForm({ ...form, projectType: e.target.value })} className="field">{typeOptions.map((type) => <option key={type}>{type}</option>)}</select></Field><Field label="ISO 등급"><select value={form.grade} onChange={(e) => setForm({ ...form, grade: e.target.value })} className="field">{gradeOptions.map((grade) => <option key={grade}>{grade}</option>)}</select></Field><Field label="면적 (㎡)"><input value={form.area} onChange={(e) => setForm({ ...form, area: e.target.value })} inputMode="numeric" className="field" placeholder="2400" /></Field><Field label="공사 기간"><input value={form.duration} onChange={(e) => setForm({ ...form, duration: e.target.value })} className="field" placeholder="예: 8개월" /></Field><Field label="공사 개요" wide><textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className="field min-h-28 resize-y" placeholder="공사 범위, 주요 설비, 특이사항을 입력하세요." /></Field></div><div className="px-6 py-4 flex justify-end gap-3 border-t border-[#E2E6EA]"><button onClick={closeForm} className="px-5 py-2.5 text-[13px] text-[#6B7280] border border-[#E2E6EA] font-['Noto_Sans_KR']">취소</button><button onClick={submit} disabled={createProject.isPending || updateProject.isPending} className="inline-flex items-center gap-2 px-5 py-2.5 text-[13px] text-white bg-[#1565C0] disabled:opacity-60 font-['Noto_Sans_KR']"><Save size={14} /> {createProject.isPending || updateProject.isPending ? "저장 중" : "저장하기"}</button></div></div></div>}
    </DashboardLayout>
  );
}

function AccessRequired({ title, description, signedIn = false }: { title: string; description: string; signedIn?: boolean }) {
  return <div className="min-h-screen grid place-items-center bg-[#F8F9FA] p-6"><div className="w-full max-w-md bg-white border border-[#E2E6EA] p-8 text-center" style={{ borderRadius: "2px" }}><ShieldAlert size={30} className="mx-auto text-[#1565C0]" /><h1 className="mt-5 text-[22px] font-bold text-[#1A1F2E] font-['DM_Sans']">{title}</h1><p className="mt-3 text-[13px] leading-relaxed text-[#6B7280] font-['Noto_Sans_KR']">{description}</p>{signedIn ? <Link href="/"><span className="inline-flex mt-6 px-5 py-2.5 bg-[#1A1F2E] text-white text-[13px] font-['Noto_Sans_KR']">홈으로 돌아가기</span></Link> : <button onClick={() => startLogin()} className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 bg-[#1565C0] text-white text-[13px] font-medium font-['Noto_Sans_KR']"><LogIn size={15} /> 관리자 로그인</button>}</div></div>;
}

function Field({ label, children, wide = false }: { label: string; children: React.ReactNode; wide?: boolean }) {
  return <label className={wide ? "md:col-span-2" : ""}><span className="block mb-2 text-[11px] text-[#6B7280] font-['DM_Mono'] tracking-wider">{label}</span>{children}</label>;
}
