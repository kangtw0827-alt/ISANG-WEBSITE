/*
 * DESIGN: Engineering Precision
 * - Minimal contact form with hairline borders
 * - Contact info with DM Mono labels
 * - Split layout: form left, info right
 */

import { useState } from "react";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const contactInfo = [
  { label: "TEL", value: "042-564-2223" },
  { label: "EMAIL", value: "isang@isang.co.kr" },
  { label: "ADDRESS", value: "대전광역시 서구 관저동 1969-10, 2F" },
  { label: "HOURS", value: "평일 09:00 - 18:00" },
];

const inquiryTypes = [
  "클린룸 신축 문의",
  "클린룸 증설/개보수",
  "유지보수 및 점검",
  "기술 컨설팅",
  "기타 문의",
];

export default function Contact() {
  const [form, setForm] = useState({
    company: "",
    name: "",
    phone: "",
    email: "",
    type: "클린룸 신축 문의",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.company || !form.name || !form.phone || !form.message) {
      toast.error("필수 항목을 모두 입력해 주세요.");
      return;
    }
    setSubmitted(true);
    toast.success("문의가 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.");
  }

  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      <Navigation />

      {/* Page Header */}
      <div className="pt-28 pb-12 bg-white border-b border-[#E2E6EA]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px bg-[#1565C0]" />
            <span className="text-[11px] text-[#1565C0] tracking-[0.2em] uppercase font-['DM_Mono']">Contact</span>
          </div>
          <h1 className="text-[40px] lg:text-[52px] font-bold text-[#1A1F2E] tracking-tight font-['DM_Sans']">
            문의하기
          </h1>
          <p className="text-[14px] text-[#6B7280] mt-2 font-['Noto_Sans_KR'] font-light">
            클린룸 구축에 관한 모든 문의를 환영합니다.
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 items-start">

            {/* Contact Form */}
            <div className="bg-white border border-[#E2E6EA]" style={{ borderRadius: "2px" }}>
              <div className="px-8 py-6 border-b border-[#E2E6EA]">
                <h2 className="text-[18px] font-bold text-[#1A1F2E] font-['DM_Sans']">견적 및 상담 문의</h2>
                <p className="text-[12px] text-[#6B7280] mt-1 font-['Noto_Sans_KR']">
                  <span className="text-red-400">*</span> 표시는 필수 입력 항목입니다.
                </p>
              </div>

              {submitted ? (
                <div className="px-8 py-16 text-center">
                  <div className="w-12 h-12 bg-[#ECFDF5] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-[#00897B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-[18px] font-bold text-[#1A1F2E] mb-2 font-['DM_Sans']">문의가 접수되었습니다</h3>
                  <p className="text-[13px] text-[#6B7280] font-['Noto_Sans_KR'] font-light leading-relaxed">
                    담당자가 확인 후 영업일 기준 1~2일 내에<br />
                    연락드리겠습니다.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ company: "", name: "", phone: "", email: "", type: "클린룸 신축 문의", message: "" }); }}
                    className="mt-6 px-5 py-2.5 text-[13px] border border-[#E2E6EA] text-[#1A1F2E] hover:border-[#1565C0] hover:text-[#1565C0] transition-colors font-['Noto_Sans_KR']"
                    style={{ borderRadius: "2px" }}
                  >
                    새 문의 작성
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="px-8 py-6 grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Company */}
                  <div>
                    <label className="block text-[11px] text-[#6B7280] font-['DM_Mono'] tracking-wider mb-2">
                      회사명 <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      placeholder="(주)회사명"
                      className="w-full px-3 py-2.5 text-[13px] border border-[#E2E6EA] text-[#1A1F2E] focus:outline-none focus:border-[#1565C0] font-['Noto_Sans_KR']"
                      style={{ borderRadius: "2px" }}
                    />
                  </div>

                  {/* Name */}
                  <div>
                    <label className="block text-[11px] text-[#6B7280] font-['DM_Mono'] tracking-wider mb-2">
                      담당자명 <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="홍길동"
                      className="w-full px-3 py-2.5 text-[13px] border border-[#E2E6EA] text-[#1A1F2E] focus:outline-none focus:border-[#1565C0] font-['Noto_Sans_KR']"
                      style={{ borderRadius: "2px" }}
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-[11px] text-[#6B7280] font-['DM_Mono'] tracking-wider mb-2">
                      연락처 <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="010-0000-0000"
                      className="w-full px-3 py-2.5 text-[13px] border border-[#E2E6EA] text-[#1A1F2E] focus:outline-none focus:border-[#1565C0] font-['DM_Mono']"
                      style={{ borderRadius: "2px" }}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-[11px] text-[#6B7280] font-['DM_Mono'] tracking-wider mb-2">
                      이메일
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="email@company.com"
                      className="w-full px-3 py-2.5 text-[13px] border border-[#E2E6EA] text-[#1A1F2E] focus:outline-none focus:border-[#1565C0] font-['DM_Mono']"
                      style={{ borderRadius: "2px" }}
                    />
                  </div>

                  {/* Inquiry Type */}
                  <div className="md:col-span-2">
                    <label className="block text-[11px] text-[#6B7280] font-['DM_Mono'] tracking-wider mb-2">
                      문의 유형
                    </label>
                    <select
                      value={form.type}
                      onChange={(e) => setForm({ ...form, type: e.target.value })}
                      className="w-full px-3 py-2.5 text-[13px] border border-[#E2E6EA] text-[#1A1F2E] focus:outline-none focus:border-[#1565C0] font-['Noto_Sans_KR']"
                      style={{ borderRadius: "2px" }}
                    >
                      {inquiryTypes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="md:col-span-2">
                    <label className="block text-[11px] text-[#6B7280] font-['DM_Mono'] tracking-wider mb-2">
                      문의 내용 <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="클린룸 규모, 용도, 희망 일정 등 구체적인 내용을 입력해 주시면 더 정확한 견적을 제공해 드릴 수 있습니다."
                      rows={5}
                      className="w-full px-3 py-2.5 text-[13px] border border-[#E2E6EA] text-[#1A1F2E] focus:outline-none focus:border-[#1565C0] font-['Noto_Sans_KR'] resize-none leading-relaxed"
                      style={{ borderRadius: "2px" }}
                    />
                  </div>

                  {/* Submit */}
                  <div className="md:col-span-2 flex justify-end">
                    <button
                      type="submit"
                      className="flex items-center gap-2 px-6 py-3 bg-[#1565C0] text-white text-[13px] font-medium hover:bg-[#0D47A1] transition-colors duration-200 font-['Noto_Sans_KR']"
                      style={{ borderRadius: "2px" }}
                    >
                      문의 접수하기
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-6">
              <div className="bg-white border border-[#E2E6EA] p-6" style={{ borderRadius: "2px" }}>
                <div className="text-[11px] text-[#6B7280] font-['DM_Mono'] tracking-wider mb-5">CONTACT INFO</div>
                <div className="flex flex-col gap-0">
                  {contactInfo.map((c) => (
                    <div key={c.label} className="py-3.5 border-b border-[#F0F2F5] last:border-0">
                      <div className="text-[10px] text-[#9CA3AF] font-['DM_Mono'] tracking-wider mb-1">{c.label}</div>
                      <div className="text-[13px] text-[#1A1F2E] font-['Noto_Sans_KR']">{c.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#1A1F2E] p-6" style={{ borderRadius: "2px" }}>
                <div className="text-[11px] text-white/30 font-['DM_Mono'] tracking-wider mb-4">QUICK RESPONSE</div>
                <p className="text-[13px] text-white/70 font-['Noto_Sans_KR'] font-light leading-relaxed mb-4">
                  긴급 문의 또는 빠른 상담이 필요하신 경우 전화로 연락해 주시면 즉시 응대해 드립니다.
                </p>
                <a href="tel:0425642223" className="text-[22px] font-['DM_Mono'] font-light text-white hover:text-[#4A9EFF]">042-564-2223</a>
                <div className="text-[11px] text-white/30 font-['DM_Mono'] mt-1">평일 09:00 - 18:00</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
