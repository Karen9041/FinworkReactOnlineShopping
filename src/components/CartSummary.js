import { useState, useContext } from "react";
import { Badge } from "antd";
import { AiOutlineShoppingCart } from "react-icons/ai";
import CartModal from "./CartModal";
import { StoreContext } from "../store"

export default function CartSummary() {

  const { state: { cart: { cartItems } } } = useContext(StoreContext);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = () => setIsModalVisible(!isModalVisible);

  let count = (cartItems.length > 0) ?
    cartItems.reduce((sum, item) => sum + item.qty, 0)
    : 0;
    
  return (
    <>
      <nav onClick={toggleModal} className="header-cart-summary" >
        <Badge count={count} size={"small"} style={{ color: 'black', backgroundColor: 'white' }}>
          <AiOutlineShoppingCart className="header-shopping"/>
        </Badge>
      </nav>
      <CartModal
        isModalVisible={isModalVisible}
        toggleModal={toggleModal}
      />
    </>
  );
}
