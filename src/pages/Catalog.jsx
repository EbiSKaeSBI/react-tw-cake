import React, { useState } from 'react';
import ProductCard from '../components/CARD/Card';
import Modal from '../components/Modal/Modal';

const products = [
    {
      id: 1,
      name: 'Ванильный торт',
      price: 2000,
      available: 2,
      image: 'https://i.pinimg.com/control/564x/ee/ca/de/eecade9a4ccb35324114d037e3e91a88.jpg',
      description: 'Легкий ванильный торт с нежным сливочным кремом.',
      ingredients: [
        'мука',
        'сливочное масло',
        'молоко жирностью 3,5%',
        'яйца',
        'сахар',
        'ваниль',
        'соль',
      ],
      category: 'Торты',
    },
    {
      id: 2,
      name: 'Шоколадный торт',
      price: 2500,
      available: 3,
      image: 'https://i.pinimg.com/control/564x/41/2b/42/412b4230f2f1c0d7b15c8afba1a6413e.jpg',
      description: 'Плотный шоколадный торт с темным ганашем.',
      ingredients: [
        'мука',
        'шоколад',
        'сливочное масло',
        'яйца',
        'сахар',
        'соль',
      ],
      category: 'Торты',
    },
    {
      id: 3,
      name: 'Фруктовый тарт',
      price: 1500,
      available: 5,
      image: 'https://i.pinimg.com/control/564x/53/71/25/537125b34d18eeffa9c088932b535567.jpg',
      description: 'Тарт с свежими фруктами и кремом патисьер.',
      ingredients: [
        'мука',
        'сливочное масло',
        'сахар',
        'фрукты',
        'ваниль',
        'соль',
      ],
      category: 'Десерты',
    },
    {
      id: 4,
      name: 'Красный бархат',
      price: 2200,
      available: 4,
      image: 'https://i.pinimg.com/control/736x/d8/17/b0/d817b0f0d2b3136f33900dcca09d89d7.jpg',
      description: 'Красный бархат с кремом из сливочного сыра.',
      ingredients: [
        'мука',
        'какао-порошок',
        'сливочный сыр',
        'яйца',
        'сахар',
        'ваниль',
        'соль',
      ],
      category: 'Торты',
    },
    {
      id: 5,
      name: 'Клубничное парфе',
      price: 1000,
      available: 6,
      image: 'https://i.pinimg.com/control/564x/9b/3f/8c/9b3f8cf5a0cb75aa559ee25bd839f23f.jpg',
      description: 'Легкое клубничное парфе с йогуртом.',
      ingredients: [
        'клубника',
        'йогурт',
        'сахар',
        'сливки',
        'ваниль',
      ],
      category: 'Десерты',
    },
    {
      id: 6,
      name: 'Тирамису',
      price: 1800,
      available: 2,
      image: 'https://i.pinimg.com/736x/f9/56/2a/f9562ad1110e6c989452ec051096d27b.jpg',
      description: 'Итальянский десерт с маскарпоне и кофе.',
      ingredients: [
        'маскарпоне',
        'яйца',
        'сахар',
        'кофе',
        'какао',
      ],
      category: 'Десерты',
    },
    {
      id: 7,
      name: 'Бискотти с миндалем',
      price: 600,
      available: 10,
      image: 'https://i.pinimg.com/564x/cf/42/7e/cf427ec7f300d872ed306975d0f8cfa1.jpg',
      description: 'Хрустящее итальянское печенье с миндалем.',
      ingredients: [
        'мука',
        'миндаль',
        'яйца',
        'сахар',
        'соль',
      ],
      category: 'Печенье',
    },
    {
      id: 8,
      name: 'Круассан',
      price: 300,
      available: 15,
      image: 'https://i.pinimg.com/564x/64/da/b4/64dab420786f113e5e1a240ffbb389e1.jpg',
      description: 'Классический французский круассан с маслом.',
      ingredients: [
        'мука',
        'сливочное масло',
        'сахар',
        'дрожжи',
        'соль',
      ],
      category: 'Выпечка',
    },
    {
      id: 9,
      name: 'Маффин с черникой',
      price: 500,
      available: 8,
      image: 'https://i.pinimg.com/control/564x/d9/f9/c4/d9f9c409bf3fff547d13e16cb80eb1aa.jpg',
      description: 'Нежный маффин с черникой.',
      ingredients: [
        'мука',
        'черника',
        'яйца',
        'сахар',
        'сливочное масло',
      ],
      category: 'Выпечка',
    },
    {
      id: 10,
      name: 'Эклеры с ванильным кремом',
      price: 1200,
      available: 7,
      image: 'https://i.pinimg.com/control/564x/ab/88/cc/ab88cc46a10cdd9d2cb50699671b3b59.jpg',
      description: 'Французские эклеры с ванильным кремом.',
      ingredients: [
        'мука',
        'яйца',
        'масло',
        'ваниль',
        'сахар',
      ],
      category: 'Десерты',
    },
    {
      id: 11,
      name: 'Чизкейк Нью-Йорк',
      price: 2000,
      available: 5,
      image: 'https://i.pinimg.com/control/564x/32/04/66/3204669c72e0c7bd26ad026be83a879c.jpg',
      description: 'Классический чизкейк Нью-Йорк с кремом.',
      ingredients: [
        'сливочный сыр',
        'сахар',
        'яйца',
        'ваниль',
        'печенье',
      ],
      category: 'Десерты',
    },
    {
      id: 12,
      name: 'Пирог с яблоками',
      price: 1300,
      available: 4,
      image: 'https://i.pinimg.com/564x/08/39/09/083909bb22092ce248788a403247a9df.jpg',
      description: 'Домашний яблочный пирог с корицей.',
      ingredients: [
        'мука',
        'яблоки',
        'сахар',
        'корица',
        'сливочное масло',
      ],
      category: 'Выпечка',
    },
  ];
  
  const categories = ['Все', 'Торты', 'Десерты', 'Печенье', 'Выпечка'];
  

const CatalogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = selectedCategory === 'Все'
    ? products
    : products.filter(product => product.category === selectedCategory);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const handleAddToCart = (product) => {
    alert(`Добавлено в корзину: ${product.name}`);
    handleCloseModal();
  };

  return (
    <div className="flex">
      <aside className="w-1/4 p-4 text-start">
        <h2 className="text-xl font-bold mb-4"></h2>
        <ul>
          {categories.map((category, index) => (
            <li
              key={index}
              className={`cursor-pointer p-2 ${selectedCategory === category ? 'bg-pink-light text-black rounded-[19px] text-start' : 'hover:bg-gray-select rounded-[19px]'}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </aside>
      <div className="w-3/4 p-4">
        <h1 className="text-3xl font-bold mb-6">Каталог товаров</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} onClick={handleProductClick} />
          ))}
        </div>
      </div>
      {selectedProduct && (
        <Modal
          product={selectedProduct}
          onClose={handleCloseModal}
          onAddToCart={handleAddToCart}
        />
      )}
    </div>
  );
};

export default CatalogPage;