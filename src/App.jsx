import React, { useState } from 'react'
import {
  MessageCircle,
  Shield,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Pill,
  Droplet,
  Award,
  Lock,
  Truck,
  HeartHandshake,
  UserCheck,
  Calendar,
  Sparkles,
  ChevronDown,
  ChevronLeft,
  Crown,
  ShieldCheck,
  Stethoscope,
  Eye,
  Frown,
  TimerReset,
  Wind,
  Headphones,
  PackageCheck,
  Banknote,
  Star,
  Flame,
  ArrowDownCircle,
  Phone,
  Clock,
  Leaf,
  Target,
  ClipboardCheck,
  Beaker,
  BadgeCheck,
  RotateCcw,
  EyeOff,
  Plus,
  Minus,
  AlertOctagon,
  Activity,
  CalendarCheck,
  Gauge,
  Repeat,
  Box,
  Syringe,
  CircleDot,
  Layers,
} from 'lucide-react'


// =====================================================================
// SVG Product Images
// =====================================================================
const PillBottleImg = ({ color = '#EF4444' }) => (
  <svg viewBox="0 0 100 120" className="w-20 h-24 md:w-24 md:h-28 mx-auto">
    {/* Bottle body */}
    <rect x="20" y="35" width="60" height="70" rx="8" fill={color} opacity="0.12" stroke={color} strokeWidth="2.5"/>
    {/* Bottle cap */}
    <rect x="28" y="18" width="44" height="18" rx="4" fill={color} opacity="0.35" stroke={color} strokeWidth="2"/>
    {/* Cap ridges */}
    <line x1="32" y1="22" x2="32" y2="32" stroke={color} strokeWidth="1.5" opacity="0.6"/>
    <line x1="38" y1="20" x2="38" y2="34" stroke={color} strokeWidth="1.5" opacity="0.6"/>
    <line x1="44" y1="18" x2="44" y2="36" stroke={color} strokeWidth="1.5" opacity="0.6"/>
    <line x1="50" y1="18" x2="50" y2="36" stroke={color} strokeWidth="1.5" opacity="0.6"/>
    <line x1="56" y1="18" x2="56" y2="36" stroke={color} strokeWidth="1.5" opacity="0.6"/>
    <line x1="62" y1="20" x2="62" y2="34" stroke={color} strokeWidth="1.5" opacity="0.6"/>
    <line x1="68" y1="22" x2="68" y2="32" stroke={color} strokeWidth="1.5" opacity="0.6"/>
    {/* Pills inside */}
    <ellipse cx="40" cy="58" rx="8" ry="4.5" fill={color} opacity="0.3" transform="rotate(-20 40 58)"/>
    <ellipse cx="55" cy="55" rx="8" ry="4.5" fill={color} opacity="0.25" transform="rotate(15 55 55)"/>
    <ellipse cx="48" cy="68" rx="8" ry="4.5" fill={color} opacity="0.2" transform="rotate(-10 48 68)"/>
    <ellipse cx="38" cy="78" rx="8" ry="4.5" fill={color} opacity="0.15" transform="rotate(25 38 78)"/>
    <ellipse cx="58" cy="75" rx="8" ry="4.5" fill={color} opacity="0.2" transform="rotate(-30 58 75)"/>
    <ellipse cx="50" cy="88" rx="8" ry="4.5" fill={color} opacity="0.15" transform="rotate(10 50 88)"/>
    {/* Label */}
    <rect x="26" y="48" width="48" height="26" rx="3" fill="white" opacity="0.85" stroke={color} strokeWidth="1"/>
    <text x="50" y="61" textAnchor="middle" fill={color} fontSize="9" fontWeight="800" fontFamily="Arial">PILL</text>
    <text x="50" y="70" textAnchor="middle" fill={color} fontSize="6" fontWeight="600" fontFamily="Arial" opacity="0.7">TABLET</text>
  </svg>
)

const SprayBottleImg = ({ color = '#F97316' }) => (
  <svg viewBox="0 0 100 120" className="w-20 h-24 md:w-24 md:h-28 mx-auto">
    {/* Bottle body */}
    <rect x="25" y="42" width="50" height="62" rx="10" fill={color} opacity="0.12" stroke={color} strokeWidth="2.5"/>
    {/* Neck */}
    <rect x="42" y="32" width="16" height="12" fill={color} opacity="0.2" stroke={color} strokeWidth="1.5"/>
    {/* Spray nozzle */}
    <rect x="38" y="18" width="24" height="16" rx="4" fill={color} opacity="0.35" stroke={color} strokeWidth="2"/>
    {/* Nozzle tip */}
    <rect x="20" y="22" width="20" height="8" rx="3" fill={color} opacity="0.4" stroke={color} strokeWidth="1.5"/>
    <circle cx="20" cy="26" r="3" fill={color} opacity="0.6"/>
    {/* Spray mist lines */}
    <line x1="14" y1="20" x2="6" y2="16" stroke={color} strokeWidth="1.5" opacity="0.4" strokeLinecap="round"/>
    <line x1="13" y1="25" x2="4" y2="24" stroke={color} strokeWidth="1.5" opacity="0.4" strokeLinecap="round"/>
    <line x1="14" y1="30" x2="6" y2="32" stroke={color} strokeWidth="1.5" opacity="0.4" strokeLinecap="round"/>
    {/* Label */}
    <rect x="30" y="55" width="40" height="24" rx="3" fill="white" opacity="0.85" stroke={color} strokeWidth="1"/>
    <text x="50" y="68" textAnchor="middle" fill={color} fontSize="8" fontWeight="800" fontFamily="Arial">SPRAY</text>
    <text x="50" y="75" textAnchor="middle" fill={color} fontSize="5.5" fontWeight="600" fontFamily="Arial" opacity="0.7">DELAY</text>
    {/* Measurement lines */}
    <line x1="70" y1="58" x2="76" y2="58" stroke={color} strokeWidth="1" opacity="0.3"/>
    <line x1="70" y1="68" x2="76" y2="68" stroke={color} strokeWidth="1" opacity="0.3"/>
    <line x1="70" y1="78" x2="76" y2="78" stroke={color} strokeWidth="1" opacity="0.3"/>
  </svg>
)

const CreamTubeImg = ({ color = '#F97316' }) => (
  <svg viewBox="0 0 100 120" className="w-20 h-24 md:w-24 md:h-28 mx-auto">
    {/* Tube body */}
    <path d="M30 30 L35 100 Q50 108 65 100 L70 30 Z" fill={color} opacity="0.12" stroke={color} strokeWidth="2.5"/>
    {/* Crimp at top */}
    <rect x="30" y="20" width="40" height="12" rx="2" fill={color} opacity="0.3" stroke={color} strokeWidth="1.5"/>
    {/* Crimp lines */}
    <line x1="34" y1="22" x2="34" y2="30" stroke={color} strokeWidth="1" opacity="0.5"/>
    <line x1="40" y1="22" x2="40" y2="30" stroke={color} strokeWidth="1" opacity="0.5"/>
    <line x1="46" y1="22" x2="46" y2="30" stroke={color} strokeWidth="1" opacity="0.5"/>
    <line x1="52" y1="22" x2="52" y2="30" stroke={color} strokeWidth="1" opacity="0.5"/>
    <line x1="58" y1="22" x2="58" y2="30" stroke={color} strokeWidth="1" opacity="0.5"/>
    <line x1="64" y1="22" x2="64" y2="30" stroke={color} strokeWidth="1" opacity="0.5"/>
    {/* Cap */}
    <rect x="38" y="98" width="24" height="18" rx="4" fill={color} opacity="0.4" stroke={color} strokeWidth="1.5"/>
    {/* Label */}
    <rect x="34" y="45" width="32" height="32" rx="3" fill="white" opacity="0.85" stroke={color} strokeWidth="1"/>
    <text x="50" y="60" textAnchor="middle" fill={color} fontSize="8" fontWeight="800" fontFamily="Arial">GEL</text>
    <text x="50" y="70" textAnchor="middle" fill={color} fontSize="6" fontWeight="600" fontFamily="Arial" opacity="0.7">CREAM</text>
  </svg>
)

const PremiumPackageImg = () => (
  <svg viewBox="0 0 120 130" className="w-24 h-26 md:w-32 md:h-36 mx-auto">
    {/* Main box */}
    <rect x="15" y="25" width="90" height="85" rx="8" fill="#064E3B" stroke="#D4AF37" strokeWidth="3"/>
    {/* Gold top band */}
    <rect x="15" y="25" width="90" height="22" rx="8" fill="#D4AF37" opacity="0.2"/>
    <rect x="15" y="40" width="90" height="7" fill="#D4AF37" opacity="0.35"/>
    {/* Crown icon */}
    <path d="M50 48 L55 38 L60 44 L65 35 L70 44 L75 38 L80 48 Z" fill="#D4AF37" opacity="0.9"/>
    {/* Side lines */}
    <line x1="35" y1="47" x2="35" y2="110" stroke="#D4AF37" strokeWidth="1.5" opacity="0.3"/>
    <line x1="85" y1="47" x2="85" y2="110" stroke="#D4AF37" strokeWidth="1.5" opacity="0.3"/>
    {/* Center label area */}
    <rect x="30" y="58" width="60" height="38" rx="4" fill="white" opacity="0.12" stroke="#D4AF37" strokeWidth="1.5"/>
    <text x="60" y="76" textAnchor="middle" fill="#D4AF37" fontSize="10" fontWeight="800" fontFamily="Arial">CUSTOM</text>
    <text x="60" y="88" textAnchor="middle" fill="#D4AF37" fontSize="8" fontWeight="600" fontFamily="Arial">PLAN</text>
    {/* Stars */}
    <text x="30" y="108" textAnchor="middle" fill="#D4AF37" fontSize="10" opacity="0.8">★</text>
    <text x="90" y="108" textAnchor="middle" fill="#D4AF37" fontSize="10" opacity="0.8">★</text>
    {/* Check marks */}
    <circle cx="60" cy="108" r="8" fill="#D4AF37" opacity="0.8"/>
    <path d="M56 108 L59 111 L64 105" stroke="#064E3B" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    {/* Glow effect */}
    <rect x="12" y="22" width="96" height="91" rx="11" fill="none" stroke="#D4AF37" strokeWidth="0.5" opacity="0.3"/>
  </svg>
)

const WarningX = () => (
  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-red-100 border-2 border-red-200 flex items-center justify-center flex-shrink-0">
    <XCircle className="w-5 h-5 md:w-6 md:h-6 text-red-500" />
  </div>
)


// =====================================================================
// Top Trust Bar
// =====================================================================
const TopBar = () => (
  <div className="relative bg-brand-green-dark text-white py-2 text-center text-xs md:text-sm font-medium border-b border-brand-gold/30">
    <a
      href="en.html"
      className="absolute top-1/2 -translate-y-1/2 left-3 md:left-5 bg-brand-gold/20 hover:bg-brand-gold/40 text-brand-gold-light px-2.5 py-1 rounded-full text-[11px] md:text-xs font-bold transition-colors z-10"
    >
      English
    </a>
    <div className="flex items-center justify-center gap-3 md:gap-6 flex-wrap px-4">
      <span className="flex items-center gap-1.5"><Lock className="w-3.5 h-3.5 text-brand-gold" /> سرية تامة</span>
      <span className="hidden sm:flex items-center gap-1.5"><Truck className="w-3.5 h-3.5 text-brand-gold" /> الدفع عند الاستلام</span>
      <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-brand-gold" /> ضمان 90 يوم</span>
      <span className="hidden md:flex items-center gap-1.5"><Headphones className="w-3.5 h-3.5 text-brand-gold" /> متابعة يومية شخصية</span>
    </div>
  </div>
)

// =====================================================================
// SCREEN 1 — HERO with specific product names
// =====================================================================
const HeroSection = () => (
  <section className="relative bg-gradient-to-bl from-brand-green-dark via-brand-green to-brand-green-dark text-white overflow-hidden">
    <div className="absolute inset-0 bg-pattern opacity-40" />
    <div className="absolute top-0 left-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl -translate-y-1/2" />
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl translate-y-1/2" />

    <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-20">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">

        {/* Title + CTA */}
        <div className="fade-in">
          <div className="inline-flex items-center gap-2 bg-brand-gold/15 border border-brand-gold/40 text-brand-gold-light px-4 py-1.5 rounded-full text-xs md:text-sm font-bold mb-5">
            <Crown className="w-4 h-4" />
            <span>خطة مخصصة — ليست منتجاً عاماً</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.2] mb-5">
            هل جرّبت
            <span className="text-gradient-gold mx-2">Viagra أو Procomil</span>
            من قبل؟
          </h1>

          <p className="text-base md:text-xl text-white/85 leading-relaxed mb-7">
            معظم الرجال في المنطقة جرّبوا <strong className="text-brand-gold-light">Viagra</strong>،
            <strong className="text-brand-gold-light"> Snafi</strong>،
            <strong className="text-brand-gold-light"> Priligy</strong>،
            <strong className="text-brand-gold-light"> Procomil</strong>، أو
            <strong className="text-brand-gold-light"> Himcolin</strong> —
            ومع ذلك تتكرر المشكلة.
            لأن هذه الحلول في الغالب <strong className="text-brand-gold-light">مؤقتة</strong> أو
            <strong className="text-brand-gold-light"> تخدير موضعي</strong>،
            وليست خطة مخصصة لحالتك أنت.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-7">
            <a
              href="#"
                            className="bg-[#25D366] hover:bg-[#1ebe5d] text-white px-6 py-4 rounded-2xl font-bold text-base md:text-lg flex items-center justify-center gap-2.5 shadow-lg shadow-[#25D366]/30 transition-all hover:scale-[1.02]"
            >
              <MessageCircle className="w-5 h-5" />
              <span>ابدأ تقييمك الخاص الآن</span>
            </a>
            <a
              href="#brand-comparison"
              className="bg-white/10 backdrop-blur border-2 border-brand-gold/60 hover:bg-brand-gold/10 text-white px-6 py-4 rounded-2xl font-bold text-base md:text-lg flex items-center justify-center gap-2 transition-all"
            >
              <span>قارن المنتجات التي تعرفها</span>
              <ArrowDownCircle className="w-5 h-5 text-brand-gold-light" />
            </a>
          </div>

          <div className="flex items-center gap-4 flex-wrap text-xs md:text-sm text-white/70">
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-brand-gold-light" /> تقييم خاص</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-brand-gold-light" /> منتج مخصص</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-brand-gold-light" /> متابعة يومية</span>
          </div>
        </div>

        {/* Comparison Card with specific brands */}
        <div>
          <div className="relative">
            <div className="absolute -top-3 -right-3 bg-brand-gold text-brand-green-dark px-4 py-1.5 rounded-full text-xs font-black z-10 shadow-lg">
              مقارنة سريعة
            </div>
            <div className="bg-white/95 backdrop-blur rounded-3xl p-5 md:p-7 shadow-2xl text-brand-gray">

              {[
                {
                  category: 'ED Pills',
                  brands: 'Viagra · Cialis · Snafi · Erecta · Wafi',
                  arLabel: 'حبوب — دعم مؤقت',
                  icon: Pill,
                  color: 'red',
                  isOurs: false,
                },
                {
                  category: 'PE Pills',
                  brands: 'Priligy · Dapoxetine · Lejam · Endura',
                  arLabel: 'حبوب — عند الحاجة فقط',
                  icon: Pill,
                  color: 'red',
                  isOurs: false,
                },
                {
                  category: 'Delay Sprays',
                  brands: 'Procomil · Dynamo · Stud 100 · Viga X · Xcite',
                  arLabel: 'بخاخ — تخدير موضعي',
                  icon: Wind,
                  color: 'orange',
                  isOurs: false,
                },
                {
                  category: 'Gels / Creams',
                  brands: 'Himcolin · Eroxon · Lidocaine · Prila · EMLA',
                  arLabel: 'جل/كريم — تأثير سطحي',
                  icon: Droplet,
                  color: 'orange',
                  isOurs: false,
                },
                {
                  category: 'Our Plan',
                  brands: 'تقييم خاص + خطة مخصصة + متابعة + ضمان 90 يوم',
                  arLabel: 'منتجنا — خطة كاملة مخصصة',
                  icon: Crown,
                  color: 'green',
                  isOurs: true,
                },
              ].map((item, idx) => {
                const Icon = item.icon
                return (
                  <div
                    key={idx}
                    className={`flex items-center gap-3 p-3 md:p-4 rounded-2xl mb-2.5 last:mb-0 transition-all ${
                      item.isOurs
                        ? 'bg-gradient-to-l from-brand-green to-brand-green-light text-white border-2 border-brand-gold shadow-lg shadow-brand-green/30 scale-[1.02]'
                        : 'bg-gray-50 border border-gray-200'
                    }`}
                  >
                    <div className={`flex-shrink-0 w-11 h-11 md:w-12 md:h-12 rounded-xl flex items-center justify-center ${
                      item.isOurs ? 'bg-brand-gold text-brand-green-dark' :
                      item.color === 'red' ? 'bg-red-100 text-red-600' :
                      'bg-orange-100 text-orange-600'
                    }`}>
                      <Icon className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className={`font-bold text-sm md:text-base mb-0.5 ${item.isOurs ? 'text-white' : 'text-brand-gray'}`}>
                        {item.category}
                        {item.isOurs && <Sparkles className="inline w-4 h-4 text-brand-gold mr-1" />}
                      </div>
                      <div className={`text-xs md:text-sm ${item.isOurs ? 'text-brand-gold-light' : 'text-gray-500'}`} dir="ltr">
                        {item.brands}
                      </div>
                      <div className={`text-[11px] md:text-xs mt-0.5 ${item.isOurs ? 'text-white/70' : 'text-gray-400'}`}>
                        {item.arLabel}
                      </div>
                    </div>
                    {item.isOurs ? (
                      <CheckCircle2 className="w-6 h-6 text-brand-gold flex-shrink-0" />
                    ) : (
                      <AlertTriangle className={`w-5 h-5 flex-shrink-0 ${item.color === 'red' ? 'text-red-500' : 'text-orange-500'}`} />
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="relative pb-6 flex justify-center">
      <ChevronDown className="w-6 h-6 text-brand-gold animate-bounce" />
    </div>
  </section>
)

// =====================================================================
// SCREEN 2 — BRAND VISUAL COMPARISON (Core Module)
// =====================================================================
const BrandComparisonSection = () => {
  const competitorCategories = [
    {
      id: 'ed-pills',
      icon: Pill,
      productImg: <PillBottleImg color="#DC2626" />,
      titleAr: 'حبوب الانتصاب',
      titleEn: 'ED Pills',
      brands: ['Viagra', 'Sildenafil', 'Cialis', 'Tadalafil', 'Snafi', 'Erecta', 'Wafi', 'Tadil', 'Herox'],
      badge: 'Temporary · مؤقت',
      badgeColor: 'bg-red-600',
      limitation: 'دعم انتصاب مؤقت فقط — لا يعالج الجذر',
      warningPoints: [
        'تأثير مؤقت يزول بعد ساعات',
        'آثار جانبية: صداع، احمرار، عسر هضم',
        'تحتاج إثارة جنسية لتعمل',
        'لا متابعة شخصية',
      ],
    },
    {
      id: 'pe-pills',
      icon: Pill,
      productImg: <PillBottleImg color="#B91C1C" />,
      titleAr: 'حبوب تأخير القذف',
      titleEn: 'PE Pills',
      brands: ['Priligy', 'Dapoxetine', 'Lejam', 'Endura'],
      badge: 'On-demand · عند الحاجة',
      badgeColor: 'bg-red-500',
      limitation: 'دواء عند الحاجة فقط — لا خطة علاجية',
      warningPoints: [
        'يُؤخذ قبل كل علاقة',
        'لا معالجة للسبب الأساسي',
        'آثار جانبية محتملة',
        'لا متابعة أو تخصيص',
      ],
    },
    {
      id: 'delay-sprays',
      icon: Wind,
      productImg: <SprayBottleImg color="#EA580C" />,
      titleAr: 'بخاخات التأخير',
      titleEn: 'Delay Sprays',
      brands: ['Procomil', 'Dynamo', 'Stud 100', 'pjur med PROLONG', 'Eros', 'Viga X', 'Xcite'],
      badge: 'Numbing · تخدير',
      badgeColor: 'bg-orange-500',
      limitation: 'تُخدّر الإحساس — لا تحسّن الأداء',
      warningPoints: [
        'تقلل متعتك أنت أيضاً',
        'قد تؤثر على الشريكة',
        'إحراج: رش + انتظار + تنظيف',
        'تأثير مؤقت جداً',
      ],
    },
    {
      id: 'gels-creams',
      icon: Droplet,
      productImg: <CreamTubeImg color="#EA580C" />,
      titleAr: 'الجل والكريمات',
      titleEn: 'Gels & Creams',
      brands: ['Himcolin', 'Eroxon', 'Vittal Gel', 'Lidocaine Cream', 'Lidocaine Ointment', 'Prila 5%', 'EMLA'],
      badge: 'Surface · سطحي',
      badgeColor: 'bg-orange-500',
      limitation: 'تأثير سطحي محدود — لا يصل للجذر',
      warningPoints: [
        'لزج وقد يترك بقايا',
        'يحتاج وقتاً للامتصاص',
        'تأثير محصور بموضع الدهن',
        'لا يكفي للمشكلات المركبة',
      ],
    },
  ]

  return (
    <section id="brand-comparison" className="py-14 md:py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-red-50/50 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-50/30 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 px-4 py-1.5 rounded-full text-xs md:text-sm font-bold mb-4">
            <AlertTriangle className="w-4 h-4" />
            <span>المنتجات التي تعرفها — وحدودها</span>
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-brand-green mb-3 leading-tight">
            هذه المنتجات شائعة…
            <span className="block text-red-600 mt-1">لكنها ليست الحل الكامل</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-lg max-w-3xl mx-auto">
            إذا جرّبت أي من هذه الأسماء من قبل ولم تحصل على النتيجة المستدامة — السبب أنها حلول عامة،
            ليست مخصصة لحالتك أنت.
          </p>
        </div>

        {/* Main comparison layout */}
        <div className="grid lg:grid-cols-12 gap-5 md:gap-6 items-stretch">

          {/* LEFT: Competitor categories (8 cols on desktop) */}
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-4 md:gap-5">
            {competitorCategories.map((cat, idx) => {
              const Icon = cat.icon
              return (
                <div
                  key={idx}
                  className="relative bg-gradient-to-b from-gray-50 to-white border-2 border-gray-200 rounded-3xl p-5 md:p-6 hover:border-red-300 transition-all overflow-hidden group"
                >
                  {/* Warning badge */}
                  <div className="absolute -top-0 left-0 right-0">
                    <div className={`${cat.badgeColor} text-white px-4 py-1.5 rounded-b-xl text-[10px] md:text-xs font-black uppercase tracking-wide shadow-md mx-auto w-fit`}>
                      <span className="flex items-center gap-1.5">
                        <AlertTriangle className="w-3 h-3" />
                        {cat.badge}
                      </span>
                    </div>
                  </div>

                  {/* Product Image */}
                  <div className="mt-5 mb-3">
                    {cat.productImg}
                  </div>

                  {/* Category Title */}
                  <div className="text-center mb-3">
                    <h3 className="text-base md:text-lg font-black text-brand-gray leading-snug">
                      {cat.titleAr}
                    </h3>
                    <div className="text-xs text-gray-400 font-bold tracking-wide" dir="ltr">{cat.titleEn}</div>
                  </div>

                  {/* Brand names grid */}
                  <div className="flex flex-wrap gap-1.5 justify-center mb-4">
                    {cat.brands.map((brand, bi) => (
                      <span
                        key={bi}
                        className="bg-white border border-gray-200 text-gray-600 px-2.5 py-1 rounded-lg text-[11px] md:text-xs font-bold"
                        dir="ltr"
                      >
                        {brand}
                      </span>
                    ))}
                  </div>

                  {/* Limitation bar */}
                  <div className="bg-red-50 border border-red-100 rounded-xl p-2.5 mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-500 flex-shrink-0" />
                    <span className="text-xs md:text-sm text-red-700 font-bold leading-snug">{cat.limitation}</span>
                  </div>

                  {/* Warning points */}
                  <ul className="space-y-1.5">
                    {cat.warningPoints.map((point, pi) => (
                      <li key={pi} className="flex items-start gap-2 text-xs md:text-[13px] text-gray-600 leading-snug">
                        <XCircle className="w-3.5 h-3.5 text-red-400 flex-shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>

          {/* RIGHT: Our Product (4 cols on desktop) - Most Prominent */}
          <div className="lg:col-span-4">
            <div className="relative h-full bg-gradient-to-b from-brand-green via-brand-green-dark to-brand-green-dark text-white rounded-3xl p-6 md:p-8 border-4 border-brand-gold shadow-2xl glow-green flex flex-col">
              {/* Best choice badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-gold text-brand-green-dark px-5 py-2 rounded-full text-sm font-black shadow-lg whitespace-nowrap flex items-center gap-1.5">
                <Crown className="w-4 h-4" />
                الخيار الأفضل
              </div>

              {/* Product Image */}
              <div className="mt-4 mb-5">
                <PremiumPackageImg />
              </div>

              {/* Title */}
              <div className="text-center mb-5">
                <h3 className="text-xl md:text-2xl font-black text-brand-gold-light leading-snug mb-1">
                  خطة مخصصة لحالتك
                </h3>
                <div className="text-sm text-white/70 font-bold" dir="ltr">Personalized Full-Cycle Plan</div>
              </div>

              {/* Value propositions */}
              <div className="space-y-3 flex-1">
                {[
                  { icon: ClipboardCheck, text: 'تقييم خاص قبل التوصية' },
                  { icon: Crown, text: 'منتج مخصص حسب وضعك' },
                  { icon: MessageCircle, text: 'متابعة يومية شخصية' },
                  { icon: CalendarCheck, text: 'برنامج 20–30 يوم' },
                  { icon: Lock, text: 'خصوصية تامة + شحن سري' },
                  { icon: ShieldCheck, text: 'ضمان 90 يوم كامل' },
                  { icon: Leaf, text: 'مكونات نباتية + اعتمادات' },
                ].map((item, i) => {
                  const ItemIcon = item.icon
                  return (
                    <div key={i} className="flex items-center gap-3 p-2.5 bg-white/10 backdrop-blur rounded-xl border border-brand-gold/20">
                      <div className="w-8 h-8 bg-brand-gold rounded-lg flex items-center justify-center flex-shrink-0">
                        <ItemIcon className="w-4 h-4 text-brand-green-dark" />
                      </div>
                      <span className="text-sm md:text-[15px] font-bold text-white">{item.text}</span>
                      <CheckCircle2 className="w-5 h-5 text-brand-gold flex-shrink-0 mr-auto" />
                    </div>
                  )
                })}
              </div>

              {/* Comparison summary */}
              <div className="mt-5 pt-4 border-t border-brand-gold/30">
                <div className="text-center text-brand-gold text-xs md:text-sm font-bold mb-3">
                  بينما المنتجات الأخرى...
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { label: 'مؤقتة', icon: XCircle },
                    { label: 'عامة', icon: XCircle },
                    { label: 'بدون متابعة', icon: XCircle },
                    { label: 'بدون ضمان', icon: XCircle },
                  ].map((item, i) => {
                    const ItemIcon = item.icon
                    return (
                      <div key={i} className="flex items-center gap-1.5 bg-red-500/20 border border-red-400/30 rounded-lg px-2.5 py-1.5">
                        <ItemIcon className="w-3.5 h-3.5 text-red-300 flex-shrink-0" />
                        <span className="text-xs text-red-200 font-bold">{item.label}</span>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-5">
                <a
                  href="#"
                                    className="block w-full bg-brand-gold hover:bg-brand-gold-light text-brand-green-dark text-center px-5 py-4 rounded-2xl font-black text-sm md:text-base shadow-lg transition-all hover:scale-[1.02]"
                >
                  <span className="flex items-center justify-center gap-2">
                    <MessageCircle className="w-5 h-5" />
                    ابدأ تقييمك الخاص الآن
                  </span>
                </a>
                <p className="text-center text-white/50 text-xs mt-2">
                  سرية تامة · دفع عند الاستلام
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom trust message */}
        <div className="mt-8 md:mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-brand-green/5 border-2 border-brand-green/20 rounded-2xl px-6 py-4">
            <div className="w-10 h-10 bg-brand-green rounded-xl flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="w-5 h-5 text-brand-gold" />
            </div>
            <p className="text-sm md:text-base text-brand-green font-bold">
              ليست المشكلة أن هذه المنتجات "سيئة" — بل أنها <span className="text-red-600">غير مخصصة لحالتك</span>.
              {' '}
              <span className="text-brand-gold">خطة مخصصة</span> هي ما يجعل الفرق الحقيقي.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// =====================================================================
// SCREEN 3 — Core comparison table with brand names
// =====================================================================
const ComparisonTableSection = () => {
  const rows = [
    {
      label: 'التأثير الرئيسي',
      en: 'Main Effect',
      icon: Target,
      pill: 'Viagra/Cialis/Snafi: تحفيز مؤقت للانتصاب',
      spray: 'Procomil/Dynamo/Stud100: تقليل الإحساس بالتخدير',
      gel: 'Himcolin/Eroxon/Lidocaine: تحفيز أو تخدير سطحي',
      ours: 'مخصص حسب حالتك — صلابة + وقت + إحساس + حالة عامة',
    },
    {
      label: 'التخصيص الشخصي',
      en: 'Personalization',
      icon: UserCheck,
      pill: 'لا — جرعة عامة لكل الناس',
      spray: 'لا — بخاخ موحّد لكل الناس',
      gel: 'لا — دهن سطحي عام',
      ours: 'نعم — مصمم حسب وضعك تماماً',
    },
    {
      label: 'الطبيعة الزمنية',
      en: 'Duration Type',
      icon: Clock,
      pill: 'مؤقت — يعمل لساعات فقط',
      spray: 'مؤقت — يعمل لدقائق/ساعات',
      gel: 'مؤقت — يعمل لدقائق فقط',
      ours: 'برنامج 20–30 يوم لتحسين مستدام',
    },
    {
      label: 'التجربة الطبيعية',
      en: 'Natural Experience',
      icon: HeartHandshake,
      pill: 'ردود فعل دوائية أو شعور بالاعتماد',
      spray: 'خدر يقلل المتعة لك وللشريكة',
      gel: 'لزوجة وبقايا وإحراج',
      ours: 'تجربة طبيعية مع إرشاد كامل',
    },
    {
      label: 'الآثار الجانبية',
      en: 'Side Effects',
      icon: AlertOctagon,
      pill: 'صداع، احمرار، عسر هضم، دوخة، رؤية ضبابية',
      spray: 'تخدير، حرقان، تهيج، فقدان متعة الشريكة',
      gel: 'لزج، تهيج، انتظار، تأثير محدود',
      ours: 'مكونات نباتية + إرشاد + متابعة شخصية',
    },
    {
      label: 'المتابعة الشخصية',
      en: 'Follow-up',
      icon: Headphones,
      pill: 'لا توجد — تشتري وتستخدم وحدك',
      spray: 'لا توجد — لا أحد يسأل عن نتيجتك',
      gel: 'لا توجد — لا دعم بعد الشراء',
      ours: 'متابعة يومية شخصية 3–5 دقائق',
    },
    {
      label: 'الخصوصية',
      en: 'Privacy',
      icon: EyeOff,
      pill: 'محرج في الصيدلية أمام الناس',
      spray: 'محرج عند الشراء والاستخدام',
      gel: 'قد تلاحظه الشريكة أو تترك بقايا',
      ours: 'تواصل خاص + شحن سري + دفع عند الاستلام',
    },
  ]

  return (
    <section id="comparison" className="py-14 md:py-24 bg-gradient-to-b from-brand-cream to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 bg-brand-gold/15 border border-brand-gold/40 text-brand-green px-4 py-1.5 rounded-full text-xs md:text-sm font-bold mb-4">
            <Award className="w-4 h-4 text-brand-gold" />
            <span>المقارنة الكاملة — Side by Side</span>
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-brand-green mb-3 leading-tight">
            مقارنة واضحة: المنتجات التي تعرفها
            <span className="block text-gradient-gold mt-1">مقابل خطتنا المخصصة</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-lg max-w-3xl mx-auto">
            انظر بنفسك كيف تختلف خطتنا في كل جانب — من التخصيص إلى المتابعة إلى الخصوصية.
          </p>
        </div>

        {/* DESKTOP TABLE */}
        <div className="hidden lg:block">
          <div className="overflow-hidden rounded-3xl shadow-2xl border border-brand-gold/20">
            <table className="w-full bg-white">
              <thead>
                <tr>
                  <th className="bg-brand-green-dark text-white py-5 px-5 text-right font-bold text-base w-[18%] border-b-2 border-brand-gold">
                    <div className="flex items-center gap-2">
                      <Gauge className="w-5 h-5 text-brand-gold" />
                      <span>عنصر المقارنة</span>
                    </div>
                  </th>
                  <th className="bg-red-50 text-red-700 py-5 px-3 font-bold text-sm w-[18%] border-b-2 border-red-200">
                    <div className="flex flex-col items-center gap-1">
                      <Pill className="w-6 h-6 text-red-500" />
                      <span>حبوب ED/PE</span>
                      <span className="text-[10px] font-normal text-red-400" dir="ltr">Viagra · Priligy · Snafi</span>
                    </div>
                  </th>
                  <th className="bg-orange-50 text-orange-700 py-5 px-3 font-bold text-sm w-[18%] border-b-2 border-orange-200">
                    <div className="flex flex-col items-center gap-1">
                      <Wind className="w-6 h-6 text-orange-500" />
                      <span>بخاخ التأخير</span>
                      <span className="text-[10px] font-normal text-orange-400" dir="ltr">Procomil · Dynamo · Stud 100</span>
                    </div>
                  </th>
                  <th className="bg-orange-50 text-orange-700 py-5 px-3 font-bold text-sm w-[18%] border-b-2 border-orange-200">
                    <div className="flex flex-col items-center gap-1">
                      <Droplet className="w-6 h-6 text-orange-500" />
                      <span>جل / كريم</span>
                      <span className="text-[10px] font-normal text-orange-400" dir="ltr">Himcolin · Eroxon · Lidocaine</span>
                    </div>
                  </th>
                  <th className="bg-gradient-to-b from-brand-green to-brand-green-dark text-white py-5 px-4 font-bold text-sm w-[28%] relative border-b-4 border-brand-gold">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-gold text-brand-green-dark px-3 py-0.5 rounded-full text-[10px] font-black shadow-lg whitespace-nowrap">
                      الأفضل
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <Crown className="w-6 h-6 text-brand-gold" />
                      <span className="text-base">منتجنا المخصص</span>
                      <span className="text-[10px] font-normal text-brand-gold-light" dir="ltr">Our Personalized Plan</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, idx) => {
                  const Icon = row.icon
                  return (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-50/50' : 'bg-white'}>
                      <td className="py-5 px-5 font-bold text-brand-green border-b border-gray-100">
                        <div className="flex items-start gap-2.5">
                          <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-brand-green/10 flex items-center justify-center mt-0.5">
                            <Icon className="w-4 h-4 text-brand-green" />
                          </div>
                          <div>
                            <div className="text-[15px]">{row.label}</div>
                            <div className="text-[11px] text-gray-400 font-normal mt-0.5" dir="ltr">{row.en}</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-5 px-3 text-sm text-gray-700 border-b border-gray-100 align-top">
                        <div className="flex items-start gap-2">
                          <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-1" />
                          <span>{row.pill}</span>
                        </div>
                      </td>
                      <td className="py-5 px-3 text-sm text-gray-700 border-b border-gray-100 align-top">
                        <div className="flex items-start gap-2">
                          <XCircle className="w-4 h-4 text-orange-400 flex-shrink-0 mt-1" />
                          <span>{row.spray}</span>
                        </div>
                      </td>
                      <td className="py-5 px-3 text-sm text-gray-700 border-b border-gray-100 align-top">
                        <div className="flex items-start gap-2">
                          <XCircle className="w-4 h-4 text-orange-400 flex-shrink-0 mt-1" />
                          <span>{row.gel}</span>
                        </div>
                      </td>
                      <td className="py-5 px-4 text-sm text-white bg-gradient-to-b from-brand-green/95 to-brand-green-dark/95 border-b border-brand-gold/30 align-top font-medium">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                          <span>{row.ours}</span>
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* MOBILE COMPARISON — card style */}
        <div className="lg:hidden space-y-5">
          {rows.map((row, idx) => {
            const Icon = row.icon
            return (
              <div key={idx} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="bg-brand-green-dark text-white px-4 py-3 flex items-center gap-2">
                  <Icon className="w-5 h-5 text-brand-gold" />
                  <div>
                    <div className="font-bold text-sm">{row.label}</div>
                    <div className="text-[10px] text-brand-gold-light" dir="ltr">{row.en}</div>
                  </div>
                </div>
                <div className="divide-y divide-gray-100">
                  <div className="px-4 py-3 flex items-start gap-2">
                    <div className="flex items-center gap-1.5 w-28 flex-shrink-0 text-xs text-red-600 font-bold">
                      <Pill className="w-3.5 h-3.5 text-red-400" />
                      <span dir="ltr">ED/PE Pills</span>
                    </div>
                    <div className="flex-1 flex items-start gap-1.5">
                      <XCircle className="w-3.5 h-3.5 text-red-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{row.pill}</span>
                    </div>
                  </div>
                  <div className="px-4 py-3 flex items-start gap-2">
                    <div className="flex items-center gap-1.5 w-28 flex-shrink-0 text-xs text-orange-600 font-bold">
                      <Wind className="w-3.5 h-3.5 text-orange-400" />
                      <span dir="ltr">Sprays</span>
                    </div>
                    <div className="flex-1 flex items-start gap-1.5">
                      <XCircle className="w-3.5 h-3.5 text-orange-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{row.spray}</span>
                    </div>
                  </div>
                  <div className="px-4 py-3 flex items-start gap-2">
                    <div className="flex items-center gap-1.5 w-28 flex-shrink-0 text-xs text-orange-600 font-bold">
                      <Droplet className="w-3.5 h-3.5 text-orange-400" />
                      <span dir="ltr">Gels</span>
                    </div>
                    <div className="flex-1 flex items-start gap-1.5">
                      <XCircle className="w-3.5 h-3.5 text-orange-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{row.gel}</span>
                    </div>
                  </div>
                  <div className="px-4 py-3 flex items-start gap-2 bg-gradient-to-l from-brand-green to-brand-green-dark border-t-2 border-brand-gold">
                    <div className="flex items-center gap-1.5 w-28 flex-shrink-0 text-xs text-brand-gold font-bold">
                      <Crown className="w-3.5 h-3.5" />
                      <span>منتجنا</span>
                    </div>
                    <div className="flex-1 flex items-start gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-white font-medium">{row.ours}</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA after table */}
        <div className="mt-10 md:mt-12 text-center">
          <a
            href="#"
                        className="inline-flex items-center justify-center gap-3 bg-brand-green hover:bg-brand-green-dark text-white px-7 py-4 rounded-2xl font-bold text-base md:text-lg shadow-xl shadow-brand-green/30 transition-all hover:scale-[1.02] border-2 border-brand-gold"
          >
            <MessageCircle className="w-5 h-5 text-brand-gold" />
            <span>اطلب تقييمك الخاص الآن</span>
          </a>
        </div>
      </div>
    </section>
  )
}

// =====================================================================
// SCREEN 4 — Side effects & limitations with brand names
// =====================================================================
const SideEffectsSection = () => {
  const modules = [
    {
      icon: Pill,
      title: 'الحبوب قد تساعد مؤقتاً، لكنها ليست مناسبة للجميع',
      subtitle: 'ED Pills: Viagra / Cialis / Snafi / Erecta / Wafi / Tadil / Herox · PE Pills: Priligy / Dapoxetine / Lejam / Endura',
      color: 'red',
      issues: [
        { icon: Clock, text: 'موجهة بشكل أساسي لدعم انتصاب قصير المدى أو تأخير وقتي' },
        { icon: Activity, text: 'تحتاج لإثارة جنسية كي تعمل (Viagra/Cialis)' },
        { icon: Target, text: 'ليست خطة كاملة: لا تعالج القذف المبكر + الإحساس + الثقة معاً' },
        { icon: AlertTriangle, text: 'صداع، احمرار، عسر هضم، انسداد أنفي، دوخة' },
        { icon: Eye, text: 'اضطراب في الرؤية (Viagra/Sildenafil) وآلام في الظهر (Cialis)' },
        { icon: AlertOctagon, text: 'خطر هبوط ضغط حاد مع أدوية النترات — ممنوعة لمرضى القلب' },
        { icon: Stethoscope, text: 'حذر شديد لأصحاب القلب والضغط والسكري والأمراض المزمنة' },
        { icon: Frown, text: 'شعور بالاعتماد على الحبة قبل كل علاقة' },
      ],
    },
    {
      icon: Wind,
      title: 'البخاخات تؤخر أحياناً لأنها تُخدّر الإحساس',
      subtitle: 'Procomil / Dynamo / Stud 100 / pjur med PROLONG / Eros / Viga X / Xcite',
      color: 'orange',
      issues: [
        { icon: Frown, text: 'ليست تحسيناً لحالتك — بل تقليل للحس فقط' },
        { icon: Wind, text: 'قد تسبب خدر غير مريح في المنطقة' },
        { icon: Activity, text: 'تقلل من متعتك أنت أيضاً — ليس فقط الحساسية' },
        { icon: HeartHandshake, text: 'قد تؤثر سلباً على إحساس الشريكة إذا انتقلت' },
        { icon: TimerReset, text: 'تحتاج لرشّ مسبق + انتظار 10–15 دقيقة قبل العلاقة' },
        { icon: Droplet, text: 'خطوة تنظيف قبل العلاقة قد تكسر الأجواء وتسبب إحراجاً' },
        { icon: EyeOff, text: 'رائحة كيميائية أو بقايا قد تُلاحظ' },
      ],
    },
    {
      icon: Droplet,
      title: 'الكريمات والجل تعمل على السطح فقط',
      subtitle: 'Himcolin / Eroxon / Vittal / Lidocaine Cream / Lidocaine Ointment / Prila 5% / EMLA',
      color: 'orange',
      issues: [
        { icon: Target, text: 'تأثير محصور في موضع الدهن فقط' },
        { icon: Frown, text: 'قد تكون لزجة وتترك بقايا أو بقع على الملابس' },
        { icon: Clock, text: 'تحتاج وقتاً للامتصاص قبل الاستخدام' },
        { icon: AlertOctagon, text: 'لا تكفي لمشكلات مركّبة: صلابة + وقت + ثقة + حالة عامة' },
        { icon: UserCheck, text: 'ليست مخصصة لحالتك الفردية — نفس الكريم للجميع' },
        { icon: EyeOff, text: 'قد تلاحظه الشريكة أو تشم رائحته' },
      ],
    },
  ]

  return (
    <section className="py-14 md:py-24 bg-brand-cream relative overflow-hidden">
      <div className="absolute top-20 right-0 w-72 h-72 bg-red-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-orange-100/40 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 px-4 py-1.5 rounded-full text-xs md:text-sm font-bold mb-4">
            <AlertOctagon className="w-4 h-4" />
            <span>اعرف حدود كل منتج قبل أن تختار</span>
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-brand-green mb-3 leading-tight">
            قبل أن تعتمد على حلول مؤقتة،
            <span className="block text-red-700 mt-1">اعرف حدودها بالتفصيل</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-lg max-w-3xl mx-auto">
            هذه ليست انتقاداً للمنتجات — بل توضيح لما تستطيع وما لا تستطيع تقديمه.
            أسماء منتجات حقيقية تعرفها.
          </p>
        </div>

        <div className="space-y-6 md:space-y-8">
          {modules.map((m, idx) => {
            const Icon = m.icon
            return (
              <div
                key={idx}
                className={`relative bg-white rounded-3xl shadow-xl border-2 ${
                  m.color === 'red' ? 'border-red-200' : 'border-orange-200'
                } overflow-hidden`}
              >
                {/* Side stripe */}
                <div className={`absolute top-0 bottom-0 right-0 w-2 ${m.color === 'red' ? 'bg-red-500' : 'bg-orange-500'}`} />

                <div className="p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center ${
                      m.color === 'red' ? 'bg-red-50 border-2 border-red-100' : 'bg-orange-50 border-2 border-orange-100'
                    }`}>
                      <Icon className={`w-7 h-7 md:w-8 md:h-8 ${m.color === 'red' ? 'text-red-500' : 'text-orange-500'}`} strokeWidth={1.5} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg md:text-2xl font-black text-brand-gray leading-tight">
                        {m.title}
                      </h3>
                      <div className="text-xs md:text-sm text-gray-400 font-bold mt-1.5 leading-relaxed" dir="ltr">
                        {m.subtitle}
                      </div>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {m.issues.map((issue, i) => {
                      const IssueIcon = issue.icon
                      return (
                        <div
                          key={i}
                          className={`flex items-start gap-3 p-3 md:p-4 rounded-2xl ${
                            m.color === 'red' ? 'bg-red-50/60' : 'bg-orange-50/60'
                          }`}
                        >
                          <div className={`flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center ${
                            m.color === 'red' ? 'bg-red-100 text-red-600' : 'bg-orange-100 text-orange-600'
                          }`}>
                            <IssueIcon className="w-4 h-4" />
                          </div>
                          <span className="text-sm md:text-[15px] text-gray-700 leading-snug flex-1">
                            {issue.text}
                          </span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// =====================================================================
// SCREEN 5 — Common Products (revised with brand names)
// =====================================================================
const CommonProductsSection = () => {
  const products = [
    {
      icon: Pill,
      title: 'حبوب ED: Viagra / Cialis / Snafi / Erecta / Wafi',
      subtitle: 'ED Pills · Sildenafil / Tadalafil',
      badge: 'Temporary',
      brands: ['Viagra', 'Cialis', 'Snafi', 'Erecta', 'Wafi', 'Tadil', 'Herox'],
      points: [
        'حبوب شائعة جداً لمشاكل ضعف الانتصاب في المنطقة',
        'تُؤخذ قبل العلاقة بـ 30–60 دقيقة',
        'Snafi و Erecta منتجات معروفة في الخليج والشرق الأوسط',
        'تأثيرها مؤقت — يزول بعد ساعات',
        'قد تسبب صداع، احمرار، عسر هضم، انسداد أنفي، اضطراب رؤية ودوخة',
        'الاستخدام مع أدوية النترات للقلب قد يسبب هبوطاً خطيراً في الضغط',
      ],
    },
    {
      icon: Wind,
      title: 'بخاخات التأخير: Procomil / Dynamo / Stud 100',
      subtitle: 'Delay Sprays · Lidocaine based',
      badge: 'Numbing',
      brands: ['Procomil', 'Dynamo', 'Stud 100', 'pjur med PROLONG', 'Eros', 'Viga X', 'Xcite'],
      points: [
        'Procomil Delay Spray من أشهر البخاخات في المنطقة',
        'Dynamo Delay Spray و Stud 100 منتجات معروفة عالمياً',
        'تحتوي عادة على ليدوكائين / برلوكائين كمخدر موضعي',
        'تُؤخر عن طريق تقليل الإحساس — لا تحسّن الأداء فعلياً',
        'قد تسبب خدراً غير مريح وتقلل من المتعة',
        'قد تؤثر على إحساس الشريكة إذا انتقلت',
        'تحتاج لرشّ مسبق + انتظار + تنظيف',
      ],
    },
    {
      icon: Droplet,
      title: 'الكريمات والجل: Himcolin / Eroxon / Lidocaine',
      subtitle: 'Gels & Creams · Topical',
      badge: 'Surface-level',
      brands: ['Himcolin', 'Eroxon', 'Vittal', 'Lidocaine Cream', 'Prila 5%', 'EMLA'],
      points: [
        'Himcolin Gel منتج معروف في المنطقة',
        'Eroxon Gel منتج أوروبي شائع',
        'Lidocaine Cream / Ointment و Prila 5% كريمات مخدرة موضعية',
        'EMLA Cream مخدر موضعي معروف',
        'تُدهن على السطح فقط وتأثيرها محصور بموضع الدهن',
        'قد تكون لزجة، تترك بقايا أو رائحة',
        'لا تكفي للمشكلات المركّبة: صلابة + وقت + إحساس + ثقة',
      ],
    },
  ]

  return (
    <section className="py-14 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 px-4 py-1.5 rounded-full text-xs md:text-sm font-bold mb-4">
            <AlertTriangle className="w-4 h-4" />
            <span>Common Limitations — حدود المنتجات الشائعة</span>
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-brand-green mb-3">
            ما الذي يستخدمه معظم الرجال عادة؟
          </h2>
          <p className="text-gray-600 text-sm md:text-lg max-w-2xl mx-auto">
            ثلاث فئات شائعة — لكنها جميعاً تشترك في نفس المشكلة: حلول عامة، ليست مخصصة لحالتك.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 md:gap-7">
          {products.map((p, idx) => {
            const Icon = p.icon
            return (
              <div
                key={idx}
                className="relative bg-gradient-to-b from-gray-50 to-white border-2 border-gray-200 rounded-3xl p-6 md:p-7 hover:border-red-300 transition-all"
              >
                <div className="absolute -top-3 -right-3">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-[10px] md:text-xs font-black uppercase tracking-wide shadow-lg" dir="ltr">
                    {p.badge}
                  </span>
                </div>

                <div className="w-16 h-16 md:w-20 md:h-20 bg-red-50 border-2 border-red-100 rounded-2xl flex items-center justify-center mb-5 mx-auto">
                  <Icon className="w-8 h-8 md:w-10 md:h-10 text-red-500" strokeWidth={1.5} />
                </div>

                <h3 className="text-lg md:text-xl font-black text-brand-gray text-center mb-1 leading-snug">
                  {p.title}
                </h3>
                <div className="text-center text-xs md:text-sm text-gray-400 font-bold mb-4 tracking-wide" dir="ltr">
                  {p.subtitle}
                </div>

                {/* Brand pills */}
                <div className="flex flex-wrap gap-1 justify-center mb-4">
                  {p.brands.map((brand, bi) => (
                    <span key={bi} className="bg-white border border-gray-200 text-gray-500 px-2 py-0.5 rounded-md text-[10px] font-bold" dir="ltr">
                      {brand}
                    </span>
                  ))}
                </div>

                <ul className="space-y-2.5">
                  {p.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm md:text-[15px] text-gray-700 leading-relaxed">
                      <XCircle className="w-4 h-4 md:w-5 md:h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 pt-4 border-t border-dashed border-red-200 flex items-center gap-2 text-red-600 text-xs md:text-sm font-bold">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Not personalized · ليس مخصصاً لحالتك</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// =====================================================================
// SCREEN 6 — Our value
// =====================================================================
const OurValueSection = () => (
  <section className="py-14 md:py-24 bg-gradient-to-b from-white to-brand-cream relative overflow-hidden">
    <div className="absolute inset-0 bg-pattern opacity-30" />

    <div className="relative max-w-7xl mx-auto px-4 md:px-8">
      <div className="text-center mb-10 md:mb-14">
        <div className="inline-flex items-center gap-2 bg-brand-green/10 border border-brand-green/30 text-brand-green px-4 py-1.5 rounded-full text-xs md:text-sm font-bold mb-4">
          <Crown className="w-4 h-4 text-brand-gold" />
          <span>قيمتنا الحقيقية</span>
        </div>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-brand-green mb-3">
          لماذا خطتنا مختلفة؟
        </h2>
      </div>

      {/* Core golden quote */}
      <div className="mb-12 md:mb-16">
        <div className="relative max-w-4xl mx-auto bg-gradient-to-bl from-brand-green via-brand-green-dark to-brand-green text-white rounded-3xl p-7 md:p-12 shadow-2xl border-2 border-brand-gold/40 overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-brand-gold/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-brand-gold/10 rounded-full blur-3xl" />
          <div className="relative">
            <div className="flex items-center gap-2 mb-5">
              <div className="flex-1 h-px bg-gradient-to-l from-transparent to-brand-gold" />
              <Crown className="w-6 h-6 md:w-7 md:h-7 text-brand-gold" />
              <div className="text-xs md:text-sm font-bold text-brand-gold tracking-widest uppercase">جوهر منتجنا</div>
              <Crown className="w-6 h-6 md:w-7 md:h-7 text-brand-gold" />
              <div className="flex-1 h-px bg-gradient-to-r from-transparent to-brand-gold" />
            </div>
            <blockquote className="text-base md:text-2xl lg:text-3xl font-bold leading-[1.9] md:leading-[2] text-center">
              منتجنا يختلف عن المنتجات العامة في السوق — نلتزم دائماً بالـ<span className="text-brand-gold">تخصيص الشخصي</span> لضمان النتائج، فالـ<span className="text-brand-gold">منتج يتكيف معك أنت</span> لا أنت من يتكيف معه، مع <span className="text-brand-gold">متابعة شخصية يومية</span> وضبط الجرارة حسب تقدمك.
            </blockquote>
            <div className="mt-6 text-center text-brand-gold-light text-sm md:text-base font-medium leading-relaxed">
              Personalized care, not generic products — your plan adapts to you, not the other way around.
            </div>
          </div>
        </div>
      </div>

      {/* Value cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
        {[
          {
            icon: ClipboardCheck,
            title: 'تقييم خاص قبل التوصية',
            en: 'Private Assessment',
            desc: 'نسأل أولاً: العمر، المدة، وجود قذف مبكر، ضعف الانتصاب، السكري أو مشاكل البروستات، عادة الاستمناء، الهدف الذي تريد الوصول إليه.',
          },
          {
            icon: CalendarCheck,
            title: 'برنامج 20–30 يوم',
            en: 'Cycle-based Plan',
            desc: 'ليس تحفيزاً مؤقتاً قبل كل علاقة — بل خطة منتظمة على شكل دورة لتحسين مستدام يستهدف الجذر لا العَرَض.',
          },
          {
            icon: Headphones,
            title: 'متابعة يومية شخصية',
            en: 'Daily 3-5 min Guidance',
            highlight: true,
            desc: '"هل يمكنك تخصيص 3–5 دقائق يومياً خلال البرنامج لمشاركتي تقدمك؟" — متابعة يومية شخصية مع مرشد خاص.',
          },
          {
            icon: Lock,
            title: 'خصوصية كاملة',
            en: 'Full Privacy',
            desc: 'احترام كامل لخصوصيتك. تواصل سري ومباشر، تغليف بدون أي إشارة لمحتوى الطرد، ودفع عند الاستلام.',
          },
          {
            icon: RotateCcw,
            title: 'ضمان 90 يوم',
            en: '90-Day Guarantee',
            desc: 'نتحمل المخاطرة معك. إن لم تجد فرقاً ملموساً خلال المدة، حقك محفوظ في استرداد قيمة منتجك.',
          },
          {
            icon: BadgeCheck,
            title: 'مكونات نباتية ومعتمدة',
            en: 'Certified Natural Formulation',
            desc: 'تركيبة طبيعية + اختبارات معملية + اعتمادات رسمية. لا مواد مخدرة سطحية ولا تأثيرات وهمية مؤقتة.',
          },
        ].map((v, idx) => {
          const Icon = v.icon
          return (
            <div
              key={idx}
              className={`relative bg-white rounded-3xl p-6 md:p-7 shadow-lg border-2 transition-all hover:-translate-y-1 ${
                v.highlight
                  ? 'border-brand-gold bg-gradient-to-b from-brand-green to-brand-green-dark text-white shadow-2xl glow-green'
                  : 'border-gray-100 hover:border-brand-gold/40 hover:shadow-xl'
              }`}
            >
              {v.highlight && (
                <div className="absolute -top-3 -right-3 bg-brand-gold text-brand-green-dark px-3 py-1 rounded-full text-xs font-black shadow-lg">
                  المميز
                </div>
              )}
              <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-4 ${
                v.highlight
                  ? 'bg-brand-gold text-brand-green-dark'
                  : 'bg-brand-green/10 text-brand-green'
              }`}>
                <Icon className="w-7 h-7 md:w-8 md:h-8" strokeWidth={1.8} />
              </div>
              <h3 className={`text-lg md:text-xl font-black mb-1 leading-snug ${v.highlight ? 'text-white' : 'text-brand-green'}`}>
                {v.title}
              </h3>
              <div className={`text-xs md:text-sm font-bold mb-3 ${v.highlight ? 'text-brand-gold-light' : 'text-gray-400'}`} dir="ltr">
                {v.en}
              </div>
              <p className={`text-sm md:text-[15px] leading-relaxed ${v.highlight ? 'text-white/90' : 'text-gray-600'}`}>
                {v.desc}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  </section>
)

// =====================================================================
// SCREEN 7 — Before/After Choice visual comparison
// =====================================================================
const BeforeAfterSection = () => (
  <section className="py-14 md:py-24 bg-white relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="text-center mb-10 md:mb-14">
        <div className="inline-flex items-center gap-2 bg-brand-gold/15 border border-brand-gold/40 text-brand-green px-4 py-1.5 rounded-full text-xs md:text-sm font-bold mb-4">
          <Repeat className="w-4 h-4 text-brand-gold" />
          <span>الخيار أمامك</span>
        </div>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-brand-green mb-3">
          الخيارات الشائعة <span className="text-gray-400">vs</span> خطتنا المخصصة
        </h2>
        <p className="text-gray-600 text-sm md:text-lg max-w-2xl mx-auto">
          مقارنة بصرية بين ما يفعله معظم الرجال وبين الطريقة المخصصة.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5 md:gap-8 items-stretch">
        {/* Common options with brand names */}
        <div className="relative bg-gradient-to-b from-gray-50 to-white rounded-3xl p-6 md:p-8 border-2 border-gray-200">
          <div className="absolute -top-3 right-6 bg-gray-400 text-white px-4 py-1.5 rounded-full text-xs font-black shadow-md">
            الخيارات الشائعة
          </div>
          <div className="flex items-center gap-3 mb-6 pb-5 border-b border-gray-200">
            <div className="w-14 h-14 bg-gray-200 rounded-2xl flex items-center justify-center text-gray-500">
              <Frown className="w-7 h-7" strokeWidth={1.5} />
            </div>
            <div>
              <div className="text-base md:text-lg font-bold text-gray-500" dir="ltr">Common Options</div>
              <div className="text-xs text-gray-400">حلول عامة غير مخصصة</div>
            </div>
          </div>
          <ul className="space-y-3">
            {[
              'Viagra / Cialis / Snafi — حبوب مؤقتة',
              'Priligy / Lejam — حبوب عند الحاجة فقط',
              'Procomil / Dynamo / Stud 100 — بخاخ تخدير',
              'Himcolin / Eroxon / Lidocaine — جل سطحي',
              'بدون متابعة شخصية',
              'بدون تخصيص لحالتك',
              'تجربة محرجة أحياناً',
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 p-3.5 bg-white border border-gray-200 rounded-xl">
                <XCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                <span className="text-sm md:text-base text-gray-700 font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Our plan */}
        <div className="relative bg-gradient-to-b from-brand-green to-brand-green-dark text-white rounded-3xl p-6 md:p-8 border-2 border-brand-gold shadow-2xl glow-green">
          <div className="absolute -top-3 right-6 bg-brand-gold text-brand-green-dark px-4 py-1.5 rounded-full text-xs font-black shadow-lg">
            <span className="flex items-center gap-1.5"><Crown className="w-3.5 h-3.5" /> خطتنا المخصصة</span>
          </div>
          <div className="flex items-center gap-3 mb-6 pb-5 border-b border-brand-gold/30">
            <div className="w-14 h-14 bg-brand-gold rounded-2xl flex items-center justify-center text-brand-green-dark">
              <Crown className="w-7 h-7" strokeWidth={2} />
            </div>
            <div>
              <div className="text-base md:text-lg font-bold text-brand-gold-light" dir="ltr">Our Personalized Plan</div>
              <div className="text-xs text-white/70">حل مخصص لحالتك أنت</div>
            </div>
          </div>
          <ul className="space-y-3">
            {[
              { text: 'تقييم خاص قبل التوصية', icon: ClipboardCheck },
              { text: 'منتج مخصص حسب وضعك', icon: Crown },
              { text: 'متابعة يومية شخصية', icon: MessageCircle },
              { text: 'خطة 20–30 يوم', icon: CalendarCheck },
              { text: 'خصوصية كاملة', icon: Lock },
              { text: 'ضمان 90 يوم', icon: ShieldCheck },
            ].map((item, i) => {
              const ItemIcon = item.icon
              return (
                <li key={i} className="flex items-center gap-3 p-3.5 bg-white/10 backdrop-blur border border-brand-gold/30 rounded-xl">
                  <div className="w-8 h-8 bg-brand-gold rounded-lg flex items-center justify-center flex-shrink-0">
                    <ItemIcon className="w-4 h-4 text-brand-green-dark" />
                  </div>
                  <span className="text-sm md:text-base text-white font-bold flex-1">{item.text}</span>
                  <CheckCircle2 className="w-5 h-5 text-brand-gold flex-shrink-0" />
                </li>
              )
            })}
          </ul>

          <div className="mt-6 pt-5 border-t border-brand-gold/30">
            <a
              href="#"
                            className="block w-full bg-brand-gold hover:bg-brand-gold-light text-brand-green-dark text-center px-5 py-3.5 rounded-2xl font-black text-sm md:text-base shadow-lg transition-all hover:scale-[1.02]"
            >
              ابدأ تقييمك الخاص الآن
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
)

// =====================================================================
// SCREEN 8 — FAQ / Objection handling
// =====================================================================
const FAQItem = ({ q, a, idx, open, onClick }) => (
  <div
    className={`bg-white rounded-2xl border-2 transition-all overflow-hidden ${
      open ? 'border-brand-gold shadow-lg' : 'border-gray-200 hover:border-gray-300'
    }`}
  >
    <button
      type="button"
      onClick={onClick}
      className="w-full text-right p-5 md:p-6 flex items-center justify-between gap-3"
    >
      <div className="flex items-start gap-3 flex-1 min-w-0">
        <div className={`flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center font-black ${
          open ? 'bg-brand-gold text-brand-green-dark' : 'bg-brand-green/10 text-brand-green'
        }`}>
          {idx + 1}
        </div>
        <span className={`font-bold text-sm md:text-lg leading-snug ${open ? 'text-brand-green' : 'text-brand-gray'}`}>
          {q}
        </span>
      </div>
      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform ${
        open ? 'bg-brand-green text-white rotate-180' : 'bg-gray-100 text-gray-500'
      }`}>
        <ChevronDown className="w-4 h-4" />
      </div>
    </button>
    <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-[600px]' : 'max-h-0'}`}>
      <div className="px-5 md:px-6 pb-5 md:pb-6 pt-1 text-gray-700 text-sm md:text-[15px] leading-relaxed border-t border-gray-100">
        {a}
      </div>
    </div>
  </div>
)

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      q: 'استخدمت Viagra / Cialis / Snafi من قبل ولم أحصل على نتيجة كافية. لماذا منتجكم سيختلف؟',
      a: (
        <p>
          الأمر ليس أن الأدوية بلا فائدة، بل أنك جرّبت <strong className="text-brand-green">منتجات غير مخصصة لحالتك</strong>.
          {' '}
          <strong className="text-brand-green">Viagra و Cialis و Snafi منتجات عامة</strong> — جرعة واحدة لكل الناس،
          بدون فهم حالتك الخاصة.
          {' '}
          نحن لا نبيعك حبة عامة، بل نبني خطة بعد فهم حالتك الكاملة، ونتابعها يومياً معك حتى تصل إلى هدفك.
        </p>
      ),
    },
    {
      q: 'استخدمت Procomil / Dynamo / Stud 100 لكنه جعل الإحساس ضعيفاً جداً.',
      a: (
        <p>
          هذا متوقع — <strong className="text-red-600">Procomil و Dynamo و Stud 100</strong> تعمل عن طريق
          <strong className="text-red-600"> التخدير الموضعي</strong>،
          أي أنها لا تحسّن أداءك بل تخفض حساسيتك. هدفنا مختلف:
          {' '}
          <strong className="text-brand-green">تحسين الحالة العامة</strong> بحيث تستطيع أن تستمر طبيعياً
          مع الحفاظ على المتعة والإحساس الكامل لك ولشريكتك.
        </p>
      ),
    },
    {
      q: 'جرّبت Himcolin / Eroxon / Lidocaine Cream ولم تعطني نتيجة ملموسة. ما الفرق؟',
      a: (
        <p>
          <strong className="text-orange-600">Himcolin و Eroxon والكريمات الموضعية</strong> تعمل على
          <strong className="text-orange-600"> السطح فقط</strong>، وتأثيرها محصور بمكان الدهن.
          مشكلة الأداء عادة <strong className="text-brand-green">مركبة</strong>: صلابة + وقت + إحساس + ثقة.
          خطتنا تتعامل مع هذه المحاور معاً، وليس مع سطح الجلد فحسب.
        </p>
      ),
    },
    {
      q: 'أخاف أن أُخدع مرة أخرى. كيف أضمن جدية منتجكم؟',
      a: (
        <div className="space-y-2">
          <p>نتفهم تماماً — لهذا قدّمنا أكثر من ضمان واحد:</p>
          <ul className="space-y-1.5 mt-2 list-none">
            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" /> الدفع عند الاستلام — لا تدفع شيئاً مقدماً</li>
            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" /> ضمان 90 يوماً لاسترداد قيمة منتجك</li>
            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" /> متابعة يومية شخصية مباشرة</li>
            <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" /> تركيبة طبيعية واعتمادات رسمية</li>
          </ul>
        </div>
      ),
    },
    {
      q: 'هل لدى منتجكم آثار جانبية مثل الحبوب؟',
      a: (
        <p>
          منتجنا يعتمد على <strong className="text-brand-green">تركيبة نباتية + متابعة شخصية</strong>،
          وليس على مخدّر موضعي ولا على آلية الحبوب الكيميائية. لذلك لا يحمل آثار الحبوب المعروفة كالصداع
          أو الاحمرار أو هبوط الضغط، ولا يسبب الخدر مثل البخاخات. ومع ذلك، نأخذ حالتك الصحية بعين الاعتبار
          خلال التقييم الخاص قبل التوصية.
        </p>
      ),
    },
    {
      q: 'أشعر بالإحراج من شراء هذا النوع من المنتجات.',
      a: (
        <p>
          نحترم خصوصيتك تماماً. تواصلك معنا عبر <strong className="text-brand-green">بشكل حصري</strong>،
          والمنتج يصلك في <strong className="text-brand-green">تغليف خاص بدون أي إشارة</strong> لمحتواه،
          والدفع <strong className="text-brand-green">عند الاستلام</strong> دون أي معاملات بنكية مكشوفة.
          لن يعرف أحد سواك.
        </p>
      ),
    },
  ]

  return (
    <section className="py-14 md:py-24 bg-gradient-to-b from-brand-cream to-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 bg-brand-green/10 border border-brand-green/30 text-brand-green px-4 py-1.5 rounded-full text-xs md:text-sm font-bold mb-4">
            <UserCheck className="w-4 h-4" />
            <span>إجابات صريحة</span>
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-brand-green mb-3 leading-tight">
            إذا جرّبت منتجات من قبل
            <span className="block">ولم تحصل على نتيجة…</span>
          </h2>
          <p className="text-gray-700 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed">
            <strong className="text-brand-green">ليست المشكلة في الأدوية، بل أنك جرّبت منتجات غير مخصصة لحالتك.</strong>
            <br className="hidden md:block" />
            <span className="text-gray-500 text-xs md:text-sm block mt-2">
              المنتجات العامة لا تستطيع أن تأخذك إلى نتيجة فعلية مباشرة.
            </span>
          </p>
        </div>

        <div className="space-y-3 md:space-y-4">
          {faqs.map((f, i) => (
            <FAQItem
              key={i}
              idx={i}
              q={f.q}
              a={f.a}
              open={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

const Footer = () => (
  <footer className="bg-brand-green-dark text-white/70 py-8 pb-8 border-t-2 border-brand-gold/30">
    <div className="max-w-5xl mx-auto px-4 md:px-8 text-center">
      <div className="flex items-center justify-center gap-2 mb-3">
        <Crown className="w-5 h-5 text-brand-gold" />
        <span className="text-brand-gold font-bold text-base">خطة مخصصة لدعم الأداء الرجولي</span>
        <Crown className="w-5 h-5 text-brand-gold" />
      </div>
      <p className="text-xs md:text-sm max-w-2xl mx-auto leading-relaxed mb-4">
        ليست مجرد حبة مؤقتة أو بخاخ للتخدير — بل خطة مخصصة بعد تقييم خاص، ومتابعة يومية، وخصوصية كاملة، وضمان 90 يوم.
      </p>
      <div className="flex items-center justify-center gap-4 flex-wrap text-xs text-white/50">
        <span>© {new Date().getFullYear()}</span>
        <span className="w-1 h-1 bg-white/30 rounded-full" />
        <span>سرية تامة</span>
        <span className="w-1 h-1 bg-white/30 rounded-full" />
        <span>للرجال البالغين فقط</span>
      </div>
    </div>
  </footer>
)

// =====================================================================
// MAIN APP
// =====================================================================
export default function App() {
  return (
    <div className="min-h-screen bg-brand-cream overflow-x-hidden" dir="rtl">
      <TopBar />
      <HeroSection />
      <BrandComparisonSection />
      <ComparisonTableSection />
      <SideEffectsSection />
      <CommonProductsSection />
      <OurValueSection />
      <BeforeAfterSection />
      <FAQSection />
      <Footer />
    </div>
  )
}
