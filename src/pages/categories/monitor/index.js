/* eslint-disable @next/next/no-img-element */
import RootLayout from "@/components/Layouts/RootLayout";
import { useAppDispatch } from "@/redux/features/hook";
import { addToPcBuilder } from "@/redux/features/pc-build/pc-builderCardSlice";

import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";

function MonitorPage({ allProducts }) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const monitor = allProducts?.filter((pro) => pro.category === "monitor");

  const handleAddToPCBuild = (product) => {
    dispatch(addToPcBuilder({ category: 'monitor', product }));
    toast.success('Product Added');
    router.push('/pc-builder');

  };

  return (
    <>
      <div>
        <h2 className="text-center text-orange-600 text-3xl font-bold my-4">
          All Monitor
          <div className="flex justify-center">
            <hr className="border-t-4 border-gray-900 w-1/6 my-4" />
          </div>
        </h2>
      </div>
      <div className="grid  grid-cols-1 md:grid-cols-3 gap-4 overflow-hidden">
        {monitor &&
          monitor?.map((product) => {
            const { title, img, price, status, category, rating } = product;
            return (
              <>
                  <div className="card w-96  shadow-xl mb-4">
                    <figure>
                      <img src={img} width="auto" height="250px" alt="Shoes" />
                    </figure>
                    <div className="card-body">
                      <p className="text-indigo-700 text-md">{status}</p>
                      <h2 className="card-title text-neutral-900">
                        {title}
                        <div className="text-orange-600 p-2">{price}৳</div>
                      </h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                      <div className="card-actions justify-start">
                        <div className="badge badge-outline text-indigo-700 py-2">
                          Category: {category}
                        </div>
                        <br />
                        <div className="badge badge-outline text-indigo-700 py-2">
                          Rating: {rating}
                        </div>
                      </div>
                      <button onClick={() => handleAddToPCBuild(product)} className="w-full btn-sm text-white text-xl rounded-md bg-orange-600">ADD TO PC-BUILD</button>
                    </div>
                  </div>
              </>
            );
          })}
        <ToastContainer />
      </div>
    </>
  )
}

export default MonitorPage;

MonitorPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};


export const getStaticProps = async () => {
  const res = await fetch("https://pc-builder-backend-mu.vercel.app/products");
  const data = await res.json();
  // console.log(data);

  return {
    props: {
      allProducts: data,
    },
    revalidate: 10,
  };
};
