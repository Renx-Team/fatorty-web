"use client";

import { useState, useRef, useEffect } from "react";
import toast from "react-hot-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { 
  DocumentText,
  ShieldTick,
  Card,
  Bank,
  Mobile,
  Lock,
  TickCircle,
  ArrowRight,
  Setting,
  Chart,
  Wallet,
  MoneyRecive,
  SecuritySafe,
  Speedometer,
  Global,
  User,
  Star,
  Message
} from "iconsax-react";

export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id || entry.target.getAttribute('data-section');
            if (id) {
              setIsVisible((prev) => ({
                ...prev,
                [id]: true,
              }));
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => {
      if (!el.id && el.getAttribute('data-section')) {
        el.id = el.getAttribute('data-section') || '';
      }
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Loading Screen */}
      <div className={`fixed inset-0 z-[100] bg-white flex items-center justify-center transition-opacity duration-500 ${isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col items-center gap-4">
          <div className="relative w-20 h-20">
            <div className="absolute inset-0 border-4 border-orange-100 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-[#ff8a65] rounded-full border-t-transparent loader"></div>
          </div>
          <div className="flex items-center gap-2">
            <DocumentText size={32} color="#ff8a65" variant="Bulk" className="animate-pulse-slow" />
            <h2 className="text-2xl font-bold" style={{ color: '#ff8a65' }}>فاتورتي</h2>
          </div>
        </div>
      </div>

      <div className={`min-h-screen bg-white ${!isLoading ? 'page-fade-in' : 'opacity-0'}`}>
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center border-2 border-gray-100 animate-scale-in">
                <DocumentText size={28} color="#ff8a65" variant="Bulk" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900 animate-fade-in animate-delay-100">فاتورتي</h1>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-700 hover:text-[#ff8a65] transition-colors font-medium">المميزات</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-[#ff8a65] transition-colors font-medium">كيف يعمل</a>
              <a href="#testimonials" className="text-gray-700 hover:text-[#ff8a65] transition-colors font-medium">آراء العملاء</a>
              <Link
                href="/dashboard"
                style={{ backgroundColor: '#ff8a65' }}
                className="text-white px-6 py-2.5 rounded-lg font-semibold hover:opacity-90 transition-opacity inline-block"
              >
                ابدأ الآن
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 rounded-full mb-6 animate-scale-in animate-delay-100">
              <ShieldTick size={20} color="#ff8a65" variant="Bulk" className="animate-pulse-slow" />
              <span className="text-sm font-medium" style={{ color: '#ff8a65' }}>دفع آمن ومضمون</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in-up animate-delay-200">
              بوابة دفع إلكتروني
              <br />
              <span style={{ color: '#ff8a65' }}>آمنة وسريعة</span>
          </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed animate-fade-in-up animate-delay-300">
              حلول دفع متكاملة وسهلة الاستخدام. استقبل المدفوعات بسهولة وأمان مع فاتورتي
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animate-delay-400">
              <button 
                onClick={() => {
                  toast.success('تم إنشاء حسابك بنجاح!', {
                    icon: <TickCircle size={24} color="#10b981" variant="Bulk" />,
                    style: {
                      border: '2px solid #10b981',
                      background: '#fff5f2',
                      color: '#1a1a1a',
                    },
                  });
                }}
                style={{ backgroundColor: '#ff8a65' }}
                className="text-white px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
              >
                ابدأ مجاناً
                <ArrowRight size={24} color="#ffffff" variant="Bulk" className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => {
                  toast('جاري تحميل العرض التوضيحي...', {
                    icon: <Speedometer size={24} color="#ff8a65" variant="Bulk" />,
                    style: {
                      border: '2px solid #ff8a65',
                      background: '#fff5f2',
                      color: '#1a1a1a',
                    },
                  });
                }}
                className="px-8 py-4 rounded-lg font-semibold text-lg border-2 border-gray-200 text-gray-700 hover:border-[#ff8a65] hover:text-[#ff8a65] transition-all hover:scale-105"
              >
                شاهد العرض التوضيحي
              </button>
            </div>
            <div className="mt-8 flex items-center gap-6 animate-fade-in-up animate-delay-500">
              <div className="hover:scale-110 transition-transform">
                <p className="text-3xl font-bold text-gray-900">10K+</p>
                <p className="text-sm text-gray-600">عميل راضٍ</p>
              </div>
              <div className="hover:scale-110 transition-transform">
                <p className="text-3xl font-bold text-gray-900">50M+</p>
                <p className="text-sm text-gray-600">معاملة آمنة</p>
              </div>
              <div className="hover:scale-110 transition-transform">
                <p className="text-3xl font-bold text-gray-900">99.9%</p>
                <p className="text-sm text-gray-600">وقت تشغيل</p>
              </div>
            </div>
          </div>
          <div className="relative animate-slide-in-left animate-delay-300">
            <div className="bg-gradient-to-br from-orange-50 to-white rounded-3xl p-8 border border-gray-100 shadow-2xl animate-float">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <DocumentText size={32} color="#ff8a65" variant="Bulk" />
                    <div>
                      <p className="font-semibold text-gray-900">فاتورة #2024-001</p>
                      <p className="text-sm text-gray-500">15 يناير 2024</p>
                    </div>
                  </div>
                  <ShieldTick size={24} color="#10b981" variant="Bulk" />
                </div>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">خدمة التطوير</span>
                    <span className="font-semibold text-gray-900">5,000 ر.س</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">خدمة التصميم</span>
                    <span className="font-semibold text-gray-900">2,000 ر.س</span>
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-200 flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900">المجموع</span>
                  <span className="text-2xl font-bold" style={{ color: '#ff8a65' }}>7,000 ر.س</span>
                </div>
                <button 
                  onClick={() => {
                    toast.success('تم إتمام عملية الدفع بنجاح! 💳', {
                      style: {
                        border: '2px solid #10b981',
                        background: '#fff',
                        color: '#1a1a1a',
                      },
                      iconTheme: {
                        primary: '#10b981',
                        secondary: '#fff',
                      },
                      duration: 4000,
                    });
                  }}
                  style={{ backgroundColor: '#ff8a65' }}
                  className="w-full mt-6 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  <Card size={20} color="#ffffff" variant="Bulk" />
                  إتمام الدفع
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gray-50 py-20" data-animate data-section="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${isVisible.features ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">مميزات فاتورتي</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              حلول دفع متقدمة مصممة لتناسب احتياجاتك
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: SecuritySafe,
                title: "أمان عالي",
                description: "تشفير متقدم لحماية جميع المعاملات المالية"
              },
              {
                icon: Speedometer,
                title: "سرعة فائقة",
                description: "معالجة فورية للمدفوعات في ثوانٍ معدودة"
              },
              {
                icon: Global,
                title: "دعم عالمي",
                description: "قبول المدفوعات من جميع أنحاء العالم"
              },
              {
                icon: Setting,
                title: "سهولة التكامل",
                description: "تكامل سهل مع أي موقع أو تطبيق"
              },
              {
                icon: Chart,
                title: "تقارير مفصلة",
                description: "تقارير شاملة عن جميع المعاملات"
              },
              {
                icon: Wallet,
                title: "محفظة رقمية",
                description: "إدارة أموالك بسهولة وأمان"
              }
            ].map((feature, index) => {
              const IconComponent = feature.icon;
              const cardRef = useRef<HTMLDivElement>(null);
              const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
              const [smoothPosition, setSmoothPosition] = useState({ x: 50, y: 50 });
              const [isHovered, setIsHovered] = useState(false);
              const cardId = `feature-${index}`;

              useEffect(() => {
                let animationId: number;
                
                const animate = () => {
                  setSmoothPosition(prev => {
                    const targetX = isHovered ? mousePosition.x : 50;
                    const targetY = isHovered ? mousePosition.y : 50;
                    
                    const dx = targetX - prev.x;
                    const dy = targetY - prev.y;
                    const speed = isHovered ? 0.12 : 0.08; 
                    
                    if (Math.abs(dx) < 0.1 && Math.abs(dy) < 0.1) {
                      return { x: targetX, y: targetY };
                    }
                    
                    return {
                      x: prev.x + dx * speed,
                      y: prev.y + dy * speed
                    };
                  });
                  
                  animationId = requestAnimationFrame(animate);
                };
                
                animationId = requestAnimationFrame(animate);
                return () => {
                  if (animationId) cancelAnimationFrame(animationId);
                };
              }, [mousePosition, isHovered]);

              const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
                if (!cardRef.current) return;
                const rect = cardRef.current.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                const y = ((e.clientY - rect.top) / rect.height) * 100;
                setMousePosition({ x, y });
              };

              const handleMouseEnter = () => {
                setIsHovered(true);
              };

              const handleMouseLeave = () => {
                setIsHovered(false);
                setMousePosition({ x: 50, y: 50 });
                // لا نعيد smoothPosition فوراً، بل نتركه يتحرك ببطء إلى المركز
              };

              return (
                <div
                  key={index}
                  id={cardId}
                  data-animate
                  ref={cardRef}
                  onMouseMove={handleMouseMove}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className={`group bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 cursor-pointer relative overflow-hidden hover:scale-105 ${
                    isVisible[cardId] ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Glow effect that follows mouse */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle 250px at ${smoothPosition.x}% ${smoothPosition.y}%, rgba(255, 138, 101, 0.4), rgba(255, 138, 101, 0.2) 50%, transparent 75%)`,
                      opacity: isHovered ? 1 : 0,
                      transition: 'opacity 0.4s ease-out, background 0.6s ease-out'
                    }}
                  />
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle 150px at ${smoothPosition.x}% ${smoothPosition.y}%, rgba(255, 138, 101, 0.5), transparent 60%)`,
                      opacity: isHovered ? 1 : 0,
                      transition: 'opacity 0.4s ease-out, background 0.6s ease-out'
                    }}
                  />
                  
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 relative z-10" style={{ backgroundColor: '#fff5f2' }}>
                    <IconComponent size={32} color="#ff8a65" variant="Bulk" className="relative z-10" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed relative z-10">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Payment Methods Section */}
      <section className="py-20" data-animate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${isVisible.payment ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">طرق الدفع المتاحة</h2>
            <p className="text-xl text-gray-600">نوفر لك جميع طرق الدفع الشائعة</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "فيزا", icon: Card },
              { name: "ماستركارد", icon: Card },
              { name: "مدى", icon: Bank },
              { name: "أبل باي", icon: Mobile },
            ].map((method, index) => {
              const IconComponent = method.icon;
              const methodId = `payment-${index}`;
              return (
                <div 
                  key={index} 
                  id={methodId}
                  data-animate
                  className={`bg-white border-2 border-gray-100 rounded-xl p-8 hover:border-[#ff8a65] hover:bg-orange-50 transition-all text-center hover:scale-110 ${
                    isVisible[methodId] ? 'animate-scale-in' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <IconComponent size={48} color="#ff8a65" variant="Bulk" className="mx-auto mb-4" />
                  <p className="font-semibold text-gray-900">{method.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="bg-gray-50 py-20" data-animate data-section="howItWorks">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${isVisible.howItWorks ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">كيف يعمل فاتورتي</h2>
            <p className="text-xl text-gray-600">ثلاث خطوات بسيطة لبدء استقبال المدفوعات</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                icon: DocumentText,
                title: "أنشئ فاتورة",
                description: "قم بإنشاء فاتورة بسهولة وأضف البنود والأسعار"
              },
              {
                step: "02",
                icon: MoneyRecive,
                title: "شارك الفاتورة",
                description: "أرسل رابط الفاتورة للعميل عبر البريد أو الرسائل"
              },
              {
                step: "03",
                icon: TickCircle,
                title: "استلم الدفع",
                description: "احصل على إشعار فوري عند إتمام عملية الدفع"
              }
            ].map((item, index) => {
              const IconComponent = item.icon;
              const stepId = `step-${index}`;
              return (
                <div key={index} id={stepId} data-animate className={`relative ${isVisible[stepId] ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: `${index * 0.15}s` }}>
                  <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:scale-105 transition-transform">
                    <div className="text-6xl font-bold text-gray-100 mb-4">{item.step}</div>
                    <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: '#fff5f2' }}>
                      <IconComponent size={32} color="#ff8a65" variant="Bulk" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                  {index < 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 animate-pulse-slow">
                      <ArrowRight size={32} color="#ff8a65" variant="Bulk" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">ماذا يقول عملاؤنا</h2>
            <p className="text-xl text-gray-600">آراء حقيقية من عملاء راضين</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "أحمد محمد",
                role: "مدير شركة",
                rating: 5,
                comment: "فاتورتي سهل الاستخدام جداً ووفر علي الكثير من الوقت. أنصح به بشدة!"
              },
              {
                name: "فاطمة علي",
                role: "رائدة أعمال",
                rating: 5,
                comment: "خدمة ممتازة وآمنة. المعاملات تتم بسرعة فائقة والواجهة جميلة جداً."
              },
              {
                name: "خالد سعيد",
                role: "مطور ويب",
                rating: 5,
                comment: "أفضل بوابة دفع استخدمتها. التكامل سهل والوثائق واضحة."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} color="#ff8a65" variant="Bulk" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.comment}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#ff8a65] to-orange-400 flex items-center justify-center">
                    <User size={24} color="#ffffff" variant="Bulk" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#ff8a65] to-orange-500 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">جاهز للبدء؟</h2>
          <p className="text-xl text-white/90 mb-8">
            انضم إلى آلاف العملاء الذين يثقون بفاتورتي لمعاملاتهم المالية
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="أدخل بريدك الإلكتروني"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white max-w-md"
            />
            <button 
              onClick={() => {
                if (!email) {
                  toast.error('يرجى إدخال بريدك الإلكتروني', {
                    icon: <Lock size={24} color="#ef4444" variant="Bulk" />,
                    style: {
                      border: '2px solid #ef4444',
                      background: '#fff5f2',
                      color: '#1a1a1a',
                    },
                  });
                } else {
                  toast.success(`تم إرسال رابط التسجيل إلى ${email}!`, {
                    icon: <Message size={24} color="#10b981" variant="Bulk" />,
                    style: {
                      border: '2px solid #10b981',
                      background: '#fff5f2',
                      color: '#1a1a1a',
                    },
                    duration: 4000,
                  });
                  setEmail('');
                }
              }}
              className="bg-white text-[#ff8a65] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
            >
              ابدأ مجاناً
              <ArrowRight size={24} color="#ff8a65" variant="Bulk" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <DocumentText size={32} color="#ff8a65" variant="Bulk" />
                <h3 className="text-xl font-bold">فاتورتي</h3>
              </div>
              <p className="text-gray-400">
                بوابة دفع إلكتروني آمنة وسريعة لجميع احتياجاتك
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">الشركة</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">من نحن</a></li>
                <li><a href="#" className="hover:text-white transition-colors">الخدمات</a></li>
                <li><a href="#" className="hover:text-white transition-colors">الأسعار</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">الدعم</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">مركز المساعدة</a></li>
                <li><a href="#" className="hover:text-white transition-colors">التواصل معنا</a></li>
                <li><a href="#" className="hover:text-white transition-colors">الأسئلة الشائعة</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">القانونية</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">الشروط والأحكام</a></li>
                <li><a href="#" className="hover:text-white transition-colors">سياسة الخصوصية</a></li>
                <li><a href="#" className="hover:text-white transition-colors">سياسة الاستخدام</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 space-y-2">
            <p>© 2025 فاتورتي. جميع الحقوق محفوظة.</p>
            <p className="text-sm">
              تم التصميم من خلال <span className="font-semibold text-white">موسى</span> عضو شركة <span className="font-semibold text-white">رينكس</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}
