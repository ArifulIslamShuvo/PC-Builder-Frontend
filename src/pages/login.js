import React from 'react'
import { Button } from "antd";
import { GoogleOutlined, GithubOutlined } from "@ant-design/icons";
import Head from "next/head";
import styles from "@/styles/Login.module.css";
import RootLayout from '@/components/Layouts/RootLayout';
import { signIn, useSession } from 'next-auth/react';

function NextAuth() {
  const { data: session } = useSession();
  return (
    <div>
      <Head>
        <title>Sign-In</title>
      </Head>
      <div className='flex justify-center items-center '>
        <div className={styles.form}>
          <p className='text-3xl'>LOGIN</p>
          <div className="flex justify-center">
            <hr className="border-t-2 border-black w-40 my-2" />
          </div>
          <div className={styles.social_icons}>
            <GoogleOutlined className={styles.icon}
              onClick={() =>
                signIn("google", {
                  callbackUrl: "http://localhost:3000/",
                })
              } />
            <div className={styles.vertica}> </div>
            <GithubOutlined className={styles.icon}
              onClick={() =>
                signIn("github", {
                  callbackUrl: "http://localhost:3000/",
                })
              } />
          </div>
          <hr />
          <form className='pb-2'>
            <label htmlFor="">Your Email</label>
            <input type="email" />
            <label htmlFor="">Your Password</label>
            <input type="password" />
            <button className='btn-sn rounded-md bg-orange-600 py-1'>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default NextAuth

NextAuth.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};