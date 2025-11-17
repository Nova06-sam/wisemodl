"use client"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Users, Award, Target, Rocket } from "lucide-react"
import Link from "next/link"

const journeySteps = [
  {
    icon: Target,
    title: "Discover",
    description: "Choose your domain: Mechanical, CS, DADS, or AI+ML - based on your goals and interests.",
  },
  {
    icon: Users,
    title: "Learn",
    description:
      "Get started with mentor-guided live programs or self-paced learning tracks designed by industry professionals.",
  },
  {
    icon: Award,
    title: "Apply",
    description: "Work on hands-on projects, tackle real-world challenges, and build your personal portfolio.",
  },
  {
    icon: Users,
    title: "Prepare",
    description:
      "Join our career readiness bootcamp with resume reviews, mock interviews, and profile-building sessions.",
  },
  {
    icon: Rocket,
    title: "Launch",
    description:
      "Apply confidently to job roles, internships, or higher education with a portfolio that speaks for itself.",
  },
]

export function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-600 to-cyan-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Engineering Career?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            From Exploration to Placement – What Your Learning Path Looks Like
          </p>
        </div>

        {/* Desktop: 5-column layout */}
        <div className="hidden lg:flex justify-between items-start space-x-6 mb-12">
          {journeySteps.map((step, index) => (
            <div key={index} className="flex-1 text-center">
              <div className="mb-4">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3 transform hover:scale-110 transition-transform duration-300">
                  <step.icon className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-sm text-emerald-100">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Mobile: Vertical stack */}
        <div className="lg:hidden space-y-8 mb-12">
          {journeySteps.map((step, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center ">
                  <step.icon className="h-6 w-6 text-white transform group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                </div>
                <p className="text-emerald-100">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 px-8" asChild>
            <Link href="/contact">
              <ArrowRight className="mr-2 h-5 w-5" />
              Start Your Journey
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-emerald-600 px-8 bg-transparent"
            asChild
          >
            <Link href="https://wa.me/917358102193?text=Hi! I'm interested in WrenchWise programs. Can you help me?">
              <Phone className="mr-2 h-5 w-5" />
              WhatsApp Us
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
