import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-background/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2">
            <img src="/awscloudclubnewlogo.png" alt="AWS Cloud Club" className="h-20 w-20" />
            <span className="text-foreground font-semibold text-sm"></span>
          </Link>
          <nav className="flex items-center gap-6">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>

            <Link to="/join" className="text-foreground hover:text-primary transition-colors">
              Join Us
            </Link>

            <Link to="/events" className="text-foreground hover:text-primary transition-colors">
              Events
            </Link>
          </nav>
        </div>
        <Button className="rounded-full px-8 py-3 text-base font-medium text-[#0A0118]
            bg-gradient-to-r from-[#9FEAFF] via-[#7FD0FF] to-[#B8C9FF]
            shadow-[0_0_25px_rgba(100,180,255,0.4)]
            hover:shadow-[0_0_35px_rgba(120,200,255,0.6)]
            hover:scale-[1.04]
            transition-all duration-300 border border-white/10 ring-1 ring-inset ring-white/30">
          <Link to="/team">View Team</Link>
        </Button>
      </div>
    </header>
  );
};

export default Header;
