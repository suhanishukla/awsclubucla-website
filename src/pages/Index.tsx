import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import DecorativeStars from "@/components/DecorativeStars";

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
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            We don't just learn cloud—we <em className="text-foreground italic">build and sell it.</em>
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Card */}
            <Card className="p-12 bg-card border-border backdrop-blur-sm">
              <h2 className="text-4xl font-bold mb-6">Who We Are</h2>
              <div className="space-y-4 text-lg leading-relaxed">
                <p className="text-muted-foreground">
                  We don't just learn cloud—we <em className="text-primary italic">build and sell it.</em>
                </p>
                <p className="text-muted-foreground">
                  We don't just learn cloud—we <em className="text-primary italic">build and sell it.</em>
                </p>
                <p className="text-muted-foreground">
                  We don't just learn cloud—we <em className="text-foreground italic">build and sell it.</em>
                </p>
              </div>
              <Button className="mt-8 rounded-full px-8 bg-primary text-primary-foreground hover:bg-primary/90">
                Discover Our Projects
              </Button>
            </Card>

            {/* Right Card - Empty with gradient */}
            <Card className="p-12 bg-gradient-to-br from-secondary to-card border-border backdrop-blur-sm" />
          </div>

          {/* Bottom Join Button */}
          <div className="flex justify-center mt-12">
            <Button className="rounded-full px-12 py-6 text-lg bg-primary text-primary-foreground hover:bg-primary/90">
              Join Us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/placeholder.svg" alt="AWS Cloud Club" className="h-8 w-8" />
            <span className="text-foreground text-xs">Cloud<br/>Clubs<br/>@UCLA</span>
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
