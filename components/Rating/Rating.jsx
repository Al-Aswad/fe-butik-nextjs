import { AiFillStar } from "react-icons/ai";

function Rating() {
    return (

        <div className="flex justify-center gap-4">
            <div className="flex flex-col items-center justify-center p-4 gap-y-4">
                <AiFillStar />
                <span className="text-gray-600">Rating</span>
            </div>

            <div className="flex flex-col items-center justify-center p-4 gap-y-4">
                <AiFillStar />
                <span className="text-gray-600">Info Toko</span>
            </div>

            <div className="flex flex-col items-center justify-center p-4 gap-y-4">
                <AiFillStar />
                <span className="text-gray-600">Blog</span>
            </div>
        </div>
    )
};

export default Rating;
// export default Banner;
