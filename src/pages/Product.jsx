// src/components/Product.jsx
import { useEffect } from "react";
import { useParams, } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductById, selectProductById } from "../features/productsSlice";
import MoreProducts from "../components/MoreProducts";
import { addItem } from "../features/cartSlice";
const Product = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => selectProductById(state, productId));
  const handleAddToCart = () => {
    const newItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1
    };
    dispatch(addItem(newItem));
  };
  useEffect(() => {
    if (productId) {
      dispatch(fetchProductById(productId));
    }
  }, [dispatch, productId]);

  if (!product) return <div className="text-center text-gray-500">Loading...</div>;

  const { image, title,  price, description } = product;

  return (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row justify-center">
        <div className="w-full sm:w-[300px] lg:w-[300px]">
          <img src={image} alt={title} className="w-full h-auto object-contain rounded-lg shadow-lg transition-opacity duration-300 ease-in-out hover:opacity-80" />
        </div>
        
        <div className="md:w-1/2 md:pl-8 mt-6 md:mt-0">
          <h2 className="text-3xl font-bold mb-3">{title}</h2>
          <div className="text-yellow-500 text-lg mb-4">⭐⭐⭐⭐⭐ ({product.rating?.count})</div>
          <div className="text-3xl font-medium mt-5">${price}</div>
          <p className="text-gray-700 mb-6">{description}</p>
          <button onClick={handleAddToCart} className="bg-black text-white py-3 px-6 rounded w-50 hover:bg-gray-800 transition">
            Add to Cart
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
          <p>100% Original product.</p>
          <p>Cash on delivery is available on thie products.</p>
          <p>Easy return an exchange policy within 7 days</p>
          </div>
        </div>
      </div>
      <div className="mty-20">
      <div className="flex">
      <b className="border px-5 py-3 text-sm">Description</b>
      <p className="border px-5 py-3 text-sm">Reviews(122)</p>
      </div>
      <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
      <p>An ecommerce website is an online store where customers can find products, browse offerings, and place purchases online. It facilitates the transaction between a buyer and seller. A digital storefront can serve as the virtual equivalent of the product shelves, sales staff, and cash register of a physical shop.
      </p>
      </div>
      </div>

      <MoreProducts />

    </div>
  );
};

export default Product;


