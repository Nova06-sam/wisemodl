"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppChat } from "@/components/whatsapp-chat"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  CheckCircle,
  Users,
  Award,
  BookOpen,
  Briefcase,
  Code,
  Wrench,
  Target,
  Building,
  GraduationCap,
} from "lucide-react"

export default function InstitutePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section - Same as Home Page */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-cyan-50 relative overflow-hidden">
        {/* Animated background elements - Same as Home */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                <span className="g1">Wrench</span><span className="g2">Wise</span>-Shaping College
              </h1>
                <span className="text-emerald-600 text-5xl font-bold pb-10">Talent into Career - Ready Professionals</span>
            </div>
            <div className="animate-fade-in-up animation-delay-300">
              <p className="text-xl md:text-2xl font-semibold text-gray-700 my-4">
                "Placements are not about luck - they are about preparation."
              </p>
            </div>
            <div className="animate-fade-in-up animation-delay-400">
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                At Wrench Wise, we help colleges deliver placement-ready graduates by aligning learning with real job
                roles, sharpening student skills, and ensuring they stand out in technical, business, and core-sector
                interviews.
              </p>
            </div>
            <div className="animate-fade-in-up animation-delay-600">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="contact">
                <Button
                  size="lg"
                  className="bg-emerald-600 hover:bg-emerald-700 px-8 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Partner With Us
                </Button>
                </Link>
                <Link href="domains/cse">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-300 text-gray-600 hover:bg-gray-50 px-8 transform hover:scale-105 transition-all duration-300 bg-transparent"
                >
                  View Programs
                </Button>
                </Link>
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

      {/* Unique Promise Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Unique Promise (UPV)</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unlike generic training providers, Wrench Wise delivers comprehensive, placement-focused education
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-emerald-600" />
                </div>
                <CardTitle className="text-emerald-600">For Students</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Gain the skills, confidence, and clarity to transition smoothly from college to career.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="h-8 w-8 text-emerald-600" />
                </div>
                <CardTitle className="text-emerald-600">For Colleges</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Position your institution as a hub of industry-ready graduates, improving placement outcomes and brand
                  reputation.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-8 w-8 text-emerald-600" />
                </div>
                <CardTitle className="text-emerald-600">For Parents</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Assurance that their child is not just studying, but also building a strong career pathway.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-white border-2 border-emerald-200">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">What Makes Us Different</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Curriculum-aligned tracks (Engineering, Arts/Science, MBA)</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Last-mile placement sprints for final-year students</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Deep-tech programs for Mechanical engineers (CFD, FEA, CAD Design)
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Bootcamps for specific skills → Digital Marketing, CRM, Coding, Data Analytics
                  </span>
                </div>
                <div className="flex items-start space-x-3 md:col-span-2">
                  <CheckCircle className="h-6 w-6 text-emerald-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Custom-fit programs designed in partnership with each college</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Program Tracks Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Program Tracks</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive career paths designed for different academic backgrounds
            </p>
          </div>

          <div className="space-y-8">
            {/* Engineering Career Path */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="bg-gray-50">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Code className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <CardTitle className="text-emerald-600 text-xl">1. Engineering Career Path</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Full 8-Sem Track:</h4>
                    <p className="text-gray-600">From coding & core engineering to projects & placements.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Final Year Tech Sprint (15 Days):</h4>
                    <p className="text-gray-600">
                      Intensive placement-focused prep for students already in interview season.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Arts & Science Tech Path */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="bg-gray-50">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <CardTitle className="text-emerald-600 text-xl">
                      2. Arts & Science Tech Path (BSc CS / BCA)
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Full 6-Sem Track:</h4>
                    <p className="text-gray-600">
                      Foundations in programming, databases, web development, and capstone projects.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Final Year Sprint (15 Days):</h4>
                    <p className="text-gray-600">Fast-track training for immediate job readiness.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* MBA Career Accelerator */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="bg-gray-50">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <CardTitle className="text-emerald-600 text-xl">3. MBA Career Accelerator</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">8-Week Program:</h4>
                    <p className="text-gray-600">
                      Digital tools, domain-specific training (Marketing, Finance, HR, Ops), simulations, and
                      placements.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">15-Day Interview Booster:</h4>
                    <p className="text-gray-600">Resume polish, GD, mock interviews, and case study prep.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mechanical Engineering Specialization */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="bg-gray-50">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Wrench className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <CardTitle className="text-emerald-600 text-xl">4. Mechanical Engineering Specialization</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Advanced Tech Modules:</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-medium text-gray-900">CFD</h5>
                      <p className="text-sm text-gray-600">Computational Fluid Dynamics</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-medium text-gray-900">FEA</h5>
                      <p className="text-sm text-gray-600">Finite Element Analysis</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-medium text-gray-900">CAD/Design</h5>
                      <p className="text-sm text-gray-600">Engineering Design</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mt-4">
                    Programs built to make mechanical graduates industry-ready for core sector jobs.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Bootcamp Model */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="bg-gray-50">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Target className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <CardTitle className="text-emerald-600 text-xl">5. Bootcamp Model (Value-Added Programs)</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">
                  Short-term intensive programs designed to enhance one specific skill set.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">Examples:</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>• CRM & Customer Success</li>
                      <li>• Digital Marketing</li>
                      <li>• Data Analytics</li>
                      <li>• Full-Stack Basics</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-gray-600">Colleges use this as value-added coursework or job-ready bootcamps.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Colleges Partner With Wrench Wise</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Industry-Relevant Curriculum</h3>
                <p className="text-gray-600 text-sm">Updated with market trends, not outdated slides.</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Placement-Driven Approach</h3>
                <p className="text-gray-600 text-sm">Every program is designed backward from job roles.</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Flexible & Collaborative</h3>
                <p className="text-gray-600 text-sm">Curriculum is tailored to each college's need.</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Comprehensive Coverage</h3>
                <p className="text-gray-600 text-sm">
                  Engineering, Arts/Science, MBA, Mechanical core, and skill bootcamps under one umbrella.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The Outcome</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                When students graduate under Wrench Wise's guidance, they are:
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-600" />
                  <span className="text-lg text-gray-700">Confident communicators</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-600" />
                  <span className="text-lg text-gray-700">Digitally skilled</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-600" />
                  <span className="text-lg text-gray-700">Project-ready</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-600" />
                  <span className="text-lg text-gray-700">Placement-prepared</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">For colleges, this means:</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-600" />
                  <span className="text-lg text-gray-700">Stronger placement percentages</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-600" />
                  <span className="text-lg text-gray-700">Higher student satisfaction</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-600" />
                  <span className="text-lg text-gray-700">Elevated institutional reputation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            With Wrench Wise, colleges don't just produce graduates.
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-emerald-100">They produce industry-ready professionals.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
            <Link href="contact">
            <Button
              size="lg"
              className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300"
            >
              Schedule a Partnership Call
            </Button>
            </Link>
            {/* <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300 bg-transparent"
            >
              Download Brochure
            </Button> */}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppChat />
    </div>
  )
}
