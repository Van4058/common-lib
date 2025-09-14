// import React, { useState } from "react";
// import styles from "./AppSidebar.module.scss";
//
// interface MenuItem {
//     key: string;
//     label: string;
//     children?: MenuItem[];
// }
//
// const Sidebar: React.FC = () => {
//     const [collapsed, setCollapsed] = useState(false);
//     const [openKeys, setOpenKeys] = useState<string[]>([]);
//     const [activeKey, setActiveKey] = useState<string>("1");
//
//     const menuItems: MenuItem[] = [
//         { key: "1", label: "Dashboard" },
//         {
//             key: "2",
//             label: "Quản lý",
//             children: [
//                 { key: "2-1", label: "User" },
//                 { key: "2-2", label: "Role" },
//             ],
//         },
//         { key: "3", label: "Cài đặt" },
//     ];
//
//     const toggleCollapse = () => setCollapsed(!collapsed);
//
//     const handleSubmenuToggle = (key: string) => {
//         setOpenKeys((prev) =>
//             prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
//         );
//     };
//
//     const handleSelect = (key: string) => {
//         setActiveKey(key);
//     };
//
//     const renderMenu = (items: MenuItem[]) => (
//         <ul className={styles.menu}>
//             {items.map((item) => {
//                 const hasChildren = item.children && item.children.length > 0;
//                 const isOpen = openKeys.includes(item.key);
//                 const isActive = activeKey === item.key;
//
//                 return (
//                     <li
//                         key={item.key}
//                         className={`${styles.menuItem} ${isActive ? styles.active : ""} ${
//                             hasChildren ? styles.hasChildren : ""
//                         } ${isOpen ? styles.open : ""}`}
//                     >
//                         <div
//                             className={styles.menuTitle}
//                             onClick={() =>
//                                 hasChildren
//                                     ? handleSubmenuToggle(item.key)
//                                     : handleSelect(item.key)
//                             }
//                         >
//                             {item.label}
//                             {hasChildren && <span className={styles}>{isOpen ? "▲" : "▼"}</span>}
//                         </div>
//                         {hasChildren && isOpen && renderMenu(item.children!)}
//                     </li>
//                 );
//             })}
//         </ul>
//     );
//
//     return (
//         <div className={`${styles.sidebar} ${collapsed ? styles.collapsed : ""}`}>
//             <div className={styles.sidebarHeader}>
//                 <h2 className={styles.logo}>{collapsed ? "L" : "Logo"}</h2>
//                 <button className={styles.collapseBtn} onClick={toggleCollapse}>
//                     {collapsed ? "→" : "←"}
//                 </button>
//             </div>
//             <nav className={styles.sidebarMenu}>{renderMenu(menuItems)}</nav>
//         </div>
//     );
// };
//
// export default Sidebar;


import {Layout, Menu, type MenuProps} from "antd";
import * as React from "react";

const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
}));

const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
    (icon, index) => {
        const key = String(index + 1);

        return {
            key: `sub${key}`,
            icon: React.createElement(icon),
            label: `subnav ${key}`,
            children: Array.from({ length: 4 }).map((_, j) => {
                const subKey = index * 4 + j + 1;
                return {
                    key: subKey,
                    label: `option${subKey}`,
                };
            }),
        };
    },
);

export const AppSidebar: React.FC<{}> = () => {

    return (
        <Layout.Sider>
            <Menu
                mode="horizontal"
                defaultSelectedKeys={['2']}
                items={items1}
                style={{ flex: 1, minWidth: 0 }}
            />
        </Layout.Sider>
    )
}