import { lime } from '@ant-design/colors';
import { SendOutlined } from '@ant-design/icons';
import { Layout, Space } from 'antd';
import React from 'react';
import './App.css';
import Text2Image from './components/Text2Image';

const { Header, Content, Footer } = Layout;

function App() {
  return (    
    <div className="App">
      <Layout>
        <Header style={{ backgroundColor: lime[7] }}>
          <div className='logo'>Demo</div>
        </Header>

        <Content style={{ padding: '0 50px'}}>          
            <Text2Image />
        </Content>
        
        <Footer>
          <Space size={"middle"}>
            <p>©Org 2023</p>
            <a href='mailto: somebody@email.com'><SendOutlined /></a>          
          </Space>                    
        </Footer>
      </Layout>
      
    </div>
  );
}

export default App;
