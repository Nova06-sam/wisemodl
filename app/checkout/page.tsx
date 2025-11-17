"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, CreditCard, Shield, Lock, Zap, Gift, Timer, ArrowLeft } from "lucide-react"
import Link from "next/link"

const courses = [
  {
    id: "full-stack",
    title: "Full Stack Development Program",
    originalPrice: 79999,
    salePrice: 49999,
    discount: 37,
    duration: "22 weeks",
    features: ["MERN Stack Mastery", "AI Integration", "4 Capstone Projects", "Career Services", "Lifetime Access"],
  },
  {
    id: "ai-core",
    title: "AI Core 5.0 Program",
    originalPrice: 89999,
    salePrice: 59999,
    discount: 33,
    duration: "20 weeks",
    features: ["ML/DL Mastery", "CV/NLP Tracks", "Cloud Deployment", "Industry Projects", "Specialization"],
  },
  {
    id: "dsa",
    title: "DSA & Prompt Engineering",
    originalPrice: 49999,
    salePrice: 29999,
    discount: 40,
    duration: "15 weeks",
    features: ["200+ Problems", "System Design", "Mock Interviews", "AI Integration", "Placement Prep"],
  },
  {
    id: "python",
    title: "Python Programming Foundations",
    originalPrice: 39999,
    salePrice: 24999,
    discount: 37,
    duration: "13 weeks",
    features: ["Python Basics to Advanced", "Django Framework", "Data Science", "Web Development", "Projects"],
  },
]

export default function CheckoutPage() {
  const [selectedCourse, setSelectedCourse] = useState(courses[0])
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    experience: "",
  })
  const [isProcessing, setIsProcessing] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000))

    alert("Payment successful! Check your email for access details.")
    setIsProcessing(false)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-8">
            <Link
              href="/domains/cse"
              className="inline-flex items-center text-emerald-600 hover:text-emerald-700 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Programs
            </Link>
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <Badge className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white mb-4 px-6 py-2 text-lg animate-pulse">
              <Gift className="mr-2 h-5 w-5" />
              Limited Time Offer
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Secure Your Engineering Future</h1>
            <p className="text-xl text-gray-600">
              Join thousands of successful engineers who transformed their careers with Wrench Wise
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Course Selection */}
            <div className="lg:col-span-2">
              <Card className="shadow-xl mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl">Choose Your Program</CardTitle>
                  <p className="text-gray-600">Select the program that best fits your career goals</p>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {courses.map((course) => (
                      <div
                        key={course.id}
                        className={`border-2 rounded-lg p-4 cursor-pointer transition-all duration-300 ${
                          selectedCourse.id === course.id
                            ? "border-emerald-500 bg-emerald-50"
                            : "border-gray-200 hover:border-emerald-300"
                        }`}
                        onClick={() => setSelectedCourse(course)}
                      >
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="font-semibold text-gray-900">{course.title}</h3>
                          <Badge className="bg-red-100 text-red-800">{course.discount}% OFF</Badge>
                        </div>
                        <div className="text-2xl font-bold text-emerald-600 mb-2">
                          ₹{course.salePrice.toLocaleString()}
                        </div>
                        <div className="text-gray-500 line-through text-sm mb-3">
                          ₹{course.originalPrice.toLocaleString()}
                        </div>
                        <div className="text-sm text-gray-600 mb-3">{course.duration}</div>
                        <div className="space-y-1">
                          {course.features.slice(0, 3).map((feature, index) => (
                            <div key={index} className="flex items-center text-xs text-gray-600">
                              <CheckCircle className="h-3 w-3 text-emerald-500 mr-1 flex-shrink-0" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Checkout Form */}
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <Lock className="mr-2 h-6 w-6 text-green-600" />
                    Secure Checkout
                  </CardTitle>
                  <p className="text-gray-600">Your information is protected with 256-bit SSL encryption</p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input
                            id="firstName"
                            name="firstName"
                            type="text"
                            required
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input
                            id="lastName"
                            name="lastName"
                            type="text"
                            required
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className="mt-1"
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4 mt-4">
                        <div>
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="mt-1"
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4 mt-4">
                        <div>
                          <Label htmlFor="country">Country *</Label>
                          <select
                            id="country"
                            name="country"
                            required
                            value={formData.country}
                            onChange={handleInputChange}
                            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                          >
                            <option value="">Select Country</option>
                            <option value="IN">India</option>
                            <option value="US">United States</option>
                            <option value="UK">United Kingdom</option>
                            <option value="CA">Canada</option>
                            <option value="AU">Australia</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        <div>
                          <Label htmlFor="experience">Programming Experience</Label>
                          <select
                            id="experience"
                            name="experience"
                            value={formData.experience}
                            onChange={handleInputChange}
                            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                          >
                            <option value="">Select Level</option>
                            <option value="beginner">Complete Beginner</option>
                            <option value="some">Some Experience</option>
                            <option value="intermediate">Intermediate</option>
                            <option value="advanced">Advanced</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Payment Information */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Information</h3>
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                        <div className="flex items-center text-blue-700">
                          <CreditCard className="mr-2 h-5 w-5" />
                          <span className="font-semibold">Secure Payment Processing</span>
                        </div>
                        <p className="text-blue-600 text-sm mt-1">
                          We use industry-standard encryption to protect your payment information
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="cardNumber">Card Number *</Label>
                          <Input
                            id="cardNumber"
                            type="text"
                            placeholder="1234 5678 9012 3456"
                            required
                            className="mt-1"
                          />
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                          <div className="col-span-2">
                            <Label htmlFor="expiry">Expiry Date *</Label>
                            <Input id="expiry" type="text" placeholder="MM/YY" required className="mt-1" />
                          </div>
                          <div>
                            <Label htmlFor="cvv">CVV *</Label>
                            <Input id="cvv" type="text" placeholder="123" required className="mt-1" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-6">
                      <Button
                        type="submit"
                        disabled={isProcessing}
                        className="w-full bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-xl"
                      >
                        {isProcessing ? (
                          <div className="flex items-center">
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                            Processing Payment...
                          </div>
                        ) : (
                          <div className="flex items-center">
                            <Zap className="mr-2 h-6 w-6" />
                            Complete Purchase - ₹{selectedCourse.salePrice.toLocaleString()}
                          </div>
                        )}
                      </Button>

                      <div className="text-center mt-4 text-sm text-gray-600">
                        <div className="flex items-center justify-center space-x-4">
                          <div className="flex items-center">
                            <Shield className="h-4 w-4 text-green-600 mr-1" />
                            <span>SSL Secured</span>
                          </div>
                          <div className="flex items-center">
                            <Lock className="h-4 w-4 text-green-600 mr-1" />
                            <span>256-bit Encryption</span>
                          </div>
                        </div>
                        <p className="mt-2">30-day money-back guarantee • Instant access after payment</p>
                      </div>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-8 border-2 border-emerald-200 shadow-xl">
                <CardHeader className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white">
                  <CardTitle className="text-2xl text-center">Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{selectedCourse.title}</h3>
                      <p className="text-sm text-gray-600">{selectedCourse.duration}</p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span>Original Price</span>
                        <span className="text-gray-500 line-through">
                          ₹{selectedCourse.originalPrice.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-2xl font-bold text-emerald-600">
                        <span>Special Price</span>
                        <span>₹{selectedCourse.salePrice.toLocaleString()}</span>
                      </div>
                      <div className="text-center text-green-600 font-semibold">
                        You Save: ₹{(selectedCourse.originalPrice - selectedCourse.salePrice).toLocaleString()} (
                        {selectedCourse.discount}% OFF)
                      </div>
                    </div>
                  </div>

                  {/* What's Included */}
                  <div className="mt-6">
                    <h3 className="font-semibold text-gray-900 mb-3">What's Included:</h3>
                    <div className="space-y-2">
                      {selectedCourse.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Urgency */}
                  <div className="mt-6 bg-red-50 border border-red-200 rounded-lg p-4">
                    <div className="flex items-center text-red-600 mb-2">
                      <Timer className="mr-2 h-5 w-5" />
                      <span className="font-semibold">Limited Time Offer!</span>
                    </div>
                    <div className="text-red-700 text-sm">Prices increase in 48 hours</div>
                  </div>

                  {/* Guarantee */}
                  <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-center text-green-700">
                      <Shield className="mr-2 h-5 w-5" />
                      <span className="font-semibold">30-Day Money-Back Guarantee</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
