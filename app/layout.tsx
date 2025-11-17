import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Wrench Wise - Engineering Education Platform | Full Stack, AI & Mechanical Engineering Courses",
  description:
    "Innovate. Engineer. Excel. Empowering the next generation of engineers with industry-relevant skills in Full Stack Development, AI/ML, and Mechanical Engineering. Join Wrench Wise today!",
  keywords:
    "engineering education, full stack development, AI courses, mechanical engineering, MERN stack, machine learning, career development, technical training, UI UX design bootcamp",
  authors: [{ name: "Wrench Wise" }],
  creator: "Wrench Wise",
  publisher: "Wrench Wise",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://wrench-wise.com",
    siteName: "Wrench Wise",
    title: "Wrench Wise - Engineering Education Platform",
    description: "Empowering the next generation of engineers with industry-relevant skills and hands-on experience.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Wrench Wise Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wrench Wise - Engineering Education Platform",
    description: "Empowering the next generation of engineers with industry-relevant skills and hands-on experience.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/favicon.ico",
    apple: "/logo.png",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <style>{`
          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes slide-in-left {
            from {
              opacity: 0;
              transform: translateX(-30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          @keyframes slide-in-right {
            from {
              opacity: 0;
              transform: translateX(30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          
          @keyframes pulse-glow {
            0%, 100% { box-shadow: 0 0 20px rgba(168, 85, 247, 0.4); }
            50% { box-shadow: 0 0 40px rgba(168, 85, 247, 0.8); }
          }
          
          .animate-fade-in-up {
            animation: fade-in-up 0.8s ease-out forwards;
          }
          
          .animate-slide-in-left {
            animation: slide-in-left 0.8s ease-out forwards;
          }
          
          .animate-slide-in-right {
            animation: slide-in-right 0.8s ease-out forwards;
          }
          
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          
          .animate-pulse-glow {
            animation: pulse-glow 2s ease-in-out infinite;
          }
          
          .animation-delay-300 {
            animation-delay: 0.3s;
            opacity: 0;
          }
          
          .animation-delay-600 {
            animation-delay: 0.6s;
            opacity: 0;
          }
          
          .animation-delay-900 {
            animation-delay: 0.9s;
            opacity: 0;
          }
          
          .animation-delay-1200 {
            animation-delay: 1.2s;
            opacity: 0;
          }
          
          .animation-delay-1500 {
            animation-delay: 1.5s;
            opacity: 0;
          }
          
          .animation-delay-1800 {
            animation-delay: 1.8s;
            opacity: 0;
          }
        `}</style>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
