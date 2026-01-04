import { useState, useEffect } from "react";
import { Linkedin, Mail, BookOpen, FileText, Send } from "lucide-react";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidgets: () => void;
    };
  }
}
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";
import SectionReveal from "@/components/SectionReveal";
import waveSage from "@/assets/wave-sage.png";

const Contact = () => {
  const { toast } = useToast();

  useEffect(() => {
    // Initialize Calendly widget after component mounts
    const initCalendly = () => {
      if (window.Calendly) {
        window.Calendly.initInlineWidgets();
      }
    };
    
    // Try immediately in case script is already loaded
    initCalendly();
    
    // Also listen for script load
    const script = document.querySelector('script[src*="calendly"]');
    if (script) {
      script.addEventListener('load', initCalendly);
    }
    
    return () => {
      if (script) {
        script.removeEventListener('load', initCalendly);
      }
    };
  }, []);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 opacity-20 pointer-events-none">
          <img src={waveSage} alt="" className="w-full object-cover" aria-hidden="true" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <SectionReveal>
              <h1 className="text-display-sm md:text-display mb-6">
                Curious about working together?
              </h1>
            </SectionReveal>

            <SectionReveal delay={100}>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Whether you're looking for fractional leadership, want to discuss automation ideas, 
                or just want to connect—I'd love to hear from you.
              </p>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Contact Form + Links */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
            {/* Contact Form */}
            <SectionReveal>
              <div className="bg-cream/50 rounded-2xl p-8 border border-border">
                <h2 className="text-2xl font-medium mb-6">Send a message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="bg-background"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="bg-background"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="What's on your mind?"
                      rows={5}
                      required
                      className="bg-background resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-accent hover:bg-accent/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </SectionReveal>

            {/* Quick Links */}
            <SectionReveal delay={200}>
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-medium mb-6">Other ways to connect</h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    Prefer a different channel? Reach out directly or check out my work.
                  </p>
                </div>

                <div className="space-y-4">
                  <a
                    href="https://www.linkedin.com/in/lehnerandreas/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-cream/50 border border-border hover:border-secondary/50 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                      <Linkedin className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <div className="font-medium">LinkedIn</div>
                      <div className="text-sm text-muted-foreground">Connect professionally</div>
                    </div>
                  </a>

                  <a
                    href="mailto:hi@andreas-lehner.com"
                    className="flex items-center gap-4 p-4 rounded-xl bg-cream/50 border border-border hover:border-secondary/50 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                      <Mail className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-sm text-muted-foreground">hi@andreas-lehner.com</div>
                    </div>
                  </a>

                  <a
                    href="/book"
                    className="flex items-center gap-4 p-4 rounded-xl bg-cream/50 border border-border hover:border-secondary/50 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                      <BookOpen className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <div className="font-medium">Mind Your Money</div>
                      <div className="text-sm text-muted-foreground">Read my book on sustainable investing</div>
                    </div>
                  </a>

                  <a
                    href="/CV_Andreas_Lehner.pdf"
                    download
                    className="flex items-center gap-4 p-4 rounded-xl bg-cream/50 border border-border hover:border-secondary/50 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                      <FileText className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <div className="font-medium">Resume</div>
                      <div className="text-sm text-muted-foreground">Download my CV</div>
                    </div>
                  </a>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Calendly Widget */}
      <section className="py-16 bg-cream/50">
        <div className="container mx-auto px-6">
          <SectionReveal>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-medium mb-4 text-center">Prefer to schedule directly?</h2>
              <p className="text-muted-foreground mb-8 text-center">
                Book a 30-minute call to discuss how I can help.
              </p>
              <div 
                className="calendly-inline-widget rounded-xl overflow-hidden" 
                data-url="https://calendly.com/hi-andreas-lehner/30min?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=1e3051" 
                style={{ minWidth: '320px', height: '700px' }}
              />
            </div>
          </SectionReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
