import { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Row, Col, Button, Spin } from "antd";
import { LoadingOutlined } from '@ant-design/icons';
import { createOrder, resetOrder } from "../actions"
import { StoreContext } from "../store";

export default function PlaceOrderCard() {
  const { state: { cart, orderInfo: { loading, success, order } }, dispatch } = useContext(StoreContext);
  const { cartItems } = cart;
  const history = useHistory()
  const antIcon = <LoadingOutlined style={{ fontSize: 80, color: "#8183ff" }} spin />;

  const placeOrderHandler = () => {
    createOrder(dispatch, cart)
  };

  const getTotalPrice = () => {
    return (cartItems.length > 0) ?
      cartItems.reduce((sum, item) => sum + item.price * item.qty, 0)
      : 0;
  }

  const toPrice = (num) => Number(num.toFixed(2)); // 5.123 => "5.12" => 5.12
  cart.itemsPrice = toPrice(
    cart.cartItems.reduce((a, c) => a + c.qty * c.price, 0)
  );
  cart.shippingPrice = cart.itemsPrice > 100 ? toPrice(0) : toPrice(10);
  cart.taxPrice = toPrice(0.15 * cart.itemsPrice);
  cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice;

  useEffect(() => {
    if (success) {
      resetOrder(dispatch);
      // requestOrderDetail(dispatch, order.id)
      history.push(`/order/${order.id}`);
    }
  }, [success]);// eslint-disable-line react-hooks/exhaustive-deps  

  return (
    <div className="placeorder">
      {loading
        ? (
          <div className="spinner-wrap">
            <Spin indicator={antIcon} className="spinner" />
          </div>
        ) : (
          <>
            <Row gutter={[24, 24]}>
              <Col
                xs={{ span: 20, offset: 2 }}
                lg={{ span: 13, offset: 2 }}
              >
                <div className="card card-body">
                  <h3 className="card-title">訂購人資訊</h3>
                  <p>
                    <strong>姓名：</strong> {cart.shippingAddress.fullName} <br />
                    <strong>地址： </strong> {cart.shippingAddress.address} <br />
                    <strong>電子郵件： </strong> {cart.shippingAddress.Email} <br />
                    <strong>郵遞區號： </strong> {cart.shippingAddress.postalCode} <br />
                    <strong>手機號碼： </strong> {cart.shippingAddress.phone} <br />
                  </p>
                </div>
                <div className="card card-body">
                  <h3 className="card-title">訂購商品</h3>
                  {cartItems.length === 0 ? (
                    <div>購物車是空的喔！</div>
                  ) : (
                    cartItems.map(item => (
                      <li key={item.id} className="cart-item">
                        <div className="cart-image">
                          <img src={item.image} alt={item.name} />
                        </div>
                        <div className="cart-item-content">
                          <div className="cart-name">{item.name}</div>
                          <div className="product-qty">
                            數量： {item.qty}
                          </div>
                        </div>
                        <div className="cart-item-end">
                          <div className="cart-price">
                            ${item.price * item.qty}
                          </div>
                        </div>

                      </li>
                    ))
                  )}
                  <div className="cart-total-price-wrap">
                    總計
              <div className="cart-total-price">${getTotalPrice()}</div>
                  </div>
                </div>

              </Col>
            </Row>
            <div className="card-btn">
              <Button
                className="placeOrder-btn"
                type="primary"
                onClick={placeOrderHandler}
              >
                <h3>送出訂單</h3>
              </Button>
            </div>
          </>
        )
        
      }
    </div>

  );
}

