import {Layout, Menu, type MenuProps, } from "antd";



export const AppHeader = () => {

    const items: MenuProps["items"] = [
        {
            label: 'Navigation One',
            key: 'mail',
            expandIcon: 'hehehe',
            // itemIcon:
        },
        {
            label: 'Navigation Two',
            key: 'app',
            // icon: <AppstoreOutlined />,
            disabled: true,
        },
        {
            label: 'Navigation Three - Submenu',
            key: 'SubMenu',
            // icon: <SettingOutlined />,
            children: [
                {
                    type: 'group',
                    label: 'Item 1',
                    children: [
                        { label: 'Option 1', key: 'setting:1' },
                        { label: 'Option 2', key: 'setting:2' },
                    ],
                },
                {
                    type: 'group',
                    label: 'Item 2',
                    children: [
                        { label: 'Option 3', key: 'setting:3' },
                        { label: 'Option 4', key: 'setting:4' },
                    ],
                },
            ],
        },
        {
            key: 'alipay',
            label: (
                <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                    Navigation Four - Link
                </a>
            ),
        },
    ];

    return (
        <Layout.Header>
            <div>Logo</div>
            <Menu
                mode={"horizontal"}
                items={items}
            />
            <div>Action</div>
        </Layout.Header>
    )
}