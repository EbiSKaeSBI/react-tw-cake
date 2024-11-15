import React from 'react';

const Modal = ({ product, onClose, onAddToCart }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded-[30px] shadow-lg w-4/5 max-w-[800px] max-h-[90vh] overflow-y-auto">
            <div className="flex flex-col md:flex-row gap-6">
                <div className="flex justify-center w-full md:w-1/2">
                    <img src={product.image} alt={product.name} className="w-full max-h-80 object-cover rounded-lg mb-4" />
                </div>
                <div className="flex flex-col justify-between w-full md:w-1/2 px-4">
                    <h2 className="text-2xl font-medium mb-4 text-start">{product.name}</h2>
                    <div className="mb-4">
                        <h3 className="text-sm font-semibold mb-2 text-start">Состав:</h3>
                        <p className="text-sm text-gray-700 max-w-[300px] break-words text-start">
                            {product.ingredients.join(', ')}
                        </p>
                    </div>
                    <div className="mb-4">
                        <div className="flex gap-3">
                            <button className="bg-gray-200 text-black p-2 rounded-lg hover:bg-pink-light">Маленький</button>
                            <button className="bg-gray-200 text-black p-2 rounded-lg hover:bg-pink-light">Средний</button>
                            <button className="bg-gray-200 text-black p-2 rounded-lg hover:bg-pink-light">Большой</button>
                        </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-4 max-w-[300px] break-words text-start">{product.description}</p>
                    <div className="flex gap-4">
                        <button
                            className="px-5 py-2 bg-[rgb(217,94,94)] text-white font-bold rounded-3xl hover:bg-[rgb(247,210,186)] transition-all duration-300"
                            onClick={() => onAddToCart(product)}
                        >
                            В корзину за {product.price} Р
                        </button>
                        <button
                            className="bg-gray-500 text-white p-2 rounded-lg hover:bg-gray-600"
                            onClick={onClose}
                        >
                            Закрыть
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Modal;
