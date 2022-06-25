import Image from "next/image";
import iconFilter from "../../public/icon/filter.png";
import iconSearch from "../../public/icon/search.png";
import iconUser from "../../public/icon/user.png";
import { FaSortAmountDownAlt } from "react-icons/fa";
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import Link from "next/link";
import Banner from "../Banner/Banner";
import Rating from "../Rating/Rating";

const Header = () => {
    return (
        <header>

            <div className="fixed left-0 top-0 right-0 z-40 bg-red-500">
                <div className="flex flex-row justify-center flex-auto">
                    <nav className="bg-white h-[70px] flex flex-auto flex-row items-center justify-center">
                        <div className="flex justify-center flex-auto sm:w-2/6">
                            <div />
                        </div>
                        <div className="flex flex-auto w-4/6 pl-4 sm:pl-0 sm:text-center sm:justify-center sm:w-2/6">
                            <Link href="/">
                                <p className="font-semibold tracking-wide text-gray-800 text-md">
                                    Zahrazhafira
                                </p>
                            </Link>
                        </div>
                        <div className="flex justify-end flex-auto w-2/6 pr-2 sm:pr-4">
                            <div className="flex items-center sm:mr-4 sm:gap-2">
                                <div>
                                    <a
                                        className="flex justify-center p-2 rounded-full hover:bg-gray-200 item-center"
                                        href="#s"
                                    >
                                        <FaSortAmountDownAlt />
                                    </a>
                                </div>
                                <div>
                                    <a
                                        className="flex justify-center p-2 rounded-full hover:bg-gray-200 item-center"
                                        href="#s"
                                    >
                                        <AiOutlineSearch className="w-6 h-6" />
                                    </a>
                                </div>
                                <div>
                                    <a
                                        className="flex justify-center p-2 rounded-full item-center hover:bg-gray-200"
                                        href="#s"
                                    >
                                        <AiOutlineUser className="w-6 h-6" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
