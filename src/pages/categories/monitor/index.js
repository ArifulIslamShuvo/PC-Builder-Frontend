import React from "react";

function MonitorPage({ allProducts }) {

   


  return <div>index</div>;
}

export default MonitorPage;

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
