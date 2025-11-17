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
  Monitor,
  Calendar,
  Target,
  Award,
  ArrowRight,
  Play,
  FileText,
  MessageCircle,
  HelpCircle,
  Share2,
  HandHeart,
  Video,
  Briefcase,
  Brain,
  GraduationCap,
} from "lucide-react"

export default function BootcampPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="bg-purple-100 text-purple-800 px-4 py-2 text-sm font-medium mb-6">
              <span className="g1 ">Wrench</span> <span className="g2">Wise</span> UI/UX Bootcamp – Learner Playbook
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Designing Next-Gen Interfaces</h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              UI/UX for AI & Future Tech Products
            </p>

            <div className="grid md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
              <div className="flex items-center justify-center space-x-2">
                <Clock className="h-5 w-5 text-purple-600" />
                <span className="text-gray-700">Duration: 15 Days</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Monitor className="h-5 w-5 text-purple-600" />
                <span className="text-gray-700">Live Online</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Calendar className="h-5 w-5 text-purple-600" />
                <span className="text-gray-700">1.5 Hours/Day</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Users className="h-5 w-5 text-purple-600" />
                <span className="text-gray-700">Hands-on & Interactive</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 mb-8 max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Program Details</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
                <div>
                  <strong>Start Date:</strong> [Add date here]
                </div>
                <div>
                  <strong>Mode:</strong> Hands-on & Interactive
                </div>
                <div className="md:col-span-2">
                  <strong>Community Access:</strong> Slack/Discord Group
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg">
                Enroll Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-4 text-lg bg-transparent"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Preview
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Program Objectives */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Program Objectives</h2>
            <p className="text-xl text-gray-600">This bootcamp will help you:</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
              <p className="text-gray-700 text-lg">Learn the end-to-end UX process from idea to prototype</p>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
              <p className="text-gray-700 text-lg">Design user-first AI or SaaS interfaces using industry tools</p>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
              <p className="text-gray-700 text-lg">Build a Figma prototype of a real-world application</p>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
              <p className="text-gray-700 text-lg">Get ready to transition into product development (Full Stack 4.0)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Prerequisites */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Prerequisites to Join</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-purple-600 text-white">
                      <tr>
                        <th className="px-6 py-4 text-left font-semibold">Area</th>
                        <th className="px-6 py-4 text-left font-semibold">Requirement</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="px-6 py-4 font-medium text-gray-900">Tech Skills</td>
                        <td className="px-6 py-4 text-gray-700">No coding required. Basic computer usage is enough.</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-6 py-4 font-medium text-gray-900">Design Knowledge</td>
                        <td className="px-6 py-4 text-gray-700">
                          No prior UI/UX experience needed. We'll start from scratch.
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-6 py-4 font-medium text-gray-900">Hardware</td>
                        <td className="px-6 py-4 text-gray-700">Laptop/Desktop with stable internet</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-6 py-4 font-medium text-gray-900">Software/Accounts</td>
                        <td className="px-6 py-4 text-gray-700">
                          - Figma (Free account)
                          <br />- Google account (for Docs/Sheets)
                          <br />- Slack/Discord (for community access)
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-6 py-4 font-medium text-gray-900">Commitment</td>
                        <td className="px-6 py-4 text-gray-700">
                          1.5 hours daily for sessions + 30 mins self-work (optional)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tools You'll Be Using</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-blue-600 text-white">
                      <tr>
                        <th className="px-6 py-4 text-left font-semibold">Tool</th>
                        <th className="px-6 py-4 text-left font-semibold">Purpose</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="px-6 py-4 font-medium text-gray-900">Figma</td>
                        <td className="px-6 py-4 text-gray-700">UI design, wireframing, prototyping</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-6 py-4 font-medium text-gray-900">Miro / Whimsical (optional)</td>
                        <td className="px-6 py-4 text-gray-700">Brainstorming, journey mapping</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-6 py-4 font-medium text-gray-900">Google Docs/Slides</td>
                        <td className="px-6 py-4 text-gray-700">Worksheets, presentations</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-6 py-4 font-medium text-gray-900">Slack/Discord</td>
                        <td className="px-6 py-4 text-gray-700">Community, updates, peer feedback</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Daily Routine */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Daily Routine</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-green-600 text-white">
                      <tr>
                        <th className="px-6 py-4 text-left font-semibold">Time</th>
                        <th className="px-6 py-4 text-left font-semibold">What Happens</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="px-6 py-4 font-medium text-gray-900">Session Start</td>
                        <td className="px-6 py-4 text-gray-700">5–10 mins: Recap + Concept Introduction</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-6 py-4 font-medium text-gray-900">Mid-Session</td>
                        <td className="px-6 py-4 text-gray-700">30 mins: Hands-on demo (in Figma or activity)</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-6 py-4 font-medium text-gray-900">End of Session</td>
                        <td className="px-6 py-4 text-gray-700">20–30 mins: Task briefing + Q&A</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-6 py-4 font-medium text-gray-900">Post-Session</td>
                        <td className="px-6 py-4 text-gray-700">
                          Optional: Complete activity, share in community group
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Learning by Doing */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Learning by Doing</h2>
            <p className="text-xl text-gray-600">Every session comes with:</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="shadow-lg hover:shadow-xl transition-shadow text-center">
              <CardContent className="p-6">
                <Target className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg text-gray-900 mb-2">A mini-task or challenge</h3>
              </CardContent>
            </Card>
            <Card className="shadow-lg hover:shadow-xl transition-shadow text-center">
              <CardContent className="p-6">
                <FileText className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Templates or worksheets</h3>
              </CardContent>
            </Card>
            <Card className="shadow-lg hover:shadow-xl transition-shadow text-center">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Peer Review/Feedback</h3>
                <p className="text-gray-600 text-sm">(Mid & Final Week)</p>
              </CardContent>
            </Card>
            <Card className="shadow-lg hover:shadow-xl transition-shadow text-center">
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Live Showcase Day</h3>
                <p className="text-gray-600 text-sm">(Final Presentation)</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Project Tracks */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Project Tracks You Can Choose</h2>
            <p className="text-xl text-gray-600">Pick a track based on your interest from Day 3:</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                <CardTitle className="text-2xl">Track A: AI Product</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-600 mb-2">
                      <strong>Example:</strong> AI Study Assistant, Resume Builder
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700">
                      <strong>Focus:</strong> Conversational UI, transparency, trust
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
                <CardTitle className="text-2xl">Track B: Non-AI SaaS</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-600 mb-2">
                      <strong>Example:</strong> Budget Tracker, Task Manager
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-700">
                      <strong>Focus:</strong> Usability, dashboard design
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What You'll Get by the End */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What You'll Get by the End</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-orange-600 text-white">
                      <tr>
                        <th className="px-6 py-4 text-left font-semibold">Outcome</th>
                        <th className="px-6 py-4 text-left font-semibold">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="px-6 py-4 font-medium text-gray-900">Portfolio-Ready Project</td>
                        <td className="px-6 py-4 text-gray-700">A working Figma prototype (AI/SaaS)</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-6 py-4 font-medium text-gray-900">Dev-Handoff Ready Files</td>
                        <td className="px-6 py-4 text-gray-700">Annotated UI with assets for developers</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-6 py-4 font-medium text-gray-900">UX Toolkit</td>
                        <td className="px-6 py-4 text-gray-700">Templates: Persona, Journey Map, Audit Sheet</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-6 py-4 font-medium text-gray-900">Certificate</td>
                        <td className="px-6 py-4 text-gray-700">Wrench Wise UI/UX Bootcamp Certificate</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-6 py-4 font-medium text-gray-900">Progression Path</td>
                        <td className="px-6 py-4 text-gray-700">Access to Full Stack 4.0 Program Preview</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Guidelines */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Community Guidelines</h2>
            <p className="text-xl text-gray-600">To make the most of this program:</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <MessageCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Participate actively in the community</h3>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <Clock className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Be punctual</h3>
                <p className="text-gray-600 text-sm">live sessions are highly interactive</p>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <HelpCircle className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Ask questions</h3>
                <p className="text-gray-600 text-sm">no question is too basic</p>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <Share2 className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Share your work</h3>
                <p className="text-gray-600 text-sm">feedback helps everyone grow</p>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow md:col-span-2 lg:col-span-2">
              <CardContent className="p-6 text-center">
                <HandHeart className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Help others</h3>
                <p className="text-gray-600 text-sm">it's how design teams work in the real world</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Bonus Resources */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Bonus Resources</h2>
            <Badge className="bg-orange-100 text-orange-800 px-4 py-2 text-sm font-medium">Optional</Badge>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <Video className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Recordings</h3>
                <p className="text-gray-600">Access for 30 days post bootcamp</p>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <Briefcase className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Career Tips</h3>
                <p className="text-gray-600">Portfolio building + UX job landscape</p>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <Brain className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Webinars</h3>
                <p className="text-gray-600">"How to transition from design to development"</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What's Next */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What's Next?</h2>
            <p className="text-xl text-gray-600 mb-8">
              After 15 days, you'll be ready to turn your designs into real applications.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              You can seamlessly continue your journey with our flagship program:
            </p>
          </div>

          <Card className="max-w-2xl mx-auto shadow-xl">
            <CardHeader className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center">
              <div className="flex items-center justify-center mb-2">
                <GraduationCap className="h-8 w-8 mr-2" />
              </div>
              <CardTitle className="text-2xl">Full Stack 4.0: Code the Products You Just Designed</CardTitle>
            </CardHeader>
            <CardContent className="p-8 text-center">
              <p className="text-gray-600 mb-6 text-lg">Includes AI, DevOps, Cloud, Cybersecurity & more!</p>
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg">
                Learn More About Full Stack 4.0
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Design the Future?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our 15-day intensive bootcamp and master UI/UX design for AI & future tech products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg">
              Enroll Now - Limited Seats
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg bg-transparent"
            >
              Download Curriculum
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
