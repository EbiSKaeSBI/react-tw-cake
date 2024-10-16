import logo from "../../assets/logo.svg"
function NavBar() {
    return (
        <>
            <header className="flex justify-between items-center text-black py-6 px-8
        md:px-5  drop-shadow-md">
                <a href="#" className="flex gap-4 items-center">
                    <img src={logo} alt="" className="max-w-[16px] max-h-[16px]" />
                    <p className="text-2xl font-bold">Vovik</p>
                </a>
                <ul className="flex gap-8 self-center">
                    <li className="text-black"><a href="#" className="p-3 py-1 text-sm  font-semibold hover:bg-gray-700 hover:text-white rounded-md transition-all">Главная</a></li>
                    <li className="text-black"><a href="#" className="p-3 py-1 text-sm  font-semibold hover:bg-gray-700 hover:text-white rounded-md transition-all">О нас</a></li>
                    <li className="text-black"><a href="#" className="p-3 py-1 text-sm  font-semibold hover:bg-gray-700 hover:text-white rounded-md transition-all">Каталог</a></li>
                    <li className="text-black"><a href="#" className="p-3 py-1 text-sm  font-semibold hover:bg-gray-700 hover:text-white rounded-md transition-all">Контакты</a></li>
                    <li className="text-black"><a href="#"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_298_670)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.0406 16.5625C16.8508 14.5055 15.0172 13.0305 12.8773 12.3313C15.053 11.0361 16.0951 8.44698 15.4235 6.00575C14.7518 3.56451 12.5319 1.87287 10 1.87287C7.46806 1.87287 5.24816 3.56451 4.57652 6.00575C3.90487 8.44698 4.94704 11.0361 7.12266 12.3313C4.98281 13.0297 3.14922 14.5047 1.95938 16.5625C1.84059 16.7562 1.83627 16.9991 1.94811 17.1969C2.05995 17.3947 2.27031 17.5162 2.49752 17.5142C2.72473 17.5123 2.93298 17.3872 3.04141 17.1875C4.51328 14.6438 7.11484 13.125 10 13.125C12.8852 13.125 15.4867 14.6438 16.9586 17.1875C17.067 17.3872 17.2753 17.5123 17.5025 17.5142C17.7297 17.5162 17.9401 17.3947 18.0519 17.1969C18.1637 16.9991 18.1594 16.7562 18.0406 16.5625ZM5.625 7.5C5.625 5.08375 7.58375 3.125 10 3.125C12.4162 3.125 14.375 5.08375 14.375 7.5C14.375 9.91625 12.4162 11.875 10 11.875C7.58483 11.8724 5.62758 9.91517 5.625 7.5Z" fill="#171412" />
                        </g>
                        <defs>
                            <clipPath id="clip0_298_670">
                                <rect width="20" height="20" fill="none" />
                            </clipPath>
                        </defs>
                    </svg></a></li>
                    <li className="text-black"><a href="#" ><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_298_675)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.875 3.125H3.125C2.43464 3.125 1.875 3.68464 1.875 4.375V15.625C1.875 16.3154 2.43464 16.875 3.125 16.875H16.875C17.5654 16.875 18.125 16.3154 18.125 15.625V4.375C18.125 3.68464 17.5654 3.125 16.875 3.125ZM16.875 15.625H3.125V4.375H16.875V15.625ZM13.75 6.875C13.75 8.94607 12.0711 10.625 10 10.625C7.92893 10.625 6.25 8.94607 6.25 6.875C6.25 6.52982 6.52982 6.25 6.875 6.25C7.22018 6.25 7.5 6.52982 7.5 6.875C7.5 8.25571 8.61929 9.375 10 9.375C11.3807 9.375 12.5 8.25571 12.5 6.875C12.5 6.52982 12.7798 6.25 13.125 6.25C13.4702 6.25 13.75 6.52982 13.75 6.875Z" fill="#171412"/>
</g>
<defs>
<clipPath id="clip0_298_675">
<rect width="20" height="20" fill="none"/>
</clipPath>
</defs>
</svg></a></li>
                </ul>
            </header>
        </>
    )
}
export default NavBar