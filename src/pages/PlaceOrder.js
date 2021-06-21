import { Layout } from "antd";
import ShippingHeader from "../components/ShippingHeader";
import PlaceOrderCard from "../components/PlaceOrderCard";
import AppFooter from "../components/Footer";
import Appheader from "../components/Header"
const { Header, Content, Footer } = Layout;

function PlaceOrder() {
  return (
    <Layout className="container main-layout">
      <Header className="layout-header">
        <Appheader/>
      </Header>
      <Content className="layout-content">
        <ShippingHeader step1 step2 step3 step4 />
          <PlaceOrderCard />
      </Content>
      <Footer className="layout-footer">
        <AppFooter />
      </Footer>
    </Layout>
  );
}

export default PlaceOrder;
