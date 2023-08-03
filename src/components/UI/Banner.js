/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

const Banner = () => {
    // const img = "https://www.datocms-assets.com/34299/1658894006-prebuilt-pcs-path-primary.png"
    const img = "https://electronicgears.com.pk/wp-content/uploads/2022/06/custom-pc-build-banner-demo.png"
 
    const { data: session } = useSession();
  return (
    <div>
      <div
       style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="hero h-screen md:h-[800px] bg-gray-600">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpWIe_-n8QJkCPB0sijEhMD0W_TaVolTGxfg&usqp=CAU"}
            className="max-w-sm rounded-lg shadow-2xl w-[90%] lg:w-[50%] mx-auto lg:mx-0 lg:ml-8"
          />
          <div className="w-full lg:w-[50%] mx-auto lg:mx-0">
            <h1 className="text-xl p-2 bg-white rounded-md text-green-600 xs:text-xs lg:text-5xl font-bold -z-20 relative">
              Welcome to Our PC Builder- 
              <span className="text-orange-600"> {session?.user?.name}</span>
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <Link href="/pc-builder">
            <button className="btn btn-primary">PC-BULID</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;