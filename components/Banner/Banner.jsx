import Image from 'next/image';
import iconLogo from '../../public/img/logo.png';
import imgBanner from '../../public/img/img-banner.jpg';
import { AiFillStar } from "react-icons/ai";

function Banner() {
    return (
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
                    <h1 className="text-2xl font-semibold text-gray-700">
                        Zahrazhafira
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default Banner;
