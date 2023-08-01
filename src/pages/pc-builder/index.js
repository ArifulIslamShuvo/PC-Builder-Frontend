import RootLayout from '@/components/Layouts/RootLayout';
import React from 'react'
import { ShopOutlined,SaveOutlined } from "@ant-design/icons";
function PcBuilder() {
    return (
        <div className='flex justify-center items-center h-screen'>
            <div class="container mx-auto order border-blue-500 border-2 w-96 md:w-[55%] p-10 ">
                <header class="flex justify-between items-center border-blue-500 border-b pb-5">
                    <h1 class="text-xl md:text-2xl font-bold text-orange-600">PC Builder</h1>
                    <div class="flex gap-4">
                        <div class="flex flex-col">
                            <ShopOutlined className='text-orange-600 text-2xl' />
                            <p className='text-gray-900 font-bold'>Add to Cart</p>
                        </div>
                        <div class="flex flex-col">
                         <SaveOutlined className='text-orange-600 text-2xl' />
                            <p className='text-gray-900 font-bold'>Save PC</p>
                        </div>
                    </div>
                </header>

                <section class="mt-4">
                    <h2 class="text-xl font-bold">CPU</h2>
                    <ul class="dui-list dui-list-disc">
                        <li>Intel Core i9-12900K</li>
                        <li>AMD Ryzen 9 5950X</li>
                        <li>AMD Ryzen 7 5800X</li>
                    </ul>
                </section>

                <section class="mt-4">
                    <h2 class="text-xl font-bold">GPU</h2>
                    <ul class="dui-list dui-list-disc">
                        <li>NVIDIA GeForce RTX 3080 Ti</li>
                        <li>NVIDIA GeForce RTX 3070 Ti</li>
                        <li>AMD Radeon RX 6800 XT</li>
                    </ul>
                </section>

                <section class="mt-4">
                    <h2 class="text-xl font-bold">RAM</h2>
                    <ul class="dui-list dui-list-disc">
                        <li>32GB DDR4-3200</li>
                        <li>16GB DDR4-3200</li>
                        <li>8GB DDR4-3200</li>
                    </ul>
                </section>

                <section class="mt-4">
                    <h2 class="text-xl font-bold">Storage</h2>
                    <ul class="dui-list dui-list-disc">
                        <li>1TB Samsung 980 Pro</li>
                        <li>500GB Samsung 970 EVO Plus</li>
                        <li>2TB Seagate Barracuda</li>
                    </ul>
                </section>

                <section class="mt-4">
                    <h2 class="text-xl font-bold">Total Price</h2>
                    <div class="dui-collapse">
                        <div class="dui-collapse-content">
                            <p>The total price of your computer is \$3,000.</p>
                        </div>
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