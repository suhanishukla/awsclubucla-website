import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import { Link } from "react-router-dom";

const teamMembers = [
  {
    name: "Chaaya Patel",
    role: "Founder",
    image: "/chaaya.png",
    objectPosition: "center -22px",
    linkedin: "https://www.linkedin.com/in/chaayapatel/"
  },
  {
    name: "Ashita Singh",
    role: "Founder",
    image: "/ashita.JPG",
    objectPosition: "center -40px",
    scale: 1.3,
    linkedin: "https://www.linkedin.com/in/ashita-singh/"
  },
  {
    name: "Ishani Saran",
    role: "External VP",
    image: "/ishani.jpg",
    objectPosition: "center",
    linkedin: "https://www.linkedin.com/in/ishani-saran/"
  },
  {
    name: "Suhani Shukla",
    role: "Technical Director",
    image: "/suhaniheadshot.JPG",
    objectPosition: "center -15px",
    scale: 1.6,
    linkedin: "https://www.linkedin.com/in/suhani-s/"
  },
  {
    name: "Sana Indap",
    role: "Outreach, Marketing + Design Lead",
    image: "/sanaheadshot.jpg",
    objectPosition: "10px -15px",
    scale: 1.4,
    linkedin: "https://www.linkedin.com/in/sana-indap-66aa5713a/"
  },
  {
    name: "Proud Puangmaha",
    role: "Partnerships Director",
    image: "/proud.jpeg",
    objectPosition: "center -30px",
    scale: 1.3,
    linkedin: "https://www.linkedin.com/in/proudpuangmaha/"
  }
];

const Team = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold text-center mb-16 text-foreground">
            Meet the Team
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {teamMembers.map((member, index) => (
              <a
                key={index}
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:scale-[1.02] transition-transform duration-300"
              >
              <Card 
                key={index}
                className="bg-gradient-to-br from-primary/10 to-accent/5 border-primary/20 hover:border-primary/40 transition-all"
              >
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-40 h-40 rounded-lg overflow-hidden mb-4 bg-gradient-to-br from-primary/20 to-accent/10">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                      style={{ 
                        objectPosition: member.objectPosition || "center",
                        transform: `scale(${member.scale || 1})`,
                      }}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-primary">
                    {member.role}
                  </p>
                </CardContent>
              </Card>
              </a>
            ))}
          </div>

          <div className="flex justify-center">
            <Button asChild className="rounded-full px-8 bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/">Join Us</Link>
            </Button>
          </div>
        </div>
      </main>

      <footer className="py-8 px-6 border-t border-primary/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/awscloudclubnewlogo.png" alt="AWS Cloud Club" className="h-20 w-20" />
            <span className="text-foreground text-xs"></span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2025 AWS Cloud Club @UCLA. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Team;
