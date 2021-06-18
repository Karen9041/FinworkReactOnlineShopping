import { Modal, Button, InputNumber } from "antd";
import { useContext } from "react";
import { StoreContext } from "../store"
import { ADD_CART_ITEM, REMOVE_CART_ITEM } from "./utils/constants";


export default function CartModal({ isModalVisible, toggleModal }) {
   const { state: { cartItems }, dispatch } = useContext(StoreContext);
   const handleCancel = () => toggleModal(!isModalVisible);
   const addToCart = (product, qty) => {
      dispatch({
         type: ADD_CART_ITEM,
         payload: {
            id: product.id,
            name: product.name,
            image: product.image,
            price: product.price,
            countInStock: product.countInStock,
            qty,
         },
      });
   };

   const removeFromCart = (productId) => {
      dispatch({ type: REMOVE_CART_ITEM, payload: productId });
   };

   const getTotalPrice = () => {
      return (cartItems.length > 0) ?
         cartItems.reduce((sum, item) => sum + item.price * item.qty, 0)
         : 0;
   }

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
                  <div className="cart-image">
                     <img src={item.image} alt={item.name} />
                  </div>
                  <div className="cart-item-content">
                     <div className="cart-name">
                        <p>{item.name}</p>
                     </div>
                     <div className="cart-product-qty">
                        數量：
                        <InputNumber
                        className="select-style"
                        max={item.countInStock} 
                        defaultValue={item.qty}
                        onChange={(val) => addToCart(item, val)
                        }
                     />
                     </div>
                  </div>
                  <div className="cart-item-end">
                     <div className="cart-price">
                        ${item.price * item.qty}    
                     </div>
                     <div className="cart-item-delete" onClick={()=>removeFromCart(item.id)}>
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
         >
            <span >前往結帳</span>
         </Button>
      </Modal>
   );
}