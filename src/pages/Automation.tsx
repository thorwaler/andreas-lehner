import { Link } from "react-router-dom";
import { ArrowRight, Zap, Bot, FileSpreadsheet, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionReveal from "@/components/SectionReveal";
import ammpDashboard1 from "@/assets/ammp-dashboard-1.png";
import ammpDashboard2 from "@/assets/ammp-dashboard-2.png";
import waveDark from "@/assets/wave-dark.png";

const Automation = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-2/3 h-full opacity-10 pointer-events-none">
          <img src={waveDark} alt="" className="w-full h-full object-cover" aria-hidden="true" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <SectionReveal>
              <p className="text-secondary text-sm uppercase tracking-widest mb-4">
                Automation with Purpose
              </p>
            </SectionReveal>

            <SectionReveal delay={100}>
              <h1 className="text-display-sm md:text-display mb-6">
                Building smart systems that save time and reduce friction.
              </h1>
            </SectionReveal>

            <SectionReveal delay={200}>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                I love using AI and no-code tools to build workflows that actually work—
                automating the tedious so teams can focus on what matters.
              </p>
            </SectionReveal>

            <SectionReveal delay={300}>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                <Link to="/contact">
                  Let's build something smart
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Why I Love Building with AI */}
      <section className="py-24 bg-cream/50">
        <div className="container mx-auto px-6">
          <SectionReveal>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-display-sm mb-6">Why I love building with AI</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The best automation isn't about replacing humans—it's about removing the grunt work 
                so people can do more meaningful things. I use tools like Lovable, ChatGPT, and 
                custom integrations to build systems that feel almost magical to use.
              </p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <SectionReveal delay={100}>
              <div className="text-center p-6">
                <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-lg font-medium mb-3">Rapid Prototyping</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Go from idea to working solution in hours, not weeks.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={200}>
              <div className="text-center p-6">
                <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6">
                  <Bot className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-lg font-medium mb-3">AI-Powered Logic</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Smart workflows that adapt and improve over time.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={300}>
              <div className="text-center p-6">
                <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6">
                  <FileSpreadsheet className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-lg font-medium mb-3">Seamless Integration</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Connect tools and data sources that actually talk to each other.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={400}>
              <div className="text-center p-6">
                <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-lg font-medium mb-3">Time Saved</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Hours of manual work reduced to minutes—or seconds.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Case Study: AMMP Invoicing */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <SectionReveal>
            <div className="text-center mb-16">
              <p className="text-secondary text-sm uppercase tracking-widest mb-4">
                Case Study
              </p>
              <h2 className="text-display-sm">Automated Invoicing at AMMP</h2>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <SectionReveal>
              <div className="space-y-6">
                <h3 className="text-2xl font-medium">The Challenge</h3>
                <p className="text-muted-foreground leading-relaxed">
                  AMMP Technologies needed to invoice customers based on complex usage data from 
                  renewable energy installations. The manual process took days each month and was 
                  prone to errors.
                </p>
                
                <h3 className="text-2xl font-medium pt-4">The Solution</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I built an automated invoicing system that pulls data from monitoring platforms, 
                  calculates usage-based fees, generates professional invoices, and sends them 
                  automatically—all without human intervention.
                </p>

                <h3 className="text-2xl font-medium pt-4">The Result</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary" />
                    Monthly invoicing reduced from 2 days to 2 hours
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary" />
                    Zero calculation errors since implementation
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-secondary" />
                    Team freed to focus on customer success
                  </li>
                </ul>
              </div>
            </SectionReveal>

            <SectionReveal delay={200}>
              <div className="space-y-6">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <img
                    src={ammpDashboard1}
                    alt="AMMP Dashboard - Data view"
                    className="relative rounded-lg shadow-lg border border-border"
                  />
                </div>
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <img
                    src={ammpDashboard2}
                    alt="AMMP Dashboard - Invoice generation"
                    className="relative rounded-lg shadow-lg border border-border"
                  />
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-accent text-accent-foreground">
        <div className="container mx-auto px-6">
          <SectionReveal>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-display-sm mb-6">Let's build something smart</h2>
              <p className="text-accent-foreground/80 text-lg mb-8">
                Got a process that's eating up too much time? A workflow that's held together 
                with spreadsheets and manual effort? Let's talk about automating it.
              </p>
              <Button 
                asChild 
                size="lg" 
                className="bg-background text-foreground hover:bg-background/90"
              >
                <Link to="/contact">
                  Start a conversation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </SectionReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Automation;
