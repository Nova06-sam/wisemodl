"use client"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, Clock, Send } from "lucide-react"
import { WhatsAppChat } from "@/components/whatsapp-chat"

export const metadata = {
  title: "Contact Us - Wrench Wise | Get in Touch for Engineering Courses",
  description:
    "Contact Wrench Wise for inquiries about our Full Stack Development, AI/ML, and Mechanical Engineering courses. Get expert guidance and start your engineering career today.",
}

export default function ContactPage() {
  return (
    
    <div className="min-h-screen bg-white">
      <Header />

       <section className="py-20 bg-gradient-to-br from-emerald-50 to-cyan-50 relative overflow-hidden ">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up">Get in Touch</h1>
            <p className="text-xl text-gray-600 animate-fade-in-up">
              Ready to start your engineering journey? We're here to help you choose the right path and answer all your
              questions.
            </p>
          </div>
        </div>
        </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Let's Start a Conversation</h2>
              <Card>
                <CardHeader>
                  <CardTitle>Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input id="firstName" type="text" required className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input id="lastName" type="text" required className="mt-1" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" required className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="interest">Area of Interest</Label>
                      <select id="interest" className="w-full mt-1 p-2 border border-gray-300 rounded-md">
                        <option value="">Select your interest</option>
                        <option value="full-stack">Full Stack Development</option>
                        <option value="ai-core">AI Core 5.0</option>
                        <option value="dsa">DSA & Prompt Engineering</option>
                        <option value="mechanical">Mechanical Engineering</option>
                        <option value="webinar">UI/UX Webinar</option>
                        <option value="general">General Inquiry</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        rows={4}
                        placeholder="Tell us about your goals and how we can help..."
                        className="mt-1"
                      />
                    </div>
                    <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-emerald-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Email Us</h3>
                      <p className="text-gray-600">hello@wrench-wise.com</p>
                      <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-emerald-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Call or WhatsApp</h3>
                      <p className="text-gray-600">+91 7550077725</p>
                      <p className="text-sm text-gray-500">Available Mon-Sat, 9 AM - 7 PM IST</p>
                    </div>
                  </div>
                  {/* <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-emerald-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Office Hours</h3>
                      <p className="text-gray-600">Monday - Saturday: 9:00 AM - 7:00 PM IST</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div> */}
                </div>
              </div>

              <Card className="bg-gradient-to-br from-emerald-50 to-cyan-50">
                <CardHeader>
                  <CardTitle>Book a Free Consultation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Not sure which program is right for you? Book a free 30-minute consultation with our career
                    counselors.
                  </p>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700" asChild>
                    <a href="https://wa.me/917358102193?text=Hi! I'd like to book a free consultation to discuss my career goals and course options.">
                      Book Free Consultation
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900">What are the payment options?</h4>
                      <p className="text-sm text-gray-600">
                        We offer flexible payment plans including EMI options and full payment discounts.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Do you provide placement assistance?</h4>
                      <p className="text-sm text-gray-600">
                        Yes, we provide comprehensive career services including resume building, interview prep, and job
                        referrals.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Can I switch between programs?</h4>
                      <p className="text-sm text-gray-600">
                        Yes, we offer flexibility to switch or upgrade your program based on your learning progress and
                        career goals.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppChat />
    </div>
  )
}
