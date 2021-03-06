import { Modal, Button, InputNumber } from "antd";
import { useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { StoreContext } from "../store"
import { addCartItem, removeCartItem, setProductDetail } from "../actions";

export default function CartModal({ isModalVisible, toggleModal }) {
   const { state: { cart: { cartItems } }, dispatch } = useContext(StoreContext);
   const history = useHistory();
   const handleCancel = () => toggleModal(!isModalVisible);
   const getTotalPrice = () => {
      return (cartItems.length > 0) ?
         cartItems.reduce((sum, item) => sum + item.price * item.qty, 0)
         : 0;
   }

   const checkoutHandler = () => {
      handleCancel();
      history.push("/login?redirect=shipping");
   }

   useEffect(() => {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
   }, [cartItems])

   return (
      <Modal
         title="購物車"
         visible={isModalVisible}
         onCancel={handleCancel}
         footer={null}
         className="cart"
      >
         {cartItems.length === 0 ? (
            <div>
               <p>購物車是空的喔！</p>
            </div>
         ) : (
            cartItems.map(item => (
               <li key={item.id} className="cart-item">
                  <Link to={`/product/${item.id}`}>
                     <div className="cart-image" onClick={()=>{
                        setProductDetail(dispatch, item.id, item.qty);
                        handleCancel();
                     }}>
                        <img src={item.image} alt={item.name} />
                     </div>
                  </Link>
                  <div className="cart-item-content">
                     <div className="cart-name">{item.name}</div>
                     <div className="cart-product-qty">
                        數量：
                        <InputNumber
                        className="select-style"
                        defaultValue={item.qty}
                        value={item.qty}
                        min={1}
                        onChange={(qty) => addCartItem(dispatch, item, qty)
                        }
                     >
                     </InputNumber>
                     </div>
                  </div>
                  <div className="cart-item-end">
                     <div className="cart-price">
                        ${item.price * item.qty}    
                     </div>
                     <div className="cart-item-delete" onClick={()=>removeCartItem(dispatch, item.id)}>
                        x
                     </div>
                  </div>

               </li>
            ))
         )}
         <div className="cart-total-price-wrap">
           總計：
            <div className="cart-total-price">${getTotalPrice()}</div>
         </div>
         <Button
            className="cart-modal-btn"
            type="primary"
            onClick={checkoutHandler}
         >
            <span >前往結帳</span>
         </Button>
      </Modal>
   );
}