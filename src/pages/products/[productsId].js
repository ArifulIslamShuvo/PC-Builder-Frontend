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
  const {
    title,
    descriptions,
    img,
    price,
    status,
    category,
    rating,
    key_features,
    individual_rating,
    average_rating,
    reviews,
  } = product;

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
          <div>
            <p className=" h-auto text-white">descriptions: {descriptions}</p>
            <div className="flex justify-center items-center py-2 text-md">
              <p className="text-white ">
                <span className="text-orange-600">price:</span> {price}৳
              </p>
              <p className="text-white   ">
                <span className="text-white">status:</span> {status}
              </p>
              <p className="text-white   ">
                <span className="text-orange-600">brand:</span>{" "}
                {key_features.brand}
              </p>
            </div>
            <p className="text-white  text-md ">
              {" "}
              <span className="text-orange-600">individual_rating:</span>{" "}
              {individual_rating}
            </p>
            <p className="text-white   text-md">
              {" "}
              <span className="text-orange-600">average_rating:</span>{" "}
              {average_rating}
            </p>

            <div className="flex justify-center items-center pb-2 text-md">
              <p className="text-white   ">
                {" "}
                <span className="text-orange-600">reviews:</span> {reviews}
              </p>
              <p className="text-white   ">
                <span className="text-orange-600">model:</span>{" "}
                {key_features.model}
              </p>
            </div>
            <p className="text-white   text-md">
              <span className="text-orange-600">resolution:</span>{" "}
              {key_features.resolution}
            </p>
            <div class="flex justify-center text-md">
              <hr class="border-t-4 border-orange-600 w-full my-2" />
            </div>
            <div className="card-actions justify-start my-2 text-md">
              <div className="badge badge-outline text-lime-300 p-4">
                Category: {category}
              </div>
              <br />
              <div className="badge badge-outline text-lime-300 p-4">
                Rating: {rating}
              </div>
            </div>
          </div>

          <div className="card-actions flex justify-center items-center">
            <p className="text-white text-2xl">
              <span className="text-orange-600 ">price:</span> {price}৳
            </p>
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
