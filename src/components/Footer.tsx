import { Link } from "react-router-dom";
import { Linkedin, Mail, BookOpen } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-cream/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-medium mb-3">Andreas Lehner</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Helping startups scale with clarity, calm, and commercial firepower.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-medium mb-3 text-muted-foreground uppercase tracking-wider">
              Navigate
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/fractional" className="text-sm text-foreground hover:text-secondary transition-colors link-underline">
                  Fractional Executive
                </Link>
              </li>
              <li>
                <Link to="/book" className="text-sm text-foreground hover:text-secondary transition-colors link-underline">
                  Mind Your Money
                </Link>
              </li>
              <li>
                <Link to="/automation" className="text-sm text-foreground hover:text-secondary transition-colors link-underline">
                  Automation
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-foreground hover:text-secondary transition-colors link-underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-medium mb-3 text-muted-foreground uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/lehnerandreas/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background border border-border hover:border-secondary hover:text-secondary transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:hi@andreas-lehner.com"
                className="p-2 rounded-full bg-background border border-border hover:border-secondary hover:text-secondary transition-all duration-200"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <Link
                to="/book"
                className="p-2 rounded-full bg-background border border-border hover:border-secondary hover:text-secondary transition-all duration-200"
                aria-label="Book"
              >
                <BookOpen size={20} />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            © {currentYear} Andreas Lehner. Built with intention.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
