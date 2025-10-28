 const Feedback = () => {
  const testimonials = [
    {
        id: 1,
        name: 'Иван',
        text: 'Отличный сервис! Всегда быстро и качественно решают вопросы.',
        rating: 5,
      },
      {
        id: 2,
        name: 'Анна',
        text: 'Очень довольна работой компании. Рекомендую!',
        rating: 5,
      },
      {
        id: 3,
        name: 'Петр',
        text: 'Всегда на связи, оперативно помогают. Спасибо!',
        rating: 5,
      },
      {
        id: 4,
        name: 'Мария',
        text: 'Отличный сервис! Всегда быстро и качественно решают вопросы.',
        rating: 5,
      },
      {
        id: 5,
        name: 'Алексей',
        text: 'Очень довольна работой компании. Рекомендую!',
        rating: 5,
      },
      {
        id: 6,
        name: 'Дмитрий',
        text: 'Всегда на связи, оперативно помогают. Спасибо!',
        rating: 5,
      },
      {
        id: 7,
        name: 'Елена',
        text: 'Отличный сервис! Всегда быстро и качественно решают вопросы.',
        rating: 5,
      },
      {
        id: 8,
        name: 'Сергей',
        text: 'Очень довольна работой компании. Рекомендую!',
        rating: 4,
      },
      {
        id: 9,
        name: 'Ольга',
        text: 'Всегда на связи, оперативно помогают. Спасибо!',
        rating: 5,
      }
      ];
    
      return (
        <div className="bg-gray-100 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 gap-8 overflow-x-auto">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-lg">
                  <p className="text-gray-700 mb-4">{testimonial.text}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-gray-900 font-semibold">{testimonial.name}</p>
                    <div className="flex items-center">
                      {[...Array(testimonial.rating)].map((_, index) => (
                        <svg
                          key={index}
                          className="w-5 h-5 text-yellow-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 9.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    };
export default Feedback;