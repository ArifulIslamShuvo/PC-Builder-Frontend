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

const RootLayout = ({ children }) => {
  const items = [
    {
      key: "1",
      label: <Link href="categories/processor">CPU / Processo</Link>,
    },
    {
      key: "2",
      label: <Link href="categories/motherboard">Motherboard</Link>,
    },
    {
      key: "3",
      label: <Link href="ategories/ram">RAM</Link>,
    },
    {
      key: "4",
      label: <Link href="ategories/power-supply-unit">Power Supply Unit</Link>,
    },
    {
      key: "5",
      label: <Link href="ategories/storage-device">Storage Device</Link>,
    },
    {
      key: "6",
      label: <Link href="categories/monitor">Monitor</Link>,
    },
    {
      key: "7",
      label: <Link href="ategories/others">Others</Link>,
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
              style={{
                color: "white",
                backgroundColor: "#404040",
                padding: "5px 10px",
                borderRadius: "3px",
              }}
            >
              PC-Builder
            </Link>
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
          </h1>
        </div>
        <Menu theme="dark" mode="vertical" className={styles.menu_items}>
          <Link href="/">
            <items className="flex  items-center justify-center gap-1">
              <ProfileOutlined />
              All Product
            </items>
          </Link>
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
