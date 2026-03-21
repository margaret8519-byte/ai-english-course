import React, { useMemo } from "react";
import { motion } from "framer-motion";
import {
  Sparkles, BrainCircuit, GraduationCap, MessageSquareText, Palette, Target, MonitorSmartphone,
  Gamepad2, ShieldCheck, Rocket, BookOpen, Mic, Wand2, BadgeCheck, Layers3, ArrowRight, Bot, Zap,
  Globe, Cpu, Orbit, Stars, ScanSearch, Lightbulb, PanelTop, Play, Network, Star, Atom,
  Image as ImageIcon, Volume2, ScanFace, MousePointerClick,
} from "lucide-react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";

const fadeUp = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };

const audience = [
  { icon: GraduationCap, text: "для школьников, которым хочется изучать английский интересно" },
  { icon: Cpu, text: "для детей и подростков, которым нравятся современные технологии" },
  { icon: Palette, text: "для тех, кто хочет не просто учить слова, а применять язык в проектах, общении и творчестве" },
  { icon: Sparkles, text: "для учеников, которым важна мотивация, визуальность и вовлечение" },
];

const modules = [
  { icon: BrainCircuit, title: "Английский + нейросети", text: "Знакомство с тем, как ИИ помогает учить слова, фразы, тексты и разговорный английский." },
  { icon: BookOpen, title: "Умный словарь и визуальная лексика", text: "Изучение слов через изображения, ассоциации, интерактивные карточки и AI-генерацию." },
  { icon: Mic, title: "Разговорный английский в новом формате", text: "Диалоги, мини-сценки, устные ответы и общение с опорой на современные инструменты." },
  { icon: Wand2, title: "Английский для творчества", text: "Создание историй, постеров, комиксов, мини-проектов и идей на английском языке." },
  { icon: Target, title: "Персонализированное обучение", text: "Подбор заданий по уровню ученика, помощь в объяснении тем, индивидуальные маршруты." },
  { icon: Globe, title: "Английский в цифровом мире", text: "Как использовать язык для работы с современными сервисами, проектами и технологиями." },
  { icon: Gamepad2, title: "Игровые задания и интерактив", text: "Квизы, визуальные упражнения, ролевые задания, мини-квесты и вовлекающая практика." },
  { icon: Layers3, title: "Проектная работа", text: "Создание собственного мини-продукта на английском с использованием ИИ." },
  { icon: ShieldCheck, title: "Критическое мышление и грамотная работа с ИИ", text: "Как использовать нейросети не бездумно, а умно, безопасно и с пользой для обучения." },
  { icon: Rocket, title: "Финальный AI-проект", text: "Ученик создаёт собственный творческий или учебный проект на английском языке с использованием инструментов искусственного интеллекта." },
];

const special = [
  "английский изучается через современные технологии, а не по шаблону",
  "искусственный интеллект делает обучение более наглядным и персонализированным",
  "уроки включают творчество, интерактив и цифровую практику",
  "ребёнок не просто учит язык, а учится использовать его в реальном современном мире",
  "развивается мотивация, самостоятельность и интерес к обучению",
  "обучение выглядит ярко, современно и вдохновляюще",
];

const outcomes = [
  "развитие разговорного английского", "расширение словарного запаса", "уверенность в использовании языка",
  "знакомство с полезными AI-инструментами", "навыки современного цифрового обучения", "собственные творческие проекты на английском языке",
];

const format = [
  "уроки в современном интерактивном формате", "мини-группы или индивидуальная работа", "визуальные материалы, практика, проекты",
  "использование AI-инструментов как помощников в обучении", "дружелюбная атмосфера и вовлечение каждого ученика",
];

const futureCards = [
  { icon: Orbit, title: "AI Avatar", text: "персональный цифровой помощник" },
  { icon: ScanSearch, title: "Neon Lab", text: "визуальные задания и умные карточки" },
  { icon: Stars, title: "Future Class", text: "обучение как яркое цифровое приключение" },
];

function SectionTitle({ eyebrow, title, subtitle }) {
  return <motion.div variants={fadeUp} className="mx-auto mb-10 max-w-3xl text-center">
    {eyebrow && <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.22em] text-cyan-200 backdrop-blur-xl shadow-[0_0_24px_rgba(34,211,238,0.18)]"><Sparkles className="h-3.5 w-3.5" />{eyebrow}</div>}
    <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">{title}</h2>
    {subtitle && <p className="mt-4 text-base leading-7 text-slate-200 sm:text-lg">{subtitle}</p>}
  </motion.div>;
}
function GlassCard({ children, className = "" }) { return <Card className={`border-white/12 bg-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_24px_80px_rgba(89,35,255,0.28),0_0_32px_rgba(0,229,255,0.12)] backdrop-blur-2xl ${className}`}><CardContent className="p-6 sm:p-7">{children}</CardContent></Card>; }
function FloatingOrb({ className = "", size = "h-24 w-24" }) { return <motion.div animate={{ y: [0, -10, 0], scale: [1, 1.04, 1] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className={`absolute rounded-full bg-gradient-to-br from-cyan-400/40 via-fuchsia-500/30 to-violet-500/40 blur-2xl ${size} ${className}`} />; }
function FloatingChip({ icon: Icon, label, className = "", delay = 0 }) { return <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: [0, -8, 0] }} transition={{ opacity: { duration: 0.8, delay }, y: { duration: 5 + delay, repeat: Infinity, ease: "easeInOut" } }} className={`absolute rounded-2xl border border-white/15 bg-white/12 px-4 py-3 backdrop-blur-xl shadow-[0_0_30px_rgba(34,211,238,0.15)] ${className}`}><div className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-white"><Icon className="h-3.5 w-3.5 text-cyan-200" />{label}</div></motion.div>; }
function LivePreviewCard({ className = "" }) { return <motion.div animate={{ y: [0, -10, 0], rotate: [0, 1.2, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className={`overflow-hidden rounded-[28px] border border-cyan-300/20 bg-[#0b1025]/70 shadow-[0_0_45px_rgba(34,211,238,0.18)] backdrop-blur-2xl ${className}`}><div className="border-b border-white/10 p-3"><div className="flex items-center justify-between"><div className="text-[11px] uppercase tracking-[0.24em] text-cyan-200">Live Preview</div><div className="flex items-center gap-1 text-[10px] text-emerald-300"><span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />active</div></div></div><div className="p-4"><div className="relative h-40 overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(135deg,#0a1733,#1a1140,#30134f)]"><div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.35),transparent_28%),radial-gradient(circle_at_80%_30%,rgba(217,70,239,0.28),transparent_30%),radial-gradient(circle_at_60%_80%,rgba(56,189,248,0.18),transparent_25%)]" /><div className="absolute inset-x-4 top-4 flex items-center justify-between"><div className="rounded-full border border-cyan-300/25 bg-cyan-400/10 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-cyan-100">AI Scene</div><Play className="h-4 w-4 text-white/80" /></div></div><div className="mt-4 grid grid-cols-3 gap-2 text-[11px] text-slate-200"><div className="rounded-xl border border-white/10 bg-white/6 p-2 text-center">visual</div><div className="rounded-xl border border-white/10 bg-white/6 p-2 text-center">interactive</div><div className="rounded-xl border border-white/10 bg-white/6 p-2 text-center">creative</div></div></div></motion.div>; }
function AIImageCard({ className = "" }) { return <motion.div animate={{ y: [0, 8, 0], rotate: [0, -1.4, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className={`overflow-hidden rounded-[28px] border border-fuchsia-300/20 bg-[#12091f]/75 shadow-[0_0_45px_rgba(217,70,239,0.16)] backdrop-blur-2xl ${className}`}><div className="flex items-center justify-between border-b border-white/10 p-3"><div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-fuchsia-100"><ImageIcon className="h-3.5 w-3.5" />Future Images</div><ScanFace className="h-4 w-4 text-white/75" /></div><div className="grid grid-cols-2 gap-2 p-3">{[0,1,2,3].map(i => <div key={i} className="relative h-24 overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(135deg,#121c39,#25144d,#431460)]"><div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.32),transparent_28%),radial-gradient(circle_at_70%_35%,rgba(217,70,239,0.26),transparent_34%),radial-gradient(circle_at_50%_85%,rgba(255,255,255,0.1),transparent_22%)]" /></div>)}</div></motion.div>; }
function NeuralTopScene() { const nodes = [{ left: "8%", top: "18%", size: "h-3 w-3", color: "bg-cyan-300" }, { left: "22%", top: "10%", size: "h-2.5 w-2.5", color: "bg-fuchsia-300" }, { left: "34%", top: "20%", size: "h-3.5 w-3.5", color: "bg-sky-300" }, { left: "50%", top: "8%", size: "h-4 w-4", color: "bg-cyan-200" }, { left: "62%", top: "18%", size: "h-3 w-3", color: "bg-violet-300" }, { left: "76%", top: "12%", size: "h-3 w-3", color: "bg-fuchsia-200" }, { left: "90%", top: "20%", size: "h-2.5 w-2.5", color: "bg-cyan-300" }]; return <div className="pointer-events-none absolute inset-x-0 -top-10 z-0 hidden h-40 overflow-hidden lg:block"><svg className="absolute inset-0 h-full w-full opacity-70" viewBox="0 0 1200 180" fill="none"><path d="M40 90C140 20 230 20 320 78C390 122 450 130 540 74C615 28 700 24 790 82C885 144 975 132 1160 36" stroke="url(#line1)" strokeWidth="2.2" strokeLinecap="round" /><defs><linearGradient id="line1" x1="40" y1="90" x2="1160" y2="36" gradientUnits="userSpaceOnUse"><stop stopColor="#22d3ee" stopOpacity="0.15" /><stop offset="0.5" stopColor="#e879f9" stopOpacity="0.95" /><stop offset="1" stopColor="#60a5fa" stopOpacity="0.15" /></linearGradient></defs></svg>{nodes.map((node, index) => <motion.div key={index} animate={{ y: [0, -8, 0], scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }} transition={{ duration: 4 + index * 0.5, repeat: Infinity, ease: "easeInOut" }} className={`absolute rounded-full ${node.size} ${node.color} shadow-[0_0_18px_rgba(34,211,238,0.65)]`} style={{ left: node.left, top: node.top }} />)}<motion.div animate={{ y: [0, -10, 0], rotate: [0, 6, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute left-[12%] top-14 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/25 bg-cyan-400/10 text-cyan-100 shadow-[0_0_35px_rgba(34,211,238,0.2)] backdrop-blur-xl"><Network className="h-5 w-5" /></motion.div></div>; }
function InteractiveStrip() { const items = useMemo(() => [{ icon: MousePointerClick, label: "Hover cards" }, { icon: Play, label: "Live previews" }, { icon: Volume2, label: "Interactive tasks" }, { icon: ImageIcon, label: "AI visuals" }, { icon: Sparkles, label: "Future design" }], []); return <div className="relative overflow-hidden rounded-[30px] border border-white/12 bg-white/8 p-4 backdrop-blur-2xl"><motion.div animate={{ x: ["0%", "-50%"] }} transition={{ duration: 18, repeat: Infinity, ease: "linear" }} className="flex w-[200%] gap-4">{[...items, ...items].map((item, index) => { const Icon = item.icon; return <div key={index} className="flex min-w-[190px] items-center gap-3 rounded-2xl border border-white/12 bg-white/10 px-4 py-3"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/20 via-violet-500/20 to-fuchsia-500/20 text-cyan-100"><Icon className="h-4 w-4" /></div><div className="text-sm text-white">{item.label}</div></div>; })}</motion.div></div>; }

export default function App() {
  return <div className="min-h-screen overflow-hidden bg-[#070311] text-white">
    <div className="pointer-events-none fixed inset-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(0,229,255,0.24),transparent_22%),radial-gradient(circle_at_85%_15%,rgba(255,0,214,0.22),transparent_24%),radial-gradient(circle_at_50%_35%,rgba(124,58,237,0.20),transparent_30%),radial-gradient(circle_at_50%_85%,rgba(34,211,238,0.16),transparent_24%),linear-gradient(180deg,#0a0318_0%,#09061d_35%,#05040f_100%)]" />
      <FloatingOrb className="left-[8%] top-[16%]" size="h-36 w-36" />
      <FloatingOrb className="right-[10%] top-[10%]" size="h-44 w-44" />
    </div>
    <header className="sticky top-0 z-50 border-b border-cyan-300/10 bg-[#090512]/65 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3"><div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/30 bg-gradient-to-br from-cyan-400/20 to-fuchsia-500/20 shadow-[0_0_35px_rgba(34,211,238,0.38)]"><Bot className="h-5 w-5 text-cyan-100" /></div><div><div className="text-sm font-semibold uppercase tracking-[0.32em] text-cyan-200">AI Education</div><div className="text-sm text-slate-200">Английский через ИИ</div></div></div>
        <Button className="rounded-full border border-cyan-300/30 bg-gradient-to-r from-cyan-400 via-sky-500 to-fuchsia-500 px-5 py-2 text-white">Записаться</Button>
      </div>
    </header>
    <main className="relative z-10">
      <NeuralTopScene />
      <section className="mx-auto max-w-7xl px-4 pb-16 pt-24 sm:px-6 md:pb-24 md:pt-28 lg:px-8 lg:pb-32 lg:pt-32">
        <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-2 rounded-full border border-fuchsia-300/20 bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-fuchsia-100"><Zap className="h-3.5 w-3.5" />Future learning experience</motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl font-semibold leading-[0.92] text-white sm:text-6xl md:text-7xl xl:text-[5.9rem]">Английский <span className="bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-violet-300 bg-clip-text text-transparent">через ИИ</span></motion.h1>
            <motion.p variants={fadeUp} className="mt-7 max-w-2xl text-base leading-8 text-slate-100 sm:text-lg">Современный курс английского языка, где искусственный интеллект помогает учиться быстрее, интереснее и эффективнее. Обучение нового поколения: интерактив, персонализация, творчество и реальные цифровые инструменты.</motion.p>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.96, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="relative">
            <div className="relative mx-auto max-w-[620px]">
              <FloatingChip icon={Play} label="live lessons" className="-left-8 top-8 hidden md:block" delay={0.2} />
              <FloatingChip icon={ImageIcon} label="AI visuals" className="right-0 top-0 hidden md:block" delay={0.5} />
              <div className="absolute inset-0 rounded-[38px] bg-gradient-to-br from-cyan-400/25 via-violet-500/25 to-fuchsia-500/25 blur-2xl" />
              <GlassCard className="relative overflow-hidden rounded-[38px] border-cyan-300/15">
                <div className="relative min-h-[620px] rounded-[30px] border border-white/10 p-6 sm:p-8">
                  <div className="mb-7 flex items-center justify-between gap-4"><div><div className="text-xs uppercase tracking-[0.26em] text-cyan-200">Future Learning Space</div><div className="mt-2 text-lg font-medium text-white">AI-powered English Experience</div></div></div>
                  <div className="relative mt-6 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]"><LivePreviewCard className="w-full" /><AIImageCard className="w-full" /></div>
                </div>
              </GlassCard>
            </div>
          </motion.div>
        </div>
      </section>

      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger} className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Для кого курс" title="Кому подойдёт этот формат" subtitle="Для детей и подростков, которым нравится современное визуальное обучение, технологии и ощущение уроков будущего." />
        <motion.div variants={stagger} className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">{audience.map((item) => { const Icon = item.icon; return <motion.div key={item.text} variants={fadeUp}><GlassCard className="h-full rounded-[30px]"><div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/30 bg-gradient-to-br from-cyan-400/15 via-violet-500/15 to-fuchsia-500/15 text-cyan-100"><Icon className="h-5 w-5" /></div><p className="mt-5 text-base leading-7 text-slate-100">{item.text}</p></GlassCard></motion.div>; })}</motion.div>
      </motion.section>

      <motion.section id="program" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={stagger} className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Программа" title="Что изучают ученики" subtitle="Программа в ярком современном формате." />
        <motion.div variants={stagger} className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">{modules.map((item, index) => { const Icon = item.icon; return <motion.div key={item.title} variants={fadeUp}><GlassCard className="group h-full rounded-[30px]"><div className="mb-5 flex items-start justify-between gap-4"><div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/12 bg-gradient-to-br from-cyan-400/20 via-violet-500/20 to-fuchsia-500/20 text-cyan-100"><Icon className="h-5 w-5" /></div><div className="rounded-full border border-white/12 bg-white/10 px-3 py-1 text-xs tracking-[0.22em] text-slate-300">{String(index + 1).padStart(2, "0")}</div></div><h3 className="text-xl font-medium text-white">{item.title}</h3><p className="mt-3 text-sm leading-7 text-slate-100 sm:text-base">{item.text}</p></GlassCard></motion.div>; })}</motion.div>
      </motion.section>

      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger} className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} className="mb-8"><InteractiveStrip /></motion.div>
        <div className="grid gap-8 xl:grid-cols-2">
          <motion.div variants={fadeUp}><SectionTitle eyebrow="Результат" title="Что получает ученик" subtitle="Знания, уверенность, яркие проекты и знакомство с реальными AI-инструментами." /><div className="grid gap-4 sm:grid-cols-2">{outcomes.map((item) => <GlassCard key={item} className="rounded-[28px]"><div className="flex items-start gap-3"><div className="mt-1 flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-300/25 bg-cyan-400/12 text-cyan-100"><Sparkles className="h-4 w-4" /></div><p className="text-sm leading-7 text-slate-100 sm:text-base">{item}</p></div></GlassCard>)}</div></motion.div>
          <motion.div id="format" variants={fadeUp}><SectionTitle eyebrow="Формат занятий" title="Как проходит обучение" subtitle="Современно, гибко, визуально и с акцентом на активную практику." /><GlassCard className="h-full rounded-[34px]">{format.map((item) => <div key={item} className="mb-4 flex items-start gap-4 rounded-[22px] border border-white/10 bg-white/10 p-4"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-violet-300/22 bg-violet-500/12 text-violet-100"><MonitorSmartphone className="h-4 w-4" /></div><p className="text-sm leading-7 text-slate-100 sm:text-base">{item}</p></div>)}</GlassCard></motion.div>
        </div>
      </motion.section>
    </main>
  </div>;
}
