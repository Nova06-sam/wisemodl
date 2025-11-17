"use client"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  Clock,
  Users,
  Award,
  Download,
  ArrowRight,
  CreditCard,
  MessageCircle,
  Code,
  Database,
} from "lucide-react"
import { WhatsAppChat } from "@/components/whatsapp-chat"

const modules = [
  {
    module: "Module 1",
    title: "Data Structures Fundamentals",
    duration: "4 weeks",
    topics: ["Arrays & Strings", "Linked Lists", "Stacks & Queues", "Hash Tables"],
  },
  {
    module: "Module 2",
    title: "Advanced Data Structures",
    duration: "4 weeks",
    topics: [
      "Trees & Binary Search Trees",
      "Heaps & Priority Queues",
      "Graphs & Graph Algorithms",
      "Trie & Segment Trees",
    ],
  },
  {
    module: "Module 3",
    title: "Algorithm Design & Analysis",
    duration: "4 weeks",
    topics: ["Sorting & Searching", "Dynamic Programming", "Greedy Algorithms", "Backtracking & Recursion"],
  },
  {
    module: "Module 4",
    title: "Prompt Engineering for Developers",
    duration: "3 weeks",
    topics: ["AI Model Integration", "Prompt Design Patterns", "API Integration", "Code Generation with AI"],
  },
]

const outcomes = [
  "Master 200+ LeetCode Problems",
  "System Design Interview Readiness",
  "AI-Powered Code Assistant Development",
  "Technical Interview Mock Sessions",
  "Competitive Programming Skills",
  "Prompt Engineering Expertise",
]

const pricingOptions = [
  {
    type: "Full Program",
    price: "₹29,999",
    originalPrice: "₹49,999",
    description: "Complete DSA + Prompt Engineering program",
    features: ["All 4 Modules", "200+ Problems", "Mock Interviews", "Career Services"],
    popular: true,
  },
  {
    type: "Individual Module",
    price: "₹9,999",
    originalPrice: "₹15,999",
    description: "Choose any single module based on your needs",
    features: ["1 Module Access", "Module Projects", "Community Access", "15-day Support"],
    popular: false,
  },
]

export default function DSAPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-blue-100 text-blue-800 mb-4">DSA & Prompt Engineering @ Wrench Wise</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Code Smart. Think Fast. Get Placed.</h1>
            <p className="text-xl text-gray-600 mb-8">
              Master Data Structures, Algorithms, and modern Prompt Engineering techniques. Get placement-ready with
              comprehensive interview preparation and AI integration skills.
            </p>
            <p className="text-lg text-gray-500 mb-8">
              This parallel track runs alongside our main programs, ensuring you're interview-ready with both technical
              depth and modern AI skills.
            </p>
          </div>
        </div>
      </section>

      {/* Program Structure */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              🧮 Parallel Track: DSA + Prompt Engineering
            </h2>
            <p className="text-xl text-gray-600">Runs alongside Full Stack 4.0 and AI Core 5.0</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {modules.map((module, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-lg px-4 py-2">
                      {module.module}
                    </Badge>
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
                        <CheckCircle className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What You'll Master</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {outcomes.map((outcome, index) => (
              <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                <CheckCircle className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                <span className="font-medium text-gray-900">{outcome}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-lg p-8 shadow-lg max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🎯 Interview Success Formula</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Code className="h-5 w-5 text-blue-600 mr-3" />
                    <span>200+ LeetCode Problems Solved</span>
                  </li>
                  <li className="flex items-center">
                    <Database className="h-5 w-5 text-blue-600 mr-3" />
                    <span>System Design Case Studies</span>
                  </li>
                  <li className="flex items-center">
                    <Award className="h-5 w-5 text-blue-600 mr-3" />
                    <span>AI-Powered Interview Prep</span>
                  </li>
                  <li className="flex items-center">
                    <Users className="h-5 w-5 text-blue-600 mr-3" />
                    <span>Mock Interview Sessions</span>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">📅 Duration</h4>
                  <p className="text-3xl font-bold text-blue-600 mb-2">15 Weeks</p>
                  <p className="text-gray-600">Parallel to main programs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Choose Your Learning Path</h2>
            <p className="text-xl text-gray-600">Flexible options to match your goals and budget</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pricingOptions.map((option, index) => (
              <Card key={index} className={`relative ${option.popular ? "border-2 border-blue-500" : ""}`}>
                {option.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{option.type}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-blue-600">{option.price}</span>
                    <span className="text-lg text-gray-500 line-through ml-2">{option.originalPrice}</span>
                  </div>
                  <p className="text-gray-600 mt-2">{option.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {option.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="space-y-3">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      <CreditCard className="mr-2 h-4 w-4" />
                      Enroll Now
                    </Button>
                    <Button variant="outline" className="w-full bg-transparent">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Consult with Experts
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg font-semibold text-gray-900 mb-6">
              Code Smart. Think Fast. Get Placed. That's the DSA way at Wrench Wise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Download className="mr-2 h-5 w-5" />
                Download Curriculum
              </Button>
              <Button size="lg" variant="outline">
                <ArrowRight className="mr-2 h-5 w-5" />
                Book a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppChat />
    </div>
  )
}
