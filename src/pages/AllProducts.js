import { Layout } from 'antd';
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import ProductList from "../components/ProductList";
import { useContext, useEffect } from "react";
import { StoreContext } from "../store"
import { getTitle } from "../utils";
import { setPage } from "../actions";
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

export default AllProducts;
