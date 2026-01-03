import { Link } from "react-router-dom";
import { ArrowRight, Users, Rocket, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionReveal from "@/components/SectionReveal";
import profileImage from "@/assets/profile-casual.jpg";
import waveSage from "@/assets/wave-sage.png";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Background Wave */}
        <div className="absolute bottom-0 left-0 right-0 opacity-30 pointer-events-none">
          <img src={waveSage} alt="" className="w-full object-cover" aria-hidden="true" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-secondary text-sm uppercase tracking-widest animate-fade-in-delay-1">
                  Fractional CCO · COO · Growth Advisor
                </p>
                <h1 className="text-display-sm md:text-display animate-fade-in-delay-2">
                  Helping startups scale with clarity, calm, and commercial firepower.
                </h1>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in-delay-3 max-w-lg">
                I partner with early-stage B2B startups to build sales engines, streamline operations, 
                and create sustainable growth—without the chaos.
              </p>

              <div className="flex flex-wrap gap-4 animate-fade-in-delay-3">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link to="/contact">
                    Let's collaborate
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/fractional">
                    Learn more
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right: Profile Image */}
            <div className="relative flex justify-center lg:justify-end animate-fade-in">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-tr from-secondary/20 to-accent/10 rounded-full blur-2xl" />
                <img
                  src={profileImage}
                  alt="Andreas Lehner"
                  className="relative w-72 h-72 md:w-96 md:h-96 object-cover rounded-full shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 1: Who I Help */}
      <section className="py-24 bg-cream/50">
        <div className="container mx-auto px-6">
          <SectionReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-display-sm mb-6">Who I help</h2>
              <p className="text-muted-foreground text-lg">
                I work with founders and operators who have built something meaningful 
                and need an experienced partner to scale it.
              </p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SectionReveal delay={100}>
              <div className="bg-background p-8 rounded-lg border border-border hover:border-secondary/50 transition-colors duration-300">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-6">
                  <Rocket className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-medium mb-3">Early-stage startups</h3>
                <p className="text-muted-foreground leading-relaxed">
                  You've found product-market fit, but sales feels unpredictable and operations are stretched thin.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={200}>
              <div className="bg-background p-8 rounded-lg border border-border hover:border-secondary/50 transition-colors duration-300">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-medium mb-3">Scaling teams</h3>
                <p className="text-muted-foreground leading-relaxed">
                  You're growing fast and need leadership that can build systems while staying close to execution.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={300}>
              <div className="bg-background p-8 rounded-lg border border-border hover:border-secondary/50 transition-colors duration-300">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-6">
                  <Heart className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-medium mb-3">Impact ventures</h3>
                <p className="text-muted-foreground leading-relaxed">
                  You're building something that matters—sustainability, cleantech, social good—and need commercial momentum.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Chapter 2: What I Bring */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SectionReveal>
              <div>
                <h2 className="text-display-sm mb-6">What I bring</h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    Over 11 years, I've helped startups go from first customers to scaled operations. 
                    I've built my own company to €100M in assets, doubled customer bases, and led growth 
                    at companies from seed stage to Series B.
                  </p>
                  <p>
                    I'm not a consultant who hands over slides. I embed with your team, roll up my sleeves, 
                    and build alongside you—whether that's closing deals, hiring your first sales rep, 
                    or designing the operations playbook for your next growth phase.
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-medium text-accent">€100M</div>
                    <div className="text-sm text-muted-foreground mt-1">Assets built</div>
                  </div>
                  <div>
                    <div className="text-3xl font-medium text-accent">11+</div>
                    <div className="text-sm text-muted-foreground mt-1">Years scaling</div>
                  </div>
                  <div>
                    <div className="text-3xl font-medium text-accent">2x</div>
                    <div className="text-sm text-muted-foreground mt-1">Customer growth</div>
                  </div>
                </div>
              </div>
            </SectionReveal>

            <SectionReveal delay={200}>
              <div className="relative">
                <div className="absolute -inset-8 bg-gradient-to-br from-secondary/5 to-accent/5 rounded-3xl" />
                <div className="relative bg-background border border-border rounded-2xl p-8 space-y-6">
                  <blockquote className="text-lg italic text-foreground">
                    "Smart strategies. Real results. No ego."
                  </blockquote>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-secondary" />
                      <span className="text-muted-foreground">Fractional CCO / COO</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-secondary" />
                      <span className="text-muted-foreground">Sales & Revenue Operations</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-secondary" />
                      <span className="text-muted-foreground">Growth Strategy & Execution</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-secondary" />
                      <span className="text-muted-foreground">Team Building & Leadership</span>
                    </div>
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Chapter 3: Let's Connect */}
      <section className="py-24 bg-accent text-accent-foreground">
        <div className="container mx-auto px-6">
          <SectionReveal>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-display-sm mb-6">Let's build something lasting</h2>
              <p className="text-accent-foreground/80 text-lg mb-8">
                You bring the vision—I'll help build the structure. 
                Whether you need a fractional leader for six months or a strategic partner for the long haul, 
                let's talk about what's possible.
              </p>
              <Button 
                asChild 
                size="lg" 
                className="bg-background text-foreground hover:bg-background/90"
              >
                <Link to="/contact">
                  Get in touch
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

export default Index;
