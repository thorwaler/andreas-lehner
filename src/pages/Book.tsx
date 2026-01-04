import { Link } from "react-router-dom";
import { ArrowRight, Download, ExternalLink, Leaf, TrendingUp, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionReveal from "@/components/SectionReveal";
import bookCover from "@/assets/book-cover.png";
import waveCream from "@/assets/wave-cream.png";

const Book = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 opacity-30 pointer-events-none">
          <img src={waveCream} alt="" className="w-full object-cover" aria-hidden="true" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Book Cover */}
            <SectionReveal>
              <div className="relative flex justify-center">
                <div className="absolute -inset-8 bg-gradient-to-br from-secondary/10 to-amber/10 rounded-3xl blur-2xl" />
                <img
                  src={bookCover}
                  alt="Mind Your Money Book Cover"
                  className="relative w-full max-w-sm rounded-lg shadow-2xl"
                />
              </div>
            </SectionReveal>

            {/* Book Info */}
            <div className="space-y-6">
              <SectionReveal delay={100}>
                <p className="text-secondary text-sm uppercase tracking-widest">
                  A Practical Guide
                </p>
              </SectionReveal>

              <SectionReveal delay={200}>
                <h1 className="text-display-sm md:text-display">
                  Mind Your Money
                </h1>
              </SectionReveal>

              <SectionReveal delay={300}>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  A practical guide to sustainable investments. Learn how to align your money 
                  with your values while building long-term wealth.
                </p>
              </SectionReveal>

              <SectionReveal delay={400}>
                <p className="text-muted-foreground leading-relaxed">
                  This book cuts through the noise of sustainable investing. Whether you're just 
                  starting to think about where your money goes or looking to deepen your impact, 
                  you'll find actionable strategies grounded in real-world experience.
                </p>
              </SectionReveal>

              <SectionReveal delay={500}>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                    <a href="https://books2read.com/mindyourmoney" target="_blank" rel="noopener noreferrer">
                      Buy the book
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a href="/Free_Chapter.pdf" download>
                      Download sample
                      <Download className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* What's Inside */}
      <section className="py-24 bg-cream/50">
        <div className="container mx-auto px-6">
          <SectionReveal>
            <h2 className="text-display-sm text-center mb-16">What you'll learn</h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <SectionReveal delay={100}>
              <div className="bg-background p-8 rounded-xl border border-border">
                <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mb-6">
                  <Leaf className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-xl font-medium mb-3">Sustainable Strategies</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Understand ESG criteria, impact investing, and how to evaluate companies 
                  that align with your environmental and social values.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={200}>
              <div className="bg-background p-8 rounded-xl border border-border">
                <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mb-6">
                  <TrendingUp className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-xl font-medium mb-3">Building Wealth</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Practical frameworks for growing your investments over time, 
                  from portfolio construction to long-term compounding.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={300}>
              <div className="bg-background p-8 rounded-xl border border-border">
                <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mb-6">
                  <Shield className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-xl font-medium mb-3">Avoiding Pitfalls</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Learn to spot greenwashing, understand risk, and make informed decisions 
                  that protect and grow your capital.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* About the Author */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <SectionReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-display-sm mb-8">About the author</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Andreas Lehner has spent over a decade at the intersection of finance, sustainability, 
                and entrepreneurship. After building his own investment company to €100M in assets, 
                he's seen firsthand how money can be a force for good—when you know how to deploy it.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                This book distills years of learning into actionable guidance for anyone who wants 
                their investments to reflect their values.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-6">
          <SectionReveal>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-display-sm mb-6">Start your journey</h2>
              <p className="text-secondary-foreground/80 text-lg mb-8">
                Ready to align your money with your values? Grab a copy of Mind Your Money 
                and start building wealth that matters.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-background text-foreground hover:bg-background/90"
                >
                  <a href="https://books2read.com/mindyourmoney" target="_blank" rel="noopener noreferrer">
                    Buy the book
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button 
                  asChild 
                  size="lg" 
                  variant="outline"
                  className="border-background/30 bg-transparent text-background hover:bg-background/10"
                >
                  <Link to="/contact">
                    Get in touch
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Book;
