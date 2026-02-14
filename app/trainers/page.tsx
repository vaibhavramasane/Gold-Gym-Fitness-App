import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { TrainersHero } from "@/components/trainers/hero"
import { TrainersGrid } from "@/components/trainers/grid"
import { TrainersCTA } from "@/components/trainers/cta"

export default function TrainersPage() {
  return (
    <main className="bg-neutral-900 overflow-hidden">
      <Navbar />
      <TrainersHero />
      <TrainersGrid />
      <TrainersCTA />
      <Footer />
    </main>
  )
}
