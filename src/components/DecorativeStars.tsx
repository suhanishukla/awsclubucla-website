const DecorativeStars = () => {
  return (
    <>
      <div className="absolute top-20 left-10 w-12 h-12 opacity-60">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M50 0C50 27.614 27.614 50 0 50C27.614 50 50 72.386 50 100C50 72.386 72.386 50 100 50C72.386 50 50 27.614 50 0Z"
            fill="currentColor"
            className="text-primary/40"
          />
        </svg>
      </div>
      <div className="absolute top-32 right-20 w-16 h-16 opacity-50">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M50 0C50 27.614 27.614 50 0 50C27.614 50 50 72.386 50 100C50 72.386 72.386 50 100 50C72.386 50 50 27.614 50 0Z"
            fill="currentColor"
            className="text-primary/50"
          />
        </svg>
      </div>
      <div className="absolute bottom-40 left-20 w-14 h-14 opacity-40">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M50 0C50 27.614 27.614 50 0 50C27.614 50 50 72.386 50 100C50 72.386 72.386 50 100 50C72.386 50 50 27.614 50 0Z"
            fill="currentColor"
            className="text-primary/30"
          />
        </svg>
      </div>
      <div className="absolute top-40 right-32 w-10 h-10 opacity-50">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M50 0C50 27.614 27.614 50 0 50C27.614 50 50 72.386 50 100C50 72.386 72.386 50 100 50C72.386 50 50 27.614 50 0Z"
            fill="currentColor"
            className="text-primary/40"
          />
        </svg>
      </div>
    </>
  );
};

export default DecorativeStars;
