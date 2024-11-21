import BgContacts from "../assets/contacts.png"
import Knopochka from "../components/button/Knopochka";
const Contacts = () => {
    return (
        <>
            <section>
                <div className="px-40 py-5 self-center">
                    <div className="max-w-7xl">
                        <div className="min-h-[480px] relative">
                            <img src={BgContacts} alt="" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 z-20 p-4   flex flex-col ml-[56px] max-w-[848px]">
                                <div className="flex flex-col self-center gap-5  max-w-max translate-y-[140px]">
                                    <h1 className="text-5xl font-bold text-white">Контакт</h1>
                                    <div className="flex justify-between bg-white px-3 py-2 w-[480px] rounded-3xl items-center">
                                        <div className="flex gap-3 items-center">
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.9438 16.058L13.0321 12.1471C15.3874 9.31938 15.102 5.1393 12.3843 2.65798C9.6665 0.176656 5.47777 0.271852 2.87554 2.87408C0.273316 5.4763 0.17812 9.66504 2.65944 12.3828C5.14076 15.1006 9.32085 15.3859 12.1485 13.0307L16.0595 16.9424C16.3037 17.1866 16.6996 17.1866 16.9438 16.9424C17.1881 16.6982 17.1881 16.3022 16.9438 16.058ZM2.12665 7.75019C2.12665 4.64358 4.64505 2.12519 7.75165 2.12519C10.8583 2.12519 13.3767 4.64358 13.3767 7.75019C13.3767 10.8568 10.8583 13.3752 7.75165 13.3752C4.64648 13.3717 2.1301 10.8554 2.12665 7.75019Z" fill="#877363" />
                                            </svg>
                                            <input type="text" placeholder="Искать" className="outline-none" />
                                        </div>
                                        <Knopochka className="px-5" props="Поиск" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="px-40 py-5 self-center">
                    <div className="max-w-7xl">
                        <div className="mb-3">
                            <div className="mb-3">
                                <h2 className="text-[22px] font-bold px-4 pt-5 pb-3">Свяжитесь с нами</h2>
                            </div>
                            <div className="">
                                <p className="font-normal text-base px-4 pt-1 pb-3"> Мы будем рады услышать вас. Пожалуйста, не стесняйтесь обращаться к нам с любыми вопросами или комментариями.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 py-2 px-4 min-h-[72px]">
                            <div className="bg-gray-select p-3 rounded-[8px]">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_259_1324)">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6C9.92893 6 8.25 7.67893 8.25 9.75C8.25 11.8211 9.92893 13.5 12 13.5C14.0711 13.5 15.75 11.8211 15.75 9.75C15.75 7.67893 14.0711 6 12 6ZM12 12C10.7574 12 9.75 10.9926 9.75 9.75C9.75 8.50736 10.7574 7.5 12 7.5C13.2426 7.5 14.25 8.50736 14.25 9.75C14.25 10.9926 13.2426 12 12 12ZM12 1.5C7.44579 1.50517 3.75517 5.19579 3.75 9.75C3.75 12.6938 5.11031 15.8138 7.6875 18.7734C8.84552 20.1108 10.1489 21.3151 11.5734 22.3641C11.8318 22.545 12.1757 22.545 12.4341 22.3641C13.856 21.3147 15.1568 20.1104 16.3125 18.7734C18.8859 15.8138 20.25 12.6938 20.25 9.75C20.2448 5.19579 16.5542 1.50517 12 1.5ZM12 20.8125C10.4503 19.5938 5.25 15.1172 5.25 9.75C5.25 6.02208 8.27208 3 12 3C15.7279 3 18.75 6.02208 18.75 9.75C18.75 15.1153 13.5497 19.5938 12 20.8125Z" fill="#171412" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_259_1324">
                                            <rect width="24" height="24" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div className="max-w-[282px]">
                                <h3 className="text-base text-start">Посетите нашу кондитерскую</h3>
                                <p className="text-sm text-brown-light">Открыто с 9:00 am по 5:00 pm ежедневно</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 py-2 px-4">
                            <div className="bg-gray-select p-3 rounded-[8px]">
                                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.8472 12.8556L13.4306 10.8766L13.4184 10.8709C12.9526 10.6717 12.4177 10.7211 11.9963 11.0022C11.9718 11.0183 11.9483 11.0359 11.9259 11.0547L9.64406 13C8.19844 12.2978 6.70594 10.8166 6.00375 9.38969L7.95187 7.07312C7.97062 7.04969 7.98844 7.02625 8.00531 7.00094C8.28032 6.5807 8.32677 6.05073 8.12906 5.58906V5.57781L6.14437 1.15375C5.88009 0.543904 5.246 0.180692 4.58625 0.26125C1.95833 0.607054 -0.00475144 2.84943 0 5.5C0 12.9438 6.05625 19 13.5 19C16.1506 19.0048 18.3929 17.0417 18.7388 14.4137C18.8195 13.7542 18.4567 13.1202 17.8472 12.8556ZM13.5 17.5C6.87558 17.4928 1.50723 12.1244 1.5 5.5C1.4927 3.60618 2.89195 2.00108 4.76906 1.75C4.76869 1.75374 4.76869 1.75751 4.76906 1.76125L6.73781 6.1675L4.8 8.48687C4.78033 8.50951 4.76246 8.53364 4.74656 8.55906C4.45961 8.99938 4.42405 9.55777 4.65281 10.0309C5.50219 11.7681 7.2525 13.5053 9.00844 14.3538C9.48515 14.5804 10.0459 14.5398 10.485 14.2469C10.5091 14.2307 10.5322 14.2131 10.5544 14.1944L12.8334 12.25L17.2397 14.2234C17.2397 14.2234 17.2472 14.2234 17.25 14.2234C17.002 16.1033 15.3962 17.5064 13.5 17.5Z" fill="#171412" />
                                </svg>

                            </div>
                            <div className="max-w-[282px]">
                                <h3 className="text-base text-start">Позвоните нам</h3>
                                <p className="text-sm text-brown-light">+7 (495) 675-45-97</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 py-2 px-4">
                            <div className="bg-gray-select p-3 rounded-[8px]">
                                <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.4163 6.37562L10.4163 0.375625C10.1642 0.207475 9.83578 0.207475 9.58375 0.375625L0.58375 6.37562C0.375087 6.51484 0.249837 6.74916 0.25 7V16.75C0.25 17.5784 0.921573 18.25 1.75 18.25H18.25C19.0784 18.25 19.75 17.5784 19.75 16.75V7C19.7502 6.74916 19.6249 6.51484 19.4163 6.37562ZM7.0675 12.25L1.75 16V8.45594L7.0675 12.25ZM8.60219 13H11.3978L16.7069 16.75H3.29313L8.60219 13ZM12.9325 12.25L18.25 8.45594V16L12.9325 12.25ZM10 1.90094L17.6791 7.02063L11.3978 11.5H8.60406L2.32281 7.02063L10 1.90094Z" fill="#171412" />
                                </svg>

                            </div>
                            <div className="max-w-[282px]">
                                <h3 className="text-base text-start">Напишите нам</h3>
                                <p className="text-sm text-brown-light">Vovik@bk.fimoz.ru</p>
                            </div>
                        </div>

                    </div>
                    <div className="px-4 pt-5 pb-3">
                        <h2 className="text-[22px] font-bold text-start">Остались вопросы?</h2>
                    </div>
                    <div className="">
                        <form action="" className="flex flex-col items-start"> 
                            <div className="px-4 py-4">
                                <input type="text" placeholder="Имя" className="py-[15px] px-[15px] placeholder:text-brown-light outline-none border-[1px] rounded-[12px] w-[448px] h-[56px]" />
                            </div>
                            <div className="px-4 py-4">
                                <input type="text" placeholder="Почта" className="py-[15px] px-[15px] placeholder:text-brown-light outline-none border-[1px] rounded-[12px] w-[448px] h-[56px]" />
                            </div>
                            <div className="py-4 px-4">
                                <input type="text" className="py-[15px] px-[15px] placeholder:text-brown-light outline-none border-[1px] rounded-[12px] min-h-[144px] max-h-[144px] w-[448px]" />
                            </div>
                            <div className="px-4 py-3">
                                <button className="max-w-[480px] px-5 h-12 max-h-12 bg-[rgb(217,94,94)] text-white font-bold text-base rounded-3xl hover:bg-[rgb(247,210,186)] transition-all duration-300 hover:shadow-inner w-[480px]">Отправить</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>


        </>
    )
}
export default Contacts