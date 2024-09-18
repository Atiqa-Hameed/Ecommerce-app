import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="relative h-[90vh] w-full overflow-hidden">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src={assets.hero}
        alt="Hero"
      />
      {/* Overlay for opacity */}
      <div className="relative z-10 flex flex-col items-center justify-start h-full text-white text-center px-4 pt-20">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2 mb-4">
            <p className="w-12 h-1 bg-white"></p>
            <p className="font-medium text-lg md:text-xl">OUR BESTSELLER</p>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Latest Arrivals
          </h1>
          <div className="flex flex-col items-center gap-2">
            <p className="font-semibold text-base md:text-lg">
              Discover the best products of the season
            </p>
            <p className="w-12 h-1 bg-white mt-2"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;




