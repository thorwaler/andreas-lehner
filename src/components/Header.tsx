import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
const navLinks = [{
  to: "/",
  label: "Home"
}, {
  to: "/fractional",
  label: "Fractional"
}, {
  to: "/book",
  label: "Book"
}, {
  to: "/automation",
  label: "Automation"
}, {
  to: "/contact",
  label: "Contact"
}];
const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return <header className="fixed top-0 left-0 right-0 z-50 bg-[#FEE1B8] border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img src={logo} alt="Andreas Lehner" className="h-10 w-auto transition-transform duration-300 group-hover:scale-105" />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map(link => <li key={link.to}>
                <Link to={link.to} className={`text-sm tracking-wide transition-colors duration-200 link-underline ${location.pathname === link.to ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}>
                  {link.label}
                </Link>
              </li>)}
          </ul>

          {/* Mobile Menu Button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 text-foreground" aria-label="Toggle menu">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <ul className="flex flex-col gap-4">
              {navLinks.map(link => <li key={link.to}>
                  <Link to={link.to} onClick={() => setMobileMenuOpen(false)} className={`block text-lg ${location.pathname === link.to ? "text-foreground" : "text-muted-foreground"}`}>
                    {link.label}
                  </Link>
                </li>)}
            </ul>
          </div>}
      </div>
    </header>;
};
export default Header;