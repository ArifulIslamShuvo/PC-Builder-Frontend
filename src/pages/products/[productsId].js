import { Col, Row } from "antd";
import {
  UserOutlined,
  CalendarOutlined,
  CommentOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import RootLayout from "@/components/Layouts/RootLayout";

const ProductDetailPage = ({product}) => {
  return(
    <div>
      <h1>this is product detail page: {product.title}</h1>
    </div>
  )
}
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
  const {params} = context;
  const res = await fetch(`http://localhost:5000/products/${params?.productsId}`);
  const data = await res.json();
  // console.log(data);

  return {
    props: {
      product:data
    },
  };
};
