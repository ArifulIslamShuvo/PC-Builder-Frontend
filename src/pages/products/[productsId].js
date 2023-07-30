/* eslint-disable @next/next/no-img-element */
import { Col, Row } from "antd";
import {
  UserOutlined,
  CalendarOutlined,
  CommentOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import RootLayout from "@/components/Layouts/RootLayout";
import Image from "next/image";

const ProductDetailPage = ({ product }) => {
  const { title, descriptions, img, price, status, category, rating } = product;

  return (
    <div
      className="flex justify-center items-center p-32 h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="card lg:card-side shadow-xl">
        <figure>
          <img src={img} alt="Album" />
        </figure>
        <div className="card-body border border-t-2 border-lime-300 bg-lime-900 bg-opacity-75 w-96">
          <h2 className="card-title text-gray-50">{title}</h2>
          <div class="flex justify-center">
            <hr class="border-t-4 border-orange-600 w-full my-2" />
          </div>
          <p>
            <p className=" h-auto text-white">
              descriptions: {descriptions}
            </p>
            <p className="text-orange-600 py-2 text-xl">price: {price}৳</p>
            <p className="text-white py-2 text-xl">status: {status}</p>
            <div className="card-actions justify-start my-4">
              <div className="badge badge-outline text-lime-300 p-4">
                Category: {category}
              </div>
              <br />
              <div className="badge badge-outline text-lime-300 p-4">
                Rating: {rating}
              </div>
            </div>
          </p>

          <div className="card-actions justify-end">
            {/* <button className="btn ">Watch</button> */}
            <button className="btn bg-orange-600 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              Button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetailPage;

ProductDetailPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch(`http://localhost:5000/products`);
  const products = await res.json();

  const paths = products.map((product) => ({
    params: { productsId: product?.id },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `http://localhost:5000/products/${params?.productsId}`
  );
  const data = await res.json();
  // console.log(data);

  return {
    props: {
      product: data,
    },
  };
};
