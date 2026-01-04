import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Target, Users, TrendingUp, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionReveal from "@/components/SectionReveal";
import profileProfessional from "@/assets/profile-professional.jpeg";
import waveNavy from "@/assets/wave-navy.png";
const milestones = [{
  company: "Trine",
  achievement: "Built a startup to €100M in assets under management",
  role: "Co-Founder and COO/Head of BD"
}, {
  company: "AMMP",
  achievement: "Doubled customer base and led commercial growth",
  role: "Fractional CCO"
}, {
  company: "Sanate",
  achievement: "Built operations and key tooling from scratch",
  role: "Fractional COO"
}, {
  company: "Other Ventures",
  achievement: "Built deal pipelines and market expansion",
  role: "Advisor & Consultant"
}];
const Fractional = () => {
  return <Layout>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
          <img src={waveNavy} alt="" className="w-full h-full object-cover" aria-hidden="true" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3 space-y-6">
              <SectionReveal>
                <p className="text-secondary text-sm uppercase tracking-widest">
                  Fractional Executive
                </p>
              </SectionReveal>
              
              <SectionReveal delay={100}>
                <h1 className="text-display-sm md:text-display">
                  I join companies where the product has potential, but sales or ops are stuck.
                </h1>
              </SectionReveal>

              <SectionReveal delay={200}>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                  I'm not a consultant with slides—I roll up my sleeves and build. 
                  When you bring me in, I become part of your team: closing deals, 
                  hiring talent, and designing systems that scale.
                </p>
              </SectionReveal>

              <SectionReveal delay={300}>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                    <Link to="/contact">
                      Let's talk
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </SectionReveal>
            </div>

            <div className="lg:col-span-2">
              <SectionReveal delay={200}>
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-tr from-secondary/20 to-accent/10 rounded-2xl blur-xl" />
                  <img alt="Andreas Lehner" className="relative w-full aspect-[3/4] object-cover rounded-2xl shadow-2xl" src="/lovable-uploads/488f0e07-5dd0-4fbf-9393-6545f3b88b71.jpg" />
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do */}
      <section className="py-24 bg-cream/50">
        <div className="container mx-auto px-6">
          <SectionReveal>
            <h2 className="text-display-sm text-center mb-16">What I do</h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <SectionReveal delay={100}>
              <div className="text-center p-6">
                <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6">
                  <Target className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-lg font-medium mb-3">Sales Leadership</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Build and lead sales teams, develop go-to-market strategies, close enterprise deals.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={200}>
              <div className="text-center p-6">
                <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-lg font-medium mb-3">Revenue Operations</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Design processes, implement tools, and create systems that make growth predictable.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={300}>
              <div className="text-center p-6">
                <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6">
                  <Users className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-lg font-medium mb-3">Team Building</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Hire, coach, and develop commercial teams that deliver results independently.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={400}>
              <div className="text-center p-6">
                <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6">
                  <Calendar className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-lg font-medium mb-3">Strategic Planning</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Set goals, align stakeholders, and create execution roadmaps that actually get done.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* When to Bring Me In */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <SectionReveal>
              <h2 className="text-display-sm text-center mb-12">When to bring me in</h2>
            </SectionReveal>

            <div className="space-y-6">
              {["You've validated your product but struggle to scale sales consistently", "You need experienced commercial leadership but can't justify a full-time C-suite hire", "Operations are becoming a bottleneck as you grow", "You're preparing for a funding round and need to professionalize your go-to-market", "Your founding team is stretched thin and needs hands-on support"].map((item, index) => <SectionReveal key={index} delay={index * 100}>
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-cream/50 border border-border">
                    <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                    <p className="text-foreground leading-relaxed">{item}</p>
                  </div>
                </SectionReveal>)}
            </div>
          </div>
        </div>
      </section>

      {/* Notable Engagements */}
      <section className="py-24 bg-cream/50">
        <div className="container mx-auto px-6">
          <SectionReveal>
            <h2 className="text-display-sm text-center mb-16">Notable engagements</h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {milestones.map((milestone, index) => <SectionReveal key={index} delay={index * 100}>
                <div className="bg-background p-8 rounded-xl border border-border hover:shadow-lg transition-shadow duration-300">
                  <div className="text-sm text-secondary font-medium mb-2">{milestone.role}</div>
                  <h3 className="text-xl font-medium mb-3">{milestone.company}</h3>
                  <p className="text-muted-foreground leading-relaxed">{milestone.achievement}</p>
                </div>
              </SectionReveal>)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-accent text-accent-foreground">
        <div className="container mx-auto px-6">
          <SectionReveal>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-display-sm mb-6">Ready to move faster?</h2>
              <p className="text-accent-foreground/80 text-lg mb-8">
                Let's have a conversation about your challenges and explore how I might help. 
                No pitch decks, no pressure—just a real discussion about what's possible.
              </p>
              <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90">
                <Link to="/contact">
                  Schedule a call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </SectionReveal>
        </div>
      </section>
    </Layout>;
};
export default Fractional;