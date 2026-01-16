import Header from "@/components/Header";
import DecorativeStars from "@/components/DecorativeStars";
import { Card } from "@/components/ui/card";

const Events = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0A0118] via-[#12003D] to-[#0A0118] overflow-hidden">
      <Header />
      <DecorativeStars />

      <section className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Upcoming Events */}
          <Card className="p-10 bg-gradient-to-br from-card/50 to-secondary/30 border-primary/20 backdrop-blur-sm text-center">
            <h1 className="text-5xl font-bold mb-4">Upcoming Events</h1>
            <p className="text-lg text-[#9B7BFF]">
              Coming Soon!
            </p>
          </Card>

          {/* Past Events */}
          <Card className="p-10 bg-gradient-to-br from-card/50 to-secondary/30 border-primary/20 backdrop-blur-sm text-center">
            <h1 className="text-5xl font-bold mb-4">Past Events</h1>
            <p className="text-lg text-[#9B7BFF] mb-8">
              Watch a recording of our Info Sesh!
            </p>

            {/* Video Embed Box */}
            <div className="w-full max-w-3xl mx-auto">
              <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/10 ring-1 ring-inset ring-white/20">
                <iframe
                  src="https://www.youtube.com/embed/9FiAG3Nj5W4"
                  title="AWS Cloud Club Meeting Recap"
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

            </div>
          </Card>

        </div>
      </section>
    </div>
  );
};

export default Events;
