import { assets } from "../assets/assets";

const ContactUs = () => {
  return (
    <div className="flex flex-col md:flex-row p-8">
      <img
        src={assets.contact}
        alt="Contact Us"
        className="w-full md:w-1/2 h-auto object-cover mb-8 md:mb-0"
      />

      <div className="md:w-1/2 p-6">
        <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
        <p className="mb-2"><strong>Address:</strong> 123 Trendify St, Fashion City, FC 12345</p>
        <p className="mb-2"><strong>Phone:</strong> (123) 456-7890</p>
        <p className="mb-2"><strong>Email:</strong> support@trendify.com</p>
        <p><strong>Careers:</strong> careers@trendify.com</p>
      </div>
    </div>
  );
};

export default ContactUs;



