import { Layout } from "antd";
import ShippingHeader from "../components/ShippingHeader";
import Appheader from "../components/Header"
import AppFooter from "../components/Footer";
import ShippingAddressCard from "../components/ShippingAddressCard";
const { Header, Content, Footer } = Layout;

function Shipping() {
  return (
    <Layout className="container main-layout">
        <Header className="layout-header">
          <Appheader/>
        </Header>
        <Content className="layout-content">
          <ShippingHeader step1 step2 />
          <ShippingAddressCard />
        </Content>
        <Footer className="layout-footer">
          <AppFooter />
        </Footer>
    </Layout>
  );
}

export default Shipping;
