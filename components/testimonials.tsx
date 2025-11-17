"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Software Engineer at TCS",
    image: "/placeholder.svg?height=60&width=60",
    rating: 5,
    text: "WrenchWise transformed my career! The hands-on projects and industry mentorship helped me land my dream job in just 6 months.",
  },
  {
    name: "Rahul Kumar",
    role: "Design Engineer at Mahindra",
    image: "/placeholder.svg?height=60&width=60",
    rating: 5,
    text: "The mechanical engineering program is outstanding. Real industry tools and projects made me job-ready from day one.",
  },
  {
    name: "Sneha Patel",
    role: "Full Stack Developer at Infosys",
    image: "/placeholder.svg?height=60&width=60",
    rating: 5,
    text: "Best investment in my career! The MERN stack program with AI integration gave me an edge over other candidates.",
  },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Students Say</h2>
          <p className="text-xl text-gray-600">Success stories from our engineering community</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-0 shadow-sm">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-emerald-600 mb-4" />
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
