import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "فاتورتي - بوابة الدفع الإلكتروني",
  description: "فاتورتي - بوابة دفع إلكتروني آمنة وسريعة",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${cairo.variable} antialiased`}
      >
        {children}
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            className: '',
            duration: 4000,
            style: {
              background: '#fff5f2',
              color: '#1a1a1a',
              borderRadius: '12px',
              padding: '16px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
              fontFamily: 'var(--font-cairo), Cairo, Arial, sans-serif',
              direction: 'rtl',
            },
            success: {
              duration: 3000,
              iconTheme: {
                primary: '#10b981',
                secondary: '#fff5f2',
              },
              style: {
                border: '2px solid #10b981',
                background: '#fff5f2',
              },
            },
            error: {
              duration: 4000,
              iconTheme: {
                primary: '#ef4444',
                secondary: '#fff5f2',
              },
              style: {
                border: '2px solid #ef4444',
                background: '#fff5f2',
              },
            },
          }}
        />
      </body>
    </html>
  );
}
