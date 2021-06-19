import { Layout } from 'antd';
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import ProductList from "../components/ProductList";
import { useContext } from "react";
import { StoreContext } from "../store"

const { Header, Content, Footer } = Layout;


function AllProducts() {
  const { state: { page: { products } }, dispatch } = useContext(StoreContext);
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
