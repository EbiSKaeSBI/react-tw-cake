import { useState } from 'react';
import ProductCard from '../components/card/card.jsx';
import Modal from '../components/modal/modal.jsx';

const products = [
    {
      id: 1,
      name: 'Ванильный торт',
      price: 2000,
      available: 2,
      image: 'https://i.pinimg.com/1200x/92/0a/03/920a0343dda62744d78ab756d5efcedf.jpg',
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
      name: 'Шоколадный фейерверк торт',
      price: 2500,
      available: 3,
      image: 'https://i.pinimg.com/736x/0b/19/3d/0b193d304b80da27a042d869793e8175.jpg',
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
      image: 'https://i.pinimg.com/736x/f7/42/ed/f742ed21bcf61d29baef0dac6fca7466.jpg',
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
      image: 'https://i.pinimg.com/1200x/0d/c4/ad/0dc4ad8a989bd77f7fb63759cc57d1eb.jpg',
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
      image: 'https://i.pinimg.com/736x/b2/8c/1a/b28c1a1a0c21d5e69e3ff296e881380b.jpg',
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
      image: 'https://i.pinimg.com/736x/ad/21/6c/ad216c6bc4d6657e82daa6da1c0082e4.jpg',
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
      image: 'https://i.pinimg.com/736x/73/19/cf/7319cfeeec041484add5dd6674b0c761.jpg',
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
      image: 'https://i.pinimg.com/736x/f3/91/33/f391336a92721cd7524639096c909707.jpg',
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
      image: 'https://i.pinimg.com/1200x/a9/af/63/a9af63ecacbf04bda22ca2a50a97d12e.jpg',
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
      image: 'https://i.pinimg.com/736x/e0/3a/c6/e03ac6831f45291da56a715b05b9b09c.jpg',
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
      image: 'https://i.pinimg.com/1200x/78/d1/44/78d144a49e522c363ecf75449a40ef25.jpg',
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
      image: 'https://i.pinimg.com/736x/13/81/26/13812639bef9b7dd39bd5cb5261034e8.jpg',
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