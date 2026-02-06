import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import DecorativeStars from "@/components/DecorativeStars";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0A0118] via-[#12003D] to-[#0A0118] overflow-hidden">
      <Header />
      <DecorativeStars />

      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* <DecorativeStars /> */}
        
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary opacity-60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        
        <div className="relative z-10 text-left px-6 max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-12">
            AWS Cloud Club<br />
            <span className="text-5xl md:text-7xl font-light relative -top-3">@UCLA</span>
          </h1>
          <p className="text-xl md:text-2xl text-center font-medium bg-gradient-to-r from-[#5AD0FF] via-[#9B7BFF] to-[#C58FFF] bg-clip-text text-transparent drop-shadow-[0_0_6px_rgba(155,123,255,0.4)]">
            Empowering bruins to build and sell the cloud
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 px-6 space-y-8">
        {/* <DecorativeStars/> */}
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Who We Are */}
          <Card className="p-12 bg-gradient-to-br from-card/50 to-secondary/30 border-primary/20 backdrop-blur-sm text-center">
            <h2 className="text-4xl font-bold mb-6 text-foreground">Who We Are</h2>
            <p className="text-lg text-[#9B7BFF] mb-6">
              We don't just learn cloud—we <em className="italic text-[#9B7BFF]">build, deploy,</em> and <em className="italic text-[#9B7BFF]">pitch</em> it.
            </p>
            <Button className="rounded-full px-8 py-3 text-base font-medium text-[#0A0118]
            bg-gradient-to-r from-[#9FEAFF] via-[#7FD0FF] to-[#B8C9FF]
            shadow-[0_0_25px_rgba(100,180,255,0.4)]
            hover:shadow-[0_0_35px_rgba(120,200,255,0.6)]
            hover:scale-[1.04]
            transition-all duration-300 border border-white/10 ring-1 ring-inset ring-white/30">
              View Projects Soon
            </Button>
          </Card>

          {/* What We Do */}
          <Card className="p-12 bg-gradient-to-br from-card/50 to-secondary/30 border-primary/20 backdrop-blur-sm text-center">
            <h2 className="text-4xl font-bold mb-6 text-foreground">What We Do</h2>
            <p className="text-lg text-[#9B7BFF] mb-6">
              Work like a Solutions Architect: scope problems, design cloud systems, and deliver solutions for UCLA orgs, startups, and industry teams solving real-world problems.
            </p>
          </Card>

          {/* Why Us */}
          <Card className="p-12 bg-gradient-to-br from-card/50 to-secondary/30 border-primary/20 backdrop-blur-sm text-center">
            <h2 className="text-4xl font-bold mb-6 text-foreground">Why Us</h2>
            <p className="text-lg text-[#9B7BFF] mb-6">
            We don’t just build with impact—we learn how to communicate and deliver that impact. Through hands-on projects, AWS resources, and industry-ready skills.
            </p>
          </Card>

          {/* Join Us Button */}
          <div className="flex justify-center pt-8">
          <Link to="/join">
            <Button className="rounded-full px-8 py-3 text-base font-medium text-[#0A0118]
              bg-gradient-to-r from-[#9FEAFF] via-[#7FD0FF] to-[#B8C9FF]
              shadow-[0_0_25px_rgba(100,180,255,0.4)]
              hover:shadow-[0_0_35px_rgba(120,200,255,0.6)]
              hover:scale-[1.04]
              transition-all duration-300 border border-white/10 ring-1 ring-inset ring-white/30">
                Join Us
            </Button>
          </Link>
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
