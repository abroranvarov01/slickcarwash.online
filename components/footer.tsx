import { Droplet } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative z-10 bg-card/50 backdrop-blur-sm border-t border-border py-12 px-4">
      <div className="container mx-auto">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <h3 className="text-3xl font-extrabold">
            <span className="text-gradient">Slick</span>
            <span className="text-foreground">CarWash</span>
          </h3>
          <Droplet className="w-6 h-6 text-primary" />
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            About Us
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            Services
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            Contact
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            Terms
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            Privacy
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-muted-foreground text-sm">
          <p>© 2025 SlickCarWash.online — Shine Delivered to Your Door</p>
        </div>
      </div>
    </footer>
  )
}
