'use client'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Users, Award, Download, ArrowRight, CreditCard, MessageCircle } from "lucide-react"
import { WhatsAppChat } from "@/components/whatsapp-chat"

const phases = [
  {
    phase: "Phase 0",
    title: "Foundations of Full-Stack Development",
    duration: "Days 1–30",
    DSA:"",
    prompt:"",
    subheading:[{
                title:"Capstone",
                content:"Personal Blog Application"
                },
            
    ],
    topics: [
      "Introduction to Programming",
      "HTML5 & CSS3 Basics",
      "JavaScript Essentials",
      "Version Control (Git/GitHub)",
      "Responsive Web Design (Bootstrap)",
      "Introduction to Node.js",
      "Databases (MongoDB)",
      "Basic Deployment",
    ],
    capstone: "Personal Blog Application",
  },
  {
    phase: "Phase 1",
    title: "Advanced MERN Stack Development",
    duration: "Days 31–60",
    DSA:"Personal Blog Application",
    prompt:"",
    subheading:[
                {
                title:"Capstone",
                content:"Personal Blog Application"
                },
            
    ],
    topics: [
      "Advanced JavaScript",
      "React.js Basics",
      "Redux for State Management",
      "Authentication & Authorization",
      "Advanced Node.js & Express.js",
    ],
    capstone: "E-Commerce Application (with login, cart, and order features)",
  },
  {
    phase: "Phase 2",
    title: "AI/ML with Full Stack Integration",
    duration: "Days 61–90",
    DSA:"Sorting, Searching",
    prompt:"AI debugging, API optimization using prompts.",
    subheading:[
                {
                title:"Capstone",
                content:"Personal Blog Application"
                }, 
              
    ],
    topics: ["Python Basics for AI/ML", "Machine Learning Basics", "AI with TensorFlow", "Integrating AI with MERN"],
    capstone: "AI Chatbot for Customer Support",
  },
  {
    phase: "Phase 3",
    title: "Future Tech & Industry Alignment",
    duration: "Days 91–120",
    DSA:"Dynamic Programming, Graphs",
    prompt:"Deployment optimization and DevOps with AI prompts.",
    subheading:[
                {
                title:"Capstone",
                content:"Personal Blog Application"
                },
               ,
               
    ],
    topics: ["DevOps Basics", "Cloud Computing (AWS/GCP)", "Blockchain Basics", "Cybersecurity Essentials"],
    capstone: "IoT Dashboard for Smart Device Monitoring",
  },
]


const pricingOptions = [
  {
    type: "Full Program",
    price: "₹79,999",
    originalPrice: "₹99,999",
    description: "Complete 4-phase program with all capstone projects",
    features: ["All 4 Phases", "4 Capstone Projects", "Career Services", "Lifetime Access"],
    popular: true,
  },
  {
    type: "Individual Phase",
    price: "₹19,999",
    originalPrice: "₹24,999",
    description: `You can choose any single   phase based on your needs`,
    features: ["1 Phase Access", "Phase Capstone", "Community Access", "30-day Support"],
    popular: false,
  },
]

export default function FullStackPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-cyan-50 relative overflow-hidden ">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-cyan-100 text-cyan-800 mb-4">Full Stack 4.0 @ Wrench Wise</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">The Code. The Craft. The Career.</h1>
            <p className="text-xl text-gray-600 mb-8">
              From Frontend to Future-Tech. This isn't just full stack-it's Full Stack 4.0.
            </p>
            <p className="text-lg text-gray-500 mb-8">
              Welcome to the Full Stack 4.0 program-Wrench Wise's flagship course that blends MERN Stack expertise, AI
              Integration, and Future Tech readiness in a single, power-packed journey.
            </p>
          </div>
        </div>
      </section>

      {/* Program Structure */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Program Structure: 4 Phases of Mastery
            </h2>
          </div>

          <div className="space-y-8">
            {phases.map((phase, index) => (
              <Card key={index} className="hover:shadow-2xl transition-shadow ">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline" className="bg-emerald-500 text-white text-lg px-4 py-2 mx-auto">
                      {phase.phase}
                    </Badge>
                    <span className="text-sm text-gray-500 flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {phase.duration}
                    </span>
                  </div>
                  <CardTitle className="text-2xl text-center ">{phase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex-col align-evenly ">
                      <h4 className="font-semibold text-gray-900 mb-3">Topics Covered:</h4>
                      <ul className="space-y-0">
                        {phase.topics.map((topic, topicIndex) => (
                          <li key={topicIndex} className="flex space-evenly items-center text-gray-600">
                            <CheckCircle className="h-4 w-4 text-emerald-600 mr-2 flex-shrink-0" />
                            {topic}
                          </li>
                      ))}
                       
                      </ul>
                      {phase.DSA.length>=1?<div className="flex-col items-center bg-emerald-100 rounded shadow-lg  mt-5 p-0">
                         <div className="bg-emerald-50 p-4 rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                          
                         <h2 className="font-bold text-lg text-emerald-900 mb-3">DSA Topics:</h2>
                            <p className="text-emerald-800 font-medium">{phase.DSA}</p>
                            {phase.prompt.length>=1?
                            <div className="flex-col items-center py-4">
                          
                         <h2 className="font-bold text-lg text-emerald-900 mb-3">Prompt Engineering Topics:</h2>
                            <p className="text-emerald-800 font-medium">{phase.prompt}</p>
                         </div>:<div></div>}
                          </div>
                         </div>:<div></div>}
                        
                    
                    </div>
                    <div className="flex-col items-center h-100 p-6  rounded   ">
                      <div>
                        

                         <div  className="pb-4">
                          <div className="bg-emerald-200 p-4 rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                          
                         <h4 className="font-semibold text-gray-900 mb-3">Capstone Project</h4>
                            <p className="text-emerald-800 font-medium">{phase.capstone}</p>
                          </div>
                         </div>
                   
                          </div>
                      {/* <h4 className="font-semibold text-gray-900 mb-3">Capstone Project:</h4>
                      <div className="bg-emerald-50 p-4 rounded-lg">
                        <p className="text-emerald-800 font-medium">{phase.capstone}</p>
                      </div> */}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Outcomes of Full Stack 4.0</h2>
          </div>

          <div className="grid  justify-center gap-4   md:grid-cols-center-2   lg:grid-cols-3   ">
            <div className="flex   items-center  p-4 bg-white rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300  ">
                <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" />
                <span className="font-medium text-gray-900">Hands-on MERN Stack development</span>
              </div>
              <div className="flex   items-center  p-4 bg-white rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300  ">
                <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" />
                <span className="font-medium text-gray-900">AI-enhanced applications</span>
              </div>
              <div className="flex   items-center  p-4 bg-white rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300  ">
                <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" />
                <span className="font-medium text-gray-900">Real deployment experience (frontend + backend + AI)</span>
              </div>
          </div>
          <div className="flex-wrap gap-4  justify-center gap-4    md:flex   mt-5">
              <div className="flex   items-center  p-4 bg-white rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 mb-4 ">
                <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" />
                <span className="font-medium text-gray-900">Project-based GitHub portfolio</span>
              </div>
              <div className="flex   items-center  p-4 bg-white rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 mb-5  ">
                <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" />
                <span className="font-medium text-gray-900">Interview-readiness: DSA + Prompting + Full Stack fluency</span>
              </div>
            </div>
          {/* <div className="grid  justify-center gap-4   md:grid-cols-center-2   lg:grid-cols-3  flex  ">
            {outcomes.map((outcome, index) => (
              <div key={index} className="flex   items-center  p-4 bg-white rounded-lg hover:shadow-xl  ">
                <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" />
                <span className="font-medium text-gray-900">{outcome}</span>
              </div>
            ))}
            

          </div> */}

          <div className="mt-12 text-center">
            <div className="bg-white rounded-lg p-8 shadow-lg max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Program Details</h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-gray-400 mr-3" />
                  <div>
                    <div className="font-medium">Duration</div>
                    <div className="text-sm text-gray-600">120 Days</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-gray-400 mr-3" />
                  <div>
                    <div className="font-medium">Mode</div>
                    <div className="text-sm text-gray-600">Live Online + Mentorship</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-gray-400 mr-3" />
                  <div>
                    <div className="font-medium">Projects</div>
                    <div className="text-sm text-gray-600">4 Capstones + Mini Challenges</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-gray-400 mr-3" />
                  <div>
                    <div className="font-medium">Career Services</div>
                    <div className="text-sm text-gray-600">Resume, Mock Interviews, Job Referrals</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-grey-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Choose Your Learning Path</h2>
            <p className="text-xl text-gray-600">Flexible options to match your goals and budget</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pricingOptions.map((option, index) => (
              <Card key={index} className={`relative ${option.popular ? "border-2 border-emerald-500" : ""}`}>
                {option.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-emerald-500">
                    Most Popular
                  </Badge>
                  
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{option.type}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-emerald-600">{option.price}</span>
                    <span className="text-lg text-gray-500 line-through ml-2">{option.originalPrice}</span>
                  </div>
                  <p className="text-gray-600 mt-2">{option.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {option.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-emerald-600 mr-3" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="space-y-4">
                    <Link href="/contact">
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Consult with Experts
                    </Button>
                   </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Ready to unlock Full Stack 4.0?</p>
            <p className="text-lg font-semibold text-gray-900 mb-6">
              Code it. Build it. Ship it. That's the <span className="g1 ">Wrench</span> <span className="g2">Wise</span> way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700">
                <Download className="mr-2 h-5 w-5" />
                Download Curriculum
              </Button> */}
              <Link href="/contact">
              <Button size="lg" variant="outline">
                <ArrowRight className="mr-2 h-5 w-5" />
                Book a Demo
              </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppChat />
    </div>
  )
}
