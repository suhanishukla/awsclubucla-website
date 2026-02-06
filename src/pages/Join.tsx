import Header from "@/components/Header";
import DecorativeStars from "@/components/DecorativeStars";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Join = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0A0118] via-[#12003D] to-[#0A0118] overflow-hidden">
      <Header />
      <DecorativeStars />

      <section className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <Card className="p-10 bg-gradient-to-br from-card/50 to-secondary/30 border-primary/20 backdrop-blur-sm text-center">
            <h1 className="text-5xl font-bold mb-4">Join AWS Cloud Club</h1>

            <p className="text-md text-[#9B7BFF] mb-8">
              Stay in the loop about our upcoming events and workshops!
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://forms.gle/7AYG6tqyJur1a1Pi9"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="rounded-full px-8 py-3 text-base font-medium text-[#0A0118]
                  bg-gradient-to-r from-[#9FEAFF] via-[#7FD0FF] to-[#B8C9FF]
                  shadow-[0_0_25px_rgba(100,180,255,0.4)]
                  hover:shadow-[0_0_35px_rgba(120,200,255,0.6)]
                  hover:scale-[1.04]
                  transition-all duration-300 border border-white/10 ring-1 ring-inset ring-white/30">
                  Interest Form
                </Button>
              </a>

              <a
                href="https://join.slack.com/t/awscloudclubatucla/shared_invite/zt-3hznemzld-45eEgqEMQ~W0jS4Jvktzew"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="rounded-full px-8 py-3 text-base font-medium
                    border border-[#9FEAFF]/40
                    text-[#9FEAFF]
                    hover:bg-[#9FEAFF]/10
                    hover:scale-[1.04]
                    transition-all duration-300"
                >
                  Join our Slack
                </Button>
              </a>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Join;
