import { Button } from "@/components/ui/button"
import { Compass, GraduationCap, Wrench, Briefcase, Rocket } from "lucide-react"
import Link from "next/link"

const journeySteps = [
  {
    icon: Compass,
    title: "Discover",
    description: "Choose your domain: Mechanical, CS, DADS, or AI+ML - based on your goals and interests.",
  },
  {
    icon: GraduationCap,
    title: "Learn",
    description:
      "Get started with mentor-guided live programs or self-paced learning tracks designed by industry professionals.",
  },
  {
    icon: Wrench,
    title: "Apply",
    description: "Work on hands-on projects, tackle real-world challenges, and build your personal portfolio.",
  },
  {
    icon: Briefcase,
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

export function JourneySection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Your Journey with WrenchWise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From Exploration to Placement – What Your Learning Path Looks Like
          </p>
        </div>

        {/* Desktop: 5-column layout */}
        <div className="hidden lg:flex justify-between items-start space-x-6 mb-12">
          {journeySteps.map((step, index) => (
            <div key={index} className="flex-1 text-center">
              <div className="mb-4">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <step.icon className="h-8 w-8 text-emerald-600" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Mobile: Vertical stack */}
        <div className="lg:hidden space-y-8 mb-12">
          {journeySteps.map((step, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <step.icon className="h-6 w-6 text-emerald-600" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700" asChild>
            <Link href="/domains/cse">Explore Programs →</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
