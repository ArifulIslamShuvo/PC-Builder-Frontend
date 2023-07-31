import RootLayout from "@/components/Layouts/RootLayout";
import Link from "next/link";
import React from "react";

function powerSupplyUnitPage({ allProducts }) {

 const powerSupply = allProducts?.filter((pro) => pro.category === "Power Supply Unit");



  return (
    <>
      <div>
        <h2 className="text-center text-orange-600 text-3xl font-bold my-4">
        power Supply
          <div class="flex justify-center">
            <hr class="border-t-4 border-gray-900 w-1/6 my-4" />
          </div>
        </h2>
      </div>
      <div className="grid grid-cols-3 gap-4 overflow-hidden">
        {powerSupply &&
          powerSupply?.map((product) => {
            const { title, img, price, status, category, rating } = product;
            return (
              <>
                <Link href={`/products/${product?._id}`}>
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
                    </div>
                  </div>
                </Link>
              </>
            );
          })}
      </div>
    </>
  )
}

export default powerSupplyUnitPage;

powerSupplyUnitPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
  };

  
export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/products");
  const data = await res.json();
  // console.log(data);

  return {
    props: {
      allProducts: data,
    },
    revalidate: 10,
  };
};

