"use client"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, CheckCircle, ArrowRight } from "lucide-react"
import { WhatsAppChat } from "@/components/whatsapp-chat"

const books = [
  {
    number: "1",
    title: "210+ Concepts to Crack the Design Engineer Role",
    description:
      "Your complete playbook for mastering part design, GD&T, plastics, sheet metal, mold design, and CATIA/NX workflows.",
    includes: "Concept definitions, automotive examples, real-world analogies, and interview Q&As.",
    idealFor: "Product Design, Plastics/Trim Engineers, CAD Interview Prep",
  },
  {
    number: "2",
    title: "200+ Concepts to Crack the FEA Simulation Engineer Role",
    description:
      "From meshing to modal analysis, crashworthiness to structural optimization - everything you need to master FEA interviews and real validation workflows.",
    includes: "Hypermesh, ANSYS, LS-DYNA + Common solver workflows + CAE project tips",
    idealFor: "CAE Trainees, Validation Engineers, Structural Analysts",
  },
  {
    number: "3",
    title: "200+ Concepts to Crack the CFD Simulation Engineer Role",
    description:
      "Understand the world of fluids, heat transfer, and aerodynamics - and how CFD plays a critical role in design validation.",
    includes: "Fluent, OpenFOAM, Pre/Post, flow types, solver logic",
    idealFor: "CFD Engineers, Thermal Simulation Interviews",
  },
  {
    number: "4",
    title: "Manufacturing & Quality in an Automotive OEM - Explained",
    description:
      "Get a first-hand understanding of how real manufacturing, PFMEA, shop-floor validation, and quality engineering happen in OEMs.",
    includes: "VAVE, Control Plans, 7 QC Tools, Process Quality",
    idealFor: "Manufacturing, Process Planning, Supplier Quality Roles",
  },
  {
    number: "5",
    title: "Automotive BIW - Explained for Engineers",
    description:
      "A part-by-part, function-by-function breakdown of Body-in-White. Learn hood, roof, door, and crash zones like a pro.",
    includes: "Design logic, stamping & joining methods, load paths",
    idealFor: "BIW Design, Manufacturing, and CAE Engineers",
  },
  {
    number: "6",
    title: "Automotive Plastics - A Designer's Reference",
    description:
      "From fascia to trims to pillars - understand plastic components from aesthetics to manufacturing constraints.",
    includes: "Snap fits, ribbing, mold flow, injection molding, design defects",
    idealFor: "Plastics Design, Tooling Coordination, Trim Engineers",
  },
]

const features = [
  "Structured by Engineers, for Engineers",
  "Includes examples, definitions, real-life comparisons",
  "Practice Q&A to prepare you for interviews",
  "Every book aligned with one or more job roles",
  "Pairable with our courses and certification programs",
]

export default function BooksPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
 <section className="py-20 bg-gradient-to-br from-emerald-50 to-cyan-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto animate-fade-in-up ">
            <Badge className="bg-emerald-100 text-emerald-800 mb-4 hover:bg-emerald-300">WrenchWise Editions</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up">
              Crack interviews. Deepen knowledge. Learn like never before.
            </h1>
            <p className="text-xl text-gray-600 mb-8 animate-fade-in-up">
              At <span className="g1 ">Wrench</span><span className="g2">Wise</span>, we've distilled years of industry experience, 210+ expert-curated video scripts, and
              real-world project learning into a new breed of technical books. These are not just reference guides -
              they're crack-ready preparation handbooks built for modern engineering roles.
            </p>
            <p className="text-lg text-gray-500 animate-fade-in-up">
              Whether you're preparing for core mechanical interviews, or diving deep into simulation, design, or
              automotive product development, our books help you build the right foundation and confidence - with
              structured learning and real examples.
            </p>
          </div>
        </div>
      </section>
  

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The First Mechanical Engineering Collection
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {books.map((book, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-l-emerald-600">
                <CardHeader>
                  <div className="flex items-start space-x-3">
                    {/* <span className="text-2xl font-bold text-emerald-600">{book.number}</span> */}
                    <div>
                      <CardTitle className="text-xl mb-2">{book.title}</CardTitle>
                      <CardDescription className="text-gray-600">{book.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <BookOpen className="h-4 w-4 mr-2 text-emerald-600" />
                      Includes:
                    </h4>
                    <p className="text-gray-600 text-sm">{book.includes}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Ideal for:</h4>
                    <p className="text-emerald-700 text-sm font-medium">{book.idealFor}</p>
                  </div>
                  <Button disabled variant="outline" className="w-full bg-transparent">
                    Coming Soon
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* What Makes Different */}
          <Card className="mb-16 bg-gradient-to-r from-emerald-50 to-cyan-50">
            <CardHeader>
              <CardTitle className="text-2xl text-center">What Makes WrenchWise Editions Different?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Coming Soon */}
          <Card className="text-center bg-gradient-to-r from-cyan-50 to-emerald-50">
            <CardHeader>
              <CardTitle className="text-2xl">Coming Soon</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                Books in Computer Science, AI/ML, and DADS domains are already in development. Expect Full Stack prep
                guides, Python + DSA masterbooks, ML interview handbooks, and more.
              </p>
              <Button disabled variant="outline">
                <ArrowRight className="mr-2 h-4 w-4" />
                Coming Soon
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
      <WhatsAppChat />
    </div>
  )
}
