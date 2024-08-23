import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const PlaceOrder = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const [deliveryInfo, setDeliveryInfo] = useState({
    firstName: '',
    lastName: '',
    emailAddress: '',
    street: '',
    city: '',
    zipcode: '',
    country: '',
    phone: '',
  });

  const [paymentMethod, setPaymentMethod] = useState('creditCard');

  useEffect(() => {
    // Load data from local storage
    const savedDeliveryInfo = JSON.parse(localStorage.getItem('deliveryInfo'));
    const savedPaymentMethod = localStorage.getItem('paymentMethod');
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems'));
    const savedTotalPrice = localStorage.getItem('totalPrice');

    if (savedDeliveryInfo) {
      setDeliveryInfo(savedDeliveryInfo);
    }
    if (savedPaymentMethod) {
      setPaymentMethod(savedPaymentMethod);
    }
    if (savedCartItems) {
      // Ensure the cartItems in local storage matches the state
      // Dispatch an action or update state if necessary
    }
    if (savedTotalPrice) {
      // Ensure the totalPrice in local storage matches the state
      // Dispatch an action or update state if necessary
    }
  }, []);

  useEffect(() => {
    // Save data to local storage
    localStorage.setItem('deliveryInfo', JSON.stringify(deliveryInfo));
    localStorage.setItem('paymentMethod', paymentMethod);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    localStorage.setItem('totalPrice', totalPrice.toFixed(2));
  }, [deliveryInfo, paymentMethod, cartItems, totalPrice]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDeliveryInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Order placed:', deliveryInfo, paymentMethod, cartItems, totalPrice);
    // Clear local storage after order placement
    localStorage.removeItem('deliveryInfo');
    localStorage.removeItem('paymentMethod');
    localStorage.removeItem('cartItems');
    localStorage.removeItem('totalPrice');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center py-4">
        <h1 className="text-3xl font-bold text-gray-900">Place Your Order</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Delivery Information Form */}
        <form className="bg-white shadow-md rounded-lg p-6" onSubmit={handleSubmit}>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Delivery Information</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={deliveryInfo.firstName}
              onChange={handleInputChange}
              className="border p-2 rounded w-full"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={deliveryInfo.lastName}
              onChange={handleInputChange}
              className="border p-2 rounded w-full"
              required
            />
            <input
              type="email"
              name="emailAddress"
              placeholder="Email Address"
              value={deliveryInfo.emailAddress}
              onChange={handleInputChange}
              className="border p-2 rounded w-full"
              required
            />
            <input
              type="text"
              name="street"
              placeholder="Street Address"
              value={deliveryInfo.street}
              onChange={handleInputChange}
              className="border p-2 rounded w-full"
              required
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={deliveryInfo.city}
              onChange={handleInputChange}
              className="border p-2 rounded w-full"
              required
            />
            <input
              type="text"
              name="zipcode"
              placeholder="Zip Code"
              value={deliveryInfo.zipcode}
              onChange={handleInputChange}
              className="border p-2 rounded w-full"
              required
            />
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={deliveryInfo.country}
              onChange={handleInputChange}
              className="border p-2 rounded w-full"
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={deliveryInfo.phone}
              onChange={handleInputChange}
              className="border p-2 rounded w-full"
              required
            />
          </div>
        </form>

        {/* Cart Summary and Payment Method */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Order Summary</h2>
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-600">Your cart is empty.</p>
          ) : (
            <>
              <ul className="divide-y divide-gray-200 mb-4">
                {cartItems.map((item) => (
                  <li key={item.id} className="flex justify-between py-4">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
                      <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                    </div>
                    <p className="text-lg font-bold text-gray-900">${item.price}</p>
                  </li>
                ))}
              </ul>
              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between items-center mb-4">
                  <p className="text-xl font-bold text-gray-900">Total:</p>
                  <p className="text-xl font-bold text-gray-900">${totalPrice.toFixed(2)}</p>
                </div>

                {/* Payment Method */}
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Payment Method</h3>
                  <div className="flex flex-col gap-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="creditCard"
                        checked={paymentMethod === 'creditCard'}
                        onChange={handlePaymentChange}
                        className="mr-2"
                      />
                      Credit Card
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="paypal"
                        checked={paymentMethod === 'paypal'}
                        onChange={handlePaymentChange}
                        className="mr-2"
                      />
                      PayPal
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="cashOnDelivery"
                        checked={paymentMethod === 'cashOnDelivery'}
                        onChange={handlePaymentChange}
                        className="mr-2"
                      />
                      Cash on Delivery
                    </label>
                  </div>
                </div>
                <Link to='/adminpanel'>
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="bg-black text-white px-6 py-3 rounded-lg hover:bg-green-600 w-full"
                >
                  Place Order
                </button>
                </Link>
            
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;





