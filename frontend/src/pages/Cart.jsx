import React, { useState } from 'react';
import w1 from "../assets/watch.jpg";
import w2 from "../assets/w4.jpg";
const dummyCart = [
    {
        id: 1,
        name: ' Smart Watch Smart gurrenty loving boy',
        price: 120,
        quantity: 1,
        image: w1,
    },
    {
        id: 2,
        name: 'Wireless Earbuds',
        price: 50,
        quantity: 2,
        image: w2,
    },
];
console.log(dummyCart)
function Cart() {
    const [cartItems, setCartItems] = useState(dummyCart);

    const handleQuantityChange = (id, delta) => {
        setCartItems(prev =>
            prev.map(item =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, item.quantity + delta) }
                    : item
            )
        );
    };

    const removeItem = id => {
        setCartItems(prev => prev.filter(item => item.id !== id));
    };

    const total = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            <h2 className="md:text-3xl text-lg font-bold mb-8 text-center">🛒 Your Cart</h2>

            <div className="grid md:grid-cols-3 gap-6">
                {/* Products List */}
                <div className="md:col-span-2 space-y-4">
                    {cartItems.map(item => (
                        <div
                            key={item.id}
                            className="flex items-center bg-white shadow-md rounded-lg px-3 py-1 md:p-4"
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                className="md:w-20 md:h-20 w-12 h-12 object-cover rounded"
                            />
                            <div className="mx-2 flex-1">
                                <h3 className="font-semibold text-sm sm:text-base w-[80px] md:w-[380px]">
                                    {item.name}
                                </h3>
                                <p className="text-gray-600">${item.price}</p>
                            </div>
                            <div className="flex ml-4 items-center space-x-2">
                                <button
                                    onClick={() => handleQuantityChange(item.id, -1)}
                                    className="px-2 py-1 bg-gray-200 rounded"
                                >
                                    -
                                </button>
                                <span className="px-1">{item.quantity}</span>
                                <button
                                    onClick={() => handleQuantityChange(item.id, 1)}
                                    className="px-2 py-1 bg-gray-200 rounded"
                                >
                                    +
                                </button>
                            </div>
                            <div className="w-14 md:w-24 text-center text-sm md:text-lg font-medium">
                                ${item.price * item.quantity}
                            </div>
                            <div className='bg-red-100 flex justify-center justify-items-center w-8 h-8 rounded-3xl'>
                                <button
                                    onClick={() => removeItem(item.id)}
                                    className="text-red-500 h-6 text-xl font-bold"
                                >
                                    ×
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Summary */}
                <div className="bg-white shadow-lg rounded-lg p-6 h-fit">
                    <h3 className="text-xl font-bold mb-4">Order Summary</h3>
                    <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                            <span>Total Items:</span>
                            <span>{cartItems.length}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Shipping:</span>
                            <span className="text-green-600">Free</span>
                        </div>
                        <hr className="my-2" />
                        <div className="flex justify-between font-semibold text-lg">
                            <span>Total:</span>
                            <span>${total}</span>
                        </div>
                    </div>
                    <button className="mt-6 w-full bg-[#642771] text-white py-2 rounded hover:bg-blue-700 transition">
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Cart;
