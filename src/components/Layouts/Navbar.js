import {
    LogoutOutlined,
    LoginOutlined,
    DownOutlined,
} from "@ant-design/icons";
import { Button, Dropdown, Layout, Menu } from "antd";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";


function Navbar() {
    const { data: session } = useSession();

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
        <div className="navbar bg-base-100 px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <><Dropdown
                            menu={{
                                items,
                            }}
                            placement="bottomLeft"
                            arrow={{
                                pointAtCenter: true,
                            }}
                        >

                            <button className="text-white w-full flex items-center gap-3">
                                <p> Categories</p>
                                <DownOutlined />
                            </button>
                        </Dropdown></>

                        <Link href="/">
                            <Button className="text-white w-full mt-2">
                                Home-Page                            </Button>
                        </Link>
                        <Link href="/pc-builder">
                            <Button className="text-white w-full mt-2">
                                PC-BUILD
                            </Button>
                        </Link>
                    </ul>
                </div>
                <Link href="/" >
                    <span className="text-xl md:text-3xl text-orange-600 pt-2">PC-Builder</span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <div className="flex items-center justify-center gap-3">
                        <item>

                            <Link href="/">
                                <buttonr className="text-white text-xl  hover:scale-110 transform transition-transform duration-200 ease-in-out">
                                    Home-Page
                                </buttonr>
                            </Link>
                        </item>
                        <div className={styles.vertica}> </div>
                        <Dropdown
                            menu={{
                                items,
                            }}
                            placement="bottomLeft"
                            arrow={{
                                pointAtCenter: true,
                            }}
                        >
                            <button className="text-white text-xl flex items-center gap-2 hover:scale-110 transform transition-transform duration-200 ease-in-out">
                                <p> Categories</p>
                                <DownOutlined />
                            </button>
                        </Dropdown>
                        <div className={styles.vertica}> </div>
                        <Link href="/pc-builder">
                            <button className="text-white text-xl  hover:scale-110 transform transition-transform duration-200 ease-in-out">
                                PC-BUILD
                            </button>
                        </Link>
                    </div>
                </ul>
            </div>
            <div className="navbar-end">
                {/* <a className="btn">Button</a> */}
                <Menu theme="" mode="vertical" className={styles.menu_items}>
                    <div className="flex  items-center justify-center gap-3">
                        {!session?.user ? <Link href="/login">
                            <items className="flex  items-center justify-center gap-1  hover:scale-110 transform transition-transform duration-200 ease-in-out">
                                <LoginOutlined className="text-orange-600" />
                                Sign-In
                            </items>
                        </Link>
                            : <Link href="" onClick={() => signOut()}>
                                <items className="flex  items-center justify-center gap-1 hover:scale-110 transform transition-transform duration-200 ease-in-out">
                                    <LogoutOutlined className="text-orange-600 " />
                                    Sign-Out
                                </items>
                            </Link>
                        }
                    </div>
                </Menu>
            </div>
        </div >
    )
}

export default Navbar