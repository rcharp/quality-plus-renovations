import { useState } from "react";
import { Phone, Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useQuoteModal } from "./QuoteModal";
import logo from "@/assets/qpr-logo.png";
const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    children: [
      { label: "Finish Carpentry", href: "/services/finish-carpentry" },
      { label: "Built-Ins", href: "/services/built-ins" },
      { label: "Trim Work", href: "/services/trim-work" },
      { label: "Faux Beams", href: "/services/faux-beams" },
      { label: "Coffered Ceilings", href: "/services/coffered-ceilings" },
      { label: "Custom Barn Doors", href: "/services/custom-barn-doors" },
      { label: "Interior Painting", href: "/services/interior-painting" },
      { label: "Exterior Painting", href: "/services/exterior-painting" },
      { label: "LVP Flooring", href: "/services/lvp-flooring" },
      { label: "Laminate Flooring", href: "/services/laminate-flooring" },
      { label: "Glue Down Flooring", href: "/services/glue-down-flooring" },
      { label: "Drywall Work", href: "/services/drywall-work" },
      { label: "Drywall Repair", href: "/services/drywall-repair" },
    ],
  },
  {
    label: "Service Areas",
    children: [
      { label: "Bradenton, FL", href: "/service-areas/bradenton-fl" },
      { label: "Sarasota, FL", href: "/service-areas/sarasota-fl" },
      { label: "Lakewood Ranch, FL", href: "/service-areas/lakewood-ranch-fl" },
      { label: "Manatee County, FL", href: "/service-areas/manatee-county-fl" },
    ],
  },
  { label: "Gallery", href: "/gallery" },
  {
    label: "Contact",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Get in Contact", href: "/contact" },
      { label: "Blog", href: "/blog" },
    ],
  },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const { openQuoteModal } = useQuoteModal();

  return (
    <header id="main-navbar" className="absolute top-0 left-0 right-0 z-50 max-w-[100vw]">
      <div className="container mx-auto flex flex-col items-center gap-3 lg:flex-row lg:items-center lg:justify-between lg:gap-0 py-4 px-4 lg:px-8 max-w-[100vw]">
        {/* Logo */}
        <a href="/" className="flex items-center justify-center shrink-0 lg:mr-4">
          <img
            src={logo}
            alt="Quality Plus Renovations Logo"
            className="h-[140px] w-auto lg:h-[250px]"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center gap-1 px-4 py-2 text-base font-medium text-white hover:text-white/80 transition-colors rounded-lg">
                  {link.label}
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
                <AnimatePresence>
                  {openDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-1 z-50 rounded-xl shadow-lg border border-white/10 py-2 min-w-[200px]"
                      style={{ backgroundColor: "rgba(0, 0, 0, 0.85)" }}
                    >
                      {link.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-2.5 text-base text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                        >
                          {child.label}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-base font-medium text-white hover:text-white/80 transition-colors rounded-lg"
              >
                {link.label}
              </a>
            )
          )}
        </nav>

        {/* CTA - always visible */}
        <div className="flex items-center justify-center w-full lg:w-auto lg:flex-none min-w-0">
          <div className="flex items-center justify-center gap-3 flex-1 lg:flex-none lg:justify-end">
            <a
              id="nav-phone-btn"
              href="tel:+19414059695"
              className="flex items-center gap-1 sm:gap-1.5 lg:gap-2 px-2 sm:px-3 lg:px-6 py-2.5 sm:py-2.5 lg:py-3 text-xs sm:text-sm lg:text-base font-semibold text-secondary border border-secondary hover:bg-secondary/10 secondary-color transition-colors whitespace-nowrap"
              style={{ borderRadius: "10px" }}
            >
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 shrink-0" />
              (941) 405-9695
            </a>
            <button
              id="nav-quote-btn"
              onClick={openQuoteModal}
              className="px-2 sm:px-3 lg:px-6 py-2.5 sm:py-2.5 lg:py-3 text-xs sm:text-sm lg:text-base font-semibold hover:opacity-90 secondary-color transition-opacity whitespace-nowrap"
              style={{ backgroundColor: "hsl(43, 80%, 50%)", color: "#fff", borderRadius: "10px" }}
            >
              Get Free Quote
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-white ml-2"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden border-t border-white/10"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.9)" }}
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label}>
                    <button
                      onClick={() => setMobileDropdown(mobileDropdown === link.label ? null : link.label)}
                      className="flex items-center justify-between w-full py-2 text-base font-medium text-white"
                    >
                      {link.label}
                      {mobileDropdown === link.label ? (
                        <ChevronUp className="w-4 h-4 text-white/50" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-white/50" />
                      )}
                    </button>
                    <AnimatePresence>
                      {mobileDropdown === link.label && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          {link.children.map((child) => (
                            <a
                              key={child.label}
                              href={child.href}
                              onClick={() => { setMobileOpen(false); setMobileDropdown(null); }}
                              className="block pl-4 py-2 text-base text-white/70 hover:text-white transition-colors"
                            >
                              {child.label}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => { setMobileOpen(false); setMobileDropdown(null); }}
                    className="block py-2 text-base font-medium text-white"
                  >
                    {link.label}
                  </a>
                )
              )}
              <div className="pt-4 space-y-3 border-t border-white/10">
                <a
                  href="tel:+19414059695"
                  className="flex items-center justify-center gap-2 w-full text-center px-6 py-3 text-sm font-semibold border border-secondary text-secondary secondary-color"
                  style={{ borderRadius: "10px" }}
                >
                  <Phone className="w-5 h-5" /> (941) 405-9695
                </a>
                <button
                  onClick={() => { setMobileOpen(false); openQuoteModal(); }}
                  className="block w-full text-center px-6 py-3 text-sm font-semibold secondary-color"
                  style={{ backgroundColor: "hsl(43, 80%, 50%)", color: "#fff", borderRadius: "10px" }}
                >
                  Get Free Quote
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
