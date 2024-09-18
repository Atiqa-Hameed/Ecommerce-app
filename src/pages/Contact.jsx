import { assets } from "../assets/assets";
import NewletterBox from "../components/NewletterBox";
import OurPolicy from "../components/OurPolicy";
const ContactUs = () => {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="container mx-auto p-8">
        <section className="bg-white p-8 rounded-lg shadow-md flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img
              src={assets.contact}
              alt="Contact Us"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2 p-6">
            <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
            <p className="mb-2">
              <strong>Address:</strong> 123 Trendify St, Fashion City, FC 12345
            </p>
            <p className="mb-2">
              <strong>Phone:</strong> (123) 456-7890
            </p>
            <p className="mb-2">
              <strong>Email:</strong> support@trendify.com
            </p>
            <p>
              <strong>Careers:</strong> careers@trendify.com
            </p>
          </div>
        </section>
        <OurPolicy />
        <NewletterBox />

      </div>

    </div>
  );
};

export default ContactUs;
