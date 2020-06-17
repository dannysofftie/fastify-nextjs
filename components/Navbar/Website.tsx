import { Layout, Menu } from 'antd';
import Link from 'next/link';

export default (props) => {
    // component logic

    return (
        <Layout.Header className='header'>
            <Link href='/' passHref>
                <a className='logo'>Logo</a>
            </Link>

            <Menu mode='horizontal' style={{ textAlign: 'right' }} defaultSelectedKeys={[`${props.page}`]}>
                <Menu.Item key='2'>
                    <Link href='/about'>
                        <a>About Us</a>
                    </Link>
                </Menu.Item>
                <Menu.Item key='3'>
                    <Link href='/signin'>
                        <a>Sign In</a>
                    </Link>
                </Menu.Item>
                <Menu.Item key='4'>
                    <Link href='/account'>
                        <a>Dashboard</a>
                    </Link>
                </Menu.Item>
            </Menu>
        </Layout.Header>
    );
};
