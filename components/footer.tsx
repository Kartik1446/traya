import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, Twitter, Linkedin, Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <span className="text-xl font-bold text-foreground neon-text">TRAYA</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Revolutionizing Indian railways with indigenous precision technology, AI-driven solutions, and futuristic
              design for a better tomorrow.
            </p>
            <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground glow-effect">
              Join Us
            </Button>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-secondary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/innovation" className="text-muted-foreground hover:text-secondary transition-colors">
                  Innovation
                </Link>
              </li>
              <li>
                <Link href="/impact" className="text-muted-foreground hover:text-secondary transition-colors">
                  Impact
                </Link>
              </li>
              <li>
                <Link href="/map" className="text-muted-foreground hover:text-secondary transition-colors">
                  Railways Map
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Connect</h3>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-secondary">
                <Mail className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-secondary">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-secondary">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-secondary">
                <Github className="h-5 w-5" />
              </Button>
            </div>
            <div className="mt-4">
              <p className="text-sm text-muted-foreground">Email: contact@traya.in</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary/20 mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Traya. All rights reserved. Built with indigenous innovation.
          </p>
        </div>
      </div>
    </footer>
  )
}
