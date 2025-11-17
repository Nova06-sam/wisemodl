"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Monitor, Settings, ArrowRight } from "lucide-react"
import Link from "next/link"

const domains = [
  {
    icon: Monitor,
    title: "Computer Science & Software Engineering",
    description: "From Full Stack to AI-powered applications - we help you code smarter, faster, and better.",
    href: "/domains/cse",
    available: true,
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: Settings,
    title: "Mechanical Engineering",
    description: "Go beyond theory - learn to design, simulate, and optimize like the pros.",
    href: "#",
    available: false,
    gradient: "from-emerald-500 to-green-500",
  },
]

export function FeaturedDomains() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Domains</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {domains.map((domain, index) => (
            <Card
              key={index}
              className={`group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg transform hover:-translate-y-2 ${
                index === 0 ? "animate-slide-in-left" : "animate-slide-in-right"
              }`}
            >
              <CardHeader className="text-center pb-4 relative overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${domain.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>
                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${domain.gradient} p-3 transform group-hover:scale-110 transition-transform duration-300`}
                  >
                    <domain.icon className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-600 group-hover:to-cyan-600 group-hover:bg-clip-text transition-all duration-300">
                    {domain.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-300">
                  {domain.description}
                </CardDescription>
                {domain.available ? (
                  <Button
                    asChild
                    className="bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <Link href={domain.href}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </Button>
                ) : (
                  <div className="text-gray-500 font-medium">Coming Soon</div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out forwards;
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out forwards;
          animation-delay: 0.2s;
          opacity: 0;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
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
      `}</style>
    </section>
  )
}
