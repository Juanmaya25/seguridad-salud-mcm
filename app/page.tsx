"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";
import {
  Shield, Leaf, Users, ClipboardCheck, AlertTriangle,
  BookOpen, FileText, CheckCircle, Phone, Mail, MapPin,
  ChevronDown, Menu, X, ArrowRight, Star, Award, TrendingDown,
  Globe, Tractor, Sprout, Factory, HelpCircle, Plus, Minus
} from "lucide-react";

const WHATSAPP = "573192859483";
const EMAIL = "mariaclaramaya.sst@gmail.com";

/* ── Reveal wrapper (scroll animation) ── */
function Reveal({ children, delay = 0, y = 30 }: { children: React.ReactNode; delay?: number; y?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ── Animated counter ── */
function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    if (inView) {
      const controls = animate(0, value, {
        duration: 1.6,
        ease: "easeOut",
        onUpdate: (v) => setDisplay(Math.round(v)),
      });
      return () => controls.stop();
    }
  }, [inView, value]);
  return <p ref={ref} className="text-3xl font-black gradient-text">{display}{suffix}</p>;
}

/* ── NAVBAR ── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  const links = [
    { label: "Inicio", href: "#inicio" },
    { label: "Sobre Mí", href: "#sobre-mi" },
    { label: "Servicios", href: "#servicios" },
    { label: "Sectores", href: "#sectores" },
    { label: "Metodología", href: "#metodologia" },
    { label: "FAQ", href: "#faq" },
    { label: "Contacto", href: "#contacto" },
  ];
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass-card shadow-lg py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#4DD9C0] to-[#4CAF50] flex items-center justify-center shadow-lg pulse-glow">
            <Shield size={20} className="text-white" />
          </div>
          <div>
            <p className="font-bold text-[#1C1C1C] text-sm leading-none">Seguridad &amp; Salud</p>
            <p className="text-[10px] text-[#4DD9C0] font-semibold tracking-widest uppercase">SST · Agro</p>
          </div>
        </a>
        <ul className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="nav-link text-sm font-medium text-gray-700 hover:text-[#2BBFA6] transition-colors">{l.label}</a>
            </li>
          ))}
        </ul>
        <a href="#contacto" className="hidden lg:flex btn-primary text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-md">
          Consulta Gratis
        </a>
        <button onClick={() => setOpen(!open)} className="lg:hidden p-2 rounded-lg text-gray-700" aria-label="Menú">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden glass-card mx-4 mt-2 rounded-2xl p-6 shadow-xl">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="block py-3 text-sm font-medium text-gray-700 hover:text-[#4DD9C0] border-b border-gray-100 last:border-0">{l.label}</a>
          ))}
          <a href="#contacto" onClick={() => setOpen(false)}
            className="block mt-4 btn-primary text-white text-sm font-semibold px-5 py-3 rounded-full text-center shadow-md">Consulta Gratis</a>
        </div>
      )}
    </nav>
  );
}

/* ── WHATSAPP FLOATING ── */
function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hola Maria Clara, me interesa una asesoría en Seguridad y Salud en el Trabajo.")}`}
      target="_blank" rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Contactar por WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-2xl group-hover:scale-110 transition-transform">
        <Phone size={26} className="text-white" />
      </span>
      <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-[#1C1C1C] text-white text-xs font-semibold px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
        ¡Escríbeme por WhatsApp!
      </span>
    </a>
  );
}

/* ── HERO ── */
function Hero() {
  return (
    <section id="inicio" className="hero-mesh min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <div>
            <div className="inline-flex items-center gap-2 bg-white/80 border border-[#4DD9C0]/30 rounded-full px-4 py-2 mb-6 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-[#4DD9C0] animate-pulse" />
              <span className="text-xs font-semibold text-[#2BBFA6] tracking-wider uppercase">Profesional Certificada · Lic. N° 05264044399708</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-black text-[#1C1C1C] leading-tight mb-4">
              Gestión Integral en <span className="gradient-text">Seguridad &amp; Salud</span> en el Trabajo
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-4 font-medium italic">
              &ldquo;Sembrando cultura de prevención, cosechando productividad y bienestar.&rdquo;
            </p>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Especialización en el <span className="text-[#4CAF50] font-semibold">sector agropecuario y pecuario</span>.
              Transformo el cumplimiento normativo en una herramienta de productividad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contacto" className="btn-primary text-white font-bold px-8 py-4 rounded-full shadow-lg flex items-center gap-2 justify-center">
                Solicitar Consulta <ArrowRight size={18} />
              </a>
              <a href="#servicios" className="border-2 border-[#4DD9C0] text-[#2BBFA6] font-bold px-8 py-4 rounded-full hover:bg-[#4DD9C0]/10 transition-all flex items-center gap-2 justify-center">
                Ver Servicios <ChevronDown size={18} />
              </a>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200">
              <div><Counter value={6} suffix="+" /><p className="text-xs text-gray-500 mt-1 leading-snug">Servicios Especializados</p></div>
              <div><Counter value={100} suffix="%" /><p className="text-xs text-gray-500 mt-1 leading-snug">Cumplimiento Res. 0312</p></div>
              <div><Counter value={4} /><p className="text-xs text-gray-500 mt-1 leading-snug">Fases de Metodología</p></div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#4DD9C0]/20 to-[#4CAF50]/20 blur-3xl scale-110" />
              <div className="relative float-animation">
                <div className="glass-card rounded-3xl p-8 shadow-2xl max-w-sm">
                  <div className="flex flex-col items-center mb-6">
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#4DD9C0] to-[#4CAF50] flex items-center justify-center shadow-xl mb-4 pulse-glow">
                      <Shield size={48} className="text-white" />
                    </div>
                    <h3 className="text-xl font-black text-[#1C1C1C] text-center">Seguridad &amp; Salud</h3>
                    <p className="text-[#4DD9C0] font-bold text-sm tracking-widest uppercase mt-1">Maria Clara Maya Morales</p>
                  </div>
                  <div className="space-y-3">
                    {[
                      { icon: Award, text: "Administradora en SST" },
                      { icon: Leaf, text: "Especialista Sector Agropecuario" },
                      { icon: CheckCircle, text: "Certificada SENA – SG-SST" },
                      { icon: MapPin, text: "Entreríos, Antioquia" },
                    ].map(({ icon: Icon, text }) => (
                      <div key={text} className="flex items-center gap-3 bg-white/60 rounded-xl px-4 py-2.5">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#4DD9C0]/20 to-[#4CAF50]/20 flex items-center justify-center flex-shrink-0">
                          <Icon size={15} className="text-[#2BBFA6]" />
                        </div>
                        <span className="text-sm text-gray-700 font-medium">{text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ── SOBRE MÍ ── */
function About() {
  const fortalezas = [
    { icon: ClipboardCheck, title: "Gestión Normativa", desc: "Auditoría de procesos y seguimiento de estándares de calidad según normativa vigente." },
    { icon: Shield, title: "Seguridad Técnica", desc: "Formación certificada en trabajo seguro en alturas y análisis preventivo de riesgos." },
    { icon: Users, title: "Liderazgo Operativo", desc: "Dirección de proyectos con pensamiento analítico, comunicación asertiva y ética laboral." },
  ];
  const formacion = [
    "Pregrado: Administración en SST – IUD Antioquia",
    "Implementación del SG-SST – SENA",
    "Trabajo Seguro en Alturas (Administrativo) – SENA",
    "Diplomado: Gestión y tratamiento de peligros y riesgos laborales – IUD",
  ];
  return (
    <section id="sobre-mi" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <div>
            <span className="text-[#4DD9C0] font-bold text-sm tracking-widest uppercase">Sobre Mí</span>
            <h2 className="text-4xl font-black text-[#1C1C1C] mt-2 mb-6 leading-tight">Maria Clara Maya Morales</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Soy Profesional en Administración en Seguridad y Salud en el Trabajo con sólida formación en la optimización de
              procesos operativos y gestión integral de riesgos. Mi enfoque se centra en{" "}
              <strong className="text-[#2BBFA6]">transformar el cumplimiento normativo en una herramienta de productividad</strong>.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Cuento con experiencia en implementación del SG-SST, liderazgo de equipos multidisciplinarios e investigación técnica
              de incidentes bajo análisis de causa raíz.
            </p>
            <div className="bg-gradient-to-br from-[#4DD9C0]/10 to-[#4CAF50]/10 rounded-2xl p-6 border border-[#4DD9C0]/20">
              <h4 className="font-bold text-[#1C1C1C] mb-3 flex items-center gap-2">
                <BookOpen size={18} className="text-[#4DD9C0]" /> Formación Académica
              </h4>
              <ul className="space-y-2">
                {formacion.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle size={15} className="text-[#4CAF50] mt-0.5 flex-shrink-0" />{f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
        <div className="space-y-6">
          {fortalezas.map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} delay={i * 0.1}>
              <div className="service-card glass-card rounded-2xl p-6 cursor-default">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4DD9C0] to-[#4CAF50] flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Icon size={22} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1C1C1C] mb-1">{title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
          <Reveal delay={0.3}>
            <div className="glass-card rounded-2xl p-5 border-l-4 border-[#4DD9C0] pulse-glow">
              <div className="flex items-center gap-3">
                <Award size={28} className="text-[#4DD9C0]" />
                <div>
                  <p className="text-xs font-bold text-[#4DD9C0] uppercase tracking-wider">Licencia Profesional</p>
                  <p className="font-black text-[#1C1C1C] text-lg">N° 05264044399708</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ── SERVICIOS ── */
function Services() {
  const servicios = [
    { icon: ClipboardCheck, title: "Evaluación Inicial", desc: "Diagnóstico situacional frente a la Resolución 0312. Identificación de brechas y plan de priorización con hoja de ruta clara.", tags: ["Res. 0312", "Diagnóstico", "Informe Ejecutivo"] },
    { icon: Globe, title: "Sistemas Integrados (SIG)", desc: "Diseño y montaje de sistema unificado con alineación ISO 45001, ISO 9001 e ISO 14001. Integración de BPA y BPG.", tags: ["ISO 45001", "ISO 9001", "ISO 14001"] },
    { icon: TrendingDown, title: "Seguimiento y Mejora Continua", desc: "Auditorías de verificación mensuales, Ciclo PHVA y tableros de control con estadísticas de accidentalidad.", tags: ["PHVA", "Auditorías", "KPIs"] },
    { icon: AlertTriangle, title: "Gestión de Riesgos en Campo", desc: "Matrices de Riesgo GTC 45. Identificación de peligros por contacto animal, herramientas y riesgo químico.", tags: ["GTC 45", "Emergencias", "Rural"] },
    { icon: BookOpen, title: "Formación y Capacitación", desc: "Inducciones, manejo de riesgos específicos, Brigada de emergencia y COPASST/Comité de convivencia.", tags: ["COPASST", "Brigadas", "Cultura Preventiva"] },
    { icon: FileText, title: "Gestión Técnica de Reportes", desc: "Gestión de FURAT/FUREL en plataformas ARL. Reporte a entidades externas y triaje de atención inmediata.", tags: ["FURAT", "FUREL", "Ministerio Trabajo"] },
  ];
  return (
    <section id="servicios" className="py-24 hero-mesh">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-16">
            <span className="text-[#4DD9C0] font-bold text-sm tracking-widest uppercase">Servicios</span>
            <h2 className="text-4xl font-black text-[#1C1C1C] mt-2 mb-4">Servicios Especializados</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Soluciones integrales de SST con enfoque especial en el sector agropecuario y pecuario colombiano.</p>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicios.map(({ icon: Icon, title, desc, tags }, i) => (
            <Reveal key={title} delay={(i % 3) * 0.1}>
              <div className="service-card glass-card rounded-2xl p-6 cursor-default h-full">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4DD9C0] to-[#4CAF50] flex items-center justify-center mb-4 shadow-md">
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="font-bold text-[#1C1C1C] mb-2 text-lg">{title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{desc}</p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((t) => (
                    <span key={t} className="text-[10px] font-bold uppercase tracking-wider bg-[#4DD9C0]/15 text-[#2BBFA6] rounded-full px-3 py-1">{t}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── SECTORES ── */
function Sectors() {
  const sectores = [
    { icon: Tractor, title: "Haciendas Ganaderas", desc: "Manejo seguro de animales, maquinaria pesada y zonas de ordeño." },
    { icon: Sprout, title: "Cultivos y Plantaciones", desc: "Manejo de agroquímicos, herramientas cortopunzantes y trabajo a la intemperie." },
    { icon: Factory, title: "Plantas de Beneficio", desc: "Procesos industriales agropecuarios, bioseguridad y manipulación de alimentos." },
  ];
  return (
    <section id="sectores" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-16">
            <span className="text-[#4DD9C0] font-bold text-sm tracking-widest uppercase">Sectores</span>
            <h2 className="text-4xl font-black text-[#1C1C1C] mt-2 mb-4">Unidades Productivas que Atiendo</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Cada unidad productiva tiene riesgos únicos. Adapto los protocolos a la realidad de su operación.</p>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-8">
          {sectores.map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} delay={i * 0.12}>
              <div className="service-card glass-card rounded-3xl p-8 text-center cursor-default h-full">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#4DD9C0] to-[#4CAF50] flex items-center justify-center mx-auto mb-5 shadow-xl pulse-glow">
                  <Icon size={28} className="text-white" />
                </div>
                <h3 className="font-bold text-[#1C1C1C] text-lg mb-2">{title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── METODOLOGÍA ── */
function Methodology() {
  const fases = [
    { n: "01", title: "Diagnóstico Inicial", desc: "Levantamiento del estado actual y nivel de cumplimiento legal de su empresa." },
    { n: "02", title: "Plan de Acción Estratégico", desc: "Priorización de actividades según nivel de riesgo y presupuesto disponible." },
    { n: "03", title: "Ejecución y Capacitación", desc: "Formación técnica en campo para operarios, mayordomos y administrativos." },
    { n: "04", title: "Verificación de Resultados", desc: "Entrega de informes ejecutivos de cumplimiento para la alta dirección." },
  ];
  return (
    <section id="metodologia" className="py-24 hero-mesh">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-16">
            <span className="text-[#4DD9C0] font-bold text-sm tracking-widest uppercase">Cómo Trabajo</span>
            <h2 className="text-4xl font-black text-[#1C1C1C] mt-2 mb-4">Mi Metodología de Trabajo</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Un método de 4 fases que garantiza resultados medibles y confianza en la gerencia.</p>
          </div>
        </Reveal>
        <div className="relative">
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-[#4DD9C0] to-[#4CAF50] z-0" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {fases.map(({ n, title, desc }, i) => (
              <Reveal key={n} delay={i * 0.12}>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#4DD9C0] to-[#4CAF50] flex items-center justify-center shadow-xl mb-4 pulse-glow">
                    <span className="text-white font-black text-xl">{n}</span>
                  </div>
                  <h3 className="font-bold text-[#1C1C1C] mb-2">{title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── BENEFICIOS ── */
function Benefits() {
  const items = [
    { icon: Shield, title: "Cero Sanciones", desc: "Cumplimiento total ante inspecciones del Ministerio del Trabajo." },
    { icon: TrendingDown, title: "Reducción de Costos", desc: "Menor tasa de accidentalidad significa menores costos por reemplazos y primas de ARL." },
    { icon: Star, title: "Reputación de Marca", desc: "Una empresa segura es más atractiva para clientes internacionales y certificaciones de exportación." },
  ];
  return (
    <section id="beneficios" className="py-24 bg-gradient-to-br from-[#1C1C1C] to-[#2d2d2d] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-16">
            <span className="text-[#4DD9C0] font-bold text-sm tracking-widest uppercase">Beneficios</span>
            <h2 className="text-4xl font-black mt-2 mb-4">Beneficios para su Empresa</h2>
            <p className="text-gray-400 max-w-xl mx-auto">Invertir en SST no es un costo; es una estrategia para reducir la siniestralidad y optimizar la continuidad del negocio.</p>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-8">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} delay={i * 0.1}>
              <div className="service-card rounded-2xl p-8 border border-white/10 bg-white/5 text-center h-full">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#4DD9C0] to-[#4CAF50] flex items-center justify-center mx-auto mb-5 shadow-xl pulse-glow">
                  <Icon size={28} className="text-white" />
                </div>
                <h3 className="font-bold text-xl mb-3">{title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <div className="mt-16 glass-card rounded-3xl p-8 border border-[#4DD9C0]/30 text-center">
            <Leaf size={32} className="text-[#4CAF50] mx-auto mb-3" />
            <h3 className="text-2xl font-black mb-2 text-[#1C1C1C]">Especialista en el Sector Agropecuario y Pecuario</h3>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm leading-relaxed">
              El sector agropecuario presenta desafíos únicos: exposición a agentes biológicos, manejo de agroquímicos,
              uso de maquinaria pesada y condiciones climáticas variables. Garantizo que su unidad productiva cumpla con
              la Resolución 0312 de 2019, protegiendo el recurso más valioso: su gente.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ── FAQ ── */
function FAQ() {
  const faqs = [
    { q: "¿Qué es la Resolución 0312 de 2019 y por qué me aplica?", a: "Define los Estándares Mínimos del SG-SST según el número de trabajadores y nivel de riesgo. Toda empresa o unidad productiva en Colombia debe cumplirla; su incumplimiento genera sanciones del Ministerio del Trabajo." },
    { q: "¿Atiende empresas fuera de Entreríos, Antioquia?", a: "Sí. Aunque mi base es Entreríos, Antioquia, atiendo unidades productivas en toda la región con visitas técnicas programadas y acompañamiento remoto." },
    { q: "¿La primera consulta tiene costo?", a: "No. La primera consulta de diagnóstico es gratuita. Evaluamos el estado actual de su empresa e identificamos las brechas principales sin compromiso." },
    { q: "¿Cuánto tiempo toma implementar el SG-SST?", a: "Depende del tamaño y nivel de riesgo de la empresa. Tras el diagnóstico inicial entrego un plan con cronograma realista y priorizado según su presupuesto." },
    { q: "¿Trabaja con el sector agropecuario específicamente?", a: "Sí, es mi especialización. Manejo riesgos propios del campo: agentes biológicos, agroquímicos, maquinaria pesada, contacto animal y planes de emergencia rural." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-16">
            <span className="text-[#4DD9C0] font-bold text-sm tracking-widest uppercase">Preguntas Frecuentes</span>
            <h2 className="text-4xl font-black text-[#1C1C1C] mt-2 mb-4">Resuelva sus Dudas</h2>
            <p className="text-gray-500">Lo que las empresas suelen preguntarme antes de comenzar.</p>
          </div>
        </Reveal>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.06}>
              <div className="glass-card rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="flex items-center gap-3 font-bold text-[#1C1C1C] text-sm">
                    <HelpCircle size={18} className="text-[#4DD9C0] flex-shrink-0" />
                    {f.q}
                  </span>
                  {open === i
                    ? <Minus size={18} className="text-[#4DD9C0] flex-shrink-0" />
                    : <Plus size={18} className="text-[#4DD9C0] flex-shrink-0" />}
                </button>
                {open === i && (
                  <div className="px-5 pb-5 pl-14 text-sm text-gray-600 leading-relaxed">{f.a}</div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── CONTACTO ── */
function Contact() {
  const [form, setForm] = useState({ nombre: "", empresa: "", email: "", mensaje: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      // Formspree: reemplazar "xeolabcd" por el ID real al crear cuenta gratuita en formspree.io
      const res = await fetch("https://formspree.io/f/xeolabcd", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          nombre: form.nombre, empresa: form.empresa,
          email: form.email, mensaje: form.mensaje,
          _subject: `Consulta SST de ${form.nombre} - ${form.empresa}`,
        }),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ nombre: "", empresa: "", email: "", mensaje: "" });
      } else throw new Error();
    } catch {
      // Fallback: abrir cliente de correo si Formspree no está configurado
      const subject = encodeURIComponent(`Consulta SST de ${form.nombre} - ${form.empresa}`);
      const body = encodeURIComponent(`Nombre: ${form.nombre}\nEmpresa: ${form.empresa}\nEmail: ${form.email}\n\n${form.mensaje}`);
      window.open(`mailto:${EMAIL}?subject=${subject}&body=${body}`);
      setStatus("sent");
    }
  };

  return (
    <section id="contacto" className="py-24 hero-mesh">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-16">
            <span className="text-[#4DD9C0] font-bold text-sm tracking-widest uppercase">Contacto</span>
            <h2 className="text-4xl font-black text-[#1C1C1C] mt-2 mb-4">Hablemos de su Empresa</h2>
            <p className="text-gray-500 max-w-xl mx-auto">La primera consulta es gratuita. Cuéntenos sobre su empresa y le ayudamos a identificar las brechas de SST.</p>
          </div>
        </Reveal>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <Reveal>
            <div className="space-y-6">
              {[
                { icon: Phone, label: "Teléfono", value: "319-285-9483", href: `tel:+${WHATSAPP}` },
                { icon: Mail, label: "Correo Electrónico", value: EMAIL, href: `mailto:${EMAIL}` },
                { icon: MapPin, label: "Ubicación", value: "Entreríos, Antioquia, Colombia", href: "#" },
              ].map(({ icon: Icon, label, value, href }) => (
                <a key={label} href={href} className="flex items-center gap-5 glass-card rounded-2xl p-5 shadow-sm service-card">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4DD9C0] to-[#4CAF50] flex items-center justify-center flex-shrink-0 shadow-md">
                    <Icon size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">{label}</p>
                    <p className="font-bold text-[#1C1C1C] break-all">{value}</p>
                  </div>
                </a>
              ))}
              <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer"
                className="btn-primary text-white font-bold px-8 py-4 rounded-full shadow-lg flex items-center gap-3 justify-center mt-4">
                <Phone size={20} /> Contactar por WhatsApp
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="glass-card rounded-3xl p-8 shadow-xl">
              {status === "sent" ? (
                <div className="text-center py-8">
                  <CheckCircle size={56} className="text-[#4CAF50] mx-auto mb-4" />
                  <h3 className="text-xl font-black text-[#1C1C1C] mb-2">¡Mensaje enviado!</h3>
                  <p className="text-gray-500 text-sm">Maria Clara se pondrá en contacto con usted pronto.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="font-black text-[#1C1C1C] text-xl mb-6">Solicitar Consulta Gratuita</h3>
                  {[
                    { name: "nombre", label: "Nombre completo", type: "text", placeholder: "Juan García" },
                    { name: "empresa", label: "Empresa / Finca", type: "text", placeholder: "Hacienda El Progreso" },
                    { name: "email", label: "Correo electrónico", type: "email", placeholder: "juan@empresa.com" },
                  ].map((f) => (
                    <div key={f.name}>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">{f.label}</label>
                      <input type={f.type} placeholder={f.placeholder} required
                        value={form[f.name as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [f.name]: e.target.value })}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#4DD9C0] focus:ring-2 focus:ring-[#4DD9C0]/20 bg-white/80 transition-all" />
                    </div>
                  ))}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Mensaje</label>
                    <textarea placeholder="Cuénteme sobre su empresa y sus necesidades de SST..." required rows={4}
                      value={form.mensaje} onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#4DD9C0] focus:ring-2 focus:ring-[#4DD9C0]/20 bg-white/80 transition-all resize-none" />
                  </div>
                  <button type="submit" disabled={status === "sending"}
                    className="btn-primary w-full text-white font-bold py-4 rounded-xl shadow-lg flex items-center justify-center gap-2 disabled:opacity-60">
                    {status === "sending" ? "Enviando..." : <>Enviar Mensaje <ArrowRight size={18} /></>}
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ── FOOTER ── */
function Footer() {
  return (
    <footer className="bg-[#1C1C1C] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#4DD9C0] to-[#4CAF50] flex items-center justify-center">
            <Shield size={16} className="text-white" />
          </div>
          <div>
            <p className="font-bold text-sm">Seguridad &amp; Salud en el Trabajo</p>
            <p className="text-[10px] text-[#4DD9C0]">Maria Clara Maya Morales · Lic. 05264044399708</p>
          </div>
        </div>
        <p className="text-gray-500 text-xs text-center italic">
          &ldquo;Sembrando cultura de prevención, cosechando productividad y bienestar.&rdquo;
        </p>
        <p className="text-gray-600 text-xs">© {new Date().getFullYear()} Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

/* ── PAGE ── */
export default function Page() {
  return (
    <>
      <Navbar />
      <WhatsAppFloat />
      <main>
        <Hero />
        <About />
        <Services />
        <Sectors />
        <Methodology />
        <Benefits />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
