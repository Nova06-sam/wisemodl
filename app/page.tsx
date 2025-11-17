import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { FeaturedDomains } from "@/components/featured-domains"
import { WhyChoose } from "@/components/why-choose"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { WhatsAppChat } from "@/components/whatsapp-chat"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <div id="about">
        <About />
      </div>
      <FeaturedDomains />
      <WhyChoose />
      <CTA />
      <Footer />
      <WhatsAppChat />
    </div>
  )
}
