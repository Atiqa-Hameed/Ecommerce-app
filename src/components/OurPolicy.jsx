import { RiExchangeFundsLine } from "react-icons/ri";
import { HiBadgeCheck } from "react-icons/hi";
import { BiSupport } from "react-icons/bi";

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
      <div>
       <RiExchangeFundsLine className="w-12 h-12 m-auto mb-5" />
       <p className="font-semibold">Esy Exchange Policy</p>
       <p className="text-gray-400">We offer hassle free exchange policy</p>
      </div>
      <div>
      <HiBadgeCheck className="w-12 h-12 m-auto mb-5" />
      <p className="font-semibold">7 Days Return Policy</p>
      <p className="text-gray-400">We provide 7 days free return policy</p>
     </div>
     <div>
     <BiSupport className="w-12 h-12 m-auto mb-5" />
     <p className="font-semibold">Beest Customer Suppot</p>
     <p className="text-gray-400">We provide 24/7 customer support</p>
    </div>

    </div>
  )
}

export default OurPolicy
