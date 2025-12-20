"use client";

import { useState, useEffect } from "react";
import { 
  DocumentText,
  Home,
  Chart,
  Wallet,
  User,
  Setting,
  Notification,
  SearchNormal,
  ArrowDown,
  ArrowUp,
  ArrowRight,
  MoneyRecive,
  MoneySend,
  Card,
  TrendUp,
  TrendDown,
  Calendar,
  Filter,
  More,
  Menu,
  CloseSquare,
  Logout,
  Profile,
  TickCircle,
  Lock
} from "iconsax-react";
import Link from "next/link";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [chartAnimated, setChartAnimated] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const [barHeights, setBarHeights] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  
  const originalHeights = [95, 45, 70, 88, 60, 100, 35, 82, 55, 75, 90, 65];

  useEffect(() => {
    const timer1 = setTimeout(() => setStatsVisible(true), 100);
    
    const timer2 = setTimeout(() => setChartAnimated(true), 500);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (userMenuOpen && !target.closest('.user-menu-container')) {
        setUserMenuOpen(false);
      }
    };

    if (userMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [userMenuOpen]);

  useEffect(() => {
    if (!chartAnimated) return;
    
    // Animate bars growing up
    let intervalId: NodeJS.Timeout | null = null;
    
    const animateBars = () => {
      intervalId = setInterval(() => {
        setBarHeights(prev => {
          let allComplete = true;
          const newHeights = prev.map((current, index) => {
            const target = originalHeights[index];
            if (current < target) {
              allComplete = false;
              return Math.min(current + 4, target);
            }
            return current;
          });
          
          if (allComplete && intervalId) {
            clearInterval(intervalId);
            intervalId = null;
          }
          
          return newHeights;
        });
      }, 20);
    };

    const startTimer = setTimeout(() => {
      animateBars();
    }, 100);

    return () => {
      if (startTimer) clearTimeout(startTimer);
      if (intervalId) clearInterval(intervalId);
    };
  }, [chartAnimated]);

  const stats = [
    {
      title: "إجمالي الإيرادات",
      value: "125,430",
      currency: "ر.س",
      change: "+12.5%",
      trend: "up",
      icon: MoneyRecive,
      color: "#10b981",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      title: "إجمالي المدفوعات",
      value: "45,230",
      currency: "ر.س",
      change: "+8.2%",
      trend: "up",
      icon: MoneySend,
      color: "#ef4444",
      gradient: "from-red-500 to-rose-600"
    },
    {
      title: "عدد الفواتير",
      value: "1,234",
      change: "+15.3%",
      trend: "up",
      icon: DocumentText,
      color: "#ff8a65",
      gradient: "from-orange-500 to-amber-600"
    },
    {
      title: "العملاء النشطون",
      value: "892",
      change: "+5.7%",
      trend: "up",
      icon: User,
      color: "#3b82f6",
      gradient: "from-blue-500 to-indigo-600"
    }
  ];

  const recentInvoices = [
    { id: "#INV-001", client: "ريو", amount: "2,000", status: "مدفوعة", date: "17 يناير", icon: Card },
    { id: "#INV-001", client: "أحمد محمد", amount: "5,000", status: "مدفوعة", date: "15 يناير", icon: Card },
    { id: "#INV-002", client: "فاطمة علي", amount: "3,500", status: "معلقة", date: "14 يناير", icon: DocumentText },
    { id: "#INV-003", client: "خالد سعيد", amount: "8,200", status: "مدفوعة", date: "13 يناير", icon: Card },
    { id: "#INV-004", client: "سارة أحمد", amount: "2,100", status: "ملغاة", date: "12 يناير", icon: DocumentText },
    { id: "#INV-005", client: "محمد حسن", amount: "6,800", status: "مدفوعة", date: "11 يناير", icon: Card },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 flex">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'w-72' : 'w-24'} bg-white border-l border-gray-200 shadow-lg transition-all duration-300 fixed h-screen z-40 flex flex-col`}>
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            {sidebarOpen && (
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#ff8a65] to-orange-500 rounded-xl flex items-center justify-center shadow-md">
                  <DocumentText size={28} color="#ffffff" variant="Bulk" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">فاتورتي</h1>
                  <p className="text-xs text-gray-500">لوحة التحكم</p>
                </div>
              </div>
            )}
            {!sidebarOpen && (
              <div className="w-12 h-12 bg-gradient-to-br from-[#ff8a65] to-orange-500 rounded-xl flex items-center justify-center shadow-md mx-auto">
                <DocumentText size={28} color="#ffffff" variant="Bulk" />
              </div>
            )}
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {sidebarOpen ? (
                <CloseSquare size={22} color="#6b7280" variant="Bulk" />
              ) : (
                <Menu size={22} color="#6b7280" variant="Bulk" />
              )}
            </button>
          </div>
        </div>
        
        <nav className="p-4 space-y-2 flex-1 overflow-y-auto">
          {[
            { icon: Home, label: "لوحة التحكم", active: true },
            { icon: DocumentText, label: "الفواتير", badge: "12" },
            { icon: Wallet, label: "المحفظة" },
            { icon: Chart, label: "التقارير" },
            { icon: User, label: "العملاء" },
            { icon: Setting, label: "الإعدادات" },
          ].map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Link
                key={index}
                href="#"
                className={`group flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  item.active
                    ? 'bg-gradient-to-r from-[#fff5f2] to-orange-50 text-[#ff8a65] shadow-sm'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <div className={`p-2 rounded-lg ${item.active ? 'bg-white shadow-sm' : ''}`}>
                  <IconComponent size={20} color={item.active ? "#ff8a65" : "#6b7280"} variant="Bulk" />
                </div>
                {sidebarOpen && (
                  <>
                    <span className="font-medium flex-1">{item.label}</span>
                    {item.badge && (
                      <span className="px-2 py-0.5 bg-[#ff8a65] text-white text-xs font-semibold rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </>
                )}
              </Link>
            );
          })}
        </nav>

        {/* User Profile Section */}
        <div className="p-4 border-t border-gray-200">
          <div className={`flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-[#fff5f2] to-orange-50 ${!sidebarOpen ? 'justify-center' : ''}`}>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#ff8a65] to-orange-400 flex items-center justify-center shadow-md">
              <User size={18} color="#ffffff" variant="Bulk" />
            </div>
            {sidebarOpen && (
              <div className="flex-1">
                <p className="font-semibold text-gray-900 text-sm">موسى</p>
                <p className="text-xs text-gray-500">عضو شركة رينكس</p>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'mr-72' : 'mr-24'}`}>
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-30 shadow-sm">
          <div className="px-8 py-5 flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">لوحة التحكم</h2>
              <p className="text-sm text-gray-600 mt-1 flex items-center gap-2">
                <span>مرحباً بك،</span>
                <span className="font-semibold text-[#ff8a65]">موسى</span>
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <SearchNormal size={20} color="#6b7280" variant="Bulk" className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10" />
                <input
                  type="text"
                  placeholder="بحث في الفواتير، العملاء..."
                  className="pl-4 pr-12 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ff8a65] focus:border-[#ff8a65] w-80 bg-gray-50 hover:bg-white transition-colors"
                />
              </div>
              <button className="p-2.5 hover:bg-gray-100 rounded-xl transition-colors relative">
                <Notification size={22} color="#6b7280" variant="Bulk" />
                <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
              </button>
              <div className="relative user-menu-container">
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="w-11 h-11 rounded-full bg-gradient-to-br from-[#ff8a65] to-orange-400 flex items-center justify-center shadow-md cursor-pointer hover:shadow-lg transition-shadow"
                >
                  <User size={20} color="#ffffff" variant="Bulk" />
                </button>
                
                {/* User Dropdown Menu */}
                {userMenuOpen && (
                  <div className="absolute left-0 top-14 w-64 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden z-50 animate-fade-in-up">
                    {/* User Info */}
                    <div className="p-4 border-b border-gray-200 bg-gradient-to-r from-[#fff5f2] to-orange-50">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#ff8a65] to-orange-400 flex items-center justify-center shadow-md">
                          <User size={24} color="#ffffff" variant="Bulk" />
                        </div>
                        <div>
                          <p className="font-bold text-gray-900">Mousa</p>
                          <p className="text-xs text-gray-500">عضو شركة رينكس</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Menu Items */}
                    <div className="py-2">
                      <button
                        onClick={() => {
                          setUserMenuOpen(false);
                          // Add settings action here
                        }}
                        className="w-full flex items-center gap-3 px-4 py-3 text-right hover:bg-gray-50 transition-colors text-gray-700"
                      >
                        <div className="w-10 h-10 rounded-lg bg-[#fff5f2] flex items-center justify-center">
                          <Setting size={20} color="#ff8a65" variant="Bulk" />
                        </div>
                        <span className="font-medium">الإعدادات</span>
                      </button>
                      <button
                        onClick={() => {
                          setUserMenuOpen(false);
                          // Add change password action here
                        }}
                        className="w-full flex items-center gap-3 px-4 py-3 text-right hover:bg-gray-50 transition-colors text-gray-700"
                      >
                        <div className="w-10 h-10 rounded-lg bg-[#fff5f2] flex items-center justify-center">
                          <Lock size={20} color="#ff8a65" variant="Bulk" />
                        </div>
                        <span className="font-medium">تغيير كلمة المرور</span>
                      </button>
                    </div>
                    
                    {/* Divider */}
                    <div className="border-t border-gray-200"></div>
                    
                    {/* Logout */}
                    <div className="p-2">
                      <button
                        onClick={() => {
                          setUserMenuOpen(false);
                          // Add logout action here
                        }}
                        className="w-full flex items-center gap-3 px-4 py-3 text-right hover:bg-red-50 transition-colors text-red-600 rounded-lg"
                      >
                        <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center">
                          <Logout size={20} color="#ef4444" variant="Bulk" />
                        </div>
                        <span className="font-medium">تسجيل الخروج</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="p-8 space-y-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className={`group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 relative overflow-hidden ${
                    statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Gradient Background */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${stat.gradient} opacity-5 rounded-full blur-2xl`}></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-14 h-14 rounded-xl flex items-center justify-center shadow-md" style={{ backgroundColor: '#fff5f2' }}>
                        <IconComponent size={28} color={stat.color} variant="Bulk" />
                      </div>
                      {stat.trend === "up" ? (
                        <div className="flex items-center gap-1 bg-green-50 px-2.5 py-1 rounded-lg">
                          <ArrowUp size={14} color="#10b981" variant="Bulk" />
                          <span className="text-green-700 text-xs font-semibold">{stat.change}</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-1 bg-red-50 px-2.5 py-1 rounded-lg">
                          <ArrowDown size={14} color="#ef4444" variant="Bulk" />
                          <span className="text-red-700 text-xs font-semibold">{stat.change}</span>
                        </div>
                      )}
                    </div>
                    <h3 className="text-gray-600 text-sm mb-2 font-medium">{stat.title}</h3>
                    <p className="text-3xl font-bold text-gray-900">
                      {stat.value} {stat.currency && <span className="text-lg text-gray-600 font-normal">{stat.currency}</span>}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Charts and Recent Invoices */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Revenue Chart */}
            <div className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-lg border border-gray-100 relative overflow-hidden">
              {/* Decorative gradient background */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#ff8a65]/5 to-transparent rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ff8a65] to-orange-500 flex items-center justify-center shadow-md">
                        <Chart size={24} color="#ffffff" variant="Bulk" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">الإيرادات الشهرية</h3>
                        <p className="text-sm text-gray-500 mt-1">نظرة عامة على الأداء المالي</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="px-4 py-2.5 text-sm border-2 border-gray-300 rounded-xl hover:bg-[#fff5f2] hover:border-[#ff8a65] transition-all flex items-center gap-2 font-semibold bg-white">
                      <Calendar size={18} color="#6b7280" variant="Bulk" />
                      هذا الشهر
                    </button>
                    <button className="p-2.5 border-2 border-gray-300 rounded-xl hover:bg-[#fff5f2] hover:border-[#ff8a65] transition-all bg-white">
                      <Filter size={18} color="#6b7280" variant="Bulk" />
                    </button>
                  </div>
                </div>
                <div className="h-80 flex items-end justify-between gap-3 pb-6 bg-gradient-to-b from-gray-50/50 to-transparent rounded-xl p-4 relative">
                  {/* Chart grid lines */}
                  <div className="absolute inset-0 flex flex-col justify-between opacity-20">
                    {[0, 25, 50, 75, 100].map((line, i) => (
                      <div key={i} className="border-t border-gray-300"></div>
                    ))}
                  </div>
                  
                  {originalHeights.map((targetHeight, index) => {
                    const currentHeight = barHeights[index];
                    const isVisible = currentHeight > 0;
                    // حساب القيمة الفعلية بالريال
                    const actualValue = Math.round((targetHeight / 100) * 50000); // افتراض أن 100% = 50,000 ر.س
                    
                    return (
                      <div key={index} className="flex-1 flex flex-col items-center gap-3 group relative z-10">
                        <div className="relative w-full flex flex-col items-center h-full">
                          <div
                            className="w-full rounded-t-xl hover:opacity-90 cursor-pointer group-hover:shadow-xl group-hover:scale-105 transition-all duration-300"
                            style={{
                              height: `${currentHeight}%`,
                              background: `linear-gradient(to top, #ff8a65, #ffab91, #ffccbc)`,
                              minHeight: isVisible ? '20px' : '0px',
                              boxShadow: isVisible ? '0 8px 16px rgba(255, 138, 101, 0.3)' : 'none',
                              transformOrigin: 'bottom',
                              opacity: isVisible ? 1 : 0,
                              transition: 'height 0.15s ease-out, opacity 0.4s ease-in-out, transform 0.3s ease, box-shadow 0.3s ease'
                            }}
                          ></div>
                          <div className="absolute -top-12 opacity-0 group-hover:opacity-100 transition-all bg-gray-900 text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap z-20 shadow-lg font-semibold pointer-events-none">
                            {actualValue.toLocaleString()} ر.س
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                          </div>
                        </div>
                        <span className="text-xs text-gray-600 font-semibold">{index + 1}</span>
                      </div>
                    );
                  })}
                </div>
                <div className="flex items-center justify-center gap-8 pt-6 border-t border-gray-200 mt-6">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#fff5f2]">
                    <div className="w-4 h-4 rounded-full bg-[#ff8a65] shadow-sm"></div>
                    <span className="text-sm font-semibold text-gray-700">الإيرادات</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-50">
                    <div className="w-4 h-4 rounded-full bg-gray-400"></div>
                    <span className="text-sm font-semibold text-gray-700">المتوسط</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">إجراءات سريعة</h3>
                <div className="w-10 h-10 rounded-xl bg-[#fff5f2] flex items-center justify-center">
                  <Setting size={20} color="#ff8a65" variant="Bulk" />
                </div>
              </div>
              <div className="space-y-3">
                {[
                  { icon: DocumentText, label: "إنشاء فاتورة جديدة", color: "#ff8a65", desc: "إضافة فاتورة جديدة" },
                  { icon: MoneyRecive, label: "استقبال دفعة", color: "#10b981", desc: "تسجيل دفعة جديدة" },
                  { icon: User, label: "إضافة عميل جديد", color: "#3b82f6", desc: "إضافة عميل إلى القائمة" },
                  { icon: Chart, label: "عرض التقارير", color: "#8b5cf6", desc: "تحليل الأداء" },
                ].map((action, index) => {
                  const IconComponent = action.icon;
                  return (
                    <button
                      key={index}
                      className={`w-full flex items-center gap-3 p-4 rounded-xl border-2 border-gray-200 hover:border-[#ff8a65] hover:bg-[#fff5f2] transition-all group text-right ${
                        statsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                      }`}
                      style={{ transitionDelay: `${(index + 4) * 100}ms` }}
                    >
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow" style={{ backgroundColor: '#fff5f2' }}>
                        <IconComponent size={22} color={action.color} variant="Bulk" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900">{action.label}</p>
                        <p className="text-xs text-gray-500">{action.desc}</p>
                      </div>
                      <ArrowRight size={18} color="#6b7280" variant="Bulk" className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Recent Invoices Table */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-900">الفواتير الأخيرة</h3>
                <p className="text-sm text-gray-500 mt-1">آخر 5 فواتير تم إنشاؤها</p>
              </div>
              <Link href="#" className="text-[#ff8a65] hover:opacity-80 transition-opacity font-semibold text-sm flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-[#fff5f2]">
                عرض الكل
                <ArrowRight size={18} color="#ff8a65" variant="Bulk" />
              </Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-right text-xs font-bold text-gray-700 uppercase tracking-wider">رقم الفاتورة</th>
                    <th className="px-6 py-4 text-right text-xs font-bold text-gray-700 uppercase tracking-wider">العميل</th>
                    <th className="px-6 py-4 text-right text-xs font-bold text-gray-700 uppercase tracking-wider">المبلغ</th>
                    <th className="px-6 py-4 text-right text-xs font-bold text-gray-700 uppercase tracking-wider">الحالة</th>
                    <th className="px-6 py-4 text-right text-xs font-bold text-gray-700 uppercase tracking-wider">التاريخ</th>
                    <th className="px-6 py-4 text-right text-xs font-bold text-gray-700 uppercase tracking-wider">الإجراءات</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {recentInvoices.map((invoice, index) => {
                    const IconComponent = invoice.icon;
                    return (
                      <tr 
                        key={index} 
                        className={`hover:bg-gray-50 transition-all group ${
                          statsVisible ? 'opacity-100' : 'opacity-0'
                        }`}
                        style={{ 
                          transitionDelay: `${700 + index * 50}ms`,
                          animation: statsVisible ? 'slideInRight 0.3s ease-out' : 'none'
                        }}
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-[#fff5f2] flex items-center justify-center">
                              <IconComponent size={18} color="#ff8a65" variant="Bulk" />
                            </div>
                            <span className="font-semibold text-gray-900">{invoice.id}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="font-medium text-gray-900">{invoice.client}</span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="font-bold text-gray-900 text-lg">{invoice.amount}</span>
                          <span className="text-gray-600 text-sm mr-1">ر.س</span>
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`px-3 py-1.5 rounded-full text-xs font-semibold inline-flex items-center gap-1 ${
                              invoice.status === "مدفوعة"
                                ? "bg-green-100 text-green-800 border border-green-200"
                                : invoice.status === "معلقة"
                                ? "bg-yellow-100 text-yellow-800 border border-yellow-200"
                                : "bg-red-100 text-red-800 border border-red-200"
                            }`}
                          >
                            {invoice.status === "مدفوعة" && <TickCircle size={14} color="#10b981" variant="Bulk" />}
                            {invoice.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm text-gray-600 font-medium">{invoice.date}</span>
                        </td>
                        <td className="px-6 py-4">
                          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors group-hover:bg-[#fff5f2]">
                            <More size={20} color="#6b7280" variant="Bulk" />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
