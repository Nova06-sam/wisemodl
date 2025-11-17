import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Cog, Factory, Zap, Car, Brain, ArrowRight } from "lucide-react"
import Link from "next/link"
import { WhatsAppChat } from "@/components/whatsapp-chat"

const courses = [
  {
    icon: Cog,
    title: "Design Engineering Certification",
    description: "Learn CAD, GD&T, Plastics, BiW",
    tools: "CATIA, SolidWorks",
    projects: "Dashboard Trim, Chassis Layout, Door Trim Capstone",
    href: "/courses/design-engineering",
  },
  {
    icon: Factory,
    title: "Manufacturing & Quality Certification",
    description: "Core Manufacturing, Lean, PPAP, Quality Tools: FMEA, RCA, SPC",
    tools: "Lean Six Sigma, PPAP, SPC",
    projects: "PPAP Packet, VSM, 8D RCA Reports",
    href: "/courses/manufacturing-quality",
  },
  {
    icon: Zap,
    title: "Simulation & Validation",
    description: "Meshing, Crash Simulation, HyperMesh, LS-DYNA",
    tools: "HyperMesh, LS-DYNA, ANSYS",
    projects: "Subframe Crash Validation",
    href: "/courses/simulation-validation",
  },
  {
    icon: Car,
    title: "EV & Future Tech",
    description: "EV Layout, Battery Tech, ADAS, Connected Cars",
    tools: "CATIA, Battery Design Tools",
    projects: "Design a 2-Seater Urban EV",
    href: "/courses/ev-future-tech",
  },
  {
    icon: Brain,
    title: "AI for Mechanical Engineers",
    description: "Predictive Maintenance, Design Optimization, CV for QC",
    tools: "Python, OpenCV, Scikit-learn, Jupyter",
    projects: "Predictive Maintenance System, Quality Control AI",
    href: "/courses/ai-mechanical",
  },
]

export default function MechanicalPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="py-20 bg-gradient-to-br from-emerald-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Mechanical Engineering</h1>
            <p className="text-xl text-gray-600">
              Designed by mechanical pros for future engineers — our tracks cover the full design-to-delivery spectrum
              with certification, projects, and job-readiness.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <course.icon className="h-12 w-12 text-emerald-600 mb-4" />
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Tools & Technologies:</h4>
                    <p className="text-gray-600">{course.tools}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Projects:</h4>
                    <p className="text-gray-600">{course.projects}</p>
                  </div>
                  <Button asChild className="w-full bg-emerald-600 hover:bg-emerald-700">
                    <Link href={course.href}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppChat />
    </div>
  )
}
