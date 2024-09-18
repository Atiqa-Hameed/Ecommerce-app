
const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
      <div>
      <span className="text-blue-900 text-3xl font-bold">𝓣𝓻𝓮𝓷𝓭𝓲𝓯𝔂</span>
      <p className="w-full md:w-2/3 text-gray-600">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
      </p>
      </div>
      <div>
      <p className="text-xl font-medium mb-5">COMPANY</p>
      <ul className="flex flex-col gap-1 text-gray-600">
      <li>Home</li>
      <li>About us</li>
      <li>Delivery</li>
      <li>Privacy policy</li>
      </ul>
      </div>
      <div>
      <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
      <ul className="flex flex-col gap-1 text-gray-600">
      <li>+1-212-456-7890</li>
      <li>contact@trendify.com</li>
      </ul>
      </div>
      </div>
      <div>
      <hr />
      <p className="py-5 text-sm text-center">Copyright 2024 trendify.com - All Right Reserved.</p>
      </div>
    </div>
  )
}
export default Footer
