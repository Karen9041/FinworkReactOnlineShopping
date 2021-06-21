import { useContext } from "react";
import { Row, Col, Spin } from "antd";
import ProductItem from "./ProductItem";
import { StoreContext } from "../store";
import { LoadingOutlined } from '@ant-design/icons';

export default function ProductList() {
  const { state: { page: { products }, requestProducts: { loading } } } = useContext(StoreContext);
  const antIcon = <LoadingOutlined style={{ fontSize: 80, color: "#8183ff" }} spin />;
  return (
    <div className="Plist">
      <h1 className="Plist-title animate__animated animate__fadeIn">-全部商品-</h1>
      {loading
        ? (
          <div className="spinner-wrap">
            <Spin indicator={antIcon} className="spinner" />
          </div>
        ) : (
          <Row 
            gutter={[32, 32]}
            className="Plist-row"
          >
          {products.map(product => (
              <Col 
                key={product.id} 
                lg={{ span: 12 }} 
                xl={{ span: 8 }}
                xxl={{ span: 6 }}
              >
                <ProductItem product={product}/>
              </Col>
            ))}
          </Row>
        )
      }
    </div>
  );
}

