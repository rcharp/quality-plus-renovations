import { Phone, MapPin, Clock, Instagram, Mail } from "lucide-react";
import logo from "@/assets/qpr-logo.png";

const Footer = () => (
  <footer className="bg-foreground text-card py-16">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
        {/* Brand */}
        <div className="space-y-4">
          <img src={logo} alt="Quality Plus Renovations Logo" className="w-auto" style={{ height: '150px' }} />
          <p className="text-sm opacity-60">Family-owned finish carpentry & home renovation specialists.</p>
        </div>

        {/* Business */}
        <div>
          <h4 className="font-heading font-semibold text-base uppercase tracking-wider mb-4 opacity-60">Business</h4>
          <nav className="space-y-3">
            <a href="/" className="block text-base opacity-80 hover:opacity-100 transition-opacity">Home</a>
            <a href="/#about" className="block text-base opacity-80 hover:opacity-100 transition-opacity">About Us</a>
            <a href="/#contact" className="block text-base opacity-80 hover:opacity-100 transition-opacity">Contact</a>
            <a href="/#gallery" className="block text-base opacity-80 hover:opacity-100 transition-opacity">Gallery</a>
            <a href="/review" className="block text-base opacity-80 hover:opacity-100 transition-opacity">Leave a Review</a>
          </nav>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-heading font-semibold text-base uppercase tracking-wider mb-4 opacity-60">Services</h4>
          <nav className="space-y-3">
            <a href="/services/finish-carpentry" className="block text-base opacity-80 hover:opacity-100 transition-opacity">Finish Carpentry</a>
            <a href="/services/built-ins" className="block text-base opacity-80 hover:opacity-100 transition-opacity">Built-Ins</a>
            <a href="/services/lvp-flooring" className="block text-base opacity-80 hover:opacity-100 transition-opacity">LVP Flooring</a>
            <a href="/services/interior-painting" className="block text-base opacity-80 hover:opacity-100 transition-opacity">Interior Painting</a>
            <a href="/services/drywall-work" className="block text-base opacity-80 hover:opacity-100 transition-opacity">Drywall Work</a>
            <a href="/get-your-discount" className="block text-base opacity-80 hover:opacity-100 transition-opacity">Get 10% Off</a>
          </nav>
        </div>

        {/* Service Areas */}
        <div>
          <h4 className="font-heading font-semibold text-base uppercase tracking-wider mb-4 opacity-60">Service Areas</h4>
          <nav className="space-y-3">
            <a href="/service-areas/bradenton-fl" className="block text-base opacity-80 hover:opacity-100 transition-opacity">Bradenton, FL</a>
            <a href="/service-areas/sarasota-fl" className="block text-base opacity-80 hover:opacity-100 transition-opacity">Sarasota, FL</a>
            <a href="/service-areas/lakewood-ranch-fl" className="block text-base opacity-80 hover:opacity-100 transition-opacity">Lakewood Ranch, FL</a>
            <a href="/service-areas/manatee-county-fl" className="block text-base opacity-80 hover:opacity-100 transition-opacity">Manatee County, FL</a>
          </nav>
        </div>

        {/* Info */}
        <div className="space-y-4">
          <h4 className="font-heading font-semibold text-base uppercase tracking-wider mb-4 opacity-60">Contact</h4>
          <div className="flex items-start gap-3">
            <Phone className="w-4 h-4 mt-0.5 opacity-60" />
            <a href="tel:+19414059695" className="text-base opacity-80 hover:opacity-100 transition-opacity">(941) 405-9695</a>
          </div>
          <div className="flex items-start gap-3">
            <Mail className="w-4 h-4 mt-0.5 opacity-60" />
            <a href="mailto:rs4man@gmail.com" className="text-base opacity-80 hover:opacity-100 transition-opacity break-all">rs4man@gmail.com</a>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 mt-0.5 opacity-60" />
            <span className="text-base opacity-80">14254 59th Cir E, Bradenton, FL 34211</span>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="w-4 h-4 mt-0.5 opacity-60" />
            <span className="text-base opacity-80">Mon–Fri 8am–5pm<br />Sat 8am–12pm<br />Sun Closed</span>
          </div>
          <div className="flex items-start gap-3">
            <Instagram className="w-4 h-4 mt-0.5 opacity-60" />
            <a href="https://www.instagram.com/qualitypls22?igsh=MWZhYnY5amxpYzRsOQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-base opacity-80 hover:opacity-100 transition-opacity">Instagram</a>
          </div>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-card/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-base opacity-60">
          © 2026 Quality Plus Renovations. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
