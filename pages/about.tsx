import { Layout } from 'antd';
import { Fragment } from 'react';
import Header from '../components/Navbar/Website';

export default () => {
    // component logic

    return (
        <Fragment>
            <Header page={2} />
            <Layout.Content
                className='site-layout-background'
                style={{
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                }}
            >
                About us
            </Layout.Content>
        </Fragment>
    );
};
