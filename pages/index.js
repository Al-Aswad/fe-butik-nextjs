import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { FaSortAmountDownAlt } from 'react-icons/fa';
import { AiOutlineSearch, AiOutlineUser } from 'react-icons/ai';

import iconLogo from '../public/img/logo.png';
import imgBanner from '../public/img/img-banner.jpg';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Butik Zahrazhafira</title>
                <meta name="description" content="Dapatkan gaun terbaik mu" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className="min-h-screen">

                <div className="fixed left-0 right-0 z-40 bg-red-500">
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
                                            {/* <FaSortAmountDownAlt className="w-6 h-6" /> */}
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

                <div>
                    <div className="flex items-center justify-center max-w-[1024px] mx-auto">
                        <Image className="rounded-md" src={imgBanner} alt="image banner" />
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <div className="mt-2">
                            <Image
                                height={80}
                                width={80}
                                className="w-[80px]"
                                src={iconLogo}
                                alt="icon butik"
                            />
                        </div>
                        <div className="my-4">
                            <h1 className="text-2xl font-semibold text-gray-700">Zahrazhafira</h1>
                        </div>
                    </div>

                </div>
            </header>
            <main className="pt-[70px] mb-8">
                main
            </main>
            <footer>
                footer
            </footer>
        </div>
    );
}
