import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Users, Award, Download, ArrowRight } from "lucide-react"
import Link from "next/link"

const modules = [
  {
    phase: "Module 1",
    title: "Meshing Fundamentals",
    duration: "3 weeks",
    topics: ["Mesh Quality Criteria", "Element Types", "Mesh Refinement", "Convergence Studies"],
  },
  {
    phase: "Module 2",
    title: "HyperMesh Mastery",
    duration: "4 weeks",
    topics: ["HyperMesh Interface", "Geometry Cleanup", "Advanced Meshing", "Model Setup"],
  },
  {
    phase: "Module 3",
    title: "LS-DYNA Simulation",
    duration: "5 weeks",
    topics: ["Explicit Dynamics", "Material Models", "Contact Definitions", "Solver Setup"],
  },
  {
    phase: "Module 4",
    title: "Crash Simulation & Validation",
    duration: "4 weeks",
    topics: ["Crash Test Setup", "Result Analysis", "Validation Methods", "Report Generation"],
  },
]

const projects = [
  {
    title: "Automotive Component Meshing Project",
    description:
      "Develop high-quality meshes for automotive components using HyperMesh, ensuring accuracy and efficiency for subsequent simulations.",
    link: "#",
  },
  {
    title: "Crash Simulation Setup and Analysis",
    description:
      "Set up and analyze crash simulations using LS-DYNA, evaluating vehicle safety performance under various impact scenarios.",
    link: "#",
  },
  {
    title: "Subframe Crash Validation Study",
    description:
      "Conduct a comprehensive validation study of a subframe crash simulation, comparing simulation results with experimental data to ensure model accuracy.",
    link: "#",
  },
]

const outcomes = [
  "CAE Engineer",
  "Simulation Engineer",
  "Validation Engineer",
  "Crash Safety Engineer",
  "Automotive Test Engineer",
  "FEA Specialist",
]

export default function SimulationValidationCoursePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-emerald-100 text-emerald-800 mb-4">Advanced Simulation</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Simulation & Validation</h1>
              <p className="text-xl text-gray-600 mb-8">
                Master advanced simulation techniques with HyperMesh and LS-DYNA. Learn crash simulation, meshing, and
                validation methodologies used in automotive industry.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700" asChild>
                  <Link href="https://wa.me/917358102193?text=Hi! I want to enroll in the Simulation & Validation course. Please share more details.">
                    <ArrowRight className="mr-2 h-5 w-5" />
                    Enroll Now
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent">
                  <Download className="mr-2 h-5 w-5" />
                  Download Curriculum
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=400&width=500&text=Simulation Analysis"
                alt="Simulation & Validation"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Course Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {/* What You'll Learn */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">What You'll Learn</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {modules.map((module, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="outline">{module.phase}</Badge>
                          <span className="text-sm text-gray-500 flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {module.duration}
                          </span>
                        </div>
                        <CardTitle className="text-xl">{module.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {module.topics.map((topic, topicIndex) => (
                            <li key={topicIndex} className="flex items-center text-gray-600">
                              <CheckCircle className="h-4 w-4 text-emerald-600 mr-2 flex-shrink-0" />
                              {topic}
                            </li>
                          ))}
                        </ul>
                        {module.title === "LS-DYNA Simulation" && (
                          <Badge className="bg-orange-100 text-orange-800 mt-4">Hot Offer</Badge>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Hands-on Projects */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Hands-on Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects.map((project, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-lg font-semibold">{project.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600 mb-4">{project.description}</p>
                        <Button size="sm" asChild>
                          <Link href={project.link}>Read More</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Career Outcomes */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Career Outcomes</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {outcomes.map((outcome, index) => (
                    <div key={index} className="flex items-center p-4 bg-emerald-50 rounded-lg">
                      <Award className="h-5 w-5 text-emerald-600 mr-3" />
                      <span className="font-medium text-gray-900">{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Course Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-gray-400 mr-3" />
                    <div>
                      <div className="font-medium">Duration</div>
                      <div className="text-sm text-gray-600">16 weeks (4 months)</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-gray-400 mr-3" />
                    <div>
                      <div className="font-medium">Format</div>
                      <div className="text-sm text-gray-600">Live + Simulation Labs</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-5 w-5 text-gray-400 mr-3" />
                    <div>
                      <div className="font-medium">Certificate</div>
                      <div className="text-sm text-gray-600">Industry Recognized</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Pricing Card */}
              <Card className="border-2 border-emerald-200">
                <CardHeader className="bg-emerald-50">
                  <CardTitle className="text-center">Course Pricing</CardTitle>
                </CardHeader>
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-emerald-600">₹39,999</span>
                    <span className="text-gray-500 line-through ml-2">₹69,999</span>
                  </div>
                  <Badge className="bg-red-100 text-red-800 mb-4">42% OFF - Limited Time</Badge>
                  <p className="text-sm text-gray-600 mb-4">EMI starting from ₹3,333/month</p>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700 mb-2" asChild>
                    <Link href="https://wa.me/917358102193?text=Hi! I want to enroll in the Simulation & Validation course. Please share more details.">
                      Enroll Now
                    </Link>
                  </Button>
                  <p className="text-xs text-gray-500">7-day money-back guarantee</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Tools & Technologies</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {["HyperMesh", "LS-DYNA", "ANSYS", "HyperView", "OptiStruct", "RADIOSS"].map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Placement Assistance</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                      CAE Portfolio Development
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                      Automotive Industry Focus
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                      Technical Interview Prep
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                      Industry Partnerships
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <div className="space-y-4">
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700" size="lg" asChild>
                  <Link href="https://wa.me/917358102193?text=Hi! I want to enroll in the Simulation & Validation course. Please share more details.">
                    Enroll Now
                  </Link>
                </Button>
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <Link href="/contact">Get Free Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
