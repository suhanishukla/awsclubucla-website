import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import { Link } from "react-router-dom";

const executiveBoard = [
  {
    name: "Ishani Saran",
    role: "Co-President"
  },
  {
    name: "Suhani Shukla",
    role: "Co-President"
  },
  {
    name: "Ben Moon",
    role: "External Vice President"
  },
  {
    name: "Aashima Khanna",
    role: "Internal Vice President"
  },
  {
    name: "Lily Wu",
    role: "Vice President of Technology"
  }
];

const directors = [
  {
    name: "Esha Shivakumar",
    role: "Events Director"
  },
  {
    name: "Ved Vyas",
    role: "Partnerships Director"
  },
  {
    name: "Khushi Tekriwal",
    role: "Outreach Director"
  },
  {
    name: "Jason Schacher",
    role: "Outreach Director"
  },
  {
    name: "Krisha Basrur",
    role: "Finance Director"
  },
  {
    name: "Anthony Navarrez",
    role: "Marketing Director"
  }
];

const alumni = [
  {
    name: "Chaaya Patel",
    role: "Founder"
  },
  {
    name: "Ashita Singh",
    role: "Founder"
  },
  {
    name: "Sana Indap",
    role: "Outreach, Marketing + Design Lead"
  },
  {
    name: "Proud Puangmaha",
    role: "Partnerships Director"
  }
];

type TeamMember = {
  name: string;
  role: string;
};

const TeamMemberCard = ({ member }: { member: TeamMember }) => (
  <Card className="bg-gradient-to-br from-primary/10 to-accent/5 border-primary/20 hover:border-primary/40 transition-all">
    <CardContent className="p-6 flex flex-col items-center text-center min-h-32 justify-center">
      <h3 className="text-xl font-semibold text-foreground mb-2">
        {member.name}
      </h3>
      <p className="text-sm text-primary">
        {member.role}
      </p>
    </CardContent>
  </Card>
);

const MemberGrid = ({ members }: { members: TeamMember[] }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {members.map((member) => (
      <TeamMemberCard key={member.name} member={member} />
    ))}
  </div>
);

const Team = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold text-center mb-16 text-foreground">
            2026-27 Leadership
          </h1>

          <section className="mb-16">
            <h2 className="text-3xl font-semibold text-center mb-8 text-foreground">
              Executive Board
            </h2>
            <MemberGrid members={executiveBoard} />
          </section>

          <section className="mb-20">
            <h2 className="text-3xl font-semibold text-center mb-8 text-foreground">
              Leadership
            </h2>
            <MemberGrid members={directors} />
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-semibold text-center mb-8 text-foreground">
              Alumni
            </h2>
            <MemberGrid members={alumni} />
          </section>

          <div className="flex justify-center">
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
