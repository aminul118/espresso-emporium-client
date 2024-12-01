const HeroBanner = () => {
  return (
    <div className="bg-hero-banner bg-cover bg-center text-white h-[500px] 2xl:h-[900px]">
      <div className="grid md:grid-cols-2 items-center justify-center h-full">
        <div className="hidden md:block"></div>
        <div className="h-full flex flex-col justify-center  card-normal max-w-2xl gap-3 px-4">
          <h2 className="font-rancho text-4xl">
            Would you like a Cup of Delicious Coffee?
          </h2>
          <p>
            It's coffee time - Sip & Savor - Relaxation in every sip! Get the
            nostalgia back!! Your companion of every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </p>
          <button className="btn w-32 btn-warning">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
