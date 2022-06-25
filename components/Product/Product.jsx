import React from 'react';
import Image from "next/image";
import Link from "next/link";

const Product = () => {
    return (
        <>
            <Link href="products/aswad">
                <div className="relative flex flex-col w-full overflow-hidden rounded-lg cursor-pointer shadow-md">
                    <div className="p-2 ">
                        <div className="relative p-2 rounded-lg thumnail">
                            <Image
                                className="object-contain w-full h-full"
                                src={'/img/product1.jpeg'}
                                alt="image-product"
                                width="100%"
                                height="100%"
                                layout="responsive"
                            />
                            <div className="absolute bottom-[-10px] tags space-x-2">
                                <small className="px-1 py-[0.8] text-white bg-gray-800 rounded-sm bg-secodary ">
                                    product Status
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
                                Product Name
                            </h1>
                        </div>
                    </div>
                    <div className="flex justify-center w-full pt-2 pb-4 cta">
                        <p>Lihat Produk</p>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default Product;
