import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { JoinHero } from "@/components/join/hero"
import { JoinForm } from "@/components/join/form"
import { JoinBenefits } from "@/components/join/benefits"

export default function JoinPage() {
  return (
    <main className="bg-neutral-900 overflow-hidden"> 
      <Navbar />
      <JoinHero />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        <JoinForm />
        <JoinBenefits />
      </div>
      <Footer />
    </main>
  )
}
