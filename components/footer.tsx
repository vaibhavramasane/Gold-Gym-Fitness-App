import Link from "next/link"
import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-neutral-900 to-neutral-950 border-t border-gold/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-gold to-gold-dark rounded-lg flex items-center justify-center">
                <span className="text-neutral-900 font-bebas text-lg font-bold">G</span>
              </div>
              <span className="text-lg font-bebas tracking-widest text-gold">GOLDGYM</span>
            </div>
            <p className="text-neutral-400 text-sm">Transform your body. Elevate your strength.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gold font-bebas text-lg mb-4">QUICK LINKS</h3>
            <ul className="space-y-2">
              {["Home", "Programs", "Trainers", "Pricing"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-neutral-400 hover:text-gold transition-colors text-sm">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-gold font-bebas text-lg mb-4">CONTACT</h3>
            <p className="text-neutral-400 text-sm mb-2">imadol,lalitpur</p>
            <p className="text-neutral-400 text-sm mb-2">Kathmandu, Nepal</p>
            <p className="text-neutral-400 text-sm">+977 9876543210</p>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-gold font-bebas text-lg mb-4">FOLLOW US</h3>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-neutral-800 hover:bg-gold hover:text-neutral-900 flex items-center justify-center transition-all duration-300 text-gold hover:shadow-lg hover:shadow-gold/50"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gold/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-500 text-sm">© 2025 GoldGym. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="text-neutral-500 hover:text-gold text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-neutral-500 hover:text-gold text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
