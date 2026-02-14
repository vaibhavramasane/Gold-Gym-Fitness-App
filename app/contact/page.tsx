import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactHero } from "@/components/contact/hero"
import { ContactForm } from "@/components/contact/form"
import { ContactInfo } from "@/components/contact/info"

export default function ContactPage() {
  return (
    <main className="bg-neutral-900 overflow-hidden">
      <Navbar />
      <ContactHero />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        <ContactForm />
        <ContactInfo />
      </div>
      <Footer />
    </main>
  )
}
