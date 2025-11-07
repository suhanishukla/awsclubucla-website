import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-background/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2">
            <img src="/placeholder.svg" alt="AWS Cloud Club" className="h-10 w-10" />
            <span className="text-foreground font-semibold text-sm">Cloud<br/>Clubs<br/>@UCLA</span>
          </Link>
          <nav>
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
          </nav>
        </div>
        <Button className="rounded-full px-6 bg-primary text-primary-foreground hover:bg-primary/90">
          Join Us
        </Button>
      </div>
    </header>
  );
};

export default Header;
