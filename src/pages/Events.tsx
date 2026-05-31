import Header from "@/components/Header";
import DecorativeStars from "@/components/DecorativeStars";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const Events = () => {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [flipped, setFlipped] = useState(false); 
  const highlightPhotos = [
    {
      src: "/kickoff1.jpg",
      alt: "Kickoff event photo 1",
      caption: "Cloud architects explaining their system designs",
    },
    {
      src: "/kickoff2.jpg",
      alt: "Kickoff event photo 2",
      caption: "Whiteboarding solutions in teams to a system design problem",
    },
  ];

  const events = [
    { date: "Feb 5", title: "Kickoff Session", description: "", type: "Workshop" },
    { date: "Feb 12", title: "AWS Intro Session", description: "", type: "Workshop" },
    { date: "Feb 19", title: "Project Prototyping", description: "Hands-on tutorial on building and deploying your own LLM microservice on AWS and application user protocols", type: "Workshop" },
    { date: "Feb 26", title: "Building and Pitching", description: "Learn to build on top of Amazon Nova AI models and craft a winning pitch", type: "Workshop" },
    { date: "Mar 6", title: "Architect the Cloud", description: "Deep dive into AWS and the AI/ML services stack, hands-on AWS workshop exploring Kiro and Nova AI, career panel with AWS professionals, prizes and giveaways", type: "Event" },
    { date: "Mar 12", title: "Quarter Recap Meeting", description: "", type: "Workshop" },
    { date: "Apr 2", title: "Consulting, EC2 & Gen AI Basics", description: "", type: "Workshop" },
    { date: "Apr 9", title: "Exploring Compute", description: "Learn to build with cloud compute and deploy ML models for real world solutions", type: "Workshop" },
    { date: "Apr 16", title: "Infra + Foundation Models", description: "", type: "Workshop" },
    { date: "Apr 23", title: "Building AI Agents", description: "Learn how to build and deploy AI agents while applying responsible AI principles", type: "Workshop" },
    { date: "Apr 30", title: "Storage & AI Security", description: "Learn to secure and scale AI with reliable data storage", type: "Workshop" },
    { date: "May 7", title: "AI Prompt Injection Challenge", description: "Learn to identify and defend against prompt injections", type: "Workshop" },
    { date: "May 14", title: "Building and Selling Tech", description: "Charles Harris, Solutions Architect at AWS, discusses how AI and cloud technologies are being built and brought to market today", type: "Event" },
    { date: "May 21", title: "Fireside Chat with AWS Architects", description: "Exclusive networking + Q&A session with AWS Solutions Architects and Account Managers led by Prasad Naik, AWS GenAI Sales Leader (Strategic Accounts)", type: "Event" },
    { date: "May 29", title: "AWS Office Tour", description: "AWS 'Day in the Life' Office Event", type: "Tour" },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0A0118] via-[#12003D] to-[#0A0118] overflow-hidden">
      <Header />
      <DecorativeStars />

      <section className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Upcoming Events — add future events here */}

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

            <p className="text-lg text-[#9B7BFF] mt-20 mb-8">
              Club Kickoff Highlights
            </p>

            {/* Highlight Photos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {highlightPhotos.map((p, i) => (
                <button
                  key={p.src}
                  type="button"
                  onClick={() => {
                    setActiveIndex(i);
                    setFlipped(false);
                    setOpen(true);
                  }}                  
                  className="relative aspect-video rounded-xl overflow-hidden border border-white/10 ring-1 ring-inset ring-white/20
                            focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                  aria-label={`Open photo: ${p.alt}`}
                >
                  <img
                    src={p.src}
                    alt={p.alt}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-[1.03]"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>

            </div>
            <Dialog
              open={open}
              onOpenChange={(v) => {
                setOpen(v);
                if (!v) setFlipped(false);
              }}
            >
              <DialogContent
                className="
                  max-w-5xl p-0 overflow-hidden
                  border border-white/10 bg-gradient-to-br from-card/70 to-secondary/40
                  backdrop-blur-xl shadow-2xl
                  [&>button]:text-white/70 [&>button]:hover:text-white
                "
              >
                {activeIndex !== null && (
                  <button
                    type="button"
                    onClick={() => setFlipped((v) => !v)}
                    className="w-full focus:outline-none"
                    aria-label="Flip image to view caption"
                  >
                    <div
                      className="relative w-full h-[70vh] max-h-[70vh]"
                      style={{ perspective: "1200px" }}
                    >
                      <div
                        className="absolute inset-0 transition-transform duration-500"
                        style={{
                          transformStyle: "preserve-3d",
                          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
                        }}
                      >
                        {/* FRONT: image */}
                        <div
                          className="absolute inset-0"
                          style={{ backfaceVisibility: "hidden" }}
                        >
                          <img
                            src={highlightPhotos[activeIndex].src}
                            alt={highlightPhotos[activeIndex].alt}
                            className="w-full h-full object-contain bg-black/40"
                          />
                        </div>

                        {/* BACK: caption */}
                        <div
                          className="absolute inset-0 flex items-center justify-center p-8"
                          style={{
                            backfaceVisibility: "hidden",
                            transform: "rotateY(180deg)",
                          }}
                        >
                          <div className="w-full max-w-2xl rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md p-6 text-center">
                            <p className="text-[#9B7BFF] text-base leading-relaxed">
                              {highlightPhotos[activeIndex].caption}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                )}

              </DialogContent>
            </Dialog>
             
            <p className="text-lg text-[#9B7BFF] mt-20 mb-8">
              All Events
            </p>
            <div className="space-y-4 max-w-3xl mx-auto text-left">
              {events.map((ev, i) => {
                const badgeColor =
                  ev.type === "Workshop"
                    ? "bg-[#9B7BFF] text-white"
                    : ev.type === "Event"
                      ? "bg-amber-500 text-white"
                      : "bg-teal-500 text-white";
                return (
                  <div
                    key={i}
                    className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
                  >
                    <span className="text-sm text-[#9B7BFF] font-medium w-16 shrink-0">
                      {ev.date}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-semibold text-white">
                          {ev.title}
                        </span>
                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${badgeColor}`}>
                          {ev.type}
                        </span>
                      </div>
                      {ev.description && (
                        <p className="text-sm text-white/70 mt-1">
                          {ev.description}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>

        </div>
      </section>
    </div>
  );
};

export default Events;
