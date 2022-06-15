import Image from "next/image";
import Link from "next/link";
import { forwardRef, useEffect } from "react";
import imgProduct from "../../public/img/product1.jpeg";
import { ProductInterface } from "../../typings";

interface Props {
    product: ProductInterface;
}
const Product = ({ product }: Props) => {
    return (
        <>
            <Link href="products/aswad">
                <div className="relative flex flex-col w-[45%] md:w-[32%] overflow-hidden rounded-lg cursor-pointer shadow-md">
                    <div className="p-2 ">
                        <div className="relative p-2 rounded-lg thumnail">
                            <Image
                                className="object-contain w-full h-full"
                                // src={product.image}
                                src={
                                    product.galleries[0] ? product.galleries[0].photo : imgProduct
                                }
                                alt="image-product"
                                width="100%"
                                height="100%"
                                layout="responsive"
                            />
                            <div className="absolute bottom-[-10px] tags space-x-2">
                                <small className="px-1 py-[0.8] text-white bg-gray-800 rounded-sm bg-secodary ">
                                    {product.status}
                                </small>
                                <small className="px-1 py-[0.8] text-white bg-gray-800 rounded-sm bg-secodary ">
                                    Pre Order
                                </small>
                            </div>
                        </div>
                    </div>
                    <div className="relative px-4 py-2">
                        <div>
                            <h1 className="text-base font-semibold text-gray-700">
                                {product.name}
                            </h1>
                            {/* <p className="text-gray-600">2000000</p> */}
                        </div>
                    </div>
                    <div className="flex justify-center w-full pt-2 pb-4 cta">
                        {/* <button
              className="h-10 px-6 font-semibold text-white bg-black rounded-md"
              type="submit"
            >
              Buy now
            </button> */}
                        <p>Lihat Produk</p>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default Product;
