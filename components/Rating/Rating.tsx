import iconStar from "../../public/icon/star.png";
import iconShop from "../../public/icon/shop.png";
import iconBlog from "../../public/icon/blogging.png";
import Image from "next/image";

const Rating = () => {
    return (
        <>
            <div className="flex justify-center gap-4">
                <div className="flex flex-col items-center justify-center p-4 gap-y-4">
                    <Image width={24} height={24} src={iconStar} alt="icon start" />
                    <span className="text-gray-600">Rating</span>
                </div>

                <div className="flex flex-col items-center justify-center p-4 gap-y-4">
                    <Image width={24} height={24} src={iconShop} alt="icon start" />
                    <span className="text-gray-600">Info Toko</span>
                </div>

                <div className="flex flex-col items-center justify-center p-4 gap-y-4">
                    <Image width={24} height={24} src={iconBlog} alt="icon start" />
                    <span className="text-gray-600">Blog</span>
                </div>
            </div>
        </>
    );
};

export default Rating;
