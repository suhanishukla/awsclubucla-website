import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import DecorativeStars from "@/components/DecorativeStars";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <DecorativeStars />
        
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary opacity-60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            AWS Cloud Club<br />
            <span className="text-5xl md:text-7xl">@UCLA</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary max-w-2xl mx-auto">
            Empowering bruins to build <span className="text-foreground">and sell</span> the cloud
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 px-6 space-y-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Who We Are */}
          <Card className="p-12 bg-gradient-to-br from-card/50 to-secondary/30 border-primary/20 backdrop-blur-sm text-center">
            <h2 className="text-4xl font-bold mb-6 text-foreground">Who We Are</h2>
            <p className="text-lg text-muted-foreground mb-6">
              We don't just learn cloud—we <em className="text-primary italic">build and sell it.</em>
            </p>
            <Button className="rounded-full px-8 bg-accent text-accent-foreground hover:bg-accent/90">
              View Projects Soon
            </Button>
          </Card>

          {/* What We Do */}
          <Card className="p-12 bg-gradient-to-br from-card/50 to-secondary/30 border-primary/20 backdrop-blur-sm text-center">
            <h2 className="text-4xl font-bold mb-6 text-foreground">What We Do</h2>
            <p className="text-lg text-muted-foreground">
              Work like a Solutions Architect: scope problems, design cloud systems, and deliver solutions for UCLA orgs, startups, and industry teams solving real-world problems.
            </p>
          </Card>

          {/* Why Us */}
          <Card className="p-12 bg-gradient-to-br from-card/50 to-secondary/30 border-primary/20 backdrop-blur-sm text-center">
            <h2 className="text-4xl font-bold mb-6 text-foreground">Why Us</h2>
            <p className="text-lg text-muted-foreground">
              We don't just build with impact, we <em className="text-primary italic">also sell</em> with impact. We have hands-on creation, access to AWS resources, build industry-relevant skills.
            </p>
          </Card>

          {/* Join Us Button */}
          <div className="flex justify-center pt-8">
            <Button className="rounded-full px-12 py-6 text-lg bg-accent text-accent-foreground hover:bg-accent/90">
              Join Us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/awscloudclubnewlogo.png" alt="AWS Cloud Club" className="h-20 w-20" />
            <span className="text-foreground text-xs"></span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2025 AWS Cloud Club @ UCLA. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
