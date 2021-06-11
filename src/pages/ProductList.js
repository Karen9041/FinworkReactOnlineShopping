import { Layout } from 'antd';
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import AppIntrofuction from "../components/Introduction"

// import ProductList from "../components/ProductList";
// import products from "../json/products.json";

const { Header, Content, Footer } = Layout;



function ProductPage() {
  return (
    <Layout className="container main-layout">
      <Header className="layout-header">
        <AppHeader/>
      </Header>
      <Content className="layout-content">
        <AppIntrofuction/>
      </Content>
      <Footer className="layout-footer">
        <AppFooter/>  
      </Footer>      
    </Layout>
  );
}

export default Home;
