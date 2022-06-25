import Image from 'next/image'
import React from 'react'

const ProductDetails = () => {
    return (
        <div className='w-full p-2 mx-auto sm:p-4 lg:w-3/4'>

            <div className='grid grid-cols-2'>
                <div className='product__detail-container gap-2 overflow-hidden rounded-md flex justify-center flex-col items-center'>
                    <div className='w-10/12'>
                        <Image
                            className="object-contain w-full h-full "
                            src="/img/product1.jpeg"
                            alt="image-product"
                            width="100%"
                            height="100%"
                            layout="responsive"
                        />

                    </div>
                    <div className='flex justify-start gap-2 w-10/12'>
                        <div className="w-20 overflow-hidden rounded-sm">
                            <Image
                                className="object-contain w-full h-full "
                                src="/img/product1.jpeg"
                                alt="image-product"
                                width="100%"
                                height="100%"
                                layout="responsive"
                            />
                        </div>
                        <div className="w-20 overflow-hidden rounded-sm">
                            <Image
                                className="object-contain w-full h-full "
                                src="/img/product1.jpeg"
                                alt="image-product"
                                width="100%"
                                height="100%"
                                layout="responsive"
                            />
                        </div>
                        <div className="w-20 overflow-hidden rounded-sm">
                            <Image
                                className="object-contain w-full h-full "
                                src="/img/product1.jpeg"
                                alt="image-product"
                                width="100%"
                                height="100%"
                                layout="responsive"
                            />
                        </div>

                    </div>
                </div>
                <div>
                    <div className='flex gap-4 flex-col'>
                        <div className='flex gap-2'>
                            <span className='bg-slate-500 text-white p-[0.5px] px-1 rounded-sm'>ada Stok</span>
                            <span className='bg-slate-500 text-white p-[0.5px] px-1 rounded-sm'>Mini Dress</span>
                        </div>

                        <div>
                            <h1 className='text-xl font-semibold text-slate-800'>Lorem ipsum dolor sit amet.</h1>
                            <h1 className='text-xl font-semibold text-slate-400'>Rp. 400000</h1>
                        </div>

                        <button className='py-2 px-4 bg-slate-600 text-white rounded-md'>Beli Sekarang</button>
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque vero ratione ut itaque repellendus veritatis cumque at excepturi eveniet iure magni inventore, tempore debitis error ab molestiae et aut nam?</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-10 text-center'>
                <h3 className='font-semibold text-lg text-slate-600'>Kamu mungkin juga suka</h3>

                <div className='flex justify-start gap-2 mt-6'>
                    <div className="w-40 overflow-hidden rounded-sm">
                        <Image
                            className="object-contain w-full h-full "
                            src="/img/product1.jpeg"
                            alt="image-product"
                            width="100%"
                            height="100%"
                            layout="responsive"
                        />
                    </div>
                    <div className="w-40 overflow-hidden rounded-sm">
                        <Image
                            className="object-contain w-full h-full "
                            src="/img/product1.jpeg"
                            alt="image-product"
                            width="100%"
                            height="100%"
                            layout="responsive"
                        />
                    </div>
                    <div className="w-40 overflow-hidden rounded-sm">
                        <Image
                            className="object-contain w-full h-full "
                            src="/img/product1.jpeg"
                            alt="image-product"
                            width="100%"
                            height="100%"
                            layout="responsive"
                        />
                    </div>
                    <div className="w-40 overflow-hidden rounded-sm">
                        <Image
                            className="object-contain w-full h-full "
                            src="/img/product1.jpeg"
                            alt="image-product"
                            width="100%"
                            height="100%"
                            layout="responsive"
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductDetails