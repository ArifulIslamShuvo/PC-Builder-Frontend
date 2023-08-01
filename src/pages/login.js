import React from 'react'
import { Button } from "antd";
import { GoogleOutlined, GithubOutlined } from "@ant-design/icons";
import Head from "next/head";
import styles from "@/styles/Login.module.css";
import RootLayout from '@/components/Layouts/RootLayout';

function login() {
  return (
    <div>
      <Head>
        <title>Sign-In</title>
      </Head>
      <div className='flex justify-center items-center '>
      <div className={styles.form}>
        <p className='text-3xl'>LOGIN</p>
        <div class="flex justify-center">
            <hr class="border-t-2 border-black w-40 my-2" />
          </div>
        <div className={styles.social_icons}>
          <GoogleOutlined />
          <div className={styles.vertica}> </div>
          <GithubOutlined />
        </div>
        <hr />
        <form className='pb-2'>
          <label htmlFor="">Your Email</label>
          <input type="email" />
          <label htmlFor="">Your Password</label>
          <input type="password" />
          <Button>Login</Button>
        </form>
      </div>
      </div>

    </div>
  )
}

export default login
login.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};