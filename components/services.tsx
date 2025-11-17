import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Wrench, Car, Zap, Shield, Gauge, Cog } from "lucide-react"

const services = [
  {
    icon: Wrench,
    title: "General Repairs",
    description: "Complete diagnostic and repair services for all makes and models",
  },
  {
    icon: Car,
    title: "Oil Changes",
    description: "Quick and professional oil change service with quality filters",
  },
  {
    icon: Zap,
    title: "Electrical Systems",
    description: "Expert diagnosis and repair of automotive electrical issues",
  },
  {
    icon: Shield,
    title: "Brake Service",
    description: "Comprehensive brake inspection, repair, and replacement services",
  },
  {
    icon: Gauge,
    title: "Engine Diagnostics",
    description: "Advanced computer diagnostics to identify engine problems",
  },
  {
    icon: Cog,
    title: "Transmission",
    description: "Transmission service, repair, and rebuilding by certified technicians",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From routine maintenance to complex repairs, we provide comprehensive automotive services to keep your
            vehicle running smoothly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <service.icon className="h-12 w-12 text-orange-600 mb-4 " />
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
