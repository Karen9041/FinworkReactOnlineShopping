import { Layout } from 'antd';
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import ProductList from "../components/ProductList";
import { useContext, useEffect } from "react";
import { StoreContext } from "../store"
import { getTitle } from "../utils";
import { setPage } from "../actions";

const { Header, Content, Footer } = Layout;


function AllProducts() {
  const { state: { page: { title } }, dispatch } = useContext(StoreContext);

  useEffect(() => {
    const url = window.location.pathname;
    setPage(dispatch, url, getTitle(url))
  }, []);// eslint-disable-line react-hooks/exhaustive-deps  
  return (
    <Layout className="container main-layout">
      <Header className="layout-header">
        <AppHeader title={title}/>
      </Header>
      <Content className="layout-content">
        <ProductList/>
      </Content>
      <Footer className="layout-footer">
        <AppFooter/>  
      </Footer>      
    </Layout>
  );
}

export default AllProducts;
