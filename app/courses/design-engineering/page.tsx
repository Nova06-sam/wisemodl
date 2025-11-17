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
    title: "CAD Fundamentals",
    duration: "3 weeks",
    topics: ["CATIA V5 Basics", "Part Design", "Assembly Design", "Drafting Workbench"],
  },
  {
    phase: "Module 2",
    title: "Advanced Design",
    duration: "4 weeks",
    topics: ["Surface Design", "Sheet Metal Design", "Weldment Design", "Weldment Design", "Design Optimization"],
    offer: "Limited Time Offer!",
  },
  {
    phase: "Module 3",
    title: "GD&T & Tolerancing",
    duration: "3 weeks",
    topics: ["Geometric Dimensioning", "Tolerance Analysis", "Stack-up Calculations", "Design for Manufacturing"],
  },
  {
    phase: "Module 4",
    title: "Materials & BiW",
    duration: "4 weeks",
    topics: ["Plastics Engineering", "Body in White Design", "Material Selection", "Cost Optimization"],
  },
]

const projects = [
  {
    title: "Dashboard Trim Design with Complete GD&T",
    description:
      "Design a dashboard trim component using CATIA V5, applying GD&T principles for manufacturing and assembly. This project covers part design, surface modeling, and drafting.",
    link: "#",
  },
  {
    title: "Chassis Layout Design for Passenger Vehicle",
    description:
      "Develop a chassis layout for a passenger vehicle, considering factors such as weight distribution, suspension geometry, and safety standards. This project involves assembly design and optimization.",
    link: "#",
  },
  {
    title: "Door Trim Assembly with Plastic Components",
    description:
      "Create a door trim assembly with various plastic components, focusing on material selection, manufacturing constraints, and cost optimization. This project includes plastics engineering and design for manufacturing.",
    link: "#",
  },
]

const outcomes = [
  "Design Engineer",
  "CAD Engineer",
  "Product Development Engineer",
  "Automotive Design Engineer",
  "Mechanical Design Engineer",
  "R&D Engineer",
]

export default function DesignEngineeringCoursePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-emerald-100 text-emerald-800 mb-4">Industry Certified</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Design Engineering Certification</h1>
              <p className="text-xl text-gray-600 mb-8">
                Master professional CAD design, GD&T, plastics engineering, and Body-in-White design. Learn
                industry-standard tools and methodologies used by top automotive companies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700" asChild>
                  <Link href="https://wa.me/917358102193?text=Hi! I want to enroll in the Design Engineering Certification. Please share more details.">
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
                src="/placeholder.svg?height=400&width=500&text=Design Engineering"
                alt="Design Engineering"
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
                        {module.offer && <Badge className="bg-blue-100 text-blue-800 mt-4">{module.offer}</Badge>}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Hands-on Projects */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Hands-on Projects</h2>
                <div className="space-y-6">
                  {projects.map((project, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle>{project.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-4">{project.description}</p>
                        <Button asChild>
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
                      <div className="text-sm text-gray-600">14 weeks (3-4 months)</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-gray-400 mr-3" />
                    <div>
                      <div className="font-medium">Format</div>
                      <div className="text-sm text-gray-600">Live + Hands-on Labs</div>
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
                  <CardTitle className="text-center">Limited Time Offer</CardTitle>
                </CardHeader>
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-emerald-600">₹29,999</span>
                    <span className="text-gray-500 line-through ml-2">₹59,999</span>
                  </div>
                  <Badge className="bg-red-100 text-red-800 mb-4">50% OFF - Hurry!</Badge>
                  <p className="text-sm text-gray-600 mb-4">EMI starting from ₹2,500/month</p>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700 mb-2" asChild>
                    <Link href="https://wa.me/917358102193?text=Hi! I want to enroll in the Design Engineering Certification. Please share more details.">
                      Enroll Now
                    </Link>
                  </Button>
                  <p className="text-xs text-gray-500">30-day money-back guarantee</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Tools & Technologies</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {["CATIA V5", "SolidWorks", "AutoCAD", "GD&T", "PLM", "FEA"].map((tech) => (
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
                      Portfolio Development
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                      Technical Interview Prep
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                      Industry Connections
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                      Automotive Industry Focus
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <div className="space-y-4">
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700" size="lg" asChild>
                  <Link href="https://wa.me/917358102193?text=Hi! I want to enroll in the Design Engineering Certification. Please share more details.">
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
