import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/sections/hero"
import { AboutSection } from "@/components/sections/about"
import { ProgramsSection } from "@/components/sections/programs"
import { TrainersSection } from "@/components/sections/trainers"
import { PricingSection } from "@/components/sections/pricing"
import { TestimonialsSection } from "@/components/sections/testimonials"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-neutral-900 overflow-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <TrainersSection />
      <PricingSection />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}
