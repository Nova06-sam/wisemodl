"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Zap } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 to-cyan-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Built by Engineers. <span className="text-emerald-600">Designed for Your Future.</span>
            </h1>
          </div>
          <div className="animate-fade-in-up animation-delay-300">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">
              Master Industry-Relevant Skills in Software, AI, and Mechanical Engineering.
            </h2>
          </div>
          <div className="animate-fade-in-up animation-delay-400">
            <p className="text-lg md:text-xl text-gray-600 mb-8">
               <span className="g1 ">Wrench</span> <span className="g2">Wise</span> empowers you with career - focused, project - based engineering education across CSE, Mechanical,
              and emerging tech domains.
            </p>
          </div>
          <div className="animate-fade-in-up animation-delay-600">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 px-8 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                asChild
              >
                <Link href="/domains/cse">
                  <ArrowRight className="mr-2 h-5 w-5" />
                  Explore CSE Programs
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-gray-300 text-gray-600 cursor-not-allowed opacity-60"
                disabled
              >
                <Zap className="mr-2 h-5 w-5" />
                Mechanical Programs - Coming Soon
              </Button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
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
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animation-delay-300 {
          animation-delay: 0.3s;
          opacity: 0;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }
        
        .animation-delay-600 {
          animation-delay: 0.6s;
          opacity: 0;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  )
}
