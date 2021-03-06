import { LogoutOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';
import { AdminSiderMenuItems } from '../Menu';
import { useState } from 'react';

export default () => {
    // component logic
    const [selectedItem, selectMenuItem] = useState(null);

    const onSidebarCollapse = () => {
        //
    };

    const onSidebarExpand = () => {
        //
    };

    return (
        <Layout.Sider width={200} style={{ minHeight: '100%', boxShadow: 'rgba(0,0,0,0.3) 0px 0px 20px' }} theme='dark' collapsible>
            <section style={{ padding: '20px 20px 50px' }}>
                <LogoutOutlined color='white' />
            </section>

            <Menu
                theme='dark'
                mode='inline'
                defaultSelectedKeys={[selectedItem]}
                style={{ height: '100%', borderRight: 0 }}
                onSelect={(e) => {
                    selectMenuItem(e.key);
                }}
            >
                {AdminSiderMenuItems.map((item) => {
                    // manipulate items here
                    return (
                        <Menu.ItemGroup key={uuidv4()} title={item.title}>
                            {item.items.map((subItem) => {
                                // manipulate sub menu items here
                                return (
                                    <Menu.Item key={uuidv4()}>
                                        <Link passHref as={subItem.link} href={subItem.link}>
                                            <a>
                                                {subItem.icon} <span>{subItem.text}</span>
                                            </a>
                                        </Link>
                                    </Menu.Item>
                                );
                            })}
                        </Menu.ItemGroup>
                    );
                })}
            </Menu>
        </Layout.Sider>
    );
};
