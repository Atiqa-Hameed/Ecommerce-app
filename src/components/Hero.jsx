import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="relative h-[90vh] w-full overflow-hidden">
      {/* Background Image */}
      <img
        className="absolute inset-0 w-full h-full object-cover opacity-70"
        src={assets.hero}
        alt="Hero"
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-40"></div>
      {/* Text Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2 mb-4">
            <p className="w-12 h-1 bg-white"></p>
            <p className="font-medium text-lg md:text-xl">OUR BESTSELLER</p>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Latest Arrivals
          </h1>
          <div className="flex flex-col items-center gap-2">
            <p className="font-semibold text-base md:text-lg">Discover the best products of the season</p>
            <p className="w-12 h-1 bg-white mt-2"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;


