import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Users, Award, Download, ArrowRight, Eye } from "lucide-react"
import Link from "next/link"

const modules = [
  {
    phase: "Phase 1",
    title: "Web Fundamentals",
    duration: "4 weeks",
    topics: ["HTML5 & CSS3", "JavaScript ES6+", "Responsive Design", "Git & GitHub"],
    isOffer: false,
  },
  {
    phase: "Phase 2",
    title: "MERN Stack Development",
    duration: "8 weeks",
    topics: ["React.js & Hooks", "Node.js & Express", "MongoDB & Mongoose", "RESTful APIs"],
    isOffer: true,
  },
  {
    phase: "Phase 3",
    title: "AI Integration",
    duration: "6 weeks",
    topics: ["TensorFlow.js", "Machine Learning APIs", "AI Chatbot Development", "Data Visualization"],
    isOffer: false,
  },
  {
    phase: "Phase 4",
    title: "DevOps & Deployment",
    duration: "4 weeks",
    topics: ["Docker Containers", "AWS Deployment", "CI/CD Pipelines", "Performance Optimization"],
    isOffer: false,
  },
]

const outcomes = [
  "Full Stack Developer",
  "MERN Stack Developer",
  "AI Application Developer",
  "DevOps Engineer",
  "Frontend Developer",
  "Backend Developer",
]

export default function FullStackCoursePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-cyan-100 text-cyan-800 mb-4">Most Popular Course</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Full Stack Development Program (MERN + AI)
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Master the complete web development stack with AI integration. Build scalable applications and deploy
                them to production with industry-standard DevOps practices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700" asChild>
                  <Link href="https://wa.me/917358102193?text=Hi! I want to enroll in the Full Stack Development Program. Please share more details.">
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
                src="/placeholder.svg?height=400&width=500&text=Full Stack Development"
                alt="Full Stack Development"
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
                    <Card key={index} className="hover:shadow-lg transition-shadow relative">
                      {module.isOffer && (
                        <Badge className="absolute -top-2 -right-2 bg-orange-500 text-white">Special Offer</Badge>
                      )}
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
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Projects Overview */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Project Overview</h2>
                <div className="space-y-6">
                  <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-emerald-600">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-semibold text-gray-900">Personal Portfolio Website with React</h3>
                        <Button variant="outline" size="sm" className="bg-transparent">
                          <Eye className="h-4 w-4 mr-2" />
                          Read More
                        </Button>
                      </div>
                      <p className="text-gray-600 mb-4">
                        Build a responsive portfolio showcasing your skills with modern React features, animations, and
                        dynamic content management. Learn component architecture, state management, and deployment
                        strategies.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="bg-emerald-50 text-emerald-700">
                          React
                        </Badge>
                        <Badge variant="secondary" className="bg-emerald-50 text-emerald-700">
                          CSS3
                        </Badge>
                        <Badge variant="secondary" className="bg-emerald-50 text-emerald-700">
                          JavaScript
                        </Badge>
                        <Badge variant="secondary" className="bg-emerald-50 text-emerald-700">
                          Responsive Design
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-emerald-600">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-semibold text-gray-900">
                          E-commerce Application with Payment Integration
                        </h3>
                        <Button variant="outline" size="sm" className="bg-transparent">
                          <Eye className="h-4 w-4 mr-2" />
                          Read More
                        </Button>
                      </div>
                      <p className="text-gray-600 mb-4">
                        Full-featured online store with cart functionality, user authentication, order management, and
                        secure payment processing using Stripe API. Includes admin dashboard and inventory management.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="bg-emerald-50 text-emerald-700">
                          MERN Stack
                        </Badge>
                        <Badge variant="secondary" className="bg-emerald-50 text-emerald-700">
                          Stripe API
                        </Badge>
                        <Badge variant="secondary" className="bg-emerald-50 text-emerald-700">
                          JWT
                        </Badge>
                        <Badge variant="secondary" className="bg-emerald-50 text-emerald-700">
                          Redux
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-emerald-600">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-semibold text-gray-900">
                          AI-Powered Chatbot with Natural Language Processing
                        </h3>
                        <Button variant="outline" size="sm" className="bg-transparent">
                          <Eye className="h-4 w-4 mr-2" />
                          Read More
                        </Button>
                      </div>
                      <p className="text-gray-600 mb-4">
                        Intelligent chatbot using machine learning for customer service automation. Implement natural
                        language understanding, context management, and integration with business systems.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="bg-emerald-50 text-emerald-700">
                          TensorFlow.js
                        </Badge>
                        <Badge variant="secondary" className="bg-emerald-50 text-emerald-700">
                          NLP
                        </Badge>
                        <Badge variant="secondary" className="bg-emerald-50 text-emerald-700">
                          Node.js
                        </Badge>
                        <Badge variant="secondary" className="bg-emerald-50 text-emerald-700">
                          OpenAI API
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
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
              {/* Pricing Card */}
              <Card className="border-2 border-emerald-200">
                <CardHeader className="bg-emerald-50">
                  <CardTitle className="text-center">Course Pricing</CardTitle>
                </CardHeader>
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-emerald-600">₹49,999</span>
                    <span className="text-gray-500 line-through ml-2">₹79,999</span>
                  </div>
                  <Badge className="bg-orange-100 text-orange-800 mb-4">37% OFF - Limited Time</Badge>
                  <p className="text-sm text-gray-600 mb-4">EMI starting from ₹4,167/month</p>
                  <div className="space-y-2">
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Enroll Now</Button>
                    <Button variant="outline" className="w-full bg-transparent">
                      Get Free Consultation
                    </Button>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">30-day money-back guarantee</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Course Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-gray-400 mr-3" />
                    <div>
                      <div className="font-medium">Duration</div>
                      <div className="text-sm text-gray-600">22 weeks (5-6 months)</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-gray-400 mr-3" />
                    <div>
                      <div className="font-medium">Format</div>
                      <div className="text-sm text-gray-600">Live + Self-Paced</div>
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

              <Card>
                <CardHeader>
                  <CardTitle>Tools & Technologies</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Node.js", "MongoDB", "Express", "TensorFlow", "Docker", "AWS", "Git"].map((tech) => (
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
                      Resume Building
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                      Interview Preparation
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                      Job Referrals
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                      Industry Mentorship
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <div className="space-y-4">
                <Button className="w-full bg-cyan-600 hover:bg-cyan-700" size="lg" asChild>
                  <Link href="/contact">Get Free Consultation</Link>
                </Button>
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <Link href="https://wa.me/917358102193?text=Hi! I want to learn about the Full Stack Development Program. Please share more details.">
                    WhatsApp Us
                  </Link>
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
