import Head from "next/head";
import RootLayout from "@/components/Layouts/RootLayout";
import AllProduct from "@/components/UI/AllProduct";


const HomePage = ({allProducts}) => {
  // console.log(allProducts);
  return (
    <>
      <Head>
        <title>PC-Builder</title>
        <meta
          name="description"
          content="This is PC-Builder website"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
      <AllProduct allProducts={allProducts} />

      </div>
      </>
  );
}; 
export default HomePage;

HomePage.getLayout = function getLayout(page) {
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