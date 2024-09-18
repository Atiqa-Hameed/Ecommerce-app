import { assets } from "../assets/assets";
import NewletterBox from "../components/NewletterBox";
import OurPolicy from "../components/OurPolicy";
const AboutUs = () => {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="container mx-auto p-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">About Trendify</h1>
          <p className="text-gray-600 mt-2">Discover who we are and what we stand for</p>
        </header>

        <section className="bg-white p-8 rounded-lg shadow-md flex flex-col md:flex-row items-center">
          {/* Image */}
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img
              src={assets.about} 
              alt="About Trendify"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          
          {/* Text Content */}
          <div className="md:w-1/2 md:pl-6">
            <h2 className="text-3xl font-semibold mb-4 text-gray-800">Our Story</h2>
            <p className="text-gray-700">
              Trendify was founded with the vision of bringing the latest fashion trends to your doorstep. Our mission is to provide a diverse range of high-quality products that cater to every style and preference. From the latest apparel to timeless classics, we aim to make fashion accessible and enjoyable for everyone.
              <br /><br />
              With a commitment to exceptional customer service and a passion for innovation, we strive to create a shopping experience that is both convenient and inspiring. Join us on our journey as we continue to elevate fashion with Trendify.
            </p>
          </div>
        </section>
        <OurPolicy />
        <NewletterBox />
      </div>
    </div>

  );
};

export default AboutUs;
