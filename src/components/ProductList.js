import { useContext } from "react";
import { Row, Col } from "antd";
import ProductItem from "./ProductItem";
import { StoreContext } from "../store";

export default function ProductList() {
  const { state: { page: { products } } } = useContext(StoreContext);
  return (
    <div className="Plist">
      <h1 className="Plist-title">-全部商品-</h1>
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
    </div>
  );
}

