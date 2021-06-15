import { Layout } from 'antd';
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import ProductList from "../components/ProductList";
import products from "../json/products.json";

const { Header, Content, Footer } = Layout;


function AllProducts() {
  return (
    <Layout className="container main-layout">
      <Header className="layout-header">
        <AppHeader/>
      </Header>
      <Content className="layout-content">
        <ProductList products={products} />
      </Content>
      <Footer className="layout-footer">
        <AppFooter/>  
      </Footer>      
    </Layout>
  );
}

export default AllProducts;