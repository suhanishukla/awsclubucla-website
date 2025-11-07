const DecorativeStars = () => {
  return (
    <>
    <img
        src="/diamond2.png"
        className="absolute top-[10%] right-[5%] w-20 opacity-70 animate-float-slow"
    />
    <img
      src="/diamond1.png"
      className="absolute top-[20%] right-[8%] w-40 opacity-70 animate-float-medium"
    />
    <img
      src="/diamond3.png"
      className="absolute top-[10%] left-0 w-30 opacity-70 animate-float-slow" 
    />
    <img
        src="/diamond3.png"
        className="absolute top-[50%] left-[0%] w-60 opacity-30 blur-[1px] animate-float-slow"
      />
    </>
  );
};

export default DecorativeStars;
