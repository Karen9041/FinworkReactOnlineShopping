import { useContext, useEffect } from "react";
import { Layout } from 'antd';
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import ProductDetail from "../components/ProductDetail";
import { setProductDetail } from "../actions";
import { StoreContext } from "../store"
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

function Product({ match }) {
   const { dispatch } = useContext(StoreContext);
   useEffect(() => {
      setProductDetail(dispatch, match.params.productId, 0, match.params.category)
   }, [])// eslint-disable-line react-hooks/exhaustive-deps
   return (
      <Layout className="container main-layout">
         <Header className="layout-header">
            <AppHeader />
         </Header>
         <Content className="layout-content">
            <ProductDetail />
            <BackTop>
               <div style={style}>UP</div>
            </BackTop>
         </Content>
         <Footer className="layout-footer">
            <AppFooter />
         </Footer>
      </Layout>
   );
}

export default Product;
