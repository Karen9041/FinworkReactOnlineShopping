import { Layout } from 'antd';
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import AppIntrofuction from "../components/Introduction"
import { BackTop } from 'antd';

const { Header, Content, Footer } = Layout;
const style = {
  height: 40,
  width: 40,
  lineHeight: '40px',
  borderRadius: 4,
  backgroundColor: '#000',
  color:'#fff',
  textAlign: 'center',
  fontSize: 14,
};

function Home() {
  return (
    <Layout className="container main-layout">
      <Header className="layout-header">
        <AppHeader/>
      </Header>
      <Content className="layout-content">
        <AppIntrofuction/>
        <BackTop>
          <div style={style}>UP</div>
        </BackTop>
      </Content>
      <Footer className="layout-footer">
        <AppFooter/>  
      </Footer>      
    </Layout>
  );
}

export default Home;
