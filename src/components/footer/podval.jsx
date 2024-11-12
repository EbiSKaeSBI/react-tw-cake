import { FaFacebook, FaInstagram, FaYoutube, FaTelegram } from 'react-icons/fa';

const section = [
    {
        title: "Навигация",
        items: ['Главная', 'О нас', 'Каталог']
    },
    {
        title: "Контакты",
        items: ['+1 (001) 981-76-17', 'info@logoipsum.com']
    }
    
];

const items = [
    {
        name: FaFacebook,
        icon: <FaFacebook />,
        link: 'https://pornworks.ai'
    },
    {
        name: FaInstagram,
        icon: <FaInstagram />,
        link: 'https://pornhub.com'
    },
    {
        name: FaYoutube,
        icon: <FaYoutube />,
        link: 'https://www.youtube.com'
    },
    {
        name: FaTelegram,
        icon: <FaTelegram />,
        link: 'https://t.me/monika2013'
    }
];

function Footer() {
    return (
        <div className="w-full mt-24  text-black py-8 px-2">
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 border-b-2 border-gray-600 py-8">
                {section.map((section, index) => (
                    <div key={index}>
                        <h6 className='font-bold uppercase pt-2'>
                            {section.title}
                        </h6>
                        <ul>
                            {section.items.map((item, i) => (
                                <li key={i} className='py-1 text-black hover:text-gray-600 cursor-pointer'>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
                <div className="col-span-2 pt-8 md:pt-2">
                    <p className='font-bold uppercase'>
                        РАССЫЛКА О НОВЫХ ТОРТАХ
                    </p>
                    <p className='py-4'>
                        Подпишитесь на нашу рассылку и будьте в курсе новых тортов!
                    </p>
                    <form className='flex flex-col sm:flex-row'>
                        <input type="email" placeholder='Введите ваш email' className='w-full p-2 mr-4 rounded-md mb-4 border-black' />
                        <button className='p-2 mb-4'>Подписаться</button>
                    </form>
                </div>
            </div>
            <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500">
                <p>
                    2024 vovik bakery
                </p>
                <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
                    {items.map((x, index) => (
                        <a href={x.link} key={index} target="_blank" rel="noopener noreferrer" className='hover:text-gray-700 cursor-pointer'>
                            {x.icon}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Footer;