import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../features/dataSlice';
import Title from './Title';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const LatestCollection = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.data);
  const status = useSelector((state) => state.data.status);
  const error = useSelector((state) => state.data.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchData());
    }
  }, [status, dispatch]);

  const displayedProducts = data.slice(0, 10);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={'LATEST'} text2={'COLLECTION'} />
        <p className="w-3/4 m-auto text-xs sm:text-base md:text-base text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
      </div>
      <div className="container mx-auto px-8 py-8">
        {status === 'loading' && <p className="text-center text-gray-500">Loading...</p>}
        {status === 'failed' && <p className="text-center text-red-500">Error: {error}</p>}
        {status === 'succeeded' && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
            {displayedProducts.map((product) => (
              <Link to={`/product/${product.id}`} key={product.id} className="block">
                <div
                  className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-44 object-contain transition-opacity duration-300 ease-in-out hover:opacity-80"
                  />
                  <div className="p-4">
                    <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
                    <p className="text-sm text-gray-600 mb-2">{product.category}</p>
                    <p className="text-xl font-bold text-gray-800">
                      ${product.price}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LatestCollection;











