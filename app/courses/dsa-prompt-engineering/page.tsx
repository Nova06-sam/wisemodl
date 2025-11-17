import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Users, Award, Download, ArrowRight, Eye } from "lucide-react"
import Link from "next/link"

const modules = [
  {
    phase: "Module 1",
    title: "Data Structures Fundamentals",
    duration: "4 weeks",
    topics: ["Arrays & Strings", "Linked Lists", "Stacks & Queues", "Hash Tables"],
  },
  {
    phase: "Module 2",
    title: "Advanced Data Structures",
    duration: "4 weeks",
    topics: [
      "Trees & Binary Search Trees",
      "Heaps & Priority Queues",
      "Graphs & Graph Algorithms",
      "Trie & Segment Trees",
    ],
    isOffer: true,
  },
  {
    phase: "Module 3",
    title: "Algorithm Design & Analysis",
    duration: "4 weeks",
    topics: ["Sorting & Searching", "Dynamic Programming", "Greedy Algorithms", "Backtracking & Recursion"],
  },
  {
    phase: "Module 4",
    title: "Prompt Engineering for Developers",
    duration: "3 weeks",
    topics: ["AI Model Integration", "Prompt Design Patterns", "API Integration", "Code Generation with AI"],
  },
]

const projects = [
  "LeetCode Problem Solving (200+ Problems)",
  "System Design Case Studies",
  "AI-Powered Code Assistant Development",
  "Technical Interview Mock Sessions",
  "Competitive Programming Challenges",
]

const outcomes = [
  "Software Engineer",
  "Backend Developer",
  "Full Stack Developer",
  "AI/ML Engineer",
  "System Design Engineer",
  "Technical Lead",
]

export default function DSAPromptEngineeringCoursePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-cyan-100 text-cyan-800 mb-4">Placement Focused</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                DSA & Prompt Engineering for Placements
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Master Data Structures, Algorithms, and modern Prompt Engineering techniques. Get placement-ready with
                comprehensive interview preparation and AI integration skills.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700" asChild>
                  <Link href="https://wa.me/917358102193?text=Hi! I want to enroll in the DSA & Prompt Engineering course. Please share more details.">
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
                src="/placeholder.svg?height=400&width=500&text=DSA and Algorithms"
                alt="DSA & Prompt Engineering"
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

              {/* Project Overview */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Project Overview</h2>
                <div className="space-y-6">
                  <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-emerald-600">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-semibold text-gray-900">LeetCode Problem Solving Mastery</h3>
                        <Button variant="outline" size="sm" className="bg-transparent">
                          <Eye className="h-4 w-4 mr-2" />
                          Read More
                        </Button>
                      </div>
                      <p className="text-gray-600 mb-4">
                        Solve 200+ carefully curated problems covering all major data structures and algorithms. Learn
                        pattern recognition, optimization techniques, and interview strategies used by top tech
                        companies.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="bg-emerald-50 text-emerald-700">
                          Python
                        </Badge>
                        <Badge variant="secondary" className="bg-emerald-50 text-emerald-700">
                          JavaScript
                        </Badge>
                        <Badge variant="secondary" className="bg-emerald-50 text-emerald-700">
                          LeetCode
                        </Badge>
                        <Badge variant="secondary" className="bg-emerald-50 text-emerald-700">
                          Problem Solving
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-emerald-600">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-semibold text-gray-900">AI-Powered Code Assistant Development</h3>
                        <Button variant="outline" size="sm" className="bg-transparent">
                          <Eye className="h-4 w-4 mr-2" />
                          Read More
                        </Button>
                      </div>
                      <p className="text-gray-600 mb-4">
                        Build an intelligent code assistant using prompt engineering techniques. Learn to integrate AI
                        models, design effective prompts, and create tools that enhance developer productivity.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="bg-emerald-50 text-emerald-700">
                          OpenAI API
                        </Badge>
                        <Badge variant="secondary" className="bg-emerald-50 text-emerald-700">
                          Prompt Engineering
                        </Badge>
                        <Badge variant="secondary" className="bg-emerald-50 text-emerald-700">
                          Python
                        </Badge>
                        <Badge variant="secondary" className="bg-emerald-50 text-emerald-700">
                          API Integration
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-emerald-600">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-semibold text-gray-900">System Design Case Studies</h3>
                        <Button variant="outline" size="sm" className="bg-transparent">
                          <Eye className="h-4 w-4 mr-2" />
                          Read More
                        </Button>
                      </div>
                      <p className="text-gray-600 mb-4">
                        Design scalable systems like URL shorteners, chat applications, and social media platforms.
                        Learn system architecture, database design, and scalability patterns used in real-world
                        applications.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="bg-emerald-50 text-emerald-700">
                          System Design
                        </Badge>
                        <Badge variant="secondary" className="bg-emerald-50 text-emerald-700">
                          Scalability
                        </Badge>
                        <Badge variant="secondary" className="bg-emerald-50 text-emerald-700">
                          Database Design
                        </Badge>
                        <Badge variant="secondary" className="bg-emerald-50 text-emerald-700">
                          Architecture
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
              <Card>
                <CardHeader>
                  <CardTitle>Course Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-gray-400 mr-3" />
                    <div>
                      <div className="font-medium">Duration</div>
                      <div className="text-sm text-gray-600">15 weeks (4 months)</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-gray-400 mr-3" />
                    <div>
                      <div className="font-medium">Format</div>
                      <div className="text-sm text-gray-600">Live + Practice Sessions</div>
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
                    <span className="text-3xl font-bold text-emerald-600">₹29,999</span>
                    <span className="text-gray-500 line-through ml-2">₹49,999</span>
                  </div>
                  <Badge className="bg-orange-100 text-orange-800 mb-4">40% OFF - Limited Time</Badge>
                  <p className="text-sm text-gray-600 mb-4">EMI starting from ₹2,500/month</p>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700 mb-2" asChild>
                    <Link href="https://wa.me/917358102193?text=Hi! I want to enroll in the DSA & Prompt Engineering course. Please share more details.">
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
                    {["Python", "JavaScript", "LeetCode", "HackerRank", "OpenAI API", "Git", "VS Code"].map((tech) => (
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
                      Mock Interviews
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                      Resume Optimization
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                      Company Referrals
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                      Salary Negotiation
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <div className="space-y-4">
                <Button className="w-full bg-cyan-600 hover:bg-cyan-700" size="lg" asChild>
                  <Link href="https://wa.me/917358102193?text=Hi! I want to enroll in the DSA & Prompt Engineering course. Please share more details.">
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
