import { useEffect, useContext } from "react";
import { Button, notification } from "antd"
import { StoreContext } from "../store"
import { addCartItem } from "../actions";

export default function AddToCart() {
  const { state: { cartItems, productDetail: { product, qty } }, dispatch } = useContext(StoreContext);

  const openNotification = () => {
    notification.open({
      message: 'Shop Notification',
      description:
        `${qty} ${qty > 1 ? "pieces" : "piece"} of ${product.name} ${qty > 1 ? "have" : "has"} been added to your cart.`,
      onClick: () => {
        console.log('Notification Clicked!');
      },
      placement: 'bottomRight'
    });
  };

  const addToCart = () => {
    openNotification();
    addCartItem(dispatch, product, qty);
  };

  useEffect(()=>{
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems])


  return (
    <Button  type="primary" className="btn-tocar" onClick={addToCart}>
      <p>加入購物車</p>
    </Button>
  );
}
