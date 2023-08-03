/* eslint-disable @next/next/no-img-element */
import RootLayout from '@/components/Layouts/RootLayout';
import React, { useEffect, useState } from 'react'
import { ShopOutlined, SaveOutlined } from "@ant-design/icons";
import styles from "@/styles/Pcbuilder.module.css";
import icon1 from "../../assets/images/cpu.png"
import Link from 'next/link';
import { useAppSelector } from '@/redux/features/hook';

function PcBuilder({ productData }) {
    const products = useAppSelector(state => state.cart?.products);


    return (
        <div className='flex justify-center items-centerm mt-2 md:mt-20'>
            <div className="container mx-auto order border-blue-500 border-2 w-96 md:w-[55%] p-10 ">
                <header className="flex justify-between items-center border-blue-500 border-b pb-5">
                    <h1 className="text-xl md:text-2xl font-bold text-orange-600">PC Builder</h1>
                    <div className="flex gap-4">
                        <div className="flex flex-col">
                            <ShopOutlined className='text-orange-600 text-2xl' />
                            <p className='text-gray-900 font-bold'>Add to Cart</p>
                        </div>
                        <div className={styles.vertica}> </div>
                        <div className="flex flex-col">
                            <SaveOutlined className='text-orange-600 text-2xl' />
                            <p className='text-gray-900 font-bold'>Save PC</p>
                        </div>
                    </div>
                </header>

                {/* CPU Section */}

                <section className="pt-4 flex flex-col md:flex-row justify-between items-center border-blue-500 border-b pb-5">
                    <div className='flex flex-col md:flex-row items-center justify-start gap-3'>
                        
                            <img className='w-16' src="https://cdn-icons-png.flaticon.com/512/3716/3716484.png" alt='' />
                        
                        <div className="flex flex-col">
                            <p className='text-gray-900 text-sm'>CPU<span className='bg-gray-600 ml-1 px-1 text-white'>Required</span></p>
                            <p className='text-gray-900 text-sm'>AMD Athlon 200GE AM4 Socket Desktop Processor with Radeon</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-4">
                        <p className='text-black'>Price৳</p>
                        <div className={`${styles.vertica} hidden md:block`}> </div>
                        <Link href="categories/processor">
                            <button className="btn  btn-outline btn-primary px-7">Choose</button>
                        </Link>
                    </div>
                </section>


                {/* Motherboard Section */}
                <section className="pt-4 flex flex-col md:flex-row justify-between items-center border-blue-500 border-b pb-5">
                    <div className='flex flex-col md:flex-row items-center justify-start gap-3'>
                        <img className='w-16' src="https://cdn-icons-png.flaticon.com/512/2287/2287895.png" alt='' />
                        <div className="flex flex-col">
                            <p className='text-gray-900 text-sm'>Motherboard<span className='bg-gray-600 ml-1 px-1 text-white'>Required</span></p>
                            <p className='text-gray-900 text-sm'>AMD Athlon 200GE AM4 Socket Desktop Processor with Radeon</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-4">
                        <p className='text-black'>Price৳</p>
                        <div className={`${styles.vertica} hidden md:block`}> </div>
                        <Link href="/categories/motherboard">
                            <button className="btn  btn-outline btn-primary px-7">Choose</button>
                        </Link>
                    </div>
                </section>
                {/* Power Supply Section */}
                <section className="pt-4 flex flex-col md:flex-row justify-between items-center border-blue-500 border-b pb-5">
                    <div className='flex flex-col md:flex-row items-center justify-start gap-3'>
                        <img className='w-16' src="https://cdn-icons-png.flaticon.com/512/7568/7568226.png" alt='' />
                        <div className="flex flex-col">
                            <p className='text-gray-900 text-sm'>Power-Supply-Unit<span className='bg-gray-600 ml-1 px-1 text-white'>Required</span></p>
                            <p className='text-gray-900 text-sm'>AMD Athlon 200GE AM4 Socket Desktop Processor with Radeon</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-4">
                        <p className='text-black'>Price৳</p>
                        <div className={`${styles.vertica} hidden md:block`}> </div>
                        <button className="btn  btn-outline btn-primary px-7">Choose</button>
                    </div>
                </section>

                {/* RAM Section */}
                <section className="pt-4 flex flex-col md:flex-row justify-between items-center border-blue-500 border-b pb-5">
                    <div className='flex flex-col md:flex-row items-center justify-start gap-3'>
                        <img className='w-16' src="https://png.pngtree.com/png-clipart/20190517/original/pngtree-vector-ram-icon-png-image_4015165.jpg" alt='' />
                        <div className="flex flex-col">
                            <p className='text-gray-900 text-sm'>RAM<span className='bg-gray-600 ml-1 px-1 text-white'>Required</span></p>
                            <p className='text-gray-900 text-sm'>AMD Athlon 200GE AM4 Socket Desktop Processor with Radeon</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-4">
                        <p className='text-black'>Price৳</p>
                        <div className={`${styles.vertica} hidden md:block`}> </div>
                        <Link href="/categories/ram">
                            <button className="btn  btn-outline btn-primary px-7">Choose</button>
                        </Link>
                    </div>
                </section>

                {/* Storage Section */}
                <section className="pt-4 flex flex-col md:flex-row justify-between items-center border-blue-500 border-b pb-5">
                    <div className='flex flex-col md:flex-row items-center justify-start gap-3'>
                        <img className='w-16' src="https://cdn-icons-png.flaticon.com/512/3566/3566546.png" alt='' />
                        <div className="flex flex-col">
                            <p className='text-gray-900 text-sm'>Storage<span className='bg-gray-600 ml-1 px-1 text-white'>Required</span></p>
                            <p className='text-gray-900 text-sm'>AMD Athlon 200GE AM4 Socket Desktop Processor with Radeon</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-4">
                        <p className='text-black'>Price৳</p>
                        <div className={`${styles.vertica} hidden md:block`}> </div>
                        <Link href="/categories/storage-device">
                            <button className="btn  btn-outline btn-primary px-7">Choose</button>
                        </Link>
                    </div>
                </section>

                {/* Monitor Section */}
                <section className="mt-4 flex flex-col md:flex-row justify-between items-center border-blue-500 border-b pb-5">
                    <div className='flex flex-col md:flex-row items-center justify-start gap-3'>
                        <img className='w-16' src="https://cdn-icons-png.flaticon.com/512/3474/3474360.png" alt='' />
                        <div className="flex flex-col">
                            <p className='text-gray-900 text-sm'>Monitor<span className='bg-gray-600 ml-1 px-1 text-white'>Required</span></p>
                            <p className='text-gray-900 text-sm'>AMD Athlon 200GE AM4 Socket Desktop Processor with Radeon</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-4">
                        <p className='text-black'>Price৳</p>
                        <div className={`${styles.vertica} hidden md:block`}> </div>
                        <Link href="/categories/monitor">
                            <button className="btn  btn-outline btn-primary px-7">Choose</button>
                        </Link>
                    </div>
                </section>

            </div>
        </div>
    )
}

export default PcBuilder
PcBuilder.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
    const res = await fetch("https://pc-builder-backend-mu.vercel.app/products");
    const data = await res.json();

    return {
        props: {
            productData: data,
        },
    };
}