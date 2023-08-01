import {
  ProfileOutlined,
  MobileOutlined,
  UserOutlined,
  FacebookFilled,
  LinkedinFilled,
  GoogleSquareFilled,
  TwitterSquareFilled,
} from "@ant-design/icons";
import { Button, Dropdown, Layout, Menu } from "antd";
const { Header, Content, Footer } = Layout;
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import {signOut, useSession } from "next-auth/react";



const RootLayout = ({ children }) => {
  // const { data: session } = useSession();
  // console.log(session);

  const items = [
    {
      key: "1",
      label: <Link href="/categories/processor">CPU / Processo</Link>,
    },
    {
      key: "2",
      label: <Link href="/categories/motherboard">Motherboard</Link>,
    },
    {
      key: "3",
      label: <Link href="/categories/ram">RAM</Link>,
    },
    {
      key: "4",
      label: <Link href="/categories/power-supply-unit">Power Supply Unit</Link>,
    },
    {
      key: "5",
      label: <Link href="/categories/storage-device">Storage Device</Link>,
    },
    {
      key: "6",
      label: <Link href="/categories/monitor">Monitor</Link>,
    },
    {
      key: "7",
      label: <Link href="/categories/others">Others</Link>,
    },
  ];

  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div className="brand-logo">
          <h1>
            <Link
              href="/"
              >
              <span className="text-3xl text-orange-600 pt-2">PC-Builder</span>
            </Link>
            
          </h1>
        </div>
        <Menu theme="dark" mode="vertical" className={styles.menu_items}>
         <div className="flex  items-center justify-center gap-3">
          <item>
         <Dropdown
              menu={{
                items,
              }}
              placement="bottomLeft"
              arrow={{
                pointAtCenter: true,
              }}
            >
              <Button
                style={{
                  color: "white",
                  backgroundColor: "#404040",
                  padding: "5px 10px",
                  borderRadius: "3px",
                  marginLeft: "10px",
                  
                }}
              >
                Categories
              </Button>
            </Dropdown>
          </item>
          <div className={styles.vertica}> </div>
         <Link href="/">
            <items className="flex  items-center justify-center gap-1">
              All Product
            </items>
          </Link>
          <div className={styles.vertica}> </div>
         <Link href="/">
            <items className="flex  items-center justify-center gap-1">
              PC-BUILD
            </items>
          </Link>
         </div>
        </Menu>
        <Menu theme="" mode="vertical" className={styles.menu_items}>
          <div className="flex  items-center justify-center gap-3">  
          <Link href="/login">
            <items className="flex  items-center justify-center gap-1">
              <ProfileOutlined />
             Sign-In
            </items>
          </Link>
          <Link href="" onClick={() => signOut()}>
            <items className="flex  items-center justify-center gap-1">
              <ProfileOutlined />
             Sign-Out
            </items>
          </Link>
          </div>
        </Menu>
        
      </Header>
      <Content
        style={{
          padding: "0 24px",
          minHeight: "100vh",
        }}
      >
        {children}
      </Content>

      <Footer
        style={{
          textAlign: "center",
        }}
      >
        <div className={styles.line}></div>
        <h2
          style={{
            fontSize: "28px",
          }}
        >
          PC-BUILDER
        </h2>
        <p className={styles.social_icons}>
          <Link href="https://web.facebook.com/groups/programmingherocommunity">
            <FacebookFilled />
          </Link>
          <Link href="www.twitter.com">
            <TwitterSquareFilled />
          </Link>
          <Link href="https://web.programming-hero.com/home/">
            <GoogleSquareFilled />
          </Link>
          <Link href="www.linkedin.com">
            <LinkedinFilled />
          </Link>
        </p>
        PC_BUILDER ©2023 Created by Programming Hero Student
      </Footer>
    </Layout>
  );
};
export default RootLayout;
