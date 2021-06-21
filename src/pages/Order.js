import { Layout } from "antd";
import OrderHeader from "../components/OrderHeader";
import OrderCard from "../components/OrderCard";
import AppFooter from "../components/Footer";
import Appheader from "../components/Header"
const { Header, Content, Footer } = Layout;

function Order({ match }) {

   return (
    <Layout className="container main-layout">
      <Header className="layout-header">
        <Appheader/>
        <OrderHeader title={`Order: ${match.params.orderId}`} />
      </Header>
      <Content className="layout-content">
          <OrderCard order={match.params.orderId} />
      </Content>
      <Footer className="layout-footer">
        <AppFooter />
      </Footer>
    </Layout>
  );
}

export default Order;
