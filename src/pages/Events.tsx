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
              AWS 101 Builder Workshop — Thursday, Feb. 12 @ 6 pm in Boelter 4283 
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

          </Card>

        </div>
      </section>
    </div>
  );
};

export default Events;
