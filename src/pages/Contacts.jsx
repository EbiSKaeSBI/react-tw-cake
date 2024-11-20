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
                
            </section>
        </>
    )
}
export default Contacts