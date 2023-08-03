/* eslint-disable react-hooks/rules-of-hooks */
import RootLayout from "@/components/Layouts/RootLayout";
import { useAppDispatch } from "@/redux/features/hook";
import { addToPcBuilder } from "@/redux/features/pc-build/pc-builderCardSlice";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { toast } from "react-toastify";

function motherboardPage({ allProducts }) {
  const dispatch = useAppDispatch();
  const router = useRouter();
 const Motherboard = allProducts?.filter((pro) => pro.category === "motherboard");
 
 const handleAddToPCBuild = (product) => {
  dispatch(addToPcBuilder({ category: 'motherboard', product }));
  toast.success('Product Added');
  router.push('/pc-builder');

};


  return (
    <>
      <div>
        <h2 className="text-center text-orange-600 text-3xl font-bold my-4">
          All Motherboard
          <div className="flex justify-center">
            <hr className="border-t-4 border-gray-900 w-1/6 my-4" />
          </div>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 overflow-hidden">
        {Motherboard &&
          Motherboard?.map((product) => {
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
      </div>
    </>
  )
}

export default motherboardPage;

motherboardPage.getLayout = function getLayout(page) {
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


