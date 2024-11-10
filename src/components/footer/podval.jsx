import { FaFacebook, FaInstagram, FaYoutube, FaTelegram } from 'react-icons/fa'
const section = [
    {
        title: "Контакты",
        items: ['+1 (001) 981-76-17', 'info@logoipsum.com']
    },
    {
        title: "Навигация",
        items: ['Главная', 'О нас', 'Каталог']
    }
]
const items = [
    {
        name: Facebook,
        icon: <FaFacebook />,
        link: 'https://www.facebook.com'
    },
    {
        name: Instagram,
        icon: <FaInstagram />,
        link: 'https://www.instagram.com'
    },
    {
        name: Youtube,
        icon: <FaYoutube />,
        link: 'https://www.youtube.com'
    },
    {
        name: Telegram,
        icon: <FaTelegram />,
        link: 'https://t.me/monika2013'
    }

]
function Footer() {
    return (
        <>
            <div className="w-full mt-24 bg-white text-black py-y px-2">
                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 border-b-2 border-gray-600 py-8">
                    {
                        section.map((section, index) => (
                            <div key={index}>
                                <h6 className='font-bold uppercase pt-2'>
                                    {section.title}
                                </h6>
                                <ul>
                                    {
                                        section.items.map((item, i) => (
                                            <li key={i}
                                                className='py-1 text-black hover:text-gray-600 cursor-pointer'>
                                                {item}
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        ))
                    }
                    <div className="col-span-2 pt-8 md:pt-2">
                        <p className='font-bold uppercase'>
                            РАССЫЛКА О НОВЫХ ТОРТАХ
                        </p>
                        <p className='py-4'>
                            Подпишитесь на нашу рассылку и будьте в курсе новых тортов!
                        </p>
                        <form action="" className='flex flex-col sm:flex-row'>
                            <input type="email" placeholder='Введите ваш email' className='w-full p-2 mr-4 rouunded-md mb-4' />
                            <button className='p-2 mb-4'>Подписаться</button>
                        </form>
                    </div>
                </div>
                <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500">
                    <p>
                        2024 vovik bakery
                    </p>
                    <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
                        {
                            items.map((x, index) => {
                                return <x.icon key={index} className='hover:text-gray-700 cursor-pointer'/>
                            }

                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer