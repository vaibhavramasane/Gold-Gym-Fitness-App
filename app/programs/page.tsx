import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProgramsHero } from "@/components/programs/hero"
import { ProgramsGrid } from "@/components/programs/grid"
import { ProgramsGallery } from "@/components/programs/gallery"

export default function ProgramsPage() {
  return (
    <main className="bg-neutral-900 overflow-hidden">
      <Navbar />
      <ProgramsHero />
      <ProgramsGrid />
      <ProgramsGallery />
      <Footer />
    </main>
  )
}
