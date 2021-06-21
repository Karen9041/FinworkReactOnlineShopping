import { Layout } from "antd";
import ShippingHeader from "../components/ShippingHeader";
import PaymentMethodCard from "../components/PaymentMethodCard";
import AppFooter from "../components/Footer";
import Appheader from "../components/Header"
const { Header, Content, Footer } = Layout;

function Payment() {
  return (
    <Layout className="container main-layout">
      <Header className="layout-header">
        <Appheader/>
      </Header>
      <Content className="layout-content">
        <ShippingHeader step1 step2 step3 />
        <PaymentMethodCard />
      </Content>
      <Footer className="layout-footer">
        <AppFooter />
      </Footer>
    </Layout>
  );
}

export default Payment;