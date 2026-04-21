import { Phone, MapPin, Clock, Facebook } from "lucide-react";
import logo from "@/assets/bush-boys-logo.png";

const Footer = () => (
  <footer className="text-card py-16" style={{ backgroundColor: "hsl(225, 55%, 14%)" }}>
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
        {/* Brand */}
        <div className="space-y-4">
          <img src={logo} alt="Bush Boys Hauling Logo" className="h-auto rounded-lg" style={{ width: '240px' }} />
          <p className="text-sm opacity-60">Your trusted local junk removal experts.</p>
        </div>

        {/* Business */}
        <div>
          <h4 className="font-heading font-semibold text-base uppercase tracking-wider mb-4 opacity-60">Business</h4>
          <nav className="space-y-3">
            <a href="/" className="block text-base opacity-80 hover:opacity-100 transition-opacity">Home</a>
            <a href="/about" className="block text-base opacity-80 hover:opacity-100 transition-opacity">About Us</a>
            <a href="/contact" className="block text-base opacity-80 hover:opacity-100 transition-opacity">Contact</a>
            <a href="/gallery" className="block text-base opacity-80 hover:opacity-100 transition-opacity">Gallery</a>
            <a href="/tips" className="block text-base opacity-80 hover:opacity-100 transition-opacity">Blog</a>
          </nav>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-heading font-semibold text-base uppercase tracking-wider mb-4 opacity-60">Services</h4>
          <nav className="space-y-3">
            <a href="/services/ac-repair" className="block text-base opacity-80 hover:opacity-100 transition-opacity">AC Repair</a>
            <a href="/services/ac-installation" className="block text-base opacity-80 hover:opacity-100 transition-opacity">AC Installation</a>
            <a href="/services/ac-maintenance" className="block text-base opacity-80 hover:opacity-100 transition-opacity">AC Maintenance</a>
            <a href="/services/duct-cleaning" className="block text-base opacity-80 hover:opacity-100 transition-opacity">Duct Cleaning</a>
          </nav>
        </div>

        {/* Service Areas */}
        <div>
          <h4 className="font-heading font-semibold text-base uppercase tracking-wider mb-4 opacity-60">Service Areas</h4>
          <nav className="space-y-3">
            <a href="#" className="block text-base opacity-80 hover:opacity-100 transition-opacity">Garfield Heights, OH</a>
            <a href="#" className="block text-base opacity-80 hover:opacity-100 transition-opacity">Cleveland, OH</a>
            <a href="#" className="block text-base opacity-80 hover:opacity-100 transition-opacity">Maple Heights, OH</a>
            <a href="#" className="block text-base opacity-80 hover:opacity-100 transition-opacity">Parma, OH</a>
            <a href="#" className="block text-base opacity-80 hover:opacity-100 transition-opacity">Brooklyn Heights, OH</a>
          </nav>
        </div>

        {/* Info */}
        <div className="space-y-4">
          <h4 className="font-heading font-semibold text-base uppercase tracking-wider mb-4 opacity-60">Contact</h4>
          <div className="flex items-start gap-3">
            <Phone className="w-4 h-4 mt-0.5 opacity-60" />
            <a href="tel:+12162709992" className="text-base opacity-80 hover:opacity-100 transition-opacity">(216) 270-9992</a>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 mt-0.5 opacity-60" />
            <span className="text-base opacity-80">Garfield Heights, OH</span>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="w-4 h-4 mt-0.5 opacity-60" />
            <span className="text-base opacity-80">Open 24 hours!</span>
          </div>
          <div className="flex items-start gap-3">
            <Facebook className="w-4 h-4 mt-0.5 opacity-60" />
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-base opacity-80 hover:opacity-100 transition-opacity">Facebook</a>
          </div>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-card/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-base opacity-60">
          © 2026 Bush Boys Hauling. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
